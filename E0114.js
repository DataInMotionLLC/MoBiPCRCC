var cv = require('cloud/ConversionUtils.js');
exports.setE01 = function (TheCall) {
    var TC = TheCall.V3;
    if (typeof TC.eRecord === 'undefined') {
        var E01 = {};
        E01 = null;
    }
    else
    {
        var E01 = {};
        if (typeof TC.eRecord["eRecord.01"] != 'undefined')
        {
            //if (typeof TC.eRecord["eRecord.01"].vSet != 'undefined') {
                E01.E01_01 = TC.eRecord["eRecord.01"];
            //}
            //else {
            //    E01.E01_01 = "MAN";
            //}
        };
        if (typeof TC.eRecord["eRecord.02"] != 'undefined') {
            //if (typeof TC.eRecord["eRecord.02"].vSet != 'undefined') {
                E01.E01_02 = TC.eRecord["eRecord.02"];
            //}
            //else {
            //    E01.E01_01 = "MAN";
            //}
        };
        if (typeof TC.eRecord["eRecord.03"] != 'undefined') {
            //if (typeof TC.eRecord["eRecord.03"].vSet != 'undefined') {
                E01.E01_03 = TC.eRecord["eRecord.03"].vSet[0].val;
            //}
            //else {
            //    E01.E01_03 = "MAN";
            //}            
        };
        if (typeof TC.eRecord["eRecord.04"] != 'undefined') {
            //if (typeof TC.eRecord["eRecord.04"].vSet != 'undefined') {
                E01.E01_04 = TC.eRecord["eRecord.04"].vSet[0].val;
            //}
            //else {
            //    E01.E01_04 = "MAN";
            //}            
        };
    }    

    return E01
};
exports.setE02 = function (TheCall) {
    if (typeof E02 === 'undefined') {
        var E02 = new Object();
    };
    if (typeof TheCall.V3.eResponse === 'undefined') {
        var E02 = {};
        E02 = null
    }
    else {

        var eR = {};
        eR = TheCall.V3.eResponse;
        if (typeof eR.AgencyGroup !== 'undefined') {
            if (typeof eR.AgencyGroup["eResponse.01"] !== 'undefined') {
                E02.E02_01 = eR.AgencyGroup["eResponse.01"].vSet[0].val;
            }
        };

        if (typeof eR["eResponse.03"] !== 'undefined') {
            if (eR["eResponse.03"].IsNull == false) {
                E02.E02_02 = eR["eResponse.03"].vSet[0].val;
            }
        };
        if (typeof eR["eResponse.04"] !== 'undefined') {
            if (eR["eResponse.04"].IsNull == false) {
                E02.E02_03 = eR["eResponse.04"].vSet[0].val;
            }
        };

        if (typeof eR.ServiceGroup !== 'undefined') {
            if (typeof eR.ServiceGroup["eResponse.05"] !== 'undefined') {
                if (eR.ServiceGroup["eResponse.05"].IsNull == false) {
                    E02.E02_04 = cv.setV2("eResponse.05", eR.ServiceGroup["eResponse.05"].vSet[0].val);
                }
            }
        };

        if (typeof eR["eResponse.07"] !== 'undefined') {
            if (eR["eResponse.07"].IsNull == false) {
                E02.E02_05 = cv.setV2("eResponse.07", eR["eResponse.07"].vSet[0].val);
            }
        };        

        if (typeof eR["eResponse.08"] !== 'undefined') {
            if (eR["eResponse.08"].IsNull == false) {
                var E02_06 = []
                for (var i = 0; i < eR["eResponse.08"].vSet.length; i++) {
                    E02_06.push(cv.setV2("eResponse.08", eR["eResponse.08"].vSet[i].val));
                }
            }

            E02.E02_06 = E02_06;
        };

        if (typeof eR["eResponse.09"] !== 'undefined') {
            if (eR["eResponse.09"].IsNull == false) {
                var E02_07 = [];
                for (var i = 0; i < eR["eResponse.09"].vSet.length; i++) {
                    E02_07.push(cv.setV2("eResponse.09", eR["eResponse.09"].vSet[i].val));
                }
            };
            E02.E02_07 = E02_07;
        };
        if (typeof eR["eResponse.10"] !== 'undefined') {
            if (eR["eResponse.10"].IsNull == false) {
                var E02_08 = [];
                for (var i = 0; i < eR["eResponse.10"].vSet.length; i++) {
                    E02_08.push(cv.setV2("eResponse.10", eR["eResponse.10"].vSet[i].val));
                };
                E02.E02_08 = E02_08;
            }
        };

        if (typeof eR["eResponse.11"] !== 'undefined') {
            if (eR["eResponse.11"].IsNull == false) {
                var E02_09 = [];
                for (var i = 0; i < eR["eResponse.11"].vSet.length; i++) {
                    E02_09.push(cv.setV2("eResponse.11", eR["eResponse.11"].vSet[i].val));
                };
                E02.E02_09 = E02_09;
            }
        };

        if (typeof eR["eResponse.12"] !== 'undefined') {
            if (eR["eResponse.12"].IsNull == false) {
                var E02_10 = [];
                for (var i = 0; i < eR["eResponse.12"].vSet.length; i++) {
                    E02_10.push(cv.setV2("eResponse.12", eR["eResponse.12"].vSet[i].val));
                }
                E02.E02_10 = E02_10;
            };
        };

        if (typeof eR["eResponse.13"] !== 'undefined') {
            if (eR["eResponse.13"].IsNull == false) {
                E02.E02_11 = eR["eResponse.13"].vSet[0].val;
            }
        };

        if (typeof eR["eResponse.14"] !== 'undefined') {
            if (eR["eResponse.14"].IsNull == false) {
                E02.E02_12 = eR["eResponse.14"].vSet[0].val;
            }
        };


        if (typeof eR["eResponse.16"] !== 'undefined') {
            if (eR["eResponse.16"].IsNull == false) {
                E02.E02_13 = eR["eResponse.16"].vSet[0].val;
            }
        };

        if (typeof eR["eResponse.17"] !== 'undefined') {
            if (eR["eResponse.17"].IsNull == false) {
                E02.E02_15 = eR["eResponse.17"].vSet[0].val;
            }
        };

        {
            if (eR["eResponse.19"].IsNull == false) {
                E02.E02_16 = eR["eResponse.19"].vSet[0].val;
            }
        };

        if (typeof eR["eResponse.20"] !== 'undefined') {
            if (eR["eResponse.20"].IsNull == false) {
                E02.E02_17 = eR["eResponse.20"].vSet[0].val;
            }
        };

        if (typeof eR["eResponse.21"] !== 'undefined') {
            if (eR["eResponse.21"].IsNull == false) {
                E02.E02_18 = eR["eResponse.21"].vSet[0].val;
            }
        };

        if (typeof eR["eResponse.22"] !== 'undefined') {
            if (eR["eResponse.22"].IsNull == false) {
                E02.E02_19 = eR["eResponse.22"].vSet[0].val;
            }
        };

        if (typeof eR["eResponse.23"] !== 'undefined') {
            if (eR["eResponse.23"].IsNull == false) {
                E02.E02_20 = cv.setV2("eResponse.23", eR["eResponse.23"].vSet[0].val);
            }
        };
    };
    return E02
};
exports.setE03 = function (TheCall) {
    var TC = TheCall;
    if (typeof TC.V3.eDispatch === 'undefined') {
        var E03 = {};
        E03 = null;
        return E03;
    }
    else {
        var v2 = TC.V3.eDispatch;
        if (typeof v2["eDispatch.01"] !== 'undefined') {
            if (typeof E03 === 'undefined')
            { var E03 = new Object(); }
            if (v2["eDispatch.01"].IsNull == false) {
                E03.E03_01 = cv.setV2("eDispatch.01", v2["eDispatch.01"].vSet[0].val);
            }
        };

        if (typeof v2["eDispatch.02"] !== 'undefined') {
            if (typeof E03 === 'undefined')
            { var E03 = new Object(); }
            if (v2["eDispatch.02"].IsNull == false) {
                E03.E03_02 = cv.setV2("eDispatch.02", v2["eDispatch.02"].vSet[0].val);
            }
        };

        if (typeof v2["eDispatch.03"] !== 'undefined') {
            if (typeof E03 === 'undefined')
            { var E03 = new Object(); }
            if (v2["eDispatch.03"].IsNull == false) {
                E03.E03_03 = v2["eDispatch.03"].vSet[0].val;
            }
        }
    };
    if (typeof E03 === 'undefined') {
        var E03 = new Object();
        E03 = null;
    };
    return E03;
};
exports.setE04 = function (TheCall) {

    if (typeof TheCall.V3.eCrew === 'undefined') {
        var E04 = new Object();
        E04 = null;
        return E04;
    }
    else {
        if (typeof TheCall.V3.eCrew !== 'undefined') {
            var E4Array = [];
            for (var i = 0; i < TheCall.V3.eCrew.CrewGroup.length; i++) {
                var eCG = {};
                eCG = TheCall.V3.eCrew.CrewGroup[i];
                if (typeof eCG["eCrew.01"] !== 'undefined') {
                    if (typeof E4 === 'undefined') {
                        var E4 = new Object();
                    };
                    var E4 = new Object();
                    if (eCG["eCrew.01"].IsNull !== true) {
                        E4.E04_01 = cv.setV2("eCrew.01", eCG["eCrew.01"].vSet[0].val);
                    }
                };

                if (typeof eCG["eCrew.02"] !== 'undefined') {
                    if (typeof E4 === 'undefined') {
                        var E4 = new Object();
                    };
                    if (eCG["eCrew.02"].IsNull == false) {
                        E4.E04_03 = cv.setV2("eCrew.02", eCG["eCrew.02"].vSet[0].val);
                    }
                };

                if (typeof eCG["eCrew.03"] !== 'undefined') {
                    if (eCG["eCrew.03"].IsNull == false) {
                        var E04_02 = [];
                        for (var x = 0; x < eCG["eCrew.03"].vSet.length; x++) {
                            E04_02.push(cv.setV2("eCrew.03", eCG["eCrew.03"].vSet[x].val));
                        };

                        if (E04_02.length > 0) {
                            if (typeof E4 === 'undefined') {
                                var E4 = new Object();
                            };
                            E4.E04_02 = E04_02[0];
                        }
                    };
                    if (typeof E4 !== 'undefined') {
                        if (typeof E4Array === 'undefined') {
                            E4Array = new Array();
                        }
                        E4Array.push(E4);
                    }
                }
            }
        }
    };

    if (typeof E04 === 'undefined') {
        var E04 = new Object();
        E04 = null;
    };
    if (typeof E4Array !== 'undefined') {
        if (E4Array.length > 0) {
            var E04 = new Array();
            E04 = E4Array;
        }
        else {
            var E04 = new Object();
            E04 = null;
        }
    };
    return E04;
};
exports.setE05 = function (TheCall) {
    if (typeof TheCall.V3.eTimes === 'undefined') {
        var E05 = new Object();
        E05 = null;
        return E05;
    }
    else {

        if (typeof TheCall.V3.eSituation !== 'undefined') {
            if (typeof TheCall.V3.eSituation["eSituation.01"] !== 'undefined') {
                if (TheCall.V3.eSituation["eSituation.01"].IsNull == false) {
                    if (typeof E05 === 'undefined')
                    { var E05 = new Object(); }

                    E05.E05_01 = new Date(TheCall.V3.eSituation["eSituation.01"].vSet[0].val).toISOString()
                }
            }
        };
        if (typeof TheCall.V3.eTimes !== 'undefined') {
            var TC = TheCall.V3;
        };
        if (typeof TC.eTimes["eTimes.01"] !== 'undefined') {
            if (TC.eTimes["eTimes.01"].IsNull == false) {
                if (typeof E05 === 'undefined')
                { var E05 = new Object(); }

                E05.E05_02 = new Date(TC.eTimes["eTimes.01"].vSet[0].val).toISOString()
            }
        };

        if (typeof TC.eTimes["eTimes.02"] !== 'undefined') {
            if (TC.eTimes["eTimes.02"].IsNull !== true) {
                if (typeof E05 === 'undefined')
                { var E05 = new Object(); }
                E05.E05_03 = new Date(TC.eTimes["eTimes.02"].vSet[0].val).toISOString();

            }
        };


        if (typeof TC.eTimes["eTimes.03"] !== 'undefined') {
            if (TC.eTimes["eTimes.03"].IsNull !== true) {
                if (typeof E05 === 'undefined')
                { var E05 = new Object(); }
                E05.E05_04 = new Date(TC.eTimes["eTimes.03"].vSet[0].val).toISOString();

            }
        };

        if (typeof TC.eTimes["eTimes.05"] !== 'undefined') {
            if (TC.eTimes["eTimes.05"].IsNull !== true) {
                if (typeof E05 === 'undefined')
                { var E05 = new Object(); }
                E05.E05_05 = new Date(TC.eTimes["eTimes.05"].vSet[0].val).toISOString();
            }
        };

        if (typeof TC.eTimes["eTimes.06"] !== 'undefined') {
            if (TC.eTimes["eTimes.06"].IsNull !== true) {
                if (typeof E05 === 'undefined')
                { var E05 = new Object(); }
                E05.E05_06 = new Date(TC.eTimes["eTimes.06"].vSet[0].val).toISOString();

            }
        };

        if (typeof TC.eTimes["eTimes.07"] !== 'undefined') {
            if (TC.eTimes["eTimes.07"].IsNull !== true) {
                if (typeof E05 === 'undefined')
                { var E05 = new Object(); }
                E05.E05_07 = new Date(TC.eTimes["eTimes.07"].vSet[0].val).toISOString();

            }
        };

        if (typeof TC.eTimes["eTimes.08"] !== 'undefined') {
            if (TC.eTimes["eTimes.08"].IsNull !== true) {
                if (typeof E05 === 'undefined')
                { var E05 = new Object(); }
                E05.E05_08 = new Date(TC.eTimes["eTimes.08"].vSet[0].val).toISOString();

            }
        };

        if (typeof TC.eTimes["eTimes.09"] !== 'undefined') {
            if (TC.eTimes["eTimes.09"].IsNull !== true) {
                if (typeof E05 === 'undefined')
                { var E05 = new Object(); }
                E05.E05_09 = new Date(TC.eTimes["eTimes.09"].vSet[0].val).toISOString();

            }
        };


        if (typeof TC.eTimes["eTimes.11"] !== 'undefined') {
            if (TC.eTimes["eTimes.11"].IsNull !== true) {
                if (typeof E05 === 'undefined')
                { var E05 = new Object(); }
                E05.E05_10 = new Date(TC.eTimes["eTimes.11"].vSet[0].val).toISOString();

            }
        };

        if (typeof TC.eTimes["eTimes.13"] !== 'undefined') {
            if (TC.eTimes["eTimes.13"].IsNull !== true) {
                if (typeof E05 === 'undefined')
                { var E05 = new Object(); }
                E05.E05_11 = new Date(TC.eTimes["eTimes.13"].vSet[0].val).toISOString();

            }
        };

        if (typeof TC.eTimes["eTimes.14"] !== 'undefined') {
            if (TC.eTimes["eTimes.14"].IsNull !== true) {
                if (typeof E05 === 'undefined')
                { var E05 = new Object(); }
                E05.E05_12 = new Date(TC.eTimes["eTimes.14"].vSet[0].val).toISOString();

            }
        };

        if (typeof TC.eTimes["eTimes.15"] !== 'undefined') {
            if (TC.eTimes["eTimes.15"].IsNull == false) {
                if (typeof E05 === 'undefined')
                { var E05 = new Object(); }
                E05.E05_13 = new Date(TC.eTimes["eTimes.15"].vSet[0].val).toISOString();

            }
        }
    };

    if (typeof E05 === 'undefined') {
        var E05 = new Object();
        E05 = null;
    };
    return E05
};
exports.setE06 = function (TheCall) {
    if (typeof TheCall.V3 === 'undefined') {
        var E06 = new Object()
        return E06;
    };
    var TC = TheCall.V3;
    if (typeof TC.ePatient !== 'undefined') {
        if (typeof TC.ePatient.PatientNameGroup !== 'undefined') {
            if (typeof TC.ePatient.PatientNameGroup["ePatient.02"] !== 'undefined') {

                if (TC.ePatient.PatientNameGroup["ePatient.02"].IsNull == false) {
                    if (typeof E06_01_0 === 'undefined') {
                        var E06_01_0 = new Object();
                    };
                    E06_01_0.E06_01 = TC.ePatient.PatientNameGroup["ePatient.02"].vSet[0].val;
                }
            };

            if (typeof TC.ePatient.PatientNameGroup["ePatient.03"] !== 'undefined') {
                if (TC.ePatient.PatientNameGroup["ePatient.03"].IsNull == false) {
                    if (typeof E06_01_0 === 'undefined') {
                        var E06_01_0 = new Object();
                    };

                    E06_01_0.E06_02 = TC.ePatient.PatientNameGroup["ePatient.03"].vSet[0].val;
                }
            };

            if (typeof TC.ePatient.PatientNameGroup["ePatient.04"] !== 'undefined') {
                if (TC.ePatient.PatientNameGroup["ePatient.04"].IsNull == false) {
                    if (typeof E06_01_0 === 'undefined') {
                        var E06_01_0 = new Object();
                    };
                    E06_01_0.E06_03 = TC.ePatient.PatientNameGroup["ePatient.04"].vSet[0].val;
                }
            }
            if (typeof E06_01_0 !== 'undefined') {
                if (typeof E06 === 'undefined') {
                    var E06 = new Object();
                };
                E06.E06_01_0 = E06_01_0;
            }
        };

        if (typeof TC.ePatient["ePatient.05"] !== 'undefined') {

            if (TC.ePatient["ePatient.05"].IsNull == false) {
                if (typeof E06_04_0 === 'undefined') {
                    var E06_04_0 = new Object();
                };
                E06_04_0.E06_04 = TC.ePatient["ePatient.05"].vSet[0].text;
            }
        };

        if (typeof TC.ePatient["ePatient.06"] !== 'undefined') {
            if (TC.ePatient["ePatient.06"].IsNull == false) {
                if (typeof E06_04_0 === 'undefined') {
                    var E06_04_0 = new Object();
                };
                E06_04_0.E06_05 = TC.ePatient["ePatient.06"].vSet[0].val;
            }
        };

        if (typeof TC.ePatient["ePatient.08"] !== 'undefined') {
            if (TC.ePatient["ePatient.08"].IsNull == false) {
                if (typeof E06_04_0 === 'undefined') {
                    var E06_04_0 = new Object();
                };
                E06_04_0.E06_07 = TC.ePatient["ePatient.08"].vSet[0].val;
            }
        };
        if (typeof TC.ePatient["ePatient.09"] !== 'undefined') {
            if (TC.ePatient["ePatient.09"].IsNull == false) {
                if (typeof E06_04_0 === 'undefined') {
                    var E06_04_0 = new Object();
                };
                E06_04_0.E06_08 = TC.ePatient["ePatient.09"].vSet[0].val;
            }
        };

        if (typeof E06_04_0 !== 'undefined') {
            if (typeof E06 === 'undefined') {
                var E06 = new Object();
            };
            E06.E06_04_0 = E06_04_0;
        };

        if (typeof TC.ePatient["ePatient.07"] !== 'undefined') {
            if (TC.ePatient["ePatient.07"].IsNull == false) {
                if (typeof E06 === 'undefined') {
                    var E06 = new Object();
                };

                E06.E06_06 = TC.ePatient["ePatient.07"].vSet[0].val;
                if (typeof E06_04_0.E06_07 !== 'undefined');
                {
                    E06.E06_06 = E06.E06_04_0.E06_07 + E06.E06_06;
                }
            }
        };

        if (typeof TC.ePatient["ePatient.10"] !== 'undefined') {
            if (TC.ePatient["ePatient.10"].IsNull == false) {
                if (typeof E06 === 'undefined') {
                    var E06 = new Object();
                };
                E06.E06_09 = TC.ePatient["ePatient.10"].vSet[0].val;

            }
        };

        if (typeof TC.ePatient["ePatient.12"] !== 'undefined') {
            if (TC.ePatient["ePatient.12"].IsNull == false) {
                if (typeof E06 === 'undefined') {
                    var E06 = new Object();
                };
                E06.E06_10 = TC.ePatient["ePatient.12"].vSet[0].val;
            }
        };

        if (typeof TC.ePatient["ePatient.13"] !== 'undefined') {
            if (TC.ePatient["ePatient.13"].IsNull == false) {
                if (typeof E06 === 'undefined') {
                    var E06 = new Object();
                };
                E06.E06_11 = cv.setV2("ePatient.13", TC.ePatient["ePatient.13"].vSet[0].val);
            }
        };

        if (typeof TC.ePatient["ePatient.14"] !== 'undefined') {
            if (TC.ePatient["ePatient.14"].IsNull == false) {
                if (typeof E06 === 'undefined') {
                    var E06 = new Object();
                };
                E06.E06_12 = cv.setV2("ePatient.14", TC.ePatient["ePatient.14"].vSet[0].val);
                if (TC.ePatient["ePatient.14"].vSet.indexOf("2514007") !== -1) {
                    E06.E06_13 = "695";
                }
                else {
                    E06.E06_13 = "690";
                };
            }
        };

        if (typeof TC.ePatient.AgeGroup !== 'undefined') {
            if (typeof TC.ePatient.AgeGroup["ePatient.15"] !== 'undefined') {
                if (TC.ePatient.AgeGroup["ePatient.15"].IsNull == false) {
                    if (typeof E06_14_0 === 'undefined') {
                        var E06_14_0 = new Object();
                    };
                    E06_14_0.E06_14 = cv.setV2("ePatient.15", TC.ePatient.AgeGroup["ePatient.15"].vSet[0].val);
                }
            };


            if (typeof TC.ePatient.AgeGroup["ePatient.16"] !== 'undefined') {
                if (TC.ePatient.AgeGroup["ePatient.16"].IsNull == false) {
                    if (typeof E06_14_0 === 'undefined') {
                        var E06_14_0 = new Object();
                    };
                    E06_14_0.E06_15 = cv.setV2("ePatient.16", TC.ePatient.AgeGroup["ePatient.16"].vSet[0].val);
                }
            }
            if (typeof E06_14_0 !== 'undefined') {
                if (typeof E06 === 'undefined') {
                    var E06 = new Object();
                };
                E06.E06_14_0 = E06_14_0;
            }

        };

        if (typeof TC.ePatient["ePatient.17"] !== 'undefined') {
            if (TC.ePatient["ePatient.17"].IsNull == false) {
                if (typeof E06 === 'undefined') {
                    var E06 = new Object();
                };
                E06.E06_16 = TC.ePatient["ePatient.17"].vSet[0].val;
            }
        };
        if (typeof TC.ePatient["ePatient.18"] !== 'undefined') {
            if (TC.ePatient["ePatient.18"].IsNull == false) {
                if (typeof E06 === 'undefined') {
                    var E06 = new Object();
                };
                E06.E06_17 = TC.ePatient["ePatient.18"].vSet[0].val;
            }
        };


        if (typeof TC.ePatient["ePatient.20"] !== 'undefined') {
            if (TC.ePatient["ePatient.20"].IsNull == false) {
                if (typeof E06_19_0 === 'undefined') {
                    var E06_19_0 = new Object();
                };
                E06_19_0.E06_18 = TC.ePatient["ePatient.20"].vSet[0].val;
            }
        };

        if (typeof TC.ePatient["ePatient.21"] !== 'undefined') {
            if (TC.ePatient["ePatient.21"].IsNull == false) {
                if (typeof E06_19_0 === 'undefined') {
                    var E06_19_0 = new Object();
                };
                E06_19_0.E06_19 = TC.ePatient["ePatient.21"].vSet[0].val;
            }
        };

        if (typeof E06_19_0 !== 'undefined') {
            if (typeof E06 === 'undefined') {
                var E06 = new Object();
            };
            E06.E06_19_0 = E06_19_0;
        }
    };

    if (typeof E06 === 'undefined') {
        var E06 = new Object();
        E06 = null;
    };
    return E06
};
exports.setE07 = function (TheCall) {
    if (typeof TheCall.V3 === 'undefined') {
        var E07 = new Object();
        return E07;
    };

    var TC = TheCall.V3;
    if (typeof TC.ePayment === 'undefined') {
        var E07 = new Object()
        E07 = null;
    }
    else {
        var pObj = {};
        pObj = TC.ePayment;

        if (typeof pObj["ePayment.01"] !== 'undefined') {
            if (pObj["ePayment.01"].IsNull == false) {
                if (typeof E07 === 'undefined') {
                    var E07 = new Object();
                };
                if (pObj["ePayment.01"].vSet[0].val == '2601001') {
                    TheCall.PaymentType = "Insurance";
                }
                else {
                    TheCall.PaymentType = "Other";
                };
                E07.E07_01 = cv.setV2("ePayment.01", pObj["ePayment.01"].vSet[0].val);

            }
        };

        if (typeof pObj["CertificateGroup"] !== 'undefined') {
            if (typeof pObj["CertificateGroup"]["ePayment.02"] !== 'undefined') {
                if (pObj["CertificateGroup"]["ePayment.02"].IsNull == false) {
                    if (typeof E07 === 'undefined') {
                        var E07 = new Object();
                    };

                    E07.E07_02 = cv.setV2("ePayment.02", pObj["CertificateGroup"]["ePayment.02"].vSet[0].val);
                }
            }
        };

        if (typeof TC.ePayment["InsuranceGroup"] !== 'undefined') {
            for (var x = 0; x < TC.ePayment["InsuranceGroup"].length; x++) {
                var pObj = new Object()

                pObj = TC.ePayment["InsuranceGroup"][x];
                if (typeof pObj["ePayment.10"] !== 'undefined') {
                    if (pObj["ePayment.10"].IsNull == false) {
                        if (typeof E0703 === 'undefined') {
                            var E0703 = new Object();
                        };
                        E0703.E07_03 = pObj["ePayment.10"].vSet[0].val;
                    }
                };

                if (typeof pObj["ePayment.11"] !== 'undefined') {
                    if (pObj["ePayment.11"].IsNull == false) {
                        if (typeof E0703 === 'undefined') {
                            var E0703 = new Object();
                        };
                        E0703.E07_04 = cv.setV2("ePayment.11", pObj["ePayment.11"].vSet[0].val);
                    }
                };

                if (typeof pObj["ePayment.12"] !== 'undefined') {
                    if (pObj["ePayment.12"].IsNull == false) {
                        if (typeof E0705 === 'undefined') {
                            var E0705 = new Object();
                        };
                        E0705.E07_05 = pObj["ePayment.12"].vSet[0].val;
                    }
                };

                if (typeof pObj["ePayment.13"] !== 'undefined') {
                    if (pObj["ePayment.13"].IsNull == false) {
                        if (typeof E0705 === 'undefined') {
                            var E0705 = new Object();
                        };
                        E0705.E07_06 = pObj["ePayment.13"].vSet[0].val;
                    }
                };

                if (typeof pObj["ePayment.14"] !== 'undefined') {
                    if (pObj["ePayment.14"].IsNull == false) {
                        if (typeof E0705 === 'undefined') {
                            var E0705 = new Object();
                        };
                        E0705.E07_07 = pObj["ePayment.14"].vSet[0].val;
                    }
                };

                if (typeof pObj["ePayment.15"] !== 'undefined') {
                    if (pObj["ePayment.15"].IsNull == false) {
                        if (typeof E0705 === 'undefined') {
                            var E0705 = new Object();
                        };
                        E0705.E07_08 = pObj["ePayment.15"].vSet[0].val;
                    }
                };
                if (typeof E0705 !== 'undefined') {
                    E0703.E07_05_0 = E0705;
                }

                if (typeof pObj["ePayment.17"] !== 'undefined') {
                    if (pObj["ePayment.17"].IsNull == false) {
                        if (typeof E0703 === 'undefined') {
                            var E0703 = new Object();
                        };
                        E0703.E07_09 = pObj["ePayment.17"].vSet[0].val;
                    }
                };
                if (typeof pObj["ePayment.18"] !== 'undefined') {
                    if (pObj["ePayment.18"].IsNull == false) {
                        if (typeof E0703 === 'undefined') {
                            var E0703 = new Object();
                        };
                        //E0703.E07_10= pObj["ePayment.18"].vSet[0].val.replace(/[^0-9\.]+/g, "");
                        E0703.E07_10 = pObj["ePayment.18"].vSet[0].val;
                    }
                };


                if (typeof pObj["ePayment.19"] !== 'undefined') {
                    if (pObj["ePayment.19"].IsNull == false) {
                        if (typeof E0711 === 'undefined') {
                            var E0711 = new Object();
                        };
                        E0711.E07_11 = pObj["ePayment.19"].vSet[0].val;
                    }
                };


                if (typeof pObj["ePayment.20"] !== 'undefined') {
                    if (pObj["ePayment.20"].IsNull == false) {
                        if (typeof E0711 === 'undefined') {
                            var E0711 = new Object();
                        };
                        E0711.E07_12 = pObj["ePayment.20"].vSet[0].val;
                    }
                };


                if (typeof pObj["ePayment.21"] !== 'undefined') {
                    if (pObj["ePayment.21"].IsNull == false) {
                        if (typeof E0711 === 'undefined') {
                            var E0711 = new Object();
                        };
                        E0711.E07_13 = pObj["ePayment.21"].vSet[0].val;
                    }
                };
                if (typeof E0711 !== 'undefined') {
                    E0703.E07_11_0 = E0711;
                }
                if (typeof pObj["ePayment.22"] !== 'undefined') {
                    if (pObj["ePayment.22"].IsNull == false) {
                        if (typeof E0703 === 'undefined') {
                            var E0703 = new Object();
                        };
                        E0703.E07_14 = cv.setV2("ePayment.22", pObj["ePayment.22"].vSet[0].val);
                    }
                };


                if (typeof E0703 !== 'undefined') {
                    if (typeof E0703Array === 'undefined') {
                        var E0703Array = new Array();
                    };

                    E0703Array.push(E0703)
                    E0703 = undefined;
                    pObj = undefined;
                }
            };

            if (typeof E0703Array !== 'undefined') {
                if (E0703Array.length > 0) {
                    if (typeof E07 === 'undefined') {
                        var E07 = new Object();
                    };
                    E07.E07_03_0 = E0703Array.slice(0);
                }
            }
        };

        if (typeof TC.eSituation !== 'undefined') {
            if (typeof TC.eSituation["WorkRelatedGroup"] !== 'undefined') {
                if (typeof TC.eSituation["WorkRelatedGroup"]["eSituation.14"] !== 'undefined') {
                    if (TC.eSituation["WorkRelatedGroup"]["eSituation.14"].IsNull == false) {
                        if (typeof E07 === 'undefined') {
                            var E07 = new Object();
                        };
                        E07.E07_15 = cv.setV2("eSituation.14", TC.eSituation["WorkRelatedGroup"]["eSituation.14"].vSet[0].val);
                    }
                };

                if (typeof TC.eSituation["WorkRelatedGroup"]["eSituation.15"] !== 'undefined') {
                    if (TC.eSituation["WorkRelatedGroup"]["eSituation.15"].IsNull == false) {
                        if (typeof E07 === 'undefined') {
                            var E07 = new Object();
                        };
                        E07.E07_16 = cv.setV2("eSituation.15", TC.eSituation["WorkRelatedGroup"]["eSituation.15"].vSet[0].val);
                    }
                };

                if (typeof TC.eSituation["WorkRelatedGroup"]["eSituation.16"] !== 'undefined') {
                    if (TC.eSituation["WorkRelatedGroup"]["eSituation.16"].IsNull == false) {
                        if (typeof E07 === 'undefined') {
                            var E07 = new Object();
                        };
                        E07.E07_17 = cv.setV2("eSituation.16", TC.eSituation["WorkRelatedGroup"]["eSituation.16"].vSet[0].val);
                    }
                }
            }
        };

        if (typeof TC.ePayment["ClosestRelativeGroup"] !== 'undefined') {
            var objC = TC.ePayment["ClosestRelativeGroup"];
            if (typeof TC.ePayment["ClosestRelativeGroup"]["ePayment.23"] !== 'undefined') {
                if (objC["ePayment.23"].IsNull == false) {
                    if (typeof E07181 === 'undefined') {
                        var E07181 = new Object();
                    };
                    E07181.E07_18 = objC["ePayment.23"].vSet[0].val;
                }
            };


            if (typeof objC["ePayment.24"] !== 'undefined') {
                if (objC["ePayment.24"].IsNull == false) {
                    if (typeof E07181 === 'undefined') {
                        var E07181 = new Object();
                    };
                    E07181.E07_19 = objC["ePayment.24"].vSet[0].val;
                }
            };


            if (typeof objC["ePayment.25"] !== 'undefined') {
                if (objC["ePayment.25"].IsNull == false) {
                    if (typeof E07181 === 'undefined') {
                        var E07181 = new Object();
                    };
                    E07181.E07_20 = objC["ePayment.25"].vSet[0].val;
                }
            };

            if (typeof E07181 !== 'undefined') {
                if (typeof E0718 === 'undefined') {
                    var E0718 = new Object();
                };
                E0718.E07_18_01 = E07181;
            };

            if (typeof objC["ePayment.26"] !== 'undefined') {
                if (objC["ePayment.26"].IsNull == false) {
                    if (typeof E0721 === 'undefined') {
                        var E0721 = new Object();
                    };
                    E0721.E07_21 = objC["ePayment.26"].vSet[0].val;
                }
            };


            if (typeof objC["ePayment.27"] !== 'undefined') {
                if (objC["ePayment.26"].IsNull == false) {
                    if (typeof E0721 === 'undefined') {
                        var E0721 = new Object();
                    };
                    E0721.E07_22 = objC["ePayment.27"].vSet[0].val;
                }
            };

            if (typeof objC["ePayment.28"] !== 'undefined') {
                if (objC["ePayment.28"].IsNull == false) {
                    if (typeof E0721 === 'undefined') {
                        var E0721 = new Object();
                    };

                    E0721.E07_23 = objC["ePayment.28"].vSet[0].val;
                }
            };

            if (typeof objC["ePayment.29"] !== 'undefined') {
                if (objC["ePayment.29"].IsNull == false) {
                    if (typeof E0721 === 'undefined') {
                        var E0721 = new Object();
                    };
                    E0721.E07_24 = objC["ePayment.29"].vSet[0].val;
                }
            };
            if (typeof E0721 !== 'undefined') {
                if (typeof E07_21_0 === 'undefined') {
                    var E07_21_0 = new Object();
                };
                if (typeof E0718 === 'undefined') {
                    var E0718 = new Object();
                };
                E0718.E07_21_0 = E0721;
            };

            if (typeof objC["ePayment.31"] !== 'undefined') {
                if (objC["ePayment.31"].IsNull == false) {
                    if (typeof E07 === 'undefined') {
                        var E07 = new Object();
                    };

                    E07.E07_25 = objC["ePayment.31"].vSet[0].val.replace(/[^0-9\.]+/g, "");
                    //E07.E07_25 = objC["ePayment.31"].vSet[0].val;
                }
            };


            if (typeof objC["ePayment.32"] !== 'undefined') {
                if (objC["ePayment.32"].IsNull == false) {
                    if (typeof E07 === 'undefined') {
                        var E07 = new Object();
                    };

                    E07.E07_26 = cv.setV2("ePayment.32", objC["ePayment.32"].vSet[0].val);
                }
            };
            if (typeof E0718 !== 'undefined') {
                E07.E07_18_0 = E0718;
            }
        };

        if (typeof TC.ePayment["EmployerGroup"] !== 'undefined') {
            var objE = TC.ePayment["EmployerGroup"];
            if (typeof objE["ePayment.33"] !== 'undefined') {
                if (objE["ePayment.33"].IsNull == false) {
                    if (typeof E0727 === 'undefined') {
                        var E0727 = new Object();
                    };

                    E0727.E07_27 = cv.setV2("ePayment.33", objE["ePayment.33"].vSet[0].val);
                }
            };

            if (typeof objE["ePayment.34"] !== 'undefined') {
                if (objE["ePayment.34"].IsNull == false) {
                    if (typeof E0728 === 'undefined') {
                        var E0728 = new Object();
                    };

                    E0728.E07_28 = cv.setV2("ePayment.34", objE["ePayment.34"].vSet[0].val);
                }
            };


            if (typeof objE["ePayment.35"] !== 'undefined') {
                if (objE["ePayment.35"].IsNull == false) {
                    if (typeof E0728 === 'undefined') {
                        var E0728 = new Object();
                    };

                    E0728.E07_29 = cv.setV2("ePayment.35", objE["ePayment.35"].vSet[0].val);
                }
            };



            if (typeof objE["ePayment.36"] !== 'undefined') {
                if (objE["ePayment.36"].IsNull == false) {
                    if (typeof E0728 === 'undefined') {
                        var E0728 = new Object();
                    };

                    E0728.E07_30 = objE["ePayment.36"].vSet[0].val;
                }
            };

            if (typeof objE["ePayment.37"] !== 'undefined') {
                if (objE["ePayment.37"].IsNull == false) {
                    if (typeof E0728 === 'undefined') {
                        var E0728 = new Object();
                    };
                    E0728.E07_31 = objE["ePayment.37"].vSet[0].val;
                }
            };

            if (typeof E0727 !== 'undefined') {
                if (typeof E07_27_0 === 'undefined') {
                    var E07_27_0 = new Object();
                };

                if (typeof E0728 !== 'undefined') {
                    E0727.E07_28_0 = E0728;
                };
                E07.E07_27_0 = E0727;
            };



            if (typeof objE["ePayment.39"] !== 'undefined') {
                if (objE["ePayment.39"].IsNull == false) {
                    if (typeof E07 === 'undefined') {
                        var E07 = new Object();
                    };

                    E07.E07_32 = objE["ePayment.39"].vSet[0].val.replace(/[^0-9\.]+/g, "");
                }
            }
        };

        if (typeof TC.ePayment["ePayment.40"] !== 'undefined') {
            if (TC.ePayment["ePayment.40"].IsNull == false) {
                if (typeof E07 === 'undefined') {
                    var E07 = new Object();
                };

                E07.E07_33 = cv.setV2("ePayment.40", TC.ePayment["ePayment.40"].vSet[0].val);
            }
        };


        if (typeof TC.ePayment["ePayment.50"] !== 'undefined') {
            if (TC.ePayment["ePayment.50"].IsNull == false) {
                if (typeof E07 === 'undefined') {
                    var E07 = new Object();
                };

                E07.E07_34 = cv.setV2("ePayment.50", TC.ePayment["ePayment.50"].vSet[0].val);
            }
        };


        if (typeof TC.ePayment["ePayment.51"] !== 'undefined') {
            if (TC.ePayment["ePayment.51"].IsNull == false) {
                var E07_35 = new Array();
                for (var aa = 0; aa < TC.ePayment["ePayment.51"].vSet.length; aa++) {
                    E07_35.push(TC.ePayment["ePayment.51"].vSet[aa].val);
                };

                if (typeof E07_35 !== 'undefined') {
                    if (E07_35.length > 0) {
                        if (typeof E0735 === 'undefined') {
                            var E0735 = new Object();
                        };
                        E0735.E07_35 = E07_35;
                    }
                }
            }
        };
        

        if (typeof E0735 !== 'undefined') {
            if (typeof E07 === 'undefined') {
                var E07 = new Object();
            };
            var ee = [];
            ee.push(E0735)
            E07.E07_35_0 = ee
        };


        if (typeof TC.ePayment["ePayment.52"] !== 'undefined') {
            if (TC.ePayment["ePayment.51"].IsNull == false) {
                E07_37 = [];
                for (var aa = 0; aa < TC.ePayment["ePayment.52"].length; aa++) {
                    E07_37.push(cv.setV2("ePayment.52", TC.ePayment["ePayment.52"][aa].vSet[aa].val));
                };

                if (typeof E07_37 !== 'undefined') {
                    if (E07_37.length > 0) {
                        if (typeof E07 === 'undefined') {
                            var E07 = new Object();
                        };
                        E07.E07_37 = E07_37;
                    }
                }
            }
        }
    };

    if (typeof E07 === 'undefined') {
        var E07 = new Object();
        E07 = null;
    };
    return E07;
};
exports.setE08 = function (TheCall) {
    if (typeof TheCall.V3 === 'undefined') {
        var E08 = new Object();
        return E08;
    };

    var TC = TheCall.V3;
    if (typeof TC.eScene === 'undefined') {
        var E08 = new Object();
        E08 = null;
    }
    else {
        if (typeof TC.eScene.ResponderGroup !== 'undefined') {
            if (TC.eScene.ResponderGroup.length > 0) {
                for (var xx = 0; xx < TC.eScene.ResponderGroup.length; xx++) {
                    if (typeof TC.eScene.ResponderGroup[xx] !== 'undefined') {
                        if (typeof TC.eScene.ResponderGroup[xx]["eScene.04"] !== 'undefined') {
                            if (TC.eScene.ResponderGroup[xx]["eScene.04"].IsNull == false) {

                                if (typeof E08_02 === 'undefined') {
                                    var E08_02 = new Array();
                                };
                                var aar = ["2704005", "2704013", "2704017"];

                                //if (aar.indexOf(TC.eScene.ResponderGroup[xx]["eScene.04"].vSet[0].val) == -1) {
                                E08_02.push(cv.setV2("eScene.04", TC.eScene.ResponderGroup[xx]["eScene.04"].vSet[0].val));
                                //}

                                if (typeof TC.eScene.ResponderGroup[xx]["eScene.02"] !== 'undefined') {
                                    if (TC.eScene.ResponderGroup[xx]["eScene.02"].IsNull !== true) {
                                        if (typeof E08_01 === 'undefined') {
                                            var E08_01 = new Array();
                                        };

                                        if (TC.eScene.ResponderGroup[xx]["eScene.04"].vSet[0].val == '2704005')  //	2704005	First Responder
                                        {
                                            if (typeof TC.eScene.ResponderGroup[xx]["eScene.02"] !== 'undefined') {

                                                E08_01.push(TC.eScene.ResponderGroup[xx]["eScene.02"].vSet[0].text);
                                            }
                                        }
                                        else if (TC.eScene.ResponderGroup[xx]["eScene.04"].vSet[0].val == '2704013')  //		2704013	Other EMS Agency
                                        {

                                            E08_01.push(TC.eScene.ResponderGroup[xx]["eScene.02"].vSet[0].text);
                                        }
                                        else {
                                            E08_01.push(TC.eScene.ResponderGroup[xx]["eScene.02"].vSet[0].text);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            };
            if (typeof TheCall.Props !== 'undefined') {
                if (typeof TheCall.Props.TimeToArrival !== 'undefined') {
                    if (typeof E08 === 'undefined') {
                        var E08 = new Object;
                    };
                    if (TheCall.Props.TimeToArrival > 15) {
                        E08.E08_03 = "1100"
                    } else if (TheCall.Props.TimeToArrival < 5) {
                        E08.E08_03 = "1110"
                    } else if ((TheCall.Props.TimeToArrival > 5) && (TheCall.Props.TimeToArrival < 15)) {
                        E08.E08_03 = "1105"
                    } else {
                        E08.E08_03 = "1115"
                    }
                }
            };

            
            if (typeof E08_02 !== 'undefined') {
                if (typeof E08 === 'undefined') {
                    var E08 = new Object;
                };
                E08.E08_02 = E08_02;
            };

            if (typeof E08_01 !== 'undefined') {
                if (typeof E08 === 'undefined') {
                    var E08 = new Object;
                };
                E08.E08_01 = E08_01;
            }
        };

        if (typeof TC.eScene["eScene.05"] !== 'undefined') {
            if (TC.eScene["eScene.05"].IsNull == false) {
                if (typeof E08 === 'undefined') {
                    var E08 = new Object;
                };
                E08.E08_04 = new Date(TC.eScene["eScene.05"].vSet[0].val).toISOString();
            }
        };

        if (typeof TC.eScene["eScene.06"] !== 'undefined') {
            if (TC.eScene["eScene.06"].IsNull == false) {
                if (typeof E08 === 'undefined') {
                    var E08 = new Object;
                };
                E08.E08_05 = cv.setV2("eScene.06", TC.eScene["eScene.06"].vSet[0].val);
            }
        };

        if (typeof TC.eScene["eScene.07"] !== 'undefined') {
            if (TC.eScene["eScene.07"].IsNull == false) {
                if (typeof E08 === 'undefined') {
                    var E08 = new Object;
                };
                E08.E08_06 = cv.setV2("eScene.07", TC.eScene["eScene.07"].vSet[0].val);
            }
        };

        if (typeof TC.eScene["eScene.09"] !== 'undefined') {
            if (TC.eScene["eScene.09"].IsNull == false) {
                if (typeof E08 === 'undefined') {
                    var E08 = new Object;
                };
                E08.E08_07 = cv.setV2("eScene.09", TC.eScene["eScene.09"].vSet[0].val);
            }
        };

        if (typeof TC.eScene["eScene.10"] !== 'undefined') {
            if (TC.eScene["eScene.10"].IsNull == false) {
                if (typeof E08 === 'undefined') {
                    var E08 = new Object;
                };

                E08.E08_08 = TC.eScene["eScene.10"].vSet[0].val;
            }
        };

        if (typeof TC.eScene["eScene.11"] !== 'undefined') {
            if (TC.eScene["eScene.11"].IsNull == false) {
                if (typeof E08 === 'undefined') {
                    var E08 = new Object;
                };

                E08.E08_10 = cv.setV2("eScene.11", TC.eScene["eScene.11"].vSet[0].val);
            }
        };

        if (typeof TC.eScene["eScene.15"] !== 'undefined') {
            if (TC.eScene["eScene.15"].IsNull == false) {
                if (typeof E0811 === 'undefined') {
                    var E0811 = new Object;
                };
                E0811.E08_11 = TC.eScene["eScene.15"].vSet[0].val;
            }
        };


        if (typeof TC.eScene["eScene.17"] !== 'undefined') {
            if (TC.eScene["eScene.17"].IsNull == false) {
                if (typeof E0811 === 'undefined') {
                    var E0811 = new Object;
                };
                E0811.E08_12 = TC.eScene["eScene.17"].vSet[0].val;
            }
        };

        if (typeof TC.eScene["eScene.21"] !== 'undefined') {
            if (TC.eScene["eScene.21"].IsNull == false) {
                if (typeof E08 === 'undefined') {
                    var E08 = new Object;
                };

                E08.E08_13 = TC.eScene["eScene.21"].vSet[0].val;
            }
        };


        if (typeof TC.eScene["eScene.18"] !== 'undefined') {
            if (TC.eScene["eScene.18"].IsNull == false) {
                if (typeof E0811 === 'undefined') {
                    var E0811 = new Object;
                };
                E0811.E08_14 = TC.eScene["eScene.18"].vSet[0].val;
            }
        };

        if (typeof TC.eScene["eScene.19"] !== 'undefined') {
            if (TC.eScene["eScene.19"].IsNull == false) {
                if (typeof E0811 === 'undefined') {
                    var E0811 = new Object;
                };
                E0811.E08_15 = TC.eScene["eScene.19"].vSet[0].val;
            }
        };
        if (typeof E0811 !== 'undefined') {
            if (typeof E08 === 'undefined') {
                var E08 = new Object();
            };
            E08.E08_11_0 = E0811;
        }
    };
    if (typeof E08 === 'undefined') {
        var E08 = new Object();
        E08 = null;
    };
    return E08;
};
exports.setE09 = function (TheCall) {
    if (typeof TheCall.V3 === 'undefined') {
        var E09 = new Object();
        return E09;
    };

    var TC = TheCall.V3;
    var ErrorList = [];
    if (typeof TC.eProcedures !== 'undefined') {
        if (typeof TC.eProcedures["ProcedureGroup"] !== 'undefined') {
            if (TC.eProcedures["ProcedureGroup"].length > 0) {
                for (var yy = 0; yy < TC.eProcedures["ProcedureGroup"].length; yy++) {
                    var objP = TC.eProcedures["ProcedureGroup"][yy]
                    if (typeof objP["eProcedures.02"] !== 'undefined') {
                        if (objP["eProcedures.02"].IsNull == false) {
                            if (objP["eProcedures.02"].vSet[0].val == "9923003") //YES PRIOR
                            {

                                if (typeof objP["eProcedures.03"] !== 'undefined') {
                                    if (objP["eProcedures.03"].IsNull == false) {
                                        if (typeof E901Array === 'undefined') {
                                            var E901Array = new Array();
                                        };
                                        E901Array.push(cv.setV2("eProcedures.03", objP["eProcedures.03"].vSet[0].val));
                                    }
                                };


                                if (typeof objP["eProcedures.10"] !== 'undefined') {
                                    if (objP["eProcedures.10"].IsNull == false) {
                                        if (typeof E910Array === 'undefined') {
                                            var E910Array = new Array();
                                        };
                                        E910Array.push(cv.setV2("eProcedures.10", objP["eProcedures.10"].vSet[0].val));
                                    }
                                };

                                if (typeof objP["eProcedures.08"] !== 'undefined') {
                                    if (objP["eProcedures.08"].IsNull == false) {
                                        if (typeof E98Array === 'undefined') {
                                            var E98Array = new Array();
                                        };
                                        if ("eProcedures.08", objP["eProcedures.08"].vSet[0].val == '9916001') {//improved
                                            if (typeof E09 === 'undefined') {
                                                var E09 = new Object();
                                            }
                                            E09.E09_03 = "1220";
                                        };

                                        if ("eProcedures.08", objP["eProcedures.08"].vSet[0].val == '9916003') {  //unchanged
                                            if (typeof E09 === 'undefined') {
                                                var E09 = new Object();
                                            }
                                            E09.E09_03 = "1225";
                                        };

                                        if ("eProcedures.08", objP["eProcedures.08"].vSet[0].val == '9916005') {  //worse
                                            if (typeof E09 === 'undefined') {
                                                var E09 = new Object();
                                            }
                                            E09.E09_03 = "1230";
                                        };
                                    }
                                };
                            }
                        }
                    }
                }
            };
            if (typeof E901Array !== 'undefined') {
                if (E901Array.length > 0) {
                    if (typeof E09 === 'undefined') {
                        var E09 = new Object();
                    }
                    E09.E09_01 = E901Array;
                }
            };
            if (typeof E910Array !== 'undefined') {
                if (E910Array.length > 0) {
                    if (typeof E09 === 'undefined') {
                        var E09 = new Object();
                    }
                    E09.E09_02 = E910Array;
                }
            };
        }
    };

    if (typeof TC.eSituation !== 'undefined') {
        if (TC.eSituation["eSituation.02"].IsNull == false) {
            if (typeof E09 === 'undefined') {
                var E09 = new Object();
            };
            E09.E09_04 = cv.setV2("eSituation.02", TC.eSituation["eSituation.02"].vSet[0].val);
        };



        if (typeof TC.eSituation.PatientComplaintGroup !== 'undefined') {
            for (var aa = 0; aa < TC.eSituation.PatientComplaintGroup.length; aa++) {
                if (typeof TC.eSituation.PatientComplaintGroup[aa] !== 'undefined') {
                    var complaintType = "Other";
                    if (TC.eSituation.PatientComplaintGroup[aa]["eSituation.03"].IsNull !== true) {
                        if (TC.eSituation.PatientComplaintGroup[aa]["eSituation.03"].vSet[0].val == "2803001") {
                            complaintType = "Chief";
                        };
                        if (TC.eSituation.PatientComplaintGroup[aa]["eSituation.03"].vSet[0].val == "2803005") {
                            complaintType = "Secondary";
                        };
                    }

                    if (TC.eSituation.PatientComplaintGroup[aa]["eSituation.04"].IsNull == false) {
                        if (complaintType == "Chief") {
                            if (typeof E09 === 'undefined') {
                                var E09 = new Object();
                            };
                            E09.E09_05 = TC.eSituation.PatientComplaintGroup[aa]["eSituation.04"].vSet[0].val;
                        };
                        if (complaintType == "Secondary") {
                            if (typeof E09 === 'undefined') {
                                var E09 = new Object();
                            };
                            E09.E09_08 = TC.eSituation.PatientComplaintGroup[aa]["eSituation.04"].vSet[0].val;
                        }
                    };

                    if (typeof TC.eSituation.PatientComplaintGroup[aa]["eSituation.05"] !== 'undefined') {
                        if (TC.eSituation.PatientComplaintGroup[aa]["eSituation.05"].IsNull == false) {
                            if (complaintType == "Chief") {
                                if (typeof E09_06_0 === 'undefined') {
                                    var E09_06_0 = new Object();
                                };
                                E09_06_0.E09_06 = TC.eSituation.PatientComplaintGroup[aa]["eSituation.05"].vSet[0].val;
                            };
                            if (complaintType == "Secondary") {
                                if (typeof E09_09_0 === 'undefined') {
                                    var E09_09_0 = new Object();
                                };
                                E09_09_0.E09_09 = TC.eSituation.PatientComplaintGroup[aa]["eSituation.05"].vSet[0].val;
                            }
                        }
                    };

                    if (typeof TC.eSituation.PatientComplaintGroup[aa]["eSituation.06"] !== 'undefined') {
                        if (TC.eSituation.PatientComplaintGroup[aa]["eSituation.06"].IsNull == false) {
                            if (complaintType == "Chief") {
                                if (typeof E09_06_0 === 'undefined') {
                                    var E09_06_0 = new Object();
                                };
                                E09_06_0.E09_07 = cv.setV2("eSituation.06", TC.eSituation.PatientComplaintGroup[aa]["eSituation.06"].vSet[0].val);
                            };
                            if (complaintType == "Secondary") {
                                if (typeof E09_09_0 === 'undefined') {
                                    var E09_09_0 = new Object();
                                };
                                if (TC.eSituation.PatientComplaintGroup[aa]["eSituation.06"].vSet[0].val == '2806001')//seconds
                                {
                                    E09_09_0.E09_10 = "1235";
                                };
                                if (TC.eSituation.PatientComplaintGroup[aa]["eSituation.06"].vSet[0].val == '2806003')//minutes
                                {
                                    E09_09_0.E09_10 = "1240";;
                                };
                                if (TC.eSituation.PatientComplaintGroup[aa]["eSituation.06"].vSet[0].val == '2806005')//hours
                                {
                                    E09_09_0.E09_10 = "1245";;
                                };
                                if (TC.eSituation.PatientComplaintGroup[aa]["eSituation.06"].vSet[0].val == '2806007')//Days
                                {
                                    E09_09_0.E09_10 = "1250";;
                                };
                                if (TC.eSituation.PatientComplaintGroup[aa]["eSituation.06"].vSet[0].val == '2806009')//weeks
                                {
                                    E09_09_0.E09_10 = "1255";;
                                };
                                if (TC.eSituation.PatientComplaintGroup[aa]["eSituation.06"].vSet[0].val == '2806011')//months
                                {
                                    E09_09_0.E09_10 = "1260";;
                                };
                                if (TC.eSituation.PatientComplaintGroup[aa]["eSituation.06"].vSet[0].val == '2806013')//months
                                {
                                    E09_09_0.E09_10 = "1265";;
                                };

                            }
                        }
                    }
                }
            }
        };

        if (typeof E09_06_0 !== 'undefined') {
            if (typeof E09 === 'undefined') {
                var E09 = new Object();
            }
            E09.E09_06_0 = E09_06_0
        };

        if (typeof E09_09_0 !== 'undefined') {
            if (typeof E09 === 'undefined') {
                var E09 = new Object();
            }
            E09.E09_09_0 = E09_09_0
        };

        //////////////End Complaint Group
        if (typeof TC.eSituation["eSituation.07"] !== 'undefined') {
            if (TC.eSituation["eSituation.07"].IsNull == false) {
                if (typeof E09 === 'undefined') {
                    var E09 = new Object();
                };
                E09.E09_11 = cv.setV2("eSituation.07", TC.eSituation["eSituation.07"].vSet[0].val);
            }
        };

        if (typeof TC.eSituation["eSituation.08"] !== 'undefined') {
            if (TC.eSituation["eSituation.08"].IsNull == false) {
                if (typeof E09 === 'undefined') {
                    var E09 = new Object();
                };
                E09.E09_12 = cv.setV2("eSituation.08", TC.eSituation["eSituation.08"].vSet[0].val);
            }
        };
        if (typeof TC.eSituation["eSituation.09"] !== 'undefined') {
            if (TC.eSituation["eSituation.09"].IsNull == false) {
                if (typeof E09 === 'undefined') {
                    var E09 = new Object();
                };
                E09.E09_13 = cv.setV2("eSituation.09", TC.eSituation["eSituation.09"].vSet[0].val);
            }
        };


        if (typeof TC.eSituation["eSituation.10"] !== 'undefined') {
            if (TC.eSituation["eSituation.10"].IsNull == false) {
                var E09_14 = [];
                for (var i = 0; i < TC.eSituation["eSituation.10"].vSet.length; i++) {
                    E09_14.push(cv.setV2("eSituation.10", TC.eSituation["eSituation.10"].vSet[i].val));
                }
            };
            if (typeof E09_14 !== 'undefined') {
                if (typeof E09 === 'undefined') {
                    var E09 = new Object();
                };
                E09.E09_14 = E09_14;
            }
        };

        if (typeof TC.eSituation["eSituation.11"] !== 'undefined') {
            if (TC.eSituation["eSituation.11"].IsNull == false) {
                if (typeof E09 === 'undefined') {
                    var E09 = new Object();
                };
                E09.E09_15 = cv.setV2("eSituation.11", TC.eSituation["eSituation.11"].vSet[0].val);
            }
        };


        if (typeof TC.eSituation["eSituation.12"] !== 'undefined') {
            if (TC.eSituation["eSituation.12"].IsNull == false) {
                if (typeof E09 === 'undefined') {
                    var E09 = new Object();
                };
                E09.E09_16 = cv.setV2("eSituation.12", TC.eSituation["eSituation.12"].vSet[0].val);
            }
        }
    };
    if (typeof E09 === 'undefined') {
        var E09 = new Object();
        E09 = null;
    };
    return E09;
};
exports.setE10 = function (TheCall) {
    if (typeof TheCall.V3 === 'undefined') {
        var E10 = new Object();
        return E10;
    };

    var TC = TheCall.V3;

    if (typeof TC.eInjury === 'undefined') {
        var E10 = new Object();
        E10 = null;
    }
    else {     
        if ((typeof TC.eInjury["eInjury.01"] !== 'undefined') && (TC.eInjury["eInjury.01"].IsNull == false)) {
            if (TC.eInjury["eInjury.01"].IsNull == false) {
                if (typeof E10 === 'undefined') {
                    var E10 = new Object();
                };
                
                E10.E10_01 = cv.setV2("eInjury.01", TC.eInjury["eInjury.01"].vSet[0].val);
                var intent = TC.eInjury["eInjury.01"].vSet[0].val
            }
        };


        if ((typeof TC.eInjury["eInjury.02"] !== 'undefined') && (TC.eInjury["eInjury.02"].IsNull == false)) {

            if (TC.eInjury["eInjury.02"].IsNull == false) {
                if (typeof E10_03 === 'undefined') {
                    var E10_03 = [];
                };
                for (var i = 0; i < TC.eInjury["eInjury.02"].vSet.length; i++) {
                    E10_03.push(cv.setV2("eInjury.02", TC.eInjury["eInjury.02"].vSet[i].val));

                    if (typeof intent !== 'undefined') {
                        var retValue = cv.sete10_02(intent);   //Get Intent of Injury 

                    }
                };

                if (typeof E10 === 'undefined') {
                    var E10 = new Object();
                };
                if (typeof retValue !== 'undefined') {
                    E10.E10_02 = retValue;
                }
            }
        };

        if ((typeof TC.eInjury["eInjury.04"] !== 'undefined') && (TC.eInjury["eInjury.04"].IsNull == false)) {
            var E10_04 = [];
            for (var i = 0; i < TC.eInjury["eInjury.04"].vSet.length; i++) {
                E10_04.push(cv.setV2("eInjury.04", TC.eInjury["eInjury.04"].vSet[i].val));
            };
            E10.E10_04 = E10_04;
        };



        if ((typeof TC.eInjury["eInjury.05"] !== 'undefined') && (TC.eInjury["eInjury.05"].IsNull == false)) {
            var E10_05 = [];
            for (var i = 0; i < TC.eInjury["eInjury.05"].vSet.length; i++) {
                E10_05.push(cv.setV2("eInjury.05", TC.eInjury["eInjury.05"].vSet[i].val));
            };
            if (typeof E10 === 'undefined') {
                var E10 = new Object();
            };
            E10.E10_05 = E10_05;
        };

        if ((typeof TC.eInjury["eInjury.06"] !== 'undefined') && (TC.eInjury["eInjury.06"].IsNull == false)) {
            if (typeof E10060 === 'undefined') {
                var E10060 = new Object();
            };

            if (TC.eInjury["eInjury.06"].vSet[0].val == "2906001") {
                E10060.E10_06 = "1";
                E10060.E10_07 = "2150";
            };
            if (TC.eInjury["eInjury.06"].vSet[0].val == "2906003") {
                E10060.E10_06 = "1";
                E10060.E10_07 = "2155";

            };
            if (TC.eInjury["eInjury.06"].vSet[0].val == "2906005") {
                E10060.E10_06 = "1";
                E10060.E10_07 = "2165";
            };
            if (TC.eInjury["eInjury.06"].vSet[0].val == "2906007") {
                E10060.E10_06 = "50";
                E10060.E10_07 = "2160";
            };

            if (TC.eInjury["eInjury.06"].vSet[0].val == "2906009") {
                E10060.E10_06 = "50";
                E10060.E10_07 = "2160";
            };

            if (TC.eInjury["eInjury.06"].vSet[0].val == "2906011") {
                E10060.E10_06 = "50";
                E10060.E10_07 = "2160";
            };
            if (TC.eInjury["eInjury.06"].vSet[0].val == "2906013") {
                E10060.E10_06 = "2";
                E10060.E10_07 = "2155";
            };
            if (TC.eInjury["eInjury.06"].vSet[0].val == "2906015") {
                E10060.E10_06 = "2";
                E10060.E10_07 = "2165";
            };
            if (TC.eInjury["eInjury.06"].vSet[0].val == "2906017") {
                E10060.E10_06 = "2";
                E10060.E10_07 = "2165";
            };
            if (TC.eInjury["eInjury.06"].vSet[0].val == "2906019") {
                E10060.E10_06 = "2";
                E10060.E10_07 = "2160";
            };

            if (TC.eInjury["eInjury.06"].vSet[0].val == "2906021") {
                E10060.E10_06 = "3";
                E10060.E10_07 = "2160";
            };
            if (TC.eInjury["eInjury.06"].vSet[0].val == "2906023") {
                E10060.E10_06 = "3";
                E10060.E10_07 = "2155";
            };
            if (TC.eInjury["eInjury.06"].vSet[0].val == "2906025") {
                E10060.E10_06 = "3";
                E10060.E10_07 = "2165";
            };

            if (TC.eInjury["eInjury.06"].vSet[0].val == "2906019") {
                E10060.E10_06 = "50";
                E10060.E10_07 = "2160";
            };

            if (TC.eInjury["eInjury.06"].vSet[0].val == "2906019") {
                E10060.E10_06 = "50";
                E10060.E10_07 = "2160";
            }           
        };

        if (typeof E10060 !== 'undefined') {
            if (typeof E10 === 'undefined') {
                var E10 = new Object();
            };
            E10.E10_06_0 = E10060;
        }

        if ((typeof TC.eInjury["eInjury.07"] !== 'undefined') && (TC.eInjury["eInjury.07"].IsNull == false)) {
            var E10_08 = [];
            for (var i = 0; i < TC.eInjury["eInjury.08"].vSet.length; i++) {
                E10_08.push(cv.setV2("eInjury.07", TC.eInjury["eInjury.07"].vSet[i].val));
            };
            if (typeof E10 === 'undefined') {
                var E10 = new Object();
            };
            E10.E10_08 = E10_08;
        };
        


        if ((typeof TC.eInjury["eInjury.08"] !== 'undefined') && (TC.eInjury["eInjury.08"].IsNull == false)) {
            var E10_09 = [];
            for (var i = 0; i < TC.eInjury["eInjury.08"].vSet.length; i++) {
                E10_09.push(cv.setV2("eInjury.08", TC.eInjury["eInjury.08"].vSet[i].val));
            };
            if (typeof E10 === 'undefined') {
                var E10 = new Object();
            };
            E10.E10_09 = E10_09
        };



        if ((typeof TC.eInjury["eInjury.09"] !== 'undefined') && (TC.eInjury["eInjury.09"].IsNull == false)) {
            if (typeof E10 === 'undefined') {
                var E10 = new Object();
            };
            if (TC.eInjury["eInjury.09"].IsNull == false) {
                E10.E10_10 = TC.eInjury["eInjury.09"].vSet[0].val;
            }
        };
    };
    if (typeof E10 === 'undefined') {
        var E10 = new Object();
        E10 = null;
    }
    return E10;
};
exports.setE11 = function (TheCall) {
    
    if (typeof TheCall.V3 === 'undefined') {
        var E11 = new Object();
        return E11;
    };

    var TC = TheCall.V3;
    if (typeof TC.eArrest === 'undefined') {

        var E11 = new Object();
        E11 = null
    }
    else {
        if (typeof TC.eArrest["eArrest.01"] !== 'undefined') {
            if (TC.eArrest["eArrest.01"].IsNull == false) {
                if (typeof E11 === 'undefined') {
                    var E11 = new Object();
                };
                E11.E11_01 = cv.setV2("eArrest.01", TC.eArrest["eArrest.01"].vSet[0].val);
            }
        }

        if (typeof TC.eArrest["eArrest.02"] !== 'undefined') {
            if (TC.eArrest["eArrest.02"].IsNull == false) {
                if (typeof E11 === 'undefined') {
                    var E11 = new Object();
                };
                E11.E11_02 = cv.setV2("eArrest.02", TC.eArrest["eArrest.02"].vSet[0].val);
            }
        };


        if (typeof TC.eArrest["eArrest.03"] !== 'undefined') {
            if (TC.eArrest["eArrest.03"].IsNull == false) {
                var E11_03 = new Array();
                for (var i = 0; i < TC.eArrest["eArrest.03"].vSet.length; i++) {
                    E11_03.push(cv.setV2("eArrest.03", TC.eArrest["eArrest.03"].vSet[i].val));
                };
                if (typeof E11_03 !== 'undefined') {
                    if (E11_03.length > 0) {
                        if (typeof E11 === 'undefined') {
                            var E11 = new Object();
                        };
                        E11.E11_03 = E11_03;
                    }
                }
            }
        };

        if (typeof TC.eArrest["eArrest.04"] !== 'undefined') {
            if (TC.eArrest["eArrest.04"].IsNull == false) {
                if (typeof E11 === 'undefined') {
                    var E11 = new Object();
                };
                E11.E11_04 = cv.setV2("eArrest.04", TC.eArrest["eArrest.04"].vSet[0].val);
            }
        };

        if (typeof TC.eArrest["eArrest.11"] !== 'undefined') {
            if (TC.eArrest["eArrest.11"].IsNull == false) {
                if (typeof E11 === 'undefined') {
                    var E11 = new Object();
                };
                E11.E11_05 = cv.setV2("eArrest.11", TC.eArrest["eArrest.11"].vSet[0].val);
            }
        };


        if (typeof TC.eArrest["eArrest.12"] !== 'undefined') {
            if (TC.eArrest["eArrest.12"].IsNull == false) {
                if (typeof E11 === 'undefined') {
                    var E11 = new Object();
                };

                E11.E11_06 = cv.setV2("eArrest.12", TC.eArrest["eArrest.12"].vSet[0].val);
            }
        };

        if (typeof TC.eArrest["eArrest.13"] !== 'undefined') {
            if (TC.eArrest["eArrest.13"].IsNull !== true) {
                if (typeof E11 === 'undefined') {
                    var E11 = new Object();
                };
                E11.E11_07 = cv.setV2("eArrest.13", TC.eArrest["eArrest.13"].vSet[0].val);
            }
        };


        if (typeof TC.eArrest["eArrest.14"] !== 'undefined') {
            if (TC.eArrest["eArrest.14"].IsNull == false) {
                if (typeof E11 === 'undefined') {
                    var E11 = new Object();
                };
                E11.E11_08 = TC.eArrest["eArrest.14"].vSet[0].val;
            }
        };


        if (typeof TC.eArrest["eArrest.15"] !== 'undefined') {
            if (TC.eArrest["eArrest.15"].IsNull == false) {
                if (typeof E11 === 'undefined') {
                    var E11 = new Object();
                };

                E11.E11_09 = new Date(TC.eArrest["eArrest.15"].vSet[0].val).toISOString();
            }
        };


        if (typeof TC.eArrest["eArrest.16"] !== 'undefined') {
            if (TC.eArrest["eArrest.16"].IsNull == false) {
                if (typeof E11 === 'undefined') {
                    var E11 = new Object();
                };
                E11.E11_10 = cv.setV2("eArrest.16", TC.eArrest["eArrest.16"].vSet[0].val);
            }
        };


        if (typeof TC.eArrest["eArrest.17"] !== 'undefined') {
            if (TC.eArrest["eArrest.17"].IsNull == false) {
                var E11_11 = [];
                for (var i = 0; i < TC.eArrest["eArrest.17"].vSet.length; i++) {
                    E11_11.push(cv.setV2("eArrest.17", TC.eArrest["eArrest.17"].vSet[i].val));
                };
                if (typeof E11_11 !== 'undefined') {
                    if (E11_11.length > 0) {
                        if (typeof E11 === 'undefined') {
                            var E11 = new Object();
                        };
                        E11.E11_11 = E11_11
                    }
                }
            }
        }
    };
   

    if (typeof E11 === 'undefined') {
        var E11 = new Object();
        E11 = null;
    };
    return E11;
};
exports.setE12 = function (TheCall) {
    
    if (typeof TheCall.V3 === 'undefined') {
        var E12 = new Object();
        return E12;
    };

    var TC = TheCall.V3;

    if (typeof TC.eHistory === 'undefined') {
        var E12 = new Object();
        E12.IsUndefined = true;
    }
    else 
    {

        if (typeof TC.eHistory["eHistory.01"] !== 'undefined')
        {

            if (TC.eHistory["eHistory.01"].IsNull == false)
            {
                var _E1201 = new Array();
                for (var i = 0; i < TC.eHistory["eHistory.01"].vSet.length; i++) {
                    _E1201.push(cv.setV2("eHistory.01", TC.eHistory["eHistory.01"].vSet[i].val));
                };

                if (_E1201.length > 0)
                {
                    if (typeof E12 === 'undefined') {
                        var E12 = new Object();
                    };

                    //E12.E12_01 = _E1201.filter(onlyUnique);
                    E12.E12_01 = _E1201;
                }
            }
        };
        

    

        if (typeof TC.eHistory.PractitionerGroup !== 'undefined') 
        {
            if (TC.eHistory.PractitionerGroup.length > 0) {
                if (typeof TC.eHistory.PractitionerGroup[0]["eHistory.02"] !== 'undefined') {
                    if (typeof e12040 === 'undefined') {
                        var e12040 = new Object();
                    };
                    if (TC.eHistory.PractitionerGroup[0]["eHistory.02"].IsNull !== true) {
                        if (typeof e12040 === 'undefined') {
                            var e12040 = new Object();
                        };
                        e12040.E12_04 = TC.eHistory.PractitionerGroup[0]["eHistory.02"].vSet[0].val;
                    }
                };

                if (typeof TC.eHistory.PractitionerGroup[0]["eHistory.03"] !== 'undefined') {
                    if (TC.eHistory.PractitionerGroup[0]["eHistory.03"].IsNull == false) {
                        if (typeof e12040 === 'undefined') {
                            var e12040 = new Object();
                        };
                        e12040.E12_05 = TC.eHistory.PractitionerGroup[0]["eHistory.03"].vSet[0].val;
                    }
                };

                if (typeof TC.eHistory.PractitionerGroup[0]["eHistory.04"] !== 'undefined') {

                    if (TC.eHistory.PractitionerGroup[0]["eHistory.04"].IsNull == false) {
                        if (typeof e12040 === 'undefined') {
                            var e12040 = new Object();
                        };
                        e12040.E12_06 = TC.eHistory.PractitionerGroup[0]["eHistory.04"].vSet[0].val;
                    }
                }
            }
            if (typeof e12040 !== 'undefined') {
                if (typeof E12 === 'undefined') {
                    var E12 = new Object();
                };
                E12.E12_4_0 = e12040;
            }
        };
        if (typeof TC.eHistory["eHistory.05"] !== 'undefined') {
            if (TC.eHistory["eHistory.05"].IsNull == false) {
                var _E1207 = [];
                for (var i = 0; i < TC.eHistory["eHistory.05"].vSet.length; i++) {
                    _E1207.push(cv.setV2("eHistory.05", TC.eHistory["eHistory.05"].vSet[i].val));
                }
                if (_E1207.length > 0) {
                    if (typeof E12 === 'undefined') {
                        var E12 = new Object();
                    };
                    //E12.E12_07 = _E1207.filter(onlyUnique);
                    E12.E12_07 = _E1207;
                }
            }
        };

        if (typeof TC.eHistory["eHistory.06"] !== 'undefined') {
            if (TC.eHistory["eHistory.06"].IsNull == false) {
                for (var i = 0; i < TC.eHistory["eHistory.06"].vSet.length; i++) {
                    if (typeof _E1208 === 'undefined') {
                        var _E1208 = new Array();
                    };
                    //_E1208.push(TC.eHistory["eHistory.06"].vSet[i].val);
                }
            }
        };


        if (typeof _E1209 !== 'undefined') {
            if (_E1209.length > 0) {
                if (typeof E12 === 'undefined') {
                    var E12 = new Object();
                };
                E12.E12_09 = _E1209;//.filter(onlyUnique);
            }
        };

        if (typeof TC.eHistory["eHistory.08"] !== 'undefined') {
            if (TC.eHistory["eHistory.08"].IsNull == false) {
                for (var i = 0; i < TC.eHistory["eHistory.08"].vSet.length; i++) {
                    if (typeof _E1210 === 'undefined') {
                        var _E1210 = new Array();
                    };
                    _E1210.push(TC.eHistory["eHistory.08"].vSet[i].val);
                };
            }
        };

        if (typeof _E1210 !== 'undefined') {
            if (_E1210.length > 0) {
                if (typeof E12 === 'undefined') {
                    var E12 = new Object();
                };
                E12.E12_10 = _E1210; //.filter(onlyUnique);
            }
        };


        if (typeof TC.eHistory["eHistory.09"] !== 'undefined') {
            if (TC.eHistory["eHistory.09"].IsNull == false) {
                for (var i = 0; i < TC.eHistory["eHistory.09"].vSet.length; i++) {
                    if (typeof _E1211 === 'undefined') {
                        var _E1211 = new Array();
                    };

                    _E1211.push(cv.setV2("eHistory.09", TC.eHistory["eHistory.09"].vSet[i].val));
                };

                if (_E1211.length > 0) {
                    if (typeof E12 === 'undefined') {
                        var E12 = new Object();
                    };
                    E12.E12_11 = _E1211; //.filter(onlyUnique);
                }
            }
        };

        if (typeof TC.eHistory["ImmunizationsGroup"] !== 'undefined') {
            for (var i = 0; i < TC.eHistory["ImmunizationsGroup"].length; i++) {
                var obj = TC.eHistory["ImmunizationsGroup"][i];
                if (typeof obj["eHistory.10"] !== 'undefined') {
                    if (obj["eHistory.10"].IsNull == false) {
                        var e12_12_0 = new Object();
                        e12_12_0.E12_12 = cv.setV2("eHistory.10", obj["eHistory.10"].vSet[0].val);
                    };

                    if (typeof obj["eHistory.11"] !== 'undefined') {
                        if (obj["eHistory.11"].IsNull !== true) {
                            e12_12_0.E12_13 = obj["eHistory.11"].vSet[0].val;
                        }
                    }
                };
                if (typeof e12_12_0 !== 'undefined') {
                    if (typeof E12_12_0 === 'undefined') {
                        var E12_12_0 = new Array();
                    };
                    E12_12_0.push(e12_12_0)
                    e12_12_0 = undefined
                }
            };
            if (typeof E12_12_0 !== 'undefined') {
                if (E12_12_0.length > 0) {
                    if (typeof E12 === 'undefined') {
                        var E12 = new Object();
                    }
                };
                E12.E12_12_0 = E12_12_0;
            }
        };
        if (typeof TC.eHistory["CurrentMedsGroup"] !== 'undefined') {
            if (TC.eHistory["CurrentMedsGroup"].length !== -1) {
                for (var i = 0; i < TC.eHistory["CurrentMedsGroup"].length; i++) {
                    if (typeof TC.eHistory["CurrentMedsGroup"][i]["eHistory.12"] !== 'undefined') {
                        if (TC.eHistory["CurrentMedsGroup"][i]["eHistory.12"].IsNull == false) {
                            if (typeof _E12_14_0 === 'undefined') {
                                var _E12_14_0 = new Object();
                            };
                            _E12_14_0.E12_14 = cv.setV2("eHistory.12", TC.eHistory["CurrentMedsGroup"][i]["eHistory.12"].vSet[0].val);

                            if (typeof TC.eHistory["CurrentMedsGroup"][i]["eHistory.15"] !== 'undefined') {
                                if (TC.eHistory["CurrentMedsGroup"][i]["eHistory.15"].IsNull == false) {
                                    _E12_14_0.E12_17 = cv.setV2("eHistory.15", TC.eHistory["CurrentMedsGroup"][i]["eHistory.15"].vSet[0].val);
                                }
                            }
                        }
                    };
                    
                    if (typeof TC.eHistory["CurrentMedsGroup"][i]["eHistory.13"] !== 'undefined') {
                        //Dosage UOM
                        if (TC.eHistory["CurrentMedsGroup"][i]["eHistory.13"].IsNull == false) {
                            if (typeof e12a === 'undefined') {
                                var e12a = {};
                            };
                            e12a.E12_15 = TC.eHistory["CurrentMedsGroup"][i]["eHistory.13"].vSet[0].val;

                            if (typeof TC.eHistory["CurrentMedsGroup"][i]["eHistory.14"] !== 'undefined') {

                                if (TC.eHistory["CurrentMedsGroup"][i]["eHistory.14"].IsNull == false) {
                                    if (typeof E12_15_0 === 'undefined') {
                                        e12a.E12_16 = cv.setV2("eHistory.14", TC.eHistory["CurrentMedsGroup"][i]["eHistory.14"].vSet[0].val);
                                    };
                                };
                            };
                            if (typeof e1215 === 'undefined') {
                                var e1215 = new Object();
                            };
                            e1215 = e12a;
                            e12a = undefined;
                        };


                        if (typeof e1215 !== 'undefined') {

                            _E12_14_0.E12_15_0 = e1215
                            e1215 = undefined;
                        };

                        if (typeof _E12_14_0 !== 'undefined') {
                            if (typeof CurrMedsArray === 'undefined') {
                                var CurrMedsArray = [];
                            };
                            CurrMedsArray.push(_E12_14_0)
                            _E12_14_0 = undefined;
                        };
                    }
                };

                if (typeof E12 === 'undefined') {
                    var E12 = new Object();
                };
                E12.E12_14_0 = CurrMedsArray;
            }
        };


        if (typeof TC.eHistory["eHistory.16"] !== 'undefined') {
            if (typeof E12 === 'undefined') {
                var E12 = new Object();
            };
            if (TC.eHistory["eHistory.16"].IsNull == false) {
                E12.E12_18 = cv.setV2("eHistory.16", TC.eHistory["eHistory.16"].vSet[0].val);
            }
        };
        

        if (typeof TC.eHistory["eHistory.17"] !== 'undefined')
        {
            if (TC.eHistory["eHistory.17"].IsNull == false) {
                var _E1219 = [];
                for (var i = 0; i < TC.eHistory["eHistory.17"].vSet.length; i++) {
                    _E1219.push(cv.setV2("eHistory.17", TC.eHistory["eHistory.17"].vSet[i].val));
                };
                if (_E1219.length > 0) {
                    if (typeof E12 === 'undefined') {
                        var E12 = new Object();
                    };
                    E12.E12_19 = _E1219;//.filter(onlyUnique);
                }
            }
        };

        if (typeof TC.eHistory["eHistory.18"] !== 'undefined') {
            if (TC.eHistory["eHistory.18"].IsNull == false) {
                if (typeof E12 === 'undefined') {
                    var E12 = new Object();
                };
                E12.E12_20 = cv.setV2("eHistory.18", TC.eHistory["eHistory.18"].vSet[0].val);
            }
        }
    };    
    if (typeof E12 === 'undefined') {
        var E12 = new Object();
        E12.IsUndefined = true;
    }
    else {
        E12.IsUndefined = false;
    };

    return E12;
};
exports.setE13 = function (TheCall)
{

    if (typeof TheCall.V3 === 'undefined') {
        var E13 = new Object();
        return E13;
    };
    var TC = TheCall.V3;
    
    if (typeof TC.eNarrative !== 'undefined') {
        if (TC.eNarrative["eNarrative.01"].IsNull == false) {
            
            var e13 = TC.eNarrative["eNarrative.01"].vSet[0].val;
        }
    };
    
    if (typeof TheCall.Props !== 'undefined') {
        if (typeof TheCall.Props.Narrative !== 'undefined') {
            var s = "";
            for (var x = 0; x < TheCall.Props.Narrative.length ; x++) {                
                s = s + TheCall.Props.Narrative[x]
            }
        };
        if (typeof E13 === 'undefined') {
            if (typeof E13 === 'undefined') {
                var E13 = new Object();
            }
        };
        if (typeof e13 !== 'undefined') {
            E13.E13_01 = E13.E13_01 + e13;
        }
        if (typeof s !== 'undefined') {
            E13.E13_01 = E13.E13_01 + s;
        }
    }
    if (typeof E13 === 'undefined') {
        var E13 = new Object()
    }
    return E13;

};
exports.setE14 = function (TheCall) {

    if (typeof TheCall.V3 === 'undefined') {
        var E14 = new Object();
        return E14;
    };

    var TC = TheCall.V3;
    if (typeof TC.eVitals === 'undefined') {
        var E14 = {};
        E14 = null;
        return E14;
    }
    else {
        for (var xx = 0; xx < TC.eVitals.VitalGroup.length; xx++) {

            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.01"] !== 'undefined') {
                if (TC.eVitals.VitalGroup[xx]["eVitals.01"].IsNull == false) {
                    if (typeof e14 === 'undefined') {
                        var e14 = new Object();
                    };
                    e14.E14_01 = new Date(TC.eVitals.VitalGroup[xx]["eVitals.01"].vSet[0].val).toISOString();
                }
            };
            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.02"] !== 'undefined') {
                if (TC.eVitals.VitalGroup[xx]["eVitals.02"].IsNull == false) {
                    if (typeof e14 === 'undefined') {
                        var e14 = new Object();
                    };
                    e14.E14_02 = cv.setV2("eVitals.02", TC.eVitals.VitalGroup[xx]["eVitals.02"].vSet[0].val);
                }
            };
            if (typeof TC.eVitals.VitalGroup[xx]["CardiacRhythmGroup"] !== 'undefined') {
                if (typeof TC.eVitals.VitalGroup[xx]["CardiacRhythmGroup"]["eVitals.03"] !== 'undefined') {

                    if (TC.eVitals.VitalGroup[xx]["CardiacRhythmGroup"]["eVitals.03"].IsNull == false) {
                        var E14_03 = [];
                        for (var i = 0; i < TC.eVitals.VitalGroup[xx]["CardiacRhythmGroup"]["eVitals.03"].vSet.length; i++) {
                            E14_03.push(cv.setV2("eVitals.03", TC.eVitals.VitalGroup[xx]["CardiacRhythmGroup"]["eVitals.03"].vSet[i].val));
                        }
                        if (E14_03.length > 0) {
                            if (typeof e14 === 'undefined') {
                                var e14 = new Object();
                            };
                            e14.E14_03 = E14_03;
                        }
                    }
                }
            };
            if (typeof TC.eVitals.VitalGroup[xx]["BloodPressureGroup"] !== 'undefined') {
                var bGobj = TC.eVitals.VitalGroup[xx]["BloodPressureGroup"]
                if (typeof bGobj["eVitals.06"] !== 'undefined') {
                    if (bGobj["eVitals.06"].IsNull == false) {
                        var E14_04_0 = new Object();
                        E14_04_0.E14_04 = bGobj["eVitals.06"].vSet[0].val;

                        if (typeof bGobj["eVitals.07"] !== 'undefined') {
                            if (bGobj["eVitals.07"].IsNull == false) {
                                if (bGobj["eVitals.07"].IsNull == false) {
                                    E14_04_0.E14_05 = bGobj["eVitals.07"].vSet[0].val;
                                }
                            }
                        };

                        if (typeof bGobj["eVitals.08"] !== 'undefined') {
                            if (bGobj["eVitals.08"].IsNull == false) {
                                if (bGobj["eVitals.08"].IsNull == false) {
                                    E14_04_0.E14_06 = cv.setV2("eVitals.08", bGobj["eVitals.08"].vSet[0].val);
                                }
                            }
                        }
                    }
                }
                if (typeof e14 === 'undefined') {
                    var e14 = new Object();
                };
                e14.E14_04_0 = E14_04_0;
            };

            if (typeof TC.eVitals.VitalGroup[xx]["HeartRateGroup"] !== 'undefined') {
                if (typeof TC.eVitals.VitalGroup[xx]["HeartRateGroup"]["eVitals.10"] !== 'undefined') {
                    if (TC.eVitals.VitalGroup[xx]["HeartRateGroup"]["eVitals.10"].IsNull == false) {
                        if (typeof e14 === 'undefined') {
                            var e14 = new Object();
                        };
                        var rt = TC.eVitals.VitalGroup[xx]["HeartRateGroup"]["eVitals.10"].vSet[0].val;

                    }
                };
                if (typeof TC.eVitals.VitalGroup[xx]["HeartRateGroup"]["eVitals.11"] !== 'undefined') {
                    if (TC.eVitals.VitalGroup[xx]["HeartRateGroup"]["eVitals.11"].IsNull == false) {
                        var r = TC.eVitals.VitalGroup[xx]["HeartRateGroup"]["eVitals.11"].vSet[0].val;

                        if (typeof e14 !== 'undefined') {
                            if (typeof e14.E14_07 !== 'undefined') {
                                if (r == '3311005') {
                                    if (typeof e14 === 'undefined') {
                                        var e14 = new Object();
                                    };
                                    e14.E14_08 = rt;
                                };
                                if (r == '3311007') {
                                    if (typeof e14 === 'undefined') {
                                        var e14 = new Object();
                                    };
                                    e14.E14_08 = rt;
                                };
                                if (r == '3311009') {
                                    if (typeof e14 === 'undefined') {
                                        var e14 = new Object();
                                    };
                                    e14.E14_08 = rt;
                                }
                            }
                        }
                    }
                }
            };

            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.12"] !== 'undefined') {
                if (TC.eVitals.VitalGroup[xx]["eVitals.12"].IsNull == false) {
                    if (typeof e14 === 'undefined') {
                        var e14 = new Object();
                    };

                    e14.E14_09 = TC.eVitals.VitalGroup[xx]["eVitals.12"].vSet[0].val;
                }
            };
            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.13"] !== 'undefined') {
                if (TC.eVitals.VitalGroup[xx]["eVitals.13"].IsNull == false) {
                    if (typeof e14 === 'undefined') {
                        var e14 = new Object();
                    };

                    e14.E14_10 = cv.setV2("eVitals.13", TC.eVitals.VitalGroup[xx]["eVitals.13"].vSet[0].val);
                }
            };
            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.14"] !== 'undefined') {
                if (TC.eVitals.VitalGroup[xx]["eVitals.14"].IsNull == false) {
                    if (typeof e14 === 'undefined') {
                        var e14 = new Object();
                    };

                    e14.E14_11 = TC.eVitals.VitalGroup[xx]["eVitals.14"].vSet[0].val;
                }
            };
            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.15"] !== 'undefined') {
                if (TC.eVitals.VitalGroup[xx]["eVitals.15"].IsNull == false) {
                    if (typeof e14 === 'undefined') {
                        var e14 = new Object();
                    };

                    e14.E14_12 = cv.setV2("eVitals.15", TC.eVitals.VitalGroup[xx]["eVitals.15"].vSet[0].val);
                }
            };
            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.16"] !== 'undefined') {
                if (TC.eVitals.VitalGroup[xx]["eVitals.16"].IsNull == false) {
                    if (typeof e14 === 'undefined') {
                        var e14 = new Object();
                    };
                    e14.E14_13 = TC.eVitals.VitalGroup[xx]["eVitals.16"].vSet[0].val;
                }
            };
            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.18"] !== 'undefined') {
                if (TC.eVitals.VitalGroup[xx]["eVitals.18"].IsNull == false) {
                    if (typeof e14 === 'undefined') {
                        var e14 = new Object();
                    };
                    e14.E14_14 = TC.eVitals.VitalGroup[xx]["eVitals.18"].vSet[0].val;
                }
            };

            if (typeof TC.eVitals.VitalGroup[xx]["GlasgowScoreGroup"] !== 'undefined') {
                var gSCObj = TC.eVitals.VitalGroup[xx]["GlasgowScoreGroup"]

                if (typeof gSCObj["eVitals.19"] !== 'undefined') {
                    if (gSCObj["eVitals.19"].IsNull == false) {
                        if (typeof E14_15_0 === 'undefined') {
                            var E14_15_0 = new Object()
                        };
                        E14_15_0.E14_15 = gSCObj["eVitals.19"].vSet[0].val;
                    }
                };


                if (typeof gSCObj["eVitals.20"] !== 'undefined') {
                    if (gSCObj["eVitals.20"].IsNull == false) {
                        if (typeof E14_15_0 === 'undefined') {
                            var E14_15_0 = new Object()
                        };
                        E14_15_0.E14_16 = gSCObj["eVitals.20"].vSet[0].val;
                    }
                };


                if (typeof gSCObj["eVitals.21"] !== 'undefined') {
                    if (gSCObj["eVitals.21"].IsNull == false) {
                        if (typeof E14_15_0 === 'undefined') {
                            var E14_15_0 = new Object()
                        };
                        E14_15_0.E14_17 = gSCObj["eVitals.21"].vSet[0].val;
                    }
                };

                if (typeof gSCObj["eVitals.22"] !== 'undefined') {
                    if (gSCObj["eVitals.22"].IsNull == false) {
                        if (typeof E14_15_0 === 'undefined') {
                            var E14_15_0 = new Object()
                        };

                        E14_15_0.E14_18 = cv.setV2("eVitals.22", gSCObj["eVitals.22"].vSet[0].val);

                    }
                };

                if (typeof E14_15_0 !== 'undefined') {
                    if (typeof e14 === 'undefined') {
                        var e14 = new Object();
                    };
                    e14.E14_15_0 = E14_15_0;
                }

                if (typeof gSCObj["eVitals.23"] !== 'undefined') {
                    if (gSCObj["eVitals.23"].IsNull == false) {
                        if (typeof e14 === 'undefined') {
                            var e14 = new Object();
                        };
                        e14.E14_19 = gSCObj["eVitals.23"].vSet[0].val;
                    }
                }
            };
            if (typeof TC.eVitals.VitalGroup[xx]["TemperatureGroup"] !== 'undefined') {
                var tObj = TC.eVitals.VitalGroup[xx]["TemperatureGroup"]
                if (typeof tObj["eVitals.24"] !== 'undefined') {
                    if (tObj["eVitals.24"].IsNull == false) {
                        if (typeof E14_20_0 === 'undefined') {
                            var E14_20_0 = new Object();
                        };

                        E14_20_0.E14_20 = tObj["eVitals.24"].vSet[0].val;

                        if (typeof tObj["eVitals.25"] !== 'undefined') {
                            if (tObj["eVitals.25"].IsNull !== true) {

                                E14_20_0.E14_21 = cv.setV2("eVitals.25", tObj["eVitals.25"].vSet[0].val);
                            }
                        };
                        if (typeof e14 === 'undefined') {
                            var e14 = new Object();
                        };
                        e14.E14_20_0 = E14_20_0;
                    }
                }
            };
            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.26"] !== 'undefined') {
                if (TC.eVitals.VitalGroup[xx]["eVitals.26"].IsNull == false) {
                    if (typeof e14 === 'undefined') {
                        var e14 = new Object();
                    };
                    e14.E14_22 = cv.setV2("eVitals.26", TC.eVitals.VitalGroup[xx]["eVitals.26"].vSet[0].val);
                }
            };
            if (typeof TC.eVitals.VitalGroup[xx]["PainScaleGroup"] !== 'undefined') {
                if (typeof TC.eVitals.VitalGroup[xx]["PainScaleGroup"]["eVitals.27"] !== 'undefined') {
                    if (TC.eVitals.VitalGroup[xx]["PainScaleGroup"]["eVitals.27"].IsNull == false) {
                        if (typeof e14 === 'undefined') {
                            var e14 = new Object();
                        };
                        e14.E14_23 = TC.eVitals.VitalGroup[xx]["PainScaleGroup"]["eVitals.27"].vSet[0].val;
                    }
                }
            };
            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.29"] !== 'undefined') {
                if (TC.eVitals.VitalGroup[xx]["eVitals.29"].IsNull == false) {
                    if (typeof e14 === 'undefined') {
                        var e14 = new Object();
                    };
                    e14.E14_24 = cv.setV2("eVitals.29", TC.eVitals.VitalGroup[xx]["eVitals.29"].vSet[0].val);
                }
            };
            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.31"] !== 'undefined') {
                if (TC.eVitals.VitalGroup[xx]["eVitals.31"].IsNull == false) {
                    if (typeof e14 === 'undefined') {
                        var e14 = new Object();
                    };
                    e14.E14_25 = cv.setV2("eVitals.31", TC.eVitals.VitalGroup[xx]["eVitals.31"].vSet[0].val);
                }
            };

            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.32"] !== 'undefined') {
                if (TC.eVitals.VitalGroup[xx]["eVitals.32"].IsNull !== true) {
                    if (typeof e14 === 'undefined') {
                        var e14 = new Object();
                    };
                    e14.E14_26 = TC.eVitals.VitalGroup[xx]["eVitals.32"].vSet[0].val;
                }
            };
            if (typeof TC.eVitals.VitalGroup[xx]["eVitals.33"] !== 'undefined') {
                if (TC.eVitals.VitalGroup[xx]["eVitals.33"].IsNull == false) {
                    if (typeof e14 === 'undefined') {
                        var e14 = new Object();
                    };
                    e14.E14_27 = TC.eVitals.VitalGroup[xx]["eVitals.33"].vSet[0].val;
                }
            };
            if (typeof e14 !== 'undefined') {
                if (typeof E14Array === 'undefined') {
                    var E14Array = new Array();
                }
                E14Array.push(e14)
                e14 = undefined;
            }
        };
        if (typeof E14Array !== 'undefined') {
            if (E14Array.length > 0) {
                var E14 = new Object();
                E14 = E14Array;
            }
        }
    };
    return E14;
};