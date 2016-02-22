u = require('cloud/Utilities.js');
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
    
    
    //if (p["CallDate"] !== "") {
    //    var ctime = ugetDateNumbers(p["CallDate"])
    //    metrix.set["Week"] = ctime.weekNumber;
    //    metrix.set["Month"] = ctime.monthStart;
    //    metrix.set["Day"] = ctime.weekDay;
    //    metrix.set["Year"] = ctime.YEAR4;
    //    metrix.set["MonthNumber"] = ctime.monthNumber;
    //};
    //metrix.set("RespAgencyName", p["RespAgencyName"]);
    //metrix.set("PaymentType", p["PaymentType"]);
    //metrix.set("IntervalNotified", p["Intervals"]["IntervalNotified"]);
    //metrix.set("IntervalUnitAck", p["Intervals"]["IntervalUnitAck"]);
    //metrix.set("IntervalUnitEnRoute", p["Intervals"]["IntervalUnitEnRoute"]);
    //metrix.set("IntervalUnitAtScene", p["Intervals"]["IntervalUnitAtScene"]);
    //metrix.set("IntervalUnitAtPatient", p["Intervals"]["IntervalUnitAtPatient"]);
    //metrix.set("PatientName", p["PatientName"]);
    //metrix.set("PatientDOB", p["PatientDOB"])
    //metrix.set("PatientAddress", p["PatientAddress"]);
    //metrix.set("PatientSSN4", p["SSN"]);
    //metrix.set("PatientGender", p["Gender"]);
    //metrix.set("PatientLocation", p["PatientLocation"]);
    //metrix.set("PatientBarriersToCare", p["HistBarriersToCare"]);
    //metrix.set("PatientPhone", p["PatientPhone"]);
    //metrix.set("PatientAddressLocation", p["PatientAddressLocation"]);
    //metrix.set("PCRID", p["PCRID"]);
    //metrix.set("DispatchComplaint", p["DispatchComplaint"]);
    //metrix.set("DispatchEMDPerformed", p["DispatchEMDPerformed"]);
    //metrix.set("DispatchCallLocation", p["DispatchCallLocation"]);
    //metrix.set("DispatchPriority", p["DispatchPriority"]);
    //metrix.set("DispoTo", p["DispoTo"]);
    //metrix.set("DispoToCode", p["DispoToCode"]);
    //metrix.set("DispoTransportMethod", p["DispoTransportMethod"]);
    //metrix.set("DispoReasonForChoosing", p["DispoReasonForChoosing"]);
    //metrix.set("DispoDestinationType", p["DispoDestinationType"]);
    //metrix.set("TimePSAP", p["TimePSAP"]);
    //metrix.set("TimeDispatchNotified", p["TimeDispatchNotified"]);
    //metrix.set("TimeUnitNotified", p["TimeUnitNotified"]);
    //metrix.set("TimeAcknowledged", p["TimeAcknowledged"]);
    //metrix.set("TimeEnRoute", p["TimeEnRoute"]);
    //metrix.set("TimeAtScene", p["TimeAtScene"]);
    //metrix.set("TimeAtPatient", p["TimeAtPatient"]);
    //metrix.set("TimeTransfer", p["TimeTransfer"]);
    //metrix.set("TimeLeftScene", p["TimeLeftScene"]);
    //metrix.set("TimeArrivalAtLanding", p["TimeArrivalAtLanding"]);
    //metrix.set("TimePatientArrived", p["TimePatientArrived"]);
    //metrix.set("TimeCancel", p["TimeCancel"]);
    //metrix.set("TimeBackHome", p["TimeBackHome"]);
    //metrix.set("TimeCallComplete", p["TimeCallComplete"]);
    //metrix.set("RespAgencyNumber", p["RespAgencyNumber"]);
    //metrix.set("RespAgencyName", p["RespAgencyName"]);
    //metrix.set("RespIncidentNumber", p["RespIncidentNumber"]);
    //metrix.set("RespTypeOfServiceRequest", p["RespTypeOfServiceRequest"]);
    //metrix.set("RespStandByPurpose", p["RespStandByPurpose"]);
    //metrix.set("RespDispatchDelay", p["RespDispatchDelay"]);
    //metrix.set("ResponseDelay", p["ResponseDelay"]);
    //metrix.set("RespSceneDelay", p["RespSceneDelay"]);
    //metrix.set("RespTransportDelay", p["RespTransportDelay"]);
    //metrix.set("RespTurnAroundDelay", p["RespTurnAroundDelay"]);

    //metrix.set("RespRig#", p["RespRig#"]);
    //metrix.set("RespUnitLevelOfCare", p["RespUnitLevelOfCare"]);
    //metrix.set("RespBeginMileage", p["RespBeginMileage"]);
    //metrix.set("RespOnSceneMiles", p["RespOnSceneMiles"]);
    //metrix.set("RespDestinationMiles", p["RespDestinationMiles"]);
    //metrix.set("RespEndMiles", p["RespEndMiles"]);
    //metrix.set("RespResponseModeToScene", p["RespResponseModeToScene"]);
    //metrix.set("RespAddResponseModeToScene", p["RespAddResponseModeToScene"]);
    //metrix.set("RespTotalMiles", p["RespTotalMiles"]);
    //metrix.set("HistAdvancedDirectives", p["HistAdvancedDirectives"]);
    //metrix.set("PresenceOfInformation", p["PresenceOfInformation"]);
    //metrix.set("AlcoholDrugUse", p["AlcoholDrugUse"]);
    //metrix.set("Pregnancy", p["Pregnancy"]);
    //metrix.set("LastOralIntake", p["LastOralIntake"]);
    //metrix.set("PaymentType", p["PaymentType"]);
    //metrix.set("ResidesInServiceArea", p["ResidesInServiceArea"]);
    //metrix.set("Insurance", p["Insurance"]);
    //metrix.set("Supplies", p["Supplies"]);
    //metrix.set("FirstUnitOnScene", p["FirstUnitOnScene"]);
    //metrix.set("OtherAgencies", p["OtherAgencies"]);
    //metrix.set("LocationType", p["LocationType"]);
    //metrix.set("FacilityName", p["FacilityName"]);
    //metrix.set("Weight", p["Weight"]);
    //metrix.set("Length", p["Length"]);
    //metrix.set("Crew", p["Crew"]);
    
    //metrix.set("IntervalUnitTransferToCare", p["Intervals"]["IntervalUnitTransferToCare"]);
    //metrix.set("IntervalUnitLeftScene", p["Intervals"]["IntervalUnitLeftScene"]);
    //metrix.set("IntervalUnitAtLanding", p["Intervals"]["IntervalUnitAtLanding"]);
    //metrix.set("IntervalUnitPatientArrived", p["Intervals"]["IntervalUnitPatientArrived"]);
    //metrix.set("IntervalUnitTransferCare", p["Intervals"]["IntervalUnitTransferCare"]);
    //metrix.set("IntervalUnitBackInService", p["Intervals"]["IntervalUnitBackInService"]);
    //metrix.set("IntervalUnitCancel", p["Intervals"]["IntervalUnitCancel"]);
    //metrix.set("IntervalUnitHome", p["Intervals"]["IntervalUnitHome"]);
    //metrix.set("IntevalUnitComplete", p["Intervals"]["IntevalUnitComplete"]);

    //var p = setRigsAtRunTime(thecall)
   // p.then(function (allRigs) {
    //});

    return metrix.save()
};


var setRigsAtRunTime = function (call) {
    var _pcrId = call.PCRID;
    var UU = Parse.Object.extend("AgencyRigsAtCallTime");
    if (typeof call.AllVehicles != 'undefined') {
        var ag = [];
        for (var i = 0; i < call.AllVehicles.length ; i++) {
            var uu = new UU();

            var ob = call.AllVehicles[i].attributes;

            uu.RigName = "Test";
            uu.RigLocation = null;
            uu.Status = "";
            uu.PCRID = _pcrId;
            uu.VehicleID = call.vehicleId;


            if (typeof ob.name != 'undefined') {
                uu.RigName = ob.name;
            }
            if (typeof ob.number != 'undefined') {
                uu.RigNumber = ob.number;
            }
            if (typeof ob.location != 'undefined') {
                uu.RigLocation = ob.location;
            }
            if (typeof ob.status != 'undefined') {
                uu.RigStatus = ob.status;
            };
            ag.push(uu)
        }
    }


    return Parse.Object.saveAll(ag, {
        success: function (objs) {
            console.log(objs);
        },
        error: function (error) {
            // an error occurred...
        }
    });
}