var u = require('cloud/Utilities.js');
exports.setCallSummary = function (TheCall) {
    var summaryArray = new Array();
    
    if (typeof TheCall.Props === 'undefined') {
        u.RaiseError("setCallSummary", 100, "Undefined TheCall.Props Object", "setCallSummary");
        return null;
    };
    var BO = TheCall.Props;
    if (typeof TheCall.Props.Intervals === 'undefined') {
        u.RaiseError("setCallSummary", 100, "Undefined TheCall.Props Object", "setCallSummary");
        return "No Intervals";
    };
    

    
    //PCRID:  Complaint:  Begin Time.  End Time.  Duration
    //Rig     Begin Mileage  End Mileage  Total Mileage
    //Crew    Role     Name
    //Disposition   Reason  Signatures(Yes, No)
    //Transactions  Face Sheet  PCR
    //Payment  
    //Errors
    //Rules

    var p = "Summary";
    summaryArray.push(p);
    ////Call Status:  Complete, In Progress, Pending (pending what)
    var p = "";
    if (BO["PCRID"] !== "") {
        p = p + setLine("Call: " + BO["PCRID"]);
    }
    p = p + "\t"
    p = p + "\t"
    if (BO["CallDate"] !== "") {
        p = p + setLine("Date: " + BO["CallDate"]);
    }
    summaryArray.push(p);
    var p = "";
    if (BO["TimeDispatchNotified"] !== "") {
        p = p + setLine("Notified: " + BO["TimeDispatchNotified"]);
    }
    p = p + "\t"
    if (BO["TimeAcknowledged"] !== "") {
        p = p + setLine("Acknowledged: " + BO["TimeAcknowledged"]);
    };
    
    p = p + "\t"
    if (BO["TimeAtScene"] !== "") {
        p = p + setLine("At Scene: " + BO["TimeAtScene"]);
    }
    
    summaryArray.push(p);
    return summaryArray;
};

var setLine = function (val) {
    //console.log(val)
    var ret = "";
    if (val == null) {
        ret = null
    }
    else {
        ret = val;
    }
    return ret;
};
