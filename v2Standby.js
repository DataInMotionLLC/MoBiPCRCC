var u = require('cloud/Utilities.js');
exports.V2Standby = function (TheCall) {
    var NOTAPPLICABLE = "-25";
    var NOTRECORDED = "-20";
    var NOTAVAILABLE = "-5";
    var NOTREPORTING = "-15";
    if (typeof TheCall.Version2 === 'undefined') {
        return null;
    }
    else {
        var v2 = TheCall.Version2;

        var eDS = new Object();
        if (typeof v2.E01 !== 'undefined') {
            if (typeof E01 === 'undefined') {
                var E01 = new Object();
            };
            E01 = v2.E01;
        };

        if (typeof v2.E02 !== 'undefined') {

            if ((typeof v2.E02.E02_01 !== 'undefined') && (u.IsGo(v2.E02.E02_01) == true)) {
                if (typeof E02 === 'undefined') {
                    var E02 = new Object();
                };
                E02.E02_01 = v2.E02.E02_01;
            };
            if ((typeof v2.E02.E02_02 !== 'undefined') && (u.IsGo(v2.E02.E02_02) == true)) {
                if (typeof E02 === 'undefined') {
                    var E02 = new Object();
                };
                E02.E02_02 = v2.E02.E02_02;
            };

            if ((typeof v2.E02.E02_03 !== 'undefined') && (u.IsGo(v2.E02.E02_03) == true)) {
                if (typeof E02 === 'undefined') {
                    var E02 = new Object();
                };
                E02.E02_03 = v2.E02.E02_03;
            };

            if ((typeof v2.E02.E02_04 !== 'undefined') && (u.IsGo(v2.E02.E02_04) == true)) {
                if (typeof E02 === 'undefined') {
                    var E02 = new Object();
                };
                E02.E02_04 = v2.E02.E02_04;
            };

            if ((typeof v2.E02.E02_05 !== 'undefined') && (u.IsGo(v2.E02.E02_05) == true)) {
                if (typeof E02 === 'undefined') {
                    var E02 = new Object();
                };
                E02.E02_05 = v2.E02.E02_05;
            };

            if (typeof E02 === 'undefined') {
                var E02 = new Object();
            };
            E02.E02_06 = NOTRECORDED;
            E02.E02_07 = NOTRECORDED;
            E02.E02_08 = NOTAPPLICABLE;
            E02.E02_09 = NOTRECORDED;
            E02.E02_10 = NOTRECORDED;
            if ((typeof v2.E02.E02_12 !== 'undefined') && (u.IsGo(v2.E02.E02_12) == true)) {
                if (typeof E02 === 'undefined') {
                    var E02 = new Object();
                };
                E02.E02_12 = v2.E02.E02_12;
            };

            if ((typeof v2.E02.E02_20 !== 'undefined') && (u.IsGo(v2.E02.E02_20) == true)) {
                if (typeof E02 === 'undefined') {
                    var E02 = new Object();
                };
                E02.E02_20 = v2.E02.E02_20;
            }
        };


        E03.E03_01 = NOTAPPLICABLE;
        E03.E03_02 = NOTAVAILABLE;
        E03.E03_03 = NOTAPPLICABLE;


        if (typeof v2.E04 !== 'undefined') {
            for (var x = 0; x < TC.E04.length; x++) {
                if (typeof e04 === 'undefined') {
                    e04.E04_01 = v2.E04[i].E01;
                    e04.E04_02 = v2.E04[i].E02;
                    e04.E04_03 = v2.E04[i].E03;

                }
                if (typeof E04 === 'undefined') {
                    var E04 = new Array();
                }
                E04.push(e04);
            }
        };
        //all of eTimes
        if (typeof v2.E05 !== 'undefined') {
            eDS.E05 = v2.E05;
        };

        var E06_01_0 = new Object();
        E06_01_0.E06_01 = NOTAPPLICABLE;
        E06_01_0.E06_02 = NOTAPPLICABLE;
        E06_01_0.E06_03 = NOTAPPLICABLE;
        var E06 = new Object();
        E06.E06_01_0 = E06_01_0;

        var E06_04_0 = new Object();
        E06_04_0.E06_08 = NOTRECORDED;
        eDS.E06_11 = NOTAPPLICABLE;
        eDS.E06_12 = NOTAPPLICABLE;
        eDS.E06_13 = NOTAPPLICABLE;

        var E06_14_0 = new Object();
        E06_14_0.E06_14 = null;
        E06_14_0.E06_15 = NOTAPPLICABLE;
        eDS.E06 = E06;

        eDS.E07_01 = NOTRECORDED;
        eDS.E07_15 = "0";
        eDS.E07_34 = NOTRECORDED;
        var E07_35_0 = new Object();
        E07_35_0.E07_35 = NOTRECORDED;
        E07.E07_35_0 = E07_35_0;
        eDS.E07_37 = NOTRECORDED;

        if (typeof v2.E08 === 'undefined') {
            if (typeof E08 === 'undefined') {
                var E08 = new Object();
            };
            E08.E08_01 = NOTRECORDED;
            E08.E08_02 = NOTRECORDED;
            E08.E08_03 = NOTRECORDED;
            E08.E08_05 = NOTAPPLICABLE;
            E08.E08_06 = NOTAPPLICABLE;
            E08.E08_07 = NOTRECORDED;
            E08.E08_08 = NOTRECORDED;
            E08.E08_09 = NOTRECORDED;
            E08.E08_11 = NOTRECORDED;
            E08.E08_12 = NOTRECORDED;
            E08.E08_13 = NOTRECORDED;
            E08.E08_14 = NOTRECORDED;
            E08.E08_15 = NOTRECORDED;
        }
        else {
            if (typeof v2.E08.E08_01 !== 'undefined') {
                E08.E08_01 = v2.E08.E08_01;
            };
            if (typeof v2.E08.E08_02 !== 'undefined') {
                E08.E08_02 = v2.E08.E08_02;
            };
            if (typeof v2.E08.E08_03 !== 'undefined') {
                E08.E08_03 = v2.E08.E08_03;
            };

            if (typeof v2.E08.E08_04 !== 'undefined') {
                E08.E08_04 = v2.E08.E08_04;
            };

            if (typeof v2.E08.E08_05 !== 'undefined') {
                E08.E08_05 = v2.E08.E08_05;
            };

            if (typeof v2.E08.E08_06 !== 'undefined') {
                E08.E08_06 = v2.E08.E08_06;
            };

            if (typeof v2.E08.E08_07 !== 'undefined') {
                E08.E08_07 = v2.E08.E08_07;
            };

            if (typeof v2.E08.E08_08 !== 'undefined') {
                E08.E08_08 = v2.E08.E08_08;
            };

            if (typeof v2.E08.E08_09 !== 'undefined') {
                E08.E08_09 = v2.E08.E08_09;
            };

            if (typeof v2.E08.E08_10 !== 'undefined') {
                E08.E08_10 = v2.E08.E08_10;
            };

            if (typeof v2.E08.E08_11_0 !== 'undefined') {
                if (typeof E08_11_0 === 'undefined') {
                    var E08_11_0 = new Object();
                };
                if (typeof v2.E08.E08_11_0.E08_11 !== 'undefined') {
                    E08_11_0.E08_11 = v2.E08.E08_11_0.E08_11;
                };

                if (typeof v2.E08.E08_11_0.E08_12 !== 'undefined') {
                    E08_11_0.E08_12 = v2.E08.E08_11_0.E08_12;
                };

                if (typeof v2.E08.E08_11_0.E08_14 !== 'undefined') {
                    E08_11_0.E08_14 = v2.E08.E08_11_0.E08_14;
                };

                if (typeof v2.E08.E08_11_0.E08_15 !== 'undefined') {
                    E08_11_0.E08_15 = v2.E08.E08_11_0.E08_15;
                }
            };
            if (typeof v2.E08.E08_13 !== 'undefined') {
                E08.E08_13 = v2.E08.E08_13;
            }
        };
        if (typeof E09 === 'undefined') {
            var E09 = new Object();
        };
        E09.E09_01 = NOTAPPLICABLE;
        E09.E09_02 = NOTAPPLICABLE;
        E09.E09_03 = NOTAPPLICABLE;
        E09.E09_04 = NOTAPPLICABLE;
        E09.E09_11 = NOTRECORDED;
        E09.E09_12 = NOTAPPLICABLE;
        E09.E09_13 = NOTAPPLICABLE;
        E09.E09_15 = NOTAPPLICABLE;
        E09.E09_16 = NOTAPPLICABLE;

        if (typeof E10 === 'undefined') {
            var E10 = new Object();
        };
        E10.E10_10 = NOTAPPLICABLE;
        E10.E10_03 = NOTAPPLICABLE;
        E10.E10_08 = NOTAPPLICABLE;
        E10.E10_09 = NOTAPPLICABLE;


        if (typeof E11 === 'undefined') {
            var E11 = new Object();
        };
        E11.E11_01 = NOTAPPLICABLE;
        E11.E11_02 = NOTAPPLICABLE;
        E11.E11_03 = NOTAPPLICABLE;


        if (typeof E12 === 'undefined') {
            var E12 = new Object();
        };
        E12.E12_01 = NOTAPPLICABLE;
        E12.E12_18 = "0";
        E12.E12_19 = NOTAPPLICABLE;

        if (typeof E15 === 'undefined') {
            var E15 = new Object();
        };
        E15.E15_01 = NOTRECORDED;

        if (typeof E16 === 'undefined') {
            var E16 = new Object();
        };
        E16.E16_01 = "0";  //Why would estimated weight require a value on Standby?
        if (typeof E16_00_0 === 'undefined') {
            var E16_00_0 = new Object();
        };
        E16_00_0.E16_04 = NOTRECORDED;

        if (typeof E18 === 'undefined') {
            var E18 = new Object();
        };
        E18.E18_01 = null;
        E18.E18_03 = NOTAPPLICABLE;
        E18.E18_08 = NOTAPPLICABLE;


        if (typeof E19_01_0 === 'undefined') {
            var E19_01_0 = new Object();
        };
        if (typeof E19 === 'undefined') {
            var E19 = new Object();
        };

        E19_01_0.E19_03 = NOTAPPLICABLE;
        E19_01_0.E19_05 = NOTAPPLICABLE;
        E19_01_0.E19_06 = NOTAPPLICABLE;
        E19_01_0.E19_07 = NOTAPPLICABLE;


        if (typeof E20_03_0 === 'undefined') {
            var E20_03_0 = new Object();
        };
        if (typeof E20 === 'undefined') {
            var E20 = new Object();
        };
        E20.E20_02 = NOTRECORDED;
        E20_03_0.E20_07 = NOTAPPLICABLE;
        E20.E20_02 = NOTRECORDED;
        E20.E20_10 = "4815";
        E20.E20_14 = NOTAPPLICABLE;
        E20.E20_16 = NOTAPPLICABLE;
        E20.E20_17 = NOTAPPLICABLE;

        if (typeof E22 === 'undefined') {
            var E22 = new Object();
        };
        E22.E22_01 = NOTREPORTING;
        E22.E22_02 = NOTREPORTING;
        E22.E22_06 = NOTRECORDED;

        if (typeof E23 === 'undefined') {
            var E23 = new Object();
        };
        E23.E23_01 = NOTRECORDED;
        E23.E22_03 = NOTRECORDED;
        E23.E22_04 = NOTRECORDED;
        E23.E22_05 = "0";
        E23.E22_08 = "0";
    }
    if (typeof E01 !== 'undefined') {
        eDS.E01 = E01;
    };
    if (typeof E02 !== 'undefined') {
        eDS.E02 = E02;
    };
    if (typeof E03 !== 'undefined') {
        eDS.E03 = E03;
    };
    if (typeof E04 !== 'undefined') {
        eDS.E04 = E04;
    };
    if (typeof E05 !== 'undefined') {
        eDS.E05 = E05;
    };
    if (typeof E06 !== 'undefined') {
        eDS.E06 = E06;
    };
    if (typeof E07 !== 'undefined') {
        eDS.E07 = E07;
    };
    if (typeof E08 !== 'undefined') {
        eDS.E08 = E08;
    };
    if (typeof E09 !== 'undefined') {
        eDS.E09 = E09;
    };
    if (typeof E10 !== 'undefined') {
        eDS.E10 = E10;
    };
    if (typeof E11 !== 'undefined') {
        eDS.E11 = E11;
    };
    if (typeof E12 !== 'undefined') {
        eDS.E12 = E12;
    };
    if (typeof E13 !== 'undefined') {
        eDS.E13 = E13;
    };
    if (typeof E14 !== 'undefined') {
        eDS.E14 = E14;
    };
    if (typeof E15 !== 'undefined') {
        eDS.E15 = E15;
    };
    if (typeof E16 !== 'undefined') {
        eDS.E16 = E16;
    };
    if (typeof E17 !== 'undefined') {
        eDS.E17 = E17;
    };
    if (typeof E18 !== 'undefined') {
        eDS.E18 = E18;
    };
    if (typeof E19 !== 'undefined') {
        eDS.E19 = E19;
    };
    if (typeof E20 !== 'undefined') {
        eDS.E20 = E20;
    };
    if (typeof E21 !== 'undefined') {
        eDS.E21 = E21;
    };
    if (typeof E22 !== 'undefined') {
        eDS.E22 = E22;
    };
    if (typeof E23 !== 'undefined') {
        eDS.E23 = E23;
    };
    return eDS;
};
