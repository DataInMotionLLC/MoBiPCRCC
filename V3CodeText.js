var PCRArray = [];
var moment = require('moment');
sp= require('cloud/setProps.js');
var intervals = require('cloud/setIntervals.js');
var nar = require('cloud/Narrative.js');
exports.setV3English = function (TheCall) {
    Props = sp.setProps();
    
    if (typeof TheCall === 'undefined') {
        return Props
    };
    console.log(TheCall.P[0])

    var Event = new Object();
    var Events = new Array();
    var EventLen = 0;
    var BO = {};

    BO = TheCall.Version3;

    Props["CreatedDate"] = moment(TheCall["PCRDate"]).utc().format("MM/DD/YYYY");

    if (typeof TheCall.PCRObjectID !== 'undefined') {
        if (TheCall.PCRObjectID != "") {
            Props["PCRID"] = TheCall.PCRObjectID;
        }
    };
    var cGroup = [];

    if (typeof BO.CrewIDS !== 'undefined') {

        for (var t = 0; t < BO.CrewIDS.length; t++) {

            console.log(BO.CrewIDS[t].objectId)
            
            var yy = getCrewName(BO.CrewIDS[t].objectId)
            yy.then(function (cn) {
                var name =""
                name = cn.attributes.firstName + " " + cn.attributes.lastName
       
                cGroup.push(name)
            });
        }
    }
    Props.CrewNames = cGroup
    //if (typeof BO.eRecord !== 'undefined') {
    //    var obj = {};
    //    var obj = BO.eRecord;
    //    if (typeof obj["eRecord.01"] !== 'undefined') {
    //         Props["PCRID"] = setPropsect(obj["eRecord.01"]);
    //    }
    //};

    if (typeof BO.eDispatch !== 'undefined') {
        var obj = {};
        var obj = BO.eDispatch;
        if (typeof obj["eDispatch.01"] !== 'undefined') {            
            Props["DispatchComplaint"] = setPropsect(obj["eDispatch.01"]);
            if (Props["DispatchComplaint"] === "Standby") {
                Props["CallType"] = "Standby"
            }
            else if (Props["DispatchComplaint"] === "Traffic/Transportation Incident") {
                Props["CallType"] = "MVC"
            }
            else if (Props["DispatchComplaint"] === "Automated Crash Notification") {
                Props["CallType"] = "MVC"
            }
            else if (Props["DispatchComplaint"] === "Transfer/Interfacility/Palliative Care") {
                Props["CallType"] = "Transfer"
            }
            else if (Props["DispatchComplaint"] === "Airmedical Transport") {
                Props["CallType"] = "AirTransport"
            }
            else {
                Props["CallType"] = "Response"
            };
        };
        if (typeof obj["eDispatch.02"] !== 'undefined') {
            Props["DispatchEMDPerformed"] = setPropsect(obj["eDispatch.02"]);
        };
        if (typeof obj["eDispatch.03"] !== 'undefined') {
            Props["DispatchEMDCardNumber"] = setPropsect(obj["eDispatch.03"]);
        };
        if (typeof obj["eDispatch.04"] !== 'undefined') {
            Props["DispatchCallLocation"] = setPropsect(obj["eDispatch.04"]);
        };
        if (typeof obj["eDispatch.05"] !== 'undefined') {
            Props["DispatchPriority"] = setPropsect(obj["eDispatch.05"]);
        }
    };    
    if (typeof BO.eDisposition !== 'undefined') {
        var obj = {};
        var obj1 = BO.eDisposition;
        if (typeof BO.eDisposition.DestinationGroup !== 'undefined') {
            var obj = BO.eDisposition.DestinationGroup;
            if (typeof obj["eDisposition.01"] !== 'undefined') {
                Props["DispoTo"] = setPropsect(obj["eDisposition.01"]);
            };
            if (typeof obj["eDisposition.02"] !== 'undefined') {
                Props["DispoToCode"] = setPropsect(obj["eDisposition.02"]);
            };
            if (typeof obj["eDisposition.03"] !== 'undefined') {
                Props["DispoToAddress"] = setPropsect(obj["eDisposition.03"]);
            };
            if (typeof obj["eDisposition.04"] !== 'undefined') {
                Props["DispoToAddress"] = Props["DispoToAddress"] + setPropsect(obj["eDisposition.04"]);
            };
            if (typeof obj["eDisposition.05"] !== 'undefined') {
                Props["DispoState"] = setPropsect(obj["eDisposition.05"]);
                Props["DispoToAddress"] = Props["DispoToAddress"] + setPropsect(obj["eDisposition.05"]);
            };

            if (typeof obj["eDisposition.06"] !== 'undefined') {
                Props["DispoCounty"] = setPropsect(obj["eDisposition.06"]);
            };
            if (typeof obj["eDisposition.07"] !== 'undefined') {
                Props["DispoZip"] = setPropsect(obj["eDisposition.07"]);
                Props["DispoToAddress"] = Props["DispoToAddress"] + setPValue(obj["eDisposition.07"]);
            };
        };

        if (typeof obj1["eDisposition.11"] !== 'undefined') {
            Props["DispNumberPatientTransport"] = setPropsect(obj1["eDisposition.11"]);
        };
        if (typeof obj1["eDisposition.12"] !== 'undefined') {
            Props["Disposition"] = setPropsect(obj1["eDisposition.12"]);
            Props["DispositionVal"] = setPValue(obj1["eDisposition.12"]);
            if (Props["DispositionVal"] == "4212007")  //	Canceled (Prior to Arrival At Scene)
            {
                Props["CallDisposition"] = "CanceledPrior";
                Props["CallHasTransport"] = false;
                Props["CallHasPatient"] = false;
                Props["CallHasTreatment"] = false;
                Props["CallStatus"] = "Cancel";
            };
            if (Props["DispositionVal"] == "4212009")  //	Canceled (Prior to Arrival At Scene)
            {
                Props["CallDisposition"] = "CanceledOnSceneNoPatient";
                Props["CallHasPatient"] = false;
                Props["CallHasTransport"] = false;
                Props["CallHasTreatment"] = false;
                Props["CallStatus"] = "Cancel";
            };
            if (Props["DispositionVal"] == "42120011")  //	Canceled (Prior to At Scene No Patient Contact)
            {
                Props["CallDisposition"] = "CanceledOnSceneNoPatient";
                Props["CallHasPatient"] = false;
                Props["CallHasTransport"] = false;
                Props["CallHasTreatment"] = false;
                Props["CallStatus"] = "Cancel";
            };
            if (Props["DispositionVal"] == "4212013")  //	Patient Dead at Scene-No Resuscitation Attempted (With Transport))
            {
                Props["CallDisposition"] = "PatientDeadAtSceneNoResuscWithTransport";
                Props["CallHasPatient"] = true;
                Props["CallHasTransport"] = true;
                Props["CallHasTreatment"] = false;
                Props["CallStatus"] = "Normal";
            };
            if (Props["DispositionVal"] == "4212015")  //	Patient Dead at Scene-No Resuscitation Attempted (Without Transport))
            {
                Props["CallDisposition"] = "PatientDeadAtSceneNoResuscNoTransport";
                Props["CallHasPatient"] = true;
                Props["CallHasTransport"] = false;
                Props["CallHasTreatment"] = false;
                Props["CallStatus"] = "Normal";
            };
            if (Props["DispositionVal"] == "4212017")  //	Patient Dead at Scene  Resuscitation Attempted (With Transport))
            {
                Props["CallDisposition"] = "PatientDeadAtSceneWithResuscWithTransport";
                Props["CallHasPatient"] = true;
                Props["CallHasTransport"] = true;
                Props["CallHasTreatment"] = true;
                Props["CallStatus"] = "Normal";
            };
            if (Props["DispositionVal"] == "4212019")  //	Patient Dead at Scene-No Resuscitation Attempted (Without Transport))
            {
                Props["CallDisposition"] = "PatientDeadAtSceneWithResuscNoTransport";
                Props["CallHasPatient"] = true;
                Props["CallHasTransport"] = false;
                Props["CallHasTreatment"] = false;
                Props["CallStatus"] = "Normal";
            };
            if (Props["DispositionVal"] == "4212021")  //			Patient Evaluated, No Treatment/Transport Required
            {
                Props["CallDisposition"] = "PatientNoTreatmentNoTransport";
                Props["CallHasPatient"] = true;
                Props["CallHasTransport"] = false;
                Props["CallHasTreatment"] = false;
                Props["CallStatus"] = "Normal";
            };
            if (Props["DispositionVal"] == "4212023")  //		Patient Refused Evaluation/Care (With Transport)
            {
                Props["CallDisposition"] = "PatientRefusedWithTransport";
                Props["CallHasPatient"] = true;
                Props["CallHasTransport"] = true;
                Props["CallHasTreatment"] = false;
                Props["CallRefusedTreatment"] = true;
                Props["CallStatus"] = "Normal";
            };
            if (Props["DispositionVal"] == "4212025")  //	Patient Refused Evaluation/Care (Without Transport)
            {
                Props["CallDisposition"] = "PatientRefusedNoTransport";
                Props["CallHasPatient"] = true;
                Props["CallHasTransport"] = false;
                Props["CallHasTreatment"] = true;
                Props["CallRefusedTreatment"] = true;
                Props["CallStatus"] = "Normal";
            };
            if (Props["DispositionVal"] == "4212027")  //	Patient Treated, Released (AMA) - Against Medical Advice
            {
                Props["CallDisposition"] = "PatientTreatedNoTransport";
                Props["CallHasPatient"] = true;
                Props["CallHasTransport"] = false;
                Props["CallHasTreatment"] = true;
                Props["CallRefusedTreatment"] = true;
                Props["CallStatus"] = "Normal";
            };
            if (Props["DispositionVal"] == "4212029")  //	Patient Treated, Released (AMA) - per Protocol
            {
                Props["CallDisposition"] = "PatientTreatedNoTransport";
                Props["CallHasPatient"] = true;
                Props["CallHasTransport"] = false;
                Props["CallHasTreatment"] = true;
                Props["CallRefusedTreatment"] = false;
                Props["CallStatus"] = "Normal";
            };
            if (Props["DispositionVal"] == "4212031")  //		Patient Treated, Transferred Care to Another EMS Unit
            {
                Props["CallDisposition"] = "PatientTreatedNoTransport";
                Props["CallHasPatient"] = true;
                Props["CallHasTransport"] = false;
                Props["CallHasTreatment"] = true;
                Props["CallRefusedTreatment"] = false;
                Props["CallStatus"] = "Normal";
            };
            if (Props["DispositionVal"] == "4212033")  //			Patient Treated, Transported by this EMS Unit
            {
                Props["CallDisposition"] = "PatientTreatedWithTransport";
                Props["CallHasPatient"] = true;
                Props["CallHasTransport"] = true;
                Props["CallHasTreatment"] = true;
                Props["CallRefusedTreatment"] = false;
                Props["CallStatus"] = "Normal";
            };

            if (Props["DispositionVal"] == "4212035")  //			Patient Treated, Transported by Law Enforcement
            {
                Props["CallDisposition"] = "PatientTreatedNoTransport";
                Props["CallHasPatient"] = true;
                Props["CallHasTransport"] = false;
                Props["CallHasTreatment"] = true;
                Props["CallRefusedTreatment"] = false;
                Props["CallStatus"] = "Normal";
            };
            if (Props["DispositionVal"] == "4212037")  //			Patient Treated, Transported by Private Vehicle
            {
                Props["CallDisposition"] = "PatientTreatedNoTransport";
                Props["CallHasPatient"] = true;
                Props["CallHasTransport"] = false;
                Props["CallHasTreatment"] = true;
                Props["CallRefusedTreatment"] = false;
                Props["CallStatus"] = "Normal";
            };
            if (Props["DispositionVal"] == "4212041")  //				Standby-No Services or Support Provided
            {
                Props["CallDisposition"] = "Standby";
                Props["CallHasPatient"] = false;
                Props["CallHasTransport"] = false;
                Props["CallHasTreatment"] = false;
                Props["CallRefusedTreatment"] = false;
                Props["CallStatus"] = "Normal";
            };

            if (Props["DispositionVal"] == "4212041")  //4212041	Standby-Public Safety, Fire, or EMS Operational Support Provided
            {
                Props["CallDisposition"] = "Standby";
                Props["CallHasPatient"] = false;
                Props["CallHasTransport"] = false;
                Props["CallHasTreatment"] = false;
                Props["CallRefusedTreatment"] = false;
                Props["CallStatus"] = "Normal";
            };

            if (Props["DispositionVal"] == "4212041")  //	4212043	Transport Non-Patient, Organs, etc.
            {
                Props["CallDisposition"] = "NoPatientTransport";
                Props["CallHasPatient"] = false;
                Props["CallHasTransport"] = true;
                Props["CallHasTreatment"] = false;
                Props["CallRefusedTreatment"] = false;
                Props["CallStatus"] = "Normal";
            }
        };
        if (typeof obj1["eDisposition.13"] !== 'undefined') {
            Props["DispoHowMovedToRig"] = setPropsect(obj1["eDisposition.13"]);
        };

        if (typeof obj1["eDisposition.14"] !== 'undefined') {
            Props["DispoPatientPosition"] = setPropsect(obj1["eDisposition.14"]);
        };
        if (typeof obj1["eDisposition.15"] !== 'undefined') {
            Props["DispoPatientMovedFromRig"] = setPropsect(obj1["eDisposition.15"]);
        };

        if (typeof obj1["eDisposition.16"] !== 'undefined') {
            Props["DispoTransportMethod"] = setPropsect(obj1["eDisposition.16"]);
        };
        if (typeof obj1["eDisposition.17"] !== 'undefined') {
            Props["DispoTransportModeFromScene"] = setPropsect(obj1["eDisposition.17"]);
        };
        if (typeof obj1["eDisposition.18"] !== 'undefined') {
            Props["AddDispoTransportModeFromScene"] = setPropsect(obj1["eDisposition.18"]);
        };
        if (typeof obj1["eDisposition.19"] !== 'undefined') {
            Props["DispoFinalAccuity"] = setPropsect(obj1["eDisposition.19"]);
        };
        if (typeof obj1["eDisposition.20"] !== 'undefined') {
            Props["DispoReasonForChoosing"] = setPropsect(obj1["eDisposition.20"]);
        };
        if (typeof obj1["eDisposition.21"] !== 'undefined') {
            Props["DispoDestinationType"] = setPropsect(obj1["eDisposition.21"]);
        };
        if (typeof obj1["eDisposition.22"] !== 'undefined') {
            Props["DispoPatientDestination"] = setPropsect(obj1["eDisposition.22"]);
        };
        if (typeof obj1.HospitalTeamActivationGroup !== 'undefined') {
            var preAct = null;
            for (var i = 0; i < obj1.HospitalTeamActivationGroup.length; i++) {
                if (typeof obj1.HospitalTeamActivationGroup[i]["eDisposition.24"] !== 'undefined') {
                    Props["DispoPreAct"] = setPropsect(obj1.HospitalTeamActivationGroup[i]["eDisposition.24"]);
                    preAct = preAct + Props["DispoPreAct"];

                };
                if (typeof obj1.HospitalTeamActivationGroup[i]["eDisposition.25"] !== 'undefined') {

                    Props["DispoPreActTime"] = setPValue(obj1.HospitalTeamActivationGroup[i]["eDisposition.25"]);
                    var Event = new Object();
                    Event.Time = moment(Props["DispoPreActTime"]).format("HH:mm")
                    Event.Name = "Prearrival Alert"
                    var v = [];
                    v.push("Prearrival Alert")
                    Event.Value = v;
                    EventLen = EventLen + v.length;
                    Events.push(Event)
                    preAct = preAct + Props["PreAct"] + preAct;
                    if (preAct !== null) {
                        if (typeof HospitalTeamActivationGroup === 'undefined') {
                            var HospitalTeamActivationGroup = new Array();
                        };
                        preAct = preAct + ". ";
                    };
                };
            };
            Props["DispoHospitalActivation"] = preAct;
        }
    };

    if (typeof BO.eTimes === 'undefined')
    {
        Props["TimePSAP"] = moment(TheCall.PCRDate).format("HH:mm");
    }
    else

    {
        var Inter = intervals.setIntervals(TheCall)
        Props.Intervals = Inter
        
        var obj = {};
        obj = BO.eTimes
        if (typeof obj["eTimes.01"] !== 'undefined') {
            var o = setPValue(obj["eTimes.01"]);
            if (o !== "") {
                Props["TimePSAP"] = moment(o).format("HH:mm");
            }
            else {
                Props["TimePSAP"] = moment(TheCall.PCRDate).format("HH:mm");
            };
            var Event = new Object();
            Event.Time = Props["TimePSAP"]
            Event.Name = "PSAP Time"
            var v = [];
            v.push("PSAP Time")
            Event.Value = v;
            EventLen = EventLen + v.length;
            Events.push(Event)
        };

        if (typeof obj["eTimes.02"] !== 'undefined') {
            var o = setPValue(obj["eTimes.02"]);
            if (o !== "") {
                Props["TimeDispatchNotified"] = moment(o).format("HH:mm");
                var Event = new Object();
                Event.Time = Props["TimeDispatchNotified"]
                Event.Name = "Dispatch Notified"
                var v = [];
                v.push("Dispatch Notified")
                Event.Value = v;
                EventLen = EventLen + v.length;
                Events.push(Event)
            }
        };
        if (typeof obj["eTimes.03"] !== 'undefined') {
            var o = setPValue(obj["eTimes.03"]);
            if (o !== "") {
                Props["TimeUnitNotified"] = moment(o).format("HH:mm");
                Props["CallDate"] = moment(o).format("MM/DD/YYYY");
                var Event = new Object();
                Event.Time = Props["TimeUnitNotified"]
                Event.Name = "Unit Notified"
                var v = [];
                v.push("Unit Notified");
                Event.Value = v;
                EventLen = EventLen + v.length;
                Events.push(Event);
            }
        };
        if (typeof obj["eTimes.04"] !== 'undefined') {
            var o = setPValue(obj["eTimes.04"]);
            if (o !== "") {
                Props["TimeAcknowledged"] = moment(o).format("HH:mm");
                var Event = new Object();
                Event.Time = Props["TimeAcknowledged"];
                Event.Name = "Acknowledged";
                var v = [];
                v.push("Acknowledgement")
                Event.Value = v;
                EventLen = EventLen + v.length;
                Events.push(Event);
            }
        };
        if (obj["eTimes.05"].IsNull == false) {
            var o = setPValue(obj["eTimes.05"]);
            if (o !== "") {
                Props["TimeEnRoute"] = moment(o).format("HH:mm");
                var Event = new Object()
                Event.Time = Props["TimeEnRoute"];
                Event.Name = "En Route";
                var v = [];
                v.push("En Route")
                Event.Value = v;
                EventLen = EventLen + v.length;
                Events.push(Event);
            }
        };
        if (typeof obj["eTimes.06"] !== 'undefined') {
            var o = setPValue(obj["eTimes.06"]);
            if (o !== "") {
                Props["TimeAtScene"] = moment(o).format("HH:mm");
                var Event = new Object();
                Event.Time = Props["TimeAtScene"];
                Event.Name = "At Scene";
                var v = [];
                v.push("At Scene")
                Event.Value = v;
                EventLen = EventLen + v.length;
                Events.push(Event);
            }
        };
        if (typeof obj["eTimes.07"] !== 'undefined') {
            var o = setPValue(obj["eTimes.07"]);
            if (o !== "") {
                Props["TimeAtPatient"] = moment(o).format("HH:mm");
                var Event = new Object();
                Event.Time = Props["TimeAtPatient"];
                Event.Name = "At Patient";
                var v = [];
                v.push("At Patient")
                Event.Value = v;
                EventLen = EventLen + v.length;
                Events.push(Event);
            }
        };
        if (typeof obj["eTimes.08"] !== 'undefined') {
            var o = setPValue(obj["eTimes.07"]);
            if (o !== "") {
                Props["TimeTransfer"] = moment(o).format("HH:mm");
                var Event = new Object();
                Event.Time = Props["TimeTransfer"];
                Event.Name = "Transfer";
                var v = [];
                v.push("Transfer")
                Event.Value = v;
                EventLen = EventLen + v.length;
                Events.push(Event);
            }
        };
        if (typeof obj["eTimes.09"] !== 'undefined') {
            var o = setPValue(obj["eTimes.09"]);
            if (o !== "") {
                Props["TimeLeftScene"] = moment(o).format("HH:mm");
                var Event = new Object();
                Event.Time = Props["TimeLeftScene"];
                Event.Name = "Left Scene";
                var v = [];
                v.push("Left Scene")
                Event.Value = v;
                EventLen = EventLen + v.length;
                Events.push(Event);
            }
        };
        if (typeof obj["eTimes.10"] !== 'undefined') {
            var o = setPValue(obj["eTimes.10"]);
            if (o !== "") {
                Props["TimeArrivalAtLanding"] = moment(o).format("HH:mm");
                var Event = new Object();
                Event.Time = Props["TimeArrivalAtLanding"];
                Event.Name = "Arrived At Landing";
                var v = [];
                v.push("Arrival At Landing")
                Event.Value = v;
                EventLen = EventLen + v.length;
                Events.push(Event);
            }
        };
        if (typeof obj["eTimes.11"] !== 'undefined') {
            var o = setPValue(obj["eTimes.11"]);
            if (o !== "") {
                Props["TimePatientArrived"] = moment(o).format("HH:mm");
                var Event = new Object();
                Event.Time = Props["TimePatientArrived"];
                Event.Name = "Patient Arrived";
                var v = [];
                v.push("Patient Arrived")
                Event.Value = v;
                EventLen = EventLen + v.length;
                Events.push(Event);
            }
        };

        if (typeof obj["eTimes.12"] !== 'undefined') {
            var o = setPValue(obj["eTimes.12"]);
            if (o !== "") {
                Props["TimeTransferPatientCare"] = moment(o).format("HH:mm");
                var Event = new Object();
                Event.Time = Props["TimeTransferPatientCare"];
                Event.Name = "Transfer Patient Care";
                Event.Name = "Patient Arrived";
                var v = [];
                v.push("Transfer Patient Care")
                Event.Value = v;
                EventLen = EventLen + v.length;
                Events.push(Event);
            }
        };
        if (typeof obj["eTimes.13"] !== 'undefined') {
            var o = setPValue(obj["eTimes.13"]);
            if (o !== "") {
                Props["TimeUnitBackInService"] = moment(o).format("HH:mm");
                var Event = new Object();
                Event.Time = Props["TimeUnitBackInService"];
                Event.Name = "Unit Back In Service";
                var v = [];
                v.push("Back InService")
                Event.Value = v;
                EventLen = EventLen + v.length;
                Events.push(Event);
            }
        };

        if (typeof obj["eTimes.14"] !== 'undefined') {
            var o = setPValue(obj["eTimes.14"]);
            if (o !== "") {
                Props["TimeCancel"] = moment(o).format("HH:mm");
                var Event = new Object();
                Event.Time = Props["TimeCancel"];
                Event.Name = "Cancel";
                var v = [];
                v.push("Cancelled")
                Event.Value = v;
                EventLen = EventLen + v.length;
                Events.push(Event);

            }
        };
        if (typeof obj["eTimes.15"] !== 'undefined') {
            var o = setPValue(obj["eTimes.15"]);
            if (o !== "") {
                Props["TimeBackHome"] = moment(o).format("HH:mm");
                var Event = new Object();
                Event.Time = Props["TimeBackHome"];
                Event.Name = "Back Home";
                var v = [];
                v.push("Back Home")
                Event.Value = v;
                EventLen = EventLen + v.length;
                Events.push(Event);
            }
        };
        if (typeof obj["eTimes.16"] !== 'undefined') {
            var o = setPValue(obj["eTimes.16"]);
            if (o !== "") {
                Props["TimeCallComplete"] = moment(o).format("HH:mm");
                var Event = new Object();
                Event.Time = Props["TimeCallComplete"];
                Event.Name = "Call Complete";
                var v = [];
                v.push("Call Complete")
                Event.Value = v;
                EventLen = EventLen + v.length;
                Events.push(Event);
            }
        }
    };   
    if (typeof BO.eResponse !== 'undefined') {
        var obj = {};
        obj = BO.eResponse;
        if (typeof obj.AgencyGroup !== 'undefined') {
            if (typeof obj.AgencyGroup["eResponse.01"] !== 'undefined') {
                Props["RespAgencyNumber"] = setPropsect(obj.AgencyGroup["eResponse.01"]);
            };
            if (typeof obj.AgencyGroup["eResponse.02"] !== 'undefined') {
                Props["RespAgencyName"] = setPropsect(obj.AgencyGroup["eResponse.02"]);
            }
        };
        
        if (typeof obj["eResponse.03"] !== 'undefined')
        {
            Props["RespIncidentNumber"] = setPropsect(obj["eResponse.03"]);
        };
        
        if (typeof obj.ServiceGroup !== 'undefined')
        {
            if (typeof obj.ServiceGroup["eResponse.05"] !== 'undefined') {
                Props["RespTypeOfServiceRequest"] = setPropsect(obj.ServiceGroup["eResponse.05"]);
            }

            if (typeof obj.ServiceGroup["eResponse.06"] !== 'undefined') {
                Props["RespStandByPurpose"] = setPropsect(obj.ServiceGroup["eResponse.06"]);
            }
        };
        
        if (typeof obj["eResponse.07"] !== 'undefined') {
            Props["RespPrimaryRoleOfUnit"] = setPropsect(obj["eResponse.07"]);
        };

        if (typeof obj["eResponse.08"] !== 'undefined') {
            Props["RespDispatchDelay"] = setPropsect(obj["eResponse.08"]);
        };

        if (typeof obj["eResponse.09"] !== 'undefined') {
            Props["ResponseDelay"] = setPropsect(obj["eResponse.09"]);
        };

        if (typeof obj["eResponse.10"] !== 'undefined') {
            Props["RespSceneDelay"] = setPropsect(obj["eResponse.10"]);
        };

        if (typeof obj["eResponse.11"] !== 'undefined') {
            Props["RespTransportDelay"] = setPropsect(obj["eResponse.11"]);
        };

        if (typeof obj["eResponse.12"] !== 'undefined') {
            Props["RespTurnAroundDelay"] = setPropsect(obj["eResponse.12"]);
        };

        if (typeof obj["eResponse.13"] !== 'undefined') {
            Props["RespRig#"] = setPropsect(obj["eResponse.13"]);
        };
        if (typeof obj["eResponse.14"] !== 'undefined') {
            Props["EMSUnitCallSign"] = setPropsect(obj["eResponse.14"]);
        };

        if (typeof obj["eResponse.15"] !== 'undefined') {
            Props["RespUnitLevelOfCare"] = setPropsect(obj["eResponse.15"]);
        };
        
        if (typeof obj["eResponse.19"] !== 'undefined') {
            Props["RespBeginMileage"] = setPropsect(obj["eResponse.19"]);
        };
                
        if (typeof obj["eResponse.20"] !== 'undefined') {
            if (typeof Props["RespBeginMileage"] !== 'undefined') {
                
                Props["RespOnSceneMiles"] = setPropsect(obj["eResponse.20"]);
                if (Props["RespOnSceneMiles"] != "") {
                    var yy = Props["RespOnSceneMiles"] - Props["RespBeginMileage"]
                    yy = yy.toFixed(1)
                    Props["ToSceneMileage"] = yy.toString();
                }
            };
        };

        if (typeof obj["eResponse.21"] !== 'undefined') {
            Props["RespDestinationMiles"] = setPropsect(obj["eResponse.21"]);
            if (typeof Props["RespBeginMileage"] !== 'undefined') {
                if (Props["RespDestinationMiles"] != "") {
                    var y = Props["RespDestinationMiles"] - Props["RespBeginMileage"];
                    if (typeof Props["RespBeginMileage"] !== 'undefined') {
                        var xy = Props["RespDestinationMiles"] - Props["RespOnSceneMiles"];
                        xy = xy.toFixed(1)

                        Props["RespLadenMileage"] = xy.toString();
                    };
                    //y = y.toFixed(1)
                    Props["RespTotalMileage"] = y.toString();
                };
            }
        };

        if (typeof obj["eResponse.21"] !== 'undefined') {

            Props["RespDestinationMiles"] = setPropsect(obj["eResponse.21"]);
        };

        if (typeof obj["eResponse.22"] !== 'undefined') {

            Props["RespEndMiles"] = setPropsect(obj["eResponse.22"]);
        };

        if (typeof obj["eResponse.23"] !== 'undefined') {
            Props["RespResponseModeToScene"] = setPropsect(obj["eResponse.23"]);
        };
        if (typeof obj["eResponse.24"] !== 'undefined') {
            Props["RespAddResponseModeToScene"] = setPropsect(obj["eResponse.24"]);
        };

        if ((typeof Props["BeginMileage"] !== 'undefined') && (typeof Props["EndMiles"] !== 'undefined')) {
            Props["RespTotalMiles"] = Props["EndMiles"] - Props["BeginMileage"];
        }
    };  
    if (typeof BO.ePatient !== 'undefined') {
        var obj = {};
        obj = BO.ePatient;
        if (typeof obj["PatientNameGroup"] !== 'undefined') {
            var PatientName = "";
            var objPN = obj.PatientNameGroup;
            if (typeof objPN["ePatient.03"] !== 'undefined') {
                Props["PatientFirstName"] = setPropsect("ePatient.03", objPN["ePatient.03"]);
                PatientName = PatientName + Props["PatientFirstName"];
            };
            
            if (typeof objPN["ePatient.04"] !== 'undefined') {
                Props["PatientMiddleName"] = setPropsect(objPN["ePatient.04"]);
                PatientName = PatientName + Props["PatientMiddleName"];
            };

            if (typeof objPN["ePatient.02"] !== 'undefined') {

                Props["PatientLastName"] = setPropsect(objPN["ePatient.02"]);
                PatientName = PatientName + Props["PatientLastName"];
            };

            if (PatientName === "") {
                Props["PatientName"] = "Not Available";
            }
            else {
                Props["PatientName"] = PatientName;
            };
        };
        Props["PatientCompleteAddress"] = ""
        if (typeof obj["ePatient.05"] !== 'undefined') {

            Props["PatientAddress"] = setPValue(obj["ePatient.05"]);
            Props["PatientCompleteAddress"] = Props["PatientAddress"];
        };

        Props["PatientCSZ"] = "";
        if (typeof obj["ePatient.06"] !== 'undefined') {
            Props["PatientCity"] = setPropsect(obj["ePatient.06"]);
            Props["PatientCSZ"] = Props["PatientCity"]
            Props["PatientCompleteAddress"] = Props["PatientCompleteAddress"] + Props["PatientCity"]
        };

        if (typeof obj["ePatient.07"] !== 'undefined') {
            Props["PatientCounty"] = setPropsect(obj["ePatient.07"]);
        };

        if (typeof obj["ePatient.08"] !== 'undefined') {
            Props["PatientState"] = setPropsect(obj["ePatient.08"]);
            Props["PatientCSZ"] = Props["PatientCSZ"] + ", " + Props["PatientState"]
            Props["PatientCompleteAddress"] = Props["PatientCompleteAddress"] + Props["PatientState"]
        };

        if (typeof obj["ePatient.09"] !== 'undefined') {

            Props["PatientZip"] = setPValue(obj["ePatient.09"]);
            Props["PatientCSZ"] = Props["PatientCSZ"] + " " + Props["PatientZip"]
            Props["PatientCompleteAddress"] = Props["PatientCompleteAddress"] + Props["PatientZip"]
        };

        if (typeof obj["ePatient.10"] !== 'undefined') {
            Props["PatientCountry"] = setPropsect(obj["ePatient.10"]);
            Props["PatientCompleteAddress"] = Props["PatientCompleteAddress"] + Props["PatientCountry"]
        };

        if (typeof obj["ePatient.12"] !== 'undefined') {
            Props["SSN"] = setPValue(obj["ePatient.12"]);
        };
        if (typeof obj["ePatient.13"] !== 'undefined') {
            Props["Gender"] = setPropsect(obj["ePatient.13"]);
        };
        if (typeof obj["ePatient.14"] !== 'undefined') {
            Props["Race"] = setPropsect(obj["ePatient.14"]);
        };
        if (typeof obj["AgeGroup"] !== 'undefined') {
            if (typeof obj["AgeGroup"]["ePatient.15"] !== 'undefined') {
                Props["Age"] = setPropsect(obj["AgeGroup"]["ePatient.15"]);
            };
            if (typeof obj["AgeGroup"]["ePatient.16"] !== 'undefined') {
                Props["AgeUnits"] = setPropsect(obj["AgeGroup"]["ePatient.16"]);
            };
            Props["PatientAge"] = Props["Age"] + " " + Props["AgeUnits"];
        };
        if (typeof obj["ePatient.17"] !== 'undefined') {
            Props["PatientDOB"] = setPropsect("ePatient.17", obj["ePatient.17"]);
        };
        if (typeof obj["ePatient.18"] !== 'undefined') {
            Props["PatientPhone"] = setPropsect("ePatient.18", obj["ePatient.18"]);
        }
        if (typeof obj["ePatient.19"] !== 'undefined') {
            Props["Email"] = setPropsect("ePatient.19", obj["ePatient.19"]);
        };
        if (typeof obj["ePatient.20"] !== 'undefined') {
            Props["PatientDriversLicenseState"] = setPropsect("ePatient.20", obj["ePatient.20"]);
        }
        if (typeof obj["ePatient.21"] !== 'undefined') {
            Props["PatientDriversLicense"] = setPropsect("ePatient.21", obj["ePatient.21"]);
        }
    };    
    if (typeof BO.eHistory !== 'undefined') {
        var obj = {};
        var obj = BO.eHistory;

        if (typeof obj["eHistory.01"] !== 'undefined') {
            Props["HistBarriersToCare"] = setPropsect(obj["eHistory.01"]);
        };

        if (typeof obj["PractitionerGroup"] !== 'undefined') {
            for (var d = 0; d < obj["PractitionerGroup"].length ; d++) {
                var objPG = obj["PractitionerGroup"][d];
                var DoctorName = "";
                if (typeof objPG["eHistory.03"] !== 'undefined') {
                    DoctorName = DoctorName + setPropsect(objPG["eHistory.03"]) + " ";
                };
                if (typeof objPG["eHistory.02"] !== 'undefined') {
                    DoctorName = DoctorName + setPropsect(objPG["eHistory.02"]);
                };

                if (typeof objPG["eHistory.04"] !== 'undefined') {
                    DoctorName = DoctorName + setPropsect(objPG["eHistory.04"]);
                }
            };
            Props["HistMDs"] = DoctorName;
        };

        if (typeof obj["eHistory.05"] !== 'undefined') {
            Props["HistAdvancedDirectives"] = setPropsect(obj["eHistory.05"]);
        };

        if (typeof obj["eHistory.06"] !== 'undefined') {

            var al = setPropsect(obj["eHistory.06"]);
            Props["MedicationAllergies"] = "";
            if (al !== "") {
                al = al.toString();
                var e4 = al.replace(/Allergy status to /g, '');
                //Props["MedicationAllergies"] = e4.toString().substring(0, 95);;
                Props["MedicationAllergies"] = e4.toString();
            }
        };

        if (typeof obj["eHistory.07"] !== 'undefined') {
            Props["EnvironmentalAllergies"] = setPropsect(obj["eHistory.07"]);
        };

        if (typeof obj["eHistory.08"] !== 'undefined') {
            Props["MedicalHistory"] = setPropsect(obj["eHistory.08"]);
        };
        if (typeof obj["eHistory.09"] !== 'undefined') {
            Props["MedicalHistoryObtainedFrom"] = setPropsect(obj["eHistory.09"]);
        };

        if (typeof obj["ImmunizationsGroup"] !== 'undefined') {
            for (var d = 0; d < obj["ImmunizationsGroup"].length ; d++) {
                var objIG = obj["ImmunizationsGroup"][d];
            }
        };
        var currMed = "";
        if (typeof obj["CurrentMedsGroup"] !== 'undefined') {
            for (var d = 0; d < obj["CurrentMedsGroup"].length ; d++) {
                var objCM = obj["CurrentMedsGroup"][d];

                if (typeof objCM["eHistory.12"] !== 'undefined') {
                    currMed = currMed + setPropsect(objCM["eHistory.12"]);
                };
                if (typeof objCM["eHistory.13"] !== 'undefined') {
                    currMed = currMed + setPropsect(objCM["eHistory.13"]);
                };
                if (typeof objCM["eHistory.14"] !== 'undefined') {
                    currMed = currMed + setPropsect(objCM["eHistory.14"]);
                };
                if (typeof objCM["eHistory.15"] !== 'undefined') {
                    currMed = currMed + setPropsect(objCM["eHistory.15"]);
                };
                currMed = currMed + ", "
            }
        };

        Props["CurrentMedications"] = currMed;

        if (typeof obj["eHistory.16"] !== 'undefined') {
            Props["PresenceOfInformation"] = setPropsect(obj["eHistory.16"]);
        };

        if (typeof obj["eHistory.17"] !== 'undefined') {
            Props["AlcoholDrugUse"] = setPropsect(obj["eHistory.17"]);
        };

        if (typeof obj["eHistory.18"] !== 'undefined') {
            Props["Pregnancy"] = setPropsect(obj["eHistory.18"]);
        };


        if (typeof obj["eHistory.19"] !== 'undefined') {

            Props["LastOralIntake"] = setPropsect(obj["eHistory.19"]);
        }
    };    
    if (typeof BO.ePayment !== 'undefined') {
        var obj = {};
        var obj = BO.ePayment;

        if (typeof obj["ePayment.01"] !== 'undefined') {
            Props["PaymentType"] = setPropsect(obj["ePayment.01"]);
        };
        if (typeof obj["ePayment.08"] !== 'undefined') {
            Props["ResidesInServiceArea"] = setPropsect(obj["ePayment.08"]);
        };
        if (typeof obj["ePayment.40"] !== 'undefined') {
            Props["ResponseUrgency"] = setPropsect(obj["ePayment.40"]);
        };
        if (typeof obj["InsuranceGroup"] !== 'undefined') {
            for (var d = 0; d < obj["InsuranceGroup"].length ; d++) {
                insG = obj["InsuranceGroup"][d]
                var ins = new Object();
                if (typeof insG["ePayment.09"] !== 'undefined') {
                    ins.InsCompID = setPropsect(insG["ePayment.09"]);
                };

                if (typeof insG["ePayment.10"] !== 'undefined') {
                    ins.InsCompName = setPropsect(insG["ePayment.10"]);
                };

                if (typeof insG["ePayment.11"] !== 'undefined') {
                    ins.BillingPriority = setPropsect(insG["ePayment.11"]);
                };

                ins.Address = "";
                if (typeof insG["ePayment.12"] !== 'undefined') {
                    ins.Address = setPropsect(insG["ePayment.12"]);
                };

                if (typeof insG["ePayment.13"] !== 'undefined') {
                    ins.Address = ins.Address + setPropsect(insG["ePayment.13"]);
                };

                if (typeof insG["ePayment.14"] !== 'undefined') {
                    ins.Address = ins.Address + setPropsect(insG["ePayment.14"]);
                };

                if (typeof insG["ePayment.17"] !== 'undefined') {
                    ins.GroupID = setPropsect(insG["ePayment.17"]);
                };

                if (typeof insG["ePayment.18"] !== 'undefined') {
                    ins.PolicyID = setPropsect(insG["ePayment.18"]);
                };
                ins.Name = "";
                if (typeof insG["ePayment.19"] !== 'undefined') {
                    ins.Name = ins.Name + setPropsect(insG["ePayment.19"]);
                };

                if (typeof insG["ePayment.20"] !== 'undefined') {
                    ins.Name = ins.Name + setPropsect(insG["ePayment.20"]);
                };

                if (typeof insG["ePayment.21"] !== 'undefined') {
                    ins.Name = ins.Name + setPropsect(insG["ePayment.21"]);
                };

                if (typeof insG["ePayment.22"] !== 'undefined') {
                    ins.RelationshipToInsured = setPropsect(insG["ePayment.22"]);
                };
                if (typeof insG["ePayment.58"] !== 'undefined') {
                    ins.GroupName = setPropsect(insG["ePayment.58"]);
                };

                if (typeof insArray === 'undefined') {
                    var insArray = new Array();
                };
                insArray.push(ins)
            };
            if (typeof insArray !== 'undefined') {
                if (insArray.length > 0) {
                    Props["Insurance"] = insArray;
                }
            };
            if (typeof obj["ClosestRelativeGroup"] !== 'undefined') {
                var o = obj["ClosestRelativeGroup"];
                if (typeof o["ePayment.23"] !== 'undefined') {
                    Props["ClosestRelativeName"] = setPropsect(o["ePayment.23"]);
                };
                if (typeof o["ePayment.24"] !== 'undefined') {
                    Props["ClosestRelativeName"] = Props["ClosestRelativeName"] + ", " + setPropsect(o["ePayment.24"]);
                };
                if (typeof o["ePayment.26"] !== 'undefined') {
                    Props["ClosestRelativeAddress"] = setPropsect(o["ePayment.26"]);
                };

                Props["ClosestRelativeCSZ"] = "";
                if (typeof o["ePayment.27"] !== 'undefined') {
                    Props["ClosestRelativeCSZ"] = setPropsect(o["ePayment.27"]);
                };
                if (typeof o["ePayment.28"] !== 'undefined') {
                    Props["ClosestRelativeCSZ"] = Props["ClosestRelativeCSZ"] + ", " + setPropsect(o["ePayment.28"]);
                };
                if (typeof o["ePayment.29"] !== 'undefined') {
                    Props["ClosestRelativeCSZ"] = Props["ClosestRelativeCSZ"] + " " + setPropsect(o["ePayment.29"]);
                };
                if (typeof o["ePayment.31"] !== 'undefined') {
                    Props["ClosestRelativePhone"] = setPropsect(o["ePayment.31"]);
                };


            }
        };

        if (typeof obj["ePayment.50"] !== 'undefined') {
            Props["CMSLevel"] = setPropsect(obj["ePayment.50"]);
        }

        if (typeof obj["SupplyItemGroup"] !== 'undefined') {
            for (var d = 0; d < obj["SupplyItemGroup"].length ; d++) {
                var od = obj["SupplyItemGroup"][d];
                var si = "";
                if (typeof od["ePayment.55"] !== 'undefined') {
                    si = si + setPropsect(od["ePayment.55"]);
                    if (typeof od["ePayment.56"] !== 'undefined') {
                        s1 = si + " " + setPropsect(od["ePayment.56"]);
                    }
                }
            }
            Props["Supplies"] = si;
        }
    };    
    if (typeof BO.eSituation !== 'undefined') {
        var obj = {};
        var obj = BO.eSituation;
        if (typeof obj["eSituation.01"] !== 'undefined') {
            Props["OnsetDateTime"] - setPropsect(obj["eSituation.01"]);
        };
        if (typeof obj["eSituation.02"] !== 'undefined') {
            Props["PossibleInjury"] = setPropsect(obj["eSituation.02"]);
        };

        if (typeof obj["PatientComplaintGroup"] !== 'undefined') {
            for (var d = 0; d < obj["PatientComplaintGroup"].length ; d++) {
                var og = obj["PatientComplaintGroup"][d]
                if (typeof og["eSituation.03"] !== 'undefined') {
                    var ComplaintType = ""
                    ComplaintType = setPropsect(og["eSituation.03"])
                    if (ComplaintType == "Chief (Primary)") {
                        if (typeof og["eSituation.04"] !== 'undefined') {
                            Props.ChiefComplaint = setPropsect(og["eSituation.04"])
                        };
                        if (typeof og["eSituation.05"] !== 'undefined') {
                            Props.ChiefComplaintDuration = setPropsect(og["eSituation.05"])
                        };
                        if (typeof og["eSituation.06"] !== 'undefined') {
                            Props.ChiefComplaintDurationTimeUnits = setPropsect(og["eSituation.06"])
                        }
                    };

                    if (ComplaintType == "Secondary") {
                        if (typeof og["eSituation.04"] !== 'undefined') {
                            Props.SecondaryComplaint = setPropsect(og["eSituation.04"])
                        };
                        if (typeof og["eSituation.05"] !== 'undefined') {
                            Props.SecondaryComplaintDuration = setPropsect(og["eSituation.05"])
                        };
                        if (typeof og["eSituation.06"] !== 'undefined') {
                            Props.SecondaryComplaintDurationTimeUnits = setPropsect(og["eSituation.06"])
                        };

                    };
                    if (ComplaintType == "Other") {
                        if (typeof og["eSituation.04"] !== 'undefined') {
                            Props.OtherComplaint = setPropsect(og["eSituation.04"])
                        };
                        if (typeof og["eSituation.05"] !== 'undefined') {
                            Props.OtherComplaintDuration = setPropsect(og["eSituation.05"])
                        };
                        if (typeof og["eSituation.06"] !== 'undefined') {
                            Props.OtherComplaintDurationTimeUnits = setPropsect(og["eSituation.06"])
                        }
                    }
                }
            }
        };
        if (typeof obj["eSituation.07"] !== 'undefined') {
            Props["ChiefComplaintLocation"] = setPropsect(obj["eSituation.07"]);
        };
        if (typeof obj["eSituation.09"] !== 'undefined') {
            Props["PrimarySymptom"] = setPropsect(obj["eSituation.09"]);
        };

        if (typeof obj["eSituation.10"] !== 'undefined') {
            Props["OtherAssociatedSymptoms"] = setPropsect(obj["eSituation.10"]);
        };

        if (typeof obj["eSituation.11"] !== 'undefined') {
            Props["ProviderImpresion"] = setPropsect(obj["eSituation.11"]);
        };

        if (typeof obj["eSituation.12"] !== 'undefined') {
            Props["SecondaryImpresion"] = setPropsect(obj["eSituation.12"]);
        };


        if (typeof obj["eSituation.13"] !== 'undefined') {
            Props["InitialAcuity"] = setPropsect(obj["eSituation.13"]);
        };

        if (typeof obj["eSituation.17"] !== 'undefined') {
            Props["PatientActivity"] = setPropsect(obj["eSituation.17"]);
        }
        if (typeof obj["eSituation.18"] !== 'undefined') {
            Props["LastKnownWell"] = setPropsect(obj["eSituation.18"]);
        }
    };
    if (typeof BO.eScene !== 'undefined') {
        var obj = {};
        var obj = BO.eScene

        if (typeof obj["eScene.01"] !== 'undefined') {
            Props["FirstUnitOnScene"] = setPropsect(obj["eScene.01"]);
        };

        if (typeof obj["eScene.03"] !== 'undefined') {
            Props["NumberOfPatientsAtScene"] = setPropsect(obj["eScene.03"]);
        };

        if (typeof obj["ResponderGroup"] !== 'undefined') {
            var aa = [];
            for (var d = 0; d < obj["ResponderGroup"].length ; d++) {
                var or = obj["ResponderGroup"][d]
                var agency = null;
                if (typeof or["eScene.02"] !== 'undefined') {
                    if (setPropsect(or["eScene.02"]) !== "") {
                        agency = setPropsect(or["eScene.02"]);
                    }
                };

                if (typeof ["eScene.03"] !== 'undefined') {
                    if (setPropsect(or["eScene.03"]) !== "") {
                        if (agency == null) {
                            agency = agency + setPropsect(or["eScene.03"]);

                        }
                        else {
                            agency = "  " + agency + setPropsect(or["eScene.03"]);

                        }
                    }
                };
                if (typeof or["eScene.04"] !== 'undefined') {
                    if (setPropsect(or["eScene.04"]) !== "") {
                        if (agency == null) {
                            agency = setPropsect(or["eScene.04"]);
                        }
                        else {
                            agency = agency + " (" + setPropsect(or["eScene.04"]) + ")";
                        }
                    }
                };

                if (agency !== null) {
                    aa = aa + agency + ", "
                }
            };

            Props["OtherAgencies"] = aa;
        };

        if (typeof obj["eScene.06"] !== 'undefined') {
            Props["NumberOfPatientsAtScene"] = setPropsect(obj["eScene.06"]);
        };
        if (typeof obj["eScene.07"] !== 'undefined') {
            Props["MassCasualtyIncident"] = setPropsect(obj["eScene.07"]);
        };

        if (typeof obj["eScene.08"] !== 'undefined') {
            Props["TriageClassification"] = setPropsect(obj["eScene.08"]);
        };

        if (typeof obj["eScene.09"] !== 'undefined') {
            Props["LocationType"] = setPropsect(obj["eScene.09"]);
        };

        if (typeof obj["eScene.13"] !== 'undefined') {
            Props["FacilityName"] = setPropsect(obj["eScene.13"]);
        };

        if (typeof obj["eScene.15"] !== 'undefined') {
            Props["SceneAddress"] = setPropsect(obj["eScene.15"]);
        };

        if (typeof obj["eScene.16"] !== 'undefined') {
            Props["SceneApartment"] = setPropsect(obj["eScene.16"]);
        };

        if (typeof obj["eScene.17"] !== 'undefined') {
            Props["SceneCity"] = setPropsect(obj["eScene.17"]);
        };
        if (typeof obj["eScene.18"] !== 'undefined') {
            Props["SceneState"] = setPropsect(obj["eScene.18"]);
        };

        if (typeof obj["eScene.19"] !== 'undefined') {
            Props["SceneZip"] = setPValue(obj["eScene.19"]);
        };

        if (typeof obj["eScene.21"] !== 'undefined') {

            var county = setPropsect(obj["eScene.21"]);
            var n = county.indexOf("County");
            if (n !== -1) {
                county = county.substring(0, n)
            }
            Props["SceneCounty"] = county;
        };
        if (typeof obj["eScene.22"] !== 'undefined') {

            var country = setPropsect(obj["eScene.22"]);
            if (country == "United States") {
                country = "USA"
            };
            Props["SceneCountry"] = country;
        }
    };
    if (typeof BO.eAirway !== 'undefined') {
        var obj = {};
        var obj = BO.eAirway;
        if (typeof obj["eAirway.01"] !== 'undefined') {
            Props["AirwayIndicators"] = setPropsect(obj["eAirway.01"]);
        };
        if (typeof obj["eAirway.08"] !== 'undefined') {
            Props["AirwayCompliations"] = setPropsect(obj["eAirway.08"]);
        };
        if (typeof obj["eAirway.09"] !== 'undefined') {
            Props["AirwayFailureReason"] = setPropsect(obj["eAirway.09"]);
        };
        if (typeof obj["eAirway.10"] !== 'undefined') {
            Props["AirwayManagementDate"] = setPropsect(obj["eAirway.10"]);
        };
        if (typeof obj["eAirway.11"] !== 'undefined') {
            Props["AirwayAbandonDate"] = setPropsect(obj["eAirway.11"]);
        };
        if (typeof obj.AirwayGroup !== 'undefined') {
            if (typeof obj["eAirway.ConfirmationGroup"] !== 'undefined') {
                for (var x = 0; x < obj["eAirway.ConfirmationGroup"].length ; x++) {
                    var obj2 = {};
                    var air = {}
                    obj2 = obj["eAirway.ConfirmationGroup"][x]

                    if (typeof obj2["eAirway.02"] !== 'undefined') {
                        air["AirwaDateTime"] = setPValue(obj2["eAirway.02"]);
                        var Event = new Object();
                        Event.Time = moment(air["AirwaDateTime"]).format("HH:mm");
                        Event.Name = "Airway Confirmation";
                        var v = [];
                        v.push(Event.Time)
                        EventLen = EventLen + v.length;
                    };
                    if (typeof obj2["eAirway.03"] !== 'undefined') {
                        air["AirwayDevice"] = setPropsect(obj2["eAirway.03"]);
                    };
                    if (typeof obj2["eAirway.04"] !== 'undefined') {
                        air["AirwayConfMethod"] = setPropsect(obj2["eAirway.04"]);
                    };
                    if (typeof obj2["eAirway.05"] !== 'undefined') {
                        air["AirwayTubeDepth"] = setPropsect(obj2["eAirway.05"]);
                    };
                    if (typeof obj2["eAirway.06"] !== 'undefined') {
                        air["AirwayCrewTypeConf"] = setPropsect(obj2["eAirway.06"]);
                    };
                    if (typeof obj2["eAirway.07"] !== 'undefined') {
                        air["AirwayCrewID"] = setPropsect(obj2["eAirway.07"]);
                        Event.PerformedBy = air["AirwayCrewID"];
                    };
                    if (typeof aA === 'undefined') {
                        var aA = new Array();
                    };
                    Event.Value = v;
                    EventLen = EventLen + v.length;
                    Events.push(Event);

                    aA.push(aA);
                }
                if (aA.length > 0) {
                    Props["ConfirmationGroup"] = aA;
                }
            };

        }
    };
    if (typeof BO.eArrest !== 'undefined') {
        var obj = {};
        var obj = BO.eArrest

        if (typeof obj["eArrest.01"] !== 'undefined') {
            Props["CardiacArrest"] = setPropsect(obj["eArrest.01"]);
        };

        if (typeof obj["eArrest.02"] !== 'undefined') {
            Props["ArrestEtiology"] = setPropsect(obj["eArrest.02"]);
        };

        if (typeof obj["eArrest.03"] !== 'undefined') {
            Props["RescAttempt"] = setPropsect(obj["eArrest.03"]);
        };

        if (typeof obj["eArrest.04"] !== 'undefined') {
            Props["CardiacWitnessed"] = setPropsect(obj["eArrest.04"]);
        };

        if (typeof obj["eArrest.05"] !== 'undefined') {
            Props["CareinProgessonArrival"] = setPropsect("eArrest.05", obj["eArrest.05"]);
        };

        if (typeof obj["eArrest.06"] !== 'undefined') {
            Props["ArrestPriorCPRProvidedBy"] = setPropsect(obj["eArrest.06"]);
        };

        if (typeof obj["eArrest.07"] !== 'undefined') {
            Props["AEDUsedPrior"] = setPropsect(obj["eArrest.07"]);
        };

        if (typeof obj["eArrest.08"] !== 'undefined') {
            Props["AEDUsedPriorBy"] = setPropsect(obj["eArrest.08"]);
        };

        if (typeof obj["eArrest.09"] !== 'undefined') {
            Props["CPRType"] = setPropsect(obj["eArrest.09"]);
        };

        if (typeof obj["eArrest.12"] !== 'undefined') {
            Props["ReturnCirc"] = setPropsect(obj["eArrest.12"]);
        };

        if (typeof obj["eArrest.14"] !== 'undefined') {
            Props["ArrestTime"] = setPValue(obj["eArrest.14"]);
        };

        if (typeof obj["eArrest.15"] !== 'undefined') {
            Props["ResuscDiscontinued"] = setPropsect(obj["eArrest.15"]);
        };
        if (typeof obj["eArrest.17"] !== 'undefined') {
            Props["CardiacRhythmAtDest"] = setPropsect(obj["eArrest.17"]);
        };

        if (typeof obj["eArrest.19"] !== 'undefined') {
            Props["CPRTime"] = setPValue(obj["eArrest.19"]);
            var Event = new Object();
            Event.Time = moment(Props["CPRTime"]).format("HH:mm");
            Event.Name = "CPR";
            var v = [];
            v.push(Event.Time)
            Event.Value = v;
            EventLen = EventLen + v.length;
            Events.push(Event);
        }
    };
    if (typeof BO.eOther !== 'undefined') {
        var obj = {};
        var obj = BO.eOther

        if (typeof obj["eOther.08"] !== 'undefined') {
            Props["CreatedBy"] = setPropsect(obj["eOther.08"]).trim();
        };

        if (typeof obj["EMSCrewMemberGroup"] !== 'undefined') {
            Props["CrewCount"] = obj.EMSCrewMemberGroup.length;
            for (var i = 0; i <= obj.EMSCrewMemberGroup.length - 1; i++) {
                var cmObj = {};
                cmObj = obj.EMSCrewMemberGroup[i];
                if (typeof cmObj["eOther.03"] !== 'undefined') {
                    var ll = new Object();
                    for (var tt = 0; tt <= cmObj["eOther.03"].vSet.length - 1 ; tt++) {
                        ll.Equipment = setPropsect(cmObj["eOther.03"]);
                    };
                }

                if (typeof cmObj["eOther.04"] !== 'undefined') {
                    ll.Crew = setPropsect(cmObj["eOther.04"]);
                };

                if (typeof cmObj["eOther.05"] !== 'undefined') {
                    ll.Exposure = setPropsect(cmObj["eOther.05"]);
                };

                if (typeof cmObj["eOther.06"] !== 'undefined') {
                    ll.ExposurePersonType = setPropsect(cmObj["eOther.06"]);
                };
                if (typeof OtherCrew === 'undefined') {
                    var OtherCrew = new Array();
                }
                OtherCrew.push(ll)
            };
            Props["OtherSafetyEquipment"] = OtherCrew;
        };
        if (typeof obj["FileGroup"] !== 'undefined') {
            for (var i = 0; i <= obj["FileGroup"].length - 1; i++) {
                var h = obj["FileGroup"][i]
                var Sig = new Object();

                if (typeof h["eOther.12"] !== 'undefined') {
                    Sig.TypeofSigner = setPropsect(h["eOther.12"]);
                };
                if (typeof h["eOther.13"] !== 'undefined') {
                    Sig.Reason = setPropsect(h["eOther.13"]);
                };
                if (typeof h["eOther.14"] !== 'undefined') {
                    Sig.PatientRepTye = setPropsect(h["eOther.14"]);
                };
                if (typeof h["eOther.19"] !== 'undefined') {
                    Sig.SigDate = setPropsect(h["eOther.19"]);
                };
                if (typeof h["eOther.20"] !== 'undefined') {
                    Sig.SigLastName = setPropsect(h["eOther.20"]);
                };
                if (typeof h["eOther.21"] !== 'undefined') {
                    Sig.SigFirstName = setPropsect(h["eOther.21"]);
                };
                if (typeof SigArray === 'undefined') {
                    var SigArray = new Array();
                };
                SigArray.push(Sig)
            }
            Props["OtherSignatureGroup"] = Sig;
        }
    };

    if (typeof BO.eInjury !== 'undefined') {
        var obj = {};
        var obj = BO.eInjury
        if (typeof obj["eInjury.01"] !== 'undefined') {
            if (obj["eInjury.01"].IsNull == false) {
                Props["InjuryCause"] = setPropsect(obj["eInjury.01"]);
                for (var i = 0; i < obj["eInjury.01"].vSet.length; i++) {
                    if (obj["eInjury.01"].vSet[i].text.substring(1, 4) == "Fall");
                    {
                        Props["Fall"] = true;
                    }
                }

                if (typeof obj["eInjury.04"] !== 'undefined') {
                    var vehInjuryArr = ["T71.22", "V79.3", "V79.9", "V49.3", "V49.9", "Y32", "V29.3", "V29.9", "V69.3",
                 "V69.9", "V59.3", "V59.9", "V39.3", "V39.9", "V81.9", "V82.9", "V03.0", "V03.1",
                 "V03.9", "V04.0", "V04.1", "V04.9", "V06.9", "V01", "V05.9", "V02.9", "V09.9", "V00.0",
                 "V89.9", "V20.9", "V86.31", "V70.9", "V60.9", "V86.94", "V86.34", "V86.39", "V50.9", "V86.92",
                 "V86.32", "V84.9", "V85.9", "V83.9", "V30.9", "V99"];

                    for (var i = 0; i < obj["eInjury.01"].length; i++) {
                        if (vehInjuryArr.vSet.indexOf(theCall.eInjury["eInjury.01"][i]) !== -1) {
                            Props.VehicularIncident = true;
                        }
                    }
                }
            }
        };
        if (typeof obj["eInjury.02"] !== 'undefined') {
            Props["InjuryMechanism"] = setPropsect(obj["eInjury.02"]);
        };
        if (typeof obj["eInjury.03"] !== 'undefined') {
            Props["InjuryTraumaCenter"] = setPropsect(obj["eInjury.03"]);
        };
        if (typeof obj["eInjury.04"] !== 'undefined') {
            Props["InjuryVehicle"] = setPropsect(obj["eInjury.04"]);
        };
        if (typeof obj["eInjury.05"] !== 'undefined') {
            Props["InjuryVehImpact"] = setPropsect(obj["eInjury.05"]);
        };
        if (typeof obj["eInjury.06"] !== 'undefined') {
            Props["InjuryLocationInVehicle"] = setPropsect(obj["eInjury.06"]);
        };
        if (typeof obj["eInjury.07"] !== 'undefined') {
            Props["InjurySafetyEquip"] = setPropsect(obj["eInjury.07"]);
        };
        if (typeof obj["eInjury.08"] !== 'undefined') {
            Props["InjuryAirbag"] = setPropsect(obj["eInjury.08"]);
        };
        if (typeof obj["eInjury.09"] !== 'undefined') {
            Props["InjuryFallHeight"] = setPropsect(obj["eInjury.09"]);
        };
        if (typeof obj["eInjury.10"] !== 'undefined') {
            Props["InjuryOSHAEquip"] = setPropsect(obj["eInjury.10"]);
        }
    };
    if (typeof BO.eExam !== 'undefined') {
        var obj = {};
        var obj = BO.eExam;

        if (typeof obj["eExam.01"] !== 'undefined') {
            Props["Weight"] = setPropsect(obj["eExam.01"]);
        };
        if (typeof obj["eExam.02"] !== 'undefined') {
            Props["Length"] = setPropsect(obj["eExam.02"]);
        };
        var HeadAssessement = "";
        if (typeof obj["AssessmentGroup"] !== 'undefined') {
            var theAssessment = new Object();
            for (var i = 0; i < obj.AssessmentGroup.length; i++) {
                var assessment = {};
                var aObj = {};
                aObj = obj.AssessmentGroup[i];
                if (typeof aObj["eExam.03"] === 'undefined') {
                    u.RaiseError("Exam Time Required", 0, "v3CodeText", "");
                }
                else {
                    if (aObj["eExam.03"].IsNull == true) {
                        u.RaiseError("Exam Time Required", 0, "v3CodeText", "");
                    }
                    else {
                        var t = setPValue(aObj["eExam.03"]);
                        theAssessment["Time"] = moment(t).format("HH:mm")
                        var Event = new Object();
                        Event.Time = theAssessment["Time"];
                        Event.Name = "Assessment";
                        var v = [];
                        v.push("Assessment:")
                        if (typeof aObj["eExam.04"] !== 'undefined') {
                            theAssessment["Skin"] = setPropsect(aObj["eExam.04"]);
                            if (theAssessment["Skin"] !== "") {
                                v.push("Skin:  " + theAssessment["Skin"])
                            }
                        };
                        if (typeof aObj["eExam.05"] !== 'undefined') {
                            theAssessment["Head"] = setPropsect(aObj["eExam.05"]);
                            if (theAssessment["Head"] !== "") {
                                v.push("Head:  " + theAssessment["Head"])
                            }
                        };
                        if (typeof aObj["eExam.06"] !== 'undefined') {
                            if (theAssessment["Face"] !== "") {
                                theAssessment["Face"] = setPropsect(aObj["eExam.06"]);
                            }
                        };
                        if (typeof aObj["eExam.07"] !== 'undefined') {
                            theAssessment["Neck"] = setPropsect(aObj["eExam.07"]);
                            if (theAssessment["Neck"] !== "") {
                                v.push("Neck:  " + theAssessment["Neck"])
                            }
                        };
                        if (typeof aObj["eExam.08"] !== 'undefined') {
                            theAssessment["Chest"] = setPropsect(aObj["eExam.08"]);
                            if (theAssessment["Chest"] !== "") {
                                v.push("Chest:  " + theAssessment["Chest"])
                            }
                        };

                        if (typeof aObj["eExam.09"] !== 'undefined') {
                            theAssessment["Heart"] = setPropsect(aObj["eExam.09"]);
                            if (theAssessment["Heart"] !== "") {
                                v.push("Heart:  " + theAssessment["Heart"])
                            }
                        };
                        /////////////////////AbdomenGroup

                        if (typeof aObj["AbdomenGroup"] !== 'undefined') {
                            for (var x = 0; x < aObj.AbdomenGroup.length; x++) {
                                var abdObj = aObj.AbdomenGroup[x]
                                var l = "";
                                var ll = "";
                                if (typeof abdObj["eExam.10"] !== 'undefined') {
                                    l = setPropsect(abdObj["eExam.10"]);
                                    if (typeof abdObj["eExam.11"] !== 'undefined') {
                                        ll = ll + " " + setPropsect(abdObj["eExam.11"]);
                                    }
                                };
                                theAssessment["AbdomenGroup"] = l + " " + ll;
                                if (theAssessment["AbdomenGroup"] !== "") {
                                    v.push("Abdomen:  " + theAssessment["AbdomenGroup"])
                                }
                            }
                        };

                        if (typeof aObj["eExam.12"] !== 'undefined') {
                            theAssessment["Pelvic"] = setPropsect(aObj["eExam.12"]);
                            if (theAssessment["Pelvic"] !== "") {
                                v.push("Pelvic:  " + theAssessment["Pelvic"])
                            }
                        };
                        /////////////////////SpineGroup

                        if (typeof aObj["SpineGroup"] !== 'undefined') {
                            for (var x = 0; x < aObj.SpineGroup.length; x++) {
                                var sObj = aObj.SpineGroup[x]
                                var l = "";
                                var ll = "";
                                if (typeof sObj["eExam.13"] !== 'undefined') {
                                    l = setPropsect(sObj["eExam.13"]);
                                    if (typeof sObj["eExam.14"] !== 'undefined') {
                                        ll = ll + setPropsect(sObj["eExam.14"]);
                                    }
                                }
                            }
                            theAssessment["SpineGroup"] = l + " " + ll;
                            if (theAssessment["SpineGroup"] !== "") {
                                v.push("SpineGroup:  " + theAssessment["SpineGroup"])
                            }
                        };

                        /////////////////////ExtremityGroup

                        if (typeof aObj["ExtremityGroup"] !== 'undefined') {
                            for (var x = 0; x < aObj.ExtremityGroup.length; x++) {
                                var l = "";
                                var ll = "";;
                                var dObj = aObj.ExtremityGroup[x]
                                if (typeof dObj["eExam.15"] !== 'undefined') {
                                    l = l + setPropsect(aObj["eExam.15"]);
                                    if (typeof dObj["eExam.16"] !== 'undefined') {
                                        ll = ll + setPropsect(aObj["eExam.16"]);
                                    }
                                }
                            };
                            theAssessment["ExtremityGroup"] = l + " " + ll;
                            if (theAssessment["ExtremityGroup"] !== "") {
                                v.push("ExtremityGroup:  " + theAssessment["ExtremityGroup"])
                            }
                        };

                        /////////////////////EyeGroup
                        if (typeof aObj["EyeGroup"] !== 'undefined') {
                            for (var x = 0; x < aObj.EyeGroup.length; x++) {
                                var sObj = aObj.EyeGroup[x]
                                var l = "";
                                var ll = "";
                                if (typeof sObj["eExam.17"] !== 'undefined') {
                                    l = setPropsect(sObj["eExam.18"]);
                                    if (typeof sObj["eExam.18"] !== 'undefined') {
                                        ll = ll + setPropsect(sObj["eExam.18"]);
                                    }
                                }
                            };
                            theAssessment["EyeGroup"] = l + " " + ll;
                            if (theAssessment["EyeGroup"] !== "") {
                                v.push("EyeGroup:  " + theAssessment["EyeGroup"])
                            }
                        };

                        if (typeof aObj["eExam.19"] !== 'undefined') {
                            theAssessment["Mental"] = setPropsect(aObj["eExam.19"]);
                            if (theAssessment["Mental"] !== "") {
                                v.push("Mental:  " + theAssessment["Mental"])
                            }
                        };

                        if (typeof aObj["eExam.20"] !== 'undefined') {
                            theAssessment["Neurological"] = setPropsect("eExam.20", aObj["eExam.20"]);
                            //var Neuro = setPValue("eExam.20", aObj["eExam.20"]);
                            if (theAssessment["Neurological"] !== "") {
                                v.push("Neurological:  " + theAssessment["Neurological"])
                                HeadAssessement = HeadAssessement + ", " + theAssessment["Neurological"];
                            }
                        }

                        if (typeof Assessment === 'undefined') {
                            var Assessment = new Array();
                        }
                        Event.Value = v;
                        EventLen = EventLen + v.length;
                        Events.push(Event);
                        Assessment.push(theAssessment)
                    }
                }
            }

        };
        Props["ExamAssessments"] = Assessment;
        Props["HeadAsessment"] = HeadAssessement;

    };
    
    if (typeof BO.eProcedures !== 'undefined') {
        var obj = {};
        var obj = BO.eProcedures;
        var procs = [];
        var pA = "No"
        var pR = "";
        if (typeof obj.ProcedureGroup !== 'undefined') {
            for (var i = 0; i < obj.ProcedureGroup.length; i++) {
                var obj2 = {}
                var theProc = new Object();
                obj2 = obj.ProcedureGroup[i];
                if (typeof obj2["eProcedures.01"] !== 'undefined') {
                    if (obj2["eProcedures.01"].IsNull == true) {
                        u.RaiseError("Procedure Time Required", 0, setPropsect(obj2["eProcedures.03"]), "");
                    }
                    else {
                        var tP = setPValue(obj2["eProcedures.01"]);
                        //theProc["Time"] = moment(tP).format("HH:mm")
                        theProc["ProcedureDate"] = moment(tP).format("MM/DD/YYYY");
                        var Event = new Object();
                        Event.Time = moment(tP).format("HH:mm");
                        Event.Name = "Procedure Time";


                        if (typeof obj2["eProcedures.02"] !== 'undefined') {
                            pA = "Yes";
                            theProc["PriorToEMS"] = setPropsect(obj2["eProcedures.02"]);
                        };
                        if (typeof obj2["eProcedures.03"] !== 'undefined') {
                            theProc["Procedure"] = setPropsect(obj2["eProcedures.03"]);
                            var v = [];
                            v.push("Procedure:")
                            v.push(theProc["Procedure"])
                            EventLen = EventLen + v.length;
                            Event.Value = v;

                            theProc["ProcedureCodes"] = setPValue(obj2["eProcedures.03"]);
                        };
                        if (typeof obj2["eProcedures.05"] !== 'undefined') {
                            theProc["Attempts"] = setPropsect(obj2["eProcedures.05"]);
                        };

                        if (typeof obj2["eProcedures.06"] !== 'undefined') {
                            theProc["Success"] = setPropsect(obj2["eProcedures.06"]);
                        };

                        if (typeof obj2["eProcedures.07"] !== 'undefined') {
                            theProc["Complication"] = setPropsect(obj2["eProcedures.07"]);
                        };

                        if (typeof obj2["eProcedures.08"] !== 'undefined') {
                            theProc["Response"] = setPropsect(obj2["eProcedures.08"]);
                            if (theProc["PriorToEMS"] = "Yes") {
                                pR = theProc["Response"];
                                Event.Response = theProc["Response"];
                            }
                        };

                        if (typeof obj2["eProcedures.09"] !== 'undefined') {
                            theProc["StaffID"] = setPropsect(obj2["eProcedures.09"]);
                            Event.PerformedBy = theProc["StaffID"];

                        };

                        if (typeof obj2["eProcedures.11"] !== 'undefined') {
                            theProc["Authorization"] = setPropsect(obj2["eProcedures.11"]);
                        };
                        Events.push(Event);
                        procs.push(theProc)
                    };
                }
                Props["Procedures"] = procs;
            }
        }
    };
    Props["PriorAid"] = pA;
    Props["ProcedureResponse"] = pR;

    if (typeof BO.eMedications !== 'undefined') {
        var obj = {};
        var obj = BO.eMedications
        if (typeof obj["MedicationGroup"] !== 'undefined') {
            for (var i = 0; i < obj["MedicationGroup"].length; i++) {
                var obj2 = {};
                var obj2 = obj["MedicationGroup"][i];
                var theMed = new Object();
                if (typeof obj2["eMedications.01"] !== 'undefined') {
                    if (obj2["eMedications.01"].IsNull == false) {
                        u.RaiseError("Missing Medication Admin Time", 10, setPropsect(obj2["eMedications.03"]));
                    }
                    else
                    {
                        var s = "";
                        var tM = setPropsect(obj2["eMedications.01"]);
                        theMed["Time"] = moment(tM).format("HH:mm");
                        var Event = new Object();
                        Event.Time = theMed["Time"];
                        Event.Name = "Medication Time";

                        if (typeof obj2["eMedications.02"] !== 'undefined') {
                            theMed["AdmittedPrior"] = setPropsect(obj2["eMedications.02"]);
                        };

                        if (typeof obj2["eMedications.03"] !== 'undefined') {
                            theMed["Medication"] = setPropsect(obj2["eMedications.03"]);
                        };

                        if (typeof obj2["eMedications.04"] !== 'undefined') {
                            theMed["Route"] = setPropsect(obj2["eMedications.04"]);
                        };

                        var stDose = null;
                        if (typeof obj2.DosageGroup !== 'undefined') {
                            if (typeof obj2.DosageGroup["eMedications.05"] !== 'undefined') {
                                theMed["Dosage"] = setPropsect(obj2.DosageGroup["eMedications.05"]);
                            };
                            if (typeof obj2.DosageGroup["eMedications.06"] !== 'undefined') {
                                theMed["DosageUnit"] = setPropsect(obj2.DosageGroup["eMedications.06"]);
                            };
                            var unit = null;

                            theMed["DosageUnit"] = setPropsect(obj2.DosageGroup["eMedications.06"]);
                            if (theMed["DosageUnit"] == "Milliliter") {
                                unit = "ml";
                            }
                            else if (theMed["DosageUnit"] == "Grams") {
                                unit = "gms";
                            }
                            else if (theMed["DosageUnit"] == "Inches") {
                                unit = "in";
                            }
                            else if (theMed["DosageUnit"] == "Inches") {
                                unit = "in";
                            }
                            else if (theMed["DosageUnit"] == "Keep Vein Open") {
                                unit = "kvo";
                            }
                            else if (theMed["DosageUnit"] == "Liters") {
                                unit = "l";
                            }
                            else if (theMed["DosageUnit"] == "Liters Per Minute") {
                                unit = "l/min";
                            }
                            else if (theMed["DosageUnit"] == "Metered Dose") {
                                unit = "MDO";
                            }
                            else if (theMed["DosageUnit"] == "Micrograms") {
                                unit = "mcg";
                            }
                            else if (theMed["DosageUnit"] == "Micrograms per Kilogram per Minute") {
                                unit = "mcg/kg/min";
                            }
                            else if (theMed["DosageUnit"] == "Milliequivalents") {
                                unit = "mEq";
                            }
                            else if (theMed["DosageUnit"] == "Milligrams") {
                                unit = "mg";
                            }
                            else if (theMed["DosageUnit"] == "Milligrams per Kilogram Per Minute") {
                                unit = "mg/kg/min";
                            }
                            else if (theMed["DosageUnit"] == "Milliliters") {
                                unit = "ml";
                            }
                            else if (theMed["DosageUnit"] == "Milliliters per Hour") {
                                unit = "ml/hr";
                            }
                            else if (theMed["DosageUnit"] == "Other") {
                                unit = "Other";
                            }
                            else if (theMed["DosageUnit"] == "Centimeters") {
                                unit = "cm";
                            }
                            else if (theMed["DosageUnit"] == "Drops") {
                                unit = "gtts";
                            }
                            else if (theMed["DosageUnit"] == "Liters Per Minute") {
                                unit = "LPM";
                            }
                            else if (theMed["DosageUnit"] == "Micrograms per Minute") {
                                unit = "mcg/min";
                            }
                            else if (theMed["DosageUnit"] == "Milligrams per Minute") {
                                unit = "mg/min";
                            }
                            else if (theMed["DosageUnit"] == "Puffs") {
                                unit = "Puffs";
                            }
                            else if (theMed["DosageUnit"] == "Units per Hour") {
                                unit = "Units per Hour";
                            }
                            else if (theMed["DosageUnit"] == "Micrograms per Kilogram") {
                                unit = "mcg/kg";
                            }
                            else if (theMed["DosageUnit"] == "Units") {
                                unit = "Units";
                            }
                            else if (theMed["DosageUnit"] == "Units per Kilogram per Hour") {
                                unit = "units/kg/hr";
                            }
                            else if (theMed["DosageUnit"] == "Units per Kilogram") {
                                unit = "units/kg";
                            }
                            else {
                                unit = null
                            }

                            theMed["DoseAndUnit"] = "";
                            stDose = stDose + unit;
                            if (stDose.trim.length > 0) {
                                theMed["DoseAndUnit"] = stDose;
                            }
                        };


                        if (typeof obj2["eMedications.07"] !== 'undefined') {
                            theMed["Response"] = setPropsect(obj2["eMedications.07"]);
                            Event.Response = theMed["Response"];
                        };
                        if (typeof obj2["eMedications.08"] !== 'undefined') {
                            theMed["Complication"] = setPropsect(obj2["eMedications.08"]);

                        };
                        if (typeof obj2["eMedications.09"] !== 'undefined') {
                            theMed["StaffID"] = setPropsect(obj2["eMedications.09"]);
                            Event.PerformedBy = theMed["StaffID"];
                        };
                        if (typeof obj2["eMedications.11"] !== 'undefined') {
                            theMed["Authorization"] = setPropsect(obj2["eMedications.11"]);
                        };
                        if (typeof medArray === 'undefined') {
                            var medArray = new Array();
                        };


                        s = s + theMed["Medication"] + ", ";
                        medArray.push(theMed);
                        var v = [];
                        v.push("Medication:")
                        v.push(theMed["Medication"])
                        EventLen = EventLen + v.length;
                        Event.Value = v;
                        Events.push(Event);
                    }
                }
            }
        };
        Props["Medications"] = s;
    };
    if (typeof BO.eProtocols !== 'undefined') {
        var obj = {};
        var obj = BO.eProtocols
        if (typeof BO.eProtocols["ProtocolGroup"] !== 'undefined') {
            for (var x = 0; x < obj["ProtocolGroup"].length; x++) {
                var theProtocol = new Object();
                if (typeof obj["ProtocolGroup"][x]["eProtocols.01"] !== 'undefined') {
                    theProtocol["Protocols"] = setPropsect(obj["ProtocolGroup"][x]["eProtocols.01"]);
                };
                if (typeof obj["ProtocolGroup"][x]["eProtocols.02"] !== 'undefined') {
                    theProtocol["AgeGroup"] = setPropsect("eProtocols.02", obj["ProtocolGroup"][x]["eProtocols.02"]);
                };

                if (typeof ProtocolArray === 'undefined') {
                    var ProtocolArray = new Array();
                };
                ProtocolArray.push(theProtocol);
            };
            if (typeof ProtocolArray !== 'undefined') {
                if (ProtocolArray.length > 0) {
                    Props["Protocols"] = ProtocolArray;
                }
            }
        }
    };
    
    if (typeof BO.eVitals !== 'undefined') {
        var timeArray = [];
        Props["VitalsCount"] = BO.eVitals["VitalGroup"].length;
        for (var ii = 0; ii < BO.eVitals["VitalGroup"].length; ii++) {
            var theVitals = new Object();
            var obj = {};
            var obj = BO.eVitals["VitalGroup"][ii];
            var vitalRow = new Object();

            if (typeof obj["eVitals.01"] !== 'undefined') {
                var t = setPropsect(obj["eVitals.01"]);
                theVitals["TimeTaken"] = moment(t).format("HH:mm")
                var Event = new Object();
                Event.Time = theVitals["TimeTaken"];
                Event.Name = "Vital Taken";
                var v = [];
                v.push("Vital Signs:")
                if (typeof obj["eVitals.02"] !== 'undefined') {
                    theVitals["ObtainedPrior"] = setPropsect(obj["eVitals.02"]);
                };

                var sys = null;
                var dia = null;
                var method = null;

                if (typeof obj["BloodPressureGroup"] !== 'undefined') {
                    if (typeof obj["BloodPressureGroup"]["eVitals.06"] !== 'undefined') {
                        sys = setPropsect(obj["BloodPressureGroup"]["eVitals.06"]);
                        Props["HasSBP"] = true;
                    };

                    if (typeof obj["BloodPressureGroup"]["eVitals.07"] !== 'undefined') {
                        dia = setPropsect(obj["BloodPressureGroup"]["eVitals.07"]);
                    };
                    if (typeof obj["BloodPressureGroup"]["eVitals.07"] !== 'undefined') {
                        method = setPropsect(obj["BloodPressureGroup"]["eVitals.08"]);
                    };
                    if ((sys !== null) & (dia !== null)) {
                        theVitals["BP"] = sys + "/" + dia + " " + method;
                        v.push("BP:  " + theVitals["BP"])
                    }
                };

                var ecg = null;
                var ecgType = null;
                var method = null;
                if (typeof obj["CardiacRhythmGroup"] !== 'undefined') {
                    if (typeof obj["CardiacRhythmGroup"]["eVitals.03"] !== 'undefined') {
                        ecg = setPropsect(obj["CardiacRhythmGroup"]["eVitals.03"]);
                    };
                    if (typeof obj["CardiacRhythmGroup"]["eVitals.04"] !== 'undefined') {
                        ecgType = setPropsect(obj["CardiacRhythmGroup"]["eVitals.04"]);
                    };
                    if (typeof obj["CardiacRhythmGroup"]["eVitals.05"] !== 'undefined') {
                        method = setPropsect(obj["CardiacRhythmGroup"]["eVitals.05"]);
                    };
                    if ((ecg !== null) & (ecgType !== null)) {
                        theVitals["CardiacRhythm"] = ecg + " " + ecgType + " " + method;
                        v.push("ECG:  " + theVitals["CardiacRhythm"])
                    }
                };



                if (typeof obj["HeartRateGroup"] !== 'undefined') {
                    if (typeof obj["HeartRateGroup"]["eVitals.10"] !== 'undefined') {
                        pulseString = setPropsect(obj["HeartRateGroup"]["eVitals.10"]);
                        Props["HasPulseRate"] = true;
                    };
                    if (typeof obj["eVitals.11"] !== 'undefined') {
                        if (obj["HeartRateGroup"]["eVitals.11"].IsNull == false) {
                            method = setPropsect(obj["HeartRateGroup"]["eVitals.11"]);
                        }
                    };
                    theVitals["HeartRate"] = pulseString;
                    if (theVitals["Heart Rate"] !== "") {
                        v.push("HR:  " + theVitals["HeartRate"])
                    }
                };

                if (typeof obj["eVitals.12"] !== 'undefined') {
                    theVitals["PulseOximetry"] = setPropsect(obj["eVitals.12"]);
                    if (theVitals["PulseOximetry"] !== "") {
                        v.push("Pulse Oximetry:  " + theVitals["PulseOximetry"])
                    }
                };

                if (typeof obj["eVitals.13"] !== 'undefined') {
                    theVitals["PulseRhythm"] = setPropsect(obj["eVitals.13"]);
                    Props["HasPulseRhythm"] = true;
                    if (theVitals["PulseRhythm"] !== "") {
                        v.push("Pulse Rhythm:  " + theVitals["PulseRhythm"])
                    }
                };

                if (typeof obj["eVitals.14"] !== 'undefined') {
                    theVitals["RespRate"] = setPropsect(obj["eVitals.14"]);
                    Props["HasPulseRate"] = true;
                    if (theVitals["RespRate"] !== "") {
                        v.push("Respiratory Rate:  " + theVitals["RespRate"])
                    }
                };

                if (typeof obj["eVitals.15"] !== 'undefined') {
                    theVitals["RespiratoryEffort"] = setPropsect(obj["eVitals.15"]);
                    Props["HasRespEffort"] = true;
                    if (theVitals["RespiratoryEffort"] !== "") {
                        v.push("Respiratory Effort:  " + theVitals["RespiratoryEffort"])
                    }
                };

                if (typeof obj["eVitals.16"] !== 'undefined') {
                    theVitals["ETCO2"] = setPropsect(obj["eVitals.16"]);
                    if (theVitals["ETCO2"] !== "") {
                        v.push("ETCO2:  " + theVitals["ETCO2"])
                    }
                };

                if (typeof obj["eVitals.17"] !== 'undefined') {
                    theVitals["CO"] = setPropsect(obj["eVitals.17"]);
                    if (theVitals["CO"] !== "") {
                        v.push("CO:  " + theVitals["CO"])
                    }
                };

                if (typeof obj["eVitals.18"] !== 'undefined') {
                    theVitals["Glucose"] = setPropsect(obj["eVitals.18"]);
                    if (theVitals["Glucose"] !== "") {
                        v.push("Glucose:  " + theVitals["Glucose"])
                    }
                };

                if (typeof obj["GlasgowScoreGroup"] !== 'undefined') {
                    var objG = obj["GlasgowScoreGroup"]

                    if (typeof objG["eVitals.19"] !== 'undefined') {
                        theVitals["GlasgowEye"] = setPValue(objG["eVitals.19"]);
                    };

                    if (typeof objG["eVitals.20"] !== 'undefined') {
                        theVitals["GlasgowVerbal"] = setPValue(objG["eVitals.20"]);
                    };

                    if (typeof objG["eVitals.21"] !== 'undefined') {
                        theVitals["GlasgowMotor"] = setPValue(objG["eVitals.21"]);
                    };

                    if (typeof objG["eVitals.23"] !== 'undefined') {
                        theVitals["GlasgowTotal"] = setPValue(objG["eVitals.23"]);
                        Props["HasGCSTotal"] = true;
                        if (theVitals["GlasgowTotal"] !== "") {
                            v.push("GCS:  " + theVitals["GlasgowTotal"]);
                        }
                    }
                };

                if (typeof obj["TemperatureGroup"] !== 'undefined') {
                    var objT = obj["TemperatureGroup"]
                    if (typeof objT["eVitals.24"] !== 'undefined') {
                        theVitals["Temp"] = setPropsect(objG["eVitals.24"]);
                    }
                    theVitals["TempMethod"] !== "";
                    if (typeof objT["eVitals.25"] !== 'undefined') {
                        theVitals["TempMethod"] = setPropsect(objG["eVitals.24"]);
                    }
                    if (theVitals["Temp"] !== "") {
                        v.push("Temp:  " + theVitals["Temp"] + "  " + theVitals["TempMethod"]);
                    }
                };

                if (typeof obj["eVitals.26"] !== 'undefined') {
                    theVitals["AVPU"] = setPropsect(obj["eVitals.26"]);
                    if (theVitals["AVPU"] !== "") {
                        v.push("AVPU:  " + theVitals["AVPU"])
                    }
                };

                if (typeof obj["PainScaleGroup"] !== 'undefined') {
                    if (typeof obj["PainScaleGroup"]["eVitals.27"] !== 'undefined') {
                        theVitals["PainScale"] = setPropsect(obj["PainScaleGroup"]["eVitals.27"]);
                        theVitals["PainScaleType"] !== "";
                        if (typeof obj["PainScaleGroup"]["eVitals.27"] !== 'undefined') {
                            theVitals["PainScaleType"] = setPropsect(obj["PainScaleGroup"]["eVitals.28"]);
                        };
                        if (theVitals["PainScale"] !== "") {
                            v.push("PainScale:  " + theVitals["PainScale"] + " " + theVitals["PainScaleType"])
                        }
                    };
                };

                if (typeof obj["StrokeScaleGroup"] !== 'undefined') {
                    if (typeof obj["StrokeScaleGroup"]["eVitals.29"] !== 'undefined') {
                        theVitals["StrokeScale"] = setPropsect(obj["StrokeScaleGroup"]["eVitals.29"]);
                    };
                    theVitals["StrokeScaleType"] !== "";
                    if (typeof obj["StrokeScaleGroup"]["eVitals.29"] !== 'undefined') {
                        theVitals["StrokeScaleType"] = setPropsect(obj["StrokeScaleGroup"]["eVitals.30"]);
                    };
                    if (theVitals["StrokeScale"] !== "") {
                        v.push("StrokeScale:  " + theVitals["StrokeScale"] + " " + theVitals["StrokeScaleType"])
                    }
                };
                if (typeof obj["eVitals.31"] !== 'undefined') {
                    theVitals["ReperfusionCheckList"] = setPropsect(obj["eVitals.31"]);
                    if (theVitals["ReperfusionCheckList"] !== "") {
                        v.push("Reperfusion Checklist:  " + theVitals["ReperfusionCheckList"])
                    }
                };
                if (typeof obj["eVitals.32"] !== 'undefined') {
                    theVitals["APGAR"] = setPropsect(obj["eVitals.32"]);
                    if (theVitals["APGAR"] !== "") {
                        v.push("APGAR:  " + theVitals["APGAR"])
                    }
                };
                if (typeof obj["eVitals.33"] !== 'undefined') {
                    theVitals["RevisedTraumaScore"] = setPropsect(obj["eVitals.33"]);
                    if (theVitals["RevisedTraumaScore"] !== "") {
                        v.push("Revised Trauma Score:  " + theVitals["RevisedTraumaScore"])
                    }
                };
                Event.Value = v;
                Events.push(Event);
                EventLen = EventLen + v.length;
                if (typeof Vitals === 'undefined') {
                    var Vitals = new Array();
                }
                Vitals.push(theVitals);
            };
            if (typeof Vitals !== 'undefined') {
                Props["Vitals"] = Vitals;
            }
        }
    };


    

    var CrewString = "";
    if (typeof BO.eCrew != 'undefined')
    {
        for (var t = 0; t < BO.eCrew["CrewGroup"].length; t++)
        {
            var crewObj = new Object();
            var obj = BO.eCrew["CrewGroup"][t]
            crewObj.Name = "";
            crewObj.StateID = "";
            crewObj.MemberLevel = "";
            crewObj.Role = "";
            if (typeof obj["eCrew.01"] !== 'undefined') {
                
                                        


                //var yy = this.getCrewName(obj["eCrew.01"])
                //yy.then(function (cn) {
                //    console.log("CN")
                //    console.log(cn)
                //});

                crewObj.Name = setPropsect(obj["eCrew.01"]);
                CrewString = CrewString + " " + crewObj.Name;
                crewObj.StateID = setPValue(obj["eCrew.01"]);
            };

            if (typeof obj["eCrew.02"] !== 'undefined') {
                crewObj.MemberLevel = setPropsect(obj["eCrew.02"]);
            };

            if (typeof obj["eCrew.03"] !== 'undefined') {
                crewObj.Role = setPropsect(obj["eCrew.03"]);
            };
            if (typeof cArray === 'undefined') {
                var cArray = new Array();
            }
            cArray.push(crewObj);
        };
        if (typeof cArray !== 'undefined') {
            Props["Crew"] = cArray;
            Props["CrewString"] = CrewString;
        }
    };
    if (typeof BO.eDevice !== 'undefined') {
        if (typeof BO.eDevice["DeviceGroup"] !== 'undefined') {
            for (var x = 0; x < BO.eDevice["DeviceGroup"].length ; x++) {
                var obj = BO.eDevice["DeviceGroup"][x];

                if (typeof obj["eDevice.03"] === 'undefined') {
                    u.RaiseError("Evenit Type Required", 0, "v3CodeText", "");
                }
                else {
                    if (typeof obj["eDevice.03"].IsNull == true) {
                        u.RaiseError("Event Type Required", 0, "v3CodeText", "");
                    }
                    else {
                        var dObj = new Object();
                        dObj.Type = setPropsect(obj["eDevice.03"]);
                    };


                    if (typeof obj["eDevice.02"] === 'undefined') {
                        u.RaiseError("Event Time Required", 0, "v3CodeText", "");
                    }
                    else {
                        if (typeof obj["eDevice.02"].IsNull == true) {
                            u.RaiseError("Evenit Time Required", 0, "v3CodeText", "");
                        }
                        else {
                            var dObj = new Object();
                            dObj.Time = moment(setPValue(obj["eDevice.03"])).format("HH:mm");
                            var Event = new Object();
                            Event.Time = dObj.Time
                            Event.Name = "Device Time";
                            var v = [];
                            if (typeof dObj.Type !== 'undefined') {
                                v.push(dObj.Type)
                            };
                            Event.Value = v;
                            EventLen = EventLen + v.length;
                            Events.push(Event);
                            if (typeof obj["eDevice.01"] !== 'undefined') {
                                dObj.SerialNumber = setPropsect(obj["eDevice.01"]);
                            };
                            if (typeof obj["eDevice.07"] !== 'undefined') {
                                dObj.ECGLead = setPropsect(obj["eDevice.07"]);
                            };
                            if (typeof obj["eDevice.08"] !== 'undefined') {
                                dObj.ECGInterpretation = setPropsect(obj["eDevice.08"]);
                            };
                            if (typeof obj["WaveformGroup"] !== 'undefined') {
                                if (typeof obj["WaveformGroup"]["eDevice.04"] !== 'undefined') {
                                    dObj.WaveFormGraphicType = setPropsect(obj["WaveformGroup"]["eDevice.04"]);
                                };
                                if (typeof obj["WaveformGroup"]["eDevice.05"] !== 'undefined') {
                                    dObj.WaveFormGraphic = setPropsect(obj["WaveformGroup"]["eDevice.05"]);
                                };
                                if (typeof obj["WaveformGroup"]["eDevice.06"] !== 'undefined') {
                                    dObj.MedicalDeviceMode = setPropsect(obj["WaveformGroup"]["eDevice.06"]);
                                }
                            };

                            if (typeof obj["ShockGroup"] !== 'undefined') {
                                if (typeof obj["ShockGroup"]["eDevice.09"] !== 'undefined') {
                                    dObj.ShockType = setPropsect(obj["ShockGroup"]["eDevice.09"]);
                                };
                                if (typeof obj["ShockGroup"]["eDevice.10"] !== 'undefined') {
                                    dObj.ShockEnergy = setPropsect(obj["ShockGroup"]["eDevice.10"]);
                                };
                                if (typeof obj["ShockGroup"]["eDevice.11"] !== 'undefined') {
                                    dObj.NumberOfShocks = setPropsect(obj["ShockGroup"]["eDevice.11"]);
                                };
                                if (typeof obj["ShockGroup"]["eDevice.12"] !== 'undefined') {
                                    dObj.PacingEnergy = setPropsect(obj["ShockGroup"]["eDevice.12"]);
                                };
                            }
                            if (typeof devArray === 'undefined') {
                                devArray = new Array();
                            }
                            if (dObj !== 'undefined') {
                                devArray.push(dObj)
                            }
                        }
                    }
                }
            }
        };
        if (typeof devArray !== 'undefined') {
            if (devArray.length > 0) {
                var eDevice = new Object();
                eDevice.DeviceGroup = devArray()
                Props["Device"] = eDevice;
            }
        }
    };
    
    var r = nar.setNarrative(Props)

    var b = r.match(/(.{1,120})/g);

    Props["Narrative"] = b
    //Props["Narrative"] = chunkStr(r, 150)

    var d = sortBy(Events, { prop: "Time" });
    d.Count = EventLen
    Props.Events = d;        
    return Props;
};
var setPropsect = function (pcrObject) {
    s = "";
    if (typeof pcrObject !== 'undefined') {
        var valObject = [];
        if (pcrObject.IsNull == false)
        {
            if (typeof pcrObject.vSet !== 'undefined') {
                if (pcrObject.vSet.length !== 0) {
                    for (var i = 0; i < pcrObject.vSet.length; i++) {
                        if (pcrObject.vSet[i].text !== "") {
                            s = s + pcrObject.vSet[i].text + ", ";
                        }
                        else {
                            s = s + pcrObject.vSet[i].val + ", ";
                        }
                    }
                }
            }
        }
        else {
            s = "";
        }
    };

    if (s !== "") {
        s = s.substring(0, s.length - 2);
    };
    return s;

};
var setPValue = function (pcrObject) {
    s = "";
    if (typeof pcrObject !== 'undefined') {
        var valObject = [];
        if (pcrObject.IsNull == false) {
            if (typeof pcrObject.vSet !== 'undefined') {
                if (pcrObject.vSet.length !== 0) {
                    for (var i = 0; i < pcrObject.vSet.length; i++) {
                        if (pcrObject.vSet[i].val !== "") {
                            s = s + pcrObject.vSet[i].val + ", ";
                        }
                    }
                }
            }
        }
        else {
            s = "";
        }

    };


    if (s !== "") {
        s = s.substring(0, s.length - 2);
    };
  
    return s;
};
var chunkStr = function (str, chunkLength) {
    if (typeof AR === 'undefined') {
        var AR = new Array();
    }
    var ts = ""
    var ts = str.length / chunkLength
    var ts = ts.toFixed(0)
    ts = Math.ceil(ts * 10) / 10
    ts = ts + 1;
    if (str.length < chunkLength) {
        AR.push(str)
        return AR
    }
    else {
        for (var i = 0; i < ts; i++) {
            if (i == 0) {
                var ss = "";
                ss = str.substr(i, chunkLength)
            }
            else {
                var d = i * chunkLength;
                var dd = str.length - d;
                if (dd < chunkLength) {
                    var ss = ""
                    ss = str.substr(d, str.length - chunkLength);
                }
                else {
                    ss = ""
                    ss = str.substr(d, chunkLength);
                }
            };

            AR.push(ss);
        }
    }
    return AR;
};



var sortBy = (function ()
{
    var _toString = Object.prototype.toString,
        _parser = function (x) { return x; },
        _getItem = function (x) {
            return this.parser((_toString.call(x) === "[object Object]" && x[this.prop]) || x);
        };
    return function (array, o) {
        if (!(array instanceof Array) || !array.length)
            return [];
        if (_toString.call(o) !== "[object Object]")
            o = {};
        if (typeof o.parser !== "function")
            o.parser = _parser;
        o.desc = [1, -1][+!!o.desc];
        return array.sort(function (a, b) {
            a = _getItem.call(o, a);
            b = _getItem.call(o, b);
            return ((a > b) - (b > a)) * o.desc;
        });
    };
}());

var getCrewName = function (id) {
    var usr = Parse.Object.extend("User");
    var query = new Parse.Query(usr);
    query.equalTo("objectId", id);
   
    return query.first({
        success: function (results) {
        },
        error: function (error) { }
    });
};


errObj.pcrID
errObj.status
errObj.agencyID
errObj.userName
errObj.vehicleId