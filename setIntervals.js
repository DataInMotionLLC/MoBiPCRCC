var mom = require('cloud/moment.js');
var u = require('cloud/Utilities.js');
exports.setIntervals = function (TheCall)
{
    var Times = TheCall.Version3.eTimes
    var tProps = new Object()
    tProps.IntervalNotified="";
    tProps.IntervalUnitAck="";
    tProps.IntervalUnitEnRoute="";
    tProps.IntervalUnitAtScene="";
    tProps.IntervalUnitAtPatient="";
    tProps.IntervalUnitTransferToCare="";
    tProps.IntervalUnitLeftScene="";
    tProps.IntervalUnitAtLanding="";
    tProps.IntervalUnitPatientArrived="";
    tProps.IntervalUnitTransferCare="";
    tProps.IntervalUnitBackInService="";
    tProps.IntervalUnitCancel="";
    tProps.IntervalUnitHome="";
    tProps.IntevalUnitComplete = "";
    tProps.alltimes  = Times
   
    var latestTime = new Date();
    if ((typeof Times["eTimes.01"] !== 'undefined') && (Times["eTimes.01"].IsNull == false)) {
        var PSAPTime = mom(Times["eTimes.01"].vSet[0].val).format("HH:mm")
        tProps.PSAPTime = Times["eTimes.01"].vSet[0].val;
        
    }
    else {
        tProps.PSAPTime = TheCall.CreatedDate;
        tProps["CreatedDate"] = mom(TheCall.CreatedDate).utc().format("MM/DD/YYYY HH:mm");
    };

    tProps.latestTime = tProps.PSAPTime;
        
    if (typeof Times["eTimes.02"] !== 'undefined') {
        if (Times["eTimes.02"].IsNull == false) {
            if (typeof tProps["CreatedDate"] == 'undefined') {
                tProps["CreatedDate"] = mom(Times["eTimes.01"].vSet[0].val).utc().format("MM/DD/YYYY HH:mm")
            }
            else if (tProps["CreatedDate"] == '') {
                tProps["CreatedDate"] = mom(Times["eTimes.01"].vSet[0].val).utc().format("MM/DD/YYYY  HH:mm");
            }
            else {
                tProps["CreatedDate"] = mom(Times["eTimes.01"].vSet[0].val).utc().format("MM/DD/YYYY HH:mm");
            };
            tProps.IntervalDispatchNotified = setLapse(Times["eTimes.02"].vSet[0].val, tProps.latestTime);
            tProps.latestTime = Times["eTimes.02"].vSet[0].val;
        }
    };


    if ((typeof Times["eTimes.03"] !== 'undefined') &&(Times["eTimes.03"].IsNull == false)) {
        if (typeof Times["eTimes.03"].vSet[0].val !== 'undefined')
            {
            if (typeof tProps["CreatedDate"] == 'undefined')
            {
                tProps["CreatedDate"] = mom(Times["eTimes.01"].vSet[0].val).utc().format("MM/DD/YYYY");
            }
            else if (tProps["CreatedDate"] == '') {
                tProps["CreatedDate"] = mom(Times["eTimes.01"].vSet[0].val).utc().format("MM/DD/YYYY");
            }
            else {
                tProps["CreatedDate"] = mom(Times["eTimes.01"].vSet[0].val).utc().format("MM/DD/YYYY");
            };
                    
            tProps.IntervalNotified = setLapse(Times["eTimes.03"].vSet[0].val, tProps.latestTime);
            tProps.latestTime = Times["eTimes.03"].vSet[0].val;
        }
    };
    
    if (typeof Times["eTimes.04"] !== 'undefined') {
        if (Times["eTimes.04"].IsNull == false) {            
            tProps.IntervalUnitAck = setLapse(Times["eTimes.04"].vSet[0].val, tProps.latestTime);
            tProps.latestTime = Times["eTimes.04"].vSet[0].val;
        }
    };

    if (typeof Times["eTimes.05"] !== 'undefined') {
        if (Times["eTimes.05"].IsNull == false) {
            tProps.IntervalUnitEnRoute = setLapse(Times["eTimes.05"].vSet[0].val, tProps.latestTime);
            tProps.latestTime = Times["eTimes.05"].vSet[0].val;
        }
    };

    if (typeof Times["eTimes.06"] !== 'undefined') {
        if (Times["eTimes.06"].IsNull == false) {
            tProps.IntervalUnitAtScene = setLapse(Times["eTimes.06"].vSet[0].val, tProps.latestTime);
            tProps.latestTime = Times["eTimes.06"].vSet[0].val;
        }
    };

    if (typeof Times["eTimes.08"] !== 'undefined') {
        if (Times["eTimes.08"].IsNull == false) {
            tProps.IntervalUnitTransferToCare = setLapse(Times["eTimes.08"].vSet[0].val, tProps.latestTime);
            tProps.latestTime = Times["eTimes.08"].vSet[0].val;
        }
    };

    if (typeof Times["eTimes.09"] !== 'undefined') {
        if (Times["eTimes.09"].IsNull == false) {
            tProps.IntervalUnitLeftScene = setLapse(Times["eTimes.09"].vSet[0].val, tProps.latestTime);
            tProps.latestTime = Times["eTimes.09"].vSet[0].val
        }
    };

    if (typeof Times["eTimes.10"] !== 'undefined') {
        if (Times["eTimes.10"].IsNull == false) {
            tProps.IntervalUnitAtLanding = setLapse(Times["eTimes.10"].vSet[0].val, tProps.latestTime);
            tProps.latestTime = Times["eTimes.10"].vSet[0].val
        }
    };

    if (typeof Times["eTimes.11"] !== 'undefined') {
        if (Times["eTimes.11"].IsNull == false) {
            tProps.IntervalUnitPatientArrived = setLapse(Times["eTimes.11"].vSet[0].val, tProps.latestTime);
            tProps.latestTime = Times["eTimes.11"].vSet[0].val
        }
    };


    if (typeof Times["eTimes.12"] !== 'undefined') {
        if (Times["eTimes.12"].IsNull == false) {
            tProps.IntervalUnitTransferCare = setLapse(Times["eTimes.12"].vSet[0].val, tProps.latestTime);
            tProps.latestTime = Times["eTimes.12"].vSet[0].val;
        }
    };

    if (typeof Times["eTimes.13"] !== 'undefined') {
        if (Times["eTimes.13"].IsNull == false) {
            tProps.IntervalUnitBackInService = setLapse(Times["eTimes.13"].vSet[0].val, tProps.latestTime);
            tProps.latestTime = Times["eTimes.13"].vSet[0].val;
        }
    };

    if (typeof Times["eTimes.14"] !== 'undefined') {
        if (Times["eTimes.14"].IsNull == false) {
            tProps.IntervalUnitCancel = setLapse(Times["eTimes.14"].vSet[0].val, tProps.latestTime);
            tProps.latestTime = Times["eTimes.14"].vSet[0].val;
        }
    };

    if (typeof Times["eTimes.15"] !== 'undefined') {
        if (Times["eTimes.15"].IsNull == false) {
            tProps.IntervalUnitHome = setLapse(Times["eTimes.15"].vSet[0].val, tProps.latestTime);
            tProps.latestTime = Times["eTimes.15"].vSet[0].val
        }
    };

    if (typeof Times["eTimes.16"] !== 'undefined') {
        if (Times["eTimes.16"].IsNull == false) {
            tProps.IntervalUnitComplete = setLapse(Times["eTimes.16"].vSet[0].val, tProps.latestTime);
        }
    };
    if (typeof tProps !== 'undefined')
    {
        return (tProps)
    }
    else
    {
        return null
    }
};

var setLapse = function (time1, time2) {
    if (typeof time1 === 'undefined') {
        return 0;
    };
    if (typeof time2 === 'undefined') {
        return 0;
    };
    var tt1 = mom(time1).format("HH:mm:ss")
    var tt2 = mom(time2).format("HH:mm:ss")

    var t1 = mom(time1)
    var t2 = mom(time2)
    var ret = mom(t1.diff(t2)).format('m')    
    return ret;

};

