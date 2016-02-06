var u = require('cloud/Utilities.js');
exports.seteHistory = function (pcrObj, NemsisList) {
    u.RaiseError("seteHistory", 100, "Patient.js", "seteHistory");
    var pHistory = new Object();
    pHistory = pcrObj;
    if (pHistory.HasDataSet == false) {
        return eHistory;
    }
    if (typeof pHistory.attributes.elements === 'undefined') {
        return eHistory;
    };
    var _eL = [];
    _eL = pHistory.attributes.elements;
    if (_eL.length !== 0) {
        var eHistory = new Object();
        ////////eHistory.01
        try {
            eHistory["eHistory.01"] = u.setBusinessObject(_eL, NemsisList, "eHistory.01");
        }
        catch (e) {
            u.RaiseError("eHistory.01", 1, "eHistory34", e);
        };

        ////////eHistory.05
        try {
            eHistory["eHistory.05"] = u.setBusinessObject(_eL, NemsisList, "eHistory.05");
        }
        catch (e) {
            u.RaiseError("eHistory.05", 1, "eHistory34", e);
        };


        ////////eHistory.06
        try {
            eHistory["eHistory.06"] = u.setBusinessObject(_eL, NemsisList, "eHistory.06");
        }
        catch (e) {
            u.RaiseError("eHistory.06", 1, "eHistory34", e);
        };

        ////////eHistory.07
        try {
            eHistory["eHistory.07"] = u.setBusinessObject(_eL, NemsisList, "eHistory.07");
        }
        catch (e) {
            u.RaiseError("eHistory.07", 1, "eHistory34", e);
        };

        ////////eHistory.08
        try {
            eHistory["eHistory.08"] = u.setBusinessObject(_eL, NemsisList, "eHistory.08");
        }
        catch (e) {
            u.RaiseError("eHistory.09", 1, "eHistory34", e);
        };

        ////////eHistory.09
        try {
            eHistory["eHistory.09"] = u.setBusinessObject(_eL, NemsisList, "eHistory.09");
        }
        catch (e) {
            u.RaiseError("eHistory.09", 1, "eHistory34", e);
        };
        ////////eHistory.16
        try {
            eHistory["eHistory.16"] = u.setBusinessObject(_eL, NemsisList, "eHistory.16");
        }
        catch (e) {
            u.RaiseError("eHistory.16", 1, "eHistory34", e);
        };

        ////////eHistory.17
        try {
            eHistory["eHistory.17"] = u.setBusinessObject(_eL, NemsisList, "eHistory.17");
        }
        catch (e) {
            u.RaiseError("eHistory.17", 1, "eHistory34", e);
        };

        ////////eHistory.18
        try {
            eHistory["eHistory.18"] = u.setBusinessObject(_eL, NemsisList, "eHistory.18");
        }
        catch (e) {
            u.RaiseError("eHistory.18", 1, "eHistory34", e);
        };

        ////////eHistory.19
        try {
            eHistory["eHistory.19"] = u.setBusinessObject(_eL, NemsisList, "eHistory.19");
        }
        catch (e) {
            u.RaiseError("eHistory.19", 1, "eHistory34", e);

        };
        //////////////////////////////////////////////////////////

        if (typeof pHistory.attributes.sections !== 'undefined') {
            PractitionerGroupArray = [];
            try {
                _sectionIndex = u.getSectionIndex(pHistory, "eHistory.PractitionerGroup");
            }
            catch (e) {
                u.RaiseError("eHistory.PractitionerGroup", 1, "eHistory34", e);
            };

            if (_sectionIndex[0] !== -1) {
                for (var x = 0; x < _sectionIndex.length; x++) {

                    var _pGRP = [];
                    _pGRP = pHistory.attributes.sections[_sectionIndex[x]].attributes.elements;
                    if (_pGRP.length > 0) {
                        var PractitionerGroup = new Object();
                        /////////eHistory.02
                        try {
                            PractitionerGroup["eHistory.02"] = u.setBusinessObject(_pGRP, NemsisList, "eHistory.02");
                        }
                        catch (e) {
                            u.RaiseError("eHistory.02", 1, "eHistory34", e);
                        };

                        /////////eHistory.03
                        try {
                            PractitionerGroup["eHistory.03"] = u.setBusinessObject(_pGRP, NemsisList, "eHistory.03");
                        }
                        catch (e) {
                            u.RaiseError("eHistory.03", 1, "eHistory34", e);
                        };

                        /////////eHistory.04
                        try {
                            PractitionerGroup["eHistory.04"] = u.setBusinessObject(_pGRP, NemsisList, "eHistory.04");
                        }
                        catch (e) {
                            u.RaiseError("eHistory.04", 1, "eHistory34", e);
                        };
                        PractitionerGroupArray.push(PractitionerGroup)
                        PractitionerGroup = undefined;
                    }
                }
            };

            ////////////////////////////////                    
            try {
                _sI = u.getSectionIndex(pHistory, "eHistory.ImmunizationsGroup");
            }
            catch (e) {
                u.RaiseError("eHistory.ImmunizationsGroup", 1, "eHistory34", e);
            };

            if (_sI[0] !== -1) {
                for (var x = 0; x < _sI.length; x++) {

                    var _eIMG = [];
                    var _eIMG = pHistory.attributes.sections[_sI[x]].attributes.elements;
                    if (_eIMG.length > 0) {
                        var ImmunizationsGroup = new Object();
                        /////////eHistory.10
                        try {
                            ImmunizationsGroup["eHistory.10"] = u.setBusinessObject(_eIMG, NemsisList, "eHistory.10");
                        }
                        catch (e) {
                            u.RaiseError("eHistory.10", 1, "eHistory34", e);
                        };

                        /////////eHistory.11
                        try {
                            ImmunizationsGroup["eHistory.11"] = u.setBusinessObject(_eIMG, NemsisList, "eHistory.11");
                        }
                        catch (e) {
                            u.RaiseError("eHistory.11", 1, "eHistory34", e);
                        };
                        if (typeof ImmunGroupArray === 'undefined') {
                            ImmunGroupArray = new Array();;
                        };
                        ImmunGroupArray.push(ImmunizationsGroup)
                        ImmunizationsGroup = undefined;
                    }
                }
            };

            CurrentMedsGroup = new Object();

            var _sectionIndex = [];
            try {
                _sectionIndex = u.getSectionIndex(pHistory, "eHistory.CurrentMedsGroup");
            }
            catch (e) {
                u.RaiseError("eHistory.CurrentMedsGroup", 1, "eHistory34", e);
            };

            if (_sectionIndex[0] !== -1) {
                var CurrentMedsGroupArray = [];
                for (var x = 0; x < _sectionIndex.length; x++) {
                    var _eCMG = [];
                    var _eCMG = pHistory.attributes.sections[_sectionIndex[x]].attributes.elements;
                    if (_eCMG.length > 0) {
                        CurrentMedsGroup = new Object();
                        ////////eHistory.12
                        try {
                            CurrentMedsGroup["eHistory.12"] = u.setBusinessObject(_eCMG, NemsisList, "eHistory.12");
                        }
                        catch (e) {
                            u.RaiseError("eHistory.12", 1, "eHistory34", e);
                        };

                        ////////eHistory.13
                        try {

                            CurrentMedsGroup["eHistory.13"] = u.setBusinessObject(_eCMG, NemsisList, "eHistory.13");
                        }
                        catch (e) {
                            u.RaiseError("eHistory.13", 1, "eHistory34", e);
                        };


                        ////////eHistory.14
                        try {

                            CurrentMedsGroup["eHistory.14"] = u.setBusinessObject(_eCMG, NemsisList, "eHistory.14");
                        }
                        catch (e) {
                            u.RaiseError("eHistory.14", 1, "eHistory34", e);
                        };

                        ////////eHistory.15
                        try {
                            CurrentMedsGroup["eHistory.15"] = u.setBusinessObject(_eCMG, NemsisList, "eHistory.15");
                        }
                        catch (e) {
                            u.RaiseError("eHistory.15", 1, "eHistory34", e);
                        };

                        CurrentMedsGroupArray.push(CurrentMedsGroup)
                        CurrentMedsGroup = undefined;
                    };
                }
            }
        }
    };
    if (typeof eHistory !== 'undefined') {

        if (typeof PractitionerGroupArray !== 'undefined') {
            if (PractitionerGroupArray.length > 0) {
                eHistory["PractitionerGroup"] = PractitionerGroupArray;
            }
        };

        if (typeof CurrentMedsGroupArray !== 'undefined') {
            if (CurrentMedsGroupArray.length > 0) {
                eHistory["CurrentMedsGroup"] = CurrentMedsGroupArray;
            }
        };

        if (typeof ImmunGroupArray !== 'undefined') {
            if (ImmunGroupArray.length > 0) {
                eHistory["ImmunizationsGroup"] = ImmunGroupArray;
            }
        };

        return eHistory;

    }
    else {
        return null
    }
};
exports.setePatient = function (pcrObj, NemsisList) {
    u.RaiseError("setePatient", 100, "Patient.js", "setePatient");
    var CustomResults = [];
    var pPatient = new Object()
    pPatient = pcrObj;

    if (pPatient.HasDataSet == false) {
        return null
    };

    var _eL = []
    _eL = pPatient.attributes.elements;
    if (_eL.length > 0) {
        var ePatient = new Object();
        //////////////////////ePatient.01
        try {
            ePatient["ePatient.01"] = u.setBusinessObject(_eL, NemsisList, "ePatient.01")
        }
        catch (e) {
            u.RaiseError("ePatient.01", 1, "ePatient34", e);
        };

        ///////////ePatient.05////////
        try {
            ePatient["ePatient.05"] = u.setBusinessObject(_eL, NemsisList, "ePatient.05")
        }
        catch (e) {
            u.RaiseError("ePatient.05", 1, "ePatient34", e);
        };

        ///////////ePatient.06////////
        try {
            ePatient["ePatient.06"] = u.setBusinessObject(_eL, NemsisList, "ePatient.06")
        }
        catch (e) {
            u.RaiseError("ePatient.06", 1, "ePatient34", e);
        };

        ///////////ePatient.08////////
        try {
            ePatient["ePatient.08"] = u.setBusinessObject(_eL, NemsisList, "ePatient.08")

        }
        catch (e) {
            u.RaiseError("ePatient.08", 1, "ePatient34", e);
        };

        
        ///////////ePatient.07////////
        try {
            ePatient["ePatient.07"] = u.setBusinessObject(_eL, NemsisList, "ePatient.07")

            if (ePatient["ePatient.08"].IsNull == false)
            {
                if ((typeof ePatient["ePatient.08"].vSet !== null) && (ePatient["ePatient.08"].vSet.length !== 0))
                {
                    ///Pad with Zeros if needed
                                        
                    if (ePatient["ePatient.07"].vSet[0].val.length == 2) {
                        ePatient["ePatient.07"].vSet[0].val = "0" + ePatient["ePatient.07"].vSet[0].val
                    }
                };
                if ((typeof ePatient["ePatient.08"].vSet !== null) && (ePatient["ePatient.08"].vSet.length > 0)) {
                    ///Pad with Zeros if needed
                    if (ePatient["ePatient.07"].vSet[0].val.length == 1) {
                        ePatient["ePatient.07"].vSet[0].val = "00" + ePatient["ePatient.07"].vSet[0].val
                    }
                }
             //   ePatient["ePatient.07"].vSet[0].val = ePatient["ePatient.08"].vSet[0].val + ePatient["ePatient.07"].vSet[0].val
            }
        }
        catch (e) {
            u.RaiseError("ePatient.07", 1, "ePatient34", e);
        };
        ///////////ePatient.09////////
        try {
            ePatient["ePatient.09"] = u.setBusinessObject(_eL, NemsisList, "ePatient.09")
        }
        catch (e) {
            u.RaiseError("ePatient.09", 1, "ePatient34", e);
        };

        ///////////ePatient.10////////
        try {
            ePatient["ePatient.10"] = u.setBusinessObject(_eL, NemsisList, "ePatient.10")
        }
        catch (e) {
            u.RaiseError("ePatient.10", 1, "ePatient34", e);
        };

        ///////////ePatient.11////////
        try {
            ePatient["ePatient.11"] = u.setBusinessObject(_eL, NemsisList, "ePatient.11")
        }
        catch (e) {
            u.RaiseError("ePatient.11", 1, "ePatient34", e);
        };

        ///////////ePatient.12////////
        try {
            ePatient["ePatient.12"] = u.setBusinessObject(_eL, NemsisList, "ePatient.12")
        }
        catch (e) {
            u.RaiseError("ePatient.12", 1, "ePatient34", e);
        };

        ///////////ePatient.13////////
        try {

            ePatient["ePatient.13"] = u.setBusinessObject(_eL, NemsisList, "ePatient.13")
        }
        catch (e) {
            u.RaiseError("ePatient.13", 1, "ePatient34", e);
        };

        ///////////ePatient.14////////
        try {
            ePatient["ePatient.14"] = u.setBusinessObject(_eL, NemsisList, "ePatient.14")
        }
        catch (e) {
            u.RaiseError("ePatient.14", 1, "ePatient34", e);
        };

        ///////////ePatient.17//////// 
        try {
            BODOB = u.setBusinessObject(_eL, NemsisList, "ePatient.17")
            if (BODOB.IsNull == false) {
                var pattern = /(\d{2})(\d{2})(\d{4})/;
                BODOB.vSet[0].val = BODOB.vSet[0].val.replace(pattern, '$3-$2-$1');
            };
            ePatient["ePatient.17"] = BODOB;
        }
        catch (e) {
            u.RaiseError("ePatient.17", 1, "ePatient34", e);
        };


        //ePatient.18////////////
        try {
            ePatient["ePatient.18"] = u.setBusinessObject(_eL, NemsisList, "ePatient.18")
        }
        catch (e) {
            u.RaiseError("ePatient.18", 1, "ePatient34", e);
        };

        //ePatient.19////////////
        try {
            ePatient["ePatient.19"] = u.setBusinessObject(_eL, NemsisList, "ePatient.19")
        }
        catch (e) {
            u.RaiseError("ePatient.19", 1, "ePatient34", e);
        };


        //ePatient.20////////////
        try {
            ePatient["ePatient.20"] = u.setBusinessObject(_eL, NemsisList, "ePatient.20")
        }
        catch (e) {
            u.RaiseError("ePatient.20", 1, "ePatient34", e);
        };


        //ePatient.21////////////
        try {
            ePatient["ePatient.21"] = u.setBusinessObject(_eL, NemsisList, "ePatient.21")
        }
        catch (e) {
            u.RaiseError("ePatient.21", 1, "ePatient34", e);
        };


        ////////////////////////////////////NAME GROUP////////////////////////////

        if (typeof pPatient.attributes.sections !== 'undefined') {

            var _nI = [];
            try {
                _nI = u.getSectionIndex(pPatient, "ePatient.PatientNameGroup");
            }
            catch (e) {
                u.RaiseError("ePatient.PatientNameGroup", 1, "ePatient34", e);
            };

            if (_nI[0] !== -1) {
                var _PNG = []
                _PNG = pPatient.attributes.sections[_nI].attributes.elements;
                if (_PNG.length !== 0) {
                    var PatientName = new Object();
                    //////////////////////ePatient.02
                    try {
                        PatientName["ePatient.02"] = u.setBusinessObject(_PNG, NemsisList, "ePatient.02")
                    }
                    catch (e) {
                        u.RaiseError("ePatient.02", 1, "ePatient34", e);
                    };

                    //////////////////////ePatient.03
                    try {
                        PatientName["ePatient.03"] = u.setBusinessObject(_PNG, NemsisList, "ePatient.03")
                    }
                    catch (e) {
                        u.RaiseError("ePatient.03", 1, "ePatient34", e);
                    };

                    ///////////ePatient.04////////
                    try {
                        PatientName["ePatient.04"] = u.setBusinessObject(_PNG, NemsisList, "ePatient.04")
                    }
                    catch (e) {
                        u.RaiseError("ePatient.04", 1, "ePatient34", e);
                    };

                    PatientNameGroup = PatientName;
                }
            }
        };

        //////////////////////AGE GROUP
        var _sI = [];
        try {
            _sI = u.getSectionIndex(pPatient, "ePatient.AgeGroup");
        }
        catch (e) {
            u.RaiseError("ePatient.AgeGroup", 1, "ePatient34", e);
        };

        if (_sI[0] !== -1) {
            _PAG = []
            var _PAG = pPatient.attributes.sections[_sI].attributes.elements;
            if (_PAG.length !== 0) {
                var AgeGroup = new Object();
                ///////////ePatient.15////////
                try {
                    AgeGroup["ePatient.15"] = u.setBusinessObject(_PAG, NemsisList, "ePatient.15")
                }
                catch (e) {
                    u.RaiseError("ePatient.15", 1, "ePatient34", e);
                };

                ///////////ePatient.16////////
                try {
                    AgeGroup["ePatient.16"] = u.setBusinessObject(_PAG, NemsisList, "ePatient.16")
                }
                catch (e) {
                    u.RaiseError("ePatient.16", 1, "ePatient34", e);
                }
            }
        }
    };
    if (typeof ePatient !== 'undefined') {
        if (typeof AgeGroup !== 'undefined') {
            ePatient.AgeGroup = AgeGroup
        };
        if (typeof PatientNameGroup !== 'undefined') {
            ePatient.PatientNameGroup = PatientNameGroup
        }
        return ePatient;
    }
    else {
        return null;
    };
};
exports.setePayment = function (pcrObj, NemsisList) {
    u.RaiseError("setePayment", 100, "Patient.js", "setePayment");
    var pPayment = pcrObj;

    if (pPayment.HasDataSet == false) {
        return null
    };
    if (typeof pPayment.attributes.elements !== 'undefined') {
        var _eP = [];
        _eP = pPayment.attributes.elements;
        if (_eP.length > 0) {

            var ePayment = new Object();
            //////////////////ePayment.01   
            try {
                ePayment["ePayment.01"] = u.setBusinessObject(_eP, NemsisList, "ePayment.01");
            }
            catch (e) {
                u.RaiseError("ePayment.01", 1, "ePayment34")
            };

            //////////////////ePayment.08
            try {
                ePayment["ePayment.08"] = u.setBusinessObject(_eP, NemsisList, "ePayment.08");
            }
            catch (e) {
                u.RaiseError("ePayment.08", 1, "ePayment34")
            };

            //////////////////ePayment.40
            try {
                ePayment["ePayment.40"] = u.setBusinessObject(_eP, NemsisList, "ePayment.40");
            }
            catch (e) {
                u.RaiseError("ePayment.40", 1, "ePayment34")
            };


            //////////////////ePayment.41
            try {
                ePayment["ePayment.41"] = u.setBusinessObject(_eP, NemsisList, "ePayment.41");
            }
            catch (e) {
                u.RaiseError("ePayment.41", 1, "ePayment34")
            };

            //////////////////ePayment.42
            try {
                ePayment["ePayment.42"] = u.setBusinessObject(_eP, NemsisList, "ePayment.42");
            }
            catch (e) {
                u.RaiseError("ePayment.42", 1, "ePayment34")
            };

            //////////////////ePayment.43
            try {
                ePayment["ePayment.43"] = u.setBusinessObject(_eP, NemsisList, "ePayment.43");
            }
            catch (e) {
                u.RaiseError("ePayment.43", 1, "ePayment34")
            };

            //////////////////ePayment.44
            try {

                ePayment["ePayment.44"] = u.setBusinessObject(_eP, NemsisList, "ePayment.44");
            }
            catch (e) {
                u.RaiseError("ePayment.44", 1, "ePayment34")
            };

            //////////////////ePayment.45
            try {
                ePayment["ePayment.45"] = u.setBusinessObject(_eP, NemsisList, "ePayment.45");
            }
            catch (e) {
                u.RaiseError("ePayment.45", 1, "ePayment34")
            };

            //////////////////ePayment.46
            try {
                ePayment["ePayment.46"] = u.setBusinessObject(_eP, NemsisList, "ePayment.46");
            }
            catch (e) {
                u.RaiseError("ePayment.46", 1, "ePayment34")
            };

            //////////////////ePayment.47
            try {
                ePayment["ePayment.47"] = u.setBusinessObject(_eP, NemsisList, "ePayment.47");
                if (ePayment["ePayment.47"].IsNull == false) {
                    for (var d = 0; d < ePayment["ePayment.47"].vSet.length; d++) {
                        if (ePayment["ePayment.47"].vSet[d].val.length == 1) {
                            ePayment["ePayment.47"].vSet[d].val = "0" + ePayment["ePayment.47"].vSet[d].val
                        }
                    }
                };
            }
            catch (e) {
                u.RaiseError("ePayment.47", 1, "ePayment34")
            };

            //////////////////ePayment.48
            try {
                ePayment["ePayment.48"] = u.setBusinessObject(_eP, NemsisList, "ePayment.48");
            }
            catch (e) {
                u.RaiseError("ePayment.48", 1, "ePayment34")
            };
            //////////////////ePayment.49
            try {
                ePayment["ePayment.49"] = u.setBusinessObject(_eP, NemsisList, "ePayment.49");
            }
            catch (e) {
                u.RaiseError("ePayment.49", 1, "ePayment34")
            };

            //////////////////ePayment.50
            try {
                ePayment["ePayment.50"] = u.setBusinessObject(_eP, NemsisList, "ePayment.50");
            }
            catch (e) {
                u.RaiseError("ePayment.50", 1, "ePayment34")
            };

            //////////////////ePayment.51
            try {
                ePayment["ePayment.51"] = u.setBusinessObject(_eP, NemsisList, "ePayment.51");
            }
            catch (e) {
                u.RaiseError("ePayment.51", 1, "ePayment34")
            };

            //////////////////ePayment.52
            try {
                ePayment["ePayment.52"] = u.setBusinessObject(_eP, NemsisList, "ePayment.52");
            }
            catch (e) {
                u.RaiseError("ePayment.52", 1, "ePayment34")
            };


            //////////////////ePayment.53
            try {
                ePayment["ePayment.53"] = u.setBusinessObject(_eP, NemsisList, "ePayment.53");
            }
            catch (e) {
                u.RaiseError("ePayment.53", 1, "ePayment34")
            };

            //////////////////ePayment.54
            try {
                ePayment["ePayment.54"] = u.setBusinessObject(_eP, NemsisList, "ePayment.54");
            }
            catch (e) {
                u.RaiseError("ePayment.54", 1, "ePayment34")
            };

            //////////////////ePayment.57
            try {
                ePayment["ePayment.57"] = u.setBusinessObject(_eP, NemsisList, "ePayment.57");
            }
            catch (e) {
                u.RaiseError("ePayment.57", 1, "ePayment34")
            }
        }
    };

    ////////////////////////////////

    if (typeof pPayment.attributes.sections !== 'undefined') {
        var _sI = [];
        try {
            _sI = u.getSectionIndex(pPayment, "ePayment.CertificateGroup");
        }
        catch (e) {
            u.RaiseError("ePayment.CertificateGroup", 1, "ePayment34")
        };
        if (_sI[0] !== -1) {
            var _cel = [];
            _cel = pPayment.attributes.sections[_sI[0]].attributes.elements;
            if (_cel.length > 0) {
                var CGr = new Object();

                //////////////////ePayment.02
                try {
                    CGr["ePayment.02"] = u.setBusinessObject(_cel, NemsisList, "ePayment.02");
                }
                catch (e) {
                    u.RaiseError("ePayment.02", 1, "ePayment34")
                };


                //////////////////ePayment.03
                try {
                    CGr["ePayment.03"] = u.setBusinessObject(_cel, NemsisList, "ePayment.03");
                }
                catch (e) {
                    u.RaiseError("ePayment.03", 1, "ePayment34")
                };

                //ePayment.04////////////
                try {
                    CGr["ePayment.04"] = u.setBusinessObject(_cel, NemsisList, "ePayment.04");
                }
                catch (e) {
                    u.RaiseError("ePayment.04", 1, "ePayment34")
                };


                //////////////////ePayment.05
                try {
                    CGr["ePayment.05"] = u.setBusinessObject(_cel, NemsisList, "ePayment.05");
                }

                catch (e) {
                    u.RaiseError("ePayment.05", 1, "ePayment34")
                };


                //////////////////ePayment.06
                try {
                    CGr["ePayment.06"] = u.setBusinessObject(_cel, NemsisList, "ePayment.06");
                }
                catch (e) {
                    u.RaiseError("ePayment.06", 1, "ePayment34")
                };

                //////////////////ePayment.07
                try {
                    CGr["ePayment.07"] = u.setBusinessObject(_cel, NemsisList, "ePayment.07");
                }
                catch (e) {
                    u.RaiseError("ePayment.07", 1, "ePayment34")
                }
            }
        };


        var _sING = [];
        try {
            _sING = u.getSectionIndex(pPayment, "ePayment.InsuranceGroup");
        }
        catch (e) {
            u.RaiseError("ePayment.InsuranceGroup", 1, "ePayment34")
        };
        if (_sING[0] !== -1) {
            if (_sING.length > 0) {
                for (var i = 0; i < _sING.length; i++) {
                    var listOfElements = pPayment.attributes.sections[_sING[i]].attributes.elements;
                    if (listOfElements.length > 0) {

                        var InsuranceGroup = new Object();
                        //////////////////ePayment.09
                        try {
                            InsuranceGroup["ePayment.09"] = u.setBusinessObject(listOfElements, NemsisList, "ePayment.09");
                        }
                        catch (e) {
                            u.RaiseError("ePayment.09", 1, "ePayment34")
                        };

                        //////////////////ePayment.10
                        try {
                            InsuranceGroup["ePayment.10"] = u.setBusinessObject(listOfElements, NemsisList, "ePayment.10");
                        }
                        catch (e) {
                            u.RaiseError("ePayment.10", 1, "ePayment34")
                        };

                        //////////////////ePayment.11
                        try {
                            InsuranceGroup["ePayment.11"] = u.setBusinessObject(listOfElements, NemsisList, "ePayment.11");
                        }
                        catch (e) {
                            u.RaiseError("ePayment.11", 1, "ePayment34")
                        };


                        //////////////////ePayment.12
                        try {
                            InsuranceGroup["ePayment.12"] = u.setBusinessObject(listOfElements, NemsisList, "ePayment.12");
                        }
                        catch (e) {
                            u.RaiseError("ePayment.12", 1, "ePayment34")
                        };


                        //////////////////ePayment.13
                        try {
                            InsuranceGroup["ePayment.13"] = u.setBusinessObject(listOfElements, NemsisList, "ePayment.13");
                        }
                        catch (e) {
                            u.RaiseError("ePayment.13", 1, "ePayment34")
                        };


                        //////////////////ePayment.14
                        try {
                            InsuranceGroup["ePayment.14"] = u.setBusinessObject(listOfElements, NemsisList, "ePayment.14");
                        }
                        catch (e) {
                            u.RaiseError("ePayment.14", 1, "ePayment34")
                        };

                        //////////////////ePayment.15
                        try {
                            InsuranceGroup["ePayment.15"] = u.setBusinessObject(listOfElements, NemsisList, "ePayment.15");
                        }
                        catch (e) {
                            u.RaiseError("ePayment.15", 1, "ePayment34")
                        };


                        //////////////////ePayment.16
                        try {
                            InsuranceGroup["ePayment.16"] = u.setBusinessObject(listOfElements, NemsisList, "ePayment.16");
                        }
                        catch (e) {
                            u.RaiseError("ePayment.16", 1, "ePayment34")
                        };

                        //////////////////ePayment.17        
                        try {
                            InsuranceGroup["ePayment.17"] = u.setBusinessObject(listOfElements, NemsisList, "ePayment.17");
                        }
                        catch (e) {
                            u.RaiseError("ePayment.17", 1, "ePayment34")
                        };


                        //////////////////ePayment.18   
                        try {
                            InsuranceGroup["ePayment.18"] = u.setBusinessObject(listOfElements, NemsisList, "ePayment.18");
                        }
                        catch (e) {
                            u.RaiseError("ePayment.18", 1, "ePayment34")
                        };

                        //////////////////ePayment.19.
                        try {
                            InsuranceGroup["ePayment.19"] = u.setBusinessObject(listOfElements, NemsisList, "ePayment.19");
                        }
                        catch (e) {
                            u.RaiseError("ePayment.19", 1, "ePayment34")
                        };


                        //////////////////ePayment.20
                        try {
                            InsuranceGroup["ePayment.20"] = u.setBusinessObject(listOfElements, NemsisList, "ePayment.20");
                        }
                        catch (e) {
                            u.RaiseError("ePayment.20", 1, "ePayment34")
                        };


                        //////////////////ePayment.21
                        try {
                            InsuranceGroup["ePayment.21"] = u.setBusinessObject(listOfElements, NemsisList, "ePayment.21");
                        }
                        catch (e) {
                            u.RaiseError("ePayment.21", 1, "ePayment34")
                        };

                        //////////////////ePayment.22
                        try {
                            InsuranceGroup["ePayment.22"] = u.setBusinessObject(listOfElements, NemsisList, "ePayment.22");
                        }
                        catch (e) {
                            u.RaiseError("ePayment.22", 1, "ePayment34")
                        };

                        //////////////////ePayment.58
                        try {
                            InsuranceGroup["ePayment.58"] = u.setBusinessObject(listOfElements, NemsisList, "ePayment.58");
                        }
                        catch (e) {
                            u.RaiseError("ePayment.58", 1, "ePayment34")
                        };

                        if (typeof InsGrpArray === 'undefined') {
                            var InsGrpArray = new Array();
                        };
                        InsGrpArray.push(InsuranceGroup)
                        InsuranceGroup = undefined;
                    }
                }
            }
        };

        ///////////////////////////////////////////////ePayment.ClosestRelativeGroup

        var _cRG = [];
        try {
            _cRG = u.getSectionIndex(pPayment, "ePayment.ClosestRelativeGroup");
        }
        catch (e) {
            u.RaiseError("ePayment.ClosestRelativeGroup", 1, "ePayment34")
        };

        if (_cRG[0] !== -1) {
            var _clrg = [];
            var _CLR = new Object();
            _clrg = pPayment.attributes.sections[_cRG].attributes.elements;
            if (_clrg.length > 0) {
                var _CLR = new Object();
                //////////////////ePayment.23
                try {
                    _CLR["ePayment.23"] = u.setBusinessObject(_clrg, NemsisList, "ePayment.23");
                }
                catch (e) {
                    u.RaiseError("ePayment.23", 1, "ePayment34")
                };

                //////////////////ePayment.24
                try {
                    _CLR["ePayment.24"] = u.setBusinessObject(_clrg, NemsisList, "ePayment.24");
                }
                catch (e) {
                    u.RaiseError("ePayment.24", 1, "ePayment34")
                };


                //////////////////ePayment.25
                try {
                    _CLR["ePayment.25"] = u.setBusinessObject(_clrg, NemsisList, "ePayment.25");
                }
                catch (e) {
                    u.RaiseError("ePayment.25", 1, "ePayment34")
                };

                //////////////////ePayment.26
                try {
                    _CLR["ePayment.26"] = u.setBusinessObject(_clrg, NemsisList, "ePayment.26");
                }
                catch (e) {
                    u.RaiseError("ePayment.26", 1, "ePayment34")
                };


                //////////////////ePayment.27
                try {
                    _CLR["ePayment.27"] = u.setBusinessObject(_clrg, NemsisList, "ePayment.27");
                }
                catch (e) {
                    u.RaiseError("ePayment.27", 1, "ePayment34")
                };

                //////////////////ePayment.28
                try {

                    _CLR["ePayment.28"] = u.setBusinessObject(_clrg, NemsisList, "ePayment.28");
                }
                catch (e) {
                    u.RaiseError("ePayment.28", 1, "ePayment34")
                };

                //////////////////ePayment.29
                try {
                    _CLR["ePayment.29"] = u.setBusinessObject(_clrg, NemsisList, "ePayment.29");
                }
                catch (e) {
                    u.RaiseError("ePayment.29", 1, "ePayment34")
                };

                //////////////////ePayment.30
                try {
                    _CLR["ePayment.30"] = u.setBusinessObject(_clrg, NemsisList, "ePayment.30");
                }
                catch (e) {
                    u.RaiseError("ePayment.30", 1, "ePayment34")
                };

                //////////////////ePayment.31
                try {
                    _CLR["ePayment.31"] = u.setBusinessObject(_clrg, NemsisList, "ePayment.31");
                }
                catch (e) {
                    u.RaiseError("ePayment.31", 1, "ePayment34")
                };

                //////////////////ePayment.32
                try {
                    _CLR["ePayment.32"] = u.setBusinessObject(_clrg, NemsisList, "ePayment.32");
                }
                catch (e) {
                    u.RaiseError("ePayment.32", 1, "ePayment34")
                }
            }
        };

        /////////////////////////////ePayment.EmployerGroup
        try {
            _sectionIndex = u.getSectionIndex(pPayment, "ePayment.EmployerGroup");
        }
        catch (e) {
            u.RaiseError("ePayment.EmployerGroup", 1, "ePayment34")
        };
        if (_sectionIndex[0] !== -1) {
            var _eg = [];
            _eg = pPayment.attributes.sections[_sectionIndex].attributes.elements
            if (_eg.length > 0) {
                var _EMP = new Object();
                //////////////////ePayment.33
                try {
                    _EMP["ePayment.33"] = u.setBusinessObject(_eg, NemsisList, "ePayment.33");
                }
                catch (e) {
                    u.RaiseError("ePayment.33", 1, "ePayment34")
                };

                //////////////////ePayment.34
                try {
                    _EMP["ePayment.34"] = u.setBusinessObject(_eg, NemsisList, "ePayment.34");
                }
                catch (e) {
                    u.RaiseError("ePayment.34", 1, "ePayment34")
                };

                //////////////////ePayment.35
                try {
                    _EMP["ePayment.35"] = u.setBusinessObject(_eg, NemsisList, "ePayment.35");
                }
                catch (e) {
                    u.RaiseError("ePayment.35", 1, "ePayment34")
                };

                //////////////////ePayment.36
                try {
                    _EMP["ePayment.36"] = u.setBusinessObject(_eg, NemsisList, "ePayment.36");
                }
                catch (e) {
                    u.RaiseError("ePayment.36", 1, "ePayment34")
                };
                //////////////////ePayment.37
                try {
                    _EMP["ePayment.37"] = u.setBusinessObject(_eg, NemsisList, "ePayment.37");
                }
                catch (e) {
                    u.RaiseError("ePayment.37", 1, "ePayment34")
                };

                //////////////////ePayment.38
                try {
                    _EMP["ePayment.38"] = u.setBusinessObject(_eg, NemsisList, "ePayment.38");
                }
                catch (e) {
                    u.RaiseError("ePayment.38", 1, "ePayment34")
                };


                //////////////////ePayment.39
                try {
                    _EMP["ePayment.39"] = u.setBusinessObject(_eg, NemsisList, "ePayment.39");
                }
                catch (e) {
                    u.RaiseError("ePayment.39", 1, "ePayment34")
                };
            }
        };

        ///////////////////////////////////////////////ePayment.SupplyItemGroup

        var _sIG = [];
        try {
            _sIG = u.getSectionIndex(pPayment, "ePayment.SupplyItemGroup");
        }
        catch (e) {
            u.RaiseError("ePayment.SupplyItemGroup", 1, "ePayment34")
        };
        if (_sIG[0] !== -1) {
            SupplyGrpArray = [];
            for (var i = 0; i < _sIG.length; i++) {
                var _lsp = pPayment.attributes.sections[_sIG[i]].attributes.elements;
                if (_lsp.length > 0) {
                    var SupplyGroup = new Object();
                    //////////////////ePayment.55
                    try {
                        SupplyGroup["ePayment.55"] = u.setBusinessObject(_lsp, NemsisList, "ePayment.55");
                    }
                    catch (e) {
                        u.RaiseError("ePayment.55", 1, "ePayment34")
                    };

                    //////////////////ePayment.56
                    try {
                        SupplyGroup["ePayment.56"] = u.setBusinessObject(_lsp, NemsisList, "ePayment.56");
                    }
                    catch (e) {
                        u.RaiseError("ePayment.55", 1, "ePayment34")
                    };
                    SupplyGrpArray.push(SupplyGroup);
                    SupplyGroup = undefined
                }
            }
        }
    };

    if (typeof ePayment !== 'undefined') {
        if (typeof CGr !== 'undefined') {
            ePayment.CertificateGroup = CGr;
        };

        if (typeof InsGrpArray !== 'undefined') {
            if (InsGrpArray.length > 0) {
                ePayment.InsuranceGroup = InsGrpArray.slice(0);
            }
        };

        if (typeof _CLR !== 'undefined') {
            ePayment.ClosestRelativeGroup = _CLR
        };
        if (typeof _EMP !== 'undefined') {
            ePayment["EmployerGroup"] = _EMP;
        };

        if (typeof SupplyGrpArray !== 'undefined') {
            if (SupplyGrpArray.length !== 0) {
                ePayment.SupplyItemGroup = SupplyGrpArray;
            }
        };
        return ePayment;
    }
    else {
        return null
    }
};
