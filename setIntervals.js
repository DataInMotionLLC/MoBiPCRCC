var moment = require('moment');
exports.setIntervals = function (Times) {
    console.log("Intervals")
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
    tProps.IntevalUnitComplete="";
   
    if (typeof Times["eTimes.01"] !== 'undefined') {
        if (Times["eTimes.01"].IsNull == false) {            
            var PSAPTime = moment(Times["eTimes.01"].vSet[0].val)
            tProps.PSAPTime = moment(PSAPTime).format("HH:mm")
        }
    };
    if (typeof Times["eTimes.02"] !== 'undefined') {
        if (Times["eTimes.02"].IsNull == false) {
            var DispatchNotified = moment(Times["eTimes.02"].vSet[0].val)
            tProps.DispatchNotified = moment.utc(DispatchNotified).format("DDD/MM/YYY HH:mm:ss")
        }
    };

    if (typeof Times["eTimes.03"] !== 'undefined') {
        if (Times["eTimes.03"].IsNull == false) {
            if (typeof Times["eTimes.02"] !== 'undefined') {
                if (Times["eTimes.02"].IsNull == false) {
                    tProps.IntervalNotified = moment.utc(moment(Times["eTimes.03"].vSet[0].val, "DDD/MM/YYY HH:mm:ss").diff(moment(Times["eTimes.02"].vSet[0].val, "DDD/MM/YYY HH:mm:ss"))).format("HH:mm:ss")
                }
            }
            else
            {
                if (typeof Times["eTimes.01"] !== 'undefined') {
                    if (Times["eTimes.01"].IsNull == false) {
                        tProps.IntervalNotified = moment.utc(moment(Times["eTimes.03"].vSet[0].val, "DDD/MM/YYY HH:mm:ss").diff(moment(Times["eTimes.01"].vSet[0].val, "DDD/MM/YYY HH:mm:ss"))).format("HH:mm:ss")
                    }
                }
            }
            
        }        
    };
    
    if (typeof Times["eTimes.03"] !== 'undefined') {
        if (Times["eTimes.03"].IsNull == false) {

            if (typeof Times["eTimes.04"] !== 'undefined') {
                if (Times["eTimes.04"].IsNull == false) {
                    tProps.IntervalUnitAck = moment.utc(moment(Times["eTimes.04"].vSet[0].val, "DDD/MM/YYY HH:mm:ss").diff(moment(Times["eTimes.03"].vSet[0].val, "DDD/MM/YYY HH:mm:ss"))).format("HH:mm:ss")
                }
            };

            if (typeof Times["eTimes.05"] !== 'undefined') {
                if (Times["eTimes.05"].IsNull == false) {
                    tProps.IntervalUnitEnRoute = moment.utc(moment(Times["eTimes.05"].vSet[0].val, "DDD/MM/YYY HH:mm:ss").diff(moment(Times["eTimes.03"].vSet[0].val, "DDD/MM/YYY HH:mm:ss"))).format("HH:mm:ss")
                }
            };

            if (typeof Times["eTimes.06"] !== 'undefined') {
                if (Times["eTimes.06"].IsNull == false) {
                    tProps.IntervalUnitAtScene = moment.utc(moment(Times["eTimes.06"].vSet[0].val, "DDD/MM/YYY HH:mm:ss").diff(moment(Times["eTimes.03"].vSet[0].val, "DDD/MM/YYY HH:mm:ss"))).format("HH:mm:ss")
                }
            };

            if (typeof Times["eTimes.07"] !== 'undefined') {
                if (Times["eTimes.07"].IsNull == false) {
                    tProps.IntervalUnitAtPatient = moment.utc(moment(Times["eTimes.07"].vSet[0].val, "DDD/MM/YYY HH:mm:ss").diff(moment(Times["eTimes.03"].vSet[0].val, "DDD/MM/YYY HH:mm:ss"))).format("HH:mm:ss")
                }
            };

            if (typeof Times["eTimes.08"] !== 'undefined') {
                if (Times["eTimes.08"].IsNull == false) {
                    tProps.IntervalUnitTransferToCare = moment.utc(moment(Times["eTimes.08"].vSet[0].val, "DDD/MM/YYY HH:mm:ss").diff(moment(Times["eTimes.03"].vSet[0].val, "DDD/MM/YYY HH:mm:ss"))).format("HH:mm:ss")
                }
            };

            if (typeof Times["eTimes.09"] !== 'undefined') {
                if (Times["eTimes.09"].IsNull == false) {
                    tProps.IntervalUnitLeftScene = moment.utc(moment(Times["eTimes.09"].vSet[0].val, "DDD/MM/YYY HH:mm:ss").diff(moment(Times["eTimes.03"].vSet[0].val, "DDD/MM/YYY HH:mm:ss"))).format("HH:mm:ss")
                }
            };

            if (typeof Times["eTimes.10"] !== 'undefined') {
                if (Times["eTimes.10"].IsNull == false) {
                    tProps.IntervalUnitAtLanding = moment.utc(moment(Times["eTimes.10"].vSet[0].val, "DDD/MM/YYY HH:mm:ss").diff(moment(Times["eTimes.03"].vSet[0].val, "DDD/MM/YYY HH:mm:ss"))).format("HH:mm:ss")
                }
            };

            if (typeof Times["eTimes.11"] !== 'undefined') {
                if (Times["eTimes.11"].IsNull == false) {
                    tProps.IntervalUnitPatientArrived = moment.utc(moment(Times["eTimes.11"].vSet[0].val, "DDD/MM/YYY HH:mm:ss").diff(moment(Times["eTimes.03"].vSet[0].val, "DDD/MM/YYY HH:mm:ss"))).format("HH:mm:ss")
                }
            };


            if (typeof Times["eTimes.12"] !== 'undefined') {
                if (Times["eTimes.12"].IsNull == false) {
                    tProps.IntervalUnitTransferCare = moment.utc(moment(Times["eTimes.12"].vSet[0].val, "DDD/MM/YYY HH:mm:ss").diff(moment(Times["eTimes.03"].vSet[0].val, "DDD/MM/YYY HH:mm:ss"))).format("HH:mm:ss")
                }
            };

            if (typeof Times["eTimes.13"] !== 'undefined') {
                if (Times["eTimes.13"].IsNull == false) {
                    tProps.IntervalUnitBackInService = moment.utc(moment(Times["eTimes.13"].vSet[0].val, "DDD/MM/YYY HH:mm:ss").diff(moment(Times["eTimes.03"].vSet[0].val, "DDD/MM/YYY HH:mm:ss"))).format("HH:mm:ss")
                }
            };

            if (typeof Times["eTimes.14"] !== 'undefined') {
                if (Times["eTimes.14"].IsNull == false) {
                    tProps.IntervalUnitCancel = moment.utc(moment(Times["eTimes.14"].vSet[0].val, "DDD/MM/YYY HH:mm:ss").diff(moment(Times["eTimes.03"].vSet[0].val, "DDD/MM/YYY HH:mm:ss"))).format("HH:mm:ss")
                }
            };

            if (typeof Times["eTimes.15"] !== 'undefined') {
                if (Times["eTimes.15"].IsNull == false) {
                    tProps.IntervalUnitHome = moment.utc(moment(Times["eTimes.15"].vSet[0].val, "DDD/MM/YYY HH:mm:ss").diff(moment(Times["eTimes.03"].vSet[0].val, "DDD/MM/YYY HH:mm:ss"))).format("HH:mm:ss")
                }
            };

            if (typeof Times["eTimes.16"] !== 'undefined') {
                if (Times["eTimes.16"].IsNull == false) {
                    tProps.IntervalUnitComplete = moment.utc(moment(Times["eTimes.16"].vSet[0].val, "DDD/MM/YYY HH:mm:ss").diff(moment(Times["eTimes.03"].vSet[0].val, "DDD/MM/YYY HH:mm:ss"))).format("HH:mm:ss")
                    var IntevalUnitComplete = moment(Times["eTimes.16"].vSet[0].val)
                }
            }
        }
    };
    if (typeof tProps !== 'undefined')
    {
        //console.log(tProps)
        return (tProps)
    }
    else
    {
        return null
    }
    
};