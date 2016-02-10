exports.setHTML= function (TheCall) {

    var Props = TheCall.Props;
    console.log("Props")
    console.log(Props)
    var htmlDoc = "";
    htmlDoc = htmlDoc+ "<!DOCTYPE html>";
    htmlDoc = htmlDoc+ "<html lang=\"en\" xmlns=\"http://www.w3.org/1999/xhtml\">";
    htmlDoc = htmlDoc+ "<head>";
    htmlDoc = htmlDoc+  "<meta charset=\"utf-8\" />";
    htmlDoc = htmlDoc+ "<title>";
    htmlDoc = htmlDoc + Props["PCRID"];
    htmlDoc = htmlDoc+ "</title>";
    htmlDoc = htmlDoc+ "</head>";
    htmlDoc = htmlDoc + "<body>";
    htmlDoc = htmlDoc + "<div style=\"width:100%;background:#F9EECF;border:1px solid black;text-align:left\">"
    htmlDoc = htmlDoc + "<table border=\"0\" width=\"100%\">";
    htmlDoc = htmlDoc + "<tr>";

    htmlDoc = htmlDoc + setCell(33, 33, "Incident", Props["PCRID"]);
    htmlDoc = htmlDoc + setCell(33, 33, "Agency", Props["RespAgencyNumber"]);
    htmlDoc = htmlDoc + setCell(33, 33, "View", "Original");
    
    
    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + setCell(33, 33, "Call Priority", Props["DispatchPriority"]);
    htmlDoc = htmlDoc + setCell(33, 33, "Agency Name", Props["RespAgencyName"]);
    htmlDoc = htmlDoc + setCell(33, 33, "Created By", Props["CreatedBy"]);
    htmlDoc = htmlDoc + "/<tr>";

    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + setCell(33, 33, "Call Sign", Props["EMSUnitCallSign"])
    htmlDoc = htmlDoc + setCell(33, 33, " ", " ")
    htmlDoc = htmlDoc + setCell(33, 33, "Created Date", Props["CreatedDate"])
    htmlDoc = htmlDoc + "/<tr>";
    htmlDoc = htmlDoc + "</table>";
    htmlDoc = htmlDoc + "</div>"

    htmlDoc = htmlDoc + "<p></p>"
    htmlDoc = htmlDoc + "<div style=\"width:100%;background:#F9EECF;border:1px solid black;text-align:center\">"
    htmlDoc = htmlDoc + "<p><b>Dispath Information </b></p>"
    htmlDoc = htmlDoc + "</div>"

    htmlDoc = htmlDoc + "<div style=\"width:100%;background:#F9EECF;border:1px solid black;text-align:left\">"
    htmlDoc = htmlDoc + "<table border=\"0\" width=\"100%\">";

    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + setCell(33, 33, "Urgency", Props["ResponseUrgency"]);
    htmlDoc = htmlDoc + setCell(33, 33, "Acknowledged", Props["TimeAcknowledged"]);
    htmlDoc = htmlDoc + setCell(33, 33, "Transport", Props["TimeLeftScene"]);
    htmlDoc = htmlDoc + "/<tr>";

    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + setCell(33, 33, "Date", Props["CallDate"]);
    htmlDoc = htmlDoc + setCell(33, 33, "Responding", Props["TimeEnRoute"]);
    htmlDoc = htmlDoc + setCell(33, 33, "At Destination", Props["TimePatientArrived"]);
    htmlDoc = htmlDoc + "/<tr>";

    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + setCell(33, 33, "Address", Props["DispoToAddress"]);
    htmlDoc = htmlDoc + setCell(33, 33, "On Scene", Props["TimeAtScene"]);
    htmlDoc = htmlDoc + setCell(33, 33, "Transfer Of Care", Props["TimeTransfer"]);
    htmlDoc = htmlDoc + "/<tr>";

    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + setCell(33, 33, "       ", "");
    htmlDoc = htmlDoc + setCell(33, 33, "Patient Contact", Props["TimeAtPatient"]);
    htmlDoc = htmlDoc + setCell(33, 33, "Back In Service", Props["TimeUnitBackInService"]);
    htmlDoc = htmlDoc + "/<tr>";
    
    
    htmlDoc = htmlDoc + "</table>";
    htmlDoc = htmlDoc + "</div>"
    
    htmlDoc = htmlDoc + "<div style=\"width:100%;background:#F9EECF;border:1px solid black;text-align:left\">"
    htmlDoc = htmlDoc + "<table border=\"0\" width=\"100%\">";
    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + setCell(5, 5, "Service Requested:", Props["RespTypeOfServiceRequest"]);
    htmlDoc = htmlDoc + "/<tr>";
    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + setCell(33, 33, "Complaint:", Props["DispatchComplaint"], 1);
    htmlDoc = htmlDoc + "/<tr>"    
    htmlDoc = htmlDoc + "<tr>";;
    htmlDoc = htmlDoc + setCell(33, 33, "Number of Patients:", Props["NumberOfPatientsAtScene"]);
    htmlDoc = htmlDoc + "/<tr>";

    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + setCell(20, 20, "To Scene", Props["ToSceneMileage"]);
    htmlDoc = htmlDoc + setCell(20, 20, "Laden:", Props["RespLadenMileage"])
    htmlDoc = htmlDoc + setCell(20, 20, "Total:", Props["RespTotalMileage"])
    htmlDoc = htmlDoc + "</tr>"

    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + setCell(20, 20, "Begin", Props["RespBeginMileage"]);
    htmlDoc = htmlDoc + setCell(20, 20, "Scene:", Props["RespOnSceneMiles"])
    htmlDoc = htmlDoc + setCell(20, 20, "Destination:", Props["RespDestinationMiles"])
    htmlDoc = htmlDoc + setCell(20, 20, "End Mileage:", Props["RespEndMiles"])
    htmlDoc = htmlDoc + "</tr>"

    htmlDoc = htmlDoc + "</table>";
    htmlDoc = htmlDoc + "</div>";
    
    
    htmlDoc = htmlDoc + "<p></p>"
    htmlDoc = htmlDoc + "<div style=\"width:100%;background:#F9EECF;border:1px solid black;text-align:center\">"
    htmlDoc = htmlDoc + "<p><b>Patient</b></p>"
    htmlDoc = htmlDoc + "</div>"
    htmlDoc = htmlDoc + "<div style=\"width:100%;background:#F9EECF;border:1px solid black;text-align:left\">"
    htmlDoc = htmlDoc + "<table border=\"0\" width=\"100%\">";
    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + setCell(50, 50, "SSN", Props["SSN"])
    htmlDoc = htmlDoc + setCell(50, 50, "EmergencyContact", Props["ClosestRelativeName"])
    htmlDoc = htmlDoc + "</tr>"

    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + setCell(33, 33, "Address", Props["PatientAddress"])
    htmlDoc = htmlDoc + setCell(33, 33, "Primary Phone", Props["ClosestRelativePhone"])
    htmlDoc = htmlDoc + "</tr>"

    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + setCell(33, 33, "", "      " + Props["PatientCSZ"])
    htmlDoc = htmlDoc + setCell(33, 33, "Secondary Phone", "")
    htmlDoc = htmlDoc + "</tr>"

    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + setCell(33, 33, "Phone", Props["PatientPhone"])
    htmlDoc = htmlDoc + setCell(33, 33, "Primary MD", Props["HistMDs"])
    htmlDoc = htmlDoc + "</tr>"

    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + setCell(33, 33, "Email", Props["Email"])
    htmlDoc = htmlDoc + setCell(33, 33, "Drivers License", Props["PatientDriversLicense"])
    htmlDoc = htmlDoc + "</tr>"

    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + setCell(33, 33, "Advanced Directives", Props["HistAdvancedDirectives"])
    htmlDoc = htmlDoc + setCell(33, 33, "Drivers License State", Props["PatientDriversLicense"])
    htmlDoc = htmlDoc + "</tr>"

    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + setCell(33, 33, "Race", Props["Race"])
    htmlDoc = htmlDoc + "</tr>"
    htmlDoc = htmlDoc + "</table>";
    htmlDoc = htmlDoc + "</div>"

    htmlDoc = htmlDoc + "<p></p>"

    htmlDoc = htmlDoc + "<div style=\"width:100%;background:#F9EECF;border:1px solid black;text-align:center\">"
    htmlDoc = htmlDoc + "<p><b>Medical</b></p>"
    htmlDoc = htmlDoc + "</div>"
    htmlDoc = htmlDoc + "<div style=\"width:100%;background:#F9EECF;border:1px solid black;text-align:left\">"
    htmlDoc = htmlDoc + "<table border=\"0\" width=\"100%\">";
           

    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + "<td>";
    htmlDoc = htmlDoc + "<table border=\"1\" width=\"33%\">";
    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + "<td  align=\"center\">";
    htmlDoc = htmlDoc + "<b>Medical History</b> "
    htmlDoc = htmlDoc + "</td>";
    htmlDoc = htmlDoc + "</tr>"
    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + "<td  align=\"center\">";
    htmlDoc = htmlDoc + Props["MedicalHistory"]
    htmlDoc = htmlDoc + "</td>";
    htmlDoc = htmlDoc + "</tr>"
    htmlDoc = htmlDoc + "</table>";
    htmlDoc = htmlDoc + "</td>";

    htmlDoc = htmlDoc + "<td>";
    htmlDoc = htmlDoc + "<table border=\"1\" width=\"33%\">";
    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + "<td  align=\"center\">";
    htmlDoc = htmlDoc + "<b>Medications</b> "
    htmlDoc = htmlDoc + "</td>";
    htmlDoc = htmlDoc + "</tr>"
    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + "<td  align=\"center\">";
    htmlDoc = htmlDoc + Props["CurrentMedications"]
    htmlDoc = htmlDoc + "</td>";
    htmlDoc = htmlDoc + "</tr>"

    htmlDoc = htmlDoc + "</table>";
    htmlDoc = htmlDoc + "</td>";

    htmlDoc = htmlDoc + "<td>";
    htmlDoc = htmlDoc + "<table border=\"1\" width=\"33%\">";
    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + "<td  align=\"center\">";
    htmlDoc = htmlDoc + "<b>Allergies</b> "
    htmlDoc = htmlDoc + "</td>";
    htmlDoc = htmlDoc + "</tr>"
    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + "<td  align=\"center\">";
    htmlDoc = htmlDoc + Props["EnvironmentalAllergies"]
    htmlDoc = htmlDoc + "</td>";
    htmlDoc = htmlDoc + "</tr>"

    htmlDoc = htmlDoc + "</table>";
    htmlDoc = htmlDoc + "</td>";

    htmlDoc = htmlDoc + "</table>";
    htmlDoc = htmlDoc + "</div>"
    htmlDoc = htmlDoc + "</td>";
    htmlDoc = htmlDoc + "</tr>"

    htmlDoc = htmlDoc + "</table>"

    htmlDoc = htmlDoc + "<p></p>"

    htmlDoc = htmlDoc + "<div style=\"width:100%;background:#F9EECF;border:1px solid black;text-align:center\">"
    htmlDoc = htmlDoc + "<p><b>Disposition</b></p>"
    htmlDoc = htmlDoc + "</div>"
    htmlDoc = htmlDoc + "<div style=\"width:100%;background:#F9EECF;border:1px solid black;text-align:left\">"
    htmlDoc = htmlDoc + "<table border=\"0\" width=\"100%\">";
    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + setCell(33, 33, "Patient Disposition", Props["Disposition"]);
    htmlDoc = htmlDoc + "</tr>"
    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + setCell(33, 33, "EMS Transport Method", Props["DispoTransportMethod"]);
    htmlDoc = htmlDoc + "</tr>"
    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + setCell(33, 33, "Transport Mode From Scene", Props["DispoTransportModeFromScene"]);
    htmlDoc = htmlDoc + "</tr>"
    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + setCell(33, 33, "Patient Position During Transport:", Props["DispoPatientPosition"]);
    htmlDoc = htmlDoc + "</tr>"
    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + setCell(33, 33, "Number Patients During Transport:", Props["DispNumberPatientTransport"]);
    htmlDoc = htmlDoc + "</tr>"
    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + setCell(33, 33, "PCR Generated By:", Props["CreatedBy"]);
    htmlDoc = htmlDoc + "</tr>"
    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + setCell(33, 33, "Destination:", Props["DispoDestinationType"]);
    htmlDoc = htmlDoc + "</tr>"
    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + setCell(33, 33, "Reason for Choosing Destination:", Props["DispoReasonForChoosing"]);
    htmlDoc = htmlDoc + "</tr>"
    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + setCell(33, 33, "Method Moved From Ambulance:", Props["DispoPatientMovedFromRig"]);
    htmlDoc = htmlDoc + "</tr>"
    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + setCell(33, 33, "Condition on Arrival:", Props["DispoFinalAccuity"]);
    htmlDoc = htmlDoc + "</tr>"
    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + setCell(33, 33, "Care Transferred To:", Props["DispoPatientDestination"]);
    htmlDoc = htmlDoc + "</tr>"
    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + setCell(33, 33, "Destination Name:", Props["DispoTo"]);
    htmlDoc = htmlDoc + "</tr>"
    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + setCell(33, 33, "Address:", Props["DispoToAddress"]);
    htmlDoc = htmlDoc + "</tr>"
    htmlDoc = htmlDoc + "</table>";
    htmlDoc = htmlDoc + "</div>"


    htmlDoc = htmlDoc + "<p></p>"

    htmlDoc = htmlDoc + "<div style=\"width:100%;background:#F9EECF;border:1px solid black;text-align:center\">"
    htmlDoc = htmlDoc + "<p><b>Crew</b></p>"
    htmlDoc = htmlDoc + "</div>"
    htmlDoc = htmlDoc + "<div style=\"width:100%;background:#F9EECF;border:1px solid black;text-align:left\">"
    htmlDoc = htmlDoc + "<table border=\"0\" width=\"100%\">";
    for (var i = 0; i < Props["Crew"].length; i++) {
        htmlDoc = htmlDoc + "<tr>";
        htmlDoc = htmlDoc + setCell(33, 33, Props["Crew"][i]["Role"], Props["Crew"][i]["Name"])
        htmlDoc = htmlDoc + "</tr>"
    };
    htmlDoc = htmlDoc + "</table>";
    htmlDoc = htmlDoc + "</div>"

    htmlDoc = htmlDoc + "<p></p>"
    htmlDoc = htmlDoc + "<div style=\"width:100%;background:#F9EECF;border:1px solid black;text-align:center\">"
    htmlDoc = htmlDoc + "<p><b>Treatment</b></p>"
    htmlDoc = htmlDoc + "</div>"
    htmlDoc = htmlDoc + "<div style=\"width:100%;background:#F9EECF;border:1px solid black;text-align:left\">"
    htmlDoc = htmlDoc + "<table border=\"0\" width=\"100%\">";

    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + setCell(33, 33, "Primary", Props["PrimarySymptom"])
    htmlDoc = htmlDoc + "</tr>"

    htmlDoc = htmlDoc + "<tr>";
    var d = "";
    for (var i = 0; i < Props["Protocols"].length; i++) {
        d = d + Props["Protocols"][i].Protocols + "<br>"        
    };
    htmlDoc = htmlDoc + setCell(33, 33, "Protocols", d)
    htmlDoc = htmlDoc + "</tr>"


    htmlDoc = htmlDoc + "</table>";
    htmlDoc = htmlDoc + "</div>"

    htmlDoc = htmlDoc + "<div style=\"width:100%;background:#F9EECF;border:1px solid black;text-align:left\">"
    htmlDoc = htmlDoc + "<table border=\"1\" width=\"100%\">";


    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + "<td Width = \"10%\">";
    htmlDoc = htmlDoc + "<b>Time</b>";
    htmlDoc = htmlDoc + "</td>";
    htmlDoc = htmlDoc + "<td Width = \"50%\">";
    htmlDoc = htmlDoc + "<b>Treatment</b>";
    htmlDoc = htmlDoc + "</td>";
    htmlDoc = htmlDoc + "<td Width = \"10%\">";
    htmlDoc = htmlDoc + "<b>Response</b>";
    htmlDoc = htmlDoc + "</td>";
    htmlDoc = htmlDoc + "<td Width = \"10%\">";
    htmlDoc = htmlDoc + "<b>Performed By</b>";
    htmlDoc = htmlDoc + "</td>";
    htmlDoc = htmlDoc + "</tr>"

    
        for (var x = 0; x < Props["Events"].length; x++) {
            var treatment = "";
            if (typeof Props["Events"][x]["Value"] !== 'undefined') {
                if (Props["Events"][x]["Value"].length > 1) {
                    for (var xx = 0; xx < Props["Events"][x]["Value"].length; xx++) {
                        treatment = treatment + Props["Events"][x]["Value"][xx] + "<br>"
                    }
                }
                else {
                    treatment = treatment + Props["Events"][x]["Value"][0]
                }
            };

            htmlDoc = htmlDoc + "<tr>";
            htmlDoc = htmlDoc + "<td Width = \"10%\">";
            if (typeof Props["Events"][x]["Time"] !== 'undefined') {
                htmlDoc = htmlDoc + Props["Events"][x]["Time"]
            }
            else {
                htmlDoc = htmlDoc + "";
            };
            htmlDoc = htmlDoc + "</td>";
            htmlDoc = htmlDoc + "<td Width = \"50%\">";

            htmlDoc = htmlDoc + treatment;
            htmlDoc = htmlDoc + "</td>";
            htmlDoc = htmlDoc + "<td Width = \"10%\">";
            if (typeof Props["Events"][x]["Response"] !== 'undefined') {
                htmlDoc = htmlDoc + Props["Events"][x]["Response"];
            }
            else {
                htmlDoc = htmlDoc + "";
            };
        
            htmlDoc = htmlDoc + "</td>";
            htmlDoc = htmlDoc + "<td Width = \"10%\">";
            if (typeof Props["Events"][x]["PerformedBy"] !== 'undefined') {
                htmlDoc = htmlDoc + Props["Events"][x]["PerformedBy"];
            }
            else {
                htmlDoc = htmlDoc + "";
            };
        
            htmlDoc = htmlDoc + "</td>";
            htmlDoc = htmlDoc + "</tr>";
    };

        htmlDoc = htmlDoc + "</table>";
        htmlDoc = htmlDoc + "</div>"


        htmlDoc = htmlDoc + "<p></p>"
        htmlDoc = htmlDoc + "<div style=\"width:100%;background:#F9EECF;border:1px solid black;text-align:center\">"
        htmlDoc = htmlDoc + "<p><b>History of Present Illness</b></p>"
        htmlDoc = htmlDoc + "</div>"
        htmlDoc = htmlDoc + "<div style=\"width:100%;background:#F9EECF;border:1px solid black;text-align:left\">"
        htmlDoc = htmlDoc + "<table border=\"0\" width=\"100%\">";
    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + setCell(20, 20, "Complaint", Props["ChiefComplaint"]);
    htmlDoc = htmlDoc + setCell(20, 20, "Duration:", Props["ChiefComplaintDuration"])
    htmlDoc = htmlDoc + setCell(20, 20, "Weight:", Props["Weight"])
    htmlDoc = htmlDoc + "</tr>"
    htmlDoc = htmlDoc + "</div>"
    htmlDoc = htmlDoc + "</table>";

    htmlDoc = htmlDoc + "<p></p>"
    htmlDoc = htmlDoc + "<div style=\"width:100%;background:#F9EECF;border:1px solid black;text-align:left\">"
    htmlDoc = htmlDoc + "<table border=\"0\" width=\"100%\">";
    htmlDoc = htmlDoc + "<tr>";
    htmlDoc = htmlDoc + Props["Narrative"];
    htmlDoc = htmlDoc + "</tr>"
    htmlDoc = htmlDoc + "</div>"
    htmlDoc = htmlDoc + "</table>";

    htmlDoc = htmlDoc + "</table border>";
    htmlDoc = htmlDoc + "</div>"


    return htmlDoc;

};


function getEvent(events, event) {
    var ret = new Object();
    ret.Time = "";
    ret.Name = "";
    for (var i = 0; i < events.length; i++) {
        if (events[i].Name == event) {
            ret.Name = events[i].Name
            ret.Time = events[i].Time
            return ret;
        }
    };
    return ret;
};

function setCell(w1, w2, text, val, flag) {
    var retStr = "";
    retStr = retStr + "<td Width = \"" + w1 + "%\">";
    retStr = retStr + "<table border=\"0\" width=\"100%\">";
   
    retStr = retStr + "<tr>";
    retStr = retStr + "<td Width = \"30%\">";
    retStr = retStr + "<b>" + text + " </b> "
    retStr = retStr + "</td>";
    retStr = retStr + "<td Width = \"50%\">";
    retStr = retStr + val;
    retStr = retStr + "</td>";
    retStr = retStr + "</table>";
    retStr = retStr + "</td>";

    return retStr;

}
