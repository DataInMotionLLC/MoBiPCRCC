v = require('cloud/V3Call.js');
x = require('cloud/Gen34PCR.js');
u = require('cloud/Utilities.js');
v3CT = require('cloud/V3CodeText.js');
v2 = require('cloud/V2Call.js');
pdf = require('cloud/ThePDF.js');
ht = require('cloud/PCRhtml.js');
callMetrix = require('cloud/CallMetrix.js');
crewMetrix = require('cloud/CrewMetrix.js');
rules = require('cloud/CallRules.js');
ver2XML = require('cloud/Version2XML.js');
summary = require('cloud/Summary.js');
var moment = require('moment');
SendMail = require('cloud/SendeMail.js');
var client = require('cloud/myMailModule-1.0.0.js');

Parse.Cloud.afterSave("PCR", function (request) {
    console.log("In PCR")
    //var p = getPCR(request.object.id);
    //console.log("End " + p)
    //p.then(function (results) {
    //    console.log("restults " + results)
    //});
});


//Parse.Cloud.afterSave("HTMLClass", function (request) {
//    console.log(request)
//    console.log("In the HTMLClass " + request.object.get('PCRID'))
//    var p = getPCR(request.object.get('PCRID'));
//    //console.log("End " + p)
//    //p.then(function (results) {
//    //    console.log("restults " + results)
//    //});
//});


//Parse.Cloud.afterSave("EMSDataset", function (request) {
//    console.log("In EMSDataset")
//        //var cm = Parse.Object.extend("PCR");
//        //var query = new Parse.Query(cm);
//        //query.equalTo("PCRID", request.object.pcrID);
//        ////return query.find({
//        //return query.first({
//        //    success: function (results) {
//        //        console.log("resutlts of PCRID " + results)
//        //    },
//        //    error: function (error) { }
//        //});

    
//    //var p = getPCR(request.object.id);
//    //console.log("End " + p)
    
//});




Parse.Cloud.define("getHTML", function (request, response) {
    var d = {}
    //var e = getHTML("tGHIYt5l1e")
    //e.then(function (er) {
    //    response.success(er)
    //});
    
    var e = sendIt("tGHIYt5l1e")
    e.then(function (er) {
        response.success(er)
    });
    //response.success("er")
});




Parse.Cloud.define("getPCR", function (request, response) {
//var getPCR = function (pcrID, status) {
    console.log("In Get PCR With everything")
    var pcrStatus = "Open"
    var TheCallObject = new Object();
    var _status = ""
    if ((typeof status != 'undefined') && (status != ""))
    { TheCallObject.Status = status; }
    else
    {TheCallObject.Status = "INPROCESS"}
    
    u.setBuild("Start")
    //if (typeof request.params.PCRID !== 'undefined') {
        var _pcrID = 'tGHIYt5l1e'
    //}
    //else {
    //    response.success("Missing PCRID");
    //};
    u.setBuild("FetchBusinessObject")

    var eList = getAll();
    eList.then(function (elements)
    {
        x.Genv34.getObj(_pcrID).then(function (rawParse) {
            if (typeof rawParse.attributes === 'undefined') {
                //response.success("Failed Fetch: rawParse")
                return ("Failed Fetch: rawParse")
            };
            if (typeof rawParse.attributes.agencyId === 'undefined') {
                //response.success("Missing Agency")
                return ("Missing Agency")
            };
            var _agencyID = rawParse.attributes.agencyId;    //Prime it.  No Agency ID, no go
            TheCallObject.AgencyID = _agencyID;

            u.setBuild("GetAgency");
            var p = getAgency(_agencyID);
            p.then(function (results) {
                if (typeof rawParse.attributes.emsDataSet === 'undefined') {
                    return ("Fetch Failure:  emsDataSet")
                };
                TheCallObject.PCRObject = rawParse.attributes.emsDataSet;   //Set the Business Entity
                var ElementList = [];                                       //Config Lis
                for (var i = 0; i < elements.length ; i++) {
                    var Element = new Object();
                    Element.Number = elements[i].attributes.ElementNumber;
                    Element.ElementName = elements[i].attributes.ElementName;
                    Element.Usage = elements[i].attributes.Usage;
                    if (elements[i].attributes.NVList.length > 0) {
                        Element.NVList = elements[i].attributes.NVList
                    };

                    if (elements[i].attributes.PNList.length > 0) {
                        Element.PNList = elements[i].attributes.PNList
                    };

                    if (elements[i].attributes.IsNillable.length > 0) {
                        Element.IsNillable = elements[i].attributes.IsNillable
                    };
                    ElementList.push(Element)//Populate Configurations
                };
                TheCallObject.NEMSISElements = ElementList;                 //Bind Configurations to Business Entity
                try {
                    u.setBuild("BeginGenPCRObject");
                    var _v3 = v.setTheCall(TheCallObject)                    //Get Attribute List
                    TheCallObject.V3 = _v3;                                  //Assign Attributes to Business Entity                                    
                    TheCallObject.ObjectList = _v3.RawPCRObjects;
                }
                catch (e) {
                    u.RaiseError("Failed generating PCR Object", 0, "TheCall.setV3Call", e);
                };


                try {
                    console.log("SetCallProperties");
                    u.setBuild("SetCallProperties");
                    var _v3E = v3CT.setV3English(TheCallObject);             //Reporting Payload
                    console.log("v3CT.setV3English(TheCallObject)")
                    TheCallObject.Props = _v3E;
                    TheCallObject.PCRID = _pcrID;
                    TheCallObject.Props.PCRID = _pcrID;
                    try {
                        var _Summary = summary.setCallSummary(TheCallObject)
                        TheCallObject.Summary = _Summary;
                    }
                    catch (e) {
                        u.RaiseError("Failed generating Summary Object", 0, "TheCall.setCallSummary", e);
                    };

                    var tmp = rules.setCallRules(TheCallObject.Props);
                    var htmltext = ht.setHTML(TheCallObject)                //AsIs HTML Document
                    TheCallObject.HTMLDoc = htmltext;
                    var htmlBytes = htmltext.getBytes();
                    TheCallObject.HTML = htmlBytes;

                }
                catch (e) {
                    u.RaiseError("Failed generating Reporting Object", 0, "TheCall.setV3English", e);
                };
                //var callM = setCallMetrix(_pcrID)
                //callM.then(function (ddr) {
                //    //    //If the call is well-formed, build it.
                //    //    ////////////////////////////////////////////////
                //    //    ////////////////////////////////////////////////
                //    var o1 = new Array();
                //    o1 = u.getFatalErrors();
                //    if (o1.length === 0) {
                //        var BuildStatus = "SUCCESS"
                //    }
                //    else {
                //        var BuildStatus = "FAILED Fatal Error Count: " + o1.length;
                //    };
                //    TheCallObject.BuildStatus = BuildStatus;
                //    //    ////////////////////////////////////////////////
                //    ////////////////////////////////////////////////
                //    //var p1 = SaveTheHTML(TheCallObject);
                //    var p1 = saveHTMLClass(TheCallObject);
                //    p1.then(function () {
                //        if (status !== "COMPLETE") {
                //            try {
                //                var dc = pdf.NewPDF(TheCallObject);
                //                TheCallObject.PDF = dc;
                //            }
                //            catch (e) {
                //                u.RaiseError("Failed generating PDF ", 0, "TheCall.setV2Call", e);
                //            };

                //            if (typeof TheCallObject.Props !== 'undefined') {
                //                try {
                //                    TheCallObject.Version2 = v2Object;
                //                    var v2Object = v2.setV2Call(TheCallObject);
                //                    var v2XML = ver2XML.setV2XML(v2Object);
                //                    TheCallObject.v2XML = v2XML;
                //                    var version2XMLByteArray = v2XML.getBytes();
                //                    TheCallObject.XML = version2XMLByteArray;
                //                }
                //                catch (e) {
                //                    u.RaiseError("Failed generating Verson 2 Object", 0, "TheCall.setV2Call", e);
                //                }
                //            };
                //            var p = SaveThePDF(TheCallObject);
                //            p.then(function () {
                //                //If Has Crew, Save Crew
                //                if ((typeof TheCallObject.Props["Crew"] !== 'undefined') && (TheCallObject.Props["Crew"] > 0)) {
                //                    var cMet = crewMetrix.setCrewMetrix(TheCallObject);
                //                    cMet.then(function (ceM) {
                //                        if (typeof TheCallObject.XML !== 'undefined') {
                //                            var cXML = SaveTheXML(TheCallObject);
                //                            cXML.then(function (Txml) {
                //                                u.setBuild("EndTime");
                //                                var FatalE = u.getFatalErrors;
                //                                var TimeE = u.getTimeErrors;
                //                                var WarningsE = u.getWarnings;
                //                                var CallLogE = u.getCallLog;
                //                                var TheEvent = new Object();
                //                                if (FatalE.length > 0) {
                //                                    TheEvent.Status = "Errors"
                //                                };
                //                                if (TimeE.length > 0) {
                //                                    TheEvent.TimeErrors = TimeE;
                //                                };
                //                                if (WarningsE.length > 0) {
                //                                    TheEvent.Warningss = WarningsE;
                //                                };
                //                                if (typeof Summary !== 'undefined') {
                //                                    TheEvent.Summary = Summary;
                //                                };
                //                                //                                    var y = sendIt(TheCallObject)
                //                                //                                    y.then(function (theMail) {

                //                                //                                        var tom = sendToTom(TheCallObject)
                //                                //                                        tom.then(function (theTom)
                //                                //                                        {                                                                                                
                //                                //                                        });
                //                                //                                    });

                response.success(TheCallObject)

                //                            }, function (error) {
                //                            });
                //                        }


                //                    }, function (error) {
                //                    });
                //                }
                //                else {
                //                    return ("Incomplete Call.  Missing Crew");
                //                };
                //            }, function (error) {
                //            });
                //        }
                //        else {
                //        };
                //    }, function (error) {
                //    });
                //}, function (error) {
                //});
            }, function (error) {
            });
        }, function (error) {
        });
    }, function (error)
    { });
});


var SaveTheXML = function (tc) {
    var file = new Parse.File(tc.PCRID + ".XML", tc.XML);
    return file.save().then(function () {
        var TheXML = Parse.Object.extend("XMLClass");
        var txml = new TheXML();
        txml.set("PCRID", tc.PCRID);
        txml.set("XML", file);
        txml.save()
    })
};


var SaveThePDF = function (TheCall) {
    var file = new Parse.File(TheCall.PCRID + ".PDF", TheCall.PDF);
    return file.save().then(function () {
        var ThePCR = Parse.Object.extend("PDFClass");
        var tpcr = new ThePCR();
        tpcr.set("PCRID", TheCall.PCRID);
        tpcr.set("PDF", file);
        tpcr.save()
    })
};
var getAll = function () {
    var PCR = Parse.Object.extend("NemsisHeader");
    var query = new Parse.Query(PCR);
    query.equalTo("DatasetName", "EMSDataSet");
    query.limit(1000)
    return query.find({
        success: function (results) { },
        error: function (error) { }
    });
};
var getCallMtx = function (pcrId) {
    var cm = Parse.Object.extend("CallMetrix");
    var query = new Parse.Query(cm);
    query.equalTo("PCRID", pcrId);
    //return query.find({
    return query.first({
        success: function (results) { },
        error: function (error) { }
    });
};

var getHTMLObject = function (pcrId) {
    var cm = Parse.Object.extend("HTMLClass");
    var query = new Parse.Query(cm);
    query.equalTo("PCRID", pcrId);
    //return query.find({
    return query.first({
        success: function (results) { },
        error: function (error) { }
    });
};


var getAgency = function () {
    var Agency = Parse.Object.extend("Agency");
    var query = new Parse.Query(Agency);
    query.equalTo("DatasetName", "EMSDataSet");
    query.limit(1000)
    return query.find({
        success: function (results) { },
        error: function (error) { }
    });
};
String.prototype.getBytes = function () {
    var bytes = [];
    for (var i = 0; i < this.length; ++i) {
        bytes.push(this.charCodeAt(i));
    }
    return bytes;
};
var setCallMetrix = function (pcrid) {
    var cmID = null;
    var callmetrix = Parse.Object.extend("CallMetrix");
    var query = new Parse.Query(callmetrix)
    query.equalTo("PCRID", pcrid);
    return query.find(
        {
            success: function (results) {
                if (results.length > 0) {
                    cmID = results[0].id
                }
                else {
                    cmID = "";
                }
            },
            error: function (user, error) {
                console.warn('Error ' + error.code + ': ' + error.message);
            }
        }).then(
    function (object) {

        var cm = new callmetrix();
        if (cmID !== null) {
            cm.set("objectId", cmID);
        };
        cm.set("PCRID", pcrid);
        cm.set("RespAgencyName", "So this is he Greatest Test Agency");
        cm.set("PaymentType", "Sat Payment Type");
        cm.save(null, {
            success: function (myClass) {
                console.log(myClass.id)
            },
            error: function (myCall, error) {
                alert('Failed to create new object, with error code: ' + error.message);
            }
        });
    }

    ,
    function (error) {
        console.log('Error ' + error.code + ': ' + error.message);
    })
};


var sendIt = function (tc) {
    var sub = tc;
    var h = tc.HTMLDoc;
    //var e = getHTML(tc.Props.PCRID)
    //e.then(function (er) {
       
    client.initialize('mg.datainmotionllc.com', 'key-dd6c965d8a32b0a4db474a678e02de87');

    return client.sendEmail({
        to: 'arner.derek@gmail.com',        
        cc: 'yintothayang@gmail.com',
        from: "MyMail@DataInMotion.com",
        subject: tc.Props.DispatchComplaint,
        generateTextFromHTML: true,        
        html: h
    }).then(function (httpResponse) {
        console.log("Update CallMetrix with Sent Date/Status")
            return httpResponse
        });
    // });
};
var getHTML = function (pcr) {
    var html = Parse.Object.extend("HTMLClass");
    var query = new Parse.Query(html);
    query.equalTo("PCRID", pcr);
    query.limit(1)
    return query.find({
        success: function (results) { },
        error: function (error) { }
    });
};

var sendToTom = function (tc) {
    return Parse.Cloud.httpRequest({
        method: 'POST',
        url: 'http://dev.datainmotionllc.com/api/v1/pcr',
        headers: { 'Content-Type': 'text/xml' },
        dataType: "xml",
        body: tc.V2XML

    }).then(function (httpResponse) {
        console.log("RES: " + httpResponse.text);
    }, function (httpResponse) {
        console.error('Request failed with response code ');
    })
};


var saveHTMLClass = function (TheCall) {

    var _htmlID = null;
    var htm = Parse.Object.extend("HTMLClass");
    var query = new Parse.Query(htm)
    var _pcrid = TheCall.PCRID;
    query.equalTo("PCRID", _pcrid);
    return query.find(
        {
            success: function (results) {
                if (results.length > 0) {
                    _htmlID = results[0].id
                }
                else {
                    _htmlID = null;
                }
            },
            error: function (user, error) {
                console.warn('Error '  + error.message);
            }
        }).then(
    function (object) {

        var ht = new htm();
        if (_htmlID !== null) {
            ht.set("objectId", _htmlID);
        };


        var file = new Parse.File(TheCall.PCRID + ".HTML", TheCall.HTML);
        return file.save().then(function () {                        
            ht.set("PCRID", TheCall.PCRID);
            ht.set("Complaint", TheCall.Props["DispatchComplaint"]);
            ht.set("HTML", file);
            ht.save()
        });
        return null
    }
    
    ,
    function (error) {
        console.log('Error ' + error.code + ': ' + error.message);
    })
};





