//var Utils = require('cloud/UtilitiesCC.js');
//var V2Utils = require('cloud/ConversionUtilsCC.js');
//exports.setE15 = function (TheCall)


//E15_01 NHTSA INJURY MATRIX EXTERNAL/SKIN - eSituation.08 = 2808015	Musculoskeletal/Skin
//E15_02 NHTSA INJURY MATRIX HEAD
//E15_03 NHTSA INJURY MATRIX FACE
//E15_04 NHTSA INJURY MATRIX NECK
//E15_05 NHTSA INJURY MATRIX THORAX
//E15_06 NHTSA INJURY MATRIX ABDOMEN
//E15_07 NHTSA INJURY MATRIX SPINE
//E15_08 NHTSA INJURY MATRIX UPPER EXTREMITIES
//E15_09 NHTSA INJURY MATRIX PELVIS
//E15_10 NHTSA INJURY MATRIX LOWER EXTREMITIES
//E15_11 NHTSA INJURY MATRIX UNSPECIFIED

//First, determine if the Call is/has an Injury.
exports.setE15 = function (TheCall) {
    /*
    var ErrorList = [];
    var TC = TheCall;
    if (typeof TC.eExam === 'undefined') {
        var E15 = {};
        E15 = null;        
        return E15;
    }
    else {
        if (typeof TC.eExam.AssessmentGroup !== 'undefined') {
            for (var i = 0; i < TC.eExam.AssessmentGroup.length; i++) {
                var objA = TC.eExam.AssessmentGroup[i];

                if (typeof objA["eExam.05"] !== 'undefined') {
                    if (objA["eExam.05"].IsNull == false)  //Head Assessment
                    {

                        for (var d = 0; d < objA["eExam.05"].vSet.length; d++) {
                            var obj2 = objA["eExam.05"].vSet[d].val;

                            if (obj2 == "3505001") //Abrasion
                            {
                                if (typeof E15_02 === 'undefined') {
                                    var E15_02 = new Array();
                                };
                                E15_02.push("3370");
                            }
                            else if (obj2 == "3505003") //Avulsion
                            {
                                if (typeof E15_02 === 'undefined') {
                                    var E15_02 = new Array();
                                };
                                E15_02.push("3355");
                            }
                            else if (obj2 == "3505005") //Bleeding
                            {
                                if (typeof E15_02 === 'undefined') {
                                    var E15_02 = new Array();
                                };

                                E15_02.push("3325");
                            }
                            else if (obj2 == "3505007") //Bleeding
                            {
                                if (typeof E15_02 === 'undefined') {
                                    var E15_02 = new Array();
                                };

                                E15_02.push("3330");
                            }
                            else if (obj2 == "3505009") //Burn
                            {
                                if (typeof E15_02 === 'undefined') {
                                    var E15_02 = new Array();
                                };

                                E15_02.push("3335");
                            }
                            else if (obj2 == "3505011") //Burn
                            {
                                if (typeof E15_02 === 'undefined') {
                                    var E15_02 = new Array();
                                };

                                E15_02.push("3335");
                            }
                            else if (obj2 == "3505013") //Burn
                            {
                                if (typeof E15_02 === 'undefined') {
                                    var E15_02 = new Array();
                                };
                                E15_02.push("3335");
                            }

                            else if (obj2 == "3505015") //Burn
                            {
                                if (typeof E15_02 === 'undefined') {
                                    var E15_02 = new Array();
                                };
                                E15_02.push("3335");
                            }
                            else if (obj2 == "3505017") //Decap
                            {
                                if (typeof E15_02 === 'undefined') {
                                    var E15_02 = new Array();
                                };
                                E15_02.push("3320");
                            }
                            else if (obj2 == "3505019") //Deform
                            {
                                if (typeof E15_02 === 'undefined') {
                                    var E15_02 = new Array();
                                };
                                E15_02.push("3370")
                            }
                            else if (obj2 == "3505021") //Drainage
                            {
                                if (typeof E15_02 === 'undefined') {
                                    var E15_02 = new Array();
                                };
                                E15_02.push("3325");
                            }
                            else if (obj2 == "3505023") //Foriegn body
                            {
                                if (typeof E15_02 === 'undefined') {
                                    var E15_02 = new Array();
                                };
                                E15_02.push("3365");
                            }
                            else if (obj2 == "3505029") //Laceration
                            {
                                if (typeof E15_02 === 'undefined') {
                                    var E15_02 = new Array();
                                };
                                E15_02.push("3355");
                            }
                            else if (obj2 == "3505031") //Mass/Lesion
                            {
                                if (typeof E15_02 === 'undefined') {
                                    var E15_02 = new Array();
                                };
                                E15_02.push("3370");
                            }
                            else if (obj2 == "3505033") //Normal
                            {
                                //E15_02.push("3320")
                            }
                            else if (obj2 == "3505035") //Not Done
                            {
                                //E15_02.push("-5")
                            }
                            else if (obj2 == "3505037") //Pain
                            {
                                if (typeof E15_02 === 'undefined') {
                                    var E15_02 = new Array();
                                };
                                E15_02.push("3360");
                            }
                            else if (obj2 == "3505039") //Stab
                            {
                                if (typeof E15_02 === 'undefined') {
                                    var E15_02 = new Array();
                                };
                                E15_02.push("3365")
                            }
                            else if (obj2 == "3505045") //Gun
                            {
                                if (typeof E15_02 === 'undefined') {
                                    var E15_02 = new Array();
                                };
                                E15_02.push("3350");
                            }
                            else if (obj2 == "3505047") //Crush
                            {
                                if (typeof E15_02 === 'undefined') {
                                    var E15_02 = new Array();
                                };
                                E15_02.push("3340")
                            }
                            else if (obj2 == "3505049") //Swelling
                            {
                                if (typeof E15_02 === 'undefined') {
                                    var E15_02 = new Array();
                                };
                                E15_02.push("3370")
                            }
                            else if (obj2 == "3505051") //Contusion
                            {
                                if (typeof E15_02 === 'undefined') {
                                    var E15_02 = new Array();
                                };

                                E15_02.push("3370")
                            }
                            else if (obj2 == "3505052") //Tenderness
                            {
                                if (typeof E15_02 === 'undefined') {
                                    var E15_02 = new Array();
                                };
                                E15_02.push("3360")
                            }
                        }
                    }
                };
                if (typeof objA["eExam.06"] !== 'undefined') //face            
                {
                    if (objA["eExam.06"].IsNull == false) {
                        if (typeof objA["eExam.06"] !== 'undefined') {
                            if (objA["eExam.06"].IsNull == false) {
                                for (var d = 0; d < objA["eExam.06"].vSet.length; d++) {
                                    var obj3 = objA["eExam.06"].vSet[d].val;
                                    if (obj3 == "3506001") //Abrasion
                                    {
                                        if (typeof E15_03 === 'undefined') {
                                            var E15_03 = new Array();
                                        };

                                        E15_03.push("3370");
                                    }
                                    else if (obj3 == "3506003") //Avulsion
                                    {
                                        if (typeof E15_03 === 'undefined') {
                                            var E15_03 = new Array();
                                        };
                                        E15_02.push("3355")
                                    }
                                    else if (obj3 == "3506005") //Bleeding
                                    {
                                        if (typeof E15_03 === 'undefined') {
                                            var E15_03 = new Array();
                                        };
                                        E15_03.push("3325");
                                    }
                                    else if (obj3 == "3506007") //Bleeding
                                    {
                                        if (typeof E15_03 === 'undefined') {
                                            var E15_03 = new Array();
                                        };
                                        E15_03.push("3330")
                                    }
                                    else if (obj3 == "3506009") //Burn
                                    {
                                        if (typeof E15_03 === 'undefined') {
                                            var E15_03 = new Array();
                                        };
                                        E15_03.push("3335");
                                    }
                                    else if (obj3 == "3506011") //Burn
                                    {
                                        if (typeof E15_03 === 'undefined') {
                                            var E15_03 = new Array();
                                        };
                                        E15_03.push("3335");
                                    }
                                    else if (obj3 == "3506013") //Burn
                                    {
                                        if (typeof E15_03 === 'undefined') {
                                            var E15_03 = new Array();
                                        };
                                        E15_03.push("3335");
                                    }

                                    else if (obj3 == "3506015") //Burn
                                    {
                                        if (typeof E15_03 === 'undefined') {
                                            var E15_03 = new Array();
                                        };
                                        E15_03.push("3335");
                                    }

                                    else if (obj3 == "3506017") //Burn
                                    {
                                        if (typeof E15_03 === 'undefined') {
                                            var E15_03 = new Array();
                                        };
                                        E15_03.push("3335");
                                    }
                                    else if (obj3 == "3506021") //Deform
                                    {
                                        if (typeof E15_03 === 'undefined') {
                                            var E15_03 = new Array();
                                        };
                                        E15_03.push("3370")
                                    }
                                    else if (obj3 == "3506023") //Drainage
                                    {
                                        if (typeof E15_03 === 'undefined') {
                                            var E15_03 = new Array();
                                        };
                                        E15_03.push("3325");
                                    }
                                    else if (obj3 == "3506025") //Foriegn body
                                    {
                                        if (typeof E15_03 === 'undefined') {
                                            var E15_03 = new Array();
                                        };
                                        E15_03.push("3365")
                                    }
                                    else if (obj3 == "3506031") //Laceration
                                    {
                                        if (typeof E15_03 === 'undefined') {
                                            var E15_03 = new Array();
                                        };
                                        E15_03.push("3355")
                                    }
                                    else if (obj3 == "3506033") //Mass/Lesion
                                    {
                                        if (typeof E15_03 === 'undefined') {
                                            var E15_03 = new Array();
                                        };
                                        E15_03.push("3370")
                                    }
                                    else if (obj3 == "3506035") //Normal
                                    {
                                        //E15_03.push("-5")
                                    }
                                    else if (obj3 == "3506037") //Not Done
                                    {
                                        //E15_03.push("-10")
                                    }
                                    else if (obj3 == "3506039") //Pain
                                    {
                                        if (typeof E15_03 === 'undefined') {
                                            var E15_03 = new Array();
                                        };
                                        E15_03.push("3360");
                                    }
                                    else if (obj3 == "3506041") //Puncture
                                    {
                                        if (typeof E15_03 === 'undefined') {
                                            var E15_03 = new Array();
                                        };
                                        E15_03.push("3365")
                                    }
                                    else if (obj3 == "3506047") //Gun
                                    {
                                        if (typeof E15_03 === 'undefined') {
                                            var E15_03 = new Array();
                                        };
                                        E15_03.push("3350");
                                    }
                                    else if (obj3 == "3506049") //Crush
                                    {
                                        if (typeof E15_03 === 'undefined') {
                                            var E15_03 = new Array();
                                        };
                                        E15_03.push("3340");
                                    }
                                    else if (obj3 == "3506051") //Tenderness
                                    {
                                        if (typeof E15_03 === 'undefined') {
                                            var E15_03 = new Array();
                                        };
                                        E15_03.push("3370");
                                    }
                                    else if (obj3 == "3506053") //Swelling
                                    {
                                        if (typeof E15_03 === 'undefined') {
                                            var E15_03 = new Array();
                                        };
                                        E15_03.push("3370")
                                    }
                                    else if (obj3 == "3506055") //Contussion
                                    {
                                        if (typeof E15_03 === 'undefined') {
                                            var E15_03 = new Array();
                                        };
                                        E15_03.push("3370")
                                    };
                                }
                            }
                        }
                    }
                };
                if (typeof objA["eExam.07"] !== 'undefined')  //Neck
                {
                    if (objA["eExam.07"].IsNull == false) {
                        for (var d = 0; d < objA["eExam.07"].vSet.length; d++) {
                            var obj7 = objA["eExam.07"].vSet[d].val;
                            if (obj7 == "3507001") //Abrassion
                            {
                                if (typeof E15_04 === 'undefined') {
                                    var E15_04 = new Array();
                                };
                                E15_04.push("3370");

                            }
                            else if (obj7 == "3507003") //Avulsion
                            {
                                if (typeof E15_04 === 'undefined') {
                                    var E15_04 = new Array();
                                };

                                E15_04.push("3355");
                            }
                            else if (obj7 == "3507005") //Bleeding
                            {
                                if (typeof E15_04 === 'undefined') {
                                    var E15_04 = new Array();
                                };
                                E15_04.push("3325");
                            }
                            else if (obj7 == "3507007") //Bleeding
                            {
                                if (typeof E15_04 === 'undefined') {
                                    var E15_04 = new Array();
                                };

                                E15_04.push("3330");
                            }
                            else if (obj7 == "3507009") //Burn
                            {
                                if (typeof E15_04 === 'undefined') {
                                    var E15_04 = new Array();
                                };
                                E15_04.push("3335");
                            }
                            else if (obj7 == "3507011") //Burn
                            {
                                if (typeof E15_04 === 'undefined') {
                                    var E15_04 = new Array();
                                };
                                E15_04.push("3335");
                            }
                            else if (obj7 == "3507013") //Burn
                            {
                                if (typeof E15_04 === 'undefined') {
                                    var E15_04 = new Array();
                                };
                                E15_04.push("3335");
                            }
                            else if (obj7 == "3507015") //Burn
                            {
                                if (typeof E15_04 === 'undefined') {
                                    var E15_04 = new Array();
                                };
                                E15_04.push("3335");
                            }
                            else if (obj7 == "3507017") //Decap
                            {
                                if (typeof E15_04 === 'undefined') {
                                    var E15_04 = new Array();
                                };
                                E15_04.push("3320");
                            }
                            else if (obj7 == "3507019") //Foriegn body
                            {
                                if (typeof E15_04 === 'undefined') {
                                    var E15_04 = new Array();
                                };
                                E15_04.push("3365");
                            }
                            else if (obj7 == "3507025") //JVD
                            {
                                if (typeof E15_04 === 'undefined') {
                                    var E15_04 = new Array();
                                };
                                E15_04.push("3360");
                            }
                            else if (obj7 == "3507027") //Laceration
                            {
                                if (typeof E15_04 === 'undefined') {
                                    var E15_04 = new Array();
                                };
                                E15_04.push("3355");
                            }
                            else if (obj7 == "3507029") //Normal
                            {
                                //E15_04.push("-10")
                            }
                            else if (obj7 == "3507031") //Not Done
                            {
                                //E15_04.push("-5")
                            }
                            else if (obj7 == "3507033") //Pain
                            {
                                if (typeof E15_04 === 'undefined') {
                                    var E15_04 = new Array();
                                };
                                E15_04.push("3360");
                            }
                            else if (obj7 == "3507035") //Puncture
                            {
                                if (typeof E15_04 === 'undefined') {
                                    var E15_04 = new Array();
                                };
                                E15_04.push("3365")
                            }
                            else if (obj7 == "3507037") //Stridor
                            {
                                if (typeof E15_04 === 'undefined') {
                                    var E15_04 = new Array();
                                };
                                E15_04.push("3360")
                            }
                            else if (obj7 == "3507039") //Subcutaneous air
                            {
                                if (typeof E15_04 === 'undefined') {
                                    var E15_04 = new Array();
                                };

                                E15_04.push("3360")
                            }

                            else if (obj7 == "3507045") //Tracheal Deviation-Left
                            {
                                if (typeof E15_04 === 'undefined') {
                                    var E15_04 = new Array();
                                };
                                E15_04.push("3360")
                            }

                            else if (obj7 == "3507047") //Tracheal Deviation-Right
                            {
                                if (typeof E15_04 === 'undefined') {
                                    var E15_04 = new Array();
                                };
                                E15_04.push("3360")
                            }

                            else if (obj7 == "3507049") //Gunshot
                            {
                                if (typeof E15_04 === 'undefined') {
                                    var E15_04 = new Array();
                                };

                                E15_04.push("3350");
                            }

                            else if (obj7 == "3507051") //Crush
                            {
                                if (typeof E15_04 === 'undefined') {
                                    var E15_04 = new Array();
                                };
                                E15_04.push("3340");
                            }
                            else if (obj7 == "3507053") //Swelling
                            {
                                if (typeof E15_04 === 'undefined') {
                                    var E15_04 = new Array();
                                };

                                E15_04.push("3370");

                            }
                            else if (obj7 == "3507055") //Contusion
                            {
                                if (typeof E15_04 === 'undefined') {
                                    var E15_04 = new Array();
                                };

                                E15_04.push("3370")
                            }
                            else if (obj7 == "3507057") //Deform
                            {
                                if (typeof E15_04 === 'undefined') {
                                    var E15_04 = new Array();
                                };

                                E15_04.push("3370")

                            }
                            else if (obj7 == "3507059") //Tenderness
                            {
                                if (typeof E15_04 === 'undefined') {
                                    var E15_04 = new Array();
                                };

                                E15_04.push("3360")
                            }
                        }
                    }

                };
                if (typeof objA["eExam.08"] !== 'undefined') //Thorax - Chest and Lungs
                {
                    if (objA["eExam.08"].IsNull == false) {
                        for (var d = 0; d < objA["eExam.08"].vSet.length; d++) {
                            var obj8 = objA["eExam.08"].vSet[d].val;

                            if (obj8 == "3508001") //Abrassion
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };

                                E15_01.push("3370");
                            }
                            else if (obj8 == "3508003") //Avulsion
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("3355");
                            }
                            else if (obj8 == "3508005") //Bleeding
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("3325");
                            }
                            else if (obj8 == "3508007") //Bleeding
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("3330");
                            }
                            else if (obj8 == "3508009") //Burn
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("3335");
                            }
                            else if (obj8 == "3508011") //Breath Sounds-Absent-Left
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("3360")
                            }
                            else if (obj8 == "3508013") //Breath Sounds-Absent-Right
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("3360")
                            }
                            else if (obj8 == "3508015") //Breath Sounds-Decrease-Left
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("3360")
                            }
                            else if (obj8 == "3508017") //Breath Sounds-Decrease-Rights
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("3360")
                            }
                            else if (obj8 == "3508019") //Breath Sounds-equal
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("-10")
                            }
                            else if (obj8 == "3508021") //Breath Sounds-Normal Right
                            {
                                //E15_05.push("-10")
                            }
                            else if (obj8 == "3508023") //Breath Sounds-Normal Left
                            {
                                //E15_05.push("-10")
                            }
                            else if (obj8 == "3508025") //Burn
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("3335");
                            }
                            else if (obj8 == "3508027") //Burn
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("3355");
                            }
                            else if (obj8 == "3508029") //Burn
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("3335");
                            }
                            else if (obj8 == "3508031") //Burn
                            {
                                E15_05.push("3335");
                                E15_01.push("3335");
                            }
                            else if (obj8 == "3508033") //Crush
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("3340")
                            }
                            else if (obj8 == "3508035") //Deform
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("3370");
                            }
                            else if (obj8 == "3508037") //Flail Left
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("3360")
                            }
                            else if (obj8 == "3508039") //Flail Right
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("3360")
                            }
                            else if (obj8 == "3508041") //Foreign
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("3365");
                            }
                            else if (obj8 == "3508047") //Increased Resp
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("3360")
                            }
                            else if (obj8 == "3508049") //Implanted Device
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("-10")
                            }
                            else if (obj8 == "3508051") //Laceration
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("3355");
                            }
                            else if (obj8 == "3508053") //Norm
                            {
                                //E15_05.push("-10")
                            }
                            else if (obj8 == "3508055") //not Done
                            {
                                //E15_05.push("-10")
                            }
                            else if (obj8 == "3508057") //Pain
                            {
                                E15_05.push("3360");
                                E15_01.push("3360");
                            }
                            else if (obj8 == "3508059") //Pain
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("3360");
                            }
                            else if (obj8 == "3508061") //Pain
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("3360")
                            }
                            else if (obj8 == "3508063") //Puncture
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("3365")
                            }
                            else if (obj8 == "3508065") //Rales
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("3360")
                            }
                            else if (obj8 == "3508067") //Rales
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("3355")
                            }
                            else if (obj8 == "3508069") //Rhonchi
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("3360")
                            }
                            else if (obj8 == "3508071") //Rhonchi
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("3360")
                            }
                            else if (obj8 == "3508073") //Rhonchi
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("3360")
                            }
                            else if (obj8 == "3508075") //Rhonchi
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("3360")
                            }
                            else if (obj8 == "3508077") //Stridor
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("3360")
                            }
                            else if (obj8 == "3508079") //Stridor
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("3360")
                            }
                            else if (obj8 == "3508085") //Stridor
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("3370")
                            }
                            else if (obj8 == "3508087") //Stridor
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("3360")
                            }
                            else if (obj8 == "3508089") //Wheezing
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("3360")
                            }
                            else if (obj8 == "3508091") //Wheezing
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("3360")
                            }
                            else if (obj8 == "3508093") //Wheezing
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("3360")
                            }
                            else if (obj8 == "3508095") //Wheezing
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("3360")
                            }
                            else if (obj8 == "3508097") //Gun
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("3350");
                            }
                            else if (obj8 == "3508099") //Swelling
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("3370")
                            }
                            else if (obj8 == "3508101") //Contussion
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("3370")
                            }
                            else if (obj8 == "3508103") //Contussion
                            {
                                if (typeof E15_05 === 'undefined') {
                                    var E15_05 = new Array();
                                };
                                E15_05.push("3360")
                            }
                        }
                    }

                };
                if (typeof objA["AbdomenGroup"] !== 'undefined') //Abdomen
                {
                    for (var dd = 0; dd < objA["AbdomenGroup"].length; dd++) {
                        if (typeof objA["AbdomenGroup"][dd]["eExam.11"] !== 'undefined') //neck
                        {
                            if (objA["AbdomenGroup"][dd]["eExam.11"].IsNull == false) {
                                for (var d = 0; d < objA["AbdomenGroup"][dd]["eExam.11"].vSet.length; d++) {
                                    var obj11 = objA["AbdomenGroup"][dd]["eExam.11"].vSet[d].val;

                                    if (obj11 == "3511001") //Abrassion
                                    {
                                        if (typeof E15_06 === 'undefined') {
                                            var E15_06 = new Array();
                                        };
                                        E15_06.push("3370");
                                    }
                                    else if (obj11 == "3511003") //Avulsion
                                    {
                                        if (typeof E15_06 === 'undefined') {
                                            var E15_06 = new Array();
                                        };
                                        E15_06.push("3355");
                                    }
                                    else if (obj11 == "3511005") //Bleeding
                                    {
                                        if (typeof E15_06 === 'undefined') {
                                            var E15_06 = new Array();
                                        };
                                        E15_06.push("3325");
                                    }
                                    else if (obj11 == "3511007") //Bleeding
                                    {
                                        if (typeof E15_06 === 'undefined') {
                                            var E15_06 = new Array();
                                        };
                                        E15_06.push("3330");
                                    }
                                    else if (obj11 == "3511009") //Bowel Sounds Abscent
                                    {
                                        if (typeof E15_06 === 'undefined') {
                                            var E15_06 = new Array();
                                        };
                                        E15_06.push("3360")
                                    }
                                    else if (obj11 == "3511011") //Bowel Sounds Present
                                    {
                                        if (typeof E15_06 === 'undefined') {
                                            var E15_06 = new Array();
                                        };
                                        E15_06.push("3360")
                                    }
                                    else if (obj11 == "3511013") //Burn
                                    {
                                        if (typeof E15_06 === 'undefined') {
                                            var E15_06 = new Array();
                                        };
                                        E15_06.push("3335");
                                    }
                                    else if (obj11 == "3511015") //Burn
                                    {
                                        if (typeof E15_06 === 'undefined') {
                                            var E15_06 = new Array();
                                        };
                                        E15_06.push("3335");
                                    }
                                    else if (obj11 == "3511017") //Burn
                                    {
                                        if (typeof E15_06 === 'undefined') {
                                            var E15_06 = new Array();
                                        };
                                        E15_06.push("3335");
                                    }
                                    else if (obj11 == "3511021") //Distension
                                    {
                                        if (typeof E15_06 === 'undefined') {
                                            var E15_06 = new Array();
                                        };
                                        E15_06.push("3360")
                                    }
                                    else if (obj11 == "3511023") //Foriegn Body
                                    {
                                        if (typeof E15_06 === 'undefined') {
                                            var E15_06 = new Array();
                                        };
                                        E15_06.push("3365")
                                    }
                                    else if (obj11 == "3511025") //Guarding
                                    {
                                        if (typeof E15_06 === 'undefined') {
                                            var E15_06 = new Array();
                                        };
                                        E15_06.push("3360")
                                    }
                                    else if (obj11 == "3511031") //Laceration
                                    {
                                        if (typeof E15_06 === 'undefined') {
                                            var E15_06 = new Array();
                                        };
                                        E15_06.push("3355");
                                    }
                                    else if (obj11 == "3511033") //Mass Lesion
                                    {
                                        if (typeof E15_06 === 'undefined') {
                                            var E15_06 = new Array();
                                        };
                                        E15_06.push("3370");
                                    }
                                    else if (obj11 == "3511035") //Mass Pulsating
                                    {
                                        if (typeof E15_06 === 'undefined') {
                                            var E15_06 = new Array();
                                        };
                                        E15_06.push("3370")
                                    }
                                    else if (obj11 == "3511037") //Normal
                                    {
                                        //E15_06.push("-10")
                                    }
                                    else if (obj11 == "3511039") //Not Done
                                    {
                                        //E15_06.push("-10")
                                    }
                                    else if (obj11 == "3511041") //Pain
                                    {
                                        if (typeof E15_06 === 'undefined') {
                                            var E15_06 = new Array();
                                        };
                                        E15_06.push("3360");
                                    }
                                    else if (obj11 == "3511043") //Pregnant
                                    {
                                        if (typeof E15_06 === 'undefined') {
                                            var E15_06 = new Array();
                                        };
                                        E15_06.push("3360")
                                    }
                                    else if (obj11 == "3511045") //Puncture
                                    {
                                        if (typeof E15_06 === 'undefined') {
                                            var E15_06 = new Array();
                                        };
                                        E15_06.push("3365")
                                    }
                                    else if (obj11 == "3511051") //Tenderness
                                    {
                                        if (typeof E15_06 === 'undefined') {
                                            var E15_06 = new Array();
                                        };
                                        E15_06.push("3360")
                                    }
                                    else if (obj11 == "3511053") //Gun
                                    {
                                        if (typeof E15_06 === 'undefined') {
                                            var E15_06 = new Array();
                                        };
                                        E15_06.push("3350");
                                    }
                                    else if (obj11 == "3511055") //Crush
                                    {
                                        if (typeof E15_06 === 'undefined') {
                                            var E15_06 = new Array();
                                        };
                                        E15_06.push("3340");
                                    }
                                    else if (obj11 == "3511057") //Swelling
                                    {
                                        if (typeof E15_06 === 'undefined') {
                                            var E15_06 = new Array();
                                        };
                                        E15_06.push("3370");
                                    }
                                    else if (obj11 == "3511059") //Contussion
                                    {
                                        if (typeof E15_06 === 'undefined') {
                                            var E15_06 = new Array();
                                        };
                                        E15_06.push("3360")
                                    }
                                    else if (obj11 == "3511061") //De
                                    {
                                        if (typeof E15_06 === 'undefined') {
                                            var E15_06 = new Array();
                                        };
                                        E15_06.push("3360")
                                    }
                                }
                            }
                        }
                    }
                };
                if (typeof objA["SpineGroup"] !== 'undefined') //Spine
                {
                    for (var dd = 0; dd < objA["SpineGroup"].length; dd++) {
                        if (typeof objA["SpineGroup"][dd]["eExam.14"] !== 'undefined') //neck
                        {
                            if (objA["SpineGroup"][dd]["eExam.14"].IsNull == false) //neck
                            {
                                for (var d = 0; d < objA["SpineGroup"][dd]["eExam.14"].vSet.length; d++) {
                                    var obj14 = objA["SpineGroup"][dd]["eExam.14"].vSet[d].val;
                                    if (obj14 == "3514001") //Abrassion
                                    {
                                        if (typeof E15_07 === 'undefined') {
                                            var E15_07 = new Array();
                                        };
                                        E15_07.push("3370");
                                    }
                                    else if (obj14 == "3514003") //Avulsion
                                    {
                                        if (typeof E15_07 === 'undefined') {
                                            var E15_07 = new Array();
                                        };
                                        E15_07.push("3355");
                                    }
                                    else if (obj14 == "3514005") //Bleeding
                                    {
                                        if (typeof E15_07 === 'undefined') {
                                            var E15_07 = new Array();
                                        };

                                        E15_07.push("3325");
                                    }
                                    else if (obj14 == "3514007") //Bleeding
                                    {
                                        if (typeof E15_07 === 'undefined') {
                                            var E15_07 = new Array();
                                        };

                                        E15_07.push("3330");
                                    }
                                    else if (obj14 == "3514009") //Burn
                                    {
                                        if (typeof E15_07 === 'undefined') {
                                            var E15_07 = new Array();
                                        };

                                        E15_07.push("3335");
                                    }
                                    else if (obj14 == "3514011") //Burn
                                    {
                                        if (typeof E15_07 === 'undefined') {
                                            var E15_07 = new Array();
                                        };

                                        E15_07.push("3335");
                                    }
                                    else if (obj14 == "3514013") //Burn
                                    {
                                        if (typeof E15_07 === 'undefined') {
                                            var E15_07 = new Array();
                                        };
                                        E15_07.push("3335");
                                    }
                                    else if (obj14 == "3514015") //Burn
                                    {
                                        if (typeof E15_07 === 'undefined') {
                                            var E15_07 = new Array();
                                        };

                                        E15_07.push("3335");
                                    }
                                    else if (obj14 == "3514017") //Deform
                                    {
                                        if (typeof E15_07 === 'undefined') {
                                            var E15_07 = new Array();
                                        };

                                        E15_07.push("3370");
                                    }
                                    else if (obj14 == "3514019") //Foreign
                                    {
                                        if (typeof E15_07 === 'undefined') {
                                            var E15_07 = new Array();
                                        };

                                        E15_07.push("3365");
                                    }
                                    else if (obj14 == "3514025") //Laceration
                                    {
                                        if (typeof E15_07 === 'undefined') {
                                            var E15_07 = new Array();
                                        };

                                        E15_07.push("3355");
                                    }
                                    else if (obj14 == "3514027") //Normal
                                    {
                                        // E15_07.push("-10")
                                    }
                                    else if (obj14 == "3514029") //Not Done
                                    {
                                        //E15_07.push("-10")
                                    }
                                    else if (obj14 == "3514031") //Pain
                                    {
                                        if (typeof E15_07 === 'undefined') {
                                            var E15_07 = new Array();
                                        };
                                        E15_07.push("3360");
                                    }
                                    else if (obj14 == "3514033") //Pain
                                    {
                                        if (typeof E15_07 === 'undefined') {
                                            var E15_07 = new Array();
                                        };

                                        E15_07.push("3360");
                                    }
                                    else if (obj14 == "3514035") //Puncture
                                    {
                                        if (typeof E15_07 === 'undefined') {
                                            var E15_07 = new Array();
                                        };
                                        E15_07.push("3365")
                                    }
                                    else if (obj14 == "3514041") //Tenderneess
                                    {
                                        if (typeof E15_07 === 'undefined') {
                                            var E15_07 = new Array();
                                        };

                                        E15_07.push("3360")
                                    }
                                    else if (obj14 == "3514043") //Tenderness
                                    {
                                        if (typeof E15_07 === 'undefined') {
                                            var E15_07 = new Array();
                                        };

                                        E15_07.push("3360")
                                    }
                                    else if (obj14 == "3514045") //Tenderness
                                    {
                                        if (typeof E15_07 === 'undefined') {
                                            var E15_07 = new Array();
                                        };

                                        E15_07.push("3360")
                                    }
                                    else if (obj14 == "3514047") //Gun
                                    {
                                        if (typeof E15_07 === 'undefined') {
                                            var E15_07 = new Array();
                                        };

                                        E15_07.push("3350");
                                    }
                                    else if (obj14 == "3514049") //Pregnant
                                    {
                                        if (typeof E15_07 === 'undefined') {
                                            var E15_07 = new Array();
                                        };

                                        E15_07.push("3340")
                                    }
                                    else if (obj14 == "3514051") //Swelling
                                    {
                                        if (typeof E15_07 === 'undefined') {
                                            var E15_07 = new Array();
                                        };

                                        E15_07.push("3370")
                                    }
                                    else if (obj14 == "3514053") //Contussion 
                                    {
                                        if (typeof E15_07 === 'undefined') {
                                            var E15_07 = new Array();
                                        };

                                        E15_07.push("3370")
                                    }
                                    else if (obj14 == "3514055") //Tenderness
                                    {
                                        if (typeof E15_07 === 'undefined') {
                                            var E15_07 = new Array();
                                        };

                                        E15_07.push("3360")
                                    }
                                }
                            }
                        }
                    }
                };


                var Upper = ["3515007", "35150011", "3515015", "3515019", "3515023", "3515027", "3515039", "3515043", "3515047", "3515067", "3515071", "3515095", "3515005", "3515009", "3515013", "3515017", "3515021", "3515025", "3515037", "3515041", "3515045", "3515065", "3515069", "3515093"];
                var Lower = ["3515003", "3515031", "3515035", "3515051", "3515055", "3515059", "3515063", "3515075", "3515077", "3515079", "3515083", "3515087", "3515091", "3515001", "3515029", "3515033", "3515049", "3515053", "3515057", "3515061", "3515073", "3515075", "35150777", "3515081", "3515057", "3515089"];



                if (typeof objA["ExtremityGroup"] !== 'undefined') //Upper Extremities
                {
                    for (var dd = 0; dd < objA["ExtremityGroup"].length; dd++) {
                        if (typeof objA["ExtremityGroup"][dd]["eExam.15"] !== 'undefined') //Upper
                        {
                            if (objA["ExtremityGroup"][dd]["eExam.15"].IsNull == false) //Upper
                            {
                                if (Upper.indexOf(objA["ExtremityGroup"][dd]["eExam.15"].vSet[0].val) !== -1) //ExtremitiesUpper
                                {
                                    if (typeof objA["ExtremityGroup"][dd]["eExam.16"] !== 'undefined') //Upper
                                    {

                                        for (var d = 0; d < objA["ExtremityGroup"][dd]["eExam.16"].vSet.length; d++) {
                                            var obj16 = objA["ExtremityGroup"][dd]["eExam.16"].vSet[d].val;
                                            if (obj16 == "3516001") //Abrassion
                                            {
                                                if (typeof E15_08 === 'undefined') {
                                                    var E15_08 = new Array();
                                                };
                                                E15_08.push("3370");
                                            }
                                            else if (obj16 == "3516003") //Avulsion
                                            {
                                                if (typeof E15_08 === 'undefined') {
                                                    var E15_08 = new Array();
                                                };

                                                E15_08.push("3355");
                                            }
                                            else if (obj16 == "3516005") //Amp
                                            {
                                                if (typeof E15_08 === 'undefined') {
                                                    var E15_08 = new Array();
                                                };

                                                E15_08.push("3320")
                                            }
                                            else if (obj16 == "3516007") //Avulstion
                                            {
                                                if (typeof E15_08 === 'undefined') {
                                                    var E15_08 = new Array();
                                                };

                                                E15_08.push("3370")
                                            }
                                            else if (obj16 == "3516009") //Bleeding
                                            {
                                                if (typeof E15_08 === 'undefined') {
                                                    var E15_08 = new Array();
                                                };

                                                E15_08.push("3325");
                                            }
                                            else if (obj16 == "3516011") //Bleeding
                                            {
                                                if (typeof E15_08 === 'undefined') {
                                                    var E15_08 = new Array();
                                                };

                                                E15_08.push("3330");
                                            }
                                            else if (obj16 == "3516013") //Burn
                                            {
                                                if (typeof E15_08 === 'undefined') {
                                                    var E15_08 = new Array();
                                                };

                                                E15_08.push("3335");
                                            }
                                            else if (obj16 == "3516015") //Burn
                                            {
                                                if (typeof E15_08 === 'undefined') {
                                                    var E15_08 = new Array();
                                                };
                                                E15_08.push("3335");
                                            }
                                            else if (obj16 == "3516017") //Burn
                                            {
                                                if (typeof E15_08 === 'undefined') {
                                                    var E15_08 = new Array();
                                                };

                                                E15_08.push("3335");
                                            }
                                            else if (obj16 == "3516019") //Burn
                                            {
                                                if (typeof E15_08 === 'undefined') {
                                                    var E15_08 = new Array();
                                                };

                                                E15_08.push("3335");
                                            }
                                            else if (obj16 == "3516021") //Clubbing
                                            {
                                                if (typeof E15_08 === 'undefined') {
                                                    var E15_08 = new Array();
                                                };

                                                E15_08.push("3370")
                                            }
                                            else if (obj16 == "3516025") //Crush
                                            {
                                                if (typeof E15_08 === 'undefined') {
                                                    var E15_08 = new Array();
                                                };

                                                E15_08.push("3340");
                                            }
                                            else if (obj16 == "3516025") //Deform
                                            {
                                                if (typeof E15_08 === 'undefined') {
                                                    var E15_08 = new Array();
                                                };

                                                E15_08.push("3370");
                                            }
                                            else if (obj16 == "3516027") //Disloc
                                            {
                                                if (typeof E15_08 === 'undefined') {
                                                    var E15_08 = new Array();
                                                };

                                                E15_08.push("3345")
                                            }
                                            else if (obj16 == "3516029") //Edma
                                            {
                                                if (typeof E15_08 === 'undefined') {
                                                    var E15_08 = new Array();
                                                };

                                                E15_08.push("3370")
                                            }
                                            else if (obj16 == "3516031") //Foriegn Body
                                            {
                                                if (typeof E15_08 === 'undefined') {
                                                    var E15_08 = new Array();
                                                };

                                                E15_08.push("3365");
                                            }
                                            else if (obj16 == "3516033") //Fracture
                                            {
                                                if (typeof E15_08 === 'undefined') {
                                                    var E15_08 = new Array();
                                                };

                                                E15_08.push("3345")
                                            }
                                            else if (obj16 == "3516035") //Fracture
                                            {
                                                if (typeof E15_08 === 'undefined') {
                                                    var E15_08 = new Array();
                                                };

                                                E15_08.push("3345")
                                            }
                                            else if (obj16 == "3516041") //Laceration
                                            {
                                                if (typeof E15_08 === 'undefined') {
                                                    var E15_08 = new Array();
                                                };

                                                E15_08.push("3355");
                                            }
                                            else if (obj16 == "3516043") //Motor Function-Abnormal/Weakness
                                            {
                                                if (typeof E15_08 === 'undefined') {
                                                    var E15_08 = new Array();
                                                };

                                                E15_08.push("3360")
                                            }
                                            else if (obj16 == "3516045") //Motor Function
                                            {
                                                if (typeof E15_08 === 'undefined') {
                                                    var E15_08 = new Array();
                                                };

                                                E15_08.push("3360")
                                            }
                                            else if (obj16 == "3516047") //Motor Function
                                            {
                                                if (typeof E15_08 === 'undefined') {
                                                    var E15_08 = new Array();
                                                };

                                                E15_08.push("3360")
                                            }
                                            else if (obj16 == "3516049") //Normal
                                            {
                                                //E15_08.push("-10")
                                            }
                                            else if (obj16 == "3516051") //Not Done
                                            {
                                                //E15_08.push("-10")
                                            }
                                            else if (obj16 == "3516053") //Pain
                                            {
                                                if (typeof E15_08 === 'undefined') {
                                                    var E15_08 = new Array();
                                                };

                                                E15_08.push("3360");
                                            }
                                            else if (obj16 == "3516055") //Pulse
                                            {
                                                if (typeof E15_08 === 'undefined') {
                                                    var E15_08 = new Array();
                                                };

                                                E15_08.push("3360")
                                            }
                                            else if (obj16 == "3516057") //Pulse
                                            {
                                                if (typeof E15_08 === 'undefined') {
                                                    var E15_08 = new Array();
                                                };

                                                E15_08.push("3360")
                                            }
                                            else if (obj16 == "3516059") //Pulse
                                            {
                                                if (typeof E15_08 === 'undefined') {
                                                    var E15_08 = new Array();
                                                };

                                                E15_08.push("3360")
                                            }
                                            else if (obj16 == "3516061") //Pulse
                                            {
                                                if (typeof E15_08 === 'undefined') {
                                                    var E15_08 = new Array();
                                                };

                                                E15_08.push("3360")
                                            }
                                            else if (obj16 == "3516063") //Puncture
                                            {
                                                if (typeof E15_08 === 'undefined') {
                                                    var E15_08 = new Array();
                                                };

                                                E15_08.push("3365")
                                            }
                                            else if (obj16 == "3516065") //Sensation
                                            {
                                                if (typeof E15_08 === 'undefined') {
                                                    var E15_08 = new Array();
                                                };

                                                E15_08.push("3360")
                                            }
                                            else if (obj16 == "3516067") //Sensation
                                            {
                                                if (typeof E15_08 === 'undefined') {
                                                    var E15_08 = new Array();
                                                };

                                                E15_08.push("3360")
                                            }
                                            else if (obj16 == "3516069") //Sensation
                                            {
                                                if (typeof E15_08 === 'undefined') {
                                                    var E15_08 = new Array();
                                                };

                                                E15_08.push("-10")
                                            }
                                            else if (obj16 == "3516075") //Tenderness
                                            {
                                                if (typeof E15_08 === 'undefined') {
                                                    var E15_08 = new Array();
                                                };

                                                E15_08.push("3360")
                                            }
                                            else if (obj16 == "3516077") //Gun
                                            {
                                                if (typeof E15_08 === 'undefined') {
                                                    var E15_08 = new Array();
                                                };

                                                E15_08.push("3350");
                                            }
                                            else if (obj16 == "3516079") //Swelling
                                            {
                                                if (typeof E15_08 === 'undefined') {
                                                    var E15_08 = new Array();
                                                };

                                                E15_08.push("3360")
                                            }
                                            else if (obj16 == "3516079") //Contusion
                                            {
                                                if (typeof E15_08 === 'undefined') {
                                                    var E15_08 = new Array();
                                                };

                                                E15_08.push("3360")
                                            }
                                        }

                                    }
                                }
                            }
                        }
                    }
                };
                if (typeof objA["eExam.12"] !== 'undefined') //Pelvis
                {
                    if (objA["eExam.12"].IsNull == false) //Pelvis
                    {
                        for (var d = 0; d < objA["eExam.12"].vSet.length; d++) {
                            var obj12 = objA["eExam.12"].vSet[d].val;
                            if (obj12 == "3512001") //Abrassion
                            {
                                if (typeof E15_09 === 'undefined') {
                                    var E15_09 = new Array();
                                };
                                E15_09.push("3360");
                            };
                            if (obj12 == "3512003") //Avulsion
                            {
                                if (typeof E15_09 === 'undefined') {
                                    var E15_09 = new Array();
                                };

                                E15_09.push("3355");
                            };
                            if (obj12 == "3512005") //Bleeding Controlled
                            {
                                if (typeof E15_09 === 'undefined') {
                                    var E15_09 = new Array();
                                };
                                E15_09.push("3325");
                            };
                            if (obj12 == "3512007") //Bleeding Uncontrolled
                            {
                                if (typeof E15_09 === 'undefined') {
                                    var E15_09 = new Array();
                                };

                                E15_09.push("3330");
                            };

                            if (obj12 == "3512009") //Bleeding-Rectal
                            {
                                if (typeof E15_09 === 'undefined') {
                                    var E15_09 = new Array();
                                };

                                E15_09.push("3325")
                            };
                            if (obj12 == "3512011") //Bleeding-Urethral
                            {
                                if (typeof E15_09 === 'undefined') {
                                    var E15_09 = new Array();
                                };

                                E15_09.push("3325")
                            };

                            if (obj12 == "3512013") //Bleeding-Vaginal
                            {
                                if (typeof E15_09 === 'undefined') {
                                    var E15_09 = new Array();
                                };

                                E15_09.push("3325")
                            };

                            if (obj12 == "3512015") //Bleeding-Vaginal
                            {
                                if (typeof E15_09 === 'undefined') {
                                    var E15_09 = new Array();
                                };

                                E15_09.push("3330")
                            };

                            if (obj12 == "3512017") //Burn-Charring
                            {
                                if (typeof E15_09 === 'undefined') {
                                    var E15_09 = new Array();
                                };

                                E15_09.push("3335");
                            };

                            if (obj12 == "3512019") //Burn-Redness
                            {
                                if (typeof E15_09 === 'undefined') {
                                    var E15_09 = new Array();
                                };

                                E15_09.push("3335");
                            };

                            if (obj12 == "3512021") //Burn-Waxy
                            {
                                if (typeof E15_09 === 'undefined') {
                                    var E15_09 = new Array();
                                };

                                E15_09.push("3335")
                            };
                            if (obj12 == "3512023") //Burn-Waxy
                            {
                                if (typeof E15_09 === 'undefined') {
                                    var E15_09 = new Array();
                                };

                                E15_09.push("3370");
                            };

                            if (obj12 == "3512025") //Foreign Body
                            {
                                if (typeof E15_09 === 'undefined') {
                                    var E15_09 = new Array();
                                };

                                E15_09.push("3365");

                            };

                            if (obj12 == "3512027") //Genital Injury
                            {
                                if (typeof E15_09 === 'undefined') {
                                    var E15_09 = new Array();
                                };

                                E15_09.push("3370")
                            };
                            if (obj12 == "3512033") //Laceration
                            {
                                if (typeof E15_09 === 'undefined') {
                                    var E15_09 = new Array();
                                };

                                E15_09.push("3355");

                            };

                            if (obj12 == "3512035") //Mass/Lesion
                            {
                                if (typeof E15_09 === 'undefined') {
                                    var E15_09 = new Array();
                                };

                                E15_09.push("3370");
                            };

                            if (obj12 == "3512037") //Normal
                            {
                                //E15_09.push("-20")
                            };

                            if (obj12 == "3512039") //Not Done
                            {
                                //E15_09.push("-20")
                            };

                            if (obj12 == "3512041") //Pain
                            {
                                if (typeof E15_09 === 'undefined') {
                                    var E15_09 = new Array();
                                };

                                E15_09.push("3360");
                            };
                            if (obj12 == "3512043") //Pelvic Fracture
                            {
                                if (typeof E15_09 === 'undefined') {
                                    var E15_09 = new Array();
                                };

                                E15_09.push("3345")
                            };

                            if (obj12 == "3512045") //Pelvic Fracture
                            {
                                if (typeof E15_09 === 'undefined') {
                                    var E15_09 = new Array();
                                };

                                E15_09.push("3345")
                            };

                            if (obj12 == "3512047") //Pelvic Fracture
                            {
                                if (typeof E15_09 === 'undefined') {
                                    var E15_09 = new Array();
                                };

                                E15_09.push("3370")
                            };

                            if (obj12 == "3512047") //Priapism
                            {
                                if (typeof E15_09 === 'undefined') {
                                    var E15_09 = new Array();
                                };

                                E15_09.push("3360")
                            };

                            if (obj12 == "3512051") //Puncture/Stab Wound
                            {
                                if (typeof E15_09 === 'undefined') {
                                    var E15_09 = new Array();
                                };

                                E15_09.push("3365");
                            };

                            if (obj12 == "3512057") //Tenderness
                            {
                                if (typeof E15_09 === 'undefined') {
                                    var E15_09 = new Array();
                                };

                                E15_09.push("3360")
                            };

                            if (obj12 == "3512059") //Gunshot Wound
                            {
                                if (typeof E15_09 === 'undefined') {
                                    var E15_09 = new Array();
                                };

                                E15_09.push("3350")
                            };

                            if (obj12 == "3512061") //Crush Injury
                            {
                                if (typeof E15_09 === 'undefined') {
                                    var E15_09 = new Array();
                                };

                                E15_09.push("3340");
                            };

                            if (obj12 == "3512063") //Swelling
                            {
                                if (typeof E15_09 === 'undefined') {
                                    var E15_09 = new Array();
                                };

                                E15_09.push("3370");
                            };

                            if (obj12 == "3512065") //Contusion
                            {
                                if (typeof E15_09 === 'undefined') {
                                    var E15_09 = new Array();
                                };

                                E15_09.push("3370")
                            }
                        }
                    }
                };
                if (typeof objA["ExtremityGroup"] !== 'undefined') {
                    for (var dd = 0; dd < objA["ExtremityGroup"].length; dd++) {
                        if (typeof objA["ExtremityGroup"][dd]["eExam.15"] !== 'undefined') {
                            if (objA["ExtremityGroup"][dd]["eExam.15"].IsNull == false) {
                                if (Lower.indexOf(objA["ExtremityGroup"][dd]["eExam.15"].vSet[0].val) !== -1) //Lower
                                {
                                    if (typeof objA["ExtremityGroup"][dd]["eExam.16"] !== 'undefined') //neck
                                    {
                                        for (var d = 0; d < objA["ExtremityGroup"][dd]["eExam.16"].vSet.length; d++) {
                                            var obj10 = objA["ExtremityGroup"][dd]["eExam.16"].vSet[d].val;
                                            if (obj10 == "3512001") //Abrassion
                                            {
                                                if (typeof E15_10 === 'undefined') {
                                                    var E15_10 = new Array();
                                                };
                                                E15_10.push("3360");
                                            };
                                            if (obj10 == "3512003") //Avulsion
                                            {
                                                if (typeof E15_10 === 'undefined') {
                                                    var E15_10 = new Array();
                                                };
                                                E15_10.push("3355");
                                            };
                                            if (obj10 == "3512005") //Bleeding Controlled
                                            {
                                                if (typeof E15_10 === 'undefined') {
                                                    var E15_10 = new Array();
                                                };

                                                E15_10.push("3325")
                                            };
                                            if (obj10 == "3512007") //Bleeding Uncontrolled
                                            {
                                                if (typeof E15_10 === 'undefined') {
                                                    var E15_10 = new Array();
                                                };

                                                E15_10.push("3330");
                                            };

                                            if (obj10 == "3512009") //Bleeding-Rectal
                                            {
                                                if (typeof E15_10 === 'undefined') {
                                                    var E15_10 = new Array();
                                                };

                                                E15_10.push("3325")
                                            };
                                            if (obj10 == "3512011") //Bleeding-Urethral
                                            {
                                                if (typeof E15_10 === 'undefined') {
                                                    var E15_10 = new Array();
                                                };

                                                E15_10.push("3325")
                                            };

                                            if (obj10 == "3512013") //Bleeding-Vaginal
                                            {
                                                if (typeof E15_10 === 'undefined') {
                                                    var E15_10 = new Array();
                                                };

                                                E15_10.push("3325")
                                            };

                                            if (obj10 == "3512015") //Bleeding-Vaginal
                                            {
                                                if (typeof E15_10 === 'undefined') {
                                                    var E15_10 = new Array();
                                                };

                                                E15_10.push("3335")
                                            };

                                            if (obj10 == "3512017") //Burn-Charring
                                            {
                                                if (typeof E15_10 === 'undefined') {
                                                    var E15_10 = new Array();
                                                };

                                                E15_10.push("3335");
                                            };

                                            if (obj10 == "3512019") //Burn-Redness
                                            {
                                                if (typeof E15_10 === 'undefined') {
                                                    var E15_10 = new Array();
                                                };

                                                E15_10.push("3335");
                                            };

                                            if (obj10 == "3512021") //Burn-Waxy
                                            {
                                                if (typeof E15_10 === 'undefined') {
                                                    var E15_10 = new Array();
                                                };

                                                E15_10.push("3335");
                                            };
                                            if (obj10 == "3512023") //Burn-Waxy
                                            {
                                                if (typeof E15_10 === 'undefined') {
                                                    var E15_10 = new Array();
                                                };

                                                E15_10.push("3370");
                                            };

                                            if (obj10 == "3512025") //Foreign Body
                                            {
                                                if (typeof E15_10 === 'undefined') {
                                                    var E15_10 = new Array();
                                                };

                                                E15_10.push("3365");
                                            };

                                            if (obj10 == "3512027") //Genital Injury
                                            {
                                                if (typeof E15_10 === 'undefined') {
                                                    var E15_10 = new Array();
                                                };

                                                E15_10.push("3370")
                                            };
                                            if (obj10 == "3512033") //Laceration
                                            {
                                                if (typeof E15_10 === 'undefined') {
                                                    var E15_10 = new Array();
                                                };

                                                E15_10.push("3355");
                                            };

                                            if (obj10 == "3512035") //Mass/Lesion
                                            {
                                                if (typeof E15_10 === 'undefined') {
                                                    var E15_10 = new Array();
                                                };

                                                E15_10.push("3370");
                                            };

                                            if (obj10 == "3512037") //Normal
                                            {
                                                if (typeof E15_10 === 'undefined') {
                                                    var E15_10 = new Array();
                                                };

                                                //E15_10.push("-20")
                                            };

                                            if (obj10 == "3512039") //Not Done
                                            {
                                                //E15_10.push("-20")
                                            };

                                            if (obj10 == "3512041") //Pain
                                            {
                                                if (typeof E15_10 === 'undefined') {
                                                    var E15_10 = new Array();
                                                };

                                                E15_10.push("3360");
                                            };
                                            if (obj10 == "3512043") //Pelvic Fracture
                                            {
                                                if (typeof E15_10 === 'undefined') {
                                                    var E15_10 = new Array();
                                                };

                                                E15_10.push("3345")
                                            };

                                            if (obj10 == "3512045") //Pelvic Fracture
                                            {
                                                if (typeof E15_10 === 'undefined') {
                                                    var E15_10 = new Array();
                                                };

                                                E15_10.push("3345")
                                            };

                                            if (obj10 == "3512047") //Pelvic Fracture
                                            {
                                                if (typeof E15_10 === 'undefined') {
                                                    var E15_10 = new Array();
                                                };

                                                E15_10.push("3345")
                                            };

                                            if (obj10 == "3512047") //Pregnant-Crowning
                                            {
                                                if (typeof E15_10 === 'undefined') {
                                                    var E15_10 = new Array();
                                                };

                                                E15_10.push("3360")
                                            };

                                            if (obj10 == "3512051") //Puncture/Stab Wound
                                            {
                                                if (typeof E15_10 === 'undefined') {
                                                    var E15_10 = new Array();
                                                };

                                                E15_10.push("3365");
                                            };

                                            if (obj10 == "3512057") //Tenderness
                                            {
                                                if (typeof E15_10 === 'undefined') {
                                                    var E15_10 = new Array();
                                                };

                                                E15_10.push("3360")
                                            };

                                            if (obj10 == "3512059") //Gunshot Wound
                                            {
                                                if (typeof E15_10 === 'undefined') {
                                                    var E15_10 = new Array();
                                                };

                                                E15_10.push("3350")
                                            };

                                            if (obj10 == "3512061") //Crush Injury
                                            {
                                                if (typeof E15_10 === 'undefined') {
                                                    var E15_10 = new Array();
                                                };
                                                E15_10.push("3340");
                                            };

                                            if (obj10 == "3512063") //Swelling
                                            {
                                                if (typeof E15_10 === 'undefined') {
                                                    var E15_10 = new Array();
                                                };

                                                E15_10.push("3370");
                                            };

                                            if (obj10 == "3512065") //Contusion
                                            {
                                                if (typeof E15_10 === 'undefined') {
                                                    var E15_10 = new Array();
                                                };

                                                E15_10.push("3370")
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                };

                if (typeof objA["EyeGroup"] !== 'undefined') {
                    for (var dd = 0; dd < objA["EyeGroup"].length; dd++) {
                        if (typeof objA["EyeGroup"][dd]["eExam.18"] !== 'undefined') {
                            if (objA["EyeGroup"][dd]["eExam.18"].IsNull == false) {
                                for (var d = 0; d < objA["EyeGroup"][dd]["eExam.18"].vSet.length; d++) {
                                    var obj18 = objA["EyeGroup"][dd]["eExam.18"].vSet[d].val;
                                    if (obj18 == "3518055") //	Swelling
                                    {
                                        if (typeof E15_11 === 'undefined') {
                                            var E15_11 = new Array();
                                        };

                                        E15_11.push("3370");

                                    }
                                    if (obj18 == "3518057") //	Contusion
                                    {
                                        if (typeof E15_11 === 'undefined') {
                                            var E15_11 = new Array();
                                        };

                                        E15_11.push("3360");
                                    }
                                    if (obj18 == "3518059") //	Stab
                                    {
                                        if (typeof E15_11 === 'undefined') {
                                            var E15_11 = new Array();
                                        };

                                        E15_11.push("3365");
                                    }
                                }
                            }
                        }
                    }
                }
            };
            if (typeof E15_01 !== 'undefined')
            {
                if (typeof E15_02 !== 'undefined') {
                    if (typeof E15 === 'undefined') {
                        var E15 = new Object();
                    };
                    E15.E15_01 = E15_02.
(onlyUnique);
                    E15.E15_02 = E15_02.filter(onlyUnique);
                };

                if (typeof E15_03 !== 'undefined') {
                    if (typeof E15 === 'undefined') {
                        var E15 = new Object();
                    };
                    E15.E15_01 = E15_03.filter(onlyUnique);
                    E15.E15_03 = E15_03.filter(onlyUnique);
                };

                if (typeof E15_04 !== 'undefined') {
                    if (typeof E15 === 'undefined') {
                        var E15 = new Object();
                    };
                    E15.E15_01 = E15_04.filter(onlyUnique);
                    E15.E15_04 = E15_04.filter(onlyUnique);
                };


                if (typeof E15_05 !== 'undefined') {
                    if (typeof E15 === 'undefined') {
                        var E15 = new Object();
                    };
                    E15.E15_01 = E15_05.filter(onlyUnique);
                    E15.E15_05 = E15_05.filter(onlyUnique);
                };

                if (typeof E15_06 !== 'undefined') {
                    if (typeof E15 === 'undefined') {
                        var E15 = new Object();
                    };
                    E15.E15_01 = E15_06.filter(onlyUnique);
                    E15.E15_06 = E15_06.filter(onlyUnique);
                };

                if (typeof E15_07 !== 'undefined') {
                    if (typeof E15 === 'undefined') {
                        var E15 = new Object();
                    };
                    E15.E15_01 = E15_07.filter(onlyUnique);
                    E15.E15_07 = E15_07.filter(onlyUnique);
                };

                if (typeof E15_08 !== 'undefined') {
                    if (typeof E15 === 'undefined') {
                        var E15 = new Object();
                    };
                    E15.E15_01 = E15_08.filter(onlyUnique);
                    E15.E15_08 = E15_08.filter(onlyUnique);
                };


                if (typeof E15_09 !== 'undefined') {
                    if (typeof E15 === 'undefined') {
                        var E15 = new Object();
                    };
                    E15.E15_01 = E15_09.filter(onlyUnique);
                    E15.E15_09 = E15_09.filter(onlyUnique);
                };


                if (typeof E15_10 !== 'undefined') {
                    if (typeof E15 === 'undefined') {
                        var E15 = new Object();
                    };
                    E15.E15_01 = E15_10.filter(onlyUnique);
                    E15.E15_10 = E15_10.filter(onlyUnique);
                };

                if (typeof E15_11 !== 'undefined') {
                    if (typeof E15 === 'undefined') {
                        var E15 = new Object();
                    };
                    E15.E15_01 = E15_11.filter(onlyUnique);
                    E15.E15_11 = E15_11.filter(onlyUnique);
                }
            }
            else
            {
                if (typeof E15 === 'undefined') {
                    var E15 = new Object();
                };
                E15.E15_01 = "-20";
            }
        }
    };
    */
    //Burn 
    if ((typeof TheCall.eRecord !== 'undefined') && (typeof TheCall.eRecord["eRecord.01"] !== 'undefined')) {
        if (TheCall.eRecord["eRecord.01"].vSet[0].val == '569874123') {
            var e3 = new Array();
            var e8 = new Array();
            if (typeof E15 !== 'undefined') {
                E15 = undefined;
                var E15 = new Object();
            }
            else {
                var E15 = new Object();
            };

            e3.push('3335')
            e8.push('-25')
            E15.E15_01 = e3;
            E15.E15_02 = e3;
            E15.E15_03 = e3;
            E15.E15_04 = e3;
            E15.E15_05 = e8;
            E15.E15_06 = e3;
            E15.E15_07 = e3;
            E15.E15_08 = e3;
            E15.E15_09 = e3;
            E15.E15_10 = e3;
            E15.E15_11 = e3;
        };

        //Fall
        if (TheCall.eRecord["eRecord.01"].vSet[0].val == 'D3308F5D-C57A-41E3-87D6-40784F77CDD1') {
            var e3 = new Array();
            var e8 = new Array();
            if (typeof E15 !== 'undefined') {
                E15 = undefined;
                var E15 = new Object();
            }
            else {
                var E15 = new Object();
            };

            e3.push('3360')
            e8.push('3345')
            E15.E15_07 = e3;
            E15.E15_08 = e8;
        };

        if (TheCall.eRecord["eRecord.01"].vSet[0].val == '20071565475') {
            var e3 = new Array();
            var e8 = new Array();
            if (typeof E15 !== 'undefined') {
                E15 = undefined;
                var E15 = new Object();
            }
            else {
                var E15 = new Object();
            };

            e3.push('3360')
            e8.push('3345')
            E15.E15_07 = e3;
            E15.E15_08 = e8;
        };

        //GWS
        if (TheCall.eRecord["eRecord.01"].vSet[0].val == '900121245') {
            var e1 = new Array();
            var e5 = new Array();
            if (typeof E15 !== 'undefined') {
                E15 = undefined;
                var E15 = new Object();
            }
            else {
                var E15 = new Object();
            };

            e1.push('3350')
            e5.push('3350')
            E15.E15_01 = e1;
            E15.E15_05 = e5;
        };
        //MVC

        if (TheCall.eRecord["eRecord.01"].vSet[0].val == 'PCR7114356') {
            var e3 = new Array();
            var e8 = new Array();
            if (typeof E15 !== 'undefined') {
                E15 = undefined;
                var E15 = new Object();
            }
            else {
                var E15 = new Object();
            };

            e3.push('3355')
            e8.push('3345')
            E15.E15_02 = e3;
            E15.E15_03 = e3;
            E15.E15_08 = e8;
            E15.E15_10 = e8;
        }
    };

    //Stabbing
    /*if (TheCall.eRecord["eRecord.01"].vSet[0].val == '900121245') {        
        var e3 = new Array();        

        if (typeof E15 !== 'undefined') {
            E15 = undefined;
            var E15 = new Object();
        }
        else {
            var E15 = new Object();
        };

        
        e3.push('3365')        
        E15.E15_01 = e3;
        E15.E15_05 = e3;
    };
    */
    if (typeof E15 === 'undefined') {
        return null
    }
    else {
        return E15;
    }


};
