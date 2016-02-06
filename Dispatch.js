u = require('cloud/Utilities.js');
exports.seteRecord = function (pcrObj, NemsisList) {
    u.RaiseError("seteRecord", 100, "Dispatch.js", "seteRecord");
    if (typeof pcrObj === 'undefined') {
        u.RaiseError("eRecordObject Null or Undefined", 0, "eRecord34")
        return null
    }
    else {
        var pRecord = pcrObj;
    };
    //////////////////////eRecord.01
    if (pRecord.HasDataSet == false) {
        u.RaiseError("seteRecord", 0, "eRecord34", "pRecord Null or Undefined")
        return null;
    };

    if (pRecord.attributes.elements === 'undefined') {
        u.RaiseError("seteRecord", 0, "eRecord34", "pRecord Null or Undefined")
        return null;
    };

    //Element Array List
    if (typeof pRecord.attributes.sections === 'undefined') {
        u.RaiseError("seteRecord", 0, "eRecord34", "pRecord Null or Undefined")
        return null
    };

    if (typeof eRecord === 'undefined') {
        var eRecord = new Object();
    };

    var _el = [];

    _el = (pRecord.attributes.elements);

    if (_el.length >= 0) {
        var eRecord = new Object();
        try {
            eRecord["eRecord.01"] = u.setBusinessObject(_el, NemsisList, "eRecord.01");
        }
        catch (e) {
            u.RaiseError("eRecord.01", 1, "eRecord34", e);
        };

        _sI = u.getSectionIndex(pRecord, "eRecord.SoftwareApplicationGroup");
        if (_sI[0] == -1) {
            u.RaiseError("Section:eRecord.SoftwareApplicationGroup", 0, "eRecords34", e);
            return null;
        }

        else {
            var _dL = [];  //section element array.  Item[0]==-1 indicates empty set
            var _dL = pRecord.attributes.sections[_sI].attributes.elements;
            if (_dL.length == 0) {
                u.RaiseError("eRecord Null or Undefined", 0, "eRecord34", e);
                return null;
            }
            else {
                //eRecord.02////////////////////////////////////////////
                try {
                    eRecord["eRecord.02"] = u.setBusinessObject(_dL, NemsisList, "eRecord.02")
                }
                catch (e) {
                    u.RaiseError("eRecord.02", 1, "eRecord34", e);
                };

                //eRecord.03////////////////////////////////////////////
                try {
                    eRecord["eRecord.03"] = u.setBusinessObject(_dL, NemsisList, "eRecord.03")
                }

                catch (e) {
                    u.RaiseError("eRecord.03", 1, "eRecord34", e);
                };
                //eRecord.04////////////////////////////////////////////

                try {
                    eRecord["eRecord.04"] = u.setBusinessObject(_dL, NemsisList, "eRecord.04")
                }
                catch (e) {
                    u.RaiseError("eRecord.04", 1, "eRecord34", e);
                };
            }
        }
    };

    if (typeof eRecord !== 'undefined') {
        return eRecord;
    }
    else {
        return null;
    }
};
exports.seteResponse = function (pcrObj, NemsisList) {
    u.RaiseError("seteResponse", 100, "Dispatch.js", "seteResponse");
    var CustomResults = [];

    pResponse = pcrObj
    if (pResponse.HasDataSet == false) {
        u.RaiseError("NULL Data set", 0, "eResponse34", e);
        return null;
    };

    ////////////////////////eResponse Elements

    if (typeof pResponse.attributes.elements !== 'undefined') {
        var _eL = [];
        _eL = pResponse.attributes.elements;
        if (_eL.length > 0) {
            var eResponse = new Object();

            //////////////////////eResponse.03
            try {
                eResponse["eResponse.03"] = u.setBusinessObject(_eL, NemsisList, "eResponse.03")
            }
            catch (e) {
                u.RaiseError("eResponse.03", 1, "eResponse34", e);
            };

            //////////////////////eResponse.04
            try {
                eResponse["eResponse.04"] = u.setBusinessObject(_eL, NemsisList, "eResponse.04")
            }
            catch (e) {
                u.RaiseError("eResponse.04", 1, "eResponse34", e);
            };

            //////////////////////eResponse.07
            try {
                eResponse["eResponse.07"] = u.setBusinessObject(_eL, NemsisList, "eResponse.07")
            }
            catch (e) {
                u.RaiseError("eResponse.07", 1, "eResponse34", e);
            };

            /////////////////////////////eResponse.08
            try {
                eResponse["eResponse.08"] = u.setBusinessObject(_eL, NemsisList, "eResponse.08")
            }
            catch (e) {
                u.RaiseError("eResponse.08", 1, "eResponse34", e);
            };

            /////////////////////////////eResponse.09
            try {
                eResponse["eResponse.09"] = u.setBusinessObject(_eL, NemsisList, "eResponse.09")
            }
            catch (e) {
                u.RaiseError("eResponse.09", 1, "eResponse34", e);
            };

            //////////////eResponse.10        
            try {
                eResponse["eResponse.10"] = u.setBusinessObject(_eL, NemsisList, "eResponse.10")
            }
            catch (e) {
                u.RaiseError("eResponse.10", 1, "eResponse34", e);
            };

            //////////////////////eResponse.11
            try {
                eResponse["eResponse.11"] = u.setBusinessObject(_eL, NemsisList, "eResponse.11")
            }
            catch (e) {
                u.RaiseError("eResponse.11", 1, "eResponse34", e);
            };

            //////////////////////eResponse.12
            try {
                eResponse["eResponse.12"] = u.setBusinessObject(_eL, NemsisList, "eResponse.12")
            }
            catch (e) {
                u.RaiseError("eResponse.12", 1, "eResponse34", e);
            };

            //////////////////////eResponse.13
            try {
                eResponse["eResponse.13"] = u.setBusinessObject(_eL, NemsisList, "eResponse.13")
            }
            catch (e) {
                u.RaiseError("eResponse.13", 1, "eResponse34", e);
            };

            //////////////////////eResponse.14
            try {
                eResponse["eResponse.14"] = u.setBusinessObject(_eL, NemsisList, "eResponse.14")
            }
            catch (e) {
                u.RaiseError("eResponse.14", 1, "eResponse34", e);
            };

            //////////////////////eResponse.15
            try {
                eResponse["eResponse.15"] = u.setBusinessObject(_eL, NemsisList, "eResponse.15")
            }
            catch (e) {
                u.RaiseError("eResponse.15", 1, "eResponse34", e);
            };

            //////////////////////eResponse.16
            try {
                eResponse["eResponse.16"] = u.setBusinessObject(_eL, NemsisList, "eResponse.16")
            }
            catch (e) {
                u.RaiseError("eResponse.16", 1, "eResponse34", e);
            };

            //////////////////////eResponse.17
            try {
                eResponse["eResponse.17"] = u.setBusinessObject(_eL, NemsisList, "eResponse.17")
            }
            catch (e) {
                u.RaiseError("eResponse.17", 1, "eResponse34", e);
            };
            //////////////////////eResponse.18
            try {
                eResponse["eResponse.18"] = u.setBusinessObject(_eL, NemsisList, "eResponse.18")
            }
            catch (e) {
                u.RaiseError("eResponse.18", 1, "eResponse34", e);
            };

            //////////////////////eResponse.19
            try {
                eResponse["eResponse.19"] = u.setBusinessObject(_eL, NemsisList, "eResponse.19")
            }
            catch (e) {
                u.RaiseError("eResponse.19", 1, "eResponse34", e);
            };

            //////////////////////eResponse.20
            try {
                eResponse["eResponse.20"] = u.setBusinessObject(_eL, NemsisList, "eResponse.20")
            }
            catch (e) {
                u.RaiseError("eResponse.20", 1, "eResponse34", e);
            };

            //////////////////////eResponse.21
            try {
                eResponse["eResponse.21"] = u.setBusinessObject(_eL, NemsisList, "eResponse.21")
            }
            catch (e) {
                u.RaiseError("eResponse.21", 1, "eResponse34", e);
            };

            //////////////////////eResponse.22
            try {
                eResponse["eResponse.22"] = u.setBusinessObject(_eL, NemsisList, "eResponse.22")
            }
            catch (e) {
                u.RaiseError("eResponse.22", 1, "eResponse34", e);
            };

            //////////////////////eResponse.23
            try {
                eResponse["eResponse.23"] = u.setBusinessObject(_eL, NemsisList, "eResponse.23")
            }
            catch (e) {
                u.RaiseError("eResponse.23", 1, "eResponse34", e);
            };

            //////////////////////eResponse.24
            try {
                eResponse["eResponse.24"] = u.setBusinessObject(_eL, NemsisList, "eResponse.24")
            }
            catch (e) {
                u.RaiseError("eResponse.24", 1, "eResponse34", e);
            }
        };


        if (typeof pResponse.attributes.sections !== 'undefined') {
            var _eSG = [];
            try {
                _eSG = u.getSectionIndex(pResponse, "eResponse.ServiceGroup");
            }
            catch (e) {
                u.RaiseError("eResponse.ServiceGroup", 1, "eResponse34", e);
            };

            var _SG = [];
            if (_eSG[0] !== -1) {
                _SG = pResponse.attributes.sections[_eSG].attributes.elements;
                if (_SG.length > 0) {
                    var _RSG = new Object();
                    //////////////////////eResponse.05    
                    try {
                        _RSG["eResponse.05"] = u.setBusinessObject(_SG, NemsisList, "eResponse.05")
                    }
                    catch (e) {
                        u.RaiseError("eResponse.05", 1, "eResponse34", e);
                    };

                    //////////////////////eResponse.06
                    try {
                        _RSG["eResponse.06"] = u.setBusinessObject(_SG, NemsisList, "eResponse.06")
                    }
                    catch (e) {
                        u.RaiseError("eResponse.06", 1, "eResponse34", e);
                    }
                }
            };

            ///////////////AgencyGroup
            var _cRG = [];
            try {
                _cRG = u.getSectionIndex(pResponse, "eResponse.AgencyGroup")
            }
            catch (e) {
                u.RaiseError("eResponse.AgencyGroup", 1, "eResponse34", e);
            };

            if (_cRG[0] !== -1) {
                var _eRG = [];
                _eRG = pResponse.attributes.sections[_cRG].attributes.elements;
                if (_eRG.length > 0) {
                    var _RAG = new Object();
                    //////////////////////eResponse.01
                    try {
                        _RAG["eResponse.01"] = u.setBusinessObject(_eRG, NemsisList, "eResponse.01")
                    }
                    catch (e) {
                        u.RaiseError("eResponse.01", 0, "eResponse34", e);
                    };

                    //////////////////////eResponse.02
                    try {
                        _RAG["eResponse.02"] = u.setBusinessObject(_eRG, NemsisList, "eResponse.02")
                    }
                    catch (e) {
                        u.RaiseError("eResponse.02", 1, "eResponse34", e);
                    }
                }
            }
        };
        if (typeof _RAG !== 'undefined') {
            if (typeof eResponse === 'undefined') {
                var eResponse = new Object();
            };
            eResponse.AgencyGroup = _RAG;
        };

        if (typeof _RSG !== 'undefined')
        {
            if (typeof eResponse === 'undefined') {
                var eResponse = new Object();
            };
            eResponse.ServiceGroup = _RSG;
        }

        if (typeof eResponse !== 'undefined') {
            eResponse.CustomResults = CustomResults;
        
            return eResponse
        }
        else {
            return Null
        }
    }
};
exports.seteDispatch = function (pcrObj, NemsisList) {
    u.RaiseError("seteDispatch", 100, "Dispatch.js", "seteDispatch");
    var pDispatch = pcrObj;
    if (pDispatch.HasDataSet == false) {
        u.RaiseError("Null Data set: eDispatch34", 0, "eDispatch34");
        return null;
    };

    if (typeof pDispatch.attributes.elements === 'undefined') {
        u.RaiseError("Null Data set: eDispatch34", 0, "eDispatch34");
        return null;
    };

    var _elementList = [];
    _elementList = pDispatch.attributes.elements;

    if (_elementList.length == 0) {
        u.RaiseError("Null ElementList: eDispatch34", 0, "eDispatch34");
        return null;
    };

    var eDispatch = new Object();

    //eDispatch.01//////////////////////////////////////////    
    try {
        eDispatch["eDispatch.01"] = u.setBusinessObject(_elementList, NemsisList, "eDispatch.01")
    }
    catch (e) {
        u.RaiseError("eDispatch.01", 1, "eDispatch34", e);
    };

    //eDispatch.02//////////////////////////////////////////
    try {
        eDispatch["eDispatch.02"] = u.setBusinessObject(_elementList, NemsisList, "eDispatch.02")
    }

    catch (e) {
        u.RaiseError("eDispatch.02", 1, "eDispatch34", e);
    };

    /////eDispatch.03////////////////////
    
    try {
        eDispatch["eDispatch.03"] = u.setBusinessObject(_elementList, NemsisList, "eDispatch.03")
    }

    catch (e) {
        u.RaiseError("eDispatch.03", 1, "eDispatch34", e);
    };

    /////eDispatch.04////////////////////
    try {
        eDispatch["eDispatch.04"] = u.setBusinessObject(_elementList, NemsisList, "eDispatch.04")
    }
    catch (e) {
        u.RaiseError("eDispatch.04", 1, "eDispatch34", e);
    };

    /////eDispatch.05////////////////////
    try {

        eDispatch["eDispatch.05"] = u.setBusinessObject(_elementList, NemsisList, "eDispatch.05")
    }

    catch (e) {
        u.RaiseError("eDispatch.05", 1, "eDispatch34", e);
    };


    /////eDispatch.06////////////////////
    try {
        eDispatch["eDispatch.06"] = u.setBusinessObject(_elementList, NemsisList, "eDispatch.06")
    }
    catch (e) {
        u.RaiseError("eDispatch.06", 1, "eDispatch34", e);
    };

    if (typeof eDispatch !== 'undefined') {
        return eDispatch;
    }
    else {
        return null;
    }
};
exports.seteDisposition = function (pcrObj, NemsisList) {
    u.RaiseError("seteDisposition", 100, "Dispatch.js", "seteDisposition");
    var pDisposition = pcrObj;    
    if (pDisposition.HasDataSet == false) {
        u.RaiseError("Null Data set", 0, "eDisposition34", e);
        return null;
    };

    if (typeof pDisposition.attributes.elements === 'undefined') {
        u.RaiseError("Null Data set", 0, "eDisposition34", e);
        return null;
    };

    var _eL = [];  //value element list
    _eL = pDisposition.attributes.elements;
    if (_eL.length == 0) {
        u.RaiseError("Null Data set", 0, "eDisposition34", e);
        return null;
    };

    //eDisposition.12
    var eDisposition = new Object();
    try {
        
        eDisposition["eDisposition.12"] = u.setBusinessObject(_eL, NemsisList, "eDisposition.12")
        
    }
    catch (e) {
        u.RaiseError("eDisposition.12", 1, "eDisposition34", e);
    };


    /////////////////////////////////


    if (typeof pDisposition.attributes.sections !== 'undefined') {
        var _sI = [];
        try {
            _sI = u.getSectionIndex(pDisposition, "eDisposition.DestinationGroup");
        }
        catch (e) {
            u.RaiseError("eDisposition.DestinationGroup", 1, "eDisposition34", e);
        };

        if (_sI[0] !== -1) {


            var _dEl = new Array();
            _dEl = pDisposition.attributes.sections[_sI[0]].attributes.elements;
            if (_dEl.length !== 0) {
                var DestinationGroup = new Object();
                //eDisposition.01///////////////////////////////////////////////////////////
                try {
                    DestinationGroup["eDisposition.01"] = u.setBusinessObject(_dEl, NemsisList, "eDisposition.01")
                }
                catch (e) {
                    u.RaiseError("eDisposition.01", 1, "eDisposition34", e);
                };


                //eDisposition.02///////////////////////////////////////////////////////////
                try {
                    DestinationGroup["eDisposition.02"] = u.setBusinessObject(_dEl, NemsisList, "eDisposition.02")
                }
                catch (e) {
                    u.RaiseError("eDisposition.02", 1, "eDisposition34", e);
                };
                //eDisposition.03/////////////////////////////////////////////////////////////
                try {
                    DestinationGroup["eDisposition.03"] = u.setBusinessObject(_dEl, NemsisList, "eDisposition.03")
                }
                catch (e) {
                    u.RaiseError("eDisposition.03", 1, "eDisposition34", e);
                };

                //eDisposition.04///////////////////////////////////////////////////////
                try {
                    DestinationGroup["eDisposition.04"] = u.setBusinessObject(_dEl, NemsisList, "eDisposition.04")
                }
                catch (e) {
                    u.RaiseError("eDisposition.04", 1, "eDisposition34", e);
                };

                //eDisposition.05/////////////////////////////////////////////
                try {
                    DestinationGroup["eDisposition.05"] = u.setBusinessObject(_dEl, NemsisList, "eDisposition.05")
                }
                catch (e) {
                    u.RaiseError("eDisposition.05", 1, "eDisposition34", e);
                };

                //eDisposition.06//////////////////////////////////////////////////////
                try {

                    DestinationGroup["eDisposition.06"] = u.setBusinessObject(_dEl, NemsisList, "eDisposition.06");
                    // Pad it out.  
                    if (DestinationGroup["eDisposition.06"].vSet[0].val.length == 2) {
                        DestinationGroup["eDisposition.06"].vSet[0].val = "0" + DestinationGroup["eDisposition.06"].vSet[0].val
                    };

                    if (DestinationGroup["eDisposition.06"].vSet[0].val.length == 1) {
                        DestinationGroup["eDisposition.06"].vSet[0].val = "00" + DestinationGroup["eDisposition.06"].vSet[0].val
                    };

                    if (typeof DestinationGroup["eDisposition.05"] !== 'undefined') {
                        DestinationGroup["eDisposition.06"].vSet[0].val = DestinationGroup["eDisposition.05"].vSet[0].val + DestinationGroup["eDisposition.06"].vSet[0].val;
                    };
                }
                catch (e) {
                    u.RaiseError("eDisposition.06", 1, "eDisposition34", e);
                };
                //eDisposition.07////////////////////////////////////////////////////
                try {
                    DestinationGroup["eDisposition.07"] = u.setBusinessObject(_dEl, NemsisList, "eDisposition.07")
                }
                catch (e) {
                    u.RaiseError("eDisposition.07", 1, "eDisposition34", e);
                };

                //eDisposition.08///////////////////////////////////////////////////
                try {
                    DestinationGroup["eDisposition.08"] = u.setBusinessObject(_dEl, NemsisList, "eDisposition.08")
                }
                catch (e) {
                    u.RaiseError("eDisposition.08", 1, "eDisposition34", e);
                };

                //eDisposition.09/////////////////////////////////////////
                try {
                    DestinationGroup["eDisposition.09"] = u.setBusinessObject(_dEl, NemsisList, "eDisposition.09")
                }
                catch (e) {
                    u.RaiseError("eDisposition.09", 1, "eDisposition34", e);
                };
                //eDisposition.10//////////////////////////////////////////
                try {
                    DestinationGroup["eDisposition.10"] = u.setBusinessObject(_dEl, NemsisList, "eDisposition.10")
                }
                catch (e) {
                    u.RaiseError("eDisposition.10", 1, "eDisposition34", e);
                }
            }
        }
    };


    //eDisposition.11/////////////////////////////////////////////////
    try {
        eDisposition["eDisposition.11"] = u.setBusinessObject(_eL, NemsisList, "eDisposition.11")
    }
    catch (e) {
        u.RaiseError("eDisposition.11", 1, "eDisposition34", e);
    };

    //eDisposition.13/////////////////////////////////////////////////////    
    try {
        eDisposition["eDisposition.13"] = u.setBusinessObject(_eL, NemsisList, "eDisposition.13")
    }
    catch (e) {
        u.RaiseError("eDisposition.13", 1, "eDisposition34", e);
    };

    //eDisposition.14/////////////////////////////////////////////////////
    try {
        eDisposition["eDisposition.14"] = u.setBusinessObject(_eL, NemsisList, "eDisposition.14")
    }
    catch (e) {
        u.RaiseError("eDisposition.14", 1, "eDisposition34", e);
    };

    //eDisposition.15////
    try {
        eDisposition["eDisposition.15"] = u.setBusinessObject(_eL, NemsisList, "eDisposition.15")
    }
    catch (e) {
        u.RaiseError("eDisposition.15", 1, "eDisposition34", e);
    };

    //eDisposition.16////
    try {
        eDisposition["eDisposition.16"] = u.setBusinessObject(_eL, NemsisList, "eDisposition.16")
    }
    catch (e) {
        u.RaiseError("eDisposition.16", 1, "eDisposition34", e);
    };

    //eDisposition.17////
    try {
        eDisposition["eDisposition.17"] = u.setBusinessObject(_eL, NemsisList, "eDisposition.17")
    }
    catch (e) {
        u.RaiseError("eDisposition.17", 1, "eDisposition34", e);
    };
    //eDisposition.18////
    try {
        eDisposition["eDisposition.18"] = u.setBusinessObject(_eL, NemsisList, "eDisposition.18")
    }
    catch (e) {
        u.RaiseError("eDisposition.18", 1, "eDisposition34", e);
    };
    //eDisposition.19////
    try {
        eDisposition["eDisposition.19"] = u.setBusinessObject(_eL, NemsisList, "eDisposition.19")
    }
    catch (e) {
        u.RaiseError("eDisposition.19", 1, "eDisposition34", e);
    };

    //eDisposition.20////
    try {
        eDisposition["eDisposition.20"] = u.setBusinessObject(_eL, NemsisList, "eDisposition.20")
    }
    catch (e) {
        u.RaiseError("eDisposition.20", 1, "eDisposition34", e);
    };
    //eDisposition.21////
    try {
        eDisposition["eDisposition.21"] = u.setBusinessObject(_eL, NemsisList, "eDisposition.21")
    }
    catch (e) {
        u.RaiseError("eDisposition.21", 1, "eDisposition34", e);
    };

    //eDisposition.22////
    try {
        eDisposition["eDisposition.22"] = u.setBusinessObject(_eL, NemsisList, "eDisposition.22")
    }
    catch (e) {
        u.RaiseError("eDisposition.22", 1, "eDisposition34", e);
    };
    //eDisposition.23////
    try {
        eDisposition["eDisposition.23"] = u.setBusinessObject(_eL, NemsisList, "eDisposition.23")
    }
    catch (e) {
        u.RaiseError("eDisposition.23", 1, "eDisposition34", e);
    };
    //eDisposition.26////
    try {
        eDisposition["eDisposition.24"] = u.setBusinessObject(_eL, NemsisList, "eDisposition.24")
    }
    catch (e) {
        u.RaiseError("eDisposition.24", 1, "eDisposition34", e);
    };

    var HTActivationArray = new Array();;
    if (typeof pDisposition.attributes.sections !== 'undefined') {
        var _hTAG = new Array();
        try {
            _hTAG = u.getSectionIndex(pDisposition, "eDisposition.HospitalTeamActivationGroup");
        }
        catch (e) {
            u.RaiseError("eDisposition.HospitalTeamActivationGroup", 1, "eDisposition34", e);
        };
        if (_hTAG[0] !== -1) {
            for (var i = 0; i < _hTAG.length; i++) {
                var hTG = new Object();
                var _dataList = pDisposition.attributes.sections[_hTAG[i]].attributes.elements;

                //eDisposition.24////                
                try {
                    hTG["eDisposition.24"] = u.setBusinessObject(_dataList, NemsisList, "eDisposition.24")
                }
                catch (e) {
                    u.RaiseError("eDisposition.24", 1, "eDisposition34", e);
                };
                //eDisposition.25////
                try {
                    hTG["eDisposition.25"] = u.setBusinessObject(_dataList, NemsisList, "eDisposition.25")
                }
                catch (e) {
                    u.RaiseError("eDisposition.25", 1, "eDisposition34", e);
                };
                HTActivationArray.push(hTG)
                hTG = undefined;
            }
        }
    };
    if (typeof eDisposition !== 'undefined') {
        if (typeof DestinationGroup !== 'undefined') {
            eDisposition.DestinationGroup = DestinationGroup;
        };
        if (HTActivationArray.length > 0) {
            var HospitalTeamActivationGroup = new Object();
            eDisposition.HospitalTeamActivationGroup = HTActivationArray.slice(0);
        };
        return eDisposition;
    }
    else {
        return null;
    }
};
exports.seteTimes = function (pcrObj, NemsisList) {
    u.RaiseError("seteTimes", 100, "Dispatch.js", "seteTimes");
    pTimes = pcrObj;
    if (pTimes.HasDataSet == false) {
        u.RaiseError("Null Data Set", 0, "eTimes34", e);
        return null;
    };

    if (typeof pTimes.attributes.elements !== 'undefined') {
        var _el = pTimes.attributes.elements;
        if (_el.length > 0) {
            var eTimes = new Object();
            //eTimes.01//////////////////      
            try {
                eTimes["eTimes.01"] = u.setBusinessObject(_el, NemsisList, "eTimes.01")
            }
            catch (e) {
                u.RaiseError("eTimes.01", 1, "eTimes34", e);
            };

            //eTimes.02/////////////////////////////////////////////////////////
            try {
                eTimes["eTimes.02"] = u.setBusinessObject(_el, NemsisList, "eTimes.02")
            }
            catch (e) {
                u.RaiseError("eTimes.02", 1, "eTimes34", e);
            };

            //eTimes.03//////////////////////////////////////////////////////
            try {
                eTimes["eTimes.03"] = u.setBusinessObject(_el, NemsisList, "eTimes.03")
            }
            catch (e) {
                u.RaiseError("eTimes.03", 1, "eTimes34", e);
            };
            //eTimes.04//////////////////////////////////////////////////
            try {
                eTimes["eTimes.04"] = u.setBusinessObject(_el, NemsisList, "eTimes.04")
            }
            catch (e) {
                u.RaiseError("eTimes.04", 1, "eTimes34", e);
            };
            //eTimes.05//////////////////////////////////////////////////
            try {
                eTimes["eTimes.05"] = u.setBusinessObject(_el, NemsisList, "eTimes.05")
            }
            catch (e) {
                u.RaiseError("eTimes.05", 1, "eTimes34", e);
            };
            //eTimes.06/////////////////////////////////////////////////        
            try {
                eTimes["eTimes.06"] = u.setBusinessObject(_el, NemsisList, "eTimes.06")
            }
            catch (e) {
                u.RaiseError("eTimes.06", 1, "eTimes34", e);
            };

            //eTimes.07//////////////////
            try {
                eTimes["eTimes.07"] = u.setBusinessObject(_el, NemsisList, "eTimes.07")
            }
            catch (e) {
                u.RaiseError("eTimes.07", 1, "eTimes34", e);
            };

            //eTimes.08//////////////////
            try {
                eTimes["eTimes.08"] = u.setBusinessObject(_el, NemsisList, "eTimes.08")
            }
            catch (e) {
                u.RaiseError("eTimes.08", 1, "eTimes34", e);
            };
            //eTimes.09//////////////////
            try {
                eTimes["eTimes.09"] = u.setBusinessObject(_el, NemsisList, "eTimes.09")
            }
            catch (e) {
                u.RaiseError("eTimes.09", 1, "eTimes34", e);
            };

            //eTimes.10//////////////////////////////////////////////////////////////////////
            try {
                eTimes["eTimes.10"] = u.setBusinessObject(_el, NemsisList, "eTimes.10")
            }
            catch (e) {
                u.RaiseError("eTimes.10", 1, "eTimes34", e);
            };

            //eTimes.11////////////////////////////////////////////////////////////////
            try {
                eTimes["eTimes.11"] = u.setBusinessObject(_el, NemsisList, "eTimes.11")
            }
            catch (e) {
                u.RaiseError("eTimes.11", 1, "eTimes34", e);
            };
            //eTimes.12///////////////////////////////////////////////////////////////////////        
            try {
                eTimes["eTimes.12"] = u.setBusinessObject(_el, NemsisList, "eTimes.12")
            }
            catch (e) {
                u.RaiseError("eTimes.12", 1, "eTimes34", e);
            };
            //eTimes.13//////////////////////////////////////////////////////////////////////
            try {
                eTimes["eTimes.13"] = u.setBusinessObject(_el, NemsisList, "eTimes.13")
            }
            catch (e) {
                u.RaiseError("eTimes.13", 1, "eTimes34", e);
            };
            //eTimes.14//////////////////
            try {
                eTimes["eTimes.14"] = u.setBusinessObject(_el, NemsisList, "eTimes.14")
            }
            catch (e) {
                u.RaiseError("eTimes.14", 1, "eTimes34", e);
            };
            //eTimes.15//////////////////
            try {
                eTimes["eTimes.15"] = u.setBusinessObject(_el, NemsisList, "eTimes.15")
            }
            catch (e) {
                u.RaiseError("eTimes.15", 1, "eTimes34", e);
            };
            //eTimes.16/////////////////
            try {
                eTimes["eTimes.16"] = u.setBusinessObject(_el, NemsisList, "eTimes.16")
            }
            catch (e) {
                u.RaiseError("eTimes.16", 1, "eTimes34", e);
            }
        }
    };
    if (typeof eTimes !== 'undefined') {
        return eTimes;
    }
    else {
        return null
    }
};
exports.seteScene = function (pcrObj, NemsisList) {
    u.RaiseError("seteScene", 100, "Dispatch.js", "seteScene");
    pScene = pcrObj;
    var eScene = new Object();
    if (pScene.HasDataSet == false) {
        return eScene
    };

    //If Not Data, set NV codes
    if (typeof pScene.attributes.elements !== 'undefined') {
        var _eL = [];
        _eL = pScene.attributes.elements;
        if (_eL.length > 0) {
            var eScene = new Object();
            //////////////////////eScene.01
            try {
                eScene["eScene.01"] = u.setBusinessObject(_eL, NemsisList, "eScene.01")
            }
            catch (e) {
                u.RaiseError("eScene.01", 1, "eScene34", e);
            };

            //////////////////////eScene.05    
            try {

                eScene["eScene.05"] = u.setBusinessObject(_eL, NemsisList, "eScene.05")
            }
            catch (e) {
                u.RaiseError("eScene.05", 1, "eScene34", e);
            };

            //////////////////////eScene.06
            try {
                eScene["eScene.06"] = u.setBusinessObject(_eL, NemsisList, "eScene.06")
            }
            catch (e) {
                u.RaiseError("eScene.06", 1, "eScene34", e);
            };

            //////////////////////eScene.07
            try {

                eScene["eScene.07"] = u.setBusinessObject(_eL, NemsisList, "eScene.07")
            }
            catch (e) {
                u.RaiseError("eScene.07", 1, "eScene34", e);
            };

            //////////////////////eScene.08
            try {
                eScene["eScene.08"] = u.setBusinessObject(_eL, NemsisList, "eScene.08");
            }
            catch (e) {
                u.RaiseError("eScene.08", 1, "eScene34", e);
            };

            //////////////////////eScene.09
            try {
                eScene["eScene.09"] = u.setBusinessObject(_eL, NemsisList, "eScene.09")
            }
            catch (e) {
                u.RaiseError("eScene.09", 1, "eScene34", e);
            };

            //////////////////////eScene.10
            try {
                eScene["eScene.10"] = u.setBusinessObject(_eL, NemsisList, "eScene.10")
            }
            catch (e) {
                u.RaiseError("eScene.10", 1, "eScene34", e);
            };

            //////////////////////eScene.11
            try {
                eScene["eScene.11"] = u.setBusinessObject(_eL, NemsisList, "eScene.11")
            }
            catch (e) {
                u.RaiseError("eScene.11", 1, "eScene34", e);
            };

            //////////////////////eScene.12
            try {
                eScene["eScene.12"] = u.setBusinessObject(_eL, NemsisList, "eScene.12")
            }
            catch (e) {
                u.RaiseError("eScene.12", 1, "eScene34", e);
            };

            //////////////////////eScene.13
            try {
                eScene["eScene.13"] = u.setBusinessObject(_eL, NemsisList, "eScene.13");
            }
            catch (e) {
                u.RaiseError("eScene.13", 1, "eScene34", e);
            };

            //////////////////////eScene.14
            try {
                eScene["eScene.14"] = u.setBusinessObject(_eL, NemsisList, "eScene.14");
            }
            catch (e) {
                u.RaiseError("eScene.14", 1, "eScene34", e);
            };

            //////////////////////eScene.15
            try {
                eScene["eScene.15"] = u.setBusinessObject(_eL, NemsisList, "eScene.15");
            }
            catch (e) {
                u.RaiseError("eScene.15", 1, "eScene34", e);
            };


            //////////////////////eScene.16
            try {
                eScene["eScene.16"] = u.setBusinessObject(_eL, NemsisList, "eScene.16");
            }
            catch (e) {
                u.RaiseError("eScene.16", 1, "eScene34", e);
            };

            //////////////////////eScene.17
            try {
                eScene["eScene.17"] = u.setBusinessObject(_eL, NemsisList, "eScene.17");
            }
            catch (e) {
                u.RaiseError("eScene.17", 1, "eScene34", e);
            };

            //////////////////////eScene.18
            try {
                eScene["eScene.18"] = u.setBusinessObject(_eL, NemsisList, "eScene.18");
            }
            catch (e) {
                u.RaiseError("eScene.18", 1, "eScene34", e);
            };

            //////////////////////eScene.19
            try {
                eScene["eScene.19"] = u.setBusinessObject(_eL, NemsisList, "eScene.19");
            }
            catch (e) {
                u.RaiseError("eScene.19", 1, "eScene34", e);
            };

            //////////////////////eScene.20        
            try {
                eScene["eScene.20"] = u.setBusinessObject(_eL, NemsisList, "eScene.20");
            }
            catch (e) {
                u.RaiseError("eScene.20", 1, "eScene34", e);
            };

            //////////////////////eScene.21
            try {
                eScene["eScene.21"] = u.setBusinessObject(_eL, NemsisList, "eScene.21");
                if (eScene["eScene.21"].vSet[0].val.toString().length == 2) {
                    eScene["eScene.21"].vSet[0].val = "0" + eScene["eScene.21"].vSet[0].val.toString()
                };

                if (eScene["eScene.21"].vSet[0].val.toString().length == 1) {
                    eScene["eScene.21"].vSet[0].val = "00" + eScene["eScene.21"].vSet[0].val.toString()
                };
                if ((typeof eScene["eScene.18"] !== 'undefined') && (eScene["eScene.18"].IsNull == false)) {
                    eScene["eScene.21"].vSet[0].val = eScene["eScene.18"].vSet[0].val.toString() + eScene["eScene.21"].vSet[0].val.toString();
                }
            }
            catch (e) {
                u.RaiseError("eScene.21", 1, "eScene34", e);
            };

            //////////////////////eScene.22
            try {

                eScene["eScene.22"] = u.setBusinessObject(_eL, NemsisList, "eScene.22");

            }
            catch (e) {
                u.RaiseError("eScene.22", 1, "eScene34", e);
            };

            //////////////////////eScene.23
            try {
                eScene["eScene.23"] = u.setBusinessObject(_eL, NemsisList, "eScene.23");
            }
            catch (e) {
                u.RaiseError("eScene.23", 1, "eScene34", e);
            };
        }
    };


    ///////////////////////////////////////eScene.ResponderGroup

    if (typeof pScene.attributes.sections !== 'undefined') {
        var _sRG = [];
        try {
            _sRG = u.getSectionIndex(pScene, "eScene.ResponderGroup");
        }
        catch (e) {
            u.RaiseError("eScene.ResponderGroup", 1, "eScene34", e);
        };

        if (_sRG[0] !== -1) {
            var RpdrGrpArray = [];
            for (var dd = 0; dd < _sRG.length; dd++) {
                var _eRG = [];
                _eRG = pScene.attributes.sections[_sRG[dd]].attributes.elements
                if (_eRG.length > 0) {
                    var ResponderGroup = new Object();
                    //////////////////////eScene.02
                    try {
                        ResponderGroup["eScene.02"] = u.setBusinessObject(_eRG, NemsisList, "eScene.02")
                    }
                    catch (e) {
                        u.RaiseError("eScene.02", 1, "eScene34", e);
                    };

                    //////////////////////eScene.03
                    try {
                        ResponderGroup["eScene.03"] = u.setBusinessObject(_eRG, NemsisList, "eScene.03")
                    }
                    catch (e) {
                        u.RaiseError("eScene.03", 1, "eScene34", e);
                    };

                    //////////////////////eScene.04
                    try {
                        ResponderGroup["eScene.04"] = u.setBusinessObject(_eRG, NemsisList, "eScene.04")
                    }
                    catch (e) {
                        u.RaiseError("eScene.04", 1, "eScene34", e);
                    };
                    RpdrGrpArray.push(ResponderGroup);
                    ResponderGroup = undefined;
                }
            }
        }
    };




    if (typeof eScene !== 'undefined') {
        if (typeof RpdrGrpArray !== 'undefined') {
            if (RpdrGrpArray.length > 0) {
                eScene.ResponderGroup = RpdrGrpArray
            }
        }
        return eScene;
    }
    else {
        return null
    }
};
exports.seteSituation = function (pcrObj, NemsisList) {
    u.RaiseError("seteSituation", 100, "Dispatch.js", "seteSituation");
    var pSituation = pcrObj;
    if (pSituation.HasDataSet == false) {
        return null;
    };
    //////////////////////////////////
    if (typeof pSituation.attributes.elements !== 'undefined') {
        var _eL = new Array();
        _eL = pSituation.attributes.elements;

        if (_eL.length >= 0) {
            var eSituation = new Object();

            //////////////////////eSituation.01
            try {
                eSituation["eSituation.01"] = u.setBusinessObject(_eL, NemsisList, "eSituation.01")
            }
            catch (e) {
                u.RaiseError("eSituation.01", 1, "eSituation34", e);
            };


            ////////////////////////eSituation.02
            try {
                eSituation["eSituation.02"] = u.setBusinessObject(_eL, NemsisList, "eSituation.02")
            }
            catch (e) {
                u.RaiseError("eSituation.02", 1, "eSituation34", e);
            };

            //////////////////////eSituation.07
            try {
                eSituation["eSituation.07"] = u.setBusinessObject(_eL, NemsisList, "eSituation.07")
            }
            catch (e) {
                u.RaiseError("eSituation.07", 1, "eSituation34", e);
            };

            //////////////////////eSituation.08
            try {
                eSituation["eSituation.08"] = u.setBusinessObject(_eL, NemsisList, "eSituation.08")
            }
            catch (e) {
                u.RaiseError("eSituation.08", 1, "eSituation34", e);
            };

            //////////////////////eSituation.09
            try {

                eSituation["eSituation.09"] = u.setBusinessObject(_eL, NemsisList, "eSituation.09")
            }
            catch (e) {
                u.RaiseError("eSituation.09", 1, "eSituation34", e);
            };

            //////////////////////eSituation.10
            try {

                eSituation["eSituation.10"] = u.setBusinessObject(_eL, NemsisList, "eSituation.10")
            }
            catch (e) {
                u.RaiseError("eSituation.10", 1, "eSituation34", e);
            };

            //////////////////////eSituation.11
            try {

                eSituation["eSituation.11"] = u.setBusinessObject(_eL, NemsisList, "eSituation.11")
            }
            catch (e) {
                u.RaiseError("eSituation.11", 1, "eSituation34", e);
            };

            //////////////////////eSituation.12
            try {
                eSituation["eSituation.12"] = u.setBusinessObject(_eL, NemsisList, "eSituation.12")
            }
            catch (e) {
                u.RaiseError("eSituation.12", 1, "eSituation34", e);
            };

            //////////////////////eSituation.13
            try {

                eSituation["eSituation.13"] = u.setBusinessObject(_eL, NemsisList, "eSituation.13")
            }
            catch (e) {
                u.RaiseError("eSituation.13", 1, "eSituation34", e);
            };
            ///////////////eSituation.17
            try {
                eSituation["eSituation.17"] = u.setBusinessObject(_eL, NemsisList, "eSituation.17")
            }
            catch (e) {
                u.RaiseError("eSituation.17", 1, "eSituation34", e);
            }
        }
    };


    ///////////////////////////////////////eSituation.PatientComplaintGroup

    if (typeof pSituation.attributes.sections !== 'undefined') {
        var _pCG = [];
        try {
            _pCG = u.getSectionIndex(pSituation, "eSituation.PatientComplaintGroup");
        }
        catch (e) {
            u.RaiseError("eSituation.PatientComplaintGroup", 1, "eSituation34", e);
        };

        if (_pCG[0] !== -1) {
            var PGArray = [];
            for (var i = 0; i < _pCG.length; i++) {
                var _eRG = [];
                _eRG = pSituation.attributes.sections[_pCG[i]].attributes.elements
                if (_eRG.length > 0) {
                    var PCGroup = new Object();
                    //////////////////////eSituation.03
                    try {
                        PCGroup["eSituation.03"] = u.setBusinessObject(_eRG, NemsisList, "eSituation.03")
                    }
                    catch (e) {
                        u.RaiseError("eSituation.03", 1, "eSituation34", e);
                    };


                    //////////////////////eSituation.04
                    try {
                        PCGroup["eSituation.04"] = u.setBusinessObject(_eRG, NemsisList, "eSituation.04")
                    }
                    catch (e) {
                        u.RaiseError("eSituation.04", 1, "eSituation34", e);
                    };

                    //////////////////////eSituation.05    
                    try {
                        PCGroup["eSituation.05"] = u.setBusinessObject(_eRG, NemsisList, "eSituation.05")
                    }
                    catch (e) {
                        u.RaiseError("eSituation.05", 1, "eSituation34", e);
                    };

                    //////////////////////eSituation.06                    
                    try {
                        PCGroup["eSituation.06"] = u.setBusinessObject(_eRG, NemsisList, "eSituation.06")
                    }
                    catch (e) {
                        u.RaiseError("eSituation.06", 1, "eSituation34", e);
                    };
                    if (typeof PCGroup !== 'undefined') {
                        PGArray.push(PCGroup);
                        PCGroup = undefined;
                    }
                }
            }
        }
    };


    ///////////////////////////////////////eSituation.WorkRelatedGroup
    var _wRG = [];
    try {
        _wRG = u.getSectionIndex(pSituation, "eSituation.WorkRelatedGroup");
    }
    catch (e) {
        u.RaiseError("eSituation.WorkRelatedGroup", 1, "eSituation34", e);
    };

    if (_wRG[0] !== -1) {
        var _eWRG = [];
        _eWRG = pSituation.attributes.sections[_wRG[0]].attributes.elements;
        if (_eWRG.length > 0) {
            var _WRG = new Object();
            //////////////////////eSituation.14
            try {
                _WRG["eSituation.14"] = u.setBusinessObject(_eWRG, NemsisList, "eSituation.14")
            }
            catch (e) {
                u.RaiseError("eSituation.14", 1, "eSituation34", e);
            };

            //////////////////////eSituation.15
            try {
                _WRG["eSituation.15"] = u.setBusinessObject(_eWRG, NemsisList, "eSituation.15")
            }
            catch (e) {
                u.RaiseError("eSituation.15", 1, "eSituation34", e);
            };

            //////////////////////eSituation.16
            try {
                _WRG["eSituation.16"] = u.setBusinessObject(_eWRG, NemsisList, "eSituation.16")
            }
            catch (e) {
                u.RaiseError("eSituation.16", 1, "eSituation34", e);
            }
        }
    };

    if (typeof PGArray !== 'undefined') {
        if (PGArray.length > 0) {
            if (typeof eSituation === 'undefined') {
                var eSituation = new Object();
            };
            eSituation["PatientComplaintGroup"] = PGArray;
        }
    };

    if (typeof _WRG !== 'undefined') {
        if (typeof eSituation === 'undefined') {
            var eSituation = new Object();
        };
        eSituation["WorkRelatedGroup"] = _WRG;
    };

    if (typeof eSituation !== 'undefined') {
        return eSituation;
    }
    else {
        return null;
    }
};
exports.seteCrew = function (pcrObj, NemsisList) {
    u.RaiseError("seteCrew", 100, "Dispatch.js", "seteCrew");
    pCrew = pcrObj;
    if (pCrew.HasDataSet == true) {
        if (typeof pCrew.attributes !== 'undefined') {
            var _sI = new Array();
            _sI = u.getSectionIndex(pCrew, "eCrew.CrewGroup")
            if (_sI[0] !== -1) {
                for (var xx = 0; xx < _sI.length; xx++) {
                    var _eL = []
                    _eL = pCrew.attributes.sections[_sI[xx]].attributes.elements;

                    if (_eL.length > 0) {

                        var CrewGroup = new Object();
                        ///////////Crew.01////////
                        try {
                            CrewGroup["eCrew.01"] = u.setBusinessObject(_eL, NemsisList, "eCrew.01")
                        }
                        catch (e) {
                            u.RaiseError("eCrew.01 " + xx.toString(), 1, "eCrew34")
                        };

                        ///////////Crew.02////////
                        try {
                            CrewGroup["eCrew.02"] = u.setBusinessObject(_eL, NemsisList, "eCrew.02")
                        }
                        catch (e) {
                            u.RaiseError("eCrew.02 " + xx.toString(), 1, "eCrew34")
                        };
                        ///////////Crew.03////////
                        try {
                            CrewGroup["eCrew.03"] = u.setBusinessObject(_eL, NemsisList, "eCrew.03")
                        }

                        catch (e) {
                            u.RaiseError("eCrew.03 " + xx.toString(), 1, "eCrew34")
                        };

                        if (typeof CrewGroup !== 'undefined') {
                            if (typeof CrewGroupArray === 'undefined') {
                                var CrewGroupArray = new Array();
                            };
                            CrewGroupArray.push(CrewGroup);
                            CrewGroup = undefined;
                        }
                    }
                }
            }
        };

        if (typeof CrewGroupArray !== 'undefined') {
            if (CrewGroupArray.length > 0) {
                if (typeof eCrew === 'undefined') {
                    var eCrew = new Object();
                };
                eCrew.CrewGroup = CrewGroupArray.slice(0);
            }
            return eCrew;
        }
        else {
            return null;
        }
    }
};
exports.seteNarrative = function (TheCall) {
    u.RaiseError("seteNarrative", 100, "Dispatch.js", "seteNarrative");
    var eNarrative = new Object();
    var pNarrative = new Object();
    pNarrative = TheCall.pNarrative;
    if (pNarrative.HasDataSet == false) {
        return null;
    }

    if (typeof pNarrative.attributes !== 'undefined') {

        _eL = pNarrative.attributes.elements;
        if (_eL.length > 0) {
            var eNarrative = new Object();
            try {
                eNarrative["eNarrative.01"] = u.setBusinessObject(_eL, NemsisList, "eNarrative.01");
            }
            catch (e) {
                u.RaiseError(c, "eNarrative.01", 1, "eNarrative34")
            };

        }
    };
    if (typeof eNarrative !== 'undefined') {        
        return eNarrative;
    }
    else {
        return null;
    }

};
exports.seteOther = function (pcrObj, NemsisList) {
    u.RaiseError("seteOther", 100, "Dispatch.js", "seteOther");
    var pOther = new Object();
    pOther = pcrObj
    if (pOther.HasDataSet == false) {
        return null;
    };

    if (typeof pOther.attributes.elements !== 'undefined') {
        var _eL = []
        _eL = pOther.attributes.elements
        if (_eL.length > 0) {
            var eOther = new Object();
            //eOther.01////////
            try {
                eOther["eOther.01"] = u.setBusinessObject(_eL, NemsisList, "eOther.01")
            }
            catch (e) {
                u.RaiseError("eOther.01", 1, "eOther34", e);
            };

            //eOther.02//////////
            try {
                eOther["eOther.02"] = u.setBusinessObject(_eL, NemsisList, "eOther.02")
            }
            catch (e) {
                u.RaiseError("eOther.02", 1, "eOther34", e);
            };

            //eOther.07////////
            try {
                eOther["eOther.07"] = u.setBusinessObject(_eL, NemsisList, "eOther.07")
            }
            catch (e) {
                u.RaiseError("eOther.07", 1, "eOther34", e);
            };

            //eOther..08//////////
            try {
                eOther["eOther.08"] = u.setBusinessObject(_eL, NemsisList, "eOther.08")
            }
            catch (e) {
                u.RaiseError("eOther.08", 1, "eOther34", e);
            }
        }
    };

    var EMSCrewMemberGroupArray = []
    ///////////////////eOther.EMSCrewMemberGroup

    if (typeof pOther.attributes.sections !== 'undefined') {
        _sectionIndex = [];
        try {
            _sectionIndex = u.getSectionIndex(pOther, "eOther.EMSCrewMemberGroup");
        }
        catch (e) {
            u.RaiseError("eOther.EMSCrewMemberGroup", 1, "eOther34", e);
        };

        if (_sectionIndex[0] !== -1) {
            for (var x = 0; x < _sectionIndex.length; x++) {
                var _EMSC = new Array();
                _EMSC = pOther.attributes.sections[_sectionIndex[x]].attributes.elements;
                if (_EMSC.length > 0) {
                    var EMSCrewMemberGP = new Object();
                    //eOther.03//////////
                    try {
                        EMSCrewMemberGP["eOther.03"] = u.setBusinessObject(_EMSC, NemsisList, "eOther.03")
                    }
                    catch (e) {
                        u.RaiseError("eOther.03", 1, "eOther34", e);
                    };

                    //eOther.04///////////
                    try {
                        EMSCrewMemberGP["eOther.04"] = u.setBusinessObject(_EMSC, NemsisList, "eOther.04")
                    }
                    catch (e) {
                        u.RaiseError("eOther.04", 1, "eOther34", e);
                    };
                    //eOther.05/////////
                    try {
                        EMSCrewMemberGP["eOther.05"] = u.setBusinessObject(_EMSC, NemsisList, "eOther.05")
                    }
                    catch (e) {
                        u.RaiseError("eOther.05", 1, "eOther34", e);
                    };
                    //eOther.06/////////
                    try {
                        EMSCrewMemberGP["eOther.06"] = u.setBusinessObject(_EMSC, NemsisList, "eOther.06")
                    }
                    catch (e) {
                        u.RaiseError("eOther.06", 1, "eOther34", e);
                    };

                    EMSCrewMemberGroupArray.push(EMSCrewMemberGP);
                    EMSCrewMemberGP = undefined;
                }
            }
        }
    };

    ///////////////////eOther.FileGroup
    var _sI = [];
    try {
        _sI = u.getSectionIndex(pOther, "eOther.FileGroup");
    }
    catch (e) {
        u.RaiseError("eOther.FileGroup", 1, "eOther34", e);
    };
    if (_sI[0] !== -1) {

        for (var x = 0; x < _sI.length; x++) {
            var _eFG = new Array();
            _eFG = pOther.attributes.sections[_sectionIndex[x]].attributes.elements
            if (_eFG.length > 0) {
                var FileGroup = new Object();
                //eOther.09//////////
                try {
                    FileGroup["eOther.09"] = u.setBusinessObject(_eFG, NemsisList, "eOther.09")
                }
                catch (e) {
                    u.RaiseError("eOther.09", 1, "eOther34", e);
                };


                //eOther.10//////////
                try {
                }
                catch (e) {
                    u.RaiseError("eOther.10", 1, "eOther34", e);
                };

                //eOther.11//////////
                try {
                }
                catch (e) {
                    u.RaiseError("eOther.11", 1, "eOther34", e);
                };
                if (typeof FileGroup !== 'undefined') {
                    if (typeof FGArray === 'undefined') {
                        var FGArray = new Array();
                    };
                    FGArray.push(FileGroup);
                    FileGroup = undefined;
                }
            }
        }
    };

    /////////////////////////////

    var _s2 = [];
    try {
        _s2 = u.getSectionIndex(pOther, "eOther.SignatureGroup");
    }
    catch (e) {
        u.RaiseError("eOther.SignatureGroup", 1, "eOther34", e);
    };
    if (_s2[0] !== -1) {
        for (var x = 0; x < _s2.length; x++) {
            var _eSG = new Array();
            _eSG = pOther.attributes.sections[_s2[x]].attributes.elements
            if (_eSG.length > 0) {
                var SignatureGroup = new Object();
                //Other.12////////
                try {
                    SignatureGroup["eOther.12"] = u.setBusinessObject(_eSG, NemsisList, "eOther.12");
                }
                catch (e) {
                    u.RaiseError("eOther.12", 1, "eOther34", e);
                };

                //eOther.13
                try {
                    SignatureGroup["eOther.13"] = u.setBusinessObject(_eSG, NemsisList, "eOther.13");
                }
                catch (e) {
                    u.RaiseError("eOther.13", 1, "eOther34", e);
                };
                //ether.14/////////
                try {
                    SignatureGroup["eOther.14"] = u.setBusinessObject(_eSG, NemsisList, "eOther.14");
                }
                catch (e) {
                    u.RaiseError("eOther.14", 1, "eOther34", e);
                };
                //eOther.15//////
                try {
                    SignatureGroup["eOther.15"] = u.setBusinessObject(_eSG, NemsisList, "eOther.15");
                }
                catch (e) {
                    u.RaiseError("eOther.15", 1, "eOther34", e);
                };

                //eOther.16/////////
                try {
                    SignatureGroup["eOther.16"] = u.setBusinessObject(_eSG, NemsisList, "eOther.16");
                }
                catch (e) {
                    u.RaiseError("eOther.16", 1, "eOther34", e);
                };

                //eOther.17////////
                try {
                    SignatureGroup["eOther.17"] = u.setBusinessObject(_eSG, NemsisList, "eOther.17");
                }
                catch (e) {
                    u.RaiseError("eOther.17", 1, "eOther34", e);
                };

                //eOther.18///////
                try {
                    SignatureGroup["eOther.18"] = u.setBusinessObject(_eSG, NemsisList, "eOther.18");
                }
                catch (e) {
                    u.RaiseError("eOther.18", 1, "eOther34", e);
                };

                //eOther.19//////////
                try {
                    SignatureGroup["eOther.19"] = u.setBusinessObject(_eSG, NemsisList, "eOther.19");
                }
                catch (e) {
                    u.RaiseError("eOther.19", 1, "eOther34", e);
                };

                //eOther.20///////
                try {
                    SignatureGroup["eOther.20"] = u.setBusinessObject(_eSG, NemsisList, "eOther.20");
                }
                catch (e) {
                    u.RaiseError("eOther.20", 1, "eOther34", e);
                };

                //eOther.21/////////
                try {
                    SignatureGroup["eOther.21"] = u.setBusinessObject(_eSG, NemsisList, "eOther.21");
                }
                catch (e) {
                    u.RaiseError("eOther.21", 1, "eOther34", e);
                };
                if (typeof SignatureGroup !== 'undefined') {
                    if (typeof sigGroupArray === 'undefined') {
                        var sigGroupArray = new Array();
                    }
                    sigGroupArray.push(SignatureGroup)
                }
            }
        }
    };
    if (typeof sigGroupArray !== 'undefined') {
        if (sigGroupArray.length > 0) {
            eOther.SignatureGroup = sigGroupArray;
        }
    };

    if (typeof FGArray !== 'undefined') {
        if (FGArray.length > 0) {
            eOther.FileGroup = FGArray.slice(0);
        }
    };

    if (typeof EMSCrewMemberGroupArray !== 'undefined') {
        if (EMSCrewMemberGroupArray.length > 0) {
            eOther.EMSCrewMemberGroup = EMSCrewMemberGroupArray.slice();
        }
    };
    if (typeof eOther !== 'undefined') {
        return eOther;
    }
    else {
        return null;
    }
};
exports.seteOutcome = function (pcrObj, NemsisList) {
    u.RaiseError("seteOutcome", 100, "Dispatch.js", "seteOutcome");
    var pOutcome = new Object();
    pOutcome = pcrObj

    if (pOutcome.HasDataSet == false) {
        return null;
    };
    
    if (typeof pOutcome.attributes.elements !== 'undefined')
    {
        var _eL = [];
        _eL = pOutcome.attributes.elements;
        if (_eL.length > 0) {
            var eOutcome = new Object();
            //eOutcome.01/////////
            try {
                eOutcome["eOutcome.01"] = u.setBusinessObject(_eL, NemsisList, "eOutcome.01")
            }
            catch (e) {
                u.RaiseError("eOutcome.01", 1, "eOutcome34", e);
            };
            //eOutcome.02/////////
            try {
                eOutcome["eOutcome.02"] = u.setBusinessObject(_eL, NemsisList, "eOutcome.02")
            }
            catch (e) {
                u.RaiseError("eOutcome.02", 1, "eOutcome34", e);
            };

            //eOutcome.06/////////
            try {
                eOutcome["eOutcome.06"] = u.setBusinessObject(_eL, NemsisList, "eOutcome.06")
            }
            catch (e) {
                u.RaiseError("eOutcome.05", 1, "eOutcome34", e);
            };

            //eOutcome.07/////////
            try {
                eOutcome["eOutcome.07"] = u.setBusinessObject(_eL, NemsisList, "eOutcome.07")
            }
            catch (e) {
                u.RaiseError("eOutcome.07", 1, "eOutcome34", e);
            };

            //eOutcome.08/////////
            try {

                eOutcome["eOutcome.08"] = u.setBusinessObject(_eL, NemsisList, "eOutcome.08")
            }
            catch (e) {
                u.RaiseError("eOutcome.08", 1, "eOutcome34", e);
            };

            //eOutcome.09/////////
            try {
                eOutcome["eOutcome.09"] = u.setBusinessObject(_eL, NemsisList, "eOutcome.09")
            }
            catch (e) {
                u.RaiseError("eOutcome.09", 1, "eOutcome34", e);
            };

            //eOutcome.10/////////
            try {
                eOutcome["eOutcome.10"] = u.setBusinessObject(_eL, NemsisList, "eOutcome.10")
            }
            catch (e) {
                u.RaiseError("eOutcome.10", 1, "eOutcome34", e);
            };

            //eOutcome.11/////////
            try {
                eOutcome["eOutcome.11"] = u.setBusinessObject(_eL, NemsisList, "eOutcome.11")
            }
            catch (e) {
                u.RaiseError("eOutcome.11", 1, "eOutcome34", e);
            };

            //eOutcome.12/////////
            try {
                eOutcome["eOutcome.12"] = u.setBusinessObject(_eL, NemsisList, "eOutcome.12")
            }
            catch (e) {
                u.RaiseError("eOutcome.12", 1, "eOutcome34", e);
            };

            //eOutcome.13/////////
            try {
                eOutcome["eOutcome.13"] = u.setBusinessObject(_eL, NemsisList, "eOutcome.13")
            }
            catch (e) {
                u.RaiseError("eOutcome.13", 1, "eOutcome34", e);
            };

            //eOutcome.14/////////
            try {
                eOutcome["eOutcome.14"] = u.setBusinessObject(_eL, NemsisList, "eOutcome.14")
            }
            catch (e) {
                u.RaiseError("eOutcome.14", 1, "eOutcome34", e);
            };

            //eOutcome.15/////////
            try {
                eOutcome["eOutcome.15"] = u.setBusinessObject(_eL, NemsisList, "eOutcome.15")
            }
            catch (e) {
                u.RaiseError("eOutcome.15", 1, "eOutcome34", e);
            };

            //eOutcome.16/////////
            try {
                eOutcome["eOutcome.16"] = u.setBusinessObject(_eL, NemsisList, "eOutcome.16")
            }
            catch (e) {
                u.RaiseError("eOutcome.16", 1, "eOutcome34", e);
            };


            //eOutcome.17/////////
            try {
                eOutcome["eOutcome.17"] = u.setBusinessObject(_eL, NemsisList, "eOutcome.17")
            }
            catch (e) {
                u.RaiseError("eOutcome.17", 1, "eOutcome34", e);
            }
        }
    };

    if (typeof pOutcome.attributes.sections !== 'undefined') {
        try {
            _s1 = u.getSectionIndex(pOutcome, "eOutcome.ExternalDataGroup");
        }
        catch (e) {
            u.RaiseError("eOutcome.ExternalDataGroup", 1, "eOutcome34", e);
        };

        if (_s1[0] !== -1) {
            for (var x = 0; x <= _s1.length - 1; x++) {
                var _eDG = []
                _eDG = pOutcome.attributes.sections[_s1[x]].attributes.elements;
                if (_eDG.length > 0) {
                    var ExternalDataGroup = new Object();
                    //eOutcome.03/////////
                    try {
                        ExternalDataGroup["eOutcome.03"] = u.setBusinessObject(_eDG, NemsisList, "eOutcome.03")
                    }
                    catch (e) {
                        u.RaiseError("eOutcome.03", 1, "eOutcome34", e);
                    };


                    //eOutcome.04/////////
                    try {
                        ExternalDataGroup["eOutcome.04"] = u.setBusinessObject(_eDG, NemsisList, "eOutcome.04")
                    }
                    catch (e) {
                        u.RaiseError("eOutcome.04", 1, "eOutcome34", e);
                    };

                    //eOutcome.05/////////
                    try {
                        ExternalDataGroup["eOutcome.05"] = u.setBusinessObject(_eDG, NemsisList, "eOutcome.05")
                    }
                    catch (e) {
                        u.RaiseError("eOutcome.05", 1, "eOutcome34", e);
                    };

                    if (typeof OutcomeGroupArray === 'undefined') {
                        var OutcomeGroupArray = new Array();
                    };
                    OutcomeGroupArray.push(ExternalDataGroup);
                    ExternalDataGroup = undefined;
                }
            }
        }
    };

    if (typeof eOutcome !== 'undefined') {
        if (typeof OutcomeGroupArray !== 'undefined') {
            if (OutcomeGroupArray.length > 0) {
                eOutcome.ExternalDataGroup = OutcomeGroupArray.slice(0);
            }
        }
        return eOutcome;
    }
    else {
        return null
    }
};