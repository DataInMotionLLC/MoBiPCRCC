//var Utils = require('cloud/UtilitiesCC.js');
//var jsXML = require('cloud/JSXMLWriterCC.js');
//exports.setV3XML = function (TheCall) {
var setV3XML = function (TheCall) 
{
    //var XML = new jsXML.XMLWriter('UTF-8', '1.0');
    var XML = new XMLWriter('UTF-8', '1.0');

    XML.WSD();

    XML.WSE('EMSDataSet');
    XML.WAS('xmlns:xsi', "http://www.w3.org/2001/XMLSchema-instance");
    XML.WAS('xsi:schemaLocation', "http://www.nemsis.org http://nemsis.org/media/XSD_v3/_nemsis_v3.3.4/3.3.4.140328/XSDs/NEMSIS_XSDs_v3.3.4.140328/EMSDataSet_v3.xsd  xmlns:xsi=http://www.w3.org/2001/XMLSchema-instance");

    XML.WSE("Header");
    XML.WSE("DemographicGroup");
    XML.WEE();
    XML.WSE("PatientCareReport");
    if (typeof TheCall != 'undefined') {
        if (typeof TheCall.eRecord != 'undefined') {

            var obj = {};
            var obj = TheCall.eRecord;
            XML.WSE("eRecord");

            if (IsOk(obj["eRecord.01"]) == true) {
                XML.WES("eRecord.01", escapeXml(obj["eRecord.01"].vSet[0].val));
            };

            XML.WSE("eRecord.SoftwareApplicationGroup");

            if (IsOk(obj["eRecord.02"]) == true) {
                XML.WES("eRecord.02", escapeXml(obj["eRecord.02"].vSet[0].val));
            };

            if (IsOk(obj["eRecord.03"]) == true) {
                XML.WES("eRecord.03", escapeXml(obj["eRecord.03"].vSet[0].val));
            };
            if (IsOk(obj["eRecord.04"]) == true) {
                XML.WES("eRecord.04", escapeXml(obj["eRecord.04"].vSet[0].val));
            };
            XML.WEE("eRecord.SoftwareApplicationGroup");
            XML.WEE("eRecord");
        };
        if (typeof TheCall.eDispatch != 'undefined') {
            XML.WSE("eDispatch");
            var obj = {};
            var obj = TheCall.eDispatch;

            if (IsOk(obj["eDispatch.01"]) == true) {
                XML.WES("eDispatch.01", escapeXml(obj["eDispatch.01"].vSet[0].val));
            };

            if (IsOk(obj["eDispatch.02"]) == true) {
                XML.WES("eDispatch.02", obj["eDispatch.02"].vSet[0].val);
            }
            else {
                if (typeof obj["eDispatch.02"].NV != 'undefined') {
                    if (obj["eDispatch.02"].NV == true) {
                        XML.WSE('eDispatch.02');
                        XML.WAS("NV", obj["eDispatch.02"].NVal);
                        XML.WAS('xsi:nil', 'true');
                        XML.WEE();
                    }
                }
            };
            XML.WEE();
        };
        if (typeof TheCall.eDisposition != 'undefined') {
            var obj = {};
            var obj = TheCall.eDisposition;

            XML.WSE("eDisposition");

            if (typeof obj["DestinationGroup"] != 'undefined') {
                var objD = obj["DestinationGroup"];
                XML.WSE("eDisposition.DestinationGroup");
                if (typeof objD["eDisposition.01"] != 'undefined') {
                    if (objD["eDisposition.01"].IsNull == false) {
                        XML.WES("eDisposition.01", escapeXml(objD["eDisposition.01"].vSet[0].val));
                    }
                };

                if (typeof objD["eDisposition.02"] != 'undefined') {
                    if (objD["eDisposition.02"].IsNull == false) {
                        XML.WES("eDisposition.02", objD["eDisposition.02"].vSet[0].val);
                    }
                };

                if (typeof objD["eDisposition.03"] != 'undefined') {
                    if (objD["eDisposition.03"].IsNull == false) {
                        XML.WES("eDisposition.03", escapeXml(objD["eDisposition.03"].vSet[0].val));
                    }
                };

                if (typeof objD["eDisposition.04"] != 'undefined') {
                    if (objD["eDisposition.04"].IsNull == false) {
                        XML.WES("eDisposition.04", objD["eDisposition.04"].vSet[0].val);
                    }
                };

                if (typeof objD["eDisposition.05"] != 'undefined') {
                    if (objD["eDisposition.05"].IsNull == false) {
                        XML.WES("eDisposition.05", objD["eDisposition.05"].vSet[0].val);
                    }
                };

                if (typeof objD["eDisposition.06"] != 'undefined') {
                    if (objD["eDisposition.06"].IsNull == false) {

                        XML.WES("eDisposition.06", objD["eDisposition.06"].vSet[0].val);
                    }
                };

                if (typeof objD["eDisposition.07"] != 'undefined') {
                    if (objD["eDisposition.07"].IsNull == false) {
                        XML.WES("eDisposition.07", objD["eDisposition.07"].vSet[0].val);
                    }
                };
                if (typeof objD["eDisposition.08"] != 'undefined') {
                    if (objD["eDisposition.08"].IsNull == false) {
                        XML.WES("eDisposition.08", objD["eDisposition.08"].vSet[0].val);
                    }
                };
                XML.WEE("eDisposition.DestinationGroup");
            };
            XML.WEE();
        };
        if (typeof TheCall.eTimes != 'undefined') {
            var obj = {};
            obj = TheCall.eTimes;
            XML.WSE("eTimes");
            if (typeof obj["eTimes.01"] != 'undefined') {
                if (obj["eTimes.01"].IsNull == false) {
                    XML.WES("eTimes.01", obj["eTimes.01"].vSet[0].val);
                }
            };

            if (typeof obj["eTimes.02"] != 'undefined') {
                if (obj["eTimes.02"].IsNull == false) {
                    XML.WES("eTimes.02", obj["eTimes.02"].vSet[0].val);
                }
            };

            if (typeof obj["eTimes.03"] != 'undefined') {
                if (obj["eTimes.03"].IsNull == false) {
                    XML.WES("eTimes.03", obj["eTimes.03"].vSet[0].val);
                }
            };

            if (typeof obj["eTimes.04"] != 'undefined') {
                if (obj["eTimes.04"].IsNull == false) {
                    XML.WES("eTimes.04", obj["eTimes.04"].vSet[0].val);
                }
            };

            if (typeof obj["eTimes.05"] != 'undefined') {
                if (obj["eTimes.05"].IsNull == false) {
                    XML.WES("eTimes.05", obj["eTimes.05"].vSet[0].val);
                }
            };

            if (typeof obj["eTimes.06"] != 'undefined') {
                if (obj["eTimes.06"].IsNull == false) {
                    XML.WES("eTimes.06", obj["eTimes.06"].vSet[0].val);
                }
            };

            if (typeof obj["eTimes.07"] != 'undefined') {
                if (obj["eTimes.07"].IsNull == false) {
                    XML.WES("eTimes.07", obj["eTimes.07"].vSet[0].val);
                }
            };

            if (typeof obj["eTimes.08"] != 'undefined') {
                if (obj["eTimes.08"].IsNull == false) {
                    XML.WES("eTimes.08", obj["eTimes.08"].vSet[0].val);
                }
            };
            if (typeof obj["eTimes.09"] != 'undefined') {
                if (obj["eTimes.09"].IsNull == false) {
                    XML.WES("eTimes.09", obj["eTimes.09"].vSet[0].val);
                }
            };

            if (typeof obj["eTimes.10"] != 'undefined') {
                if (obj["eTimes.10"].IsNull == false) {
                    XML.WES("eTimes.10", obj["eTimes.10"].vSet[0].val);
                }
            };

            if (typeof obj["eTimes.11"] != 'undefined') {
                if (obj["eTimes.11"].IsNull == false) {
                    XML.WES("eTimes.11", obj["eTimes.11"].vSet[0].val);
                }
            };

            if (typeof obj["eTimes.12"] != 'undefined') {
                if (obj["eTimes.12"].IsNull == false) {
                    XML.WES("eTimes.12", obj["eTimes.12"].vSet[0].val);
                }
            };

            if (typeof obj["eTimes.13"] != 'undefined') {
                if (obj["eTimes.13"].IsNull == false) {
                    XML.WES("eTimes.13", obj["eTimes.13"].vSet[0].val);
                }
            };

            if (typeof obj["eTimes.14"] != 'undefined') {
                if (obj["eTimes.14"].IsNull == false) {
                    XML.WES("eTimes.14", obj["eTimes.14"].NVal);
                }
            };
            if (typeof obj["eTimes.15"] != 'undefined') {
                if (obj["eTimes.15"].IsNull == false) {
                    XML.WES("eTimes.15", obj["eTimes.15"].vSet[0].val);
                }
            };

            if (typeof obj["eTimes.16"] != 'undefined') {
                if (obj["eTimes.16"].IsNull == false) {
                    XML.WES("eTimes.16", obj["eTimes.16"].vSet[0].val);
                }
            };
            XML.WEE()
        };
        if (typeof TheCall.eResponse != 'undefined') {
            var obj = {};
            obj = TheCall.eResponse;
            XML.WSE("eResponse");
            if (typeof obj["AgencyGroup"] != 'undefined') {
                var objA = obj["AgencyGroup"];
                XML.WSE("eResponse.AgencyGroup");
                if (typeof objA["eResponse.01"] != 'undefined') {
                    if (objA["eResponse.01"].IsNull == false) {
                        XML.WES("eResponse.01", escapeXml(objA["eResponse.01"].vSet[0].val));
                    }
                };

                if (typeof objA["eResponse.02"] != 'undefined') {
                    if (objA["eResponse.02"].IsNull == false) {
                        XML.WES("eResponse.02", escapeXml(objA["eResponse.02"].vSet[0].val));
                    }
                };
                XML.WEE();
            };

            if (typeof obj["AgencyServiceGroup"] != 'undefined') {
                XML.WSE("eResponse.AgencyServiceGroup");
                var objS = obj["AgencyServiceGroup"];
                if (typeof objS["eResponse.05"] != 'undefined') {
                    if (objS["eResponse.05"].IsNull == false) {
                        XML.WES("eResponse.05", objS["eResponse.05"].vSet[0].val);
                    }
                };
                XML.WEE();
            };

            if (typeof obj["eResponse.07"] != 'undefined') {
                if (obj["eResponse.07"].IsNull == false) {
                    XML.WES("eResponse.07", obj["eResponse.07"].vSet[0].val);
                }
            };

            if (typeof obj["eResponse.13"] != 'undefined') {
                if (obj["eResponse.13"].IsNull == false) {
                    XML.WES("eResponse.13", escapeXml(obj["eResponse.13"].vSet[0].val));
                }
            };

            if (typeof obj["eResponse.14"] != 'undefined') {
                if (obj["eResponse.14"].IsNull == false) {
                    XML.WES("eResponse.14", escapeXml(obj["eResponse.14"].vSet[0].val));
                }
            };

            if (typeof obj["eResponse.15"] != 'undefined') {
                if (obj["eResponse.15"].IsNull == false) {
                    XML.WES("eResponse.15", obj["eResponse.15"].vSet[0].val);
                }
            };


            if (typeof obj["eResponse.19"] != 'undefined') {
                if (obj["eResponse.19"].IsNull == false) {
                    XML.WES("eResponse.19", obj["eResponse.19"].vSet[0].val);
                }
            };

            if (typeof obj["eResponse.20"] != 'undefined') {
                if (obj["eResponse.20"].IsNull == false) {
                    XML.WES("eResponse.20", obj["eResponse.20"].vSet[0].val);
                }
            };

            if (typeof obj["eResponse.21"] != 'undefined') {
                if (obj["eResponse.21"].IsNull == false) {
                    XML.WES("eResponse.21", obj["eResponse.21"].vSet[0].val);
                }
            };

            if (typeof obj["eResponse.22"] != 'undefined') {
                if (obj["eResponse.22"].IsNull == false) {
                    XML.WES("eResponse.22", obj["eResponse.22"].vSet[0].val);
                }
            };

            XML.WEE();
        };
        if (typeof TheCall.ePatient != 'undefined') {
            XML.WSE("ePatient")
            var obj = {};
            obj = TheCall.ePatient;

            if (typeof obj["ePatient.01"] != 'undefined') {
                if (obj["ePatient.01"].IsNull == false) {
                    XML.WES("ePatient.01", escapeXml(obj["ePatient.01"].vSet[0].val));
                }
            };

            if (typeof obj.PatientNameGroup != 'undefined') {
                XML.WSE("ePatient.PatientNameGroup")
                var objN = obj.PatientNameGroup;

                if (typeof objN["ePatient.02"] != 'undefined') {
                    if (objN["ePatient.02"].IsNull == false) {
                        XML.WES("ePatient.02", escapeXml(objN["ePatient.02"].vSet[0].val));
                    }
                };

                if (typeof objN["ePatient.03"] != 'undefined') {
                    if (objN["ePatient.03"].IsNull == false) {
                        XML.WES("ePatient.03", escapeXml(objN["ePatient.03"].vSet[0].val));
                    }
                };
                XML.WEE();
            };

            if (typeof obj["ePatient.05"] != 'undefined') {
                if (obj["ePatient.05"].IsNull == false) {
                    XML.WES("ePatient.05", escapeXml(obj["ePatient.05"].vSet[0].val));
                }
            };

            if (typeof obj["ePatient.06"] != 'undefined') {
                if (obj["ePatient.06"].IsNull == false) {
                    XML.WES("ePatient.06", obj["ePatient.06"].vSet[0].val);
                }
            };

            if (typeof obj["ePatient.08"] != 'undefined') {
                if (obj["ePatient.08"].IsNull == false) {
                    XML.WES("ePatient.08", obj["ePatient.08"].vSet[0].val);
                }
                else {
                    if (typeof obj["ePatient.08"].NV != 'undefined') {
                        if (obj["ePatient.08"].NV == true) {
                            XML.WSE('ePatient.08');
                            XML.WAS('xsi:nil', 'true');
                            XML.WAS('NV', obj["ePatient.08"].NVal);
                            XML.WEE();
                        }
                    }
                }
            };

            if (typeof obj["ePatient.09"] != 'undefined') {
                if (obj["ePatient.09"].IsNull == false) {
                    XML.WES("ePatient.09", obj["ePatient.09"].vSet[0].val);
                }
                else {
                    if (typeof obj["ePatient.09"].NV != 'undefined') {
                        if (obj["ePatient.09"].NV == true) {
                            XML.WSE('ePatient.09');
                            XML.WAS('xsi:nil', 'true');
                            XML.WAS('NV', obj["ePatient.09"].NVal);
                            XML.WEE();
                        }
                    }
                }
            };

            if (typeof obj["ePatient.10"] != 'undefined') {
                if (obj["ePatient.10"].IsNull == false) {
                    XML.WES("ePatient.10", obj["ePatient.10"].vSet[0].val);
                }
            };

            if (typeof obj["ePatient.12"] != 'undefined') {
                if (obj["ePatient.12"].IsNull == false) {
                    XML.WES("ePatient.12", obj["ePatient.12"].vSet[0].val);
                }
            };

            if (typeof obj["ePatient.13"] != 'undefined') {
                if (obj["ePatient.13"].IsNull == false) {
                    XML.WES("ePatient.13", obj["ePatient.13"].vSet[0].val);
                }
            };

            if (typeof obj.AgeGroup != 'undefined') {
                if (typeof obj.AgeGroup["ePatient.15"] != 'undefined') {
                    XML.WSE("ePatient.AgeGroup")
                    var oA = obj.AgeGroup;
                    if (typeof oA["ePatient.15"] != 'undefined') {
                        if (oA["ePatient.15"].IsNull == false) {
                            XML.WES("ePatient.15", oA["ePatient.15"].vSet[0].val);
                        }
                    };

                    if (typeof oA["ePatient.16"] != 'undefined') {
                        if (oA["ePatient.16"].IsNull == false) {
                            XML.WES("ePatient.16", oA["ePatient.16"].vSet[0].val);
                        }
                    };
                    XML.WEE()
                }
            };

            if (typeof obj["ePatient.17"] != 'undefined') {
                if (obj["ePatient.17"].IsNull == false) {
                    XML.WES("ePatient.17", getDOB(obj["ePatient.17"].vSet[0].val));
                }
            };

            if (typeof obj["ePatient.18"] != 'undefined') {
                if (obj["ePatient.18"].IsNull == false) {
                }
            };

            if (typeof obj["ePatient.19"] != 'undefined') {
                if (obj["ePatient.19"].IsNull == false) {
                    for (var i = 0; i <= obj["ePatient.19"].vSet.length - 1; i++) {
                        if (typeof obj["ePatient.19"].vSet[i].eMailType != 'undefined') {
                            if (obj["ePatient.19"].vSet[i].eMailType != "") {
                                XML.WSE('ePatient.19');
                                XML.WAS('EmailAddressType', obj["ePatient.19"].vSet[i].eMailType);
                                XML.WS(escapeXml(obj["ePatient.19"].vSet[i].val));
                                XML.WEE();
                            }
                            else {

                                XML.WES("ePatient.19", escapeXml(obj["ePatient.19"].vSet[i].val));
                            }
                        }
                    }
                }
            };

            if (typeof obj["ePatient.20"] != 'undefined') {
                if (typeof obj["ePatient.20"] != 'undefined') {
                    if (obj["ePatient.20"].IsNull == false) {
                        XML.WES("ePatient.20", obj["ePatient.20"].vSet[0].val);
                    }
                }
            };

            if (typeof obj["ePatient.21"] != 'undefined') {
                if (typeof obj["ePatient.21"] != 'undefined') {
                    if (obj["ePatient.21"].IsNull == false) {
                        XML.WES("ePatient.21", escapeXml(obj["ePatient.21"].vSet[0].val));
                    }
                }
            };
            XML.WEE()
        };
        if (typeof TheCall.ePayment != 'undefined') {
            var obj = {};

            var obj = TheCall.ePayment;
            XML.WSE("ePayment")
            if (typeof obj["ePayment.01"] != 'undefined') {
                if (obj["ePayment.01"].IsNull == false) {
                    XML.WES("ePayment.01", obj["ePayment.01"].vSet[0].val);
                }
            };

            if (typeof obj["CertificateGroup"] != 'undefined') {
                var objCI = new Object();
                objCI = obj["CertificateGroup"];
                XML.WSE("ePayment.CertificateGroup")

                if (typeof objCI["ePayment.02"] != 'undefined') {
                    if (objCI["ePayment.02"].IsNull == false) {
                        XML.WES("ePayment.02", objCI["ePayment.02"].vSet[0].val);
                    }
                };
                if (typeof objCI["ePayment.03"] != 'undefined') {
                    if (objCI["ePayment.03"].IsNull == false) {
                        XML.WES("ePayment.03", objCI["ePayment.03"].vSet[0].val);
                    }
                };

                if (typeof objCI["ePayment.04"] != 'undefined') {
                    if (objCI["ePayment.04"].IsNull == false) {
                        for (var d = 0; d < objCI["ePayment.04"].vSet.length; d++) {
                            XML.WES("ePayment.04", objCI["ePayment.04"].vSet[d].val);
                        }
                    }
                }
                if (typeof objCI["ePayment.05"] != 'undefined') {
                    if (objCI["ePayment.05"].IsNull == false) {
                        XML.WES("ePayment.05", objCI["ePayment.05"].vSet[0].val);
                    }
                };
                if (typeof objCI["ePayment.06"] != 'undefined') {
                    if (objCI["ePayment.06"].IsNull == false) {
                        XML.WES("ePayment.06", escapeXml(objCI["ePayment.06"].vSet[0].val));
                    }
                };
                if (typeof objCI["ePayment.07"] != 'undefined') {
                    if (objCI["ePayment.07"].IsNull == false) {
                        XML.WES("ePayment.07", escapeXml(objCI["ePayment.07"].vSet[0].val));
                    }
                };
                XML.WEE();
            };

            if (typeof obj["ePayment.08"] != 'undefined') {
                if (obj["ePayment.08"].IsNull == false) {
                    XML.WES("ePayment.08", obj["ePayment.08"].vSet[0].val);
                }
            };
            if (typeof obj["Insurancegroup"] != 'undefined') {
                for (var d = 0; d < obj["InsuranceGroup"].vSet.length ; d++) {
                    var obj1 = new Object();
                    obj1 = obj["InsuranceGroup"][d];
                    XML.WSE("ePayment.InsuranceGroup")

                    if (typeof obj1["ePayment.09"] != 'undefined') {
                        if (obj1["ePayment.09"].IsNull == false) {
                            XML.WES("ePayment.09", escapeXml(obj1["ePayment.09"].vSet[0].val));
                        }
                    };
                    if (typeof obj1["ePayment.10"] != 'undefined') {
                        if (obj1["ePayment.10"].IsNull == false) {
                            XML.WES("ePayment.10", escapeXml(obj1["ePayment.10"].vSet[0].val));
                        }
                    };
                    if (typeof obj1["ePayment.11"] != 'undefined') {
                        if (obj1["ePayment.11"].IsNull == false) {
                            XML.WES("ePayment.11", obj1["ePayment.11"].vSet[0].val);
                        }
                    };
                    if (typeof obj1["ePayment.12"] != 'undefined') {
                        if (obj1["ePayment.12"].IsNull == false) {
                            XML.WES("ePayment.12", escapeXml(obj1["ePayment.12"].vSet[0].val));
                        }
                    };
                    if (typeof obj1["ePayment.13"] != 'undefined') {
                        if (obj1["ePayment.13"].IsNull == false) {
                            XML.WES("ePayment.13", escapeXml(obj1["ePayment.13"].vSet[0].val));
                        }
                    };
                    if (typeof obj1["ePayment.14"] != 'undefined') {
                        if (obj1["ePayment.14"].IsNull == false) {
                            XML.WES("ePayment.14", obj1["ePayment.14"].vSet[0].val);
                        }
                    };
                    if (typeof obj1["ePayment.15"] != 'undefined') {
                        if (obj1["ePayment.15"].IsNull == false) {
                            XML.WES("ePayment.15", obj1["ePayment.15"].vSet[0].val);
                        }
                    };
                    if (typeof obj1["ePayment.16"] != 'undefined') {
                        if (obj1["ePayment.16"].IsNull == false) {
                            ins["ePayment.16"] = obj1["ePayment.16"].vSet[0];
                            XML.WES("ePayment.16", obj1["ePayment.16"].vSet[0].val);
                        }
                    };
                    if (typeof obj1["ePayment.17"] != 'undefined') {
                        if (obj1["ePayment.17"].IsNull == false) {
                            XML.WES("ePayment.17", escapeXml(obj1["ePayment.17"].vSet[0].val));
                        }
                    };
                    if (typeof obj1["ePayment.18"] != 'undefined') {
                        if (obj1["ePayment.18"].IsNull == false) {
                            XML.WES("ePayment.18", escapeXml(obj1["ePayment.18"].vSet[0].val));
                        }
                    };
                    if (typeof obj1["ePayment.19"] != 'undefined') {
                        if (obj1["ePayment.19"].IsNull == false) {
                            XML.WES("ePayment.19", escapeXml(obj1["ePayment.19"].vSet[0].val));
                        }
                    };
                    if (typeof obj1["ePayment.20"] != 'undefined') {
                        if (obj1["ePayment.20"].IsNull == false) {
                            XML.WES("ePayment.20", escapeXml(obj1["ePayment.20"].vSet[0].val));
                        }
                    };
                    if (typeof obj1["ePayment.21"] != 'undefined') {
                        if (obj1["ePayment.21"].IsNull == false) {
                            XML.WES("ePayment.21", escapeXml(obj1["ePayment.21"].vSet[0].val));
                        }
                    };
                    if (typeof obj1["ePayment.22"] != 'undefined') {
                        if (obj1["ePayment.22"].IsNull == false) {
                            XML.WES("ePayment.22", obj1["ePayment.22"].vSet[0].val);
                        }
                    };
                    XML.WEE();
                }
            };
            if (typeof obj["ClosestRelativeGroup"] != 'undefined') {
                var objC = new Object();
                objC = obj["ClosestRelativeGroup"];
                {
                    XML.WSE("ePayment.ClosestRelativeGroup")
                    if (typeof objC["ePayment.23"] != 'undefined') {
                        if (objC["ePayment.23"].IsNull == false) {
                            XML.WES("ePayment.23", escapeXml(objC["ePayment.23"].vSet[0].val));
                        }
                    };

                    if (typeof objC["ePayment.24"] != 'undefined') {
                        if (objC["ePayment.24"].IsNull == false) {
                            XML.WES("ePayment.24", escapeXml(objC["ePayment.24"].vSet[0].val));
                        }
                    };
                    if (typeof objC["ePayment.25"] != 'undefined') {
                        if (objC["ePayment.25"].IsNull == false) {
                            XML.WES("ePayment.25", escapeXml(objC["ePayment.25"].vSet[0].val));
                        }
                    };

                    if (typeof objC["ePayment.26"] != 'undefined') {
                        if (objC["ePayment.26"].IsNull == false) {
                            XML.WES("ePayment.26", escapeXml(objC["ePayment.26"].vSet[0].val));
                        }
                    };

                    if (typeof objC["ePayment.27"] != 'undefined') {
                        if (objC["ePayment.27"].IsNull == false) {
                            XML.WES("ePayment.27", objC["ePayment.27"].vSet[0].val);
                        }
                    };

                    if (typeof objC["ePayment.28"] != 'undefined') {
                        if (objC["ePayment.28"].IsNull == false) {
                            XML.WES("ePayment.28", objC["ePayment.28"].vSet[0].val);
                        }
                    };

                    if (typeof objC["ePayment.29"] != 'undefined') {
                        if (objC["ePayment.29"].IsNull == false) {
                            XML.WES("ePayment.29", objC["ePayment.29"].vSet[0].val);
                        }
                    };

                    if (typeof objC["ePayment.30"] != 'undefined') {
                        if (objC["ePayment.30"].IsNull == false) {
                            XML.WES("ePayment.30", objC["ePayment.30"].vSet[0].val);
                        }
                    };

                    if (typeof objC["ePayment.31"] != 'undefined') {
                        if (objC["ePayment.31"].IsNull == false) {
                            for (var d = 0; d < objC["ePayment.31"].vSet.length; d++) {
                                XML.WES("ePayment.31", escapeXml(objC["ePayment.31"].vSet[d].val));
                            }
                        }
                    };

                    if (typeof objC["ePayment.32"] != 'undefined') {
                        if (objC["ePayment.32"].IsNull == false) {
                            XML.WES("ePayment.32", objC["ePayment.32"].vSet[0].val);
                        }
                    };

                    XML.WEE();
                }
            };
            if (typeof obj["EmployerGroup"] != 'undefined') {
                var objE = new Object();
                objE = obj["EmployerGroup"];
                XML.WSE("ePayment.EmployerGroup")
                if (typeof objE["ePayment.33"] != 'undefined') {
                    if (objE["ePayment.33"].IsNull == false) {
                        XML.WES("ePayment.33", escapeXml(objE["ePayment.33"].vSet[0].val));
                    }
                };

                if (typeof objE["ePayment.34"] != 'undefined') {
                    if (objE["ePayment.34"].IsNull == false) {
                        XML.WES("ePayment.34", escapeXml(objE["ePayment.34"].vSet[0].val));
                    }
                };

                if (typeof objE["ePayment.35"] != 'undefined') {
                    if (objE["ePayment.35"].IsNull == false) {
                        XML.WES("ePayment.35", escapeXml(objE["ePayment.35"].vSet[0].val));
                    }
                };

                if (typeof objE["ePayment.36"] != 'undefined') {
                    if (objE["ePayment.36"].IsNull == false) {
                        XML.WES("ePayment.36", objE["ePayment.36"].vSet[0].val);
                    }
                };

                if (typeof objE["ePayment.37"] != 'undefined') {
                    if (objE["ePayment.37"].IsNull == false) {
                        XML.WES("ePayment.37", objE["ePayment.37"].vSet[0].val);
                    }
                };

                if (typeof objE["ePayment.38"] != 'undefined') {
                    if (objE["ePayment.38"].IsNull == false) {
                        XML.WES("ePayment.38", objE["ePayment.38"].vSet[0].val);
                    }
                };

                if (typeof objE["ePayment.39"] != 'undefined') {
                    if (objE["ePayment.39"].IsNull == false) {
                        XML.WES("ePayment.39", escapeXml(objE["ePayment.39"].vSet[0].val));
                    }
                };

                XML.WEE();
            };

            if (typeof obj["ePayment.40"] != 'undefined') {
                if (obj["ePayment.40"].IsNull == false) {
                    XML.WES("ePayment.40", obj["ePayment.40"].vSet[0].val);
                }
            };
            if (typeof obj["ePayment.41"] != 'undefined') {
                if (obj["ePayment.41"].IsNull == false) {
                    for (var d = 0; d < obj["ePayment.41"].vSet.length; d++) {
                        XML.WES("ePayment.41", obj["ePayment.41"].vSet[d].val);
                    }
                }
            };
            if (typeof obj["ePayment.42"] != 'undefined') {
                if (obj["ePayment.42"].IsNull == false) {
                    for (var d = 0; d < obj["ePayment.42"].vSet.length; d++) {
                        XML.WES("ePayment.42", obj["ePayment.42"].vSet[d].val);
                    }
                }
            };
            if (typeof obj["ePayment.43"] != 'undefined') {
                if (obj["ePayment.43"].IsNull == false) {
                    XML.WES("ePayment.43", obj["ePayment.43"].vSet[0].val);
                }
            };
            if (typeof obj["ePayment.44"] != 'undefined') {
                if (obj["ePayment.44"].IsNull == false) {
                    for (var d = 0; d < obj["ePayment.44"].vSet.length; d++) {
                        XML.WES("ePayment.44", obj["ePayment.44"].vSet[d].val);
                    }
                }
            };
            if (typeof obj["ePayment.45"] != 'undefined') {
                if (obj["ePayment.45"].IsNull == false) {
                    XML.WES("ePayment.45", escapeXml(obj["ePayment.45"].vSet[0].val));
                }
            }
            if (typeof obj["ePayment.46"] != 'undefined') {
                if (obj["ePayment.46"].IsNull == false) {
                    XML.WES("ePayment.46", escapeXml(obj["ePayment.46"].vSet[0].val));
                }
            }
            if (typeof obj["ePayment.47"] != 'undefined') {
                if (obj["ePayment.47"].IsNull == false) {
                    for (var d = 0; d < obj["ePayment.47"].vSet.length; d++) {
                        XML.WES("ePayment.47", obj["ePayment.47"].vSet[d].val);
                    }
                }
            }
            if (typeof obj["ePayment.48"] != 'undefined') {
                if (obj["ePayment.48"].IsNull == false) {
                    XML.WES("ePayment.48", obj["ePayment.48"].vSet[0].val);
                }
            }
            if (typeof obj["ePayment.49"] != 'undefined') {
                if (obj["ePayment.49"].IsNull == false) {
                    XML.WES("ePayment.49", obj["ePayment.49"].vSet[0].val);
                }
            };

            if (typeof obj["ePayment.50"] != 'undefined') {
                if (obj["ePayment.50"].IsNull == false) {
                    XML.WES("ePayment.50", obj["ePayment.50"].vSet[0].val);
                }
                else {
                    if (typeof obj["ePayment.50"].NV != 'undefined') {
                        if (obj["ePayment.50"].NV == true) {
                            XML.WSE('ePayment.50');
                            XML.WAS('xsi:nil', 'true');
                            XML.WAS('NV', obj["ePayment.50"].NVal);
                            XML.WEE();
                        }
                    }
                }
            };
            if (typeof obj["ePayment.51"] != 'undefined') {
                if (obj["ePayment.51"].IsNull == false) {
                    for (var d = 0; d < obj["ePayment.51"].vSet.length; d++) {
                        XML.WES("ePayment.51", obj["ePayment.51"].vSet[d].val);
                    }
                }
            }

            if (typeof obj["ePayment.52"] != 'undefined') {
                if (obj["ePayment.52"].IsNull == false) {
                    for (var d = 0; d < obj["ePayment.52"].vSet.length; d++) {
                        XML.WES("ePayment.52", obj["ePayment.52"].vSet[d].val);
                    }
                }
            };

            if (typeof obj["ePayment.53"] != 'undefined') {
                if (obj["ePayment.53"].IsNull == false) {
                    XML.WES("ePayment.53", escapeXml(obj["ePayment.53"].vSet[0].val));
                }
            };

            if (typeof obj["ePayment.54"] != 'undefined') {
                if (obj["ePayment.54"].IsNull == false) {
                    XML.WES("ePayment.54", escapeXml(obj["ePayment.54"].vSet[0].val));
                }
            };

            if (typeof obj["SupplyItemGroup"] != 'undefined') {
                for (var d = 0; d < obj["SupplyItemGroup"].length ; d++) {
                    var obj2 = {}
                    obj2 = obj["SupplyItemGroup"][d]
                    XML.WSE("ePayment.SupplyItemGroup")
                    if (typeof obj2["ePayment.55"] != 'undefined') {
                        if (obj2["ePayment.55"].IsNull == false) {
                            XML.WES("ePayment.55", escapeXml(obj2["ePayment.55"].vSet[0].val));
                        }
                    };

                    if (typeof obj2["ePayment.56"] != 'undefined') {
                        if (obj2["ePayment.56"].IsNull == false) {
                            XML.WES("ePayment.56", obj2["ePayment.56"].vSet[0].val);
                        }
                    };
                    XML.WEE();
                };
            };
            XML.WEE();
        };
        if (typeof TheCall.eScene != 'undefined') {
            var obj = {};
            var obj = TheCall.eScene
            XML.WSE("eScene")

            if (typeof obj["eScene.15"] != 'undefined') {
                if (obj["eScene.15"].IsNull == false) {
                    XML.WES("eScene.15", escapeXml(obj["eScene.15"].vSet[0].val));
                }
            };

            if (typeof obj["eScene.16"] != 'undefined') {
                if (obj["eScene.16"].IsNull == false) {
                    XML.WES("eScene.16", escapeXml(obj["eScene.16"].vSet[0].val));
                }
            };

            if (typeof obj["eScene.17"] != 'undefined') {
                if (obj["eScene.17"].IsNull == false) {
                    XML.WES("eScene.17", obj["eScene.17"].vSet[0].val);
                }
            };

            if (typeof obj["eScene.18"] != 'undefined') {
                if (obj["eScene.18"].IsNull == false) {
                    XML.WES("eScene.18", obj["eScene.18"].vSet[0].val);
                }
            };

            if (typeof obj["eScene.19"] != 'undefined') {
                if (obj["eScene.19"].IsNull == false) {
                    XML.WES("eScene.19", obj["eScene.19"].vSet[0].val);
                }
            };


            if (typeof obj["eScene.21"] != 'undefined') {
                if (obj["eScene.21"].IsNull == false) {
                    XML.WES("eScene.21", obj["eScene.21"].vSet[0].val);
                }
            };
            XML.WEE();
        };
        if (typeof TheCall.eNarrative != 'undefined') {

            if (typeof TheCall.eNarrative["eNarrative.01"] != 'undefined') {

                if (TheCall.eNarrative["eNarrative.01"].IsNull == false) {
                    XML.WSE("eNarrative");
                    XML.WES("eNarrative.01", escapeXml(TheCall.eNarrative["eNarrative.01"].vSet[0]));
                    XML.WEE();
                }
                else {
                    if (typeof TheCall.eNarrative["eNarrative.01"].NV != 'undefined') {
                        if (TheCall.eNarrative["eNarrative.01"].NV == true) {

                            XML.WSE("eNarrative");
                            XML.WSE('eNarrative.01');
                            XML.WAS('xsi:nil', 'true');
                            XML.WAS('NV', TheCall.eNarrative["eNarrative.01"].vSet[0]);
                            XML.WEE();
                            XML.WEE();
                        }
                    }
                }
            }
        };
        if (typeof TheCall.eCrew != 'undefined') {
            if (typeof TheCall.eCrew["CrewGroup"] != 'undefined') {
                XML.WSE("eCrew");
                for (var x = 0; x < TheCall.eCrew["CrewGroup"].length; x++) {
                    var obj = {};
                    obj = TheCall.eCrew["CrewGroup"][x]

                    XML.WSE("eCrew.CrewGroup");


                    if (typeof obj["eCrew.01"] != 'undefined') {
                        if (obj["eCrew.01"].IsNull == false) {
                            XML.WES("eCrew.01", escapeXml(obj["eCrew.01"].vSet[0].val));
                        }
                    };

                    if (typeof obj["eCrew.02"] != 'undefined') {
                        if (obj["eCrew.02"].IsNull == false) {
                            XML.WES("eCrew.02", obj["eCrew.02"].vSet[0].val);
                        }
                    };
                    if (typeof obj["eCrew.03"] != 'undefined') {
                        if (obj["eCrew.03"].IsNull == false) {
                            for (var i = 0; i < obj["eCrew.03"].vSet.length; i++) {
                                XML.WES("eCrew.03", obj["eCrew.03"].vSet[i].val);
                            }
                        };
                        XML.WEE();
                    }
                }
                XML.WEE();
            }
        };
        XML.WEE();
    }
    var XMLDoc = XML.flush()
    return XMLDoc;
};

function escapeXml(unsafe) {
    if (typeof unsafe != 'undefined') {
        if (unsafe != null) {
            return unsafe.replace(/[<>&'"]/g, function (c) {
                switch (c) {
                    case '<': return '&lt;';
                    case '>': return '&gt;';
                    case '&': return '&amp;';
                    case '\'': return '&apos;';
                    case '"': return '&quot;';
                }
            });
        }
    }

};


