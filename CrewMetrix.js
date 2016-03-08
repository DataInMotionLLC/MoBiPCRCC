u = require('cloud/Utilities.js');
var moment = require('moment');
exports.setCrewMetrix = function (TheCall) {
    var BO = {};
    if (typeof TheCall === 'undefined') {
        u.RaiseError("Set Crew Modalites", 0, "setCrewModalities", "Set Crew Modalites");
        return null
    };

    if (typeof TheCall.Props === 'undefined') {
        u.RaiseError("Set Crew Modalites", 0, "setCrewModalities", "Missing Call Properties");
        return null
    };

    if (typeof TheCall.PCRID === 'undefined') {
        u.RaiseError("Set Crew Modalites", 0, "setCrewModalities", "Missing Call PCRID");
        return null
    };

    //if (typeof TheCall.Agency !== 'undefined') {
    //    if (typeof TheCall.Agency.AgencyName !== 'undefined') {
    //        var AgencyName = TheCall.Agency.AgencyName;
    //    }
    //};
    
    
    BO = TheCall;
    
    
    if (typeof BO.eProcedures !== 'undefined') {
        var obj = {};
        var obj = BO.eProcedures;
        if (typeof obj.ProcedureGroup !== 'undefined') {
            for (var i = 0; i < obj.ProcedureGroup.length; i++) {
                var obj2 = {};
                obj2 = obj.ProcedureGroup[i];
                if (typeof obj2["eProcedures.01"] !== 'undefined') {
                    if (obj2["eProcedures.01"].IsNull == true) {
                        u.RaiseError("", 0, "v3CodeText", "");
                    }
                    else {
                        if (typeof obj2["eProcedures.01"].vSet !== 'undefined') {
                            var tP = obj2["eProcedures.01"].vSet[0].val;
                        }
                        if (typeof Modality=== 'undefined') {
                            var Modality = new Object();
                        };
                        var m = getDateNumbers(tP)
                        Modality["Type"] = "Procedure";                                              
                        Modality["Date"] = moment(tP).format("MM/DD/YYYY");
                        Modality["CallWeek"] = m.weekNumber;
                        Modality["CallMonth"] = m.monthStart;
                        Modality["CallDayOfWeek"] = m.weekDay;
                        Modality["Year"] = m.YEAR
                        

                        if (typeof obj2["eProcedures.03"] !== 'undefined') {
                            if (typeof obj2["eProcedures.03"].vSet !== 'undefined') {
                                Modality["Action"] = obj2["eProcedures.03"].vSet[0].text;
                                Modality["ActionCode"] = obj2["eProcedures.03"].vSet[0].val;
                            }
                            if (typeof obj2["eProcedures.09"] !== 'undefined') {
                                if (typeof obj2["eProcedures.09"].vSet !== 'undefined') {
                                    Modality["CrewName"] = obj2["eProcedures.09"].vSet[0].text
                                    Modality["CrewID"] = obj2["eProcedures.09"].vSet[0].val
                                }
                            };

                            if (typeof obj2["eProcedures.10"] !== 'undefined') {
                                if (typeof obj2["eProcedures.10"].vSet !== 'undefined') {
                                    Modality["CrewRole"] = obj2["eProcedures.10"].vSet[0].text;
                                }
                            };
                        };                        
                        if (typeof Modality !== 'undefined') {
                            if (typeof Modalities=== 'undefined') {
                                var Modalities = new Array();
                            };
                            Modality.OID = TheCall.PCRObjectID;
                            Modality.Agency = AgencyName;
                            Modalities.push(Modality);
                            Modality = undefined;
                        };
                    }
                }
            }
        }
    };
    if (typeof BO.eMedications !== 'undefined') {
        var obj = BO.eMedications
        if (typeof obj["MedicationGroup"] !== 'undefined') {
            for (var i = 0; i < obj["MedicationGroup"].length; i++) {
                var obj2 = {};
                var obj2 = obj["MedicationGroup"][i];

                if (typeof obj2["eMedications.01"] !== 'undefined') {
                    if (obj2["eMedications.01"].IsNull == false) {
                        if (typeof obj2["eMedications.01"].vSet !== 'undefined') {
                            var tM = obj2["eMedications.01"].vSet[0].val;
                            if (typeof Modality=== 'undefined') {
                                var Modality = new Object();
                            };
                            var m = getDateNumbers(tM)
                            Modality["Date"] = moment(tM).format("HH:mm");
                            Modality["Type"] = "Medication";                            
                            Modality["CallWeek"] = m.weekNo;
                            Modality["CallMonth"] = m.monthStart;
                            Modality["CallDayOfWeek"] = m.weekDay;
                            Modality["Year"] = m.YEAR
                        
                            if (typeof obj2["eMedications.03"] !== 'undefined') {
                                if (typeof obj2["eMedications.03"].vSet !== 'undefined') {
                                    Modality["Action"] = obj2["eMedications.03"].vSet[0].text;
                                }

                                if (typeof obj2["eMedications.04"].vSet !== 'undefined') {
                                    if (typeof obj2["eMedications.04"] !== 'undefined') {
                                        Modality["Route"] = obj2["eMedications.04"].vSet[0].text;
                                    }
                                };

                                if (typeof obj2["eMedications.09"] !== 'undefined') {
                                    if (typeof obj2["eMedications.09"].vSet !== 'undefined') {
                                        Modality["CrewID"] = obj2["eMedications.09"].vSet[0].text;
                                    }
                                };

                                if (typeof obj2["eMedications.10"] !== 'undefined') {
                                    if (typeof obj2["eMedications.10"].vSet !== 'undefined') {
                                        Modality["CrewRole"] = obj2["eMedications.10"].vSet[0].text;
                                    }
                                };
                                if (typeof Modality !== 'undefined') {
                                    if (typeof Modalities=== 'undefined') {
                                        var Modalities = new Array();
                                    };
                                    Modality.OID = TheCall.PCRObjectID;
                                    Modality.Agency = AgencyName;
                                    Modalities.push(Modality)
                                    Modality = undefined;
                                }
                            }
                        }
                    }
                   
                }
            }
        }
    };    
    if (typeof Modalities !== 'undefined') {
            var p = Modalities;
            var list = [];
            var Metrix = Parse.Object.extend("CrewMetrix");
            for (var i = 0; i < p.length; i++) {

                var metrix = new Metrix();
                if (typeof TheCall.CrewMetrixId !== 'undefined') {
                    metrix.set("objectId", TheCall.CrewMetrixId);
                };
                metrix.set("OID", p[i].OID);
                metrix.set("Agency", p[i].AgencyName);
                //metrix.set("Date", p[i].date);
                //metrix.set("CrewID", p[i].CrewID);
                //metrix.set("CrewName", p[i].CrewName);
                //metrix.set("Day", m.weekDay);
                //metrix.set("Month", m.monthStart);
                //metrix.set("Week", m.weekNo);
                //metrix.set("Year", m.Year);
                //metrix.set("Intervention", p[i].Action);
                //metrix.set("InterventionCode", p[i].ActionCode);
                //metrix.set("InterventionType", p[i].Type);                
                //metrix.set("CrewRole", p[i].CrewRole);
                //metrix.set("AdministrationRoute", p[i].Route);


                list.push(metrix)
            };

            return Parse.Object.saveAll(list, {
                success: function (saveList) {
                },
                error: function (error) {
                }
            });
        }

};
function getDateNumbers(d) {
    var monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
    ];
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    // Copy date so don't modify original
    d = new Date();
    var nn = d.getDay()
    d.setHours(0, 0, 0);
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setDate(d.getDate() + 4 - (d.getDay() || 7));
    // Get first day of year
    var yearStart = new Date(d.getFullYear(), 0, 1);
    var m = d.getMonth();
    var md = d.getDay();
    var weekDay = weekday[nn];

    var monthStart = monthNames[m];
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    // Return array of year and week number
    var YEAR = d.getFullYear()
    return [YEAR, weekNo, weekDay, monthStart];
};
