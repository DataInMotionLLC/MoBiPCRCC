v2SB = require('cloud/v2Standby.js');
u = require('cloud/Utilities.js');
cc = require('cloud/v2CompleteCall.js');
man = require('cloud/v2Mandatory.js');
x = require('cloud/Version2XML.js');
sa = require('cloud/E0114.js');
s15 = require('cloud/E15.js');
s16 = require('cloud/E1623.js');
exports.setV2Call = function (TheCall)
{

    try {
        var pe01 = sa.setE01(TheCall);
        if (pe01 !== null) {
            if (typeof v2Object === 'undefined') {
                var v2Object = new Object();
            };
            var v2Object = {};
            v2Object.E01 = pe01;
            u.setBuild("E01");
        };
    }
    catch (e) {
        u.RaiseError("Failed generating PCR Object", 0, "exports.setV2Call", e);
    };
    try {
        pe02 = sa.setE02(TheCall);
        if (pe02 !== null) {
            if (typeof v2Object === 'undefined') {
                var v2Object = new Object();
            };
            v2Object.E02 = pe02;
            u.setBuild("E02");
        };
    }
    catch (e) {
        u.RaiseError("Failed generating PCR Object", 0, "exports.setV2Call", e);
    };


    
    try {
        var pe03 = sa.setE03(TheCall);
        if (pe03 !== null) {
            if (typeof v2Object === 'undefined') {
                var v2Object = new Object();
            };
            v2Object.E03 = pe03;
            u.setBuild("E03");
        };
    }
    catch (e) {
        u.RaiseError("Failed generating PCR Object", 0, "exports.setV2Call", e);
    };


    try {
        pe04 = sa.setE04(TheCall);
        if (pe04 !== null) {
            if (typeof v2Object === 'undefined') {
                var v2Object = new Object();
            };
            v2Object.E04 = pe04;
            u.setBuild("E04");
        };
    }
    catch (e) {
        u.RaiseError("Failed generating PCR Object", 0, "exports.setV2Call", e);
    };

    try {
        pe05 = sa.setE05(TheCall);
        if (pe05 !== null) {
            if (typeof v2Object === 'undefined') {
                var v2Object = new Object();
            };
            v2Object.E05 = pe05;
            u.setBuild("E05");
        }
    }
    catch (e) {
        u.RaiseError("Failed generating PCR Object", 0, "exports.setV2Call", e);
    };

    try {
        pe06 = sa.setE06(TheCall);
        if (pe06 !== null) {
            if (typeof v2Object === 'undefined') {
                var v2Object = new Object();
            };
            v2Object.E06 = pe06;
            u.setBuild("E06");
        }
    }
    catch (e) {
        u.RaiseError("Failed generating PCR Object", 0, "exports.setV2Call", e);
    };

    try {
        pe07 = sa.setE07(TheCall);
        if (pe07 !== null) {
            if (typeof v2Object === 'undefined') {
                var v2Object = new Object();
            };
            v2Object.E07 = pe07;
            u.setBuild("E07");
        }
    }
    catch (e) {
        u.RaiseError("Failed generating PCR Object", 0, "exports.setV2Call", e);
    };

    try {
        pe08 = sa.setE08(TheCall);
        if (pe08 !== null) {
            if (typeof v2Object === 'undefined') {
                var v2Object = new Object();
            };
            v2Object.E08 = pe08;
            u.setBuild("E08");
        }
    }
    catch (e) {
        u.RaiseError("Failed generating PCR Object", 0, "exports.setV2Call", e);
    };


    try {
        pe09 = sa.setE09(TheCall);
        if (pe09 !== null) {
            if (typeof v2Object === 'undefined') {
                var v2Object = new Object();
            };
            v2Object.E09 = pe09;
            u.setBuild("E09");
        }
    }
    catch (e) {
        u.RaiseError("Failed generating PCR Object", 0, "exports.setV2Call", e);
    };

    try {
        pe10 = sa.setE10(TheCall);
        if (pe10 !== null) {
            if (typeof v2Object === 'undefined') {
                var v2Object = new Object();
            };
            v2Object.E10 = pe10;
            u.setBuild("E10");
        }
    }
    catch (e) {
        u.RaiseError("Failed generating PCR Object", 0, "exports.setV2Call", e);
    };

    try {
        pe11 = sa.setE11(TheCall);
        if (pe11 !== null) {
            if (typeof v2Object === 'undefined') {
                var v2Object = new Object();
            }
            v2Object.E11 = pe11;
            u.setBuild("E11");
        }
    }
    catch (e) {
        u.RaiseError("Failed generating PCR Object", 0, "exports.setV2Call", e);
    };

    try {
        pe12 = sa.setE12(TheCall);
        if (pe12 !== null) {
            if (typeof v2Object === 'undefined') {
                var v2Object = new Object();
            };
            v2Object.E12 = pe12;
            u.setBuild("E12");
        }
    }
    catch (e) {
        u.RaiseError("Failed generating PCR Object", 0, "exports.setV2Call", e);
    };

    try {
        pe13 = sa.setE13(TheCall);
        if (pe13 !== null) {
            if (typeof v2Object === 'undefined') {
                var v2Object = new Object();
            };
            v2Object.E13 = pe13;
    
            u.setBuild("E13");
        }
    }
    catch (e) {
        u.RaiseError("Failed generating PCR Object", 0, "exports.setV2Call", e);
    };

    try {
        pe14 = sa.setE14(TheCall);
        if (pe14 !== null) {
            if (typeof v2Object === 'undefined') {
                var v2Object = new Object();
            };
            v2Object.E14 = pe14;
            u.setBuild("E14");
        }
    }
    catch (e) {
        u.RaiseError("Failed generating PCR Object", 0, "exports.setV2Call", e);
    };
    
    try {
        ////pe15 = s15.setE15(TheCall);
        //if (pe15 !== null) {
        //    if (typeof v2Object === 'undefined') {
        //        var v2Object = new Object();
        //    };
        //    v2Object.E15 = pe15;
        //};
    }
    catch (e) {
        u.RaiseError("Failed generating PCR Object", 0, "exports.setV2Call", e);
    };

    try {
        pe16 = s16.setE16(TheCall);
        if (pe16 !== null) {
            if (typeof v2Object === 'undefined') {
                var v2Object = new Object();
            };
            v2Object.E16 = pe16;
            u.setBuild("E16");
        }
    }
    catch (e) {
        u.RaiseError("Failed generating PCR Object", 0, "exports.setV2Call", e);
    };

    try {
        pe17 = s16.setE17(TheCall);
        if (pe17 !== null) {
            if (typeof v2Object === 'undefined') {
                var v2Object = new Object();
            };
            v2Object.E17 = pe17;
            u.setBuild("E17");
        }
    }
    catch (e) {
        u.RaiseError("Failed generating PCR Object", 0, "exports.setV2Call", e);
    };


    try {
        pe18 = s16.setE18(TheCall);
        if (pe18 !== null) {
            if (typeof v2Object === 'undefined') {
                var v2Object = new Object();
            };
            v2Object.E18 = pe18;
            u.setBuild("E18");
        }
    }
    catch (e) {
        u.RaiseError("Failed generating PCR Object", 0, "exports.setV2Call", e);
    };

    try {
        pe19 = s16.setE19(TheCall);
        if (pe19 !== null) {
            if (typeof v2Object === 'undefined') {
                var v2Object = new Object();
            };
            v2Object.E19 = pe19;
            u.setBuild("E19");
        }
    }
    catch (e) {
        u.RaiseError("Failed generating PCR Object", 0, "exports.setV2Call", e);
    };

    try {
        pe20 = s16.setE20(TheCall);
        if (pe20 !== null) {
            if (typeof v2Object === 'undefined') {
                var v2Object = new Object();
            };
            v2Object.E20 = pe20;
            u.setBuild("E20");
        }
    }
    catch (e) {
        u.RaiseError("Failed generating PCR Object", 0, "exports.setV2Call", e);
    };


    try {
        pe21 = s16.setE21(TheCall);
        if (pe21 !== null) {
            if (typeof v2Object === 'undefined') {
                var v2Object = new Object();
            };
            v2Object.E21 = pe21;
            u.setBuild("E21");
        }
    }
    catch (e) {
        u.RaiseError("Failed generating PCR Object", 0, "exports.setV2Call", e);
    };


    try {
        pe22 = s16.setE22(TheCall);
        if (pe22 !== null) {
            if (typeof v2Object === 'undefined') {
                var v2Object = new Object();
            };
            v2Object.E22 = pe22;
            u.setBuild("E22");
        }
    }
    catch (e) {
        u.RaiseError("Failed generating PCR Object", 0, "exports.setV2Call", e);
    };

    try {
        pe23 = s16.setE23(TheCall);
        if (pe23 !== null) {
            if (typeof v2Object === 'undefined') {
                var v2Object = new Object();
            };
            v2Object.E23 = pe23;
            u.setBuild("E23");
        }
    }
    catch (e) {
        u.RaiseError("Failed generating PCR Object", 0, "exports.setV2Call", e);
    };

    if (typeof v2Object !== 'undefined') {
        TheCall.Version2 = v2Object;
        //set Standby
        if (TheCall.Props["CallType"] == "Standby") {
            try {
                var v2XMLReady = v2SB.V2Standby(TheCall);

            }
            catch (e) {
                u.RaiseError("ManV2 = setV2Mandatories(v2XMLReady)", -1, "V2Call", e);
            }
        }
        else {
            //Check/verify mandatories        
            try {
                var ManV2 = true;
                ManV2 = man.setV2Mandatories(TheCall);
                if (ManV2 == false) {
                    u.RaiseError("Malformed PCR:  Missing Elements", -1, "V2Call", e);
                    return null;
                }
            }
            catch (e) {
                u.RaiseError("ManV2 = setV2Mandatories(v2XMLReady)", -1, "V2Call", e);
            };



            ////If No Fatal, generate XML
            //Complete the Call, set Not Values
            try {
                var v2XMLReady = cc.V2CompleteCall(TheCall)
            }
            catch (e) {
                u.RaiseError("ManV2 = setV2Mandatories(v2XMLReady)", -1, "V2Call", e);
            }

            //        };
            if (typeof v2XMLReady !== 'undefined') {
                var v2XML = x.setV2XML(v2XMLReady);
                TheCall.Version2.XML = v2XML
            }

            //        //return retObj;
            return TheCall.Version2;
        }
    };
    return null;
};