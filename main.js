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


//Parse.Cloud.define("getHTML", function (request, response) {
//    var d = {}
//    //var e = getHTML("tGHIYt5l1e")
//    //e.then(function (er) {
//    //    response.success(er)
//    //});
    
//    //var e = sendIt("tGHIYt5l1e")
//    //e.then(function (er) {
//    //    response.success(er)
//    //});
//    //response.success("er")
//});




Parse.Cloud.define("getPCR", function (request, response) {
    var pcrStatus = "Open"
    var _status = ""
    var errObj = {};
    //Paramters
    var _Call = {};
    u.setBuild("Start")
    if (typeof request !== 'undefined') {
        if (typeof request.params.PCRID !== 'undefined') {
            if (request.params.PCRID == '') {
                response.success("Missing PCRID");
            }
            else {
                var _pcrID = request.params.PCRID
                _Call.PCRID = _pcrID;
                errObj.pcrID = _pcrID;
            }
        };

        if (typeof request.params.status !== 'undefined') {
            if (request.params.status == '') {
                response.success("Missing status");
            }
            else {
                var _status = request.params.status
                _Call.status = _status;
                errObj.status = _status;
            }
        }
    };

    u.setBuild("FetchBusinessObject")
    var pcr = getPCRObject(_pcrID);
    pcr.then(function (P)
    {
        if (P.length == 0) {
            var e = mailError("getPCRObject", errObj)
            e.then(function (er) {
                response.success(er)
            });
            response.success("Invalid PCR " + _pcrID)
        }
        else {
            var _ca = P[0];

            _Call.Summary = [];
            _Call.HasFatal = false
            _Call.Errors = []
            _Call.Warnings = []
            _Call.PDF = {};
            _Call.HTML = {};
            _Call.htmlText = "";
            _Call.XML = {};
            _Call.P = P;
            _Call.BillFile = {};
            _Call.pcrObjectID = P.id;


            if (typeof P[0].attributes != 'undefined')
            {
                if (typeof P[0].attributes.agencyId !== 'undefined') {
                    _Call.agencyID = P[0].attributes.agencyId;
                    errObj.agencyID = _Call.agencyID
                };
                if (typeof P[0].attributes.PCRID !== 'undefined') {
                    _Call.PCRID = P[0].attributes.PCRID;
                };
                
                if (typeof P[0].attributes.complete !== 'undefined') {
                    _Call.CompletionStatus = P[0].attributes.complete;
                };
                if (typeof P[0].attributes.user !== 'undefined') {
                    _Call.userID = P[0].attributes.user.id;
                    _Call.userLastName = P[0].attributes.user.attributes.lastName;
                    _Call.userFirstName = P[0].attributes.user.attributes.firstName;
                    _Call.userName = P[0].attributes.user.attributes.userName;
                    errObj.userName = _Call.userName;

                };
                if (typeof P[0].attributes.vehicleId !== 'undefined') {
                    _Call.vehicleId = P[0].attributes.vehicleId;
                    errObj.vehicleId = _Call.vehicleId;
                };
                if (typeof P[0].attributes.vehicle !== 'undefined') {
                    if (typeof P[0].attributes.vehicle.attributes !== 'undefined')
                    {

                        if (typeof P[0].attributes.vehicle.attributes.createdAt !== 'undefined') {
                            var xx = P[0].attributes.vehicle.attributes.createdAt;
                            console.log(xx);
                            var ddd = new Date(xx);
                            _Call.PCRDate = moment.utc(ddd).format("MM/DD/YYYY HH:mm");
                        };
                        if (typeof P[0].attributes.vehicle.attributes.name !== 'undefined') {
                            _Call.VehicleName = P[0].attributes.vehicle.attributes.name;
                        };
                        if (typeof P[0].attributes.vehicle.attributes.location !== 'undefined') {
                            _Call.Location = P[0].attributes.vehicle.attributes.location;
                        };
                        if (typeof P[0].attributes.vehicle.attributes.crew !== 'undefined') {
                            _Call.CrewIDS = P[0].attributes.vehicle.attributes.crew;
                        };
                    }
                }
            }
        };

        var eList = getAll();
        eList.then(function (elements) {
            x.Genv34.getObj(_pcrID).then(function (rawParse) {
                if (typeof rawParse.attributes === 'undefined') {
                    response.success("Failed Fetch: rawParse")
                };

                _Call.PCRID
                var Summary = [];
                var Warnings = [];
                var Errors = [];
                _Call.Summary = Summary;
                _Call.HasFatal = false
                _Call.Errors = Errors;
                _Call.Warnings = Warnings; //   - stuff like "Response/Enroute interval:  15 minutes.  One day we'll config this stuff.
                _Call.PDF = {}
                _Call.HTML = {};
                _Call.XML = {};
                _Call.BillFile = {};
                _Call.BillFile = {};


                u.setBuild("GetAgency");
                var p = getAgency(_Call.agencyID);
                p.then(function (results) {

                    if (typeof rawParse.attributes.emsDataSet === 'undefined') {
                        response.success("Fetch Failure:  emsDataSet")
                    };
                    _Call.PCRObject = rawParse.attributes.emsDataSet;   //Set the Business Entity
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
                    _Call.NEMSISElements = ElementList;                 //Bind Configurations to Business Entity
                    //try {
                        u.setBuild("BeginGenPCRObject");
                        var _v3 = v.setTheCall(_Call)                    //Get Attribute List
                        _Call.Version3 = _v3;                            //Assign Attributes to Business Entity                                    
                        _Call.ObjectList = _v3.RawPCRObjects;
                    //}
                    //catch (e) {
                        //u.RaiseError("Failed generating PCR Object", 0, "TheCall.setV3Call", e);
                    //};


                    //try {
                    u.setBuild("SetCallProperties");
                    var props = v3CT.setV3English(_Call);             //Reporting Payload

                    _Call.Props = props;

                    _Call.PCRID = _pcrID;
                    rules.setCallRules(_Call);
                    var _Summary = summary.setCallSummary(_Call)
                    _Call.Summary = _Summary;
                    //  try {

                    //}
                    //catch (e) {
                    //  u.RaiseError("Failed generating Summary Object", 0, "TheCall.setCallSummary", e);
                    //};

                    var htmltext = ht.setHTML(_Call)                //AsIs HTML Document
                    _Call.htmltext = htmltext;
                    var htmlBytes = htmltext.getBytes();
                    _Call.HTML = htmlBytes;

                    //}
                    //catch (e) {
                    //   u.RaiseError("Failed generating Reporting Object", 0, "TheCall.setV3English", e);
                    //};

                    var p = getAgencyRigs(_Call.agencyID)
                    p.then(function (allRigs) {

                        _Call.AllVehicles = allRigs;

                        var callM = callMetrix.setCallMetrix(_Call)
                        callM.then(function (ddr) {
                            //        //If the call is well-formed, build it.
                            var o1 = new Array();
                            o1 = u.getFatalErrors();
                            if (o1.length === 0) {
                                var BuildStatus = "SUCCESS"
                            }
                            else {
                                var BuildStatus = "FAILED Fatal Error Count: " + o1.length;
                                _Call.FATALERRORS = o1;
                            };
                            _Call.BuildStatus = BuildStatus;
                            

                            //////////////////////////////////////////////
                            ////////////////////////////////////////////                                    
                            var p1 = saveHTMLClass(_Call);
                            p1.then(function () {
                                var status = _Call.status
                                status = "INCOMPLETE"
                                if (status !== "COMPLETE") {


                                    try {
                                        var dc = pdf.NewPDF(_Call);
                                        _Call.PDF = dc;
                                    }
                                    catch (e) {
                                        u.RaiseError("Failed generating PDF ", 0, "TheCall.setV2Call", e);
                                    };


                                    try {
                                        _Call.Version2 = v2Object;
                                        var v2Object = v2.setV2Call(_Call);
                                        var v2XML = ver2XML.setV2XML(v2Object);
                                        _Call.v2XML = v2XML;
                                        var version2XMLByteArray = v2XML.getBytes();
                                        _Call.XML = version2XMLByteArray;
                                    }
                                    catch (e) {
                                        u.RaiseError("Failed generating Verson 2 Object", 0, "TheCall.setV2Call", e);
                                    }

                                    var p = SaveThePDF(_Call);
                                    p.then(function () {
                                        
                                        if (typeof _Call.XML !== 'undefined') {
                                            var cXML = SaveTheXML(_Call);
                                            cXML.then(function (Txml) {
                                                u.setBuild("EndTime");
                                                var FatalE = u.getFatalErrors();
                                                var TimeE = u.getTimeErrors();
                                                var WarningsE = u.getWarnings();
                                                _Call.CallLog = u.getCallLog();
                                                var TheEvent = new Object();
                                                if (FatalE.length > 0) {
                                                    _Call.HasFatal = true;
                                                    _Call.Errors = FatalE;
                                                };
                                                if (TimeE.length > 0) {
                                                    _Call.TimeErrors = TimeE;
                                                };
                                                if (WarningsE.length > 0) {
                                                    _Call.Warnings = WarningsE;
                                                };
                                                var y = sendIt(_Call)
                                                y.then(function (theMail)
                                                {
                                                    //var tom = sendToTom(_Call)
                                                    //tom.then(function (theTom) {
                                                    //    _Call.Sent = "True";
                                                    //});
                                               
                                                //var cMet = setCrewMetrix(_Call);
                                                //cMet.then(function (ceM) 
                                                //{
                                    response.success(_Call)



                                                //}, function (error) {
                                                //    response.success("Call Metrix")
                                                //});


                                                //}, function (error) {
                                                //    response.success("2")
                                                //});


                                                    //}, function (error) {
                                                })
                                                ;
                                            });
                                        };
                                        //});
                                    }, function (error) {
                                        var e = mailError("SaveHTML", errObj)
                                        e.then(function (er) {
                                            response.success(er)
                                        });
                                        response.success("SaveHTML")
                                    });
                                }
                                else
                                {
                                    response.success(_Call)
                                }
                            });
                        }, function (error) {
                            var e = mailError("SetCallMetrix", errObj)
                            e.then(function (er) {
                                response.success(er)
                            });

                                response.success("Error: Set Call Metrix")
                        });

                    }, function (error) {
                        var e = mailError("GetAgencyRigs", errObj)
                        e.then(function (er) {
                            response.success(er)
                        });
                        response.success("Error: Agency Rigs")
                    });
                }, function (error) {
                    var e = mailError("GetElements", errObj)
                    e.then(function (er) {
                        response.success(er)
                    });
                    response.success("Elements Errors")
                });
            }, function (error) {
                var e = mailError("getAgency", errObj)
                e.then(function (er) {
                    response.success(er)
                });
                response.success("getAgency Errors")
            });

        }, function (error) {
            var e = mailError("getElements", errObj)
            e.then(function (er) {
                response.success(er)
            });
            response.success("getElements Errors")
        });
    }, function (error)
    {
        var e = mailError("getPCR", errObj)
        e.then(function (er) {
            response.success(er)
        });
        response.success("getPCR Errors")
    });
    
});


var SaveTheXML = function (tc)
    {
    var file = new Parse.File(tc.PCRID + ".XML", tc.XML);
    return file.save().then(function () {
        var TheXML = Parse.Object.extend("XMLClass");
        var txml = new TheXML();
        txml.set("PCRID", tc.PCRID);
        txml.set("XML", file);
        txml.save()
    })
};
var SaveThePDF = function (TheCall)
    {
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
var sendIt = function (tc) {
    var sub = tc;
    var h = tc.HTMLDoc;
    //var e = getHTML(tc.Props.PCRID)
    //e.then(function (er) {

    client.initialize('mg.datainmotionllc.com', 'key-dd6c965d8a32b0a4db474a678e02de87');

    return client.sendEmail({
        to: 'bouviereil@hotmail.com',
        //cc: ,
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
var mailError = function (from, err) {
    console.log(from)
    console.log("err")
    console.log(err)
    var pcr = ""
    var status = "";
    var agency = "";
    var username = "";
    var vehicle = "";

    if (typeof err.pcrID != 'undefined') {
        pcr = err.pcrID
    };
    if (typeof err.status != 'undefined') {
        status = err.status
    }
    if (typeof err.agencyID != 'undefined') {
        agency = err.agency
    }
    if (typeof err.userName != 'undefined') {
        username = err.username
    }
    if (typeof err.vehicleId != 'undefined') {
        vehicle = err.vehicle
    }
    client.initialize('mg.datainmotionllc.com', 'key-dd6c965d8a32b0a4db474a678e02de87');
    

    var etext = "PCR: " + pcr + " Call Status: " + status + " Agency: " + agency +  " User: " + username + " Vehicle: " + vehicle
    return client.sendEmail({
        to: 'bouvierneil@hotmail.com',        
        from: "MyMail@DataInMotion.com",
        subject: from,
        text: etext
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
var setVehicleMileage = function (vehicleID, tc)
{
    var V = Parse.Object.extend("Vehicle");
    var v= new V();
    v.id = vehicleID;

    if (typeof tc.Props === 'undefined') {
        throw new UserException("Call.Props undefined");
    }
    else {
        if (typeof tc.Props["RespOnSceneMiles"] === 'undefined') {
            throw new UserException("setVehicleMileage:  Missing Value");
        }
        else {
            if (typeof tc.Props["RespOnSceneMiles"] === '') {
                throw new UserException("setVehicleMileage:  Missing RespOnSceneMiles");
            }
        };

        if (typeof tc.Props["RespDestinationMiles"] === 'undefined')
        {
            throw new UserException("RespDestinationMiles:  Missing Value");
        }
        else
        {
            if (typeof tc.Props["RespDestinationMiles"] === 'undefined') {
                throw new UserException("RespDestinationMiles:  Missing Value");
            }
        }
    };
   
   // Set a new value on quantity
    v.set("Odometner", vehicleID);

    // Save
    v.save(null, {
        success: function (point) {
            // Saved successfully.
        },
        error: function (point, error) {
            // The save failed.
            // error is a Parse.Error with an error code and description.
        }
    });
};
var getPCRObject = function (pcrID) {
    //Only once.  MoBi 
    var cm = Parse.Object.extend("PCR");
    var query = new Parse.Query(cm);
    query.equalTo("objectId", pcrID);
    query.include("user")
    query.include("vehicle")
    return query.find({
        //return query.first({
        success: function (results) {
        },
        error: function (error) { }
    });
};
var getAgencyRigs = function (agencyId) {
    var cm = Parse.Object.extend("Vehicle");
    var query = new Parse.Query(cm);
    query.equalTo("agencyId", agencyId);
    query.equalTo("active", true);
    query.descending()
    return query.find({
        
        success: function (results) {
        },
        error: function (error) { }
    });
};
