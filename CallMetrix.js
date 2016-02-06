exports.setCallMetrix = function (thecall) {
    var p = thecall.Props;
    var Metrix = Parse.Object.extend("CallMetrix");
    var metrix = new Metrix();
    if (typeof thecall.CallMetrixId !== 'undefined') {
        metrix.set("objectId", thecall.CallMetrixId);
    };
    if (typeof thecall.CallStatus !== 'undefined') {
        metrix.set("CallStatus", thecall.CallStatus);
    };
    
    
    if (p["CallDate"] !== "") {
        var P = getDateNumbers(p["CallDate"])        
        metrix.set["Week"] = m.weekNo;
        metrix.set["Month"] = m.monthStart;
        metrix.set["Day"] = m.weekDay;
        metrix.set["Year"] = m.YEAR
      
    };
    metrix.set("PCRID", p["PCRID"]);
    metrix.set("DispatchComplaint", p["DispatchComplaint"]);  
    metrix.set("DispatchEMDPerformed", p["DispatchEMDPerformed"]);
    metrix.set("DispatchCallLocation", p["DispatchCallLocation"]);
    metrix.set("DispatchPriority", p["DispatchPriority"]);
    metrix.set("DispoTo", p["DispoTo"]);
    metrix.set("DispoToCode", p["DispoToCode"]);
    metrix.set("DispoTransportMethod", p["DispoTransportMethod"]);
    metrix.set("DispoReasonForChoosing", p["DispoReasonForChoosing"]);
    metrix.set("DispoDestinationType", p["DispoDestinationType"]);
    metrix.set("TimePSAP", p["TimePSAP"]);
    metrix.set("TimeDispatchNotified", p["TimeDispatchNotified"]);
    metrix.set("TimeUnitNotified", p["TimeUnitNotified"]);
    metrix.set("TimeAcknowledged", p["TimeAcknowledged"]);
    metrix.set("TimeEnRoute", p["TimeEnRoute"]);
    metrix.set("TimeAtScene", p["TimeAtScene"]);
    metrix.set("TimeAtPatient", p["TimeAtPatient"]);
    metrix.set("TimeTransfer", p["TimeTransfer"]);
    metrix.set("TimeLeftScene", p["TimeLeftScene"]);
    metrix.set("TimeArrivalAtLanding", p["TimeArrivalAtLanding"]);
    metrix.set("TimePatientArrived", p["TimePatientArrived"]);
    metrix.set("TimeCancel", p["TimeCancel"]);
    metrix.set("TimeBackHome", p["TimeBackHome"]);
    metrix.set("TimeCallComplete", p["TimeCallComplete"]);
    metrix.set("RespAgencyNumber", p["RespAgencyNumber"]);
    metrix.set("RespAgencyName", p["RespAgencyName"]);
    metrix.set("RespIncidentNumber", p["RespIncidentNumber"]);
    metrix.set("RespTypeOfServiceRequest", p["RespTypeOfServiceRequest"]);
    metrix.set("RespStandByPurpose", p["RespStandByPurpose"]);
    metrix.set("RespDispatchDelay", p["RespDispatchDelay"]);
    metrix.set("ResponseDelay", p["ResponseDelay"]);
    metrix.set("RespSceneDelay", p["RespSceneDelay"]);
    metrix.set("RespTransportDelay", p["RespTransportDelay"]);
    metrix.set("RespTurnAroundDelay", p["RespTurnAroundDelay"]);
    metrix.set("RespRig#", p["RespRig#"]);
    metrix.set("RespUnitLevelOfCare", p["RespUnitLevelOfCare"]);
    metrix.set("RespBeginMileage", p["RespBeginMileage"]);
    metrix.set("RespOnSceneMiles", p["RespOnSceneMiles"]);
    metrix.set("RespDestinationMiles", p["RespDestinationMiles"]);
    metrix.set("RespEndMiles", p["RespEndMiles"]);
    metrix.set("RespResponseModeToScene", p["RespResponseModeToScene"]);
    metrix.set("RespAddResponseModeToScene", p["RespAddResponseModeToScene"]);
    metrix.set("RespTotalMiles", p["RespTotalMiles"]);
    //metrix.set("PatientFirstName", p["PatientFirstName"]);
    //metrix.set("PatientMiddleName", p["PatientMiddleName"]);
    //metrix.set("PatientLastName", p["PatientLastName"]);    
    //metrix.set("PatientZip", p["PatientZip"]);
    //metrix.set("PatientAge", p["PatientAge"]);
    metrix.set("HistBarriersToCare", p["HistBarriersToCare"]);
    //metrix.set("HistAdvancedDirectives", p["HistAdvancedDirectives"]);
    //metrix.set("CurrentMedications", p["CurrentMedications"]);
    //metrix.set("PresenceOfInformation", p["PresenceOfInformation"]);
    //metrix.set("AlcoholDrugUse", p["AlcoholDrugUse"]);
    metrix.set("Pregnancy", p["Pregnancy"]);
    metrix.set("LastOralIntake", p["LastOralIntake"]);
    metrix.set("PaymentType", p["PaymentType"]);
    metrix.set("ResidesInServiceArea", p["ResidesInServiceArea"]);
    metrix.set("Insurance", p["Insurance"]);
    metrix.set("Supplies", p["Supplies"]);
    metrix.set("FirstUnitOnScene", p["FirstUnitOnScene"]);
    metrix.set("OtherAgencies", p["OtherAgencies"]);
    metrix.set("LocationType", p["LocationType"]);
    metrix.set("FacilityName", p["FacilityName"]);
    metrix.set("Weight", p["Weight"]);
    metrix.set("Length", p["Length"]);
    //metrix.set("Procedures", p["Procedures"]);
    //metrix.set("Medications", p["Medications"]);
    //metrix.set("Protocols", p["Protocols"]);
    metrix.set("Crew", p["Crew"]);
    metrix.set("IntervalNotified", p["Intervals"]["IntervalNotified"]);
    metrix.set("IntervalUnitAck", p["Intervals"]["IntervalUnitAck"]);
    metrix.set("IntervalUnitEnRoute", p["Intervals"]["IntervalUnitEnRoute"]);
    metrix.set("IntervalUnitAtScene", p["Intervals"]["IntervalUnitAtScene"]);
    metrix.set("IntervalUnitAtPatient", p["Intervals"]["IntervalUnitAtPatient"]);
    metrix.set("IntervalUnitTransferToCare", p["Intervals"]["IntervalUnitTransferToCare"]);
    metrix.set("IntervalUnitLeftScene", p["Intervals"]["IntervalUnitLeftScene"]);
    metrix.set("IntervalUnitAtLanding", p["Intervals"]["IntervalUnitAtLanding"]);
    metrix.set("IntervalUnitPatientArrived", p["Intervals"]["IntervalUnitPatientArrived"]);
    metrix.set("IntervalUnitTransferCare", p["Intervals"]["IntervalUnitTransferCare"]);
    metrix.set("IntervalUnitBackInService", p["Intervals"]["IntervalUnitBackInService"]);
    metrix.set("IntervalUnitCancel", p["Intervals"]["IntervalUnitCancel"]);
    metrix.set("IntervalUnitHome", p["Intervals"]["IntervalUnitHome"]);
    metrix.set("IntevalUnitComplete", p["Intervals"]["IntevalUnitComplete"]);


    return metrix.save()
};

function getDateNumbers(d) {
    var monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
    ];
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    // Copy date so don't modify original
    d = new Date();
    console.log(d.getDay())
    var nn = d.getDay()
    d.setHours(0, 0, 0);
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setDate(d.getDate() + 4 - (d.getDay() || 7));
    // Get first day of year
    var yearStart = new Date(d.getFullYear(), 0, 1);
    var m = d.getMonth();
    var md = d.getDay();
    var weekDay = weekday[nn];

    var monthStart = monthNames[m];
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    // Return array of year and week number
    var YEAR = d.getFullYear()
    return [YEAR, weekNo, weekDay, monthStart];
};

