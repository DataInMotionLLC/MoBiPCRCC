
exports.setProps = function () {
    var p = new Object();
    //Header    
    p["RespAgencyNumber"] = "";
    p["RespAgencyName"] = "";
    p["EMSAgencyState"] = "";
    p["EMSAgencyCounty"] = "";
    p["EMSAgencyPrimaryService"] = "";
    p["EMSAgencyOtherServices"] = "";
    p["EMSAgencyLevelOfService"] = "";
    p["EMSAgencyOrganizationType"] = "";
    p["EMSAgencyOrganizationStatus"] = "";
    p["Intervals"] = [];
    p["DispoPatientMovedFromRig"] = "";
    p["EncounterRoute"] = [];
    var Intervals = {}
    Intervals.IntervalNotified = 0;
    Intervals.IntervalUnitAck = 0;
    Intervals.IntervalUnitEnRoute = 0;
    Intervals.IntervalUnitAtScene = 0;;
    Intervals.IntervalUnitAtPatient = 0;
    Intervals.IntervalUnitTransferToCare = 0;
    Intervals.IntervalUnitLeftScene = 0;
    Intervals.IntervalUnitAtLanding = 0;
    Intervals.IntervalUnitPatientArrived = 0;
    Intervals.IntervalUnitTransferCare = 0;
    Intervals.IntervalUnitBackInService = 0;
    Intervals.IntervalUnitCancel = 0;
    Intervals.IntervalUnitHome = 0;
    Intervals.IntevalUnitComplete = 0;
    Intervals.IntervalUnitComplete = 0;
    p.Intervals = Intervals;

    /*
    EMS AGENCY NAME
    EMS AGENCY STATE
    EMS AGENCY COUNTY
    PRIMARY TYPE OF SERVICE
    OTHER TYPES OF SERVICE
    LEVEL OF SERVICE
    ORGANIZATIONAL TYPE
    ORGANIZATION STATUS
    */
    p["CrewNarrative"] = "";
    p["CallStatus"] = "";
    p["CallHasPatient"] = "";
    p["CallHasTransport"] = "";
    p["CallHasTreatment"] = "";
    p["CallRefusedTreatment"] = "";
    p["CallDisposition"] = ""; //Canceled, Canceled Prior, Patient Treated
    p["CallType"] = ""; //Emergent, Standby, Transfer
    p["AVPU"] = "";
    p["RespLadenMileage"] = ""
    p["ToSceneMileage"] = ""
    p["CallNumber"] = "";
    p["CreatedBy"] = "";
    p["CreatedDate"] = "";
    p["OtherAgencies"] = [];
    p["DispatchHasEMD"] = "";
    p["PCRID"] = "";
    p["DispatchComplaint"] = "";
    p["DispatchEMDPerformed"] = "";
    p["DispatchEMDCardNumber"] = "";
    p["DispatchCallLocation"] = "";
    p["DispNumberPatientTransport"] = "";
    p["DispatchPriority"] = "";
    p["DispoTo"] = "";
    p["DispoToCode"] = "";
    p["DispoToAddress"] = "";
    p["Disposition"] = "";
    p["DispoHowMovedToRig"] = "";
    p["DispoTransportMethod"] = "";
    p["DispoTransportModeFromScene"] = "";
    p["DispoReasonForChoosing"] = "";
    p["DispoDestinationType"] = "";
    p["DispoPatientDestination"] = "";
    p["DispoPatientPosition"] = "";
    p["DispoPreActTime"] = "";
    p["DispoPreAct"] = "";
    p["DispoHospitalActivation"] = "";
    p["DispoState"] = "";
    p["DispoCounty"] = "";
    p["DispoZip"] = "";
    p["DispoFinalAccuity"] = "";
    p["AddDispoTransportModeFromScene"] = "";
    p["TimePSAP"] = "";
    p["TimeDispatchNotified"] = "";
    p["TimeUnitNotified"] = "";
    p["TimeAcknowledged"] = "";

    p["TimeAtScene"] = "";
    p["TimeAtPatient"] = "";
    p["TimeTransfer"] = "";
    p["TimeLeftScene"] = "";
    p["TimeTransferPatientCare"] = "";
    p["TimeUnitBackInService"] = "";

    p["TimeArrivalAtLanding"] = "";
    p["TimePatientArrived"] = "";
    p["TimeCancel"] = "";
    p["TimeBackHome"] = "";
    p["TimeCallComplete"] = "";
    p["RespIncidentNumber"] = "";
    p["RespTypeOfServiceRequest"] = "";
    p["RespStandByPurpose"] = "";
    p["RespDispatchDelay"] = "";
    p["ResponseDelay"] = "";
    p["RespSceneDelay"] = "";
    p["PrimarySymptom"] = "";
    p["RespTransportDelay"] = "";
    p["RespPrimaryRoleOfUnit"] = "";
    p["RespTurnAroundDelay"] = "";
    p["RespRig#"] = "";
    p["RespUnitLevelOfCare"] = "";
    p["RespBeginMileage"] = "";
    p["RespOnSceneMiles"] = "";
    p["RespDestinationMiles"] = "";
    p["RespEndMiles"] = "";
    p["CallDate"] = "";
    p["TimeEnRoute"] = "";
    p["RespResponseModeToScene"] = "";
    p["RespAddResponseModeToScene"] = "";
    p["RespTotalMiles"] = "";
    p["PatientFirstName"] = "";
    p["PatientMiddleName"] = "";
    p["PatientLastName"] = "";
    p["PatientName"] = "";
    p["PatientAddress"] = "";
    p["PatientCompleteAddress"] = "";
    p["PatientCity"] = "";
    p["PatientCSZ"] = "";
    p["PatientCompleteAddress"] = "";
    p["PatientCounty"] = "";
    p["PatientState"] = "";
    p["PatientCSZ"] = "";
    p["PatientCompleteAddress"] = "";
    p["PatientZip"] = "";
    p["PatientCompleteAddress"] = "";
    p["PatientCountry"] = "";
    p["PatientCompleteAddress"] = "";
    p["SSN"] = "";
    p["Gender"] = "";
    p["PatientAddressLocation"] = "";
    p["Race"] = "";
    p["Age"] = "";
    p["AgeUnits"] = "";
    p["PatientAge"] = "Unknown ";
    p["Email"] = "Unknown ";
    p["ClosestRelativeName"] = "Unknown ";
    p["ClosestRelativeAddress"] = "Unknown ";
    p["ClosestRelativePhone"] = "Unknown ";
    p["RespTotalMileage"] = "";
    p["PatientDOB"] = "";
    p["PatientPhone"] = "";
    p["HistBarriersToCare"] = "";
    p["HistMDs"] = "";
    p["HistAdvancedDirectives"] = "";
    p["MedicationAllergies"] = "";
    p["EnvironmentalAllergies"] = "";
    p["MedicalHistory"] = "";
    p["MedicalHistoryObtainedFrom"] = "";
    p["EMSUnitCallSign"] = "";
    p["PatientDriversLicenseState"] = "";
    p["PatientDriversLicense"] = "";


    p["CurrentMedications"] = "";
    p["PresenceOfInformation"] = "";
    p["AlcoholDrugUse"] = "";
    p["Pregnancy"] = "";
    p["LastOralIntake"] = "";
    p["PaymentType"] = "";
    p["ResponseUrgency"] = "";
    p["ResidesInServiceArea"] = "";
    p["Insurance"] = "";
    p["CMSLevel"] = "";
    p["Supplies"] = "";
    p["PossibleInjury"] = "";
    p["ProviderImpresion"] = "";
    p["SecondaryImpresion"] = "";
    p["InitialAcuity"] = "";
    p["PatientActivity"] = "";
    p["LastKnownWell"] = "";
    p["FirstUnitOnScene"] = "";
    p["OtherAgencies"] = "";
    p["TriageClassification"] = "";
    p["LocationType"] = "";
    p["FacilityName"] = "";
    p["SceneAddress"] = "";
    p["SceneApartment"] = "";
    p["SceneCity"] = "";
    p["SceneState"] = "";
    p["SceneZip"] = "";
    p["SceneCounty"] = "";
    p["SceneCountry"] = "";
    p["AirwayIndicators"] = "";
    p["AirwayCompliations"] = "";
    p["AirwayFailureReason"] = "";
    p["AirwayManagementDate"] = "";
    p["AirwayAbandonDate"] = "";
    p["ConfirmationGroup"] = "";
    p["OnsetDateTime"] = ""
    p["CardiacArrest"] = "";
    p["CardiacRhythmAtDest"] = "",
    p["ArrestEtiology"] = "";
    p["RescAttempt"] = "";
    p["CardiacWitnessed"] = "";
    p["CareinProgessonArrival"] = "";
    p["ArrestPriorCPRProvidedBy"] = "";
    p["AEDUsedPrior"] = "";
    p["AEDUsedPriorBy"] = "";
    p["CPRType"] = "";
    p["ReturnCirc"] = "";
    p["ArrestTime"] = "";
    p["ResuscDiscontinued"] = "";
    p["CPRTime"] = "";
    p["OtherSafetyEquipment"] = "";
    p["OtherSignatureGroup"] = "";
    p["InjuryCause"] = "";
    p["InjuryMechanism"] = "";
    p["InjuryTraumaCenter"] = "";
    p["InjuryVehicle"] = "";
    p["InjuryVehImpact"] = "";
    p["InjuryLocationInVehicle"] = "";
    p["InjurySafetyEquip"] = "";
    p["InjuryAirbag"] = "";
    p["InjuryFallHeight"] = "";
    p["InjuryOSHAEquip"] = "";
    p["Weight"] = "";
    p["Length"] = "";
    p["ExamAssessments"] = "";
    p["Procedures"] = "";
    p["Fall"] = false;
    p["NumberOfShocks"] = "";
    p["NumberOfPatientsAtScene"] = "";
    p["MassCasualtyIncident"] = "";
    

    p["Medications"] = "";
    p["Protocols"] = "";

    p["Vitals"] = "";
    p["VitalsCount"] = 0;

    p["HasSBP"] = false;
    p["HasPulseRate"] = false;
    p["HasPulseRhythm"] = false;
    p["HasRespRate"] = false;
    p["HasRespEffort"] = false;
    p["HasGCSTotal"] = false;

    p["Crew"] = "";
    p["CrewString"] = "";
    p["CrewCount"] = 0;

    p["ChiefComplaint"] = "";
    p["ChiefComplaintDuration"] = "";
    p["ChiefComplaintDurationTimeUnits"] = "";
    p["SecondaryComplaint"] = "";
    p["SecondaryComplaintDuration"] = "";
    p["SecondaryComplaintDurationTimeUnits"] = "";
    p["ChiefComplaintLocation"] = "";

    p["OtherComplaint"] = "";
    p["OtherComplaintDuration"] = "";
    p["OtherComplaintDurationTimeUnits"] = "";
    p["OtherAssociatedSymptoms"] = "";

    p["PriorAid"] = "";
    p["ProcedureResponse"] = "";
    p["EmergencyRoomDisposition"] = "Unknown";
    
    return p;
};

