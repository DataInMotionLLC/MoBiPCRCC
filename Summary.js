var u = require('cloud/Utilities.js');
var summaryArray = new Array();
exports.setCallSummary = function (TheCall) {
    var rA = [];
    //Props["CallDisposition"] = "CanceledOnSceneNoPatient";
    //Props["CallHasPatient"] = false;
    //Props["CallHasTransport"] = false;
    //Props["CallHasTreatment"] = false;
    //Props["CallStatus"] = "Cancel";
    console.log("Summary")
    if (typeof TheCall.Props === 'undefined') {
        u.RaiseError("setCallSummary", 100, "Undefined TheCall.Props Object", "setCallSummary");
        
    };
    var BO = TheCall.Props;
    if (typeof TheCall.Props.Intervals === 'undefined') {
        u.RaiseError("setCallSummary", 100, "Undefined TheCall.Props Object", "setCallSummary");
        
    };
    var p = "";
    if (TheCall["Status"] !== "") {
        p = "Status: " + TheCall["Status"]
        //setLine("Status", TheCall["Status"]);
    }
    if (BO["PCRID"] !== "") {
        p = p + "\t" + "Call ID: " + TheCall["PCRID"]
    }
    
    if (BO["CallDate"] !== "") {
        p = p + "\t" + "Date: " + BO["CallDate"]
    }
    if (BO["RespAgencyNumber"] !== "") {
        p = p + "\t" + "Agency: " + BO["RespAgencyNumber"]        
    };
    rA.push(p)

    var p = "";
    if (BO["DispatchComplaint"] !== "") {
        p = p + "Dispatch Complaint: " + BO["DispatchComplaint"];
    };
    if (BO["DispatchCallLocation"] !== "") {
        p = p + "\t" + "Dispatched From: " + BO["DispatchCallLocation"]
    }
    rA.push(p)

    p = "";
    if (BO["Disposition"] !== "") {
        p = p + "Disposition: " + BO["Disposition"]
    }
    if (BO["DispoTo"] !== "") {
        p = p + "\t" + "To: " + BO["DispoTo"]
    };

    rA.push(p)

    p = "";
    if (typeof BO.Intervals !== 'undefined') {
        if (BO.Intervals["IntervalUnitAck"] !== "") {
            p = p + "to Acknowlege: " + BO.Intervals["IntervalUnitAck"]
        }
        if (BO.Intervals["IntervalUnitEnRoute"] !== "") {
            p = p + "\t" + "to EnRoute: " + BO.Intervals["IntervalUnitEnRoute"]
        }

        if (BO.Intervals["IntervalUnitAtScene"] !== "") {
            p = p + "\t" + "to Scene: " + BO.Intervals["IntervalUnitAtScene"]
        }

        if (BO.Intervals["IntervalUnitAtPatient"] !== "") {
            p = p + "\t" + "to Patient: " + BO.Intervals["IntervalUnitAtPatient"]
        };
        rA.push(p)
        p = "";

        if (BO.Intervals["IntervalUnitLeftScene"] !== "") {
            p = p + "to Left Scene: " + BO.Intervals["IntervalUnitLeftScene"]
        }
        if (BO.Intervals["IntervalUnitPatientArrived:"] !== "") {
            p = p + "\t" + "to Arrival: " + BO.Intervals["IntervalUnitPatientArrived"]
        }
        if (BO.Intervals["IntervalUnitTransferCare:"] !== "") {
            p = p + "\t" + "to Transfer Of Care: " + BO.Intervals["IntervalUnitTransferCare"]
        }
        if (BO.Intervals["IntervalUnitComplete"] !== "") {
            p = p + "\t" + "to Complete: " + BO.Intervals["IntervalUnitComplete"]
        }
        rA.push(p)
        p = "";
        
        if (BO.Intervals["IntervalUnitHome"] !== "") {
            p = p + "\t" + "to Home: " + BO.Intervals["IntervalUnitHome"]
        }
        if (BO.Intervals["IntervalUnitBackInService"] !== "") {
            p = p + "\t" + "to Back In Service: " + BO.Intervals["IntervalUnitBackInService"]
        }
    };

    if (typeof TheCall.V3.eDispatch === 'undefined') {
        setM("M", "Dispatch Information")
    }
    else {
        if (BO["DispatchComplaint"] == "") {
            setM("M", "DispatchComplaint")
        };
        if (BO["DispatchEMDPerformed"] !== "") {
            setLine("Dispatch EMD Performed", BO["DispatchEMDPerformed"]);
        }
        else {
            setM("M", "Dispatch EMD Performed")
        };
    };
    
    
    if (typeof TheCall.V3.eDisposition === 'undefined') {
        setM("M", "Disposition Information")
    }
    else {
        if ((typeof BO["CallHasTransport"] !== 'undefined') && (BO["CallHasTransport"] == true)) {
            if (BO["DispoTo"] !== "") {
                setM("U", "Destination/Transfered to Name ");
            };
            if (BO["DispoToCode"] !== "") {
                setM("U", "Destination/Transfered to Code");
            };
            if (BO["DispoState"] !== "") {
                setM("M", "Destination State");
            };
            if (BO["DispoCounty"] !== "") {
                setM("M", "Destination County");
            };
            if (BO["DispoZip"] !== "") {
                setM("M", "Destination Zip Code");
            };
            if (BO["DispoTransportMethod"] !== "") {
                setM("M", "EMS Transport Method");
            };
            if (BO["DispoTransportModeFromScene"] !== "") {
                setM("M", "Transport Mode From Scene");
            };
            if (BO["AddDispoTransportModeFromScene"] !== "") {
                setM("M", "Additional Transport Mode Descriptors");
            };
            if (BO["DispoReasonForChoosing"] !== "") {
                setM("M", "Reason For Choosing Destination");
            };
            if (BO["DispoDestinationType"] !== "") {
                setM("M", "Destination Type");
            }
            else {
                if (BO["DispoDestinationType"] === "Hospital-Emergency Department") {
                    if (BO["DispoPatientDestination"] !== "") {
                        setM("U", "Hospital In-Patient Destination");
                    }
                }
            };
            if ((typeof BO["DispoHospitalActivation"] !== 'undefined') && (BO["DispoHospitalActivation"] !== "")) {
                setM("U", "Destination Team Pre-Arrival Alert or Activation");
            }
        }
    };
    if (typeof TheCall.V3.eResponse === 'undefined') {
        setM("M", "Response Information")
    }
    else
        {
        if (BO["RespIncidentNumber"] != "") {
            setM("M", "RespIncidentNumber")
        };

        if (BO["RespTypeOfServiceRequest"] != "") {
            setM("M", "Type Of Service Request")
        };

        if (BO["RespPrimaryRoleOfUnit"] != "") {
            setM("M", "Primary Role Of Unit")
        };

        if (BO["RespBeginMileage"] != "") {
            setM("M", "Begin Mileage")
        };

        if (BO["RespOnSceneMiles"] != "") {
            setM("M", "On Scene Mileage")
        };

        if (BO["RespDestinationMiles"] !== "") {
            setM("M", "At Destination Mileage")
        }
        if (BO["RespPrimaryRoleOfUnit"] !== "") {
            setM("M", "Primary Role Of Unit")
        };
        if (BO["RespRig#"] !== "") {
            setM("M", "Unit Number")
        };
        if (BO["EMSUnitCallSign"] !== "") {
            setM("M", "Unit Call Sign")
        };
        if (BO["RespUnitLevelOfCare"] !== "") {
            setM("M", "Unit Level Of Care")
        };

        if (BO["RespResponseModeToScene"] == "") {
            setM("M", "Response Mode To Scene")
        };
        if (BO["RespAddResponseModeToScene"] == "") {
            setM("M", "Add Response Mode Indicators")
        }        
    };
    if (typeof TheCall.V3.eTimes === 'undefined') {
        setM("M", "Time Information")
    }
    else
    {
        if (BO["TimeDispatchNotified"] !== "") {
            setLine("Notified", BO["TimeDispatchNotified"]);
        }
        else {
            setM("M", "Time Dispatch Notified")
        };

        if (BO["TimeAcknowledged"] !== "") {
            setLine("Acknowledged", BO["TimeAcknowledged"]);
        }
        else {
            setM("M", "TimeAcknowledged")
        };

        if (BO["TimeAtScene"] !== "") {
            setLine("At Scene", BO["TimeAtScene"]);
        }
        else {
            setM("M", "TimeAtScene")
        }
    };
    /////
    ///Patient Rules

    if (typeof TheCall.V3.ePatient === 'undefined') {
        setM("U", "Patient Data Not Recorded");
    }
    else {
        if (BO["PatientLastName"] == "") {
            setM("U", "Patient Last Name");            
        };
        if (BO["PatientFirstName"] == "") {
            setM("U", "Patient First Name");
        };
        if (BO["PatientZip"] == "") {
            setM("U", "Patient Address Zip Code");
        };
        if (BO["PatientCity"] == "") {
            setM("U", "Patient Address City");            
        };

        if (BO["PatientCompleteAddress"] == "") {
            setM("U", "Patient Address ");                        
        };
        if (BO["PatientPhone"] == "") {
            setM("U", "Patient Phone Number");            
        };        
        if (BO["Gender"] == "") {
            setM("U", "Patient Gender");            
        };
        if (BO["PatientDOB"] == "") {
            setM("U", "Patient Date of Birth");            
        };
        if (BO["Age"] == "") {
            setM("U", "Patient Age");            
        }
    };
    
    if (BO["CallStatus"] != 'Cancel') {
        if (typeof TheCall.V3.eScene === 'undefined') {
            setM("M", "Scene Data");
        }
        else {
            if (BO["FirstUnitOnScene"] == "") {
                if ((typeof Props["OtherAgencies"] !== 'undefined') && (Props["OtherAgencies"].length == 0)) {
                    setM("D", "First Unit on Scene Defaulted to YES.  No other units on Scene.");
                }
                else {
                    setM("U", "First Unit on Scene.");
                }
            };

            if (BO["SceneState"] == "") {
                setM("M", "Scene State");
            };
            if (BO["SceneZip"] == "") {
                setM("M", "Scene Zip");
            };
            if (BO["CallHasPatient"] == true) {
                if (BO["NumberOfPatientsAtScene"] == "") {
                    setM("U", "Number of Patients On Scene");
                };

                if (BO["MassCasualtyIncident"] == "") {
                    setM("U", "Mass Casualty Incident");
                };

                if (BO["TriageClassification"] == "") {
                    setM("M", "Triage Classification");
                }
            };
            if (BO["LocationType"] == "") {
                setM("M", "Location Type");
            };
        }
    };
    ///////
    //Situation
    if(BO["CallHasPatient"] == true)
    {            
        if (BO["OnsetDateTime"] == "") {
            setM("M", "Onset Date Time");
        };
        if (BO["ChiefComplaint"] == "") {
            setM("M", "Chief Complaint");            
        };
        if (BO["PrimarySymptom"] == "") {
            setM("M", "Primary Symptom");
        };
        if (BO["ProviderImpresion"] == "") {
            setM("M", "Provider Impresion");
        };
        if (BO["PriorAid"] == "") {
            setM("M", "Prior Aid");
        };
        if (BO["PossibleInjury"] == "") {
            setM("M", "Possible Injury");
        }
        else
        {
            if (BO["PossibleInjury"] !== "No") 
            {
                if (BO["InjuryCause"] == "") 
                {
                    setM("M", "Cause of Injury");
                }
            }
        };
        if (BO["ChiefComplaint"] == "") {
            setM("M", "Chief Complaint");
        };
        if (BO["ChiefComplaintLocation"] == "") {
            setM("M", "Chief Complaint Location");
        };
        if (BO["OtherAssociatedSymptoms"] == "") {
            setM("M", "Other Associated Symptoms");
        };
        if (BO["SecondaryImpresion"] == "") {
            setM("M", "Secondary Impressions");
        };
        if (BO["CardiacArrest"] == "Yes")
        {
            if (BO["ArrestEtiology"] == "") {
                setM("M", "Arrest Etiology");
            };
            if (BO["RescAttempt"] == "") {
                setM("M", "Resuscitation Attempted By EMS");
            };
            if (BO["CardiacWitnessed"] == "") {
                setM("M", "Cardiac Witnessed By");
            };
            if (BO["AEDUsedPrior"] == "") {
                setM("M", "AED Used Prior");
            };
            if (BO["ArrestTime"] == "") {
                setM("M", "Arrest Time");
            };
            if (BO["CPRTime"] == "") {
                setM("U", "CPR Time");                
            };
            if (BO["ResuscDiscontinued"] == "") {
                setM("U", "Reason Resuscitation Discontinued");                
            };
            if (BO["CardiacRhythmAtDest"] == "") {
                setM("M", "Cardiac Rhythm At Destination");                
            }
        }
    };
    console.log("HERE IT IS HAS PATIENT")
    if(BO["CallHasPatient"] == true)
    {
        if (BO["HistBarriersToCare"] == "") {
            setM("M", "Barriers To Care");              
        };
        if (BO["AlcoholDrugUse"] == "") {
            setM("M", "Alcohol Drug Use");              
        }
    };
    if (BO["CrewCount"] < 2) {
        setM("M", "Minimum of two crew required");              
    };
    if (BO["Fall"] == true) {
        if (BO["InjuryFallHeight"] == "") {
            setM("M", "Injury Fall Height");             
        }
    };
    if(BO["CallHasTransport"]==true)
    {
        if (typeof BO["VitalsCount"] !== 'undefined') {
            if (BO["VitalsCount"] < 2) {
                setM("M", "Two Vitals interventions required");             
            }
        }
        else
        {        
            if (BO["HasSBP"] == false) {
                setM("M", "Systolic BP required");                     
            };
            if (BO["HasPulseRate"] == false) {
                setM("M", "Pulse Rate required");                     
            };
            if (BO["HasPulseRhythm"] == false) {
                setM("M", "Pulse Rhythm required");                     
            };
            if (BO["HasRespRate"] == false) {
                setM("M", "Resperatory Rate required");                     
            };
            if (BO["HasRespEffort"] == false) {
                setM("M", "Resperatory Effort required");                     
            };
            if (BO["HasGCSTotal"] == false) {
                setM("M", "GCS Total required");                     
            };
        }
    };
    
    for (var i = 0; i < summaryArray.length; i++)
    {
        var a = {};
        var b = "";
        a = summaryArray[i];
        b = a.type + ":  " + a.text
        rA.push(b)
    }

    //return summaryArray;
    return rA;
};

var setLine = function (t, val) {
    var sa = {};
    if (typeof t !== 'undefined') {
        if (t !== '') {
            sa.type = t;
        }
    }
    if (typeof val !== 'undefined') {
        if (val !== null)
        {
            sa.text= val;
        }
    };
    summaryArray.push(sa);
};

var setM = function (t, txt)
{
    var sm = {};

    if (t == 'M') {
        sm.type = "MISSING:"
    };
    //if (t == 'B') {
    //    sm.type = "BAD DATA:"
    //};
    if (t == 'U') {
        sm.type = "UNKNOWN:"
    };

    if (typeof txt !== 'undefined') {        
        sm.text = txt;        
    };
    summaryArray.push(sm);
};