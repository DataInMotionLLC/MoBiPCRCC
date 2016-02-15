var Utils = require('cloud/UtilitiesCC.js');
var jsXML = require('cloud/JSXMLWriterCC.js');
exports.setMonthlyXML = function (call) {
    if(typeof call == 'undefined')
    {
        throw "setMonthlyXML:  undefined call";  
        return null;
    };
    if(typeof call.Props == 'undefined')
    {
        throw "setMonthlyXML:  undefined call Properties";   
        return null;
    };
    var obj = call.Props;
    //var XML = new jsXML.XMLWriter('UTF-8', '1.0');
    var XML = new XMLWriter('UTF-8', '1.0');

    console.log(callMetrix)
    XML.WSD();

    XML.WSE('CallMetrix');
    XML.WAS('xmlns:xsi', "http://www.w3.org/2001/XMLSchema-instance");
    XML.WAS('xsi:schemaLocation', "http://www.nemsis.org http://nemsis.org/media/XSD_v3/_nemsis_v3.3.4/3.3.4.140328/XSDs/NEMSIS_XSDs_v3.3.4.140328/EMSDataSet_v3.xsd  xmlns:xsi=http://www.w3.org/2001/XMLSchema-instance");

    if (IsOk(obj["CallDate"]) == true) {
        XML.WES("CallDate", obj["CallDate"]);
    };

    if (IsOk(obj["Week"]) == true) {
        XML.WES("Week", obj["Week"]);
    };
    if (IsOk(obj["Month"]) == true) {
        XML.WES("Month", obj["Month"]);
    };
    if (IsOk(obj["Day"]) == true) {
        XML.WES("Day", obj["Day"]);
    };
    if (IsOk(obj["Year"]) == true) {
        XML.WES("Year", obj["Year4"]);
    };
    if (IsOk(obj["PatientDOB"]) == true) {
        XML.WES("PatientDOB", escapeXml(obj["PatientDOB"]));
    };
    if (IsOk(obj["PatientAddress"]) == true) {
        XML.WES("PatientAddress", escapeXml(obj["PatientAddress"]));
    };
    if (IsOk(obj["PatientSSN4"]) == true) {
        XML.WES("PatientSSN4", escapeXml(obj["PatientSSN4"]));
    };
    if (IsOk(obj["PatientSSN4"]) == true) {
        XML.WES("PatientSSN4", escapeXml(obj["PatientSSN4"]));
    };
    if (IsOk(obj["PatientGender"]) == true) {
        XML.WES("PatientGender", escapeXml(obj["PatientGender"]));
    };
    if (IsOk(obj["PatientLocation"]) == true) {
        XML.WES("PatientLocation", escapeXml(obj["PatientLocation"]));
    };
    if (obj["PatientBarriersToCare"].length > 0) {
        for (var i = 0; i < obj["PatientBarriersToCare"].length; i++) {
            if (IsOk(obj["PatientBarriersToCare"][i]) == true) {
                XML.WES("PatientBarriersToCare", escapeXml(obj["PatientBarriersToCare"][i]));
            }
        }
    };

    if (IsOk(obj["PatientAddressLocation"]) == true) {
        XML.WES("PatientAddressLocation", escapeXml(obj["PatientAddressLocation"]));
    };
    if (IsOk(obj["PCRID"]) == true) {
        XML.WES("PCRID", escapeXml(obj["PCRID"]));
    };
    if (IsOk(obj["DispatchComplaint"]) == true) {
        XML.WES("DispatchComplaint", escapeXml(obj["DispatchComplaint"]));
    };
    if (IsOk(obj["DispatchEMDPerformed"]) == true) {
        XML.WES("DispatchEMDPerformed", escapeXml(obj["DispatchEMDPerformed"]));
    };
    if (IsOk(obj["DispatchCallLocation"]) == true) {
        XML.WES("DispatchCallLocation", escapeXml(obj["DispatchCallLocation"]));
    };
    if (IsOk(obj[""]) == true) {
        XML.WES("", escapeXml(obj[""]));
    };
    if (IsOk(obj["DispatchPriority"]) == true) {
        XML.WES("DispatchPriority", escapeXml(obj["DispatchPriority"]));
    };
    if (IsOk(obj["DispoTo"]) == true) {
        XML.WES("DispoTo", escapeXml(obj["DispoTo"]));
    };
    if (IsOk(obj["DispoToCode"]) == true) {
        XML.WES("DispoToCode", escapeXml(obj["DispoToCode"]));
    };

    if (IsOk(obj["DispoTransportMethod"]) == true) {
        XML.WES("DispoTransportMethod", escapeXml(obj["DispoTransportMethod"]));
    };
    if (IsOk(obj["DispoReasonForChoosing"]) == true) {
        XML.WES("DispoReasonForChoosing", escapeXml(obj["DispoReasonForChoosing"]));
    };
    if (IsOk(obj["DispoDestinationType"]) == true) {
        XML.WES("DispoDestinationType", escapeXml(obj["DispoDestinationType"]));
    };
    if (IsOk(obj["TimePSAP"]) == true) {
        XML.WES("TimePSAP", escapeXml(obj["TimePSAP"]));
    };
    if (IsOk(obj["TimeDispatchNotified"]) == true) {
        XML.WES("TimeDispatchNotified", escapeXml(obj["TimeDispatchNotified"]));
    };
    if (IsOk(obj["TimeUnitNotified"]) == true) {
        XML.WES("TimeUnitNotified", escapeXml(obj["TimeUnitNotified"]));
    };    
    if (IsOk(obj["TimeAcknowledged"]) == true) {
        XML.WES("TimeAcknowledged", escapeXml(obj["TimeAcknowledged"]));
    };
    if (IsOk(obj["TimeEnRoute"]) == true) {
        XML.WES("TimeEnRoute", escapeXml(obj["TimeEnRoute"]));
    };
    if (IsOk(obj["TimeAtScene"]) == true) {
        XML.WES("TimeAtScene", escapeXml(obj["TimeAtScene"]));
    };
    if (IsOk(obj["TimeAtPatient"]) == true) {
        XML.WES("TimeAtPatient", escapeXml(obj["TimeAtPatient"]));
    };
    if (IsOk(obj["TimeTransfer"]) == true) {
        XML.WES("TimeTransfer", escapeXml(obj["TimeTransfer"]));
    };
    if (IsOk(obj["TimeLeftScene"]) == true) {
        XML.WES("TimeLeftScene", escapeXml(obj["TimeLeftScene"]));
    };
    if (IsOk(obj["TimeArrivalAtLanding"]) == true) {
        XML.WES("TimeArrivalAtLanding", escapeXml(obj["TimeArrivalAtLanding"]));
    };
    if (IsOk(obj["TimePatientArrived"]) == true) {
        XML.WES("TimePatientArrived", escapeXml(obj["TimePatientArrived"]));
    };
    if (IsOk(obj["TimeCancel"]) == true) {
        XML.WES("TimeCancel", escapeXml(obj["TimeCancel"]));
    };
    if (IsOk(obj["TimeBackHome"]) == true) {
        XML.WES("TimeBackHome", escapeXml(obj["TimeBackHome"]));
    };
    if (IsOk(obj["TimeCallComplete"]) == true) {
        XML.WES("TimeCallComplete", escapeXml(obj["TimeCallComplete"]));
    };
    if (IsOk(obj["RespAgencyNumber"]) == true) {
        XML.WES("RespAgencyNumber", escapeXml(obj["RespAgencyNumber"]));
    };
    if (IsOk(obj["RespAgencyName"]) == true) {
        XML.WES("RespAgencyName", escapeXml(obj["RespAgencyName"]));
    };
    if (IsOk(obj["RespIncidentNumber"]) == true) {
        XML.WES("RespIncidentNumber", escapeXml(obj["RespIncidentNumber"]));
    };
    if (IsOk(obj["RespTypeOfServiceRequest"]) == true) {
        XML.WES("RespTypeOfServiceRequest", escapeXml(obj["RespTypeOfServiceRequest"]));
    };
    if (IsOk(obj["RespStandByPurpose"]) == true) {
        XML.WES("RespStandByPurpose", escapeXml(obj["RespStandByPurpose"]));
    };
    if (IsOk(obj["RespDispatchDelay"]) == true) {
        XML.WES("RespDispatchDelay", escapeXml(obj["RespDispatchDelay"]));
    };
    if (IsOk(obj["ResponseDelay"]) == true) {
        XML.WES("ResponseDelay", escapeXml(obj["ResponseDelay"]));
    };
    if (IsOk(obj["RespSceneDelay"]) == true) {
        XML.WES("RespSceneDelay", escapeXml(obj["RespSceneDelay"]));
    };
    if (IsOk(obj["RespTransportDelay"]) == true) {
        XML.WES("RespTransportDelay", escapeXml(obj["RespTransportDelay"]));
    };

    if (IsOk(obj["RespTurnAroundDelay"]) == true) {
        XML.WES("RespTurnAroundDelay", escapeXml(obj["RespTurnAroundDelay"]));
    };
    if (IsOk(obj["RespRig#"]) == true) {
        XML.WES("RespRig#", escapeXml(obj["RespRig#"]));
    };
    if (IsOk(obj["RespUnitLevelOfCare"]) == true) {
        XML.WES("RespUnitLevelOfCare", escapeXml(obj["RespUnitLevelOfCare"]));
    };
    if (IsOk(obj["RespBeginMileage"]) == true) {
        XML.WES("RespBeginMileage", escapeXml(obj["RespBeginMileage"]));
    };
    if (IsOk(obj["RespOnSceneMiles"]) == true) {
        XML.WES("RespOnSceneMiles", escapeXml(obj["RespOnSceneMiles"]));
    };
    if (IsOk(obj["RespDestinationMiles"]) == true) {
        XML.WES("RespDestinationMiles", escapeXml(obj["RespDestinationMiles"]));
    };
    if (IsOk(obj["RespEndMiles"]) == true) {
        XML.WES("RespEndMiles", escapeXml(obj["RespEndMiles"]));
    };
    if (IsOk(obj["RespResponseModeToScene"]) == true) {
        XML.WES("RespResponseModeToScene", escapeXml(obj["RespResponseModeToScene"]));
    };
    if (IsOk(obj["RespAddResponseModeToScene"]) == true) {
        XML.WES("RespAddResponseModeToScene", escapeXml(obj["RespAddResponseModeToScene"]));
    };
    if (IsOk(obj["RespTotalMiles"]) == true) {
        XML.WES("RespTotalMiles", escapeXml(obj["RespTotalMiles"]));
    };
    if (IsOk(obj["HistAdvancedDirectives"]) == true) {
        XML.WES("HistAdvancedDirectives", escapeXml(obj["HistAdvancedDirectives"]));
    };
    if (IsOk(obj["PresenceOfInformation"]) == true) {
        XML.WES("PresenceOfInformation", escapeXml(obj["PresenceOfInformation"]));
    };
    if (IsOk(obj["AlcoholDrugUse"]) == true) {
        XML.WES("AlcoholDrugUse", escapeXml(obj["AlcoholDrugUse"]));
    };
    if (IsOk(obj["Pregnancy"]) == true) {
        XML.WES("Pregnancy", escapeXml(obj["Pregnancy"]));
    };
    if (IsOk(obj["LastOralIntake"]) == true) {
        XML.WES("LastOralIntake", escapeXml(obj["LastOralIntake"]));
    };
    if (IsOk(obj["PaymentType"]) == true) {
        XML.WES("PaymentType", escapeXml(obj["PaymentType"]));
    };
    if (IsOk(obj["ResidesInServiceArea"]) == true) {
        XML.WES("ResidesInServiceArea", escapeXml(obj["ResidesInServiceArea"]));
    };
    if (IsOk(obj["Insurance"]) == true) {
        XML.WES("Insurance", escapeXml(obj["Insurance"]));
    };

    if (obj["Supplies"].length > 0) {
        for (var i = 0; i < obj["Supplies"].length; i++) {
            if (IsOk(obj["Supplies"][i]) == true) {
                XML.WES("Supplies", escapeXml(obj["Supplies"][i]));
            }
        }
    };

    if (obj["OtherAgencies"].length > 0) {
        for (var i = 0; i < obj["OtherAgencies"].length; i++) {
            if (IsOk(obj["OtherAgencies"][i]) == true) {
                XML.WES("OtherAgencies", escapeXml(obj["OtherAgencies"][i]));
            }
        }
    };

    if (obj["Crew"].length > 0) {
        for (var i = 0; i < obj["Crew"].length; i++) {
            if (IsOk(obj["Crew"][i]) == true) {
                XML.WES("CrewMemberID", escapeXml(obj["Crew"][i].StateID));
                XML.WES("CrewRole", escapeXml(obj["Crew"][i].Role));
                XML.WES("CrewName", escapeXml(obj["Crew"][i].Name));
            }
        }
    };
    
    if (IsOk(obj["FirstUnitOnScene"]) == true) {
        XML.WES("FirstUnitOnScene", escapeXml(obj["FirstUnitOnScene"]));
    };
    if (IsOk(obj["LocationType"]) == true) {
        XML.WES("LocationType", escapeXml(obj["LocationType"]));
    };
    if (IsOk(obj["FacilityName"]) == true) {
        XML.WES("FacilityName", escapeXml(obj["FacilityName"]));
    };
    if (IsOk(obj["Weight"]) == true) {
        XML.WES("Weight", escapeXml(obj["Weight"]));
    };
    if (IsOk(obj["Length"]) == true) {
        XML.WES("Length", escapeXml(obj["Length"]));
    };
    if (IsOk(obj["IntervalNotified"]) == true) {
        XML.WES("IntervalNotified", escapeXml(obj["IntervalNotified"]));
    };
    if (IsOk(obj["IntervalUnitAck"]) == true) {
        XML.WES("IntervalUnitAck", escapeXml(obj["IntervalUnitAck"]));
    };

    if (IsOk(obj["IntervalUnitEnRoute"]) == true) {
        XML.WES("IntervalUnitEnRoute", escapeXml(obj["IntervalUnitEnRoute"]));
    };

    if (IsOk(obj["IntervalUnitAtScene"]) == true) {
        XML.WES("IntervalUnitAtScene", escapeXml(obj["IntervalUnitAtScene"]));
    };

    if (IsOk(obj["IntervalUnitAtPatient"]) == true) {
        XML.WES("IntervalUnitAtPatient", escapeXml(obj["IntervalUnitAtPatient"]));
    };

    if (IsOk(obj["IntervalUnitTransferToCare"]) == true) {
        XML.WES("IntervalUnitTransferToCare", escapeXml(obj["IntervalUnitTransferToCare"]));
    };

    if (IsOk(obj["IntervalUnitLeftScene"]) == true) {
        XML.WES("IntervalUnitLeftScene", escapeXml(obj["IntervalUnitLeftScene"]));
    };

    if (IsOk(obj["IntervalUnitAtLanding"]) == true) {
        XML.WES("IntervalUnitAtLanding", escapeXml(obj["IntervalUnitAtLanding"]));
    };

    if (IsOk(obj["IntervalUnitPatientArrived"]) == true) {
        XML.WES("IntervalUnitPatientArrived", escapeXml(obj["IntervalUnitPatientArrived"]));
    };

    if (IsOk(obj["IntervalUnitTransferCare"]) == true) {
        XML.WES("IntervalUnitTransferCare", escapeXml(obj["IntervalUnitTransferCare"]));
    };

    if (IsOk(obj["IntervalUnitLeftScene"]) == true) {
        XML.WES("IntervalUnitLeftScene", escapeXml(obj["IntervalUnitLeftScene"]));
    };
    if (IsOk(obj["IntervalUnitAtLanding"]) == true) {
        XML.WES("IntervalUnitAtLanding", escapeXml(obj["IntervalUnitAtLanding"]));
    };
    if (IsOk(obj["IntervalUnitPatientArrived"]) == true) {
        XML.WES("IntervalUnitPatientArrived", escapeXml(obj["IntervalUnitPatientArrived"]));
    };
    if (IsOk(obj["IntervalUnitTransferCare"]) == true) {
        XML.WES("IntervalUnitTransferCare", escapeXml(obj["IntervalUnitTransferCare"]));
    };
    if (IsOk(obj["IntervalUnitBackInService"]) == true) {
        XML.WES("IntervalUnitBackInService", escapeXml(obj["IntervalUnitBackInService"]));
    };
    if (IsOk(obj["IntervalUnitCancel"]) == true) {
        XML.WES("IntervalUnitCancel", escapeXml(obj["IntervalUnitCancel"]));
    };
    if (IsOk(obj["IntervalUnitHome"]) == true) {
        XML.WES("IntervalUnitHome", escapeXml(obj["IntervalUnitHome"]));
    };
    if (IsOk(obj["IntevalUnitComplete"]) == true) {
        XML.WES("IntevalUnitComplete", escapeXml(obj["IntevalUnitComplete"]));
    };

    XML.WEE();


    var XMLDoc = XML.flush();
    return XMLDoc;
};

function escapeXml(unsafe) {
    if (typeof unsafe != 'undefined') {
        if (unsafe != null) {
            return unsafe.replace(/[<>&'"]/g, function (c) {
                switch (c) {
                    case '<': return '&lt;';
                    case '>': return '&gt;';
                    case '&': return '&amp;';
                    case '\'': return '&apos;';
                    case '"': return '&quot;';
                }
            });
        }
    }

};

