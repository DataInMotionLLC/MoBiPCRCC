u = require('cloud/Utilities.js');
exports.setV2Mandatories = function (TheCall) {
    var retVal = true;
    if (typeof TheCall.Version2 === 'undefined') {
        retVal = false;
        u.RaiseError("Mandatory Object", -1, "setV2Mandatories", "");
    }
    else {
        var DS = new Object();
        DS = TheCall.Version2;
        ////////////////////////////////////
        if (typeof DS.E01 === 'undefined') {
            u.RaiseError("E01:Mandatory Object", -1, "setV2Mandatories", "");
            retVal = false;
        }
        else {

            if (typeof DS.E01.E01_01 === 'undefined') {
                u.RaiseError("E01_E01:Mandatory Object", -1, "setV2Mandatories", "");
                retVal = false;
                if (DS.E01.E01_01 === null) {
                    u.RaiseError("E01_E01:Mandatory Object", -1, "setV2Mandatories", "");
                    retVal = false;
                };

            };

            if (typeof DS.E01.E01_02 === 'undefined') {
                u.RaiseError("E01_E02:Mandatory Object", -1, "setV2Mandatories", "");
                retVal = false;
                if (DS.E01.E01_02 === null) {
                    u.RaiseError("E01_E02:Mandatory Object", -1, "setV2Mandatories", "");
                    retVal = false;
                }
            };
            if (typeof DS.E01.E01_03 === 'undefined') {
                u.RaiseError("E01_E03:Mandatory Object", -1, "setV2Mandatories", "");
                retVal = false;
                if (DS.E01.E01_03 === null) {
                    u.RaiseError("E01_E03:Mandatory Object", -1, "setV2Mandatories", "");
                    retVal = false;
                }
            };
            if (typeof DS.E01.E01_04 === 'undefined') {
                u.RaiseError("E01_E04:Mandatory Object", -1, "setV2Mandatories", "");
                retVal = false;
                if (DS.E01.E01_04 === null) {
                    u.RaiseError("E01_E04:Mandatory Object", -1, "setV2Mandatories", "");
                    retVal = false;
                }
            }
        }
    };
    ////////////////////////////////////
    if (typeof DS.E02 === 'undefined') {
        u.RaiseError("E02:Mandatory Object", -1, "setV2Mandatories", "");
        retVal = false;
    }
    else {

        if (typeof DS.E02.E02_01 === 'undefined') {
            u.RaiseError("E02.E02_01:Mandatory Object", -1, "setV2Mandatories", "");
            retVal = false;
            if (DS.E02.E02_01 === null) {
                u.RaiseError("E02.E02_01:Mandatory Object", -1, "setV2Mandatories", "");
                retVal = false;
            }
        };

        if (typeof DS.E02.E02_04 === 'undefined') {
            u.RaiseError("E02.E02_04:Mandatory Object", -1, "setV2Mandatories", "");
            retVal = false;
            if (DS.E02.E02_04 === null) {
                u.RaiseError("E02.E02_04:Mandatory Object", -1, "setV2Mandatories", "");
                retVal = false;
            }
        };


        if (typeof DS.E02.E02_05 === 'undefined') {
            u.RaiseError("E02.E02_05:Mandatory Object", -1, "setV2Mandatories", "");
            retVal = false;
            if (DS.E02.E02_05 === null) {
                u.RaiseError("E02.E02_05:Mandatory Object", -1, "setV2Mandatories", "");
                retVal = false;
            }
        };



        if (typeof DS.E02.E02_11 === 'undefined') {
            u.RaiseError("E02.E02_04:Mandatory Object", -1, "setV2Mandatories", "");
            retVal = false;
            if (DS.E02.E02_11 === null) {
                u.RaiseError("E02.E02_11:Mandatory Object", -1, "setV2Mandatories", "");
                retVal = false;
            }
        };

        if (typeof DS.E02.E02_13 === 'undefined') {
            u.RaiseError("E02.E02_04:Mandatory Object", -1, "setV2Mandatories", "");
            retVal = false;
            if (DS.E02.E02_13 === null) {
                u.RaiseError("E02.E02_13:Mandatory Object", -1, "setV2Mandatories", "");
                retVal = false;
            }
        };


        if (typeof DS.E02.E02_20 === 'undefined') {
            u.RaiseError("E02.E02_20:Mandatory Object", -1, "setV2Mandatories", "");
            retVal = false;
            if (DS.E02.E02_20 === null) {
                u.RaiseError("E02.E02_20:Mandatory Object", -1, "setV2Mandatories", "");
                retVal = false;
            }
        }
    };
    ////////////////////////////////////
    if (typeof DS.E03 === 'undefined') {
        u.RaiseError("E02_04:Mandatory Object", -1, "setV2Mandatories", "");
        retVal = false;
    }
    else {
        if (typeof DS.E03.E03_01 === 'undefined') {
            u.RaiseError("E03.E03_01:Mandatory Object", -1, "setV2Mandatories", "");
            retVal = false;
            if (DS.E03.E03_01 === null) {
                u.RaiseError("E03.E03_01:Mandatory Object", -1, "setV2Mandatories", "");
                retVal = false;
            }
        }
    };

    ////////////////////////////////////
    if (typeof DS.E05 === 'undefined') {
        u.RaiseError("E02_04:Mandatory Object", -1, "setV2Mandatories", "");
        retVal = false;
    }
    else {
        if (typeof DS.E05.E05_04 === 'undefined') {
            u.RaiseError("E05.E05_04:Mandatory Object", -1, "setV2Mandatories", "");
            retVal = false;
            if (DS.E05.E05_04 === null) {
                u.RaiseError("E05.E05_04:Mandatory Object", -1, "setV2Mandatories", "");
                retVal = false;
            };
        };

        if (typeof DS.E05.E05_011 === 'undefined') {
            u.RaiseError("E05.E05_011:Mandatory Object", -1, "setV2Mandatories", "");
            retVal = false;
            if (DS.E05.E05_011 == null) {
                u.RaiseError("E05.E05_011:Mandatory Object", -1, "setV2Mandatories", "");
                retVal = false;
            }
        }
    };

    ////////////////////////////////////
    if (typeof DS.E20 === 'undefined') {
        u.RaiseError("E02_04:Mandatory Object", -1, "setV2Mandatories", "");
        retVal = false;
    }
    else {
        if (typeof DS.E20.E20_10 === 'undefined') {
            u.RaiseError("E20.E20_10:Mandatory Object", -1, "setV2Mandatories", "");
            retVal = false;
            if (DS.E20.E20_10 === null) {
                u.RaiseError("E20.E20_10:Mandatory Object", -1, "setV2Mandatories", "");
                retVal = false;
            }
        }
    };
    return retVal;
};