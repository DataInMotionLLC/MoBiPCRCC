var u = require('cloud/Utilities.js');
var moment = require('moment');
var summaryArray = new Array();
exports.setCallSummary = function (TheCall)
{
    var rA = [];  
    
    if (typeof TheCall.Props == 'undefined') {
        u.RaiseError("setCallSummary", 100, "Undefined TheCall.Props Object", "setCallSummary");        
    };

    var BO = TheCall.Props;
    if (typeof TheCall.Props.Intervals === 'undefined') {        
        u.RaiseError("setCallSummary", 100, "Undefined TheCall.Props Object", "setCallSummary");
        
    };
    var p = "";
    if (typeof TheCall["VehicleName"] !== 'undefined') {
        p = TheCall["VehicleName"]  
    };
    if (typeof BO["CallType"] !== 'undefined') {
        p = "Type: " + BO["CallType"]
    };
    if (typeof BO["CreatedDate"] !== 'undefined') {
        p = p + "    Report Date:  " + BO["CreatedDate"]
    };
    if (typeof TheCall["status"] !== 'undefined') {
        p = p + "   " + TheCall["status"]
    };
    if (typeof BO["TimePSAP"] !== 'undefined') {
        p = p + "    Initial Time:  " + BO["TimePSAP"]
    };
    if (p.length != 0) {
        rA.push(p);
    };
    var p = ""

    var cs = ""
    if (typeof TheCall.CrewIDS !== 'undefined') {
        if (typeof TheCall.CrewIDS.length !== 0) {
            for (var i = 0; i < TheCall.CrewIDS.length ; i++) {
                var f = "";
                var l = "";
                if (typeof TheCall.CrewIDS[i].lastName != 'undefined') {
                    if (TheCall.CrewIDS[i].lastName != '') {
                        l = TheCall.CrewIDS[i].lastName;
                    }
                };

                if (typeof TheCall.CrewIDS[i].firstName != 'undefined') {
                    if (TheCall.CrewIDS[i].firstName != '') {
                        f = TheCall.CrewIDS[i].firstName;
                    }
                }

                var nme = ""
                if (f !== "") {
                    nme = f + " "
                }
                if (l !== "") {
                    nme = nme + l;
                }
            }
            cs = cs + nme + " "
        }
    };
    p = "Crew: " + cs
    if (p.length != 0) {
        rA.push(p)
    };


    if (typeof BO["TimeUnitNotified"] !== 'undefined') {
        p = p + "Notified: " + BO["TimeUnitNotified"]
    };
    if (typeof BO["TimeAcknowledged"] !== 'undefined') {
        p = p + "    Unit Ack: " + BO["TimeAcknowledged"]
    };
    if (typeof BO["TimeEnRoute"] !== 'undefined')
    {
        if (BO["TimeEnRoute"] !== "")
        {
            p = p + "    EnRoute: " + BO["TimeEnRoute"]
        }
        else
        {
            setM("M", "En Route")
        }
    };

    if (BO["CallStatus"] !== "Cancel") {
        if (typeof BO["TimeAtScene"] !== 'undefined') {
            if (BO["TimeAtScene"] !== "") {
                p = p + "    At Scene: " + BO["TimeAtScene"]
            }
            else {
                setM("M", "At Scene")
            }
        };

        if (typeof BO["TimeAtPatient"] !== 'undefined') {
            if (BO["TimeAtPatient"] !== "") {
                p = p + "    At Patient: " + BO["TimeAtPatient"]
            }
            else {
                setM("M", "At Patient")
            }
        };

        if (typeof BO["TimeTransfer"] !== 'undefined') {
            p = p + "    Transfer: " + BO["TimeTransfer"]
        };
        if (p.length != 0) {
            rA.push(p);
        };
        var p = "";
        if (typeof BO["TimeLeftScene"] !== 'undefined') {
            if (BO["TimeLeftScene"] !== "") {
                p = p + "Left Scene: " + BO["TimeLeftScene"]
            }
            else {
                setM("M", "Left Scene")
            }
        };

        if (BO["CallHasTransport"] == true) {
            if (typeof BO["TimePatientArrived"] !== 'undefined') {
                if (BO["TimePatientArrived"] !== "") {
                    p = p + "    Patient Arrived: " + BO["TimePatientArrived"]
                }
                else {
                    setM("M", "Time Patient Arrived")
                }
            };
            if (typeof BO["TimeTransferPatientCare"] !== 'undefined') {
                if (BO["TimeTransferPatientCare"] !== "") {
                    p = p + "    Transfer: " + BO["TimeTransferPatientCare"]
                }
                else {
                    setM("M", "Time Transfer Patient Care")
                }
            }
        }
    }
    else
    {
        if (typeof BO["TimeCancel"] !== 'undefined') {
            if (BO["TimeCancel"] !== "") {
                p = p + "    Cancel: " + BO["TimeCancel"]
            }
            else {
                setM("M", "Time Transfer Patient Care")
            }
        }
    };

    if (typeof BO["TimeBackHome"] !== 'undefined') {
        if (BO["TimeBackHome"] !== "") {
            p = p + "    Home: " + BO["TimeBackHome"]
        }
        else {
            setM("M", "Time Back Home")
        }
    };

    if (typeof BO["TimeCallComplete"] !== 'undefined') {
        if (BO["TimeCallComplete"] !== "") {
            p = p + "    Complete: " + BO["TimeCallComplete"]
        }
        else {
            setM("M", "Time Call Complete")
        }
    };
    if (p.length != 0) {
        rA.push(p);
    };
    
    
    ////DIPATCH
    if (typeof TheCall.Version3.eDispatch == 'undefined') {
        setM("M", "All Dispatch Data")
    }
    else {
        if (BO["DispatchComplaint"] == "") {
            setM("M", "Dispatch Complaint/Reason")
        }
    };


    ///RESPONSE
    if (typeof TheCall.Version3.eResponse == 'undefined') {
        setM("M", "All Reponse Data")
    }
    else {        
        if (BO.RespIncidentNumber == "") {
            setM("M", "Response Incident Number")
        };
        if (BO["RespRig#"] == "") {
            setM("M", "Unit Number")
        };
        if (BO["EMSUnitCallSign"] == "") {
            setM("M", "EMS Unit Call Sign")
        };
        if (BO["DispatchComplaint"] == "Standy") {
            if (BO["RespStandByPurpose"] == "") {
                setM("M", "Standby Purpose")
            }
        };
        if (BO["RespUnitLevelOfCare"] == "") {
            setM("M", "Unit Level Of Care")
        };
        if (BO["CallStatus"] == "Normal") {
            if (BO["RespOnSceneMiles"] == "") {
                setM("M", "On Scene Odometer")
            };
            if (BO["RespOnSceneMiles"] == "") {
                setM("M", "On Scene Odometer")
            };
            if (BO["RespTypeOfServiceRequest"] == "") {
                setM("M", "Type Of Service Request")
            };
            if (BO["RespPrimaryRoleOfUnit"] == "") {
                setM("M", "Primary Role Of Unit")
            };
            if (BO["RespResponseModeToScene"] == "") {
                setM("M", "Response Mode To Scene")
            };
            if (p.CallHasTransport == true) {
                if (BO["DispoTransportModeFromScene"] == "") {
                    setM("M", "Transport Mode From Scene")
                };
                if (BO["RespDestinationMiles"] == "") {
                    setM("M", "Destination Odometer")
                }
            };
            if (BO["RespOnSceneMiles"] == "") {
                setM("M", "On Scene Odometer")
            };
            if (BO["RespBeginMileage"] == "") {
                setM("M", "Beginning (En-Route) Odometer")
            }
        }
    };
    if (p.length != 0) {
        rA.push(p);
    };

    ///TIMES
    if (typeof TheCall.eTimes == 'undefined')
    {
        setM("M", "All Call Times")
    }
    else {
        if (BO["TimeDispatchNotified"] !== "") {
            setM("M", "Time Dispatch Notified")
        }
        if (BO["TimeUnitNotified"] !== "") {
            setM("M", "Unit Notified Time")
        }
    };
        
    p = "";
    if (typeof BO.Intervals !== 'undefined') {
        if (BO.Intervals["IntervalDispatchNotified"] !== "") {
            p = p + "Dispatch/Notification: " + BO.Intervals["IntervalDispatchNotified"]
        };
        if (BO.Intervals["IntervalUnitAck"] !== "") {
            p = p + "  Notification/Acknowlege: " + BO.Intervals["IntervalUnitAck"]
        };
        if (BO.Intervals["IntervalUnitEnRoute"] !== "") {
            p = p + "  Ack/EnRoute: " + BO.Intervals["IntervalUnitEnRoute"]
        };
        if (BO.Intervals["IntervalUnitAtScene"] !== "") {
            p = p + "EnRoute/Scene: " + BO.Intervals["IntervalUnitAtScene"]
        }

        if (BO.Intervals["IntervalUnitAtPatient"] !== "") {
            p = p + "  At Scene/Patient: " + BO.Intervals["IntervalUnitAtPatient"]
        };
        if (p.length != 0) {
            rA.push(p)
        };
        p = "";

        if (BO.Intervals["IntervalUnitLeftScene"] !== "") {
            p = p + "AtPat/LeftScene: " + BO.Intervals["IntervalUnitLeftScene"]
        }
        if (BO.Intervals["IntervalUnitPatientArrived:"] !== "") {
            p = p + "    Scene/Arrived: " + BO.Intervals["IntervalUnitPatientArrived"]
        }
        if (BO.Intervals["IntervalUnitTransferCare:"] !== "") {
            p = p + "    Scene/TranferOfCare: " + BO.Intervals["IntervalUnitTransferCare"]
        }
        if (BO.Intervals["IntervalUnitComplete"] !== "") {
            p = p + "    TransCare/Complete: " + BO.Intervals["IntervalUnitComplete"]
        }
        if (p.length != 0) {
            rA.push(p)
        }
        p = "";

        if (BO.Intervals["IntervalUnitHome"] !== "") {
            p = p + "Complete/Home: " + BO.Intervals["IntervalUnitHome"]
        }
        if (BO.Intervals["IntervalUnitBackInService"] !== "") {
            p = p + "Complete/InService: " + BO.Intervals["IntervalUnitBackInService"]
        }
        if (p.length != 0) {
            rA.push(p);

        };



        if (typeof TheCall.Props.eDisposition === 'undefined') {
            setM("M", "Disposition Information")
        }
        else {
            p = "";
            if ((["CallHasTransport"] == true)) {
                if (BO["DispoTo"] !== "") {
                    setM("U", "Destination/Transfered to Name ");
                }
                else {
                    p = p + "Destination : " + BO.Intervals["DispoTo"]
                };
                ;
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
                };;
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
                if (p.length != 0) {
                    rA.push(p);
                };
            }
        };
        ///Patient Rules
        if ((typeof TheCall.Props.ePatient === 'undefined') && (BO["CallHasPatient"] !== true)) {
            setM("U", "Patient Data Not Recorded");
        }
        else {
            p = "";
            if (BO["PatientLastName"] == "") {
                setM("U", "Patient Last Name");
            }
            else {
                p = p + "Patient: " + BO.Intervals["PatientLastName"]
            };

            if (BO["PatientFirstName"] == "") {
                setM("U", "Patient First Name");
            }
            else {
                p = p + ", " + BO.Intervals["PatientFirstName"]
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
                setM("M", "Patient Date of Birth");
            }
            else {
                p = p + "DOB: " + BO.Intervals["PatientDOB"]
            };
            if (BO["Age"] == "") {
                setM("U", "Patient Age");
            }
            if (p.length != 0) {
                rA.push(p);
            };
        };
    };
    if (BO["CallStatus"] != 'Cancel') {
        if (typeof TheCall.Props.eScene === 'undefined') {
            setM("M", "Scene Data");
        }
        else
        {           
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

    BO["Medications"]
    BO["Procedures"]
    
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
        sm.type = "MISSING"
    };
    //if (t == 'B') {
    //    sm.type = "BAD DATA:"
    //};
    if (t == 'U') {
        sm.type = "UNKNOWN"
    };

    if (typeof txt !== 'undefined') {        
        sm.text = txt;        
    };
    summaryArray.push(sm);
};