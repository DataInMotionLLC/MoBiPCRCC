var u= require('cloud/Utilities.js');
exports.seteAirway = function (pcrObj, NemsisList) {
    u.RaiseError("seteAirway", 100, "Intervention.js", "seteAirway");
    var pAirway = new Object();
    pAirway = pcrObj;
    if (pAirway.HasDataSet == false) {
        return null
    }
    else {
        if (typeof pAirway.attributes === 'undefined') {
            return null;
        };
        if (typeof pAirway.attributes.sections === 'undefined') {
            return null;
        }
        else {
            var d = u.getSectionIndex(pAirway, "eAirway.AirwayGroup");

            var _el = [];
            _el = pAirway.attributes.sections[d].attributes.elements;
            if (_el.length > 0) {
                var AirwayGroup = new Object();
                /////eAirway.01
                try {
                    AirwayGroup["eAirway.01"] = u.setBusinessObject(_el, NemsisList, "eAirway.01");
                }
                catch (e) {
                    u.RaiseError("eAirway.01", 1, "eAirway34", e);
                };

                /////eAirway.08
                try {
                    AirwayGroup["eAirway.08"] = u.setBusinessObject(_el, NemsisList, "eAirway.08");
                }
                catch (e) {
                    u.RaiseError("eAirway.08", 1, "eAirway34", e);
                };

                /////eAirway.09
                try {
                    AirwayGroup["eAirway.09"] = u.setBusinessObject(_el, NemsisList, "eAirway.09");
                }
                catch (e) {
                    u.RaiseError("eAirway.09", 1, "eAirway34", e);
                };

                /////eAirway.10
                try {
                    AirwayGroup["eAirway.10"] = u.setBusinessObject(_el, NemsisList, "eAirway.10");
                }
                catch (e) {
                    u.RaiseError("eAirway.10", 1, "eAirway34", e);
                };

                /////eAirway.11
                try {
                    AirwayGroup["eAirway.11"] = u.setBusinessObject(_el, NemsisList, "eAirway.11");
                }

                catch (e) {
                    u.RaiseError("eAirway.11", 1, "eAirway34", e);
                };
                //////////////////////////////eAirway.ConfirmationGroup    

                //Assumption:  eAirway.02 defines the use of a Device.  
                if (typeof pAirway.attributes.sections !== 'undefined') {
                    var _sI = [];
                    _sI = u.getSectionIndex(pAirway, "eAirway.ConfirmationGroup");
                    if (_sI[0] !== -1) {
                        for (var y = 0; y < _sI.length; y++) {
                            var _eCG = new Array();
                            var _eCG = pAirway.attributes.sections[_sI[y]].attributes.elements;
                            if (_eCG.length !== -1) {
                                /////eAirway.02
                                if (typeof CGroup === 'undefined') {
                                    var CGroup = new Object();
                                };
                                try {

                                    CGroup["eAirway.02"] = u.setBusinessObject(_eCG, NemsisList, "eAirway.02");
                                }
                                catch (e) {
                                    u.RaiseError("eAirway.02 ", 1, "eAirway34", e);
                                };

                                /////eAirway.03
                                try {

                                    CGroup["eAirway.03"] = u.setBusinessObject(_eCG, NemsisList, "eAirway.03");
                                }
                                catch (e) {
                                    u.RaiseError("eAirway.03", 1, "eAirway34", e);
                                };
                                /////eAirway.04
                                try {
                                    CGroup["eAirway.04"] = u.setBusinessObject(_eCG, NemsisList, "eAirway.04");
                                }

                                catch (e) {
                                    u.RaiseError("eAirway.04 ", 1, "eAirway34", e);
                                };

                                /////eAirway.05

                                try {
                                    CGroup["eAirway.05"] = u.setBusinessObject(_eCG, NemsisList, "eAirway.05");
                                }
                                catch (e) {
                                    u.RaiseError("eAirway.05 ", 1, "eAirway34", e);
                                };

                                /////eAirway.06
                                try {
                                    CGroup["eAirway.06"] = u.setBusinessObject(_eCG, NemsisList, "eAirway.06");
                                }

                                catch (e) {
                                    u.RaiseError("eAirway.06 ", 1, "eAirway34", e);
                                };
                                /////eAirway.07
                                try {
                                    CGroup["eAirway.07"] = u.setBusinessObject(_eCG, NemsisList, "eAirway.07");
                                }

                                catch (e) {
                                    u.RaiseError("eAirway.07 ", 1, "eAirway34", e);
                                };
                                if (typeof CGroup !== 'undefined') {
                                    if (typeof CGroupArray === 'undefined') {
                                        var CGroupArray = new Array();
                                    };
                                    CGroupArray.push(CGroup);
                                    CGroup = undefined;
                                }
                            }
                        }
                    }
                }
            }
        };

        if (typeof AirwayGroup !== 'undefined') {
            if (typeof CGroupArray !== 'undefined') {
                if (CGroupArray.length > 0) {
                    AirwayGroup.ConfirmationGroup = CGroupArray;
                }
            };
            var eAirway = new Object();
            eAirway.AirwayGroup = AirwayGroup;
            return eAirway;
        }
        else {
            return null;
        }
    }
};
exports.seteArrest = function (pcrObj, NemsisList) {
    u.RaiseError("seteArrest", 100, "Intervention.js", "seteArrest");
    var pArrest = pcrObj

    if (pArrest.HasDataSet == false) {
        return null;
    };
    if (typeof pArrest.attributes !== 'undefined') {
        _eL = new Array();
        _eL = pArrest.attributes.elements;
        if (_eL.length > 0) {
            if (typeof eArrest === 'undefined') {
                var eArrest = new Object();
            };
            /////////////eArrest.01
            try {
                eArrest["eArrest.01"] = u.setBusinessObject(_eL, NemsisList, "eArrest.01");
            }
            catch (e) {
                u.RaiseError("eArrest.01", 1, "eArrest34", e);

            };
            /////////////eArrest.02
            try {
                eArrest["eArrest.02"] = u.setBusinessObject(_eL, NemsisList, "eArrest.02");
            }
            catch (e) {
                u.RaiseError("eArrest.02", 1, "eArrest34", e);
            };
            /////////////eArrest.03
            try {

                eArrest["eArrest.03"] = u.setBusinessObject(_eL, NemsisList, "eArrest.03");
            }

            catch (e) {
                u.RaiseError("eArrest.03", 1, "eArrest34", e);
            };

            /////////////eArrest.04
            try {
                eArrest["eArrest.04"] = u.setBusinessObject(_eL, NemsisList, "eArrest.04");
            }
            catch (e) {
                u.RaiseError("eArrest.04", 1, "eArrest34", e);
            };
            /////////////eArrest.05
            try {
                eArrest["eArrest.05"] = u.setBusinessObject(_eL, NemsisList, "eArrest.05");
            }
            catch (e) {
                u.RaiseError("eArrest.05", 1, "eArrest34", e);
            };

            /////////////eArrest.06
            try {
                eArrest["eArrest.06"] = u.setBusinessObject(_eL, NemsisList, "eArrest.06");
            }
            catch (e) {
                u.RaiseError("eArrest.06", 1, "eArrest34", e);
            };

            /////////////eArrest.07
            try {
                eArrest["eArrest.07"] = u.setBusinessObject(_eL, NemsisList, "eArrest.07");
            }
            catch (e) {
                u.RaiseError("eArrest.07", 1, "eArrest34", e);
            };

            /////////////eArrest.08
            try {
                eArrest["eArrest.08"] = u.setBusinessObject(_eL, NemsisList, "eArrest.08");
            }
            catch (e) {
                u.RaiseError("eArrest.08", 1, "eArrest34", e);
            };

            /////////////eArrest.09
            try {
                eArrest["eArrest.09"] = u.setBusinessObject(_eL, NemsisList, "eArrest.09");
            }
            catch (e) {
                u.RaiseError("eArrest.09", 1, "eArrest34", e);
            };

            /////////////eArrest.10
            try {
                eArrest["eArrest.10"] = u.setBusinessObject(_eL, NemsisList, "eArrest.10");
            }
            catch (e) {
                u.RaiseError("eArrest.10", 1, "eArrest34", e);
            };

            /////////////eArrest.11
            try {
                eArrest["eArrest.11"] = u.setBusinessObject(_eL, NemsisList, "eArrest.11");
            }
            catch (e) {
                u.RaiseError("eArrest.11", 1, "eArrest34", e);
            };

            /////////////eArrest.12
            try {
                eArrest["eArrest.12"] = u.setBusinessObject(_eL, NemsisList, "eArrest.12");
            }

            catch (e) {
                u.RaiseError("eArrest.12", 1, "eArrest34", e);
            };

            /////////////eArrest.13
            try {
                eArrest["eArrest.13"] = u.setBusinessObject(_eL, NemsisList, "eArrest.13");
            }
            catch (e) {
                u.RaiseError("eArrest.13", 1, "eArrest34", e);
            };

            /////////////eArrest.14
            try {
                eArrest["eArrest.14"] = u.setBusinessObject(_eL, NemsisList, "eArrest.14");
            }
            catch (e) {
                u.RaiseError("eArrest.14", 1, "eArrest34", e);
            };

            /////////////eArrest.15
            try {
                eArrest["eArrest.15"] = u.setBusinessObject(_eL, NemsisList, "eArrest.15");
            }
            catch (e) {
                u.RaiseError("eArrest.15", 1, "eArrest34", e);
            };

            /////////////eArrest.16
            try {
                eArrest["eArrest.16"] = u.setBusinessObject(_eL, NemsisList, "eArrest.16");
            }
            catch (e) {
                u.RaiseError("eArrest.16", 1, "eArrest34", e);
            };

            /////////////eArrest.17
            try {
                eArrest["eArrest.17"] = u.setBusinessObject(_eL, NemsisList, "eArrest.17");
            }
            catch (e) {
                u.RaiseError("eArrest.17", 1, "eArrest34", e);
            };

            /////////////eArrest.18
            try {
                eArrest["eArrest.18"] = u.setBusinessObject(_eL, NemsisList, "eArrest.18");
            }
            catch (e) {
                u.RaiseError("eArrest.18", 1, "eArrest34", e);
            };


            /////////////eArrest.19
            try {
                eArrest["eArrest.19"] = u.setBusinessObject(_eL, NemsisList, "eArrest.19");
            }
            catch (e) {
                u.RaiseError("eArrest.19", 1, "eArrest34", e);
            }
        }
    };
    if (typeof eArrest !== 'undefined') {
        return eArrest;
    }
    else {
        return null;
    }
};
exports.seteDevice = function (pcrObj, NemsisList) {
    u.RaiseError("seteDevice", 100, "Intervention.js", "seteDevice");
    var pDevice = pcrObj;
    if (pDevice.HasDataSet == true) {
        if (typeof pDevice.attributes.sections !== 'undefined') {
            var _sI = [];
            _sI = u.getSectionIndex(pDevice, "eDevice.DeviceGroup")
            if (_sI[0] !== -1) {

                for (var xx = 0; xx < _sI.length; xx++) {
                    var _eL = pDevice.attributes.sections[_sI[xx]].attributes.elements;
                    if (_eL.length > 0) {
                        DeviceGroup = new Object();
                        //edevice.01/////////////////////////////
                        try {
                            DeviceGroup["eDevice.01"] = u.setBusinessObject(_eL, NemsisList, "eDevice.01");
                        }
                        catch (e) {
                            u.RaiseError("eDevice.01 " + xx.toString(), 1, "eDevice34", e);
                        };

                        //edevice.02/////////////////////////////
                        try {
                            DeviceGroup["eDevice.02"] = u.setBusinessObject(_eL, NemsisList, "eDevice.02");
                        }

                        catch (e) {
                            u.RaiseError("eDevice.02 " + xx.toString(), 1, "eDevice34", e);
                        };

                        //edevice.03/////////////////////////////
                        try {
                            DeviceGroup["eDevice.03"] = u.setBusinessObject(_eL, NemsisList, "eDevice.03");
                        }

                        catch (e) {
                            u.RaiseError("eDevice.03 " + xx.toString(), 1, "eDevice34", e);
                        };

                        //edevice.07/////////////////////////////
                        try {
                            DeviceGroup["eDevice.07"] = u.setBusinessObject(_eL, NemsisList, "eDevice.07");
                        }

                        catch (e) {
                            u.RaiseError("eDevice.07 " + xx.toString(), 1, "eDevice34", e);
                        };

                        //edevice.08/////////////////////////////
                        try {
                            DeviceGroup["eDevice.08"] = u.setBusinessObject(_eL, NemsisList, "eDevice.08");
                        }

                        catch (e) {
                            u.RaiseError("eDevice.08 " + xx.toString(), 1, "eDevice34", e);
                        };


                        if (typeof pDevice.attributes.sections !== 'undefined') {
                            var _wFG = []
                            _wFG = u.getSectionIndex(pDevice.attributes.sections[xx], "eDevice.WaveformGroup");
                            if (_wFG[0] !== -1) {
                                WFG = new Object();
                                ///////////////WaveForm
                                var _eRG = new Array();
                                var _eRG = pDevice.attributes.sections[_sI[xx]].attributes.sections[_wFG].attributes.elements;
                                //edevice.04/////////////////////////////                                
                                if (_eRG.length > 0) {
                                    try {
                                        WFG["eDevice.04"] = u.setBusinessObject(_eRG, NemsisList, "eDevice.04");
                                    }
                                    catch (e) {
                                        u.RaiseError("eDevice.04 " + xx.toString(), 1, "eDevice34", e);
                                    };

                                    //edevice.05/////////////////////////////
                                    try {                                        
                                        WFG["eDevice.05"] = u.setBusinessObject(_eRG, NemsisList, "eDevice.05");
                                    }

                                    catch (e) {
                                        u.RaiseError("eDevice.05 " + xx.toString(), 1, "eDevice34", e);
                                    };

                                    //edevice.06/////////////////////////////
                                    try {
                                        WFG["eDevice.06"] = u.setBusinessObject(_eRG, NemsisList, "eDevice.06");
                                    }
                                    catch (e) {
                                        u.RaiseError("eDevice.06 " + xx.toString(), 1, "eDevice34", e);
                                    };

                                    if (typeof WFG !== 'undefined') {
                                        DeviceGroup.WaveformGroup = WFG;
                                    }
                                }
                            };
                            var _cSG = [];
                            _cSG = u.getSectionIndex(pDevice.attributes.sections[xx], "eDevice.ShockGroup")
                            if (_cSG.length > 0) {

                                var _eSG = [];
                                var _eSG = pDevice.attributes.sections[_sI[xx]].attributes.sections[_cSG].attributes.elements;
                                if (_eSG.length > 0) {
                                    //edevice.09/////////////////////////////
                                    try {
                                        SG["eDevice.09"] = u.setBusinessObject(_eSG, NemsisList, "eDevice.09");
                                    }
                                    catch (e) {
                                        u.RaiseError("eDevice.09 " + xx.toString(), 1, "eDevice34", e);
                                    };

                                    ///eDevice.10
                                    try {
                                        SG["eDevice.10"] = u.setBusinessObject(_eSG, NemsisList, "eDevice.10");
                                    }

                                    catch (e) {
                                        u.RaiseError("eDevice.10 " + xx.toString(), 1, "eDevice34", e);
                                    };


                                    ///eDevice.11
                                    try {
                                        SG["eDevice.11"] = u.setBusinessObject(_eSG, NemsisList, "eDevice.11");
                                    }
                                    catch (e) {
                                        u.RaiseError("eDevice.11 " + xx.toString(), 1, "eDevice34", e);
                                    };

                                    ///eDevice.12
                                    try {
                                        SG["eDevice.12"] = u.setBusinessObject(_eSG, NemsisList, "eDevice.12");
                                    }
                                    catch (e) {
                                        u.RaiseError("eDevice.12" + xx.toString(), 1, "eDevice34", e);
                                    };
                                    if (typeof SG !== 'undefined') {
                                        DeviceGroup.ShockGroup = SG;
                                    }
                                }
                            }
                        }
                    }
                    if (typeof DeviceGroup !== 'undefined') {
                        if (typeof DeviceGroupArray === 'undefined') {
                            var DeviceGroupArray = [];
                        };
                        DeviceGroupArray.push(DeviceGroup)
                        DeviceGroup = undefined;
                    }
                };
                if (typeof DeviceGroupArray !== 'undefined') {
                    if (DeviceGroupArray.length > 0) {
                        if (typeof eDevice === 'undefined') {
                            var eDevice = new Object();
                            eDevice.DeviceGroup = DeviceGroupArray;
                        }
                        return eDevice;
                    }
                }
                else {
                    return null;
                }
            }
        }
    }
};
exports.seteExam = function (pcrObj, NemsisList) {
    u.RaiseError("seteExam", 100, "Intervention.js", "seteExam");
    var pExam = pcrObj;
    if (pExam.HasDataSet == false) {
        return null;
    };
    if (typeof pExam.attributes.elements === 'undefined') {
        return null
    };

    var _exArr = []
    _exArr = pExam.attributes.elements;
    if (_exArr.length !== 0) {
        var eExam = new Object();
        ////////eExam.01        
        try {
            eExam["eExam.01"] = u.setBusinessObject(_exArr, NemsisList, "eExam.01")
        }
        catch (e) {
            u.RaiseError("eExam.01", 1, "eExam34", e);
        };

        ////////eExam.02        
        try {
            eExam["eExam.02"] = u.setBusinessObject(_exArr, NemsisList, "eExam.02")
        }
        catch (e) {
            u.RaiseError("eExam.02", 1, "eExam34", e);
        }
    };

    ///////////////////////////////////////////////

    if (typeof pExam.attributes.sections !== 'undefined') {

        var _sI = [];
        try {
            _sI = u.getSectionIndex(pExam, "eExam.AssessmentGroup");
        }
        catch (e) {
            u.RaiseError("eExam.AssessmentGroup", 1, "eExam34", e);
        };

        if (_sI[0] !== -1) {

            for (var xx = 0; xx < _sI.length; xx++) {
                var _assArr = pExam.attributes.sections[xx].attributes.elements;
                if (_assArr.length > 0) {
                    var AssessmentGroup = new Object();
                    /////////eExam.03
                    try {
                        AssessmentGroup["eExam.03"] = u.setBusinessObject(_assArr, NemsisList, "eExam.03")
                    }
                    catch (e) {
                        u.RaiseError("eExam.03", 1, "eExam34", e);
                    };

                    /////////eExam.04
                    try {
                        AssessmentGroup["eExam.04"] = u.setBusinessObject(_assArr, NemsisList, "eExam.04")
                    }
                    catch (e) {
                        u.RaiseError("eExam.04", 1, "eExam34", e);
                    };

                    /////////eExam.05
                    try {
                        AssessmentGroup["eExam.05"] = u.setBusinessObject(_assArr, NemsisList, "eExam.05")
                    }
                    catch (e) {
                        u.RaiseError("eExam.05", 1, "eExam34", e);
                    };

                    /////////eExam.06
                    try {
                        AssessmentGroup["eExam.06"] = u.setBusinessObject(_assArr, NemsisList, "eExam.06")
                    }
                    catch (e) {
                        u.RaiseError("eExam.06", 1, "eExam34", e);
                    };
                    /////////eExam.07
                    try {
                        AssessmentGroup["eExam.07"] = u.setBusinessObject(_assArr, NemsisList, "eExam.07")
                    }
                    catch (e) {
                        u.RaiseError("eExam.07", 1, "eExam34", e);
                    };

                    /////////eExam.08

                    try {
                        AssessmentGroup["eExam.08"] = u.setBusinessObject(_assArr, NemsisList, "eExam.08")
                    }
                    catch (e) {
                        u.RaiseError("eExam.08", 1, "eExam34", e);
                    };
                    /////////eExam.09
                    try {
                        AssessmentGroup["eExam.09"] = u.setBusinessObject(_assArr, NemsisList, "eExam.09")
                    }
                    catch (e) {
                        u.RaiseError("eExam.09", 1, "eExam34", e);
                    };

                    /////////eExam.12
                    try {
                        AssessmentGroup["eExam.12"] = u.setBusinessObject(_assArr, NemsisList, "eExam.12")
                    }
                    catch (e) {
                        u.RaiseError("eExam.12", 1, "eExam34", e);
                    };
                    /////////eExam.19
                    try {
                        AssessmentGroup["eExam.19"] = u.setBusinessObject(_assArr, NemsisList, "eExam.19")
                    }
                    catch (e) {
                        u.RaiseError("eExam.19", 1, "eExam34", e);
                    };

                    /////////eExam.20
                    try {
                        AssessmentGroup["eExam.20"] = u.setBusinessObject(_assArr, NemsisList, "eExam.20")
                    }
                    catch (e) {
                        u.RaiseError("eExam.20", 1, "eExam34", e);
                    }


                    //AbdomenGroup////////////////////////////////////////////////////////////////////

                    if (typeof pExam.attributes.sections[xx].attributes.sections !== 'undefined') {
                        var _s1 = [];
                        try {
                            _s1 = u.getSectionIndex(pExam.attributes.sections[xx], "eExam.AbdomenGroup");
                        }

                        catch (e) {
                            u.RaiseError("eExam.AbdomenGroup", 1, "eExam34", e);
                        };
                        if (_s1[0] !== -1) {
                            for (var x = 0; x <= _s1.length - 1; x++) {
                                var _abdArr = [];
                                var _ex1 = [];
                                _ex1 = pExam.attributes.sections[xx].attributes.sections[_s1[x]].attributes.elements;
                                if (_ex1.length > 0) {
                                    var AbdomenGroup = new Object();
                                    /////////eExam.10        
                                    try {
                                        AbdomenGroup["eExam.10"] = u.setBusinessObject(_ex1, NemsisList, "eExam.10")
                                    }
                                    catch (e) {
                                        u.RaiseError("eExam.10", 1, "eExam34", e);
                                    };

                                    /////////eExam.11
                                    try {
                                        AbdomenGroup["eExam.11"] = u.setBusinessObject(_ex1, NemsisList, "eExam.11")
                                    }
                                    catch (e) {
                                        u.RaiseError("eExam.11", 1, "eExam34", e);
                                    };

                                    if (typeof AbdomenGroup !== 'undefined') {
                                        if (typeof AbdomenGroupArray === 'undefined') {
                                            var AbdomenGroupArray = new Array();
                                        };
                                        AbdomenGroupArray.push(AbdomenGroup);
                                        AbdomenGroup = undefined;
                                    }
                                }
                            }
                        };


                        ////////////////////////////// Spine Group////////////////////
                        try {
                            _s2 = u.getSectionIndex(pExam.attributes.sections[xx], "eExam.SpineGroup");
                        }

                        catch (e) {
                            u.RaiseError("eExam.Spine", 1, "eExam34", e);
                        };

                        if (_s2[0] !== -1) {
                            for (var x = 0; x < _s2.length; x++) {
                                var _spGrp = [];
                                _spGrp = pExam.attributes.sections[xx].attributes.sections[_s2[x]].attributes.elements;
                                if (_spGrp.length > 0) {
                                    var SpineGroup = new Object();
                                    /////////eExam.13
                                    try {
                                        SpineGroup["eExam.13"] = u.setBusinessObject(_spGrp, NemsisList, "eExam.13")
                                    }
                                    catch (e) {
                                        u.RaiseError("eExam.13", 1, "eExam34", e);
                                    };

                                    /////////eExam.14
                                    try {
                                        SpineGroup["eExam.14"] = u.setBusinessObject(_spGrp, NemsisList, "eExam.14")
                                    }
                                    catch (e) {
                                        u.RaiseError("eExam.14", 1, "eExam34", e);
                                    };

                                    if (typeof SpineGroup !== 'undefined') {
                                        if (typeof SpineGroupArray === 'undefined') {
                                            var SpineGroupArray = new Array();
                                        };
                                        SpineGroupArray.push(SpineGroup);
                                        SpineGroup = undefined;
                                    }
                                }
                            }
                        };

                        ////////////////////////ExtremityGroup ////////////////////                
                        var _s3 = [];
                        try {
                            _s3 = u.getSectionIndex(pExam.attributes.sections[xx], "eExam.ExtremityGroup");
                        }

                        catch (e) {
                            u.RaiseError("eExam.Extremity", 1, "eExam34", e);

                        };

                        if (_s3[0] !== -1) {
                            for (var x = 0; x < _s3.length; x++) {
                                var _ex2 = [];
                                _ex2 = pExam.attributes.sections[xx].attributes.sections[_s3[x]].attributes.elements;
                                if (_ex2.length > 0) {
                                    var ExtremityGroup = new Object();
                                    /////////eExam.15
                                    try {
                                        ExtremityGroup["eExam.15"] = u.setBusinessObject(_ex2, NemsisList, "eExam.15")

                                    }
                                    catch (e) {
                                        u.RaiseError("eExam.15", 1, "eExam34", e);
                                    };

                                    /////////eExam.16
                                    try {
                                        ExtremityGroup["eExam.16"] = u.setBusinessObject(_ex2, NemsisList, "eExam.16")
                                    }
                                    catch (e) {
                                        u.RaiseError("eExam.16", 1, "eExam34", e);
                                    };
                                    if (typeof ExtremityGroup !== 'undefined') {
                                        if (typeof ExtremityGroupArray === 'undefined') {
                                            var ExtremityGroupArray = new Array();
                                        };

                                        ExtremityGroupArray.push(ExtremityGroup)
                                        ExtremityGroup = undefined;
                                    }
                                }
                            }
                        };


                        /////////////////////////////////////////////EyeGroup

                        try {
                            _s4 = u.getSectionIndex(pExam.attributes.sections[xx], "eExam.EyeGroup");
                        }
                        catch (e) {
                            u.RaiseError("eExam.EyeGroup", 1, "eExam34", e);
                        };

                        if (_s4[0] !== -1) {
                            for (var x = 0; x < _s4.length; x++) {
                                var _ex3 = new Array();
                                _ex3 = pExam.attributes.sections[xx].attributes.sections[_s4[x]].attributes.elements;
                                if (_ex3.length > 0)
                                    var EyeGroup = new Object();
                                /////////eExam.17
                                try {
                                    EyeGroup["eExam.17"] = u.setBusinessObject(_ex3, NemsisList, "eExam.17")
                                }
                                catch (e) {
                                    u.RaiseError("eExam.17", 1, "eExam34", e);
                                };

                                /////////eExam.18
                                try {
                                    EyeGroup["eExam.18"] = u.setBusinessObject(_ex3, NemsisList, "eExam.18")
                                }
                                catch (e) {
                                    u.RaiseError("eExam.18", 1, "eExam34", e);
                                };

                                if (typeof EyeGroup !== 'undefined') {
                                    if (typeof EyeGArray === 'undefined') {
                                        var EyeGArray = new Array();
                                    };
                                    EyeGArray.push(EyeGroup)
                                    EyeGroup = undefined;
                                }
                            }
                        }
                    };
                    if (typeof AssessmentGroup !== 'undefined') {
                        if (typeof AssessmentArray === 'undefined') {
                            var AssessmentArray = new Array();
                        }
                        AssessmentArray.push(AssessmentGroup)

                        if (typeof AbdomenGroupArray !== 'undefined') {
                            if (AbdomenGroupArray.length > 0) {
                                AssessmentGroup.AbdomenGroup = AbdomenGroupArray
                            }
                        };
                        if (typeof SpineGroupArray !== 'undefined') {
                            if (SpineGroupArray.length > 0) {
                                AssessmentGroup.SpineGroup = SpineGroupArray
                            }
                        };
                        if (typeof ExtremityGroupArray !== 'undefined') {
                            if (ExtremityGroupArray.length > 0) {
                                AssessmentGroup.ExtremityGroup = ExtremityGroupArray
                            }
                        };

                        if (typeof EyeGArray !== 'undefined') {
                            if (EyeGArray.length > 0) {
                                AssessmentGroup.EyeGroup = EyeGArray;
                            }
                        };
                        if (typeof AssessmentArray !== 'undefined') {
                            var AssessmentArray = new Array();
                        };
                        AssessmentArray.push(AssessmentGroup)
                    }
                }
            }
        };

        if (typeof eExam !== 'undefined') {
            if (typeof AssessmentArray !== 'undefined') {
                if (AssessmentArray.length > 0) {
                    eExam.AssessmentGroup = AssessmentArray;
                };
                return eExam;
            }
        }
        else {
            return null;
        }
    }
};
exports.seteLabs = function (pcrObj, NemsisList) {
    u.RaiseError("seteLabs", 100, "Intervention.js", "seteLabs");
    var pLabs = pcrObj;

    if (pLabs.HasDataSet == false) {
        return null;
    }
    else {
        if (typeof pLabs.attributes.sections === 'undefined') {
            return null;
        }

        var _sI = new Array();
        _sI = u.getSectionIndex(pLabs, "eLabs.LabGroup")
        if (_sI[0] !== -1) {
            for (var xx = 0; xx < _sI.length; xx++) {
                var topSection = pLabs.attributes.sections[_sI[xx]]
                var _eL = topSection.attributes.elements;
                if (_eL.length > 0) {
                    var LabGroup = new Object();
                    ////////eLabs.01 
                    try {
                        LabGroup["eLabs.01"] = u.setBusinessObject(_eL, NemsisList, "eLabs.01")
                    }
                    catch (e) {
                        u.RaiseError("eLabs.01", 1, "eLabs34", e);
                    };

                    ////////eLabs.02
                    try {
                        LabGroup["eLabs.02"] = u.setBusinessObject(_eL, NemsisList, "eLabs.02")
                    }
                    catch (e) {
                        u.RaiseError("eLabs.02", 1, "eLabs34", e);
                    };

                    //////////////////////////////////////ResultGroup        
                    if (typeof topSection.attributes.sections !== 'undefined') {

                        var resultSectionIndex = new Array();
                        try {
                            resultSectionIndex = u.getSectionIndex(topSection, "eLabs.LabResultGroup")
                        }
                        catch (e) {
                            u.RaiseError("eLabs.LabResultGroup", 1, "eLabs34", e);
                        };


                        if (resultSectionIndex[0] !== -1) {

                            for (var yy = 0; yy < resultSectionIndex.length; yy++) {

                                var resultSection = pLabs.attributes.sections[_sI[xx]].attributes.sections[resultSectionIndex[yy]];

                                var _eRSE = new Array();
                                _eRSE = resultSection.attributes.elements;
                                if (_eRSE.length > 0) {
                                    var ResultGroup = new Object();
                                    ////////eLab.03
                                    try {
                                        ResultGroup["eLabs.03"] = u.setBusinessObject(_eRSE, NemsisList, "eLabs.03")
                                    }
                                    catch (e) {
                                        u.RaiseError("eLabs.03", 1, "eLabs34", e);
                                    };

                                    ////////eLab.04
                                    try {
                                        ResultGroup["eLabs.04"] = u.setBusinessObject(_eRSE, NemsisList, "eLabs.04")
                                    }
                                    catch (e) {
                                        u.RaiseError("eLabs.04", 1, "eLabs34", e);
                                    };

                                    var imageSectionIndex = new Array();
                                    try {
                                        imageSectionIndex = u.getSectionIndex(topSection, "eLabs.LabImageGroup");
                                    }
                                    catch (e) {
                                        u.RaiseError("eLabs.LabImageGroup", 1, "eLabs34", e);
                                    };

                                    if (imageSectionIndex[0] !== -1) {
                                        for (var zz = 0; zz < imageSectionIndex.length; zz++) {
                                            var imageSection = pLabs.attributes.sections[_sI[xx]].attributes.sections[imageSectionIndex[zz]];
                                            var _eISE = [];
                                            _eISE = imageSection.attributes.elements;
                                            if (_eISE.length > 0) {
                                                var ImgGrp = new Object();
                                                ////////eLab.05
                                                try {
                                                    ImgGrp["eLabs.05"] = u.setBusinessObject(_eISE, NemsisList, "eLabs.05")
                                                }
                                                catch (e) {
                                                    u.RaiseError("eLabs.05", 1, "eLabs34", e);
                                                };

                                                ////////eLab.06
                                                try {
                                                    ImgGrp["eLabs.06"] = u.setBusinessObject(_eISE, NemsisList, "eLabs.06");
                                                }
                                                catch (e) {
                                                    u.RaiseError("eLabs.06", 1, "eLabs34", e);
                                                };

                                                ///////////////////////////////////////WaveFormGraphicGroup
                                                if (typeof imageSection.attributes.sections !== 'undefined') {
                                                    var _exArr5 = new Array();
                                                    try {
                                                        _exArr5 = u.getSectionIndex(imageSection, "eLabs.WaveformGraphicGroup")
                                                    }
                                                    catch (e) {
                                                        u.RaiseError("eLabs.WaveformGraphicGroup", 1, "eLabs34", e);
                                                    };


                                                    if (_exArr5[0] !== -1) {
                                                        for (var yyy = 0; yyy < _exArr5.length; yyy++) {
                                                            var _wfL = new Array();
                                                            _wfL = imageSection.attributes.sections[yyy].attributes.elements
                                                            if (_wfL.length > 0)
                                                                var WFG = new Object();
                                                            ////////eLab.07
                                                            try {
                                                                WFG["eLabs.07"] = u.setBusinessObject(_wfL, NemsisList, "eLabs.07")
                                                            }
                                                            catch (e) {
                                                                u.RaiseError("eLabs.07", 1, "eLabs34", e);
                                                            };

                                                            ////////eLab.08
                                                            try {
                                                                WFG["eLabs.08"] = u.setBusinessObject(_wfL, NemsisList, "eLabs.08")
                                                            }
                                                            catch (e) {
                                                                u.RaiseError("eLabs.07", 1, "eLabs34", e);;
                                                            };

                                                            if (typeof WFG !== 'undefined') {
                                                                if (typeof WaveFormArray === 'undefined') {
                                                                    var WaveFormArray = new Array();
                                                                }
                                                                WaveFormArray.push(WFG);
                                                                WFG = undefined;
                                                            }
                                                        }
                                                    };

                                                    if (typeof WaveFormArray !== 'undefined') {
                                                        if (WaveFormArray.length > 0) {

                                                            WaveformGraphicGroup = ImageArray;
                                                        };

                                                    }
                                                };

                                                if (typeof ImgGrp !== 'undefined') {
                                                    if (typeof WaveFormArray !== 'undefined') {
                                                        if (WaveFormArray.length > 0) {
                                                            if (typeof ImgGrp !== 'undefined') {
                                                                ImgGrp.WaveformGraphicGroup = WaveFormArray;
                                                            }
                                                        };
                                                    }
                                                    if (typeof ImageArray === 'undefined') {
                                                        var ImageArray = new Array();
                                                    }
                                                    ImageArray.push(ImgGrp);
                                                    ImgGrp = undefined;
                                                }
                                            }
                                        };
                                        if (typeof ResultGroup !== 'undefined') {
                                            if (typeof LabResultArray === 'undefined') {
                                                var LabResultArray = Array();
                                            };
                                            LabResultArray.push(ResultGroup);
                                            ResultGroup = undefined;
                                        }
                                    }
                                }
                            };
                            if (typeof LabGroup !== 'undefined') {
                                if (typeof LabResultArray !== 'undefined') {
                                    if (LabResultArray.length > 0) {
                                        LabGroup.LabResultGroup = LabResultArray
                                        LabResultArray = undefined;
                                    };

                                    if (typeof ImageArray !== 'undefined') {
                                        if (ImageArray.length > 0) {
                                            LabGroup.LabImageGroup = ImageArray;
                                            ImageArray = undefined;
                                        };

                                        if (typeof LabGroupArray === 'undefined') {
                                            var LabGroupArray = new Array();
                                        }
                                    };
                                    LabGroupArray.push(LabGroup)
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    if (typeof LabGroupArray !== 'undefined') {
        if (typeof eLabs === 'undefined') {
            var eLabs = new Object();
        };
        if (typeof LabErrorList !== 'undefined')
            return eLabs;
    }
    else {
        return null;
    }
};
exports.seteMedications = function (pcrObj, NemsisList) {
    u.RaiseError("seteMedications", 100, "Intervention.js", "seteMedications");
    var pMedications = pcrObj;

    if (pMedications.HasDataSet == false) {
        return null;
    };
    if (typeof pMedications.attributes.sections === 'undefined') {
        return null;
    };

    var _sI = [];
    try {
        _sI = u.getSectionIndex(pMedications, "eMedications.MedicationGroup");
    }
    catch (e) {
        u.RaiseError("eMedications.MedicationGroup", 1, "eMedications34", e);
    };
    if (_sI[0] !== -1) {

        for (var xx = 0; xx < _sI.length; xx++) {
            var _eL = new Array();
            _eL = pMedications.attributes.sections[xx].attributes.elements;
            if (_eL.length > 0) {
                var MedicationGroup = new Object();
                //eMedications.03////////
                try {
                    MedicationGroup["eMedications.03"] = u.setBusinessObject(_eL, NemsisList, "eMedications.03")
                }
                catch (e) {
                    u.RaiseError("eMedications.03", 1, "eMedications34", e);
                };
                //eMedications.01////////
                try {
                    MedicationGroup["eMedications.01"] = u.setBusinessObject(_eL, NemsisList, "eMedications.01")
                }
                catch (e) {
                    u.RaiseError("eMedications.01", 1, "eMedications34", e);
                };
                //eMedications.02////////
                try {
                    MedicationGroup["eMedications.02"] = u.setBusinessObject(_eL, NemsisList, "eMedications.02")
                }
                catch (e) {
                    u.RaiseError("eMedications.02", 1, "eMedications34", e);
                };
                //eMedications.04////////
                try {
                    MedicationGroup["eMedications.04"] = u.setBusinessObject(_eL, NemsisList, "eMedications.04")
                }
                catch (e) {
                    u.RaiseError("eMedications.04", 1, "eMedications34", e);
                };
                //////////////////////////////////////////////
                //////////////////////////////////////////////
                var _s1 = [];
                try {
                    _s1 = u.getSectionIndex(pMedications.attributes.sections[xx], "eMedications.DosageGroup");
                }
                catch (e) {
                    u.RaiseError("eMedications.DosageGroup", 1, "eMedications34", e);
                };

                if (_s1[0] !== -1) {

                    var _eD = [];
                    _eD = pMedications.attributes.sections[xx].attributes.sections[_s1].attributes.elements;
                    if (_eD.length > 0) {
                        var MedsDosage = new Object();
                        //eMedications.05/////////////
                        try {
                            MedsDosage["eMedications.05"] = u.setBusinessObject(_eD, NemsisList, "eMedications.05")
                        }
                        catch (e) {
                            u.RaiseError("eMedications.05", 1, "eMedications34", e);
                        };
                        //eMedications.06//////////////
                        try {
                            MedsDosage["eMedications.06"] = u.setBusinessObject(_eD, NemsisList, "eMedications.06")
                        }
                        catch (e) {
                            u.RaiseError("eMedications.06", 1, "eMedications34", e);
                        }
                    }
                };

                if (typeof MedsDosage !== 'undefined') {
                    if (typeof MedicationGroup === 'undefined') {
                        var MedicationGroup = new Object();
                    };
                    MedicationGroup["DosageGroup"] = MedsDosage;
                    MedsDosage = undefined;
                };

                //eMedications.07/////////////////
                try {
                    MedicationGroup["eMedications.07"] = u.setBusinessObject(_eL, NemsisList, "eMedications.07")
                }
                catch (e) {
                    u.RaiseError("eMedications.07", 1, "eMedications34", e);
                };
                //eMedications.08////////////
                try {
                    MedicationGroup["eMedications.08"] = u.setBusinessObject(_eL, NemsisList, "eMedications.08")
                }
                catch (e) {
                    u.RaiseError("eMedications.08", 1, "eMedications34", e);
                };
               //eMedications.09//////////////
                try {
                    MedicationGroup["eMedications.09"] = u.setBusinessObject(_eL, NemsisList, "eMedications.09")
                }
                catch (e) {
                    u.RaiseError("eMedications.09", 1, "eMedications34", e);
                };
                //eMedications.10////////////
                try {
                    MedicationGroup["eMedications.10"] = u.setBusinessObject(_eL, NemsisList, "eMedications.10")
                }
                catch (e) {
                    u.RaiseError("eMedications.10", 1, "eMedications34", e);
                };
                //eMedications.11///////////
                try {
                    MedicationGroup["eMedications.11"] = u.setBusinessObject(_eL, NemsisList, "eMedications.11")
                }
                catch (e) {
                    u.RaiseError("eMedications.11", 1, "eMedications34", e);
                };
                //eMedications.12/////////////
                try {
                    MedicationGroup["eMedications.12"] = u.setBusinessObject(_eL, NemsisList, "eMedications.12")
                }
                catch (e) {
                    u.RaiseError("eMedications.12", 1, "eMedications34", e);
                };
                if (typeof MedicationGroup !== 'undefined') {
                    if (typeof MedicationGroupArray === 'undefined') {
                        var MedicationGroupArray = new Array();
                    }
                    MedicationGroupArray.push(MedicationGroup);
                    MedicationGroup = undefined;
                }
            }
        };

    }
    if (typeof MedicationGroupArray !== 'undefined') {
        if (MedicationGroupArray.length > 0) {
            if (typeof eMedications === 'undefined') {
                var eMedications = new Object()
            }
            eMedications.MedicationGroup = MedicationGroupArray;
        }

        return eMedications;
    }
    else {
        return null;
    }
};
exports.seteProcedures = function (pcrObj, NemsisList) {
    u.RaiseError("seteProcedures", 100, "Intervention.js", "seteProcedures");    
    var pProcedures = pcrObj;
    if (pProcedures.HasDataSet == false) {
        return null;
    };

    if (typeof pProcedures.attributes.sections === 'undefined') {
        return null;
    };

    var _sI = [];
    try {
        _sI = u.getSectionIndex(pProcedures, "eProcedures.ProcedureGroup")
    }
    catch (e) {
        u.RaiseError("ePayment.ProcedureGroup", 1, "eProcedures34", e);
    };

    if (_sI[0] !== -1) {
        var ProcDateTime = [];
        for (var xx = 0; xx < _sI.length; xx++) {
            var procDateTime = {};
            var elementList = [];
            var elementList = pProcedures.attributes.sections[xx].attributes.elements;
            if (elementList.length > 0) {
                var ProcedureGroup = new Object();

                //Is the Procedure Airway?
                //eProcedures.03////////////
                try {
                    ProcedureGroup["eProcedures.03"] = u.setBusinessObject(elementList, NemsisList, "eProcedures.03")
                }
                catch (e) {
                    u.RaiseError("eProcedures.03", 1, "eProcedures34", e);
                };

                //eProcedures.01////////////
                try {
                    ProcedureGroup["eProcedures.01"] = u.setBusinessObject(elementList, NemsisList, "eProcedures.01")
                }
                catch (e) {
                    u.RaiseError("eProcedures.03", 1, "eProcedures34", e);
                };

                //eProcedures.02////////////
                try {
                    ProcedureGroup["eProcedures.02"] = u.setBusinessObject(elementList, NemsisList, "eProcedures.02")
                }
                catch (e) {
                    u.RaiseError("eProcedures.02", 1, "eProcedures34", e);
                };

                //eProcedures.04////////////
                try {
                    ProcedureGroup["eProcedures.04"] = u.setBusinessObject(elementList, NemsisList, "eProcedures.04")
                }
                catch (e) {
                    u.RaiseError("eProcedures.04", 1, "eProcedures34", e);
                };

                //eProcedures.05////////////
                try {
                    ProcedureGroup["eProcedures.05"] = u.setBusinessObject(elementList, NemsisList, "eProcedures.05")
                }
                catch (e) {
                    u.RaiseError("eProcedures.05", 1, "eProcedures34", e);
                };

                //eProcedures.06////////////
                try {
                    ProcedureGroup["eProcedures.06"] = u.setBusinessObject(elementList, NemsisList, "eProcedures.06")
                }
                catch (e) {
                    u.RaiseError("eProcedures.06", 1, "eProcedures34", e);
                };

                //eProcedures.07////////////
                try {
                    ProcedureGroup["eProcedures.07"] = u.setBusinessObject(elementList, NemsisList, "eProcedures.07")
                }
                catch (e) {
                    u.RaiseError("eProcedures.07", 1, "eProcedures34", e);
                };

                //eProcedures.08////////////
                try {
                    ProcedureGroup["eProcedures.08"] = u.setBusinessObject(elementList, NemsisList, "eProcedures.08")
                }
                catch (e) {
                    u.RaiseError("eProcedures.08", 1, "eProcedures34", e);
                };

                //eProcedures.09////////////
                try {
                    ProcedureGroup["eProcedures.09"] = u.setBusinessObject(elementList, NemsisList, "eProcedures.09")
                }
                catch (e) {
                    u.RaiseError("eProcedures.09", 1, "eProcedures34", e);
                };

                //eProcedures.10////////////
                try {
                    ProcedureGroup["eProcedures.10"] = u.setBusinessObject(elementList, NemsisList, "eProcedures.10")
                }
                catch (e) {
                    u.RaiseError("eProcedures.10", 1, "eProcedures34", e);
                };

                //eProcedures.11////////////
                try {
                    ProcedureGroup["eProcedures.11"] = u.setBusinessObject(elementList, NemsisList, "eProcedures.11")
                }
                catch (e) {
                    u.RaiseError("eProcedures.11", 1, "eProcedures34", e);
                };

                //eProcedures.12////////////
                try {
                    ProcedureGroup["eProcedures.12"] = u.setBusinessObject(elementList, NemsisList, "eProcedures.12")
                }
                catch (e) {
                    u.RaiseError("eProcedures.12", 1, "eProcedures34", e);
                };

                //eProcedures.13////////////
                try {
                    ProcedureGroup["eProcedures.13"] = u.setBusinessObject(elementList, NemsisList, "eProcedures.13")
                }
                catch (e) {
                    u.RaiseError("eProcedures.13", 1, "eProcedures34", e);
                };

                if (typeof ProcedureGroup !== 'undefined') {
                    if (typeof ProcedureGroupArray === 'undefined') {
                        var ProcedureGroupArray = new Array();
                    }
                    ProcedureGroupArray.push(ProcedureGroup);
                    ProcedureGroup = undefined;
                };

            }
        }
    };
    if (typeof ProcedureGroupArray !== 'undefined') {
        if (ProcedureGroupArray.length > 0) {
            if (typeof eProcedures === 'undefined') {
                var eProcedures = new Object();
            }
            eProcedures.ProcedureGroup = ProcedureGroupArray;
        };
        return eProcedures;
    }
    else {
        return null
    }
};
exports.seteProtocols = function (pcrObj, NemsisList) {
    u.RaiseError("seteProtocols", 100, "Intervention.js", "seteProtocols");
    var pProtocols = new Object()
    pProtocols = pcrObj
    if (pProtocols.HasDataSet == false) {
        return null;
    };

    if (typeof pProtocols.attributes.sections !== 'undefined') {
        var _sI = [];
        try {
            _sI = u.getSectionIndex(pProtocols, "eProtocols.ProtocolGroup")
        }
        catch (e) {
            u.RaiseError("eProtocols.ProcedureGroup", 1, "eProtocols34", e);
        };

        for (var xx = 0; xx < _sI.length; xx++) {
            var _eL = [];
            try {
                var _eL = pProtocols.attributes.sections[_sI[xx]].attributes.elements;
            }
            catch (e) {
                u.RaiseError("eProtocols", 1, "eProcedures34", e);
            };
            if (_eL.length > 0) {
                var ProtocolGroup = new Object();
                ///////////eProtocols.01////////
                try {
                    ProtocolGroup["eProtocols.01"] = u.setBusinessObject(_eL, NemsisList, "eProtocols.01")
                }
                catch (e) {
                    u.RaiseError("eProtocols.01", 1, "eProtocols34", e);
                };



                ///////////eProtocols.02////////
                try {
                    ProtocolGroup["eProtocols.02"] = u.setBusinessObject(_eL, NemsisList, "eProtocols.02")
                }
                catch (e) {
                    u.RaiseError("eProtocols.02", 1, "eProtocols34", e);
                };

                if (typeof ProtocolGroup !== 'undefined') {
                    if (typeof ProtocolGroupArray === 'undefined') {
                        var ProtocolGroupArray = new Array();
                    }
                    ProtocolGroupArray.push(ProtocolGroup)
                    ProtocolGroup = undefined;
                }
            }
        };
        if (typeof ProtocolGroupArray !== 'undefined') {
            if (ProtocolGroupArray.length > 0) {
                if (typeof eProtocols === 'undefined') {
                    var eProtocols = new Object();
                };
                eProtocols.ProtocolGroup = ProtocolGroupArray;
                return eProtocols;
            }
        }
        else {
            return null;
        }
    }
};
exports.seteVitals = function (pcrObj, NemsisList) {
    u.RaiseError("seteVitals", 100, "Intervention.js", "seteVitals");
    var pVitals = pcrObj;
    if (pVitals.HasDataSet == false) {
        return null;
    };
    if (typeof pVitals.attributes.sections !== 'undefined') {
        var _sI = [];
        try {
            _sI = u.getSectionIndex(pVitals, "eVitals.VitalGroup");
        }
        catch (e) {
            u.RaiseError("eVitals.VitalGroup", 1, "eVitals34", e);
        };
        if (_sI[0] !== -1) {

            for (var xx = 0; xx < _sI.length; xx++) {
                var _eL = [];
                _eL = pVitals.attributes.sections[xx].attributes.elements;
                if (_eL.length > 0) {

                    var VitalGroup = new Object();
                    //eVital.01/////////////////////////////
                    try {
                        VitalGroup["eVitals.01"] = u.setBusinessObject(_eL, NemsisList, "eVitals.01");
                    }
                    catch (e) {
                        u.RaiseError("eVitals.01", 1, "eVitals34", e);
                    };

                    //eVital.02/////////////////////////////
                    try {
                        VitalGroup["eVitals.02"] = u.setBusinessObject(_eL, NemsisList, "eVitals.02");
                    }
                    catch (e) {
                        u.RaiseError("eVitals.02", 1, "eVitals34", e);
                    };
                    //eVitals.12/////////////////////////////
                    try {
                        VitalGroup["eVitals.12"] = u.setBusinessObject(_eL, NemsisList, "eVitals.12");
                    }
                    catch (e) {
                        u.RaiseError("eVitals.12", 1, "eVitals34", e);
                    };

                    //eVital.13/////////////////////////////
                    try {
                        VitalGroup["eVitals.13"] = u.setBusinessObject(_eL, NemsisList, "eVitals.13");
                    }
                    catch (e) {
                        u.RaiseError("eVitals.13", 1, "eVitals34", e);
                    };

                    //eVitals.14/////////////////////////////
                    try {
                        VitalGroup["eVitals.14"] = u.setBusinessObject(_eL, NemsisList, "eVitals.14");
                    }
                    catch (e) {
                        u.RaiseError("eVitals.14", 1, "eVitals34", e);
                    };
                    //eVital.15/////////////////////////////
                    try {
                        VitalGroup["eVitals.15"] = u.setBusinessObject(_eL, NemsisList, "eVitals.15");
                    }
                    catch (e) {
                        u.RaiseError("eVitals.15", 1, "eVitals34", e);
                    };
                    /////////////eVital.16
                    try {
                        VitalGroup["eVitals.16"] = u.setBusinessObject(_eL, NemsisList, "eVitals.16");
                    }
                    catch (e) {
                        u.RaiseError("eVitals.16", 1, "eVitals34", e);
                    };

                    //eVitals.17/////////////////////////////
                    try {
                        VitalGroup["eVitals.17"] = u.setBusinessObject(_eL, NemsisList, "eVitals.17");
                    }
                    catch (e) {
                        u.RaiseError("eVitals.17", 1, "eVitals34", e);
                    };

                    //eVitals.18/////////////////////////////
                    try {
                        VitalGroup["eVitals.18"] = u.setBusinessObject(_eL, NemsisList, "eVitals.18");
                    }
                    catch (e) {
                        u.RaiseError("eVitals.18", 1, "eVitals34", e);
                    };
                    //eVital.26///////////////////////////// 
                    try {
                        VitalGroup["eVitals.26"] = u.setBusinessObject(_eL, NemsisList, "eVitals.26");
                    }
                    catch (e) {
                        u.RaiseError("eVitals.26", 1, "eVitals34", e);
                    };
                    //eVital.31/////////////////////////////   
                    try {
                        VitalGroup["eVitals.31"] = u.setBusinessObject(_eL, NemsisList, "eVitals.31");
                    }
                    catch (e) {
                        u.RaiseError("eVitals.31", 1, "eVitals34", e);
                    };

                    //eVital.32/////////////////////////////   
                    try {
                        VitalGroup["eVitals.32"] = u.setBusinessObject(_eL, NemsisList, "eVitals.32");
                    }
                    catch (e) {
                        u.RaiseError("eVitals.32", 1, "eVitals34", e);
                    };
                    //eVital.33/////////////////////////////   
                    try {
                        VitalGroup["eVitals.33"] = u.setBusinessObject(_eL, NemsisList, "eVitals.33");
                    }
                    catch (e) {
                        u.RaiseError("eVitals.33", 1, "eVitals34", e);
                    };
                    ///////////////Cardiac Rhythm Group
                    if (typeof pVitals.attributes.sections[xx].attributes.sections !== 'undefined') {
                        var _cRG = [];
                        try {
                            _cRG = u.getSectionIndex(pVitals.attributes.sections[xx], "eVitals.CardiacRhythmGroup");
                        }
                        catch (e) {
                            u.RaiseError("eVitals.CardiacRhythmGroup", 1, "eVitals34", e);
                        };

                        if (_cRG[0] !== -1) {
                            var _eRG = [];
                            _eRG = pVitals.attributes.sections[xx].attributes.sections[_cRG].attributes.elements;
                            if (_eRG.length > 0) {
                                var _CRG = new Object();
                                //eVital.03/////////////////////////////
                                try {
                                    _CRG["eVitals.03"] = u.setBusinessObject(_eRG, NemsisList, "eVitals.03");
                                }
                                catch (e) {
                                    u.RaiseError("eVitals.03", 1, "eVitals34", e);
                                };

                                //eVital.04/////////////////////////////
                                try {
                                    _CRG["eVitals.04"] = u.setBusinessObject(_eRG, NemsisList, "eVitals.04");
                                }
                                catch (e) {
                                    u.RaiseError("eVitals.04", 1, "eVitals34", e);
                                };
                                //eVital.05/////////////////////////////
                                try {
                                    _CRG["eVitals.05"] = u.setBusinessObject(_eRG, NemsisList, "eVitals.05");
                                }
                                catch (e) {
                                    u.RaiseError("eVitals.05", 1, "eVitals34", e);
                                };
                            }
                        };

                        if (typeof _CRG !== 'undefined') {
                            if (typeof VitalGroup !== 'undefined') {
                                VitalGroup["CardiacRhythmGroup"] = _CRG;
                                _CRG = undefined;
                            }
                        };


                        ///////////////////////////////////////////eVitals.BloodPressureGroup

                        var _bPi = [];  //if no sections, NA values                        
                        try {
                            _bPi = u.getSectionIndex(pVitals.attributes.sections[xx], "eVitals.BloodPressureGroup");
                        }
                        catch (e) {
                            u.RaiseError("eVitals.BloodPressureGroup", 1, "eVitals34", e);
                        };

                        if (_bPi[0] !== -1) {
                            var _eBP = [];
                            _eBP = pVitals.attributes.sections[xx].attributes.sections[_bPi].attributes.elements;
                            if (_eBP.length > 0) {
                                var _BPG = new Object();
                                //eVital.06/////////////////////////////
                                try {
                                    _BPG["eVitals.06"] = u.setBusinessObject(_eBP, NemsisList, "eVitals.06");
                                }
                                catch (e) {
                                    u.RaiseError("eVitals.06", 1, "eVitals34", e);
                                };

                                //eVitals.07/////////////////////////////
                                try {
                                    _BPG["eVitals.07"] = u.setBusinessObject(_eBP, NemsisList, "eVitals.07");
                                }
                                catch (e) {
                                    u.RaiseError("eVitals.07", 1, "eVitals34", e);
                                };

                                //eVital.08/////////////////////////////
                                try {
                                    _BPG["eVitals.08"] = u.setBusinessObject(_eBP, NemsisList, "eVitals.08");
                                }
                                catch (e) {
                                    u.RaiseError("eVitals.08", 1, "eVitals34", e);
                                };

                                //eVital.09/////////////////////////////               
                                try {
                                    _BPG["eVitals.09"] = u.setBusinessObject(_eL, NemsisList, "eVitals.09");
                                }
                                catch (e) {
                                    u.RaiseError("eVitals.09", 1, "eVitals34", e);
                                };
                            }
                        }
                    };

                    if (typeof _BPG !== 'undefined') {
                        if (typeof VitalGroup !== 'undefined') {
                            VitalGroup["BloodPressureGroup"] = _BPG;
                            _BPG = undefined;
                        }
                    };


                    ///////////////HeartRateGroup
                    var _bPI = [];
                    try {
                        _bPI = u.getSectionIndex(pVitals.attributes.sections[xx], "eVitals.HeartRateGroup")
                    }
                    catch (e) {
                        u.RaiseError("eVitals.HeartRateGroup", 1, "eVitals34", e);
                    };

                    if (_bPI[0] !== -1) {
                        var _eHG = [];
                        _eHG = pVitals.attributes.sections[xx].attributes.sections[_bPI].attributes.elements;

                        if (_eHG.length > 0) {
                            var _HRG = new Object();
                            //eVital.10/////////////////////////////               
                            try {
                                _HRG["eVitals.10"] = u.setBusinessObject(_eHG, NemsisList, "eVitals.10");
                            }
                            catch (e) {
                                u.RaiseError("eVitals.10", 1, "eVitals34", e);
                            };

                            //eVital.11/////////////////////////////               
                            try {
                                _HRG["eVitals.11"] = u.setBusinessObject(_eHG, NemsisList, "eVitals.11");
                            }
                            catch (e) {
                                u.RaiseError("eVitals.11", 1, "eVitals34", e);
                            };
                        }
                    };
                    if (typeof _HRG !== 'undefined') {
                        if (typeof VitalGroup !== 'undefined') {
                            VitalGroup["HeartRateGroup"] = _HRG
                            _HRG = undefined;
                        }
                    };


                    ///////////////////////////////////////////////////

                    var _tG = [];
                    try {
                        _tG = u.getSectionIndex(pVitals.attributes.sections[xx], "eVitals.GlasgowScoreGroup")
                    }
                    catch (e) {
                        u.RaiseError("eVitals.GlasgowScoreGroup", 1, "eVitals34", e);
                    };
                    if (_tG[0] !== -1) {
                        var _eGCS = [];
                        _eGCS = pVitals.attributes.sections[xx].attributes.sections[_tG].attributes.elements;
                        if (_eGCS.length > 0) {
                            var _GCS = new Object()
                            //eVitals.19/////////////////////////////
                            try {
                                _GCS["eVitals.19"] = u.setBusinessObject(_eGCS, NemsisList, "eVitals.19");
                            }
                            catch (e) {
                                u.RaiseError("eVitals.19", 1, "eVitals34", e);
                            };


                            //eVital.20/////////////////////////////        
                            try {
                                _GCS["eVitals.20"] = u.setBusinessObject(_eGCS, NemsisList, "eVitals.20");
                            }
                            catch (e) {
                                u.RaiseError("eVitals.20", 1, "eVitals34", e);
                            };

                            //eVital.21/////////////////////////////        
                            try {
                                _GCS["eVitals.21"] = u.setBusinessObject(_eGCS, NemsisList, "eVitals.21");
                            }
                            catch (e) {
                                u.RaiseError("eVitals.21", 1, "eVitals34", e);
                            };
                            //eVital.22/////////////////////////////        
                            try {
                                _GCS["eVitals.22"] = u.setBusinessObject(_eGCS, NemsisList, "eVitals.22");
                            }
                            catch (e) {
                                u.RaiseError("eVitals.22", 1, "eVitals34", e);
                            };
                            //eVital.23/////////////////////////////        
                            try {
                                _GCS["eVitals.23"] = u.setBusinessObject(_eGCS, NemsisList, "eVitals.23");
                            }
                            catch (e) {
                                u.RaiseError("eVitals.23", 1, "eVitals34", e);
                            };
                        }
                    };
                    if (typeof _GCS !== 'undefined') {
                        if (typeof VitalGroup !== 'undefined') {
                            VitalGroup["GlasgowScoreGroup"] = _GCS;
                            _GCS = undefined;
                        }
                    };


                    var _tG = [];
                    try {
                        _tG = u.getSectionIndex(pVitals.attributes.sections[xx], "eVitals.TemperatureGroup")
                    }
                    catch (e) {
                        u.RaiseError("eVitals.TemperatureGroup", 1, "eVitals34", e);
                    };

                    if (_tG[0] !== -1) {
                        var _eTGP = [];
                        _eTGP = pVitals.attributes.sections[xx].attributes.sections[_tG].attributes.elements;
                        if (_eTGP.length > 0) {
                            var _TMPG = new Object();
                            //eVital.24/////////////////////////////        
                            try {
                                _TMPG["eVitals.24"] = u.setBusinessObject(_eTGP, NemsisList, "eVitals.24");
                            }
                            catch (e) {
                                u.RaiseError("eVitals.24", 1, "eVitals34", e);
                            };

                            //eVital.25/////////////////////////////   
                            try {
                                _TMPG["eVitals.25"] = u.setBusinessObject(_eTGP, NemsisList, "eVitals.25");
                            }
                            catch (e) {
                                u.RaiseError("eVitals.25", 1, "eVitals34", e);
                            };
                        }
                    };
                    if (typeof _TMPG !== 'undefined') {
                        if (typeof VitalGroup !== 'undefined') {
                            VitalGroup["TemperatureGroup"] = _TMPG;
                            _TMPG = undefined;
                        }
                    };



                    var _pSG = [];
                    try {
                        _pSG = u.getSectionIndex(pVitals.attributes.sections[xx], "eVitals.PainScaleGroup")
                    }
                    catch (e) {
                        u.RaiseError("eVitals.PainScaleGroup", 1, "eVitals34", e);
                    };

                    if (_pSG[0] !== -1) {
                        var _ePSG = [];
                        _ePSG = pVitals.attributes.sections[xx].attributes.sections[_pSG].attributes.elements;

                        if (_ePSG.length > 0) {
                            var _PSG = new Object();
                            //eVital.27/////////////////////////////   
                            try {
                                _PSG["eVitals.27"] = u.setBusinessObject(_ePSG, NemsisList, "eVitals.27");
                            }
                            catch (e) {
                                u.RaiseError("eVitals.27", 1, "eVitals34", e);
                            };

                            //eVital.28/////////////////////////////   
                            try {
                                _PSG["eVitals.28"] = u.setBusinessObject(_ePSG, NemsisList, "eVitals.28");
                            }
                            catch (e) {
                                u.RaiseError("eVitals.28", 1, "eVitals34", e);
                            }
                        }
                    };

                    if (typeof _PSG !== 'undefined') {
                        VitalGroup["PainScaleGroup"] = _PSG;
                    };


                    var _sSG = [];  //if no sections, NA values                        
                    try {
                        _sSG = u.getSectionIndex(pVitals.attributes.sections[xx], "eVitals.StrokeScaleGroup");
                    }
                    catch (e) {
                        u.RaiseError("eVitals.StrokeScaleGroup", 1, "eVitals34", e);
                    };

                    if (_sSG[0] !== -1) {
                        var _eSSG = [];
                        var _eSSG = pVitals.attributes.sections[xx].attributes.sections[_sSG].attributes.elements;
                        if (_eSSG.length > 0) {
                            var _sSG = new Object();
                            //eVital.29/////////////////////////////   
                            try {
                                _sSG["eVitals.29"] = u.setBusinessObject(_eSSG, NemsisList, "eVitals.29");
                            }
                            catch (e) {
                                u.RaiseError("eVitals.29", 1, "eVitals34", e);
                            };

                            //eVital.30/////////////////////////////   
                            try {
                                _sSG["eVitals.30"] = u.setBusinessObject(_eSSG, NemsisList, "eVitals.30");
                            }
                            catch (e) {
                                u.RaiseError("eVitals.30", 1, "eVitals34", e);
                            };

                        }
                    };
                    if (typeof _SSG !== 'undefined') {
                        if (typeof VitalGroup !== 'undefined') {
                            VitalGroup["StrokeScaleGroup"] = _SSG;
                        }
                    }

                    if (typeof VitalGroup !== 'undefined') {
                        if (typeof VitalGroupArray === 'undefined') {
                            var VitalGroupArray = new Array();
                        };
                        VitalGroupArray.push(VitalGroup)
                        VitalGroup = undefined;
                    }
                }
            }
        }
    };
    if (typeof VitalGroupArray !== 'undefined') {
        if (VitalGroupArray.length > 0) {
            if (typeof eVitals === 'undefined') {
                var eVitals = new Object();
            };
            eVitals.VitalGroup = VitalGroupArray;
            return eVitals;
        }
    }
    else {
        return null
    }
};
exports.seteInjury = function (pcrObj, NemsisList) {
    var pInjury = new Object();
    u.RaiseError("seteInjury", 100, "Intervention.js", "seteInjury");
    pInjury = pcrObj;
    var VehicleIncident = false;
    if (pInjury.HasDataSet == false) {
        return null;
    };
    if (typeof pInjury.attributes.elements === 'undefined') {
        return null
    };
    var _eL = [];
    _eL = pInjury.attributes.elements;
    if (_eL.length > 0) {
        var eInjury = new Object();
        //eInjury.01///////////////////
        try {
            eInjury["eInjury.01"] = u.setBusinessObject(_eL, NemsisList, "eInjury.01");
        }
        catch (e) {
            u.RaiseError("eInjury.01", 1, "eInjury34", e);
        };

        //eInjury.02///////////////////
        try {
            eInjury["eInjury.02"] = u.setBusinessObject(_eL, NemsisList, "eInjury.02");
        }
        catch (e) {
            u.RaiseError("eInjury.02", 1, "eInjury34", e);
        };


        //eInjury.03///////////////////
        try {
            eInjury["eInjury.03"] = u.setBusinessObject(_eL, NemsisList, "eInjury.03");
        }
        catch (e) {
            u.RaiseError("eInjury.03", 1, "eInjury34")
        };

        //eInjury.04///////////////////
        try {
            eInjury["eInjury.04"] = u.setBusinessObject(_eL, NemsisList, "eInjury.04");
        }
        catch (e) {
            u.RaiseError("eInjury.04", 1, "eInjury34", e);
        };

        ///eInjury.05////////////    
        try {
            eInjury["eInjury.05"] = u.setBusinessObject(_eL, NemsisList, "eInjury.05");
        }
        catch (e) {
            u.RaiseError("eInjury.05", 1, "eInjury34", e);
        };
        //eInjury.06///////////
        try {
            eInjury["eInjury.06"] = u.setBusinessObject(_eL, NemsisList, "eInjury.06");
        }
        catch (e) {
            u.RaiseError("eInjury.06", 1, "eInjury34", e);
        };
        //eInjury.07/////////
        try {
            eInjury["eInjury.07"] = u.setBusinessObject(_eL, NemsisList, "eInjury.07");
        }
        catch (e) {
            u.RaiseError("eInjury.07", 1, "eInjury34", e);
        };
        //eInjury.08//////////
        try {
            eInjury["eInjury.08"] = u.setBusinessObject(_eL, NemsisList, "eInjury.08");
        }
        catch (e) {
            u.RaiseError("eInjury.08", 1, "eInjury34", e);
        };
        //eInjury.09/////////////
        try {
            eInjury["eInjury.09"] = u.setBusinessObject(_eL, NemsisList, "eInjury.09");
        }
        catch (e) {
            u.RaiseError("eInjury.09", 1, "eInjury34", e);
        };
        //eInjury.10///////////////
        try {
            eInjury["eInjury.10"] = u.setBusinessObject(_eL, NemsisList, "eInjury.10");
        }
        catch (e) {
            u.RaiseError("eInjury.10", 1, "eInjury34", e);
        };

        ///////////////////////////////////////////            
        if (typeof pInjury.attributes.sections !== 'undefined') {
            var _cCG = [];  //if no sections, NA values                        
            try {
                _cCG = u.getSectionIndex(pInjury, "eInjury.CollisionGroup");
            }
            catch (e) {
                u.RaiseError("eInjury.CollisionGroup", 1, "eInjury34", e);
            };

            if (_cCG[0] !== -1) {

                var _eCCG = [];
                var _eCCG = pInjury.attributes.sections[_cCG].attributes.elements;
                if (_eCCG.length > 0) {
                    var _ICG = new Object();
                    //eInjury.11///////
                    try {
                        _ICG["eInjury.11"] = u.setBusinessObject(_eCCG, NemsisList, "eInjury.11");
                    }
                    catch (e) {
                        u.RaiseError("eInjury.11", 1, "eInjury34", e);
                    };

                    //eInjury.12///////////
                    try {
                        _ICG["eInjury.12"] = u.setBusinessObject(_eCCG, NemsisList, "eInjury.12");
                    }
                    catch (e) {
                        u.RaiseError("eInjury.12", 1, "eInjury34", e);
                    };

                    //eInjury.13/////////////
                    try {
                        _ICG["eInjury.13"] = u.setBusinessObject(_eCCG, NemsisList, "eInjury.13");
                    }
                    catch (e) {
                        u.RaiseError("eInjury.13", 1, "eInjury34", e);
                    };

                    //eInjury.14///////////////
                    try {
                        _ICG["eInjury.14"] = u.setBusinessObject(_eCCG, NemsisList, "eInjury.14");

                    }
                    catch (e) {
                        u.RaiseError("eInjury.14", 1, "eInjury34", e);
                    };

                    //eInjury.15//////////////  
                    try {
                        _ICG["eInjury.15"] = u.setBusinessObject(_eCCG, NemsisList, "eInjury.15");
                    }
                    catch (e) {
                        u.RaiseError("eInjury.15", 1, "eInjury34", e);
                    };

                    //eInjury.16//////////////
                    try {
                        _ICG["eInjury.16"] = u.setBusinessObject(_eCCG, NemsisList, "eInjury.16");
                    }
                    catch (e) {
                        u.RaiseError("eInjury.16", 1, "eInjury34", e);
                    };

                    //eInjury.17//////////////
                    try {
                        _ICG["eInjury.17"] = u.setBusinessObject(_eCCG, NemsisList, "eInjury.17");
                    }
                    catch (e) {
                        u.RaiseError("eInjury.17", 1, "eInjury34", e);
                    };

                    //eInjury.18//////////////
                    try {
                        _ICG["eInjury.18"] = u.setBusinessObject(_eCCG, NemsisList, "eInjury.18");
                    }
                    catch (e) {
                        u.RaiseError("eInjury.18", 1, "eInjury34", e);
                    };

                    //eInjury.19//////////////
                    try {
                        _ICG["eInjury.19"] = u.setBusinessObject(_eCCG, NemsisList, "eInjury.19");

                    }
                    catch (e) {
                        u.RaiseError("eInjury.19", 1, "eInjury34", e);
                    };

                    //eInjury.20//////////////
                    try {
                        _ICG["eInjury.20"] = u.setBusinessObject(_eCCG, NemsisList, "eInjury.20");

                    }
                    catch (e) {
                        u.RaiseError("eInjury.20", 1, "eInjury34", e);
                    };

                    //eInjury.21//////////////
                    try {
                        _ICG["eInjury.21"] = u.setBusinessObject(_eCCG, NemsisList, "eInjury.21");

                    }
                    catch (e) {
                        u.RaiseError("eInjury.21", 1, "eInjury34", e);
                    };

                    //eInjury.22//////////////
                    try {
                        _ICG["eInjury.22"] = u.setBusinessObject(_eCCG, NemsisList, "eInjury.22");
                    }
                    catch (e) {
                        u.RaiseError("eInjury.22", 1, "eInjury34", e);
                    };

                    //eInjury.23///////////
                    try {
                        _ICG["eInjury.23"] = u.setBusinessObject(_eCCG, NemsisList, "eInjury.23");
                    }
                    catch (e) {
                        u.RaiseError("eInjury.23", 1, "eInjury34", e);
                    };

                    //eInjury.24/////////////
                    try {
                        _ICG["eInjury.24"] = u.setBusinessObject(_eCCG, NemsisList, "eInjury.24");
                    }
                    catch (e) {
                        u.RaiseError("eInjury.24", 1, "eInjury34", e);
                    };

                    //eInjury.25////////
                    try {
                        _ICG["eInjury.25"] = u.setBusinessObject(_eCCG, NemsisList, "eInjury.25");
                    }
                    catch (e) {
                        u.RaiseError("eInjury.25", 1, "eInjury34", e);
                    };

                    if (typeof pInjury.attributes.sections !== 'undefined') {
                        var _eSG = -1;  //if no sections, NA values   
                        try {
                            _eSG = u.getSectionIndex(pInjury.attributes.sections[0], "eInjury.SeatGroup");
                        }
                        catch (e) {
                            u.RaiseError("eInjury.SeatGroup", 1, "eInjury34", e);
                        };

                        if (_eSG !== -1) {
                            for (var x = 0; x <= _eSG.length - 1; x++) {
                                var _elementList = [];
                                _elementList = pInjury.attributes.sections[0].attributes.sections[_eSG[x]].attributes.elements;
                                if (_elementList.length > 0) {
                                    var SG = new Object();
                                    //eInjury.26////////  
                                    try {
                                        SG["eInjury.26"] = u.setBusinessObject(_elementList, NemsisList, "eInjury.26");
                                    }
                                    catch (e) {
                                        u.RaiseError("eInjury.26", 1, "eInjury34", e);
                                    };

                                    //eInjury.27////////
                                    try {
                                        SG["eInjury.27"] = u.setBusinessObject(_elementList, NemsisList, "eInjury.27");
                                    }
                                    catch (e) {
                                        u.RaiseError("eInjury.27", 1, "eInjury34", e);
                                    };
                                    //eInjury.28////////
                                    try {
                                        SG["eInjury.28"] = u.setBusinessObject(_elementList, NemsisList, "eInjury.28");
                                    }
                                    catch (e) {
                                        u.RaiseError("eInjury.28", 1, "eInjury34", e);
                                    };

                                    //eInjury.29////////
                                    try {
                                        SG["eInjury.29"] = u.setBusinessObject(_elementList, NemsisList, "eInjury.29");
                                    }
                                    catch (e) {
                                        u.RaiseError("eInjury.29", 1, "eInjury34", e);
                                    };

                                    if (typeof SG !== 'undefined') {
                                        if (typeof SeatGroupArray === 'undefined') {
                                            var SeatGroupArray = new Array();
                                        };
                                        SeatGroupArray.push(SG)
                                        SG = undefined;
                                    }
                                }
                            };
                            if ((typeof _ICG !== 'undefined') && (typeof eInjury !== 'undefined')) {
                                eInjury.CollisionGroup = _ICG
                                if ((typeof SeatGroupArray !== 'undefined') && (SeatGroupArray.length > 0)) {
                                    eInjury.CollisionGroup.SeatGroup = SeatGroupArray.slice(0)
                                };
                                return eInjury;
                            }
                            else {
                                return null;
                            }
                        }
                    }
                }
            }
        }
    };
    if (typeof eInjury !== 'undefined') {
        return eInjury
    }
    else {
        return null;
    }
};
