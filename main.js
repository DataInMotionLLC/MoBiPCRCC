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

    var pcrStatus = "Open"
    var TheCallObject = new Object();
    u.setBuild("Start")

    if (typeof request.params.PCRID !== 'undefined') {
        var _pcrID = request.params.PCRID
    }
    else {
        response.success("Missing PCRID");
    };
    u.setBuild("FetchBusinessObject")

    var eList = getAll();
    eList.then(function (elements) {
        x.Genv34.getObj(_pcrID).then(function (rawParse) {
            if (typeof rawParse.attributes === 'undefined') {
                response.success("Failed Fetch: rawParse")
            };
            if (typeof rawParse.attributes.agencyId === 'undefined') {
                response.success("Missing Agency")
            };
            var _agencyID = rawParse.attributes.agencyId;    //Prime it.  No Agency ID, no go
            TheCallObject.AgencyID = _agencyID;

            u.setBuild("GetAgency")
            var p = getAgency(_agencyID);
            p.then(function (results) {
                if (typeof rawParse.attributes.emsDataSet === 'undefined') {
                    response.success("Fetch Failure:  emsDataSet")
                };
                TheCallObject.PCRObject = rawParse.attributes.emsDataSet;   //Set the Business Entity
                var ElementList = [];                                       //Config List
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

                //Set Entity ID (Call ID)
                ////////////////////////////////////////////////
                try {
                    u.setBuild("SetCallProperties");
                    var _v3E = v3CT.setV3English(TheCallObject);             //Reporting Payload
                    TheCallObject.Props = _v3E;
                    TheCallObject.Props.PCRID = _pcrID;
                    try {
                        var _Summary = summary.setCallSummary(TheCallObject)
                        TheCallObject.Summary = _Summary;
                    }
                    catch (e) {
                        u.RaiseError("Failed generating Summary Object", 0, "TheCall.setCallSummary", e);
                    }

                    TheCallObject.PCRID = _pcrID;
                    var tmp = rules.setCallRules(TheCallObject.Props);
                    var htmltext = ht.setHTML(TheCallObject)                //AsIs HTML Document
                    TheCallObject.HTMLDoc = htmltext;
                    var htmlBytes = htmltext.getBytes();
                    TheCallObject.HTML = htmlBytes;

                }
                catch (e) {
                    u.RaiseError("Failed generating Reporting Object", 0, "TheCall.setV3English", e);
                };
                var callM = setCallMetrix(_pcrID)
                callM.then(function (ddr) {
                    //    //If the call is well-formed, build it.
                    //    ////////////////////////////////////////////////
                    //    ////////////////////////////////////////////////
                    var o1 = new Array();
                    o1 = u.getFatalErrors();
                    if (o1.length === 0) {
                        var BuildStatus = "SUCCESS"
                    }
                    else {
                        var BuildStatus = "FAILED Fatal Error Count: " + o1.length;
                    };
                    TheCallObject.BuildStatus = BuildStatus;
                    //    ////////////////////////////////////////////////
                    //    ////////////////////////////////////////////////
                    var p1 = SaveTheHTML(TheCallObject);
                    p1.then(function () {

                        if (TheCallObject.BuildStatus !== "SUCCESS") {
                            try {
                                console.log("PDFing")
                                var dc = pdf.NewPDF(TheCallObject);
                                TheCallObject.PDF = dc;
                                console.log("After PDFing")
                            }
                            catch (e) {
                                u.RaiseError("Failed generating PDF ", 0, "TheCall.setV2Call", e);
                            };

                                    if (typeof TheCallObject.Props !== 'undefined') {
                                        try {
                                            TheCallObject.Version2 = v2Object;
                                            var v2Object = v2.setV2Call(TheCallObject);
                                            var v2XML = ver2XML.setV2XML(v2Object);
                                            TheCallObject.v2XML = v2XML;
                                            var version2XMLByteArray = v2XML.getBytes();
                                            TheCallObject.XML = version2XMLByteArray;
                                        }
                                        catch (e) {
                                            u.RaiseError("Failed generating Verson 2 Object", 0, "TheCall.setV2Call", e);
                                        }
                                    };
                                    var p = SaveThePDF(TheCallObject);
                                    p.then(function () {
                                        //If Has Crew, Save Crew

                                        var cMet = crewMetrix.setCrewMetrix(TheCallObject);
                                        cMet.then(function (ceM) {
                                            if (typeof TheCallObject.XML !== 'undefined') {
                                                var cXML = SaveTheXML(TheCallObject);
                                                cXML.then(function (Txml) {
                                                    u.setBuild("EndTime");
                                                    var FatalE = u.getFatalErrors;
                                                    var TimeE = u.getTimeErrors;
                                                    var WarningsE = u.getWarnings;
                                                    var CallLogE = u.getCallLog;
                                                    var TheEvent = new Object();
                                                    if (FatalE.length > 0) {
                                                        TheEvent.Status = "Errors"
                                                    };
                                                    if (TimeE.length > 0) {
                                                        TheEvent.TimeErrors = TimeE;
                                                    };
                                                    if (WarningsE.length > 0) {
                                                        TheEvent.Warningss = WarningsE;
                                                    };
                                                    if (typeof Summary !== 'undefined') {
                                                        TheEvent.Summary = Summary;
                                                    };
                                                    var y = sendIt(TheCallObject)
                                                    y.then(function (theMail) {
                                                        
                                                    });
                                                    response.success(TheCallObject);

                                                }, function (error) {
                                                });
                                            }
                                        }, function (error) {
                                        });
                                    }, function (error) {
                                    });
                                }
                                else {
                            //        //response.success(TheCallObject);
                        };
                    }, function (error) {
                    });
                }, function (error) {
                });
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

var SaveTheHTML = function (TheCall) {
    var file = new Parse.File(TheCall.PCRID + ".HTML", TheCall.HTML);
    return file.save().then(function () {
        var ThePCR = Parse.Object.extend("HTMLClass");
        var tpcr = new ThePCR();
        tpcr.set("PCRID", TheCall.PCRID);
        tpcr.set("Complaint", TheCall.Props["DispatchComplaint"]);
        tpcr.set("HTML", file);
        tpcr.save()
    })
};
var SaveThePDF = function (TheCall) {
    var file = new Parse.File(TheCall.PCRID + ".PDF", TheCall.HTML);
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
    console.log("getCallMtx  "+  pcrId)
    var cm = Parse.Object.extend("CallMetrix");
    var query = new Parse.Query(cm);
    query.equalTo("PCRID", pcrId);
    //return query.find({
    return query.first({
        success: function (results) { },
        error: function (error) { }
    });
};
var getCrewMtx = function (pcrId) {
    console.log("getCrewMtx " + pcrId)
    var cm = Parse.Object.extend("CrewMetrix");
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
                if (results.length > 0)
                {                            
                    cmID = results[0].id
                }
                else
                {
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
    function (error)
    {
        console.log('Error ' + error.code + ': ' + error.message);
    })
};


var sendIt = function (tc) {
    var sub = tc;
    var h = tc.HTMLDoc;
    //var e = getHTML(tc.Props.PCRID)
    //e.then(function (er) {
       
    client.initialize('mg.datainmotionllc.com', 'key-dd6c965d8a32b0a4db474a678e02de87');

     
    //var attch = new mailgun.Attachment({
    //    data: imgStream,
    //    filename:'myFileName.html',
    //    contentType: 'image/png',
    //    knownLength: 6486
    //});

    return client.sendEmail({
        to: 'arner.derek@gmail.com',        
        cc: 'yintothayang@gmail.com',
        from: "MyMail@DataInMotion.com",
        subject: tc.Props.DispatchComplaint,
        generateTextFromHTML: true,        
        html: h
    }).then(function (httpResponse) {
        console.log("Sent")
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