var cv = require('cloud/ConversionUtils.js');
exports.setE16 = function (TheCall) {
    if (typeof TheCall.V3 === 'undefined') {
        var E16 = new Object();
        return E16;
    };

    var TC = TheCall.V3;
    if (typeof TC.eExam === 'undefined') {
        var E16 = new Object();
        E16 = null;
    }
        
    else {
        if (typeof TC.eExam["eExam.01"] !== 'undefined') {
            if (TC.eExam["eExam.01"].IsNull === false) {
                if (typeof E16 === 'undefined') {
                    var E16 = {};
                };
                E16.E16_01 = TC.eExam["eExam.01"].vSet[0].val;
            }
        };

        if (typeof TC.eExam["eExam.02"] !== 'undefined') {

            if (TC.eExam["eExam.02"].IsNull === false) {
                if (typeof E16 === 'undefined') {
                    var E16 = {};
                };
                E16.E16_02 = cv.setV2("eExam.02", TC.eExam["eExam.02"].vSet[0].val);
            }
        };

        if (typeof TC.eExam.AssessmentGroup !== 'undefined') {
            for (var xx = 0; xx < TC.eExam.AssessmentGroup.length; xx++) {
                if (typeof TC.eExam.AssessmentGroup[xx]["eExam.03"] !== 'undefined') {
                    if (TC.eExam.AssessmentGroup[xx]["eExam.03"].IsNull !== true) {
                        if (typeof e16_00_0 === 'undefined') {
                            var e16_00_0 = {};
                        };
                        if (typeof TC.eExam.AssessmentGroup[xx]["eExam.03"] !== 'undefined') {
                            if (TC.eExam.AssessmentGroup[xx]["eExam.03"].vSet !== 'undefined') {
                                if (TC.eExam.AssessmentGroup[xx]["eExam.03"].vSet.length > 0) {
                                    e16_00_0.E16_03 = new Date(TC.eExam.AssessmentGroup[xx]["eExam.03"].vSet[0].val).toISOString();
                                }
                            }
                        }
                    }
                };

                //Skin
                if (typeof TC.eExam.AssessmentGroup[xx]["eExam.04"] !== 'undefined') {
                    if (TC.eExam.AssessmentGroup[xx]["eExam.04"].IsNull === false) {
                        var E16_04 = [];
                        for (var i = 0; i < TC.eExam.AssessmentGroup[xx]["eExam.04"].vSet.length; i++) {
                            E16_04.push(cv.setV2("eExam.04", TC.eExam.AssessmentGroup[xx]["eExam.04"].vSet[i].val));
                        };

                        if (E16_04.length > 0) {
                            if (typeof e16_00_0 === 'undefined') {
                                var e16_00_0 = {};
                            };
                            e16_00_0.E16_04 = E16_04;
                        }
                    }
                };
                //Head

                if ((typeof TC.eExam.AssessmentGroup[xx]["eExam.05"] !== 'undefined') && (TC.eExam.AssessmentGroup[xx]["eExam.05"].IsNull == false)) {
                    var E16_05 = [];
                    for (var i = 0; i < TC.eExam.AssessmentGroup[xx]["eExam.05"].vSet.length; i++) {
                        E16_05.push(cv.setV2("eExam.05", TC.eExam.AssessmentGroup[xx]["eExam.05"].vSet[i].val));
                    };
                }
                else {
                    var E16_05 = [];
                    E16_05.push("-25")
                };
                if (typeof e16_00_0 === 'undefined') {
                    var e16_00_0 = new Object();
                };
                e16_00_0.E16_05 = E16_05;

                //Neck
                if (typeof TC.eExam.AssessmentGroup[xx]["eExam.07"] !== 'undefined') {
                    if (TC.eExam.AssessmentGroup[xx]["eExam.07"].IsNull === false) {
                        var E16_06 = new Array();;
                        for (var i = 0; i < TC.eExam.AssessmentGroup[xx]["eExam.07"].vSet.length; i++) {
                            E16_06.push(cv.setV2("eExam.07", TC.eExam.AssessmentGroup[xx]["eExam.07"].vSet[i].val));
                        }
                        if (E16_06.length > 0) {
                            if (typeof e16_00_0 === 'undefined') {
                                var e16_00_0 = new Object();
                            };
                            e16_00_0.E16_06 = E16_06;
                        }
                    }
                };

                //Chest/Lungs       
                if (typeof TC.eExam.AssessmentGroup[xx]["eExam.08"] !== 'undefined') {
                    if (TC.eExam.AssessmentGroup[xx]["eExam.08"].IsNull === false) {
                        var E16_07 = new Array();
                        for (var i = 0; i < TC.eExam.AssessmentGroup[xx]["eExam.08"].vSet.length; i++) {

                            E16_07.push(cv.setV2("eExam.08", TC.eExam.AssessmentGroup[xx]["eExam.08"].vSet[i].val));
                        };
                        if (E16_07.length > 0) {
                            if (typeof e16_00_0 === 'undefined') {
                                var e16_00_0 = new Object();
                            };
                            e16_00_0.E16_07 = E16_07;
                        }
                    }
                };
                //Heart
                if (typeof TC.eExam.AssessmentGroup[xx]["eExam.09"] !== 'undefined') {
                    if (TC.eExam.AssessmentGroup[xx]["eExam.09"].IsNull === false) {
                        var E16_08 = new Array();
                        for (var i = 0; i < TC.eExam.AssessmentGroup[xx]["eExam.09"].vSet.length; i++) {
                            E16_08.push(cv.setV2("eExam.09", TC.eExam.AssessmentGroup[xx]["eExam.09"].vSet[i].val));
                        };
                        if (E16_08.length > 0) {
                            if (typeof e16_00_0 === 'undefined') {
                                var e16_00_0 = new Object();
                            };
                            e16_00_0.E16_08 = E16_08;
                        }
                    }
                };
                //GU and Abdomen Location
                if (typeof TC.eExam.AssessmentGroup[xx].AbdomenGroup !== 'undefined') {
                    var AbdominalFindingLocation = "";
                    for (var dd = 0; dd < TC.eExam.AssessmentGroup[xx].AbdomenGroup.length; dd++) {
                        if (typeof TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.10"] !== 'undefined') {
                            if (TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.10"].IsNull !== true) {
                                AbdominalFindingLocation = TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.10"].vSet[0].val;


                                if (typeof TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"] !== 'undefined') {

                                    if (TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].IsNull === false) {
                                        var AbdValue = "";

                                        if (AbdominalFindingLocation == "3510001") //Generalized
                                        {
                                            for (var i = 0; i < TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].vSet.length; i++) {
                                                AbdValue = cv.setV2("eExam.11", TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].vSet[i].val, AbdominalFindingLocation);
                                                if (typeof E16_10Array === 'undefined') {
                                                    var E16_10Array = new Array();
                                                };
                                                E16_10Array.push(AbdValue);
                                            }
                                        };

                                        if (AbdominalFindingLocation == "3510003") //Left Lower Quadrant
                                        {
                                            for (var i = 0; i < TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].vSet.length; i++) {
                                                AbdValue = cv.setV2("eExam.11", TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].vSet[i].val, AbdominalFindingLocation);
                                                if (typeof E16_10Array === 'undefined') {
                                                    var E16_10Array = new Array();
                                                };
                                                E16_10Array.push(AbdValue);
                                            }
                                        };

                                        if (AbdominalFindingLocation == "3510005") //Left Upper Quadrant
                                        {
                                            for (var i = 0; i < TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].vSet.length; i++) {

                                                AbdValue = cv.setV2("eExam.11", TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].vSet[i].val, AbdominalFindingLocation);
                                                if (typeof E16_09Array === 'undefined') {
                                                    var E16_09Array = new Array();
                                                };
                                                E16_09Array.push(AbdValue);
                                            }
                                        };

                                        if (AbdominalFindingLocation == "3510007") //Periumbilical
                                        {
                                            for (var i = 0; i < TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].vSet.length; i++) {
                                                AbdValue = cv.setV2("eExam.11", TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].vSet[i].val, AbdominalFindingLocation);
                                                if (typeof E16_13Array === 'undefined') {
                                                    var E16_13Array = new Array();
                                                };
                                                E16_13Array.push(AbdValue);
                                            }
                                        };

                                        if (AbdominalFindingLocation == "3510009") //Right Lower Quadrant
                                        {
                                            for (var i = 0; i < TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].vSet.length; i++) {
                                                AbdValue = cv.setV2("eExam.11", TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].vSet[i].val, AbdominalFindingLocation);
                                                if (typeof E16_12Array === 'undefined') {
                                                    var E16_12Array = new Array();
                                                };
                                                E16_12Array.push(AbdValue);
                                            }
                                        };

                                        if (AbdominalFindingLocation == "3510011") //Right Upper Quadrant
                                        {
                                            for (var i = 0; i < TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].vSet.length; i++) {
                                                AbdValue = cv.setV2("eExam.11", TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].vSet[i].val, AbdominalFindingLocation);
                                                if (typeof E16_11Array === 'undefined') {
                                                    var E16_11Array = new Array();
                                                };
                                                E16_11Array.push(AbdValue);
                                            }
                                        };
                                        if (AbdominalFindingLocation == "3510013") //Epigastric
                                        {
                                            for (var i = 0; i < TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].vSet.length; i++) {
                                                AbdValue = cv.setV2("eExam.11", TC.eExam.AssessmentGroup[xx].AbdomenGroup[dd]["eExam.11"].vSet[i].val, AbdominalFindingLocation);
                                                if (typeof E16_13Array === 'undefined') {
                                                    var E16_13Array = new Array();
                                                };
                                                E16_13Array.push(AbdValue);
                                            }
                                        };
                                    }
                                }
                            }
                        }
                    };

                    ///////////////////////////////////
                    if (typeof E16_09Array !== 'undefined') {
                        if (E16_09Array.length > 0) {
                            if (typeof e16_00_0 !== 'undefined') {
                                e16_00_0.E16_09 = E16_09Array;
                            }
                        }
                    };

                    if (typeof E16_10Array !== 'undefined') {
                        if (E16_10Array.length > 0) {
                            if (typeof e16_00_0 !== 'undefined') {
                                e16_00_0.E16_10 = E16_10Array;
                            }
                        }
                    };

                    if (typeof E16_11Array !== 'undefined') {
                        if (E16_11Array.length > 0) {
                            if (typeof e16_00_0 !== 'undefined') {
                                e16_00_0.E16_11 = E16_11Array;
                            }
                        }
                    };

                    if (typeof E16_12Array !== 'undefined') {
                        if (E16_12Array.length > 0) {
                            if (typeof e16_00_0 !== 'undefined') {
                                e16_00_0.E16_12 = E16_12Array;
                            }
                        }
                    };
                    /*
                    if (typeof E16_13Array !== 'undefined')
                    {
                        if (E16_13Array.length > 0) {
                            if (typeof e16_00_0 !== 'undefined') {
                                e16_00_0.E16_13 = E16_13Array;
                            }
                        }
                    };
                    */
                };//Abdomen Group


                //GU

                if (typeof TC.eExam.AssessmentGroup[xx]["eExam.12"] !== 'undefined') {
                    if (TC.eExam.AssessmentGroup[xx]["eExam.12"].IsNull === false) {
                        if (typeof E1612Array === 'undefined') {
                            var E1612Array = new Array();
                        };
                        for (var i = 0; i < TC.eExam.AssessmentGroup[xx]["eExam.12"].vSet.length; i++) {
                            E1612Array.push(cv.setV2("eExam.12", TC.eExam.AssessmentGroup[xx]["eExam.12"].vSet[i].val));
                        }
                    };
                    if (typeof E1612Array !== 'undefined') {
                        if (E1612Array.length > 0) {
                            if (typeof e16_00_0 === 'undefined') {
                                var e16_00_0 = new Object();
                            };
                            e16_00_0.E16_13 = E1612Array;

                        }
                    }
                };

                //////////////////////////////////////
                //Spine Group


                if (typeof TC.eExam.AssessmentGroup[xx].SpineGroup !== 'undefined') {

                    var BackCervical = ["3513001", "3513003", "3513005", "3513007"];  //eExam13_3513001 
                    var BackThoratic = ["3513015", "3513017", "3513019", "3513021", "3513023", "3513025", "3513027"];  //eExam13_3513009 
                    var BackLumbar = ["3513009", "3513011", "3513013"];  //eExam13_3513017

                    for (var dd = 0; dd < TC.eExam.AssessmentGroup[xx].SpineGroup.length; dd++) {
                        if (typeof TC.eExam.AssessmentGroup[xx].SpineGroup[dd]["eExam.13"] !== 'undefined') {
                            var SpineGroupFindingLocation = "";
                            SpineGroupFindingLocation = TC.eExam.AssessmentGroup[xx].SpineGroup[dd]["eExam.13"].vSet[0].val;
                            if (typeof TC.eExam.AssessmentGroup[xx].SpineGroup[dd]["eExam.14"] !== 'undefined') {

                                if (BackCervical.indexOf(SpineGroupFindingLocation) !== -1) //BackCervical
                                {
                                    for (var i = 0; i < TC.eExam.AssessmentGroup[xx].SpineGroup[dd]["eExam.14"].vSet.length; i++) {
                                        if (typeof E16_14Array === 'undefined') {
                                            var E16_14Array = new Array();
                                        };
                                        E16_14Array.push(cv.setV2("eExam.14", TC.eExam.AssessmentGroup[xx].SpineGroup[dd]["eExam.14"].vSet[i].val, SpineGroupFindingLocation));
                                    }
                                    if (E16_14Array.length > 0) {
                                        if (typeof e16_00_0 === 'undefined') {
                                            var e16_00_0 = new Object();
                                        };
                                        e16_00_0.E16_14 = E16_14Array;
                                    }
                                };
                                if (BackThoratic.indexOf(SpineGroupFindingLocation) !== -1) //BackThoratic
                                {
                                    for (var i = 0; i < TC.eExam.AssessmentGroup[xx].SpineGroup[dd]["eExam.14"].vSet.length; i++) {
                                        if (typeof E16_15Array === 'undefined') {
                                            var E16_15Array = new Array();
                                        };
                                        E16_15Array.push(cv.setV2("eExam.14", TC.eExam.AssessmentGroup[xx].SpineGroup[dd]["eExam.14"].vSet[i].val, SpineGroupFindingLocation));
                                    };
                                    if (E16_15Array.length > 0) {
                                        if (typeof e16_00_0 === 'undefined') {
                                            var e16_00_0 = new Object();
                                        };
                                        e16_00_0.E16_15 = E16_15Array;
                                    }
                                };
                                if (BackLumbar.indexOf(SpineGroupFindingLocation) !== -1) //BackLumbar
                                {
                                    for (var i = 0; i < TC.eExam.AssessmentGroup[xx].SpineGroup[dd]["eExam.14"].vSet.length; i++) {
                                        if (typeof E16_16Array === 'undefined') {
                                            var E16_16Array = new Array();
                                        };
                                        E16_16Array.push(cv.setV2("eExam.14", TC.eExam.AssessmentGroup[xx].SpineGroup[dd]["eExam.14"].vSet[i].val, SpineGroupFindingLocation));
                                    }

                                }
                            }
                        }
                    }
                };//Spine Group

                if (typeof E16_16Array !== 'undefined') {
                    if (E16_16Array.length > 0) {
                        if (typeof e16_00_0 === 'undefined') {
                            var e16_00_0 = new Object();
                        };
                        e16_00_0.E16_16 = E16_16Array;
                    }
                };
                //////////////////////////////////////
                //Extremity Group
                if (typeof TC.eExam.AssessmentGroup[xx].ExtremityGroup !== 'undefined') {
                    var ExtremityGroupFindingLocation = "";
                    var ExtremitiesRightUpper = ["3515007", "35150011", "3515015", "3515019", "3515023", "3515027", "3515039", "3515043", "3515047", "3515067", "3515071", "3515095"];  //eExam15_ExtremitiesRightUpper 
                    var ExtremitiesLeftUpper = ["3515005", "3515009", "3515013", "3515017", "3515021", "3515025", "3515037", "3515041", "3515045", "3515065", "3515069", "3515093"];  //eExam15_ExtremitiesLeftUpper 

                    var ExtremitiesRightLower = ["3515003", "3515031", "3515035", "3515051", "3515055", "3515059", "3515063", "3515075", "3515077", "3515079", "3515083", "3515087", "3515091"];  //eExam15_RightLower
                    var ExtremitiesLeftLower = ["3515001", "3515029", "3515033", "3515049", "3515053", "3515057", "3515061", "3515073", "3515075", "35150777", "3515081", "3515057", "3515089"];  //eExam15_LeftLower

                    for (var dd = 0; dd < TC.eExam.AssessmentGroup[xx].ExtremityGroup.length; dd++) {
                        if (typeof TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.15"] !== 'undefined') {
                            if (TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.15"].IsNull !== true) {
                                ExtremityGroupFindingLocation = TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.15"].vSet[0].val;
                            }
                        };

                        if (typeof TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.16"] !== 'undefined') {
                            if (TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.16"].IsNull !== true) {
                                if (ExtremitiesRightUpper.indexOf(ExtremityGroupFindingLocation) !== -1) //ExtremitiesRightUpper
                                {
                                    for (var i = 0; i < TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.16"].vSet.length; i++) {
                                        if (typeof E16_17Array === 'undefined') {
                                            var E16_17Array = new Array();
                                        };
                                        E16_17Array.push(cv.setV2("eExam.16", TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.16"].vSet[i].val, ExtremityGroupFindingLocation));
                                    };
                                    if (E16_17Array.length > 0) {
                                        if (typeof e16_00_0 === 'undefined') {
                                            var e16_00_0 = new Object();
                                        };
                                        e16_00_0.E16_17 = E16_17Array;
                                    }
                                };

                                if (ExtremitiesRightLower.indexOf(ExtremityGroupFindingLocation) !== -1) //ExtremitiesRightLower
                                {
                                    for (var i = 0; i < TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.16"].vSet.length; i++) {
                                        if (typeof E16_18Array === 'undefined') {
                                            var E16_18Array = new Array();
                                        };
                                        E16_18Array.push(cv.setV2("eExam.16", TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.16"].vSet[i].val, ExtremityGroupFindingLocation));
                                    };
                                    if (E16_18Array.length > 0) {
                                        if (typeof e16_00_0 === 'undefined') {
                                            var e16_00_0 = new Object();
                                        };
                                        e16_00_0.E16_18 = E16_18Array;
                                    }
                                };
                                if (ExtremitiesLeftUpper.indexOf(ExtremityGroupFindingLocation) !== -1) //ExtremitiesLeftUpper
                                {
                                    for (var i = 0; i < TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.16"].vSet.length; i++) {
                                        if (typeof E16_19Array === 'undefined') {
                                            var E16_19Array = new Array();
                                        };
                                        E16_19Array.push(cv.setV2("eExam.16", TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.16"].vSet[i].val, ExtremityGroupFindingLocation));
                                    };
                                    if (E16_19Array.length > 0) {
                                        if (typeof e16_00_0 === 'undefined') {
                                            var e16_00_0 = new Object();
                                        };
                                        e16_00_0.E16_19 = E16_19Array;
                                    }
                                };
                                if (ExtremitiesLeftLower.indexOf(ExtremityGroupFindingLocation) !== -1) //LeftLower
                                {
                                    for (var i = 0; i < TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.16"].vSet.length; i++) {
                                        if (typeof E16_20Array === 'undefined') {
                                            var E16_20Array = new Array();
                                        };
                                        E16_20Array.push(cv.setV2("eExam.16", TC.eExam.AssessmentGroup[xx].ExtremityGroup[dd]["eExam.16"].vSet[i].val, ExtremityGroupFindingLocation));
                                    };
                                    if (E16_20Array.length > 0) {
                                        if (typeof e16_00_0 === 'undefined') {
                                            var e16_00_0 = new Object();
                                        };
                                        e16_00_0.E16_20 = E16_20Array;
                                    }
                                }
                            }
                        }
                    }
                };


                //eyeGroup
                if (typeof TC.eExam.AssessmentGroup[xx].EyeGroup !== 'undefined') {
                    var EyeGroupFindingLocation = "";
                    for (var dd = 0; dd < TC.eExam.AssessmentGroup[xx].EyeGroup.length; dd++) {
                        if (typeof TC.eExam.AssessmentGroup[xx].EyeGroup[dd]["eExam.17"] !== 'undefined') {
                            if (TC.eExam.AssessmentGroup[xx].EyeGroup[dd]["eExam.17"].IsNull === false) {
                                EyeGroupFindingLocation = TC.eExam.AssessmentGroup[xx].EyeGroup[dd]["eExam.17"].vSet[0].val;
                            }

                            if (typeof TC.eExam.AssessmentGroup[xx].EyeGroup[dd]["eExam.18"] !== 'undefined') {
                                if (TC.eExam.AssessmentGroup[xx].EyeGroup[dd]["eExam.18"].IsNull !== true) {

                                    for (var i = 0; i < TC.eExam.AssessmentGroup[xx].EyeGroup[dd]["eExam.18"].vSet.length; i++) {
                                        if (EyeGroupFindingLocation == "3517003")  //Left
                                        {
                                            if (typeof E16_21Array === 'undefined') {
                                                var E16_21Array = new Array();
                                            };

                                            E16_21Array.push(cv.setV2("eExam.18", TC.eExam.AssessmentGroup[xx].EyeGroup[dd]["eExam.18"].vSet[i].val, EyeGroupFindingLocation));

                                            if (E16_21Array.length > 0) {
                                                if (typeof e16_00_0 === 'undefined') {
                                                    var e16_00_0 = new Object();
                                                };
                                                e16_00_0.E16_21 = E16_21Array;
                                            }
                                        }
                                        else {

                                            if (typeof E16_22Array === 'undefined') {
                                                var E16_22Array = new Array();
                                            };
                                            if (typeof E16_22Array === 'undefined') {
                                                var E16_22Array = new Array();
                                            };
                                            E16_22Array.push(cv.setV2("eExam.18", TC.eExam.AssessmentGroup[xx].EyeGroup[dd]["eExam.18"].vSet[i].val, EyeGroupFindingLocation));

                                            if (E16_22Array.length > 0) {
                                                if (typeof e16_00_0 === 'undefined') {
                                                    var e16_00_0 = new Object();
                                                };
                                                e16_00_0.E16_22 = E16_22Array;
                                            }
                                        }
                                    }
                                };
                                EyeGroupFindingLocation = "";
                            }
                        }
                    }
                };


                if (typeof TC.eExam.AssessmentGroup[xx]["eExam.19"] !== 'undefined') {
                    if (TC.eExam.AssessmentGroup[xx]["eExam.19"].IsNull === false) {
                        if (typeof E16_23Array === 'undefined') {
                            var E16_23Array = new Array();
                        };
                        for (var i = 0; i < TC.eExam.AssessmentGroup[xx]["eExam.19"].vSet.length; i++) {
                            E16_23Array.push(cv.setV2("eExam.19", TC.eExam.AssessmentGroup[xx]["eExam.19"].vSet[i].val));
                        };
                        if (E16_23Array.length > 0) {
                            if (typeof e16_00_0 === 'undefined') {
                                var e16_00_0 = new Object();
                            }
                            e16_00_0.E16_23 = E16_23Array;
                        }
                    }
                };

                if (typeof TC.eExam.AssessmentGroup[xx]["eExam.20"] !== 'undefined') {
                    if (TC.eExam.AssessmentGroup[xx]["eExam.20"].IsNull === false) {
                        if (typeof E16_24Array === 'undefined') {
                            var E16_24Array = new Array();
                        };
                        for (var i = 0; i < TC.eExam.AssessmentGroup[xx]["eExam.20"].vSet.length; i++) {
                            E16_24Array.push(cv.setV2("eExam.20", TC.eExam.AssessmentGroup[xx]["eExam.20"].vSet[i].val));
                        };
                        if (E16_24Array.length > 0) {
                            if (typeof e16_00_0 === 'undefined') {
                                var e16_00_0 = new Object();
                            }
                            e16_00_0.E16_24 = E16_24Array;
                        }
                    }
                };

                
                if (typeof e16_00_0Array === 'undefined') {
                    var e16_00_0Array = new Array();
                };
                e16_00_0Array.push(e16_00_0)
            }
        }
    };


    if (typeof E16 === 'undefined') {
        var E16 = {};
    };
    if (typeof e16_00_0Array !== 'undefined') {
        if (e16_00_0Array.length > 0) {
            if (typeof E16 === 'undefined') {
                var E16 = new Object();
            };
            E16.E16_00_0 = e16_00_0Array;
        }
    }
    else {

        if (typeof E16 === 'undefined') {
            var E16 = new Object();
        };
        E16 = null
    };
    return E16;
};
exports.setE17 = function (TheCall) {    
    if (typeof TheCall.V3 === 'undefined') {
        var E17 = new Object();
        return E17;
    };

    var TC = TheCall.V3;
    if (typeof TC.eProtocols === 'undefined') {

        var E17 = {};
        var E17_01 = []
        E17_01.push("-25");
        E17.E17_01 = E17_01;

        E17 = null
        return E17;
    }
    else {

        if (typeof TC.eProtocols !== 'undefined') {
            if (typeof TC.eProtocols.ProtocolGroup !== 'undefined') {

                for (var xx = 0; xx < TC.eProtocols.ProtocolGroup.length; xx++) {
                    if (typeof TC.eProtocols.ProtocolGroup[xx]["eProtocols.01"] !== 'undefined') {
                        var e17_01 = new Object();
                        if (TC.eProtocols.ProtocolGroup[xx]["eProtocols.01"].IsNull !== true) {
                            e17_01 = cv.setV2("eProtocols.01", TC.eProtocols.ProtocolGroup[xx]["eProtocols.01"].vSet[0].val);
                        };
                        if (typeof e17 === 'undefined') {
                            var e17 = new Array();
                        };
                        e17.push(e17_01);
                        e17_01 = undefined;
                    }
                }
            };

            


            if (typeof e17 !== 'undefined') {
                if (typeof E17 === 'undefined') {
                    var E17 = new Array();
                }
                E17 = e17
            }
        }
    };




    if (typeof E17 === 'undefined') {
        var E17 = new Object()
        E17 = null
    };
    return E17;

};
exports.setE18 = function (TheCall)
{
    if (typeof TheCall.V3 === 'undefined') {
        var E18 = new Object();
        return E18;
    };
    var TC = TheCall.V3;
    if (typeof TC.eMedications !== 'undefined') {
        if (typeof TC.eMedications.MedicationGroup !== 'undefined') {
            for (var xx = 0; xx < TC.eMedications.MedicationGroup.length; xx++) {
                if (typeof TC.eMedications.MedicationGroup[xx] !== undefined) {
                    var objM = TC.eMedications.MedicationGroup[xx];
                    if (typeof objM["eMedications.01"] !== 'undefined') {
                        if (objM["eMedications.01"].IsNull === false) {
                            if (typeof e18 === 'undefined') {
                                var e18 = new Object();
                            };
                            e18.E18_01 = new Date(objM["eMedications.01"].vSet[0].val).toISOString();
                        }
                    };

                    if (typeof ["eMedications.02"] !== 'undefined') {
                        if (TC.eMedications.MedicationGroup[xx]["eMedications.02"].IsNull === false) {
                            if (typeof e18 === 'undefined') {
                                var e18 = new Object();
                            };

                            e18.E18_02 = cv.setV2("eMedications.02", objM["eMedications.02"].vSet[0].val);
                        }
                    };

                    if (typeof objM["eMedications.03"] !== 'undefined') {
                        if (objM["eMedications.03"].IsNull === false) {
                            if (typeof e18 === 'undefined') {
                                var e18 = new Object();
                            };
                            e18.E18_03 = objM["eMedications.03"].vSet[0].text;
                        }
                    };

                    if (typeof objM["eMedications.04"] !== 'undefined') {
                        if (objM["eMedications.04"].IsNull === false) {
                            if (typeof e18 === 'undefined') {
                                var e18 = new Object();
                            };
                            e18.E18_04 = cv.setV2("eMedications.04", objM["eMedications.04"].vSet[0].val);
                        }
                    };

                    //DosageGroup
                    if (typeof objM.DosageGroup !== 'undefined') {

                        if (typeof objM.DosageGroup["eMedications.05"] !== 'undefined') {
                            if (objM.DosageGroup["eMedications.05"].IsNull === false) {
                                if (typeof _e18_05_0 === 'undefined') {
                                    var _e18_05_0 = new Object();
                                };
                                _e18_05_0.E18_05 = cv.setV2("eMedications.05", objM.DosageGroup["eMedications.05"].vSet[0].val);

                                if (typeof objM.DosageGroup["eMedications.06"] !== 'undefined') {
                                    if (objM.DosageGroup["eMedications.06"].IsNull === false) {
                                        _e18_05_0.E18_06 = cv.setV2("eMedications.06", objM.DosageGroup["eMedications.06"].vSet[0].val);
                                    }
                                }
                            }
                        };
                        if (typeof _e18_05_0 !== 'undefined') {
                            if (typeof e18 === 'undefined') {
                                var e18 = new Object();
                            };
                            e18.E18_05_0 = _e18_05_0;
                            _e18_05_0 = undefined;
                        }
                    };

                    if (typeof objM["eMedications.07"] !== 'undefined') {
                        if (objM["eMedications.07"].IsNull === false) {
                            if (typeof e18 === 'undefined') {
                                var e18 = new Object();
                            };
                            e18.E18_07 = cv.setV2("eMedications.07", objM["eMedications.07"].vSet[0].val);
                        }
                    };

                    if (typeof objM["eMedications.08"] !== 'undefined') {

                        if (objM["eMedications.08"].IsNull === false) {
                            for (var i = 0; i < objM["eMedications.08"].vSet.length; i++) {

                                if (typeof e18_08 === 'undefined') {
                                    var e18_08 = [];
                                };
                                e18_08.push(cv.setV2("eMedications.08", objM["eMedications.08"].vSet[i].val));
                            };
                            if (typeof e18_08 !== 'undefined') {
                                if (e18_08.length > 0) {
                                    if (typeof e18 === 'undefined') {
                                        var e18 = new Object();
                                    };
                                    //NB.  Complications are 0:1
                                    e18.E18_08 = e18_08;
                                }
                            }
                        }
                    };
                    if (typeof objM["eMedications.09"] !== 'undefined') {
                        if (objM["eMedications.09"].IsNull === false) {
                            if (typeof e18 === 'undefined') {
                                var e18 = new Object();
                            };
                            e18.E18_09 = cv.setV2("eMedications.09", objM["eMedications.09"].vSet[0].val);
                        }
                    };

                    if (typeof objM["eMedications.11"] !== 'undefined') {
                        if (objM["eMedications.11"].IsNull === false) {
                            if (typeof e18 === 'undefined') {
                                var e18 = new Object();
                            };
                            e18.E18_10 = cv.setV2("eMedications.11", objM["eMedications.11"].vSet[0].val);
                        }
                    };

                    if (typeof objM["eMedications.12"] !== 'undefined') {
                        if (objM["eMedications.12"].IsNull === false) {
                            if (typeof e18 === 'undefined') {
                                var e18 = new Object();
                            };
                            e18.E18_11 = objM["eMedications.12"].vSet[0].val;
                        }
                    };

                    if (typeof e18 !== 'undefined') {

                        if (typeof e18Array === 'undefined') {
                            var e18Array = new Array();
                        };
                        e18Array.push(e18);
                        e18 = undefined;
                    }
                }
            }
        };
        if (typeof e18Array !== 'undefined') {
            if (e18Array.length > 0) {

                var E18 = new Array();
                E18 = e18Array;
                return E18
            }
        }
    }
    else {
        return null;
    }
};
exports.setE19 = function (TheCall) {


    if (typeof TheCall.V3 === 'undefined') {
        var E19 = new Object();
        return E19;
    };
    var TC = TheCall.V3;
    var airway = ["232679009", "397874007", "424979004", "78121007", "673005", "182692007", "7443007", "427753009", "2267008", "385857005", "448442005"];

    if (typeof TC.eProcedures !== 'undefined') {
        if (typeof TC.eProcedures.ProcedureGroup !== 'undefined') {
            for (var xx = 0; xx < TC.eProcedures.ProcedureGroup.length; xx++) {
                var obj = TC.eProcedures.ProcedureGroup[xx];
                if (typeof obj["eProcedures.03"] !== 'undefined') {

                    if (obj["eProcedures.03"].IsNull === false) {
                        if (typeof e1911 === 'undefined') {
                            var e1911 = new Object()
                        };
                        e1911.E19_03 = cv.setV2("eProcedures.03", obj["eProcedures.03"].vSet[0].val);
                    }
                };

                if (typeof obj["eProcedures.01"] !== 'undefined') {
                    if (obj["eProcedures.01"].IsNull === false) {
                        if (typeof e1911 === 'undefined') {
                            var e1911 = new Object()
                        };

                        e1911.E19_01 = new Date(obj["eProcedures.01"].vSet[0].val).toISOString();
                    }
                };

                if (typeof obj["eProcedures.02"] !== 'undefined') {

                    if (obj["eProcedures.02"].IsNull === false) {
                        if (typeof e1911 === 'undefined') {
                            var e1911 = new Object()
                        };
                        e1911.E19_02 = cv.setV2("eProcedures.02", obj["eProcedures.02"].vSet[0].val);
                    }
                };

                if (typeof obj["eProcedures.04"] !== 'undefined') {
                    if (obj["eProcedures.04"].IsNull === false) {
                        if (typeof e1911 === 'undefined') {
                            var e1911 = new Object()
                        };
                        e1911.E19_04 = obj["eProcedures.04"].vSet[0].val;
                    }
                };


                if (typeof obj["eProcedures.05"] !== 'undefined') {
                    if (obj["eProcedures.05"].IsNull === false) {
                        if (typeof e1911 === 'undefined') {
                            var e1911 = new Object()
                        };
                        e1911.E19_05 = obj["eProcedures.05"].vSet[0].val;
                    }
                };

                if (typeof obj["eProcedures.06"] !== 'undefined') {
                    if (obj["eProcedures.06"].IsNull === false) {
                        if (typeof e1911 === 'undefined') {
                            var e1911 = new Object()
                        };
                        e1911.E19_06 = cv.setV2("eProcedures.06", obj["eProcedures.06"].vSet[0].val);
                    }
                };


                if (typeof obj["eProcedures.07"] !== 'undefined') {
                    if (obj["eProcedures.07"].IsNull === false) {
                        for (var i = 0; i < obj["eProcedures.07"].vSet.length; i++) {
                            if (typeof E19_07 === 'undefined') {
                                var E19_07 = new Array();
                            };
                            E19_07.push(cv.setV2("eProcedures.07", obj["eProcedures.07"].vSet[i].val));
                        };
                        if (typeof e1911 === 'undefined') {
                            var e1911 = new Object()
                        };
                        e1911.E19_07 = E19_07;//.filter(onlyUnique);;
                    }
                };

                if (typeof obj["eProcedures.08"] !== 'undefined') {
                    if (obj["eProcedures.08"].IsNull === false) {
                        if (typeof e1911 === 'undefined') {
                            var e1911 = new Object()
                        };
                        e1911.E19_08 = cv.setV2("eProcedures.08", obj["eProcedures.08"].vSet[0].val);
                    }
                };

                if (typeof obj["eProcedures.09"] !== 'undefined') {
                    if (obj["eProcedures.09"].IsNull === false) {
                        if (typeof e1911 === 'undefined') {
                            var e1911 = new Object()
                        };
                        e1911.E19_09 = obj["eProcedures.09"].vSet[0].val;
                    }
                };
                if (typeof obj["eProcedures.11"] !== 'undefined') {
                    if (obj["eProcedures.11"].IsNull === false) {
                        if (typeof e1911 === 'undefined') {
                            var e1911 = new Object()
                        };
                        e1911.E19_10 = cv.setV2("eProcedures.11", obj["eProcedures.11"].vSet[0].val);
                    }
                };


                if (typeof obj["eProcedures.12"] !== 'undefined') {
                    if (obj["eProcedures.12"].IsNull !== true) {
                        if (typeof e1911 === 'undefined') {
                            var e1911 = new Object()
                        };

                        e1911.E19_11 = obj["eProcedures.12"].vSet[0].val

                    }

                };

                if (typeof e1911 !== 'undefined') {
                    if (typeof E19010Array === 'undefined') {
                        var E19010Array = new Array();
                    };
                    E19010Array.push(e1911);
                    e1911 = undefined
                    if (typeof E19Object === 'undefined') {
                        var E19Object = new Object();
                    };

                };

                //end 19_01_0
                /////
                if (typeof obj["eProcedures.13"] !== 'undefined') {
                    if (obj["eProcedures.13"].IsNull !== true) {
                        if (typeof e1912 === 'undefined') {
                            var e1912 = new Array()
                        };
                        e1912.push(cv.setV2("eProcedures.13", obj["eProcedures.13"].vSet[0].val));
                    }
                };


                obj = undefined;
                if (typeof E19A === 'undefined') {
                    var E19A = new Object();
                };
                E19A.E19_01_0 = E19010Array;
                if (typeof e1912 !== 'undefined') {
                    E19A.E19_12 = e1912
                }

            }
        }
    };
    if (typeof E19A !== 'undefined') {
        return E19A
    }

};
exports.setE20 = function (TheCall) {
    if (typeof TheCall.V3 === 'undefined') {
        var E20 = new Object();
        return E20;
    };
    var TC = TheCall.V3;
    if (typeof TC.eDisposition === 'undefined') {
        var E20 = {};
        E20 = null;
        return E20;
    }
    else {
        if (typeof TC.eDisposition.DestinationGroup !== 'undefined') {
            var obj = TC.eDisposition.DestinationGroup
            if (typeof obj["eDisposition.01"] !== 'undefined') {
                if (typeof E20 === 'undefined') {
                    var E20 = new Object();
                };
                if (obj["eDisposition.01"].IsNull === false) {
                    E20.E20_01 = obj["eDisposition.01"].vSet[0].val;
                }
            };


            if (typeof obj["eDisposition.02"] !== 'undefined') {
                if (obj["eDisposition.02"].IsNull === false) {
                    if (typeof E20 === 'undefined') {
                        var E20 = new Object();
                    };
                    E20.E20_02 = obj["eDisposition.02"].vSet[0].val;
                }
            };
            if (typeof obj["eDisposition.03"] !== 'undefined') {
                if (obj["eDisposition.03"].IsNull !== true) {
                    if (typeof E20_03_0 === 'undefined') {
                        var E20_03_0 = new Object();
                    };

                    E20_03_0.E20_03 = obj["eDisposition.03"].vSet[0].val;
                }
            };


            if (typeof obj["eDisposition.04"] !== 'undefined') {

                if (obj["eDisposition.04"].IsNull !== true) {
                    if (typeof E20_03_0 === 'undefined') {
                        var E20_03_0 = new Object();
                    };

                    E20_03_0.E20_04 = obj["eDisposition.04"].vSet[0].val;
                }
            };



            if (typeof obj["eDisposition.05"] !== 'undefined') {
                if (obj["eDisposition.05"].IsNull === false) {
                    if (typeof E20_03_0 === 'undefined') {
                        var E20_03_0 = new Object();
                    };

                    E20_03_0.E20_05 = obj["eDisposition.05"].vSet[0].val;
                }
            };


            if (typeof obj["eDisposition.06"] !== 'undefined') {
                if (obj["eDisposition.06"].IsNull === false) {
                    if (typeof E20 === 'undefined') {
                        var E20 = new Object();
                    };
                    E20.E20_06 = obj["eDisposition.06"].vSet[0].val;
                }
            };

            if (typeof obj["eDisposition.07"] !== 'undefined') {
                if (obj["eDisposition.07"].IsNull === false) {
                    if (typeof E20_03_0 === 'undefined') {
                        var E20_03_0 = new Object();
                    };

                    E20_03_0.E20_07 = obj["eDisposition.07"].vSet[0].val;
                }
            };

            if (typeof E20_03_0 !== 'undefined') {
                if (typeof E20 === 'undefined') {
                    var E20 = new Object();
                };
                E20.E20_03_0 = E20_03_0;
            };

            
            if (typeof obj["eDisposition.09"] !== 'undefined') {
                if (obj["eDisposition.09"].IsNull !== true) {
                    if (typeof E20 === 'undefined') {
                        var E20 = new Object();
                    };

                    E20.E20_08 = TC.eDisposition["eDisposition.09"].vSet[0].val;
                }
            }
        };
        if (typeof TC.eDisposition["eDisposition.12"] !== 'undefined') {
            if (TC.eDisposition["eDisposition.12"].IsNull === false) {
                if (typeof E20 === 'undefined') {
                    var E20 = new Object();
                };
                E20.E20_10 = cv.setV2("eDisposition.12", TC.eDisposition["eDisposition.12"].vSet[0].val);
            }
        };

        if (typeof TC.eDisposition["eDisposition.13"] !== 'undefined') {

            if (TC.eDisposition["eDisposition.13"].IsNull !== true) {
                if (typeof E20 === 'undefined') {
                    var E20 = new Object();
                };

                E20.E20_11 = cv.setV2("eDisposition.13", TC.eDisposition["eDisposition.13"].vSet[0].val);
            };
        };

        if (typeof TC.eDisposition["eDisposition.14"] !== 'undefined') {
            if (TC.eDisposition["eDisposition.14"].IsNull !== true) {
                if (typeof E20 === 'undefined') {
                    var E20 = new Object();
                };

                E20.E20_12 = cv.setV2("eDisposition.14", TC.eDisposition["eDisposition.14"].vSet[0].val);
            }
        };

        if (typeof TC.eDisposition["eDisposition.15"] !== 'undefined') {
            if (TC.eDisposition["eDisposition.15"].IsNull !== true) {
                if (typeof E20 === 'undefined') {
                    var E20 = new Object();
                };
                E20.E20_13 = cv.setV2("eDisposition.15", TC.eDisposition["eDisposition.15"].vSet[0].val);
            }
        };

        if (typeof TC.eDisposition["eDisposition.17"] !== 'undefined') {
            if (TC.eDisposition["eDisposition.17"].IsNull === false) {
                if (typeof E20 === 'undefined') {
                    var E20 = new Object();
                };

                E20.E20_14 = cv.setV2("eDisposition.17", TC.eDisposition["eDisposition.17"].vSet[0].val);
            }
        };

        if (typeof TC.eDisposition["eDisposition.19"] !== 'undefined') {
            if (TC.eDisposition["eDisposition.19"].IsNull === false) {
                if (typeof E20 === 'undefined') {
                    var E20 = new Object();
                };

                E20.E20_15 = cv.setV2("eDisposition.19", TC.eDisposition["eDisposition.19"].vSet[0].val);
            }
        };


        if (typeof TC.eDisposition["eDisposition.20"] !== 'undefined') {
            if (TC.eDisposition["eDisposition.20"].IsNull === false) {
                if (typeof E20 === 'undefined') {
                    var E20 = new Object();
                };

                E20.E20_16 = cv.setV2("eDisposition.20", TC.eDisposition["eDisposition.20"].vSet[0].val);

            }
        };
        if (typeof TC.eDisposition["eDisposition.21"] !== 'undefined') {
            if (TC.eDisposition["eDisposition.21"].IsNull === false) {
                if (typeof E20 === 'undefined') {
                    var E20 = new Object();
                };

                E20.E20_17 = cv.setV2("eDisposition.21", TC.eDisposition["eDisposition.21"].vSet[0].val);
            }
        }
    };
    if (typeof E20 === 'undefined') {
        var E20 = new Object()
        E20 = null;
    }
    return E20;
};
exports.setE21 = function (TheCall) {
    if (typeof TheCall.V3 === 'undefined') {
        var E21 = new Object();
        return E21;
    };
    var TC = TheCall.V3;
    if (typeof TC.eDevice === 'undefined') {
        var E21 = new Object();
        E21 = null
    }
    else {
        //Get max of eDevice, eVitals

        if (typeof TC.eDevice.DeviceGroup !== 'undefined') {
            for (var xx = 0; xx < TC.eDevice.DeviceGroup.length; xx++) {

                var obj = TC.eDevice.DeviceGroup[xx];
                if (typeof obj !== 'undefined') {

                    if (typeof obj["eDevice.02"] !== 'undefined') {
                        if (typeof e21 === 'undefined') {
                            var e21 = new Object();
                        };
                        var e21 = new Object();
                        if (obj["eDevice.02"].IsNull === false) {
                            e21.E21_01 = obj["eDevice.02"].vSet[0].val;
                        }
                    };

                    if (typeof obj["eDevice.03"] !== 'undefined') {
                        if (obj["eDevice.03"].IsNull === false) {
                            if (typeof e21 === 'undefined') {
                                var e21 = new Object();
                            };
                            e21.E21_02 = cv.setV2("eDevice.03", obj["eDevice.03"].vSet[0].val);
                        }
                    };
                    if (typeof obj["WaveformGroup"] !== 'undefined') {
                        if (typeof obj["WaveformGroup"]["eDevice.04"] !== 'undefined') {
                            if (obj["WaveformGroup"]["eDevice.04"].IsNull === false) {
                                if (typeof e2103 === 'undefined') {
                                    var e2103 = new Object();
                                };
                                e2103.E21_03 = cv.setV2("eDevice.04", obj["WaveformGroup"]["eDevice.04"].vSet[0].val);
                            }
                        };


                        if (typeof obj["WaveformGroup"]["eDevice.05"] !== 'undefined') {
                            if (obj["WaveformGroup"]["eDevice.05"].IsNull === false) {
                                if (typeof e2103 === 'undefined') {
                                    var e2103 = new Object();
                                };
                                e2103.E21_04 = cv.setV2("eDevice.05", obj["WaveformGroup"]["eDevice.05"].vSet[0].val);
                            }
                        };

                        if (typeof obj["WaveformGroup"]["eDevice.06"] !== 'undefined') {
                            if (obj["WaveformGroup"]["eDevice.06"].IsNull === false) {
                                if (typeof e21 === 'undefined') {
                                    var e21 = new Object();
                                };
                                e21.E21_05 = cv.setV2("eDevice.06", obj["WaveformGroup"]["eDevice.06"].vSet[0].val);
                            }
                        }
                        if (typeof e2103 !== 'undefined') {
                            if (typeof e21 === 'undefined') {
                                var e21 = new Object();
                            };
                            e21.E21_03_0 = e2103;
                        }
                    };

                    if (typeof obj["eDevice.07"] !== 'undefined') {
                        if (obj["eDevice.07"].IsNull === false) {
                            if (typeof e21 === 'undefined') {
                                var e21 = new Object();
                            };
                            e21.E21_06 = cv.setV2("eDevice.07", obj["eDevice.07"].vSet[0].val);
                        }
                    };

                    if (typeof obj["eDevice.08"] !== 'undefined') {
                        if (obj["eDevice.08"].IsNull === false) {
                            if (typeof e21 === 'undefined') {
                                var e21 = new Object();
                            };
                            e21.E21_07 = cv.setV2("eDevice.08", obj["eDevice.08"].vSet[0].val);
                        }
                    };

                    if (typeof obj["ShockGroup"] !== 'undefined') {
                        if (typeof obj["ShockGroup"]["eDevice.09"] !== 'undefined') {
                            if (obj["ShockGroup"]["eDevice.09"].IsNull === false) {
                                if (typeof e21 === 'undefined') {
                                    var e21 = new Object();
                                };
                                e21.E21_08 = cv.setV2("eDevice.09", obj["ShockGroup"]["eDevice.09"].vSet[0].val);
                            }
                        };

                        if (typeof obj["ShockGroup"]["eDevice.10"] !== 'undefined') {
                            if (obj["ShockGroup"]["eDevice.10"].IsNull === false) {
                                if (typeof e21 === 'undefined') {
                                    var e21 = new Object();
                                };
                                e21.E21_09 = cv.setV2("eDevice.10", obj["ShockGroup"]["eDevice.10"].vSet[0].val);
                            }
                        };


                        if (typeof obj["ShockGroup"]["eDevice.11"] !== 'undefined') {
                            if (obj["ShockGroup"]["eDevice.11"].IsNull === false) {
                                if (typeof e21 === 'undefined') {
                                    var e21 = new Object();
                                };
                                e21.E21_10 = cv.setV2("eDevice.11", obj["ShockGroup"]["eDevice.11"].vSet[0].val);
                            }
                        };

                        if (typeof obj["ShockGroup"]["eDevice.12"] !== 'undefined') {
                            if (obj["ShockGroup"]["eDevice.12"].IsNull === false) {
                                if (typeof e21 === 'undefined') {
                                    var e21 = new Object();
                                };
                                e21.E21_11 = cv.setV2("eDevice.12", obj["ShockGroup"]["eDevice.12"].vSet[0].val);
                            }
                        }
                    };
                    if (typeof E21Array === 'undefined') {
                        var E21Array = new Array();
                    };
                    E21Array.push(e21)
                    e21 = undefined;
                };
                if (typeof TC.eVitals !== 'undefined') {
                    if (typeof TC.eVitals.VitalGroup !== 'undefined') {
                        for (var xxx = 0; xxx <= TC.eVitals.VitalGroup.length; xxx++) {
                            if (typeof TC.eVitals.VitalGroup[xxx] !== 'undefined') {
                                var objV = TC.eVitals.VitalGroup[xxx];
                                if (typeof objV !== 'undefined') {
                                    if (typeof objV["eVitals.01"] !== 'undefined') {
                                        if (typeof e21a === 'undefined') {
                                            var e21a = new Object();
                                        };
                                        e21a.E21_01 = "";
                                        if (objV["eVitals.01"].IsNull === false) {
                                            e21a.E21_01 = objV["eVitals.01"].vSet[0].val;
                                        }
                                    };
                                    if (typeof objV["HeartRateGroup"] !== 'undefined') {
                                        if (typeof objV["HeartRateGroup"]["eVitals.10"] !== 'undefined') {
                                            if (objV["HeartRateGroup"]["eVitals.10"].IsNull === false) {
                                                if (typeof e21a === 'undefined') {
                                                    var e21a = new Object();
                                                };
                                                e21a.E21_10 = objV["HeartRateGroup"]["eVitals.10"].vSet[0].val;
                                            }
                                        }
                                    };

                                    if (typeof objV["eVitals.12"] !== 'undefined') {
                                        if (objV["eVitals.12"].IsNull === false) {
                                            if (typeof e21a === 'undefined') {
                                                var e21a = new Object();
                                            };
                                            e21a.E21_13 = objV["eVitals.12"].vSet[0].val;
                                        }
                                    };

                                    if (typeof objV["BloodPressureGroup"] !== 'undefined') {
                                        if (typeof objV["BloodPressureGroup"]["eVitals.06"] !== 'undefined') {
                                            if (objV["BloodPressureGroup"]["eVitals.06"].IsNull === false) {
                                                if (typeof e21a === 'undefined') {
                                                    var e21a = new Object();
                                                };
                                                e21a.E21_14 = objV["BloodPressureGroup"]["eVitals.06"].vSet[0].val;
                                            }
                                        };

                                        if (typeof objV["BloodPressureGroup"]["eVitals.07"] !== 'undefined') {
                                            if (objV["BloodPressureGroup"]["eVitals.07"].IsNull === false) {
                                                if (typeof e21a === 'undefined') {
                                                    var e21a = new Object();
                                                };
                                                e21a.E21_15 = objV["BloodPressureGroup"]["eVitals.07"].vSet[0].val;
                                            }
                                        };

                                        if (typeof objV["BloodPressureGroup"]["eVitals.09"] !== 'undefined') {
                                            if (objV["BloodPressureGroup"]["eVitals.09"].IsNull === false) {
                                                if (typeof e21a === 'undefined') {
                                                    var e21a = new Object();
                                                };
                                                e21a.E21_20 = objV["BloodPressureGroup"]["eVitals.09"].vSet[0].val;
                                            }
                                        }
                                    };


                                    if (typeof objV["eVitals.14"] !== 'undefined') {
                                        if (objV["eVitals.14"].IsNull === false) {
                                            if (typeof e21a === 'undefined') {
                                                var e21a = new Object();
                                            };
                                            e21a.E21_16 = objV["eVitals.14"].vSet[0].val;
                                        }
                                    };


                                    if (typeof objV["eVitals.12"] !== 'undefined') {
                                        if (objV["eVitals.12"].IsNull === false) {
                                            if (typeof e21a === 'undefined') {
                                                var e21a = new Object();
                                            };
                                            e21a.E21_17 = objV["eVitals.12"].vSet[0].val;
                                        }
                                    };

                                    if (typeof objV["eVitals.16"] !== 'undefined') {
                                        if (objV["eVitals.16"].IsNull === false) {
                                            if (typeof e21a === 'undefined') {
                                                var e21a = new Object();
                                            };
                                            e21a.E21_18 = objV["eVitals.16"].vSet[0].val;
                                            e21a.E21_18 = "5330";
                                        }
                                    }
                                }
                            }
                        };
                        if (typeof E21Array === 'undefined') {
                            var E21Array = new Array();
                        };
                        E21Array.push(e21a)
                        e21a = undefined;
                    }
                }
            }
        }
    };
    if (typeof E21Array === 'undefined') {
        var E21 = new Object();
        E21 = null;
    }
    else {
        if (E21Array.length > 0) {
            var E21 = new Array();
            E21 = E21Array;
        }
        else {
            var E21 = new Object();
            E21 = null;
        }
    };
    return E21;
};
exports.setE22 = function (TheCall) {
    if (typeof TheCall.V3 === 'undefined') {
        var E22 = new Object();
        return E22;
    };
    var TC = TheCall.V3;
    if (typeof TC.eOutcome === 'undefined') {
        var E22 = new Object();
        E22 = null;
    }
    else {
        if (typeof TC.eOutcome["eOutcome.01"] !== 'undefined') {
            if (TC.eOutcome["eOutcome.01"].IsNull === false) {
                if (typeof E22 === 'undefined') {
                    var E22 = new Object();
                };
                E22.E22_01 = cv.setV2("eOutcome.01", TC.eOutcome["eOutcome.01"].vSet[0].val);
            }
        };

        if (typeof TC.eOutcome["eOutcome.02"] !== 'undefined') {
            if (TC.eOutcome["eOutcome.02"].IsNull === false) {
                if (typeof E22 === 'undefined') {
                    var E22 = new Object();
                };
                E22.E22_02 = cv.setV2("eOutcome.02", TC.eOutcome["eOutcome.02"].vSet[0].val);
            }
        };
        //Law Enforcement ID
        if (typeof TC.eOutcome["ExternalDataGroup"] !== 'undefined') {
            for (var i = 0; i < TC.eOutcome["ExternalDataGroup"].length; i++) {
                var obj = TC.eOutcome["ExternalDataGroup"][i];
                if (typeof obj["eOutcome.03"] !== 'undefined') {
                    if (obj["eOutcome.03"].IsNull === false) {
                        if (typeof obj["eOutcome.04"] !== 'undefined') {
                            if (obj["eOutcome.04"].IsNull === false) {
                                if (typeof E22 === 'undefined') {
                                    var E22 = new Object();
                                };

                                if (obj["eOutcome.03"].vSet[0].val == "4303009") {
                                    E22.E22_03 = obj["eOutcome.04"].vSet[0].val;
                                };
                                if (obj["eOutcome.03"].vSet[0].val.toString() == "4303003")//fire
                                {
                                    E22.E22_05 = obj["eOutcome.04"].vSet[0].val;
                                };
                                if (obj["eOutcome.03"].vSet[0].val.toString() == "4303017") {
                                    E22.E22_06 = obj["eOutcome.04"].vSet[0].val;
                                };
                                if (obj["eOutcome.03"].vSet[0].val.toString() == "4303025") {
                                    E22.E22_04 = obj["eOutcome.04"].vSet[0].val;
                                };
                            }
                        }
                    }
                }
            }
        }
    };
    if (typeof E22 === 'undefined') {
        var E22 = new Object();
        E22 = null;
    };
    return E22;
};
exports.setE23 = function (TheCall) {
    if (typeof TheCall.V3 === 'undefined') {
        var E23 = new Object();
        return E23;
    };
    var TC = TheCall.V3;
    if (typeof TC.eOther === 'undefined') {
        var E23 = new Object();
        E23 = null;
    }
    else {
        var CrewExposure = false;


        if (typeof TC.eOther["eOther.01"] !== 'undefined') {
            if (TC.eOther["eOther.01"].IsNull !== true) {
                if (typeof E23 === 'undefined') {
                    var E23 = new Object();
                };
                E23.E23_01 = cv.setV2("eOther.01", TC.eOther["eOther.01"].vSet[0].val);
            }
        };

        if (typeof TC.eOther["eOther.02"] !== 'undefined') {

            if (TC.eOther["eOther.02"].IsNull !== true) {
                var E23_02 = new Array();
                for (var d = 0; d < TC.eOther["eOther.02"].vSet.length; d++) {
                    E23_02.push(cv.setV2("eOther.02", TC.eOther["eOther.02"].vSet[0].val));
                };
                if (E23_02.length > 0) {
                    if (typeof E23 === 'undefined') {
                        var E23 = new Object();
                    };
                    E23.E23_02 = E23_02;//.filter(onlyUnique);
                };
            }
        };

        if (typeof TC.eOther.EMSCrewMemberGroup !== 'undefined') {
            for (var d = 0; d < TC.eOther.EMSCrewMemberGroup.length; d++) {
                if (typeof TC.eOther.EMSCrewMemberGroup[d]["eOther.03"] !== 'undefined') {
                    //Determine if Crewmember exposed
                    if (typeof TC.eOther.EMSCrewMemberGroup[d]["eOther.05"] !== 'undefined') {
                        if (TC.eOther.EMSCrewMemberGroup[d]["eOther.05"].IsNull === false) {

                            var e23_05 = 0;
                            if (TC.eOther.EMSCrewMemberGroup[d]["eOther.05"].vSet[0].val == '9923003') //Yes, Crew Exposed
                            {
                                e23_05 = 1;
                            }
                        }
                    };


                    /*
                    if (typeof TC.eOther.EMSCrewMemberGroup[d]["eOther.04"] !== 'undefined') {
                        if (TC.eOther.EMSCrewMemberGroup[d]["eOther.04"].IsNull === false) {
                            if (typeof E23_07 === 'undefined') {
                                var E23_07 = new Array();
                            };
                            for (var i = 0; i < TC.eOther.EMSCrewMemberGroup[d]["eOther.04"].vSet.length; i++) {
                                E23_07.push(cv.setV2("eOther.04", TC.eOther.EMSCrewMemberGroup[d]["eOther.04"].vSet[i].val));
                            }
                        }
                    };
                    */





                    if (TC.eOther.EMSCrewMemberGroup[d]["eOther.03"].IsNull === false) {
                        if (typeof E23_03 === 'undefined') {
                            var E23_03 = new Array();
                        };
                        for (var i = 0; i < TC.eOther.EMSCrewMemberGroup[d]["eOther.03"].vSet.length; i++) {
                            E23_03.push(cv.setV2("eOther.03", TC.eOther.EMSCrewMemberGroup[d]["eOther.03"].vSet[i].val));
                        }
                    };

                    if (typeof TC.eOther.EMSCrewMemberGroup[d]["eOther.06"] !== 'undefined') {
                        if (TC.eOther.EMSCrewMemberGroup[d]["eOther.06"].IsNull === false) {
                            if (typeof E23_06 === 'undefined') {
                                var E23_06 = new Array();
                            };
                            for (var i = 0; i < TC.eOther.EMSCrewMemberGroup[d]["eOther.06"].vSet.length; i++) {
                                E23_06.push(cv.setV2("eOther.06", TC.eOther.EMSCrewMemberGroup[d]["eOther.06"].vSet[i].val));
                            }
                        }
                    }
                }
            }
        };

        if (typeof e23_05 !== 'undefined') {
            if (typeof E23 === 'undefined') {
                var E23 = new Object();
            };
            E23.E23_05 = e23_05;

        };

        if (typeof E23_06 !== 'undefined') {
            if (E23_06.length > 0) {
                if (typeof E23 === 'undefined') {
                    var E23 = new Object();
                };
                E23.E23_06 = E23_06;//.filter(onlyUnique);
            }
        };


        if (typeof E23_07 !== 'undefined') {
            if (E23_07.length > 0) {
                if (typeof E23 === 'undefined') {
                    var E23 = new Object();
                };
                var a = ["5590"]
                E23.E23_07 = E23_07;//.filter(onlyUnique);
                E23.E23_07 = a;
            }
        };


        if (typeof E23_03 !== 'undefined') {
            if (E23_03.length > 0) {
                if (typeof E23 === 'undefined') {
                    var E23 = new Object();
                };
                E23.E23_03 = E23_03;//.filter(onlyUnique);
            }
        };

        if (typeof TC.eOther["eOther.07"] !== 'undefined') {
            if (TC.eOther["eOther.07"].IsNull === false) {
                var E23_04 = [];
                for (var d = 0; d < TC.eOther["eOther.07"].vSet.length; d++) {
                    E23_04.push(cv.setV2("eOther.07", TC.eOther["eOther.07"].vSet[i].val));
                };
                if (typeof E23 === 'undefined') {
                    var E23 = new Object();
                };
                E23.E23_04 = E23_04;//.filter(onlyUnique);
            }
        };



        if (typeof TC.eOther["eOther.08"] !== 'undefined') {
            if (TC.eOther["eOther.08"].IsNull === false) {
                if (typeof E23 === 'undefined') {
                    var E23 = new Object();
                };
                E23.E23_10 = TC.eOther["eOther.08"].vSet[0].val;
            };
        }
    };
    /////////////////////////////////////////
    /////////////////////////////////////////
    if (typeof E23 !== 'undefined') {
        return E23;
    }
    else {
        return null;
    }
};