u = require('cloud/Utilities.js');
exports.setCallRules = function (call)
{
    if (call.Props == 'undefined') {
        console.log("Props Undefined")
        return null
    };
    var p = call.Props;
    u.RaiseError("setCallRules", 100, "setCallRules", "setCallRules");
    
    //Response   
    if (typeof call.VehicleNumber == 'undefined') {
        u.RaiseError("Undefined Rig#", 0, "setCallRules", "Missing Rig#");
    }
    else {
        if (call.VehicleNumber == '') {
            u.RaiseError("Null or Missing Rig#", 0, "setCallRules", "Missing Rig#");
        }
    };
    if (p["RespIncidentNumber"] == "") {
        u.RaiseError("Missing Response Incident Number", 0, "setCallRules", "Missing Response Incident Number");
    };
    if (p["RespTypeOfServiceRequest"] == "") {
        u.RaiseError("Missing Onset Type Of Service Request", 0, "setCallRules", "Missing Onset Type Of Service Request"); 
    };
    if (p["RespPrimaryRoleOfUnit"] == "") {
        u.RaiseError("Missing Onset Primary Role Of Unit", 0, "setCallRules", "Missing Onset Primary Role Of Unit");
    };
    if (p["RespResponseModeToScene"] == "") {
        u.RaiseError("Missing Onset Response Mode To Scene", 0, "setCallRules", "Missing Onset Response Mode To Scene");
    };

    if (p.CallHasTransport == true) {
        if (p["DispoTransportModeFromScene"] == "") {
            u.RaiseError("Missing Onset Transport Mode From Scene", 10, "setCallRules", "Missing Onset Transport Mode From Scene");
        }

        if (p["RespBeginMileage"] == "") {
            u.RaiseError("Missing Begin Odometer", 0, "setCallRules", "Missing Begin Odometer");
        };

        if (p["RespBeginMileage"] !== "") {
            if (p["RespBeginMileage"] > p["RespOnSceneMiles"]) {
                u.RaiseError("Begin Mileage " + p["RespBeginMileage"] + " Cannot Exceed On Scene Mileage " + p["RespOnSceneMiles"], 10, "setCallRules", "Begin Mileage " + p["RespBeginMileage"] + " Cannot Exceed On Scene Mileage");
            }
        };

        if (p["RespDestinationMiles"] !== "") {
            u.RaiseError("Missing Destination Odometer", 0, "setCallRules", "");
        }
        else {
            if (p["RespBeginMileage"] !== "") {
                if (p["RespBeginMileage"] > p["RespDestinationMiles"]) {
                    u.RaiseError("Destination Mileage " + p["RespDestinationMiles"] + " Cannot Exceed Begin Mileage " + p["RespBeginMileage"], 10, "setCallRules", "Destination Mileage " + p["RespDestinationMiles"] + " Cannot Exceed Begin Mileage");
                }
            }

            if (p["RespOnSceneMiles"] !== "") {
                if (p["RespOnSceneMiles"] > p["RespDestinationMiles"]) {
                    u.RaiseError("Destination Mileage " + p["RespOnSceneMiles"] + " Cannot Exceed On Scene Mileage " + p["RespOnSceneMiles"], 10, "setCallRules", "Destination Mileage " + p["RespOnSceneMiles"] + " Cannot Exceed On Scene Mileage " + p["RespOnSceneMiles"]);
                }
            }
        };
        ///Disposition
        if (p["DispoDestinationType"] == "") {
            u.RaiseError("Missing DestinationType", 0, "setCallRules", "Missing DestinationType");
        };
        if (p["DispoToCode"] == "") {
            u.RaiseError("Missing Disposition Facility Code", 0, "setCallRules", "Missing Disposition Facility Code");
        };
        if (p["DispoReasonForChoosing"] == "") {
            u.RaiseError("Missing Onset Reason For Choosing Destination ", 0, "setCallRules", "Missing Onset Reason For Choosing Destination");
        };
        var h = "";
        if (p["DispoTo"] == "Hospital-Emergency Department") {
            h = "Hospital"
        };
        if (p["DispoTo"] == "Hospital-Non-Emergency Department Bed") {
            h = "Hospital"
        };
        if (p["DispoTo"] == "Urgent Care") {
            h = "Hospital"
        };
        if (p["DispoTo"] == "Freestanding Emergency Department") {
            h = "Hospital"
        };
        if (h !== "") {
            u.RaiseError("Missing Hospital Disposition Name", 0, "setCallRules", "Missing Hospital Disposition Name");
        };
        if (p["EmergencyRoomDisposition"] == "") {
            u.RaiseError("Missing EmergencyRoomDisposition", 0, "setCallRules", "Missing EmergencyRoomDisposition");
        }
    };   
    //Patient Rules
    if (p["CallHasPatient"] == true) {

        //if (p["PatientLastName"] == "") {
        //    u.RaiseError("Missing Patient Last Name", 10, "setCallRules", "Missing Patient Last Name");
        //};
        //if (p["PatientFirstName"] == "") {
        //    u.RaiseError("Missing Patient First Name", 10, "setCallRules", "Missing Patient First Name");
        //};
        //if (p["PatientZip"] == "") {
        //    u.RaiseError("Missing PatientZip", 10, "setCallRules", "Missing PatientZip");
        //};
        //if (p["PatientCity"] == "") {
        //    u.RaiseError("Missing PatientCity", 10, "setCallRules", "Missing PatientCity");
        //};
        //if (p["PatientCompleteAddress"] == "") {
        //    u.RaiseError("Missing PatientCompleteAddress", 10, "setCallRules", "Missing PatientCompleteAddress");
        //};
        //if (p["PatientPhone"] == "") {
        //    u.RaiseError("Missing PatientPhone", 10, "setCallRules", "Missing PatientPhone");
        //};
        //if (p["SSN"] == "") {
        //    u.RaiseError("Missing Patient SSN", 10, "setCallRules", "Missing Patient SSN");
        //};
        //if (p["Gender"] == "") {
        //    u.RaiseError("Missing Gender", 10, "setCallRules", "Missing Gender");
        //};
        //if (p["PatientDOB"] == "") {
        //    u.RaiseError("Missing PatientDOB", 10, "setCallRules", "Missing PatientDOB");
        //};
        //if (p["Age"] == "") {
        //    u.RaiseError("Missing Age", 10, "setCallRules", "Missing Age");
        //}
        //else {
        //    if (p["AgeUnits"] == "") {
        //        u.RaiseError("Missing AgeUnits", 10, "setCallRules", "Missing AgeUnits");
        //    }
        //};

        //Situation
        if (p["OnsetDateTime"] == "") {
            u.RaiseError("Missing Onset Date Time", 10, "setCallRules", "Missing Onset Date Time");
        };
        if (p["ChiefComplaint"] == "") {
            u.RaiseError("Missing Chief Complaint", 10, "setCallRules", "Missing Chief Complaint");
        };

        if (p["PrimarySymptom"] == "") {
            u.RaiseError("Missing Primary Symptom", 10, "setCallRules", "Missing Primary Symptom");
        };
        if (p["ProviderImpresion"] == "") {
            u.RaiseError("Missing Provider Impresion", 10, "setCallRules", "Missing Provider Impresion");
        };
        if (p["PriorAid"] == "") {
            u.RaiseError("Missing Prior Aid", 10, "setCallRules", "Missing Prior Aid");
        };
        if (p["PossibleInjury"] == "") {
            u.RaiseError("Missing Possible Injury", 10, "setCallRules", "Missing Possible Injury");
        };
        if (p["ChiefComplaint"] == "") {
            u.RaiseError("Missing Chief Complaint", 10, "setCallRules", "Missing Chief Complaint");
        };
        if (p["ChiefComplaintLocation"] == "") {
            u.RaiseError("Missing Chief Complaint Location", 10, "setCallRules", "Missing Chief Complaint Location");
        };
        if (p["OtherAssociatedSymptoms"] == "") {
            u.RaiseError("Missing Other Associated Symptoms", 10, "setCallRules", "Missing Other Associated Symptoms");
        };
        if (p["SecondaryImpresion"] == "") {
            u.RaiseError("Missing Secondary Impresion", 10, "setCallRules", "Missing Secondary Impresion");
        };
        if (p["InjuryCause"] == "") {
            u.RaiseError("Missing Injury Cause", 10, "setCallRules", "Missing Injury Cause");
        };
        if (p["CardiacArrest"] == "Yes") {
            if (p["ArrestEtiology"] == "") {
                u.RaiseError("Missing Arrest Etiology", 10, "setCallRules", "Missing Arrest Etiology");
            };
            if (p["RescAttempt"] == "") {
                u.RaiseError("Missing Rescuscitation Attempted", 10, "setCallRules", "Missing Rescuscitation Attempted");
            };
            if (p["CardiacWitnessed"] == "") {
                u.RaiseError("Missing Cardiac Witnessed By", 10, "setCallRules", "Missing Cardiac Witnessed By");
            };
            if (p["AEDUsedPrior"] == "") {
                u.RaiseError("Missing AED Used Prior", 10, "setCallRules", "Missing AED Used Prior");
            };
            if (p["ArrestTime"] == "") {
                u.RaiseError("Missing Arrest Time", 10, "setCallRules", "Missing Arrest Time");
            };
            if (p["CPRTime"] == "") {
                u.RaiseError("Missing CPR Time", 10, "setCallRules", "Missing CPR Time");
            };
            if (p["ResuscDiscontinued"] == "") {
                u.RaiseError("Missing Resuscitation Discontinued", 10, "setCallRules", "Missing Resuscitation Discontinued");
            };
            if (p["CardiacRhythmAtDest"] == "") {
                u.RaiseError("Missing Cardiac Rhythm At Destination", 10, "setCallRules", "Missing Cardiac Rhythm At Destination");
            }
        };
        if (p["HistBarriersToCare"] == "") {
            u.RaiseError("Missing Barriers To Care", 10, "setCallRules", "Missing Barriers To Care");
        };
        if (p["AlcoholDrugUse"] == "") {
            u.RaiseError("Missing Alcohol Drug Use", 10, "setCallRules", "Missing Alcohol Drug Use");
        };
    };

        ////
        //Scene
    if (p["CallStatus"] == "Normal") {
        if (p["SceneCity"] == "") {
            u.RaiseError("Missing SceneCity", 10, "setCallRules", "Missing SceneCity");
        };
        if (p["SceneCounty"] == "") {
            u.RaiseError("Missing SceneCounty", 10, "setCallRules", "Missing SceneCounty");
        };
        if (p["SceneState"] == "") {
            u.RaiseError("Missing SceneState", 10, "setCallRules", "Missing SceneState");
        };
        if (p["SceneZip"] == "") {
            u.RaiseError("Missing SceneZip", 10, "setCallRules", "Missing SceneZip");
        };
        if (p["LocationType"] == "") {
            u.RaiseError("Missing LocationType", 10, "setCallRules", "Missing LocationType");
        };
        if (p["NumberOfPatientsAtScene"] == "") {
            u.RaiseError("Missing Number Of Patients At Scene", 10, "setCallRules", "Missing Number Of Patients At Scene");
        };
        if (p["MassCasualtyIncident"] == "") {
            u.RaiseError("Missing Mass Casualty Incident", 10, "setCallRules", "Missing Mass Casualty Incident");
        }
    };
          
    if (p["CrewCount"] < 2) {
        u.RaiseError("Minimum of two crew required", 0, "setCallRules", "Minimum of two crew required");
    };
    if (p["PCRID#"] == "") {
        u.RaiseError("Missing PCR ID", 0, "setCallRules", "Missing PCR ID");
    };
    if (p["DispatchComplaint"] == "") {
        u.RaiseError("Missing Dispatch Complaint", 0, "setCallRules", "Missing Dispatch Complaint");
    };
    if (p["CallType"] !== 'Standby')
    {
        if (p["DispatchEMDPerformed"] == "") {
            u.RaiseError("Missing Dispatch Has EMD", 0, "setCallRules", "Missing Dispatch Has EMD");
        };
    }

    if (p["EMSUnitCallSign"] == "") {
        u.RaiseError("Missing EMS Unit Call Sign", 0, "setCallRules", "Missing EMS Unit Call Sign");
    }
    if (p["Fall"] == true) {
        if (p["InjuryFallHeight"] == "") {
            u.RaiseError("Missing Injury Fall Height", 0, "setCallRules", "Missing Injury Fall Height");
        }
    };
    if (typeof p["Crew"] === 'undefined') {
        u.RaiseError("Missing Crew", 0, "setCallRules", "Missing Crew");
    }
    else {
        for (var t = 0; t < p["Crew"].length; t++) {
            if (p["Crew"][t] !== 'undefined') {
                if (p["Crew"][t].MemberLevel == "") {
                    u.RaiseError("Missing Missing Crew Member", 0, "setCallRules", "Missing Missing Crew Member");
                }
            }
        }
    };
    if (p.CallHasTransport == true) {
        if (p["VitalsCount"] < 2) {
            u.RaiseError("Two Vitals interventions required", 0, "setCallRules", "Two Vitals interventions required");
        };
        if (p["HasSBP"] == false) {
            u.RaiseError("Systolic BP required", 0, "setCallRules", "Systolic BP required");
        };
        if (p["HasPulseRate"] == false) {
            u.RaiseError("Pulse Rate required", 0, "setCallRules", "Pulse Rate required");
        };
        if (p["HasPulseRhythm"] == false) {
            u.RaiseError("Pulse Rhythm required", 0, "setCallRules", "Pulse Rhythm required");
        };
        if (p["HasRespRate"] == false) {
            u.RaiseError("Resperatory Rate required", 0, "setCallRules", "Resperatory Rate required");
        };
        if (p["HasRespEffort"] == false) {
            u.RaiseError("Resperatory Effort required", 0, "setCallRules", "Resperatory Effort required");
        };
        if (p["HasGCSTotal"] == false) {
            u.RaiseError("GCS Total required", 0, "setCallRules", "GCS Total required");
        }
    };

    if(typeof call.Version3.eTimes !== 'undefined')
    {
        var curTime;
        
        if (p["TimePSAP"] !== "") { //T1
            curTime = p["TimePSAP"];
            var startTime = p["TimePSAP"];
            curTime = p["TimePSAP"];
        };

        if (["TimeDispatchNotified"] !== "") { //T2
            curTime = p["TimeDispatchNotified"];                        
            if (typeof startTime == 'undefined') {
                var startTime = p["TimeDispatchNotified"];
                curTime = p["TimePSAP"];
            }
            else {
                if (startTime > p["TimeDispatchNotified"]) {
                    u.RaiseError("Dispatch Notified Time Cannot be greater than PSAP Time", 0, "setCallRules", "TimeError");
                }
            }
        };

        if (p["TimeUnitNotified"] !== "") { //T3
            curTime = p["TimeUnitNotified"];
            if (typeof startTime == 'undefined') {
                var startTime = p["TimeUnitNotified"];
                curTime = p["TimePSAP"];
            }
            else {
                if (startTime > p["TimeUnitNotified"]) {
                    u.RaiseError("Unit Notified Time Cannot be greater than Dispatch Time", 0, "setCallRules", "TimeError");
                }
            }
        }
        else {
            u.RaiseError("Unit Notified Time Required", 0, "setCallRules", "Missing Unit Notification Time");
        };

        if (p["TimeAcknowledged"] !== "") {  //T4
            if (curTime > p["TimeUnitNotified"])
            {
                u.RaiseError("Unit Acknolwedged Time must be greater than " + curTime, 0, "setCallRules", "TimeError");
            }
            else
            {
                curTime = p["TimeAcknowledged"];
            }
        };
        if (p.CallStatus !== 'Cancel') {

            if (p["TimeEnRoute"] !== "") { //T5            
                if (curTime > p["TimeUnitNotified"]) {
                    u.RaiseError("Unit Time En-Route Must be greater than " + curTime, 0, "setCallRules", "TimeError");
                }
                else {
                    curTime = p["TimeEnRoute"];
                }
            }
            else {
                u.RaiseError("Unit Time En-Route Required", 0, "setCallRules", "Missing Unit En Route Time");
            };

            if (p["TimeAtScene"] !== "") { //T6
                if (curTime > p["TimeUnitNotified"]) {
                    u.RaiseError("Time at Scene be greater than " + curTime, 0, "setCallRules", "TimeError");
                }
                else {
                    curTime = p["TimeAtScene"];
                }
            }
            else {
                u.RaiseError("Unit Time at Scene Required", 0, "setCallRules", "Missing Time at Scene");
            };
            if (p["CallHasPatient"] == true)
            {
                if (p["TimeAtPatient"] !== "") { //T7
                    if (curTime > p["TimeAtPatient"]) {
                        u.RaiseError("Time at Patient be greater than " + curTime, 0, "setCallRules", "TimeError");
                    }
                    else {
                        curTime = p["TimeAtPatient"];
                    }
                }
                else {
                    u.RaiseError("Unit Time at Patient Required", 0, "setCallRules", "Missing Time at Patient");
                };

                if (p["CallHasTransport"] == true) {
                    if (p["TimeTransfer"] !== "") { //T8
                        if (curTime > p["TimeTransfer"]) {
                            u.RaiseError("Time Transfer of Care be greater than " + curTime, 0, "setCallRules", "TimeError");
                        }
                        else {
                            curTime = p["TimeTransfer"];
                        }
                    };


                    if (p["TimeLeftScene"] !== "") { //T9
                        if (curTime > p["TimeLeftScene"]) {
                            u.RaiseError("Time Left Scene be greater than " + curTime, 0, "setCallRules", "TimeError");
                        }
                        else {
                            curTime = p["TimeLeftScene"];
                        }
                    }
                    else {
                        u.RaiseError("Time Left Scene Required", 0, "setCallRules", "Missing Time at Patient");
                    };


                    if (p["TimeArrivalAtLanding"] !== "") { //T10
                        if (curTime > p["TimeArrivalAtLanding"]) {
                            u.RaiseError("Time Arrived at Landing greater than " + curTime, 0, "setCallRules", "TimeError");
                        }
                        else {
                            curTime = p["TimeArrivalAtLanding"];
                        }
                    };

                    if (p["TimePatientArrived"] !== "") { //T11
                        if (curTime > p["TimePatientArrived"]) {
                            u.RaiseError("Time Patient Arrived must be greater than " + curTime, 0, "setCallRules", "TimeError");
                        }
                        else {
                            curTime = p["TimePatientArrived"];
                        }
                    }
                    else {
                        u.RaiseError("Time Patient Arrived at Destination Required", 0, "setCallRules", "Missing Patient Disposition Time");
                    };

                    if (p["TimeTransferPatientCare"] !== "") { //T12
                        if (curTime > p["TimeTransferPatientCare"]) {
                            u.RaiseError("Time Patient Transfer of Care must be greater than " + curTime, 0, "setCallRules", "TimeError");
                        }
                        else {
                            curTime = p["TimeTransferPatientCare"];
                        }
                    }
                    else {
                        u.RaiseError("Time Patient Transfer of Care Required", 0, "setCallRules", "Missing Patient Disposition Time");
                    }
                } //HasTransport
            }//HasPatient
        }// Cancel
        if (p.CallStatus == 'Cancel') {
            if (p["TimeCancel"] !== "") { //T14
                if (curTime > p["TimeCancel"]) {
                    u.RaiseError("Time Canceled must be greater than " + curTime, 0, "setCallRules", "TimeError");
                }
                else {
                    curTime = p["TimeCancel"];
                }
            }
            else {
                u.RaiseError("Time Canceled Required", 0, "setCallRules", "Missing Cancel Time");
            }
        };

        if (p["TimeUnitBackInService"] !== "") { //T13
            if (curTime > p["TimeUnitBackInService"]) {
                u.RaiseError("Time Back In Service must be greater than " + curTime, 0, "setCallRules", "TimeError");
            }
            else {
                curTime = p["TimeUnitBackInService"];
            }
        }
        else {
            u.RaiseError("Time Back in Service Required", 0, "setCallRules", "Missing Cancel Time");
        };

        if (p["TimeBackHome"] !== "") { //T15
            if (curTime > p["TimeBackHome"]) {
                u.RaiseError("Time Back Home must be greater than " + curTime, 0, "setCallRules", "TimeError");
            }
            else {
                curTime = p["TimeBackHome"];
            }
        };

        if (p["TimeCallComplete"] !== "") { //T16
            if (curTime > p["TimeCallComplete"]) {
                u.RaiseError("Time Call Complete must be greater than " + curTime, 0, "setCallRules", "TimeError");
            }
        }
    }
};