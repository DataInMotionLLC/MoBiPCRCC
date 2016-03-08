v = require('cloud/V3Call.js');
x = require('cloud/Gen34PCR.js');
u = require('cloud/Utilities.js');
v3CT = require('cloud/V3CodeText.js');
v2 = require('cloud/V2Call.js');
pdf = require('cloud/ThePDF.js');
ht = require('cloud/PCRhtml.js');
callMetrix = require('cloud/CallMetrix.js');
var crewMetrix = require('cloud/CrewMetrix.js');
rules = require('cloud/CallRules.js');
ver2XML = require('cloud/Version2XML.js');
summary = require('cloud/Summary.js');

var moment = require("cloud/moment.js");
SendMail = require('cloud/SendeMail.js');
var client = require('cloud/myMailModule-1.0.0.js');
var Bill = require("cloud/BillFileXML.js");

Parse.Cloud.define("getPCR", function (request, response) {
    var pcrStatus = "Open"
    var _status = ""
    var errObj = {};
    //Paramters
    var _Call = {};
    _Call.TimeZoneOffset = 5
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
    /////////////////////////////////////////////////////////////
    var pcr = getPCRObject(_pcrID);
    pcr.then(function (P) {
        ///////////////////////////////////////////////////////////
        if (P.length == 0) 
        {
            errObj.PCRID = _Call.PCRID
            errObj.Agency = _Call.agencyID

            var e = mailError("getPCRObject", errObj)
            e.then(function (er) {
                response.success(er)
            });
            response.success("Invalid PCR:  Error Logged and Notification Submitted. " + _pcrID)
        }
        else {
            var _ca = P[0];

            _Call.Summary = [];
            _Call.HasFatal = false
            _Call.Warnings = []
            _Call.PDF = {};
            _Call.HTML = {};
            _Call.htmlText = "";
            _Call.XML = {};
            _Call.P = P;
            _Call.BillFile = {};
            _Call.pcrObjectID = P.id;
            _Call.WellFormed = false;

            if (typeof P[0].attributes != 'undefined') {
                if (typeof P[0].attributes.agencyId !== 'undefined') {
                    _Call.agencyID = P[0].attributes.agencyId;
                    errObj.agencyID = _Call.agencyID
                };
                if (typeof P[0].attributes.PCRID !== 'undefined') {
                    _Call.PCRID = P[0].attributes.PCRID;
                };
                if (typeof P[0].attributes.createdAt !== 'undefined') {
                    var xx = P[0].attributes.createdAt;
                    var ddd = new Date(xx);

                    _Call.PCRDate = moment(ddd).format("MM/DD/YYYY HH:mm");  //Time PCR record create
                    _Call.CreatedDate = ddd;  //Time PCR record created
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
                    if (typeof P[0].attributes.vehicle.attributes !== 'undefined') {

                        if (typeof P[0].attributes.vehicle.attributes.name !== 'undefined') {
                            _Call.VehicleName = P[0].attributes.vehicle.attributes.name;
                        };
                        if (typeof P[0].attributes.vehicle.attributes.number !== 'undefined') {
                            _Call.VehicleNumber = P[0].attributes.vehicle.attributes.number;
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
            else
            {
                response.success("Failed Fetch: ELements")
            }
        };
        /////////////////////////////////////////////////////////////
        var eList = getAll();
        eList.then(function (elements) {
            console.log("ELEMENTS")
        ///////////////////////////////////////////////////////////////                

            ///////////////////////////////////////////////////////////////            
            x.Genv34.getObj(_pcrID).then(function (rawParse)
            {
            ///////////////////////////////////////////////////////////////

                if (typeof rawParse.attributes === 'undefined') {
                    response.success("Failed Fetch: rawParse")
                };
            
                _Call.PCRID
                var Summary = [];
                var Warnings = [];
                _Call.Summary = Summary;
                _Call.HasFatal = false
                _Call.Warnings = Warnings; //   - stuff like "Response/Enroute interval:  15 minutes.  One day we'll config this stuff.
                _Call.PDF = {}
                _Call.HTML = {};
                _Call.XML = {};
                _Call.BillFile = {};
                u.setBuild("GetAgency");


                if (typeof rawParse.attributes.emsDataSet === 'undefined') {
                    response.success("Fetch Failure:  emsDataSet")
                };
                _Call.PCRObject = rawParse.attributes.emsDataSet;   //Set the Business Entity
                var ElementList = [];                               //Config List
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
                _Call.NEMSISElements = ElementList;
                try {
                    u.setBuild("BeginGenPCRObject");

                    var _v3 = v.setTheCall(_Call)                    //Get Attribute List
                    _Call.Version3 = _v3;                            //Assign Attributes to Business Entity       
                    //if(_Call._v3.ePatient["ePatient.01"] doesnt exist')                           //Set Patient Object
                    //if(_Call._v3.eDisposition.DestinationGroup["eDisposition.02"] doesnt exist')  //Set Disposition Object
                    _Call.ObjectList = _v3.RawPCRObjects;
                }
                catch (e) {
                    u.RaiseError("Failed generating PCR Object", 0, _Call.agencyID + "||" + _Call.PCRID, e);
                };

                u.setBuild("SetCallProperties");
                var props = v3CT.setV3English(_Call);             //Reporting Payload

                _Call.Props = props;
                _Call.PCRID = _pcrID;
                rules.setCallRules(_Call);
                _Call.Errors = u.getCallErrors();


                status = "INCOMPLETE";
                // var o1 = new Array();
                // o1 = u.getFatalErrors();        //If the call is well-formed, build it.
                // var status = "INCOMPLETE"
                //if (o1.length === 0) {
                //    var HasFatal = false;
                //    status = "COMPLETE"
                //}
                //else
                //{
                //    var HasFatal = true;
                //    _Call.FATALERRORS = o1;
                //};

                try {
                    var _Summary = summary.setCallSummary(_Call)
                    _Call.Summary = _Summary;
                }
                catch (e) {
                    u.RaiseError("Failed generating Summary Object", 0, _Call.agencyID + "||" + _Call.PCRID, e);
                };

                var htmltext = ht.setHTML(_Call)                //AsIs HTML Document
                if (htmltext == null)
                {
                    var e = mailError("ht.setHtml Failure", errObj)
                    e.then(function (er) {
                        response.success(_Call)
                    });                    
                }
                else
                {
                    _Call.htmltext = htmltext;
                    var htmlBytes = htmltext.getBytes();
                    _Call.HTML = htmlBytes;

                    try {
                        _Call.XMLHtml = "<![CDATA[" + htmltext + "]]>";
                        var billFile = Bill.setBillFile(_Call);
                        _Call.BillFile = billFile;
                    }
                    catch (e) {
                        u.RaiseError("Failed generating BillFile", 0, _Call.agencyID + "||" + _Call.PCRID, e);
                    };

                    var shift = getShift(_Call.vehicleId);
                    shift.then(function (CrewShift) 
                    {
                        _Call.CrewShift = CrewShift;
                        if (typeof CrewShift[0] !== 'undefined')
                        {
                            if (typeof CrewShift[0].attributes !== 'undefined')
                            {
                                if (typeof CrewShift[0].attributes.crew !== 'undefined')
                                {

                                }
                            }
                        }

                        var p = getAgencyRigs(_Call.agencyID)  //Stamp Agency Rig Geo at time of call
                        p.then(function (allRigs) {

                            _Call.AllVehicles = allRigs;
                                            //        //if TheCall.PatientID is null or not exist, check and set
                                            //        //var patId = setPatient.setCallMetrix(_Call)  // Keep track of the Call throughout workflow
                                            //        //callM.then(function (ddr) {
                                                                       var callM = callMetrix.setCallMetrix(_Call)  // Keep track of the Call throughout workflow                                                                                     

                                            //////////////////////////////////////////////
                                            ////////////////////////////////////////////                                    
                                            var p1 = saveHTMLClass(_Call);
                                            p1.then(function () {
                    //                            ////            var status = _Call.status

                    //                            //////////////////////////////////////////////////////////////////////////////////////////
                    //                            //////////////////////////////////////////////////////////////////////////////////////////
                    //                            //////////////////////////////////////////////////////////////////////////////////////////
                    //                            //////////////////////////////////////////////////////////////////////////////////////////
                    //                            status == "INCOMPLETE";
                    //                            //////////////////////////////////////////////////////////////////////////////////////////
                    //                            //////////////////////////////////////////////////////////////////////////////////////////
                    //                        //////////////////////////////////////////////////////////////////////////////////////////
                    //                            //////////////////////////////////////////////////////////////////////////////////////////
                    //                            if (status === "COMPLETE") {
                    //                                try {
                    //                                    var dc = pdf.NewPDF(_Call);
                    //                                    _Call.PDF = dc;
                    //                                }
                    //                                catch (e) {
                    //                                    u.RaiseError("Failed generating PDF ", 0, _Call.agencyID + "||" + _Call.PCRID, e);
                    //                                };

                    //                                try {
                    //                                    _Call.Version2 = v2Object;
                    //                                    var v2Object = v2.setV2Call(_Call);
                    //                                    var v2XML = ver2XML.setV2XML(v2Object);
                    //                                    _Call.v2XML = v2XML;
                    //                                    var version2XMLByteArray = v2XML.getBytes();
                    //                                    _Call.XML = version2XMLByteArray;
                    //                                }
                    //                                catch (e) {
                    //                                    u.RaiseError("Failed generating Verson 2 Object", 0, _Call.agencyID + "||" + _Call.PCRID, e);
                    //                                }


                    //                                /////////////////////////////////////////////////////////////////////
                    //                                /////////////////////////////////////////////////////////////////////
                    //                                //From here, we only process Good Calls

                    //                                var p = SaveThePDF(_Call);
                    //                                p.then(function () {

                    //                                    if (typeof _Call.XML !== 'undefined') {
                    //                                        var cXML = SaveTheXML(_Call);
                    //                                        cXML.then(function (Txml) {
                    //                                            u.setBuild("EndTime");

                    //                                            var y = sendIt(_Call)
                    //                                            y.then(function (theMail) {
                    //                                                var tom = sendToTom(_Call)
                    //                                                tom.then(function (theTom) {
                    //                                                    _Call.Sent = "True";
                    //                                                    var cMet = crewMetrix.setCrewMetrix(_Call);
                    //                                                    var yy = getCrewName(_Call.CrewIDS)
                    //                                                    yy.then(function (cn) {

                    //                                                        if (typeof cGroup === 'undefined') {
                    //                                                            var cGroup = [];
                    //                                                        };
                    //                                                        for (var i = 0; i < cn.length ; i++) {
                    //                                                            var name = ""
                    //                                                            name = cn[i].attributes.firstName + " " + cn[i].attributes.lastName
                    //                                                            cGroup.push(name)
                    //                                                        };
                    //                                                        _Call.CrewNames = cGroup.slice(0);
                    //                                                        var rt = getRoute(_Call)
                    //                                                        rt.then(function (rout) {
                    //                                                            var PCRRoute = []
                    //                                                            var dis = 0;
                    //                                                            var a = Parse.GeoPoint;
                    //                                                            var b = Parse.GeoPoint;
                    //                                                            if (rout && rout.length > 0) {
                    //                                                                for (var i = 0; i < rout.length ; i++) {
                    //                                                                    var routeDetail = {};
                    //                                                                    routeDetail.name = i.toString()
                    //                                                                    routeDetail.location = rout[i].attributes.geoPoint
                    //                                                                    PCRRoute.push(routeDetail)
                    //                                                                    if (i == 0) {
                    //                                                                        a = rout[0].attributes.geoPoint
                    //                                                                    }
                    //                                                                    else {
                    //                                                                        b = rout[i].attributes.geoPoint
                    //                                                                        var s = a.milesTo(b)
                    //                                                                        dis = dis + s;
                    //                                                                        a = rout[i].attributes.geoPoint
                    //                                                                    }
                    //                                                                    var ts = ""
                    //                                                                    if (typeof rout[i].attributes.timestamp != 'undefined') {
                    //                                                                        ts = rout[i].attributes.timestamp;
                    //                                                                    }
                    //                                                                    var lat = ""
                    //                                                                    if (typeof rout[i].attributes.geoPoint.latitude != 'undefined') {
                    //                                                                        lat = rout[i].attributes.geoPoint.latitude;
                    //                                                                    };
                    //                                                                    var lon = ""
                    //                                                                    if (typeof rout[i].attributes.geoPoint.longitude != 'undefined') {
                    //                                                                        lon = rout[i].attributes.geoPoint.longitude;
                    //                                                                    };
                    //                                                                    var speed = "";
                    //                                                                    if (typeof rout[i].attributes.speed != 'undefined') {
                    //                                                                        speed = rout[i].attributes.speed;
                    //                                                                    }
                    //                                                                    var bat = "";
                    //                                                                    if (typeof rout[i].attributes.batteryLevel != 'undefined') {
                    //                                                                        bat = rout[i].attributes.batteryLevel;
                    //                                                                    };
                    //                                                                    var alt = "";
                    //                                                                    if (typeof rout[i].attributes.altitude != 'undefined') {
                    //                                                                        alt = rout[i].attributes.altitude;
                    //                                                                    }
                    //                                                                    var rig = "";
                    //                                                                    if (typeof rout[i].attributes.vehicle.id != 'undefined');
                    //                                                                    {
                    //                                                                        rig = rout[i].attributes.vehicle.id;
                    //                                                                    }

                    //                                                                    var st = ts + "|" + lat + ":" + lon + "|" + speed + "|" + bat + "|" + alt + " " + dis + " " + rig;
                    //                                                                    if (typeof EncR === 'undefined') {
                    //                                                                        var EncR = [];
                    //                                                                    };
                    //                                                                    EncR.push(st)
                    //                                                                }
                    //                                                            };
                    //                                                            _Call["Route"] = EncR.slice(0);
                    //                                                            _Call.EncouterRoute = PCRRoute;
                    //                                                            _Call["AMiles"] = dis;


                    //                                                            _Call.WellFormed = true;
                    //                                                            _Call.HasFatal = false;
                    //                                                            //////////////////////////////////////////
                    response.success(_Call);
                    //                                                            //////////////////////////////////////////

                    //                                                        }, function (error) {
                    //                                                        });
                    //                                                        //                        //_Call.WellFormed = true;
                    //                                                        //                        //response.success(_Call)
                    //                                                    }, function (error) {
                    //                                                        _Call.WellFormed = true;
                    //                                                        response.success(_Call)
                    //                                                    });

                    //                                                }, function (error) {  //Set to tom
                    //                                                    response.success(_Call)
                    //                                                });

                    //                                            }, function (error) {
                    //                                            });
                    //                                        });
                    //                                    };

                    //                                    //}, function (error) {
                    //                                    var e = mailError("SaveHTML", errObj)
                    //                                    e.then(function (er) {
                    //                                        response.success(er)
                    //                                    });
                    //                                    response.success(_Call)
                    //                                });

                    //                            }
                    //                            else {
                    //                                response.success(_Call)
                    //                            }
                    //                        });

                    //                    }, function (error) {
                    //                        var e = mailError("GetAgencyRigs", errObj)
                    //                        e.then(function (er) {
                    //                            response.success(er)
                    //                        });
                    //                        response.success("Error: Agency Rigs " + _Call.agencyID + "||" + _Call.PCRID)
                    //                    });

                    //                    var e = mailError("Get Rigs", errObj)
                    //                    e.then(function (er) {

                    //                    });
                    //                }
                    //                else {
                    //                    var e = mailError("Form Property", errObj)
                    //                    e.then(function (er) {
                    //                        response.success("Error: Property Formation Error " + _Call.agencyID + "||" + _Call.PCRID)
                                        }); //
                    //                };// no HTML
                    //            }, function (error) {
                    //                var e = mailError("GetNEMSISElements", errObj)
                    //                e.then(function (er) {
                    //                        response.success("Error: NEMSIS Element List " + er)
                                    });  //Get Agency Rigs

                            });//Get Crew
                
                }// If HTMLText is Not Null
                /////////////////////////////////////////////////////
            });//GetPCR
        }, function (error) {
            
            var e = mailError("getElements", errObj)
            e.then(function (er) {
                response.success(_Call)
            });
            /////////////////////////////////////////////////////
        });//getAll();
        }, function (error) {
        var e = mailError("getPCR", errObj)
        e.then(function (er) {
            response.success(er)
        });
    ///////////////////////////////////////////////////////////////////////////////
    })///getPCR
}, function (error) {
    var e = mailError("getPCR", errObj)
    e.then(function (er) {
        response.success(er)
    });
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
};
var mailError = function (from, err) {
    
    //var pcr = ""
    //var status = "";
    //var agency = "";
    //var username = "";
    //var vehicle = "";

    //if (typeof err.pcrID != 'undefined') {
    //    pcr = err.pcrID
    //};
    //if (typeof err.status != 'undefined') {
    //    status = err.status
    //}
    //if (typeof err.agencyID != 'undefined') {
    //    agency = err.agencyID
    //}
    //if (typeof err.userName != 'undefined') {
    //    username = err.username
    //}
    //if (typeof err.vehicleId != 'undefined') {
    //    vehicle = err.vehicleId
    //}
    //client.initialize('mg.datainmotionllc.com', 'key-dd6c965d8a32b0a4db474a678e02de87');


    //var etext = "PCR: " + pcr + " Call Status: " + status + " Agency: " + agency + " User: " + username + " Vehicle: " + vehicle
    var etext = "Test"
    return client.sendEmail({
        to: 'bouvierneil@hotmail.com',
        from: "ErrorMail@DataInMotion.com",
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
                console.warn('Error ' + error.message);
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
var setVehicleMileage = function (vehicleID, tc) {
    var V = Parse.Object.extend("Vehicle");
    var v = new V();
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

        if (typeof tc.Props["RespDestinationMiles"] === 'undefined') {
            throw new UserException("RespDestinationMiles:  Missing Value");
        }
        else {
            if (typeof tc.Props["RespDestinationMiles"] === 'undefined') {
                throw new UserException("RespDestinationMiles:  Missing Value");
            }
        }
    };

    // Set a new value on quantity
    v.set("Odometer", vehicleID);

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
var setPatient = function (theParam) {
    var cmID = null;
    var pat = Parse.Object.extend("Patient");
    var query = new Parse.Query(pat)
    if (typeof SSN !== 'undefined') {
        //If we have this patient, make sure Pat and History do not change
        query.equalTo("ssn", SSN);
    }
    //if (typeof DOB !== 'undefined') {
    //    query.equalTo("DOB", DOB);
    //}

    return query.find(
        {
            success: function (results) {
                if (results && results.length > 0) {
                    console.log("Found")
                }
                else {
                    var pt = new pat();
                    //pt.set("lastName", theParam.LastName);
                    pt.set("lastName", theParam.LastName);
                    pt.set("firstName", theParam.FirstName);
                    pt.set("middleName", theParam.MiddleName);
                    pt.set("ssn", theParam.SSN);
                    pt.set("gender", theParam.Gender);
                    pt.set("dob", theParam.DOB);
                    pt.set("address", theParam.Address);
                    pt.set("city", theParam.City);
                    pt.set("county", theParam.County);
                    pt.set("state", theParam.State);
                    pt.set("zip", theParam.Zip);
                    pt.set("phone", theParam.Phone);
                    pt.set("licenseState", theParam.LicenseState);
                    pt.set("licenseNumber", theParam.LicenseNumber);
                    pt.set("barriersToCare", theParam.BarriersTOCare);  //array
                    pt.set("advanceDirectives", theParam.AdvancedDirectives);  //array
                    pt.set("medicationAllergies", theParam.MedicationAllergies);  //array
                    pt.set("alcDrug", theParam.AlcDrug);  //array

                    var PracticionerGroup = []
                    //pt.set("patientDocs", theParam.PatientDocs);

                    pt.save();
                }

            },
            error: function (user, error) {
                console.warn('Error ' + error.code + ': ' + error.message);
            }
        });
};
Parse.Cloud.define("getPatient", function (request, response) {
    if (typeof request.params.SearchKey !== 'undefined') {
        if (request.params.SearchKey !== '') {
            if ((typeof theParam.SSN != 'undefined') && (theParam.SSN != '')) {
                var SSN = theParam.SSN
            };
            if ((typeof theParam.lName != 'undefined') && (theParam.lName != '')) {
                var lName = theParam.LastName
            };
            if ((typeof theParam.fName != 'undefined') && (theParam.fName != '')) {
                var fName = theParam.FirstName
            };
            if ((typeof theParam.DOB != 'undefined') && (theParam.DOB != '')) {
                var DOB = theParam.DOB
            }
            if ((typeof theParam.Phone != 'undefined') && (theParam.Phone != '')) {
                var Phone = theParam.Phone
            }
        }
    }
    var cm = Parse.Object.extend("Patient");
    var query = new Parse.Query(cm);
    query.equalTo("ssn", SSN);
    query.equalTo("active", true);
    query.descending()
    return query.find({
        success: function (results) {
            response.success(results)
        },
        error: function (error) { }
    });

});
var getCrewName = function (id) {
    if (id.length == 0) {
        return null
    }
    else {
        for (var i = 0; i < id.length ; i++) {
            if (typeof aa === 'undefined') {
                var aa = [];
            }
            aa.push(id[i].objectId)
        }
    };
    var _user = Parse.Object.extend("User");
    var query = new Parse.Query(_user);
    //var sa = ["h6Skan9mV0", "rFf2SWLm60"]
    query.containedIn("objectId", aa)
    return query.find({
        success: function (results) {
            console.log("GetGrewNamesResults " + results.length)

        },
        error: function (error) {
            console.log("ERRRRRRRR")
        }
    });
};
var getRoute = function (call) {
    console.log("IN GET ROUTE     WER")
    var from = new Date(call.Props["EncounterBeginTime"]);
    var to = new Date(call.Props["EncounterEndTime"]);
    var rig = call.vehicleId

    var RIG = Parse.Object.extend("VehicleLocation");
    var query = new Parse.Query(RIG);
    query.greaterThan("timestamp", from)
    query.lessThan("timestamp", to)
    query.equalTo("vehicle",
        {
            __type: "Pointer",
            className: "Vehicle",
            objectId: rig
        })
    query.descending("timestamp");
    return query.find({
        success: function (results) {
        },
        error: function (error) {
         
        }
    });
};

var getShift = function (vehicleID)
{
    var shift = Parse.Object.extend("Shift");
    var query = new Parse.Query(shift);
    var Shift = {};
    var cr = [];
    query.doesNotExist("endDate");
    query.descending("startDate");
    query.equalTo("vehicle",
    {
        __type: "Pointer",
        className: "Vehicle",
        objectId: vehicleID
    });

    query.include("crew")
    query.include("vehicle")
    query.find({
        success: function (results) {
            if (results && results.length > 0) {
                console.log(results)
                if (typeof results[0].attributes !== 'undefined') {
                    if (typeof results[0].attributes.vehicle !== 'undefined') {
                        if (typeof results[0].attributes.vehicle !== 'undefined') {
                            if (typeof results[0].attributes.vehicle.attributes !== 'undefined') {
                                if (typeof results[0].attributes.vehicle.attributes.name !== 'undefined') {
                                    Shift.VehicleName = results[0].attributes.vehicle.attributes.name
                                };
                                if (typeof results[0].attributes.vehicle.attributes.number !== 'undefined') {
                                    Shift.VehicleNumber = results[0].attributes.vehicle.attributes.number
                                };
                                if (typeof results[0].attributes.vehicle.attributes.installation !== 'undefined') {
                                    Shift.Installation = results[0].attributes.vehicle.attributes.installation.id
                                }
                            }
                        };
                        if (typeof results[0].attributes.crew !== 'undefined') {
                            if (results[0].attributes.crew.length !== 0) {
                                var c = {}

                                for (var ii = 0; ii < results[0].attributes.crew.length ; ii++) {
                                    if (typeof results[0].attributes.crew[ii].attributes !== 'undefined') {
                                        if (typeof results[0].attributes.crew[ii].attributes.levelDescription !== 'undefined') {
                                            c.level = results[0].attributes.crew[ii].attributes.levelDescription
                                        };

                                        if (typeof results[0].attributes.crew[ii].attributes.roleDescriptions !== 'undefined') {
                                            c.Roles = results[0].attributes.crew[ii].attributes.roleDescriptions
                                        };
                                    }
                                    var _user = Parse.Object.extend("User");
                                    var query = new Parse.Query(_user);
                                    console.log("Results0")
                                    console.log(results[0].attributes.crew[ii].attributes.userId)
                                    query.equalTo("objectId", results[0].attributes.crew[ii].attributes.userId)
                                    query.include("dPersonnel")
                                    query.find({
                                        success: function (r) {
                                            console.log(r)
                                            if (r && r.length !== 0) {

                                                c.lastName = "";
                                                c.firstName = "";
                                                c.activeStatus = "";
                                                if (typeof r[0].attributes.lastName != 'undefined') {
                                                    c.lastName = r[0].attributes.lastName;
                                                }
                                                if (typeof r[0].attributes.firstName != 'undefined') {
                                                    c.firstName = r[0].attributes.firstName;
                                                }
                                                if (typeof r[0].attributes.active != 'undefined') {
                                                    c.activeStatus = r[0].attributes.active;
                                                }
                                                cr.push(c)
                                                Shift.Crew = cr;
                                                 //Shift
                                                console.log(Shift)
                                            }
                                        },
                                        error: function (error) {
                                            console.log("ERRRRRRRR")
                                        }
                                    });
                                }
                            }
                        }
                    }

                }
            }

        },

        error: function (error) {
        }

    });
}