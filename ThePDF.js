pdf = require('cloud/jspdf.js');
var RowNumber = 0;
var PageNumber = 0;
var PageLocation = 0;
var Left = 0.1
var Top = 1
var Right = 21;
var Width = 20.5;
var Height = 28;
var PatientName = "";
var DOB = "";
var PCRID = "";
var l = 0;
var writeValue = function (doc, name, row, val, start, Justify, fontType) {
    doc.setFont("helvetica");
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);

    if (fontType == null) {
        fontType = "normal"
    };
    if (typeof fontType === 'undefined') {
        fontType = "normal"
    };
    doc.setFontType(fontType);
    if (Justify == "Left") {
        if(name !== 'undefined')
        var len = name.length + val.length;
        var offset = len * .2
        doc.text(Width - offset, row, name + " " + val);

    }
    else {
        doc.text(start, row, name + " " + val);
    }
};
exports.NewPDF = function (TheCall) {
    if (typeof TheCall === 'undefined') {
        alert("CallUndefined")
        return null
    };
    if (typeof TheCall.Props === 'undefined') {
        alert("Call Props Undefined")
        return null
    };
    var PDFObject = new Object();
    PDFObject = TheCall.Props;
    var doc = new pdf.jsPDF('portrait', 'cm');
    if (PDFObject["PatientDOB"] !== "") {
        DOB = PDFObject["PatientDOB"]
    }
    else {
        DOB = "NA";
    };

    if (PDFObject["PatientName"] !== "") {
        PatientName = PDFObject["PatientName"]
    }
    else {
        PatientName = "NA";
    };

    if (PDFObject["PCRID"] !== "") {
        PCRID = PDFObject["PCRID"]
    }
    else {
        PCRID = "NA";
    };

    setFooter(doc, PatientName, DOB, PCRID);
    doc.setFont("helvetica");
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    Row = getRow(doc);
    doc.text(Center("Prehospital Care Report"), Row, "Prehospital Care Report");
    Row = getRow(doc);
    doc.setLineWidth(.04);
    doc.rect(Left, Row, 20.75, 1.5, .04); // empty square   
    Row = getRow(doc);

    s = writeValue(doc, "Incident #", Row, "", .15, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["CallNumber"], 3, "");
    s = writeValue(doc, "Agency#:", Row, "", 9, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["RespAgencyNumber"], 11, "");
    s = writeValue(doc, "View:", Row, "", 15, "", "bold");
    s = writeValue(doc, "", Row, "Original", "", "Left");

    Row = getRow(doc);

    s = writeValue(doc, "Call Priority", Row, "", .15, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["DispatchPriority"], 3, "");
    s = writeValue(doc, "Agency Name", Row, "", 9, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["RespAgencyName"], 12, "");
    s = writeValue(doc, "Created By", Row, "", 15, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["CreatedBy"], "", "Left");

    Row = getRow(doc);
    s = writeValue(doc, "Call Priority", Row, "", .15, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["DispatchPriority"], 3, "");
    s = writeValue(doc, "Created Date", Row, "", 15, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["CreatedDate"], "", "Left");
    Row = getRow(doc);


    doc.rect(Left, Row, 20.75, .75, .15); // empty square   
    Row = Row + .45;

    s = writeValue(doc, "Dispatch Information", Row, "", 8, "Right", "bold");

    Row = getRow(doc);
    Row = Row + .35;
    doc.rect(Left, Row, 9, 2, .04); // empty square   
    doc.rect(9.1, Row, Width - 8.75, 2, .04); // empty square   
    Row = getRow(doc);
    Row = getRow(doc);
    s = writeValue(doc, "Urgency:", Row, "", .23, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["RespResponseModeToScene"], 1.7, "");
    s = writeValue(doc, "Acknowledged:", Row, "", 9.5, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["TimeAcknowledged"], 9.5, "");
    s = writeValue(doc, "", Row, PDFObject["TimeAcknowledged"], 12.5, "");
    s = writeValue(doc, "Transport", Row, "", 14.5, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["TimeLeftScene"], 17.5, "");

    Row = getRow(doc);
    s = writeValue(doc, "Date:", Row, "", .23, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["CallDate"], 1.7, "");
    s = writeValue(doc, "Responding", Row, "", 9.5, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["TimeEnRoute"], 12.5, "");
    s = writeValue(doc, "At Destination", Row, "", 14.5, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["TimeAtScene"], 17.5, "");
    Row = getRow(doc);
    if (PDFObject["FacilityName"] !== "") {
        s = writeValue(doc, "FacilityName", Row, PDFObject["FacilityName"], .25, "");
    };
    s = writeValue(doc, "Address:", Row, "", .23, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["SceneAddress"], 1.7, "");
    s = writeValue(doc, "On Scene", Row, "", 9.5, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["TimeAtScene"], 12.5, "");
    s = writeValue(doc, "Transfer Of Care", Row, "", 14.5, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["TimeTransferPatientCare"], 17.5, "");

    Row = getRow(doc);

    s = writeValue(doc, "", Row, PDFObject["SceneCity"] + "  " + PDFObject["SceneState"] + ", " + PDFObject["SceneZip"], 1.7, "");
    s = writeValue(doc, "Patient Contact", Row, "", 9.5, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["TimePatientArrived"], 12.5, "");
    s = writeValue(doc, "Back in Service", Row, "", 14.5, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["TimeUnitBackInService"], 17.5, "");
    Row = getRow(doc);
    doc.rect(Left, Row - .04, 20.75, 2.5, .15); // empty square   
    Row = getRow(doc);
    s = writeValue(doc, "Service Requested", Row, "", .25, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["RespTypeOfServiceRequest"], 3.5, "");

    Row = getRow(doc);
    s = writeValue(doc, "Complaint", Row, "", .25, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["DispatchComplaint"], 3.5, "");

    Row = getRow(doc);
    s = writeValue(doc, "Number of Patients", Row, "", .25, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["NumberOfPatientsAtScene"], 3.5, "");
    Row = getRow(doc);

    s = writeValue(doc, "To Scene:", Row, "", .25, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["ToSceneMileage"], 3.5, "");
    s = writeValue(doc, "Laden:", Row, "", 5.5, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["RespLadenMileage"], 7.5, "");
    s = writeValue(doc, "Total:", Row, "", 9.5, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["RespTotalMileage"], 11.5, "");

    Row = getRow(doc);
    s = writeValue(doc, "Begin:", Row, "", .25, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["RespBeginMileage"], 3.5, "");
    s = writeValue(doc, "Scene:", Row, "", 5.5, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["RespOnSceneMiles"], 7.5, "");
    s = writeValue(doc, "Destination:", Row, "", 9.5, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["RespDestinationMiles"], 11.5, "");
    s = writeValue(doc, "End:", Row, "", 14, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["RespEndMiles"], 15.5, "");
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    Row = getRow(doc);
    doc.rect(Left, Row, 20.75, .8, .5); // empty square 
    Row = getRow(doc);
    s = writeValue(doc, "Patient Demographics", Row, "", 8, "Right", "bold");
    Row = Row + .45;
    doc.rect(Left, Row, 20.75, 3, .5); // empty square 
    Row = getRow(doc);
    Row = getRow(doc);
    s = writeValue(doc, "SSN:", Row, "", .25, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["SSN"], 3, "");
    s = writeValue(doc, "Emergency Contact:", Row, "", 11, "", "bold");
    s = writeValue(doc, PDFObject["ClosestRelativePhone"], Row, "", 15, "");
    Row = doubleSpace(doc);

    s = writeValue(doc, "Address:", Row, "", .25, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["PatientAddress"], 3, "");
    s = writeValue(doc, "Primary Phone:", Row, "", 11, "", "bold");
    s = writeValue(doc, PDFObject["ClosestRelativeName"], Row, "", 15, "");
    Row = getRow(doc);

    s = writeValue(doc, "", Row, PDFObject["PatientCSZ"], 3, "");
    s = writeValue(doc, "Secondary Phone:", Row, "", 11, "", "bold");
    Row = getRow(doc);
    s = writeValue(doc, "Phone:", Row, "", .25, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["PatientPhone"], 3, "");
    s = writeValue(doc, "Primary MD:", Row, "", 11, "", "bold");
    s = writeValue(doc, PDFObject["HistMDs"], Row, "", 15, "");

    Row = doubleSpace(doc);
    s = writeValue(doc, "Email:", Row, "", .25, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["Email"], 3, "");
    s = writeValue(doc, "Driver's License:", Row, "", 11, "", "bold");
    s = writeValue(doc, PDFObject["PatientDriversLicense"], Row, "", 15, "");

    Row = doubleSpace(doc);

    s = writeValue(doc, "Adv Directives:", Row, "", .25, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["HistAdvancedDirectives"], 3, "");
    s = writeValue(doc, "Driver's License State:", Row, "", 11, "", "bold");
    s = writeValue(doc, PDFObject["PatientDriversLicenseState"], Row, "", 15, "");
    Row = doubleSpace(doc);
    s = writeValue(doc, "Race:", Row, "", .25, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["Race"], 3, "");
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    Row = getRow(doc);
    doc.rect(Left, Row, 20.75, .75, .15); // empty square   
    Row = Row + .35;
    s = writeValue(doc, "Medical Information", Row, "", 8.5, "Right", "bold");

    Row = getRow(doc);
    var aa = new Array();
    var ab = new Array();
    var ac = new Array();
    if (PDFObject["MedicalHistory"] !== "") {
        aa = PDFObject["MedicalHistory"].split(", ");
    };
    if (PDFObject["Medications"] !== "") {
        ab = PDFObject["Medications"].split(", ");
    };
    if (PDFObject["MedicationAllergies"] !== "") {
        var ac = PDFObject["MedicationAllergies"].split(", ");
    };

    var l = aa.length;
    if (l < ab.length) {
        l = ab.length
    };

    if (l < ac.length) {
        l = ac.length
    };
    var m = l * .8
    Row = Row + .35
    doc.rect(Left, Row, 6.9, m, .15); // empty square   
    doc.rect(7, Row, 6.9, m, .15); // empty square   
    doc.rect(13.9, Row, 6.95, m, .15); // empty square   
    Row = Row = m;
    Row = getRow(doc);
    Row = getRow(doc);
    s = writeValue(doc, "Medical History", Row, "", 2, "", "bold");
    s = writeValue(doc, "Medications", Row, "", 9.5, "", "bold");
    s = writeValue(doc, "Allergies", Row, "", 16.5, "", "bold");
    Row = getRow(doc);

    for (var i = 0; i < m; i++) {
        if (typeof aa[i] !== 'undefined') {
            s = writeValue(doc, "", Row, aa[i], .25, "");
        };
        if (typeof ab[i] !== 'undefined') {
            s = writeValue(doc, "", Row, ab[i], 7, "");
        };
        if (typeof ac[i] !== 'undefined') {
            s = writeValue(doc, "", Row, ac[i], 14, "");
        };
        Row = getRow(doc);
    };

    Row = getRow(doc);
    doc.rect(Left, Row, 20.75, .8, .5); // empty square 
    Row = getRow(doc);
    s = writeValue(doc, "Disposition", Row, "", 8.5, "Right", "bold");
    Row = Row + .4;
    doc.rect(Left, Row, 20.75, 6.5, .5); // empty square 
    Row = getRow(doc);
    Row = getRow(doc);
    s = writeValue(doc, "Patient Disposition:", Row, "", .25, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["Disposition"], 6, "");
    Row = doubleSpace(doc);

    s = writeValue(doc, "EMS Transport Method:", Row, "", .25, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["DispoTransportMethod"], 6, "");
    Row = doubleSpace(doc);

    s = writeValue(doc, "Method Moved to Ambulance:", Row, "", .25, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["DispoHowMovedToRig"], 6, "");
    Row = doubleSpace(doc);

    s = writeValue(doc, "Transport Mode From Scene:", Row, "", .25, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["DispoTransportModeFromScene"], 6, "");
    Row = doubleSpace(doc);

    s = writeValue(doc, "Patient Position During Transport:", Row, "", .25, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["DispoPatientPosition"], 6, "");
    Row = doubleSpace(doc);

    s = writeValue(doc, "Number Patient During Transport:", Row, "", .25, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["DispNumberPatientTransport"], 6, "");
    Row = doubleSpace(doc);

    s = writeValue(doc, "PCR Generated By:", Row, "", .25, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["CreatedBy"], 6, "");
    Row = doubleSpace(doc);

    s = writeValue(doc, "Destination:", Row, "", .25, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["DispoDestinationType"], 6, "");
    Row = doubleSpace(doc);

    s = writeValue(doc, "Reason for Choosing Destination:", Row, "", .25, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["DispoReasonForChoosing"], 6, "");
    Row = doubleSpace(doc);

    s = writeValue(doc, "Method Moved From Ambulance:", Row, "", .25, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["DispoHowMovedToRig"], 6, "");
    Row = doubleSpace(doc);

    s = writeValue(doc, "Condition on Arrival:", Row, "", .25, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["DispoFinalAccuity"], 6, "");
    Row = doubleSpace(doc);

    s = writeValue(doc, "Care Transferred To:", Row, "", .25, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["DispoPatientDestination"], 6, "");
    Row = doubleSpace(doc);

    s = writeValue(doc, "Destination Name:", Row, "", .25, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["DispoTo"], 6, "");
    Row = doubleSpace(doc);

    s = writeValue(doc, "Address:", Row, "", .25, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["DispoToAddress"], 6, "");
    Row = doubleSpace(doc);
    /////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////

    Row = getRow(doc);
    Row = getRow(doc);
    doc.rect(Left, Row, 20.75, .8, .5); // empty square 
    Row = getRow(doc);

    s = writeValue(doc, "Crew", Row, "", 9.5, "Right", "bold");
    Row = Row + .4;
    doc.rect(Left, Row, 20.75, (PDFObject["Crew"].length * .8) + .4, .5); // empty square 
    RowNumber = RowNumber + .4;
    Row = getRow(doc);
    Row = getRow(doc);
    for (var t = 0; t < PDFObject["Crew"].length; t++) {
        s = writeValue(doc, PDFObject["Crew"][t]["Role"], Row, "", .5, "", "bold");
        Row = getRow(doc);
        s = writeValue(doc, PDFObject["Crew"][t]["Name"], Row, "", 1, "");
        s = writeValue(doc, PDFObject["Crew"][t]["MemberLevel"], Row, "", 5, "");
        s = writeValue(doc, "ID:", Row, "", 12, "", "bold");
        s = writeValue(doc, PDFObject["Crew"][t]["StateID"], Row, "", 13, "");
        Row = getRow(doc);
    }
    /////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////

    setPage(doc)
    Row = getRow(doc);
    doc.rect(Left, Row, 20.75, .8, .15); // empty square   

    Row = getRow(doc);
    s = writeValue(doc, "Treatment", Row, "", 9.5, "", "bold");
    Row = getRow(doc);

    if (PDFObject["Protocols"] !== "") {
        doc.rect(Left, Row, 20.75, 1 + ((PDFObject["Protocols"].length) * .4), .15); // empty square   
        RowNumber = RowNumber + 4 + PDFObject["Protocols"].length;
    }
    else {
        doc.rect(Left, Row, 20.75, 1.6, .15); // empty square           
    };
    Row = getRow(doc);
    s = writeValue(doc, "Primary:", Row, "", .25, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["PrimarySymptom"], 3.5, "");
    Row = getRow(doc);
    Row = getRow(doc);
    s = writeValue(doc, "Protocols:", Row, "", .25, "", "bold");
    if (PDFObject["Protocols"] !== "") {

        for (var x = 0; x < PDFObject["Protocols"].length; x++) {
            s = writeValue(doc, "", Row, PDFObject["Protocols"][x]["Protocols"], 3.5, "");
            Row = getRow(doc);
        }
    };

    var t = setTreatmentHeader(doc, Row)

    if (typeof PDFObject["Events"] !== 'undefined') {
        for (var x = 0; x < PDFObject["Events"].length; x++) {
            var ob = PDFObject["Events"][x];
            if (Row > 24) {
                setPage(doc);
                Row = getRow(doc);
                var t = setTreatmentHeader(doc, Row);
            };

            if ((typeof ob.Time !== 'undefined') && (ob.Time !== "")) {
                var h = (ob.Value.length * .4) + .4;
                doc.rect(Left, Row, 1.5, h, .15); // empty square   
                doc.rect(1.5 + Left, Row, 14, h, .15); // empty square  
                doc.rect(15.5 + Left, Row, 2, h, .15); // empty square        
                doc.rect(17.5 + Left, Row, 3.25, h, .15); // empty square   

                Row = getRow(doc);
                if (typeof ob.Time !== 'undefined') {
                    s = writeValue(doc, ob.Time, Row, "", .2, "");
                };
                if (typeof ob.Response !== 'undefined') {
                    s = writeValue(doc, ob.Response, Row, "", 15.7, "");
                };
                if (typeof ob.PerformedBy !== 'undefined') {
                    s = writeValue(doc, ob.PerformedBy, Row, "", 17.7, "");
                };
                for (var xx = 0; xx < ob.Value.length; xx++) {
                    if (ob.Value[xx] !== "") {
                        s = writeValue(doc, ob.Value[xx], Row, "", 2.2, "");
                        Row = getRow(doc);
                    }
                }
            }
        }
    };
    Row = getRow(doc);
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    doc.rect(Left, Row, 20.75, .75, .15); // empty square   
    Row = Row + .35;
    s = writeValue(doc, "History of Present Illness", Row, "", 7.5, "Right", "bold");
    Row = getRow(doc);
    Row = Row + .35;
    doc.rect(Left, Row, 20.75, .8, .15); // empty square   
    Row = getRow(doc);
    Row = getRow(doc);
    s = writeValue(doc, "Complaint:", Row, "", .25, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["ChiefComplaint"], 3.5, ""); s = writeValue(doc, "Duration:", Row, "", 8, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["ChiefComplaintDuration"], 11, "");
    s = writeValue(doc, "Weight:", Row, "", 15, "", "bold");
    s = writeValue(doc, "", Row, PDFObject["Weight"], 18.5, "");
    Row = Row + .35;
    //doc.rect(Left, Row, 20.75, .75, .15); // empty square   
    if (typeof PDFObject["Narrative"] !== 'undefined')
    {
        if (PDFObject["Narrative"].length == 0) {
            doc.rect(Left, Row, 20.75, .8, .5); // empty square 
            Row = getRow(doc);
            //Row = getRow(doc);    
            s = writeValue(doc, "", Row, "Narrative", .15, "bold");
        }
        else {
            var h = (PDFObject["Narrative"].length * .4) + .8;
            doc.rect(Left, Row, 20.75, h, .15); // empty square 
            Row = getRow(doc);
            Row = getRow(doc);
            s = writeValue(doc, "", Row, "Narrative " + h, .15, "", "bold");

            for (var i = 0; i < PDFObject["Narrative"].length; i++) {
                Row = getRow(doc);
                s = writeValue(doc, "", Row, PDFObject["Narrative"][i], .15, "");
            }
        }
    };

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////


    
    //var res = doc.output('save')\
    var res = doc.output('save');
    //console.log(res)
    return res;
    
    ////////////////////  PRODUCTION
    //console.log("res")
    //doc.output('datauri');
    //var res = doc.output('saveRaw', 'testPCR.pdf');    
    return res;

};
function getRow(d) {
    if (RowNumber == 0) {
        RowNumber = RowNumber + 1;
        PageLocation = .4;
        return PageLocation;
    };
    if (RowNumber < 70) {
        RowNumber = RowNumber + 1;
        PageLocation = PageLocation + .4;
        return PageLocation
    }
    else {
        //d.text(Left, -.2 + NewLine, "MoBi cPCR, version 0.0");
        return 0;
    }
};
var bumpHalfRow = function () {
    if (RowNumber == 0) {
        RowNumber = RowNumber + .25;
        PageLocation = .25;
        return 1;
    };
    if (RowNumber < 45) {

        RowNumber = RowNumber + .25;
        PageLocation = PageLocation + .05;
        return PageLocation
    }
    else {
        return 0;
    }
};
var doubleSpace = function () {
    if (RowNumber == 0) {
        RowNumber = RowNumber + .4;
        PageLocation = .4;
        return 1;
    };
    if (RowNumber < 65) {

        RowNumber = RowNumber + .4;
        PageLocation = PageLocation + .4;
        return PageLocation
    }
    else {
        RowNumber = RowNumber + .6;
        PageLocation = PageLocation + .6;
        return PageLocation;
    }
};
var setSectionBreak = function (document, Name, width) {
    var sectLocation = PageLocation + .04
    //var sectLocation = PageLocation + ;


    //RowNumber = RowNumber + 1;
    var sectHeight = .3;
    var sectOffset = .175;
    document.setFillColor(255, 0, 0);
    document.rect(Left, sectLocation, Width, sectHeight, 'F');
    document.setFontType("bold");
    document.text(Left + Width * .45, sectLocation + sectOffset, Name);
    document.setFont("courier");
    document.setFontType("normal");

    PageLocation = PageLocation + .4

};
var setFooter = function (doc, patient, dob, pcr) {

    doc.setFont("helvetica");
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);

    if (patient == "undefined") {
        patient = "Unknown"
    };
    if (patient == "") {
        patient = "Unknown"
    };
    if (patient == null) {
        patient = "Unknown"
    };

    if (typeof fontType === 'undefined') {
        fontType = "normal"
    };
    doc.setFontType(fontType);
    doc.text(1, 29, "Patient:  " + patient);
    doc.text(1, 29, "Patient:  " + patient);
    doc.text(6 + 1, 29, "DOB:  " + dob);
    doc.text(12, 29, "Incident ID:  " + pcr);
    doc.text(18, 29, "Page:  " + PageNumber);

};
var writeVal = function (valObject) {
    retVal = ""
    if (isArray(valObject) == true) {

        for (var i = 0; i < valObject.length; i++) {
            if (i == 0)
            { retVal = valObject[i] }
            else
            { retVal = retVal + ", " + valObject[i] }
        }
    }
    else {
        retVal = valObject;
    };
    return retVal;
};
var cV = function (start, end) {
    l = start + end;
    return l;
}
function isArray(object) {
    if (typeof object !== 'undefined') {
        if (object.constructor === Array) return true;
        else return false;
    }
    else {
        return false;
    };
};
function setPage(d) {
    d.addPage();
    PageNumber = PageNumber + 1;
    d.setFontType("normal");
    d.setLineWidth(.04);
    setFooter(d, PatientName, DOB, PCRID);
    RowNumber = 0;

};
function chunkString(str, len) {
    var _size = Math.ceil(str.length / len),
        _ret = new Array(_size),
        _offset
    ;

    for (var _i = 0; _i < _size; _i++) {
        _offset = _i * len;
        _ret[_i] = str.substring(_offset, _offset + len);
    }

    return _ret;
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
function Center(term) {
    if ((term !== null) && (term !== "")) {
        var tLen = term.length;
        var total = 98 - tLen
        var res = Math.round(total / 2);
        res = res / 4.78
        return res;
    }
    return 0;
};
function setTreatmentHeader(d, r) {
    d.rect(Left, r, 1.5, .8, .15); // empty square   
    d.rect(1.5 + Left, r, 14, .8, .15); // empty square  
    d.rect(15.5 + Left, r, 2, .8, .15); // empty square        
    d.rect(17.5 + Left, r, 3.25, .8, .15); // empty square   


    r = r + .4
    s = writeValue(d, "Time", r, "", .2, "", "bold");
    s = writeValue(d, "Treatment", r, "", 1.7, "", "bold");
    s = writeValue(d, "Response", r, "", 15.7, "", "bold");
    s = writeValue(d, "Performed By", r, "", 17.7, "", "bold");
    Row = getRow(d);
    Row = getRow(d);
    return Row
}
