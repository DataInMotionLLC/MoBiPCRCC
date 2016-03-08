var setLine = function (val) {
    //console.log(val)
    var ret = "";
    if (val == null) {
        ret = null
    }
    else {
        ret = val;
    }
    return ret;
};

var endSentence = function (sentence) {
    if (sentence.length > 0) {
        fieldName = sentence.trim()
        //fieldName = sentence
        return fieldName + ". "
    }
    return sentence;
};
exports.setNarrative = function (Props)
{
    if (typeof Props === 'undefined') {
        return "Error.  Undefined TheCall Object"
    };
    var BO = Props;
    if (typeof BO === 'undefined') {
        return "Error.  Undefined TheCall Object"
    };

    var ElementArray = [];
    var p = "";    
        
    if (BO["RespTypeOfServiceRequest"] !== "") {
        p = p + setLine("Crew responded to ");
        p = p + setLine(BO["RespTypeOfServiceRequest"] + " ");
        p = p + setLine("call involving ");
        if (BO.Gender !== "") {
            p = p + setLine(BO.Gender + " ");
        };
        if (BO["PatientAge"] !== "") {
            p = p + setLine("age, " + BO["PatientAge"]);
        };
        if (BO["LocationType"] !== "") {
            p = p + setLine(" to  " + BO["LocationType"]);
        };
        if (BO["DispatchComplaint"] !== "") {
            p = p + setLine(" for " + BO["DispatchComplaint"]);
        };
        p = endSentence(p);
    };
    if (BO.RespResponseModeToScene !== "") {
        p = p + setLine("Unit Responsd with " + BO.RespResponseModeToScene);
        p = endSentence(p);
    };
        
    if (BO["ChiefComplaint"] !== "") {
        p = p + setLine("Patient Chief Complaint is ");
        p = p + setLine(BO["ChiefComplaint"]);
        if (typeof BO.Vitals !== "undefined") {
            if (BO.Vitals !== "") {
                if (BO.Vitals[0]["PainScale"] !== "") {
                    p = p + setLine(" pain rated at " + BO.Vitals[0]["PainScale"]);
                }
            }
        }
        p = endSentence(p);

        p = p + "\n"
    };
    if (BO["PrimarySymptom"] !== "") {
        p = p + setLine("The primary problem appears to be ");
        p = p + setLine(BO["PrimarySymptom"]);
        p = endSentence(p);

        //        p = p + setLine("UPON ARRIVAL PATIENT WAS FOUND ");
        //p = endSentence(p);

        //p = p + setLine("The primary problem appears to be ");
        //p = p + setLine(BO["PrimarySymptom"]);
        //p = endSentence(p);
    };
    if (BO.InitialAcuity !== "") {    
        p = p + setLine("The general impression of the patient was " + BO.InitialAcuity);
        p = endSentence(p);
    };
    

    if (BO.OtherAgencies !== "") {
        p = p + setLine("Other Services on scene include " + BO.OtherAgencies);
        p = endSentence(p);
    };
    
    if (BO.DispoHowMovedToRig !== "") {
        p = p + setLine("Patient was " + BO.DispoHowMovedToRig + " to Ambulance");
        p = endSentence(p);
    };

    if (BO.DispoTransportMethod !== "") {
        p = p + setLine("Patient was " + BO.DispoTransportMethod + " during transport");
        p = endSentence(p);
    };

    if (BO.DispoPatientPosition !== "") {
        p = p + setLine("Patient was positioned in " + BO.DispoPatientPosition + " during transport");
        p = endSentence(p);
    };

    ;

    ElementArray.push(p);
    var h=""
    if (BO.MedicalHistoryObtainedFrom !== "") {
        h = h + setLine("History obtained from " + BO.MedicalHistoryObtainedFrom );
        h = endSentence(h);
    };
    if (BO.OnsetDateTime !== "") {
        h = h + setLine("The problem began " + BO.OnsetDateTime );
        h = endSentence(h);
    };

    if (BO.LastKnownWell !== "") {
        h = h + setLine("Patient last known well on " + BO.LastKnownWell);
        h = endSentence(h);
    };

    if (BO.CurrentMedications !== "") {
        h = h + setLine("The patient had taken " + BO.CurrentMedications + " prior to arrival");
        h = endSentence(h);
    };

    if (BO.PatientActivity !== "") {
        h = h + setLine("The patient was " + BO.PatientActivity + " prior to call");
        h = endSentence(h);
    };

    if (BO.PatientActivity !== "") {
        h = h + setLine("The patient was " + BO.PatientActivity + " prior to call");
        h = endSentence(h);
    };

    if (BO.Disposition !== "") {
        h = h + setLine(BO.Disposition);
        if (BO.DispoTo !== "") {
            h = h + setLine(" to " + BO.DispoTo);
        };
        h = endSentence(h);
    };
    ElementArray.push(h);

    var a = ""
    if (Props["ExamAssessments"] !== "")
    {
        a = a + "The Paramedic has performed a complete head to toe patient assessment."
    }
    if (BO.HistBarriersToCare !== "")
    {
        
        if (BO.HistBarriersToCare == "Unconscious") {
            a = a + setLine("Patient was unconcious during examination");
            a = endSentence(a);
        }
        else
        {
            a = a + setLine("Patient was concious during examination");
            a = endSentence(a);
        }
        if (BO.HistBarriersToCare !== "None Noted") {
            a = a + setLine("Patient assessment complicated by" + BO.HistBarriersToCare );
            a = endSentence(a);
        };

        if (BO.HistBarriersToCare !== "None Noted") {
            a = a + setLine("Patient " + BO.HistBarriersToCare + " which complicated assessment");
            a = endSentence(a);
        };
                
    };

    a = a + "\n";
    ElementArray.push(a);
    var Head = "";
    var Neck = "";
    var Neuro = "";
    var Face = "";
    var Chest = "";
    var Extremity = "";
    var EyeGroup = "";
    var Heart = "";
    var Mental = "";
    var GI = "";
    var Abdomen = "";
    var Spine = "";
    var Skin = "";
    
    if (BO.ExamAssessments !== "")
    {
        for (var i = 0; i < BO.ExamAssessments.length; i++)
        {
            var o = BO.ExamAssessments[i];
            if (typeof o.Head !== 'undefined') {
                if (o.Head !== '') {
                    Head = Head + o.Head + " "
                }
            };
            if (typeof o.Neck !== 'undefined') {
                if (o.Neck !== '') {
                    Neck = Neck + o.Neck + " "
                }
            };
            if (typeof o.Face !== 'undefined') {
                if (o.Face !== '') {
                    Face = Face + o.Face + " "
                }
            };

            if (typeof o.Chest !== 'undefined') {
                if (o.Chest !== '') {
                    Chest = Chest + o.Chest + " "
                }
            };

            if (typeof o.ExtremityGroup !== 'undefined') {
                if (o.ExtremityGroup !== '') {
                    Extremity = Extremity + o.ExtremityGroup + " "
                }
            };

            if (typeof o.EyeGroup !== 'undefined') {
                if (o.EyeGroup !== '') {
                    EyeGroup = EyeGroup + o.EyeGroup + " "
                }
            };
            if (typeof o.Heart !== 'undefined') {
                if (o.Heart !== '') {
                    Heart = Heart + o.Heart + " "
                }
            };
            if (typeof o.Mental !== 'undefined') {
                if (o.Mental !== '') {
                    Mental = Mental + o.Mental + " "
                }
            };

            if (typeof o.Pelvic !== 'undefined') {
                if (o.Pelvic !== '') {
                    GI = GI + o.Pelvic + " "
                }
            };
            if (typeof o.AbdomenGroup !== 'undefined') {
                if (o.AbdomenGroup !== '') {
                    Abdomen = Abdomen + o.AbdomenGroup + " "
                }
            };
            if (typeof o.SpineGroup !== 'undefined') {
                if (o.SpineGroup !== '') {
                    Spine = Spine + o.SpineGroup + " "
                }
            };
            if (typeof o.Skin !== 'undefined') {
                if (o.Skin !== '') {
                    Skin = Skin + o.Skin + " "
                }
            };
            
        }
        var hn = ""
        if (Head !== "") {
            hn = hn + setLine("Head " + Head);
            hn = endSentence(hn);
        };
        if (Neck !== "") {
            hn = hn + setLine("Neck " + Neck);
            hn = endSentence(hn);
        };
        if (Neuro !== "") {
            hn = hn + setLine("Neuro " + Neuro);
            hn = endSentence(hn);
        };
        if (Face !== "") {
            hn = hn + setLine("Face " + Neuro);
            hn = endSentence(hn);
        };
        if (Mental !== "") {
            hn = hn + setLine("Mental " + Mental);
            hn = endSentence(hn);
            a = a + "\n";
            ElementArray.push(a);
            ElementArray.push(hn);
        };

        var ch = ""
        if (Chest !== "") {
            ch = ch + setLine("Chest " + Chest);
            ch = endSentence(ch);
            a = "\n";
            ElementArray.push(a);
            ElementArray.push(ch);
        };
                
        var ex = "";
        if (Extremity !== "") {
            ex = ex + setLine("Extremity " + Extremity);
            ex = endSentence(ex);
            a =  "\n";
            ElementArray.push(a);
            ElementArray.push(ex);
        };
        
        var ab = "";
        if (Abdomen !== "") {
            ab = ab + setLine("Abdomen " + Abdomen);
            ab = endSentence(ab);
        };

        if (GI !== "") {
            ab = ab + setLine("Pelvic/GI " + GI);
            ab = endSentence(ab);
        };

        if (ab !== "") {
            a = "\n";
            ElementArray.push(a);
            ElementArray.push(ab);
        };
        
        var yy = "";
        if (EyeGroup !== "") {
            yy = yy + setLine("Eyes " + EyeGroup);
            yy = endSentence(yy);
            a = "\n";
            ElementArray.push(a);
            ElementArray.push(yy);
        };


        var ot = "";
        if (Spine !== "") {
            ot = ot + setLine("Spine " + Spine);
            ot = endSentence(ot);            
        };
        if (Skin !== "") {
            ot = ot + setLine("Skin " + Skin);
            ot = endSentence(ot);
        };
        if (ot !== "")
        {
            a = "\n";
            ElementArray.push(a);
            ElementArray.push(ot);
        }       
    };
    a = "\n";
    ElementArray.push(a);
    
    var ps = "";
    if (BO["Procedures"].length > 0) {
        for (var i = 0; i < BO["Procedures"].length; i++) {
            var ob = BO["Procedures"][i]
            ps = ps + ob["Procedure"] + " ";

            if (ob["Attempts"] !== "") {
                ps = ps + " performed " + ob["Attempts"] + " time(s)";
            }

            if (ob["Response"] !== "") {
                ps = ps + " with  " + ob["Response"] + " result ";
            }
            ps = endSentence(ps);
        }

    };

    ElementArray.push(ps);
    ElementArray.push("\n");

    var Delay = "";
    if (Props["RespDispatchDelay"] !== "") {
        if (Props["RespDispatchDelay"] !== "None/No Delay") {
            Delay = "Response Delay " + Props["RespDispatchDelay"]
        }
    };
    if (Props["RespSceneDelay"] !== "") {
        if (Props["RespSceneDelay"] !== "None/No Delay") {
            Delay = "Scene Delay " + Props["RespSceneDelay"]
        }
    };
    if (Props["RespDispatchDelay"] !== "") {
        if (Props["RespDispatchDelay"] !== "None/No Delay") {
            Delay = "Dispatch Delay " + Props["RespDispatchDelay"]
        }
    };
    if (Props["RespTransportDelay"] !== "") {
        if (Props["RespTransportDelay"] !== "None/No Delay") {
            Delay = "Transport Delay " + Props["RespTransportDelay"]
        }
    };
    if (Props["RespTurnAroundDelay"] !== "") {
        if (Props["RespTurnAroundDelay"] !== "None/No Delay") {
            Delay = "Turnaround Delay " + Props["RespTurnAroundDelay"]
        }
    };
    var ts = ""
    if (Delay == "") {
        ts = ts + setLine("Patient was transported without incident and without delay");
    }
    else {
        ts = ts + setLine("Transport affected by " +  Delay);
    };
    ElementArray.push(ts);
    ts=""
    ElementArray.push("\n");


    if (BO["DispoDestinationType"] !== "") {
        ts = ts + setLine("Patient taken to " + BO["DispoDestinationType"]);
    };
    ts = endSentence(ts);
    if (BO["DispoPatientMovedFromRig"] !== "") {
        ts = ts + setLine("Patient moved from vehicle via " + BO["DispoPatientMovedFromRig"]);
    };
    ts = endSentence(ts);
    ElementArray.push(ts);

    if (BO["HistAdvancedDirectives"] !== "") {
        var r = ""
        r = r + setLine("Patient has " + BO["HistAdvancedDirectives"]);
        r = endSentence(r);
    };
    
    var us = "";
    if (typeof BO["DispoHospitalActivation"] !== 'undefined')
    {
        for (var i = 0; i < BO["DispoHospitalActivation"].length; i++) {
            var ob = BO["DispoHospitalActivation"][i]
            if (typeof ob["PreAct"] !== 'undefined') {
                var n = ob["PreAct"].indexOf("-")
                if (n > 0) {
                    var xx = [];
                    xx = ob["PreAct"].split("-")
                    var pr = xx[1]
                    alert(pr)
                }
            }
            if (typeof pr !== 'undefined') {
                us = us + setLine("The Crew alerted " + pr);
                if (BO["DispoPreActTime"] !== "") {
                    us = us + setLine(" at " + BO["DispoPreActTime"]);
                }

            }
        };
        us = endSentence(us);
        ElementArray.push(us);
    };

    var tr = "";
    if (typeof BO.ReasonForChoosing !== 'undefined') {
        tr = tr + setLine("ReasonForChoosing: " + BO.ReasonForChoosing + ". ");
    };
    if (typeof BO.HospitalCapability !== 'undefined') {
        tr = tr + setLine("HospitalCapability: " + BO.HospitalCapability + ". ");
    };

    tr = endSentence(tr);
    ElementArray.push(tr);

    ElementArray.push("\n");

    var ss = "";
    for (var i = 0; i < BO["Crew"].length; i++) {
        var oo = BO["Crew"][i];
        var fd = oo["Role"].substr(0, 1)
        if (fd == "D") {
            ss = ss + setLine("Patient Driven by " + oo["Name"]);
            ss = endSentence(ss);
        }
        else {
            ss = ss + setLine(oo["Role"] + " provided by " + oo["Name"]);
            ss = endSentence(ss);
        }
    };
    ElementArray.push(ss);
    ss = "";

    var s = "";
    for (var i = 0; i < ElementArray.length; i++) {
        s = s + ElementArray[i]
    }
    return s
};



function WriteOut(ElementArray, Element, Value)
{
    //var elName = valText["" + Element + ""]
    if (typeof Value === 'undefined')
    {
        ElementArray.push(Element+ ': ' + 'Null')
    }
    else
    {
        ElementArray.push(Element + ': ' + Value)
    };

};
