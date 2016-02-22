var u = require('cloud/Utilities.js');
var dsp = require('cloud/Dispatch.js');
inv = require('cloud/Interventions.js');
pat= require('cloud/Patient.js');
exports.setTheCall = function (thePCR)
{


    u.RaiseError("setV3Call", 100, "setV3Call", "setV3Call");
    var parseObject = thePCR.PCRObject;
    var rawObjects = new Array();
    var theCall = {};
    var NEMSISElements = thePCR.NEMSISElements;
    var NEMSISErrors = new Array();

    //Create the Call from the PCR Object
    var RawData = {};
    var version3 = {};
    var eCustomResults = [];

    //// ///////////////eRecord
    
    try {
        u.RaiseError("u.getObjectFromOLTPExtract(parseObject, eRecord)", 100, "setV3Call", "u.getObjectFromOLTPExtract(parseObject, eRecord)");
        var eRecordObject = u.getObjectFromOLTPExtract(parseObject, "eRecord");
    }
    catch (e) {
        u.RaiseError("eRecordObject", 0, "setV3Call.u.getObjectFromOLTPExtract.eRecord", e);
    };

    if (typeof eRecordObject !== 'undefined' && eRecordObject.IsUndefined === true) {
        u.RaiseError("No Data Found", 0, "v3Call.eRecord34");
        eRecordObject.HasDataSet = false;
    }
    else {
        var rawObject = {};
        rawObject.Name = "eRecordObject"
        rawObject.Payload = eRecordObject
        rawObjects.push(rawObject)
        rawObject = undefined;

        eRecordObject.HasDataSet = true;
        var _Record = new Object()

        try {
            u.RaiseError("seteRecord(eRecordObject, NEMSISElements)", 100, "V3Call", "seteRecord(eRecordObject, NEMSISElements)");
            _Record = dsp.seteRecord(eRecordObject, NEMSISElements);
        }
        catch (e) {
            u.RaiseError("seteRecord", 0, "V3Call.seteRecord");
            _Record = null;
        };
        if (_Record === null) {
            u.RaiseError("No Data Found", 0, "setV3Call.eRecordeRecord34");
        }
        else {
            var eRecord = {};
            eRecord = _Record;
            theCall.eRecord = _Record;
            if (typeof eRecord.CustomResults !== 'undefined') {
                if (eRecord.CustomResults.length > 0) {
                    eCustomResults = eCustomResults.concat(eRecord.CustomResults)
                }
            }
        }
    };


    try {
        u.RaiseError("u.getObjectFromOLTPExtract(parseObject, eDispatch)", 100, "V3Call", "u.getObjectFromOLTPExtract(parseObject, eDispatch)");
        var eDispatchObject = u.getObjectFromOLTPExtract(parseObject, "eDispatch");
    }
    catch (e) {
        u.RaiseError("eDispatchObject", 0, "setV3Call.u.getObjectFromOLTPExtract.eDispatch");
    };

    if (typeof eDispatchObject !== 'undefined' && eDispatchObject.IsUndefined === true) {
        u.RaiseError("No Data Found", 0, "setV3Call.eDispatch34");        
        eDispatchObject.HasDataSet = false;
    }
    else {
        var rawObject = {};
        rawObject.Name = "eDispatchObject"
        rawObject.Payload = eDispatchObject
        rawObjects.push(rawObject)
        rawObject = undefined;
        eDispatchObject.HasDataSet = true;
        var _Dispatch = new Object();
        try {
            _Dispatch = dsp.seteDispatch(eDispatchObject, NEMSISElements);
            u.RaiseError("seteDispatch(eDispatchObject, NEMSISElements)", 100, "V3Call", "seteDispatch(eDispatchObject, NEMSISElements)");
            
        }
        catch (e)
        {
            u.RaiseError("seteDispatch", 0, "setV3Call.seteDispatch");
            _Dispatch = null;
        };
        if (_Dispatch === null) {
            u.RaiseError("No Data Found", 0, "setV3Call.eDispatch34");
        }
        else {
            var eDispatch = {};
            eDispatch = _Dispatch;
            theCall.eDispatch = eDispatch;
        }
    };

    
    
    try
    {
            u.RaiseError("u.getObjectFromOLTPExtract(parseObject, eDisposition)", 100, "V3Call", "u.getObjectFromOLTPExtract(parseObject, eDisposition)");
            var eDispositionObject = u.getObjectFromOLTPExtract(parseObject, "eDisposition");                 
    }
    catch (e)
    {
            u.RaiseError("eDispositionObject", 0, "setV3Call.u.getObjectFromOLTPExtract.eDisposition", e);
        };
        
    if (eDispositionObject.IsUndefined == true) {
        u.RaiseError("Null Element List", 0, "setV3Call.eDisposition34")
    }
    else {

        var rawObject = {};
        rawObject.Payload = eDispositionObject
        rawObjects.push(rawObject)
        rawObject = undefined;

        eDispositionObject.HasDataSet = true;
        var _Disposition = {};

        try {
            u.RaiseError("seteDisposition(eDispositionObject, NEMSISElements)", 100, "V3Call", "seteDisposition");
            _Disposition = dsp.seteDisposition(eDispositionObject, NEMSISElements);

        }
        catch (e) {
            u.RaiseError("seteDisposition", 0, "setV3Call.eDisposition", e);
            _Disposition = null;
        };
        if (_Disposition === null) {
            u.RaiseError("Null Element List", 0, "setV3Call.eDisposition34")
        }
        else {
            var eDisposition = {};
            eDisposition = _Disposition;
            theCall.eDisposition = eDisposition;
            if (typeof eDisposition.CustomResults !== 'undefined') {
                if (eDisposition.CustomResults.length > 0) {
                    eCustomResults = eCustomResults.concat(eDisposition.CustomResults)
                }
            }
        }
    };

    try {
        u.RaiseError("u.getObjectFromOLTPExtract(parseObject, eResponse)", 100, "V3Call", "getObjectFromOLTPExtract");
        var eResponseObject = u.getObjectFromOLTPExtract(parseObject, "eResponse");
        eResponseObject.HasDataSet = false;
    }
    catch (e) {
        u.RaiseError("eResponseObject", 0, "setV3Call.u.getObjectFromOLTPExtract.eResponse", e);
    };

     
    if (typeof eResponseObject !== 'undefined' && eResponseObject.IsUndefined === true) {
        var rawObject = {};
        rawObject.Name = "eResponseObject"
        rawObject.Payload = eResponseObject
        rawObjects.push(rawObject)
        u.RaiseError("eResponse Null or Undefined", 0, "setV3Call.eResponse34");
    }
    else {
        eResponseObject.HasDataSet = true;
        var _Response = {};
        try {
            u.RaiseError("seteResponse(eResponseObject, NEMSISElements)", 100, "V3Call", "seteResponse");
            _Response = dsp.seteResponse(eResponseObject, NEMSISElements);
        }
        catch (e) {
            u.RaiseError("seteResponse(eResponseObject, NEMSISElements)", 0, "V3Call", "seteResponse");
            _Response = null;
        };

        if (_Response === null) {
            u.RaiseError("eResponse Null or Undefined", 0, "setV3Call.eResponse34")
        }
        else {
            var eResponse = {};
            eResponse = _Response;
            theCall.eResponse = eResponse;
        }
    };

     
    try {
        u.RaiseError("u.getObjectFromOLTPExtract(parseObject, eTimes)", 100, "V3Call", "getObjectFromOLTPExtract(parseObject, eTimes)");
        var eTimesObject = u.getObjectFromOLTPExtract(parseObject, "eTimes");
        eTimesObject.HasDataSet = false;
    }
    catch (e) {
        u.RaiseError("eTimesObject", 0, "setV3Call.u.getObjectFromOLTPExtract.eTimes", e);
    };

    if (typeof eTimesObject !== 'undefined' && eTimesObject.IsUndefined == true) {
        u.RaiseError("eTimesObject", 0, "setV3Call.u.getObjectFromOLTPExtract.eTimes");
        var rawObject = {};
        rawObject.Name = "eTimesObject"
        rawObject.Payload = eTimesObject
        rawObjects.push(rawObject)
        rawObject = undefined;

    }
    else {
        eTimesObject.HasDataSet = true;
        var _Times = new Object()
        try {
            u.RaiseError("seteTimes(eTimesObject, NEMSISElements)", 100, "V3Call", "seteTimes");
            _Times = dsp.seteTimes(eTimesObject, NEMSISElements);
        }
        catch (e) {
            u.RaiseError("seteTimes", 0, "v3Call.seteTimes", e);
            _Times = null;
        };
        if (_Times === null) {
            u.RaiseError("eTimes Null or Undefined", 0, "setv3Call.eTimes34")
        }
        else {
            var eTimes = new Object()
            eTimes = _Times;
            theCall.eTimes = _Times;
        }
    };
   
        try {
            u.RaiseError("u.getObjectFromOLTPExtract(parseObject, ePatient)", 100, "V3Call", "u.getObjectFromOLTPExtract(parseObject, ePatient)");
            var ePatientObject = u.getObjectFromOLTPExtract(parseObject, "ePatient");
            ePatientObject.HasDataSet = false;
        }
        catch (e) {
            u.RaiseError("ePatientObject", 0, "setV3Call.u.getObjectFromOLTPExtract.ePatient", e);
        };       
       
        if (typeof ePatientObject !== 'undefined' && ePatientObject.IsUndefined == false)
        {
            var rawObject = {};
            rawObject.Name = "ePatientObject"
            rawObject.Payload = ePatientObject
            rawObjects.push(rawObject)
            rawObject = undefined;
            ePatientObject.HasDataSet = true;
            var _Patient = {};
            try
            {
                u.RaiseError("setePatient(ePatientObject, NEMSISElements)", 100, "V3Call", "setePatient");
                _Patient = pat.setePatient(ePatientObject, NEMSISElements);
            }
            catch (e)
            {
                u.RaiseError("setePatient", 0, "setV3Call.u.getObjectFromOLTPExtract.ePatient", e);
                _Patient = null;
            };

            if (_Patient === null) {
                u.RaiseError("Empty Data Set", 1, "setv3Call.ePatient34");
            }
            else {
                var ePatient = {};
                ePatient = _Patient;
                theCall.ePatient = ePatient;
            }
        };

        try {
            u.RaiseError("u.getObjectFromOLTPExtract(parseObject, eSituation)", 100, "setV3Call", "u.getObjectFromOLTPExtract(parseObject, eSituation)");
            var eSituationObject = u.getObjectFromOLTPExtract(parseObject, "eSituation");
            eSituationObject.HasDataSet = false;
        }
        catch (e) {
            u.RaiseError("eSituationObject", 0, "setV3Call.u.getObjectFromOLTPExtract.eSituation", e);
        };

        
        if (typeof eSituationObject !== 'undefined' && eSituationObject.IsUndefined === false) {
            var rawObject = {};
            rawObject.Name = "eSituationObject"
            rawObject.Payload = eSituationObject
            rawObjects.push(rawObject)
            eSituationObject.HasDataSet = true;
            var _Situation = {};

            try {
                u.RaiseError("seteSituation(eSituationObject, NEMSISElements)", 100, "setV3Call", "seteSituation");
                _Situation = dsp.seteSituation(eSituationObject, NEMSISElements);
            }
            catch (e) {
                u.RaiseError("seteSituation", 0, "setV3Call", e);
                _Situation = null;
            };

            if (_Situation !== null) {
                var eSituation = new Object()
                eSituation = _Situation;
                theCall.eSituation = eSituation;
            }
        };
        try {
            u.RaiseError("u.getObjectFromOLTPExtract(parseObject, eCrew)", 100, "setV3Call", "u.getObjectFromOLTPExtract(parseObject, eCrew)");
            var eCrewObject = u.getObjectFromOLTPExtract(parseObject, "eCrew");
            eCrewObject.HasDataSet = false;
        }
        catch (e) {
            u.RaiseError("ecrewobject", 0, "setv3call.u.getobjectfromoltpextract.ecrew", e);
        };
        
        if (typeof eCrewObject !== 'undefined' && eCrewObject.IsUndefined == false) {
            var rawObject = {};
            rawObject.Name = "eCrewObject"
            rawObject.Payload = eSituationObject
            rawObjects.push(rawObject)
            rawObject = undefined;
            eCrewObject.HasDataSet = true;

            var _Crew = {};
            try {
                u.RaiseError("setecrew(ecrewobject, nemsiselements)", 100, "setv3call", "setecrew");
                _Crew = dsp.seteCrew(eCrewObject, NEMSISElements);
            }
            catch (e) {
                u.RaiseError("setecrew", 0, "setv3call.setecrew", e);
                _Crew = null;
            };

            if (_Crew !== null) {
                var eCrew = {};
                eCrew = _Crew;
                theCall.eCrew = eCrew;
            }
        };

    try {
            u.RaiseError("u.getObjectFromOLTPExtract(parseObject, ePayment)", 100, "setV3Call", "u.getObjectFromOLTPExtract(parseObject, ePayment)");
            var ePaymentObject = u.getObjectFromOLTPExtract(parseObject, "ePayment");
        }
        catch (e) {
            u.RaiseError("ePaymentObject", 0, "setV3Call.u.getObjectFromOLTPExtract.ePayment", e);
        };

    if (typeof ePaymentObject !== 'undefined' && ePaymentObject.IsUndefined == false) {
        var rawObject = {};
        rawObject.Name = "ePaymentObject "
        rawObject.Payload = ePaymentObject
        rawObjects.push(rawObject)
        rawObject = undefined;
        ePaymentObject.HasDataSet = false;
        var _Payment = new Object()
        try {
            u.RaiseError("setePayment(ePaymentObject, NEMSISElements)", 100, "setV3Call", "setePayment");
            _Payment = pat.setePayment(ePaymentObject, NEMSISElements);
        }
        catch (e) {
            u.RaiseError("setePayment", 0, "setV3Call.u.getObjectFromOLTPExtract.ePayment", e);
            _Payment = null;
        };

        if (_Payment !== null) {
            var ePayment = new Object()
            ePayment = _Payment;
            theCall.ePayment = ePayment;
        }

    };
        
        try {
            u.RaiseError("u.getObjectFromOLTPExtract(parseObject, eScene)", 100, "setV3Call", "u.getObjectFromOLTPExtract(parseObject, eScene)");
            var eSceneObject = u.getObjectFromOLTPExtract(parseObject, "eScene");
            eSceneObject.HasDataSet = false;
        }
        catch (e) {
            u.RaiseError("eSceneObject", 0, "setV3Call.u.getObjectFromOLTPExtract.eScene", e);
        };

        if (typeof eSceneObject !== 'undefined' && eSceneObject.IsUndefined !== true)
        {
            var rawObject = {};
            rawObject.Name = "eSceneObject"
            rawObject.Payload = eSceneObject
            rawObjects.push(rawObject);
            eSceneObject.HasDataSet = true;
            var _Scene = new Object()

            try {
                u.RaiseError("seteScene(eSceneObject, NEMSISElements)", 100, "setV3Call", "seteScene");
                _Scene = dsp.seteScene(eSceneObject, NEMSISElements);
            }
            catch (e) {
                u.RaiseError("seteScene", 0, "setV3Call.seteScene", e);
                _Scene = null;
            };

            if (_Scene !== null) {
                var eScene = {};
                eScene = _Scene;
                theCall.eScene = eScene;
            }
        };
    
        try {
            
            u.RaiseError("u.getObjectFromOLTPExtract(parseObject, eInjury);", 100, "setV3Call", "u.getObjectFromOLTPExtract(parseObject, eInjury)");
            var eInjuryObject = u.getObjectFromOLTPExtract(parseObject, "eInjury");
            eInjuryObject.HasDataSet = false;
        }
        catch (e) {
            u.RaiseError("eInjuryObject", 0, "setV3Call.u.getObjectFromOLTPExtract.eInjury", e);
        };
      

        if (typeof eInjuryObject !== 'undefined' && eInjuryObject.IsUndefined !== true) {
            var rawObject = {};
            rawObject.Name = "eInjuryObject"
            rawObject.Payload = eInjuryObject
            rawObjects.push(rawObject)
            eInjuryObject.HasDataSet = true;

            var _Injury = {};
            try {
                u.RaiseError("seteInjury(eInjuryObject, NEMSISElements)", 100, "setV3Call", "seteInjury");
                _Injury = inv.seteInjury(eInjuryObject, NEMSISElements);
            }
            catch (e) {
                u.RaiseError("Empty Data Set", 1, "setV3Call.eInjury34");
            };
            if (_Injury !== null) {
                var eInjury = {};
                eInjury = _Injury;
                theCall.eInjury = eInjury;
            }
        };
    
    
        try {
            u.RaiseError("u.getObjectFromOLTPExtract(parseObject, eArrest)", 100, "setV3Call", "u.getObjectFromOLTPExtract(parseObject, eArrest)");
            var eArrestObject = u.getObjectFromOLTPExtract(parseObject, "eArrest");
            eArrestObject.HasDataSet = false;
        }
        catch (e) {
            u.RaiseError("eArrestObject", 0, "setV3Call.u.getObjectFromOLTPExtract.eArrest", e);
        };

        
        if (typeof eArrestObject !== 'undefined' && eArrestObject.IsUndefined !== true) {
            var rawObject = {};
            rawObject.Name = "eInjuryObject"
            rawObject.Payload = eInjuryObject
            rawObjects.push(rawObject)

            eArrestObject.HasDataSet = true;
            var _Arrest = {};
            try {
                u.RaiseError("seteArrest(eArrestObject, NEMSISElements)", 100, "setV3Call", "seteArrest");
                _Arrest = inv.seteArrest(eArrestObject, NEMSISElements);
            }
            catch (e) {
                u.RaiseError("seteArrest", 1, "seteArrest.eInjury34", e);
                _Arrest = null;
            };
            if (_Arrest !== null) {
                var eArrest = {};
                eArrest = _Arrest;
                theCall.eArrest = eArrest;
            }
        };

    
    
        try {
            u.RaiseError("u.getObjectFromOLTPExtract(parseObject, eHistory)", 100, "setV3Call", "u.getObjectFromOLTPExtract(parseObject, eHistory)");
            var  eHistoryObject = u.getObjectFromOLTPExtract(parseObject, "eHistory");
            eHistoryObject.HasDataSet = false;
        }
        catch (e) {
            u.RaiseError("eHistoryObject", 1, "setV3Call.u.getObjectFromOLTPExtract.eHistory", e);
            _History = null;
        };

        if (typeof eHistoryObject !== 'undefined' && eHistoryObject.IsUndefined == false) {
            var rawObject = {};
            rawObject.Name = "eHistoryObject"
            rawObject.Payload = eHistoryObject
            rawObjects.push(rawObject)
            rawObject = undefined;

            eHistoryObject.HasDataSet = true;
            var _History = {};
            try {
                u.RaiseError("seteHistory(eHistoryObject, NEMSISElements)", 100, "setV3Call", "seteHistory");
                _History = pat.seteHistory(eHistoryObject, NEMSISElements);
            }
            catch (e) {
                u.RaiseError("seteHistory", 1, "setV3Call.eHistory34", e);
                _History = null;
            };
            if (_History !== null) {
                var eHistory = {};
                eHistory = _History;
                theCall.eHistory = eHistory;
            }
        };
    
    
        try {
            u.RaiseError("u.getObjectFromOLTPExtract(parseObject, eVitals)", 100, "setV3Call", "u.getObjectFromOLTPExtract(parseObject, eVitals)");
            var eVitalsObject = u.getObjectFromOLTPExtract(parseObject, "eVitals");
            eVitalsObject.HasDataSet = false;
        }
        catch (e) {
            u.RaiseError("eVitalsObject", 0, "setV3Call.u.getObjectFromOLTPExtract.eVitals", e);
        };

        
        if (typeof eVitalsObject !== 'undefined' && eVitalsObject.IsUndefined !== true) {
            var rawObject = {};
            rawObject.Name = "eVitalsObject"
            rawObject.Payload = eVitalsObject
            rawObjects.push(rawObject)
            eVitalsObject.HasDataSet = true;
            var _Vitals = new Object()
            try {
                u.RaiseError("seteVitals(eVitalsObject, NEMSISElements)", 100, "setV3Call", "seteVitals");
                _Vitals = inv.seteVitals(eVitalsObject, NEMSISElements);
            }
            catch (e) {
                u.RaiseError("seteVitals", 1, "setV3Call.eVitals34", e);
                _Vitals = null;
            };

            if (_Vitals !== null) {
                var eVitals = {};
                eVitals = _Vitals;
                theCall.eVitals = eVitals;
            }
        };

    

        try {
            u.RaiseError("u.getObjectFromOLTPExtract(parseObject, eExam)", 100, "setV3Call", "u.getObjectFromOLTPExtract(parseObject, eExam)");
            var eExamObject = u.getObjectFromOLTPExtract(parseObject, "eExam");
            eExamObject.HasDataSet = false;
        }
        catch (e) {
            u.RaiseError("eExamObject", 0, "setV3Call.u.getObjectFromOLTPExtract.eExam", e);
        };
        
        if (typeof eExamObject !== 'undefined' && eExamObject.IsUndefined === false) {
            eExamObject.HasDataSet = true;
            var rawObject = {};
            rawObject.Name = "eExamObject"
            rawObject.Payload = eExamObject
            rawObjects.push(rawObject)
            rawObject = undefined;
            var _Exam = {};
            try {
                u.RaiseError("seteExam(eExamObject, NEMSISElements)", 100, "setV3Call", "seteExam(eExamObject, NEMSISElements)");
                _Exam = inv.seteExam(eExamObject, NEMSISElements);
            }
            catch (e) {
                u.RaiseError("seteExam", 1, "setV3Call.eExam34", e);
                _Exam = null;
            };

            if (_Exam === null) {
                u.RaiseError("Empty Data Set", 1, "setV3Call.eExam34");
            }
            else {
                var eExam = {};
                eExam = _Exam;
                theCall.eExam = eExam;
            }
        };

    
        try {
            u.RaiseError("u.getObjectFromOLTPExtract(parseObject, eMedications)", 100, "setV3Call", "u.getObjectFromOLTPExtract(parseObject, eMedications)");
            var eMedicationsObject = u.getObjectFromOLTPExtract(parseObject, "eMedications");
            eMedicationsObject.HasDataSet = false;
        }
        catch (e) {
            u.RaiseError("eMedicationsObject", 0, "setV3Call.u.getObjectFromOLTPExtract.eMedications", e);
        };
        
        if (typeof eMedicationsObject !== 'undefined' && eMedicationsObject.IsUndefined !== true) {
            eMedicationsObject.HasDataSet = true;
            var rawObject = {};
            rawObject.Name = "eMedicationsObject"
            rawObject.Payload = eMedicationsObject;
            rawObjects.push(rawObject);
            var _Medications = {};
            try {
                u.RaiseError("seteMedications(eMedicationsObject, NEMSISElements)", 100, "setV3Call", "seteMedications");
                _Medications = inv.seteMedications(eMedicationsObject, NEMSISElements);
            }
            catch (e) {
                u.RaiseError("seteMedications", 1, "setV3Call.eMedications34", e);
                _Medications = null;
            };

            if (_Medications !== null) {
                var eMedications = {};
                eMedications = _Medications;
                theCall.eMedications = eMedications;
            }
        };
    
    try {
        u.RaiseError("u.getObjectFromOLTPExtract(parseObject, eProcedures)", 100, "setV3Call", "u.getObjectFromOLTPExtract(parseObject, eProcedures)");
        var eProceduresObject = u.getObjectFromOLTPExtract(parseObject, "eProcedures");
        eProceduresObject.HasDataSet = false;
    }
    catch (e) {
        u.RaiseError("Empty Data Set", 0, "setV3Call.u.getObjectFromOLTPExtract.eProcedures", e);
    };

    if (typeof eProceduresObject !== 'undefined' && eProceduresObject.IsUndefined !== true) 
    {
            var rawObject = {};
            rawObject.Name = "eProceduresObject"
            rawObject.Payload = eProceduresObject;
            rawObjects.push(rawObject);

            eProceduresObject.HasDataSet = true;
            var _Procedures = {};
            try {
                u.RaiseError("seteProcedures(eProceduresObject, NEMSISElements)", 100, "setV3Call", "seteProcedures");
                _Procedures = inv.seteProcedures(eProceduresObject, NEMSISElements);
            }
            catch (e) {
                u.RaiseError("seteProcedures", 1, "setV3Call.eProcedures34", e);
                _Procedures = null;
            };

            if (_Procedures !== null) {
                var eProcedures = {};
                eProcedures = _Procedures;
                theCall.eProcedures = eProcedures;
            }
        };


    try {
        u.RaiseError("u.getObjectFromOLTPExtract(parseObject, eOutcome )", 100, "setV3Call", "u.getObjectFromOLTPExtract(parseObject, eOutcome )");
        var eOutcomeObject = u.getObjectFromOLTPExtract(parseObject, "eOutcome ");
        eOutcomeObject.HasDataSet = false;
    }
    catch (e) {
        u.RaiseError("Empty Data Set", 0, "setV3Call.u.getObjectFromOLTPExtract.eOutcome ", e);
    };

    if (typeof eOutcomeObject !== 'undefined' && eOutcomeObject.IsUndefined !== true) 
    {
            var rawObject = {};
            rawObject.Name = "eOutcomeObject"
            rawObject.Payload = eOutcomeObject;
            rawObjects.push(rawObject);

            eOutcomeObject.HasDataSet = true;
            var _Outcome = {};
            try {
                u.RaiseError("seteOutcome (eOutcomeObject, NEMSISElements)", 100, "setV3Call", "seteOutcome ");
                _Outcome = inv.seteProcedures(eOutcomeObject, NEMSISElements);
            }
            catch (e) {
                u.RaiseError("seteOutcome ", 1, "setV3Call.eOutcome34", e);
                _Outcome = null;
            };

            if (_Outcome !== null) {
                var eOutcome = {};
                eOutcome = _Outcome;
                theCall.eProcedures = eOutcome;
            }
        };

        try {
            u.RaiseError("u.getObjectFromOLTPExtract(parseObject, eAirway)", 100, "setV3Call", "u.getObjectFromOLTPExtract(parseObject, eAirway)");
            var eAirwayObject = u.getObjectFromOLTPExtract(parseObject, "eAirway");
            eAirwayObject.HasDataSet = false;
        }
        catch (e) {
            u.RaiseError("eAirwayObject ", 0, "setV3Call.u.getObjectFromOLTPExtract.eAirway", e);
        };

        if (typeof eAirwayObject !== 'undefined' && eAirwayObject.IsUndefined !== true) 
        {
            var rawObject = {};
            rawObject.Name = "eAirwayObject"
            rawObject.Payload = eAirwayObject;
            rawObjects.push(rawObject);
            rawObject = undefined;

            eAirwayObject.HasDataSet = true;
            var _Airway = new Object()
            _Airway = inv.seteAirway(eAirwayObject, NEMSISElements);
            try {
                u.RaiseError("seteAirway(eAirwayObject, NEMSISElements)", 100, "setV3Call", "seteAirway(eAirwayObject, NEMSISElements)");

            }
            catch (e) {
                u.RaiseError("seteAirway ", 1, "setV3Call.V3Call", e);
                _Airway = null;
            };

            if (_Airway !== null) {
                var eAirway = {};
                eAirway = _Airway;
                theCall.eAirway = eAirway;
            }
        };

    
        try {
            u.RaiseError("u.getObjectFromOLTPExtract(parseObject, eProtocols)", 100, "setV3Call", "u.getObjectFromOLTPExtract(parseObject, eProtocols)");
            var eProtocolsObject = u.getObjectFromOLTPExtract(parseObject, "eProtocols");
            eProtocolsObject.HasDataSet = false;
        }
        catch (e) {
            u.RaiseError("seteProtocols", 0, "setV3Call.u.getObjectFromOLTPExtract.eProtocols", e);
        };

        if (eProtocolsObject !== 'undefined' && eProtocolsObject.IsUndefined !== true) 
        {
            var rawObject = {};
            rawObject.Name = "eProtocolsObject"
            rawObject.Payload = eProtocolsObject;
            rawObjects.push(rawObject);
            rawObject = undefined;

            eProtocolsObject.HasDataSet = true;

            var _Protocols = {};
            try {
                u.RaiseError("seteProtocols(eProtocolsObject, NEMSISElements)", 100, "setV3Call", "seteProtocols(eProtocolsObject, NEMSISElements)");
                _Protocols = inv.seteProtocols(eProtocolsObject, NEMSISElements);
            }
            catch (e) {
                u.RaiseError("seteProtocols", 1, "setV3Call.eProtocols34", e);
                _Protocols = null;
            };
            if (_Protocols !== null) {
                var eProtocols = {};
                eProtocols = _Protocols;
                theCall.eProtocols = eProtocols;
            }
        };

        
        try {
            u.RaiseError("u.getObjectFromOLTPExtract(parseObject, eOther)", 100, "setV3Call", "u.getObjectFromOLTPExtract(parseObject, eOther)");
            var eOtherObject = u.getObjectFromOLTPExtract(parseObject, "eOther");
            eOtherObject.HasDataSet = false;
        }
        catch (e) {
            u.RaiseError("seteOther", 0, "setV3Call.u.getObjectFromOLTPExtract.eOther", e);
        };
        if (typeof eOtherObject !== 'undefined' && eOtherObject.IsUndefined == false) 
        {
            var rawObject = {};
            rawObject.Name = "eOtherObject"
            rawObject.Payload = eOtherObject;
            rawObjects.push(rawObject);
            eOtherObject.HasDataSet = true;
            var _Other = {};
            try {
                u.RaiseError("seteOther(eOtherObject, NEMSISElements)", 100, "setV3Call", "seteOther(eOtherObject, NEMSISElements)");
                _Other = dsp.seteOther(eOtherObject, NEMSISElements);
            }
            catch (e) {
                u.RaiseError("seteOther", 1, "eOther34", e);
                _Other = null;
            };
            if (_Other !== null) {
                var eOther = {};
                eOther = _Other;
                theCall.eOther = eOther;
            }
        };

        try {
            u.RaiseError("u.getObjectFromOLTPExtract(parseObject, eDevice)", 100, "setV3Call", "u.getObjectFromOLTPExtract(parseObject, eDevice)");
            var eDeviceObject = u.getObjectFromOLTPExtract(parseObject, "eDevice");
            eDeviceObject.HasDataSet = false;
        }
        catch (e) {
            u.RaiseError("seteOther", 0, "setV3Call.u.getObjectFromOLTPExtract.eDevice", e);
        };

        if (typeof eDeviceObject !== 'undefined' && eDeviceObject.IsUndefined !== true) 
        {
            var rawObject = {};
            rawObject.Name = "eDeviceObject"
            rawObject.Payload = eDeviceObject;
            rawObjects.push(rawObject);
            rawObject = undefined;

            eDeviceObject.HasDataSet = true;
            var _Device = {};
            try {
                u.RaiseError("seteDevice(theCall, NEMSISElements)", 100, "setV3Call", "seteDevice");
                _Device = inv.seteDevice(theCall, NEMSISElements);
            }
            catch (e) {
                u.RaiseError("seteDevice", 1, "eOther34", e);
                _Device = null;
            };
            if (_Device !== null) {
                var eDevice = {};
                eDevice = _Device;
                theCall.eDevice = eDevice;
            }
        };

        try {
            u.RaiseError("u.getObjectFromOLTPExtract(parseObject, eLabs)", 100, "setV3Call", "u.getObjectFromOLTPExtract(parseObject, eLabs)");
            var eLabsObject = u.getObjectFromOLTPExtract(parseObject, "eLabs");
            eLabsObject.HasDataSet = false;
        }
        catch (e) {
            u.RaiseError("eLabsObject", 0, "setV3Call.u.getObjectFromOLTPExtract.eLabs", e);
        };
        if (typeof eLabsObject !== 'undefined' && eLabsObject.IsUndefined !== true) {
            var rawObject = {};
            rawObject.Name = "eDeviceObject"
            rawObject.Payload = eDeviceObject;
            rawObjects.push(rawObject);
            eLabsObject.HasDataSet = true;
            theCall.pLabs = eLabsObject;
            var _Labs = {};
            try {
                u.RaiseError("seteLabs(theCall, NEMSISElements)", 100, "setV3Call", "seteLabs(theCall, NEMSISElements)");
                _Labs = inv.seteLabs(eLabsObject, NEMSISElements);
            }
            catch (e) {
                u.RaiseError("seteLabs", 1, "setV3Call.eLabs", e);
                _Labs = null
            };

            if (_Labs !== null) {
                var eLabs = {};
                eLabs = _Labs;
                theCall.eLabs = eLabs;
            }
        };

        try {
            u.RaiseError("u.getObjectFromOLTPExtract(parseObject, eNarrative)", 100, "setV3Call", "u.getObjectFromOLTPExtract(parseObject, eNarrative)");
            var eLabsObject = u.getObjectFromOLTPExtract(parseObject, "eNarrative");
            eNarrativeObject.HasDataSet = false;
        }
        catch (e) {
            u.RaiseError("eNarrativeObject", 0, "setV3Call.u.getObjectFromOLTPExtract.eNarrative", e);
        };

        if (typeof eNarrativeObject !== 'undefined' && eNarrativeObject.IsUndefined !== true) {
            var rawObject = {};
            rawObject.Name = "eNarrativeObject"
            rawObject.Payload = eNarrativeObject;
            rawObjects.push(rawObject);
            eNarrativeObject.HasDataSet = true;
            theCall.pNarrative = eNarrativeObject;
            var _Narrative = {};
            try {
                u.RaiseError("seteNarrative(theCall, NEMSISElements)", 100, "setV3Call", "seteeNarrative(theCall, NEMSISElements)");
                _Narrative = dsp.seteNarrative(eNarrativeObject, NEMSISElements);
            }
            catch (e) {
                u.RaiseError("seteNarrative", 1, "setV3Call.eNarrative", e);
                _Narrative = null
            };

            if (_Narrative !== null) {
                var eNarrative = {};
                eNarrative = _Narrative;
                theCall.eNarrative = eNarrative;
            }      
        };


    if (typeof rawObjects !== 'undefined') {
        if (rawObjects.length > 0) {

            theCall.RawPCRObjects = rawObjects;
        }
    };
    return theCall;
};




