var u = require('cloud/Utilities.js');
exports.setV2CompleteCall = function (TheCall)
{
    var NRArray = ["-20"];
    var NAArray = ["-25"];

    if (typeof TheCall.Version2 === 'undefined') {
    }
    else {
        // Check for required Call Properties
        if (typeof TheCall.Props === 'undefined') {
            //raiseerror
        }
        else {
            if (typeof TheCall.Props.Transport === 'undefined') {
                //raiseerror
            }
            if (typeof TheCall.Props.HasPatient === 'undefined') {
                //raiseerror
            }
        };

        var v2 = TheCall.Version2;
        if (typeof v2.E01 !== 'undefined') {
            if (typeof E01 === 'undefined') {
                var E01 = new Object();
            };
            E01 = v2.E01;
        };
        if (typeof v2.E02 === 'undefined') {


        }
        else {

            if (typeof E02 === 'undefined') {
                var E02 = new Object();
            };

            if ((typeof v2.E02.E02_01 !== 'undefined') && (u.IsGo(v2.E02.E02_01) == true)) {
                E02.E02_01 = v2.E02.E02_01;
            };
            if ((typeof v2.E02.E02_02 !== 'undefined') && (u.IsGo(v2.E02.E02_02) == true)) {
                E02.E02_02 = v2.E02.E02_02;
            }
            else {
                E02.E02_02 = "-20";
            };

            if ((typeof v2.E02.E02_03 !== 'undefined') && (u.IsGo(v2.E02.E02_03) == true)) {
                E02.E02_03 = v2.E02.E02_03;
            }
            else {
                E02.E02_03 = "-20";
            };

            if ((typeof v2.E02.E02_04 !== 'undefined') && (u.IsGo(v2.E02.E02_04) == true)) {
                E02.E02_04 = v2.E02.E02_04;
            };

            if ((typeof v2.E02.E02_05 !== 'undefined') && (u.IsGo(v2.E02.E02_05) == true)) {
                E02.E02_05 = v2.E02.E02_05;
            };

            if ((typeof v2.E02.E02_06 !== 'undefined') && (u.IsGo(v2.E02.E02_06) == true)) {
                E02.E02_06 = v2.E02.E02_06;
            }
            else {
                if (TheCall.Props.HasPatient == true) {
                    E02.E02_06 = NRArray;
                }
                else {
                    E02.E02_06 = NAArray;
                }
            };
            if ((typeof v2.E02.E02_07 !== 'undefined') && (u.IsGo(v2.E02.E02_07) == true)) {
                E02.E02_07 = v2.E02.E02_07;
            }
            else {
                if (TheCall.Props.HasPatient == true) {
                    E02.E02_07 = NRArray;
                }
                else {
                    E02.E02_07 = NAArray;
                }
            };



            if ((typeof v2.E02.E02_08 !== 'undefined') && (u.IsGo(v2.E02.E02_08) == true)) {
                E02.E02_08 = v2.E02.E02_08;
            }
            else {
                if (TheCall.Props.HasPatient == true) {
                    E02.E02_08 = NRArray;
                }
                else {
                    E02.E02_08 = NAArray;
                }
            };


            if ((typeof v2.E02.E02_09 !== 'undefined') && (u.IsGo(v2.E02.E02_09) == true)) {
                E02.E02_09 = v2.E02.E02_09;
            }
            else {
                var a = [];
                a.push("-25")
                E02.E02_09 = a;
            };
            if ((typeof v2.E02.E02_10 !== 'undefined') && (u.IsGo(v2.E02.E02_10) == true)) {
                E02.E02_10 = v2.E02.E02_10;
            }
            else {
                var a = [];
                a.push("-25")
                E02.E02_10 = a;
            };

            if ((typeof v2.E02.E02_11 !== 'undefined') && (u.IsGo(v2.E02.E02_11) == true)) {
                E02.E02_11 = v2.E02.E02_11;
            };


            if ((typeof v2.E02.E02_12 !== 'undefined') && (u.IsGo(v2.E02.E02_12) == true)) {
                E02.E02_12 = v2.E02.E02_12;
            };

            if ((typeof v2.E02.E02_13 !== 'undefined') && (u.IsGo(v2.E02.E02_13) == true)) {
                E02.E02_13 = v2.E02.E02_13;
            }
            else {
                E02.E02_13 = "-20";
            };

            if ((typeof v2.E02.E02_14 !== 'undefined') && (u.IsGo(v2.E02.E02_14) == true)) {
                E02.E02_14 = v2.E02.E02_14;
            };

            if ((typeof v2.E02.E02_15 !== 'undefined') && (u.IsGo(v2.E02.E02_15) == true)) {
                E02.E02_15 = v2.E02.E02_15;
            };

            if ((typeof v2.E02.E02_16 !== 'undefined') && (u.IsGo(v2.E02.E02_16) == true)) {
                E02.E02_16 = v2.E02.E02_16;
            };

            if ((typeof v2.E02.E02_17 !== 'undefined') && (u.IsGo(v2.E02.E02_17) == true)) {
                E02.E02_17 = v2.E02.E02_17;
            };

            if ((typeof v2.E02.E02_18 !== 'undefined') && (u.IsGo(v2.E02.E02_18) == true)) {
                E02.E02_18 = v2.E02.E02_18;
            };

            if ((typeof v2.E02.E02_19 !== 'undefined') && (u.IsGo(v2.E02.E02_19) == true)) {
                E02.E02_19 = v2.E02.E02_19;
            };

            if ((typeof v2.E02.E02_20 !== 'undefined') && (u.IsGo(v2.E02.E02_20) == true)) {
                if (typeof E02 === 'undefined') {
                    var E02 = new Object();
                };
                E02.E02_20 = v2.E02.E02_20;
            }
        };
        if (typeof v2.E03 === 'undefined') {
            if (typeof E03 === 'undefined') {
                var E03 = new Object();
            };
            E03.E03_01 = "-25";
            E03.E03_02 = "-5";
            E03.E03_03 = "-25";
        }
        else {
            if ((typeof v2.E03.E03_01 !== 'undefined') && (u.IsGo(v2.E03.E03_01) == true)) {
                if (typeof E03 === 'undefined') {
                    var E03 = new Object();
                };
                E03.E03_01 = v2.E03.E03_01;
            }
            else {
                if (typeof E03 === 'undefined') {
                    var E03 = new Object();
                };
                E03.E03_01 = "-20";
            };

            if ((typeof v2.E03.E03_02 !== 'undefined') && (u.IsGo(v2.E03.E03_02) == true)) {
                if (typeof E03 === 'undefined') {
                    var E03 = new Object();
                };
                E03.E03_02 = v2.E03.E03_02;
            }
            else {
                if (typeof E03 === 'undefined') {
                    var E03 = new Object();
                };
                E03.E03_02 = "-20";
                E03.E03_03 = "-20";
            };

            if ((typeof v2.E03.E03_03 !== 'undefined') && (u.IsGo(v2.E03.E03_03) == true)) {
                if (typeof E03 === 'undefined') {
                    var E03 = new Object();
                };
                E03.E03_03 = v2.E03.E03_03;
            }
            else {
                if (typeof E03 === 'undefined') {
                    var E03 = new Object();
                };
                E03.E03_03 = "-20";
            };
        };


        if (typeof v2.E04 === 'undefined') {
            if (typeof E04 === 'undefined') {
                var E04 = new Array();
            }
            var e04 = new Object();
            e04.E04_01 = "-20";
            e04.E04_02 = "-20";
            e04.E04_03 = "-20";
            if (typeof E04 === 'undefined') {
                var E04 = new Array();
            }

            E04.push(e04);
        }
        else {
            for (var i = 0; i < v2.E04.length; i++) {
                var e04 = new Object();

                if ((typeof v2.E04[i].E04_01 !== 'undefined') && (u.IsGo(v2.E04[i].E04_01) == true)) {
                    e04.E04_01 = v2.E04[i].E04_01;
                }
                else {
                    e04.E04_01 = "-20";
                };

                if ((typeof v2.E04[i].E04_02 !== 'undefined') && (u.IsGo(v2.E04[i].E04_02) == true)) {
                    e04.E04_02 = v2.E04[i].E04_02;
                }
                else {
                    e04.E04_02 = "-20";
                };

                if ((typeof v2.E04[i].E04_03 !== 'undefined') && (u.IsGo(v2.E04[i].E04_03) == true)) {
                    e04.E04_03 = v2.E04[i].E04_03;
                }
                else {
                    e04.E04_03 = "-20";
                };

                if (E04 !== 'undefined') {

                }
                if (typeof E04 === 'undefined') {
                    var E04 = new Array();
                }
                E04.push(e04);
                e04 = undefined;
            }
        };
        //all of eTimes
        if (typeof v2.E05 !== 'undefined') {
            var E05 = new Object();
            E05 = v2.E05;
        };


        if (typeof v2.E06 === 'undefined') {
            if (TheCall.Props.HasPatient == true) {
                var E06_01_0 = new Object();

                E06_01_0.E06_01 = "-20";
                E06_01_0.E06_02 = "-20";
                E06_01_0.E06_03 = "-20";
                var E06 = new Object();
                E06.E06_01_0 = E06_01_0;
            }
            else  //no patient
            {
                if (typeof E06 === 'undefined') {
                    var E06 = new Object();
                };
                var E06_01_0 = new Object();
                E06_01_0.E06_01 = "-25";
                E06_01_0.E06_02 = "-25";
                E06_01_0.E06_03 = "-25";



                var E06_04_0 = new Object();
                E06_04_0.E06_08 = "-20";
                E06.E06_11 = "-25";
                E06.E06_12 = "-25";
                E06.E06_13 = "-25";

                var E06_14_0 = new Object();
                E06_14_0.E06_15 = "-25";


                E06.E06_01_0 = E06_01_0;
                E06.E06_04_0 = E06_04_0;
                E06.E06_14_0 = E06_14_0;
            }
        }
        else {


            if (typeof v2.E06.E06_01_0 === 'undefined') {
                if (typeof E06_01_0 === 'undefined') {
                    var E06_01_0 = new Object();
                };
                E06_01_0.E06_01 = "-20";
                E06_01_0.E06_02 = "-20";
                E06_01_0.E06_03 = "-20";
            }
            else {
                if ((typeof v2.E06.E06_01_0.E06_01 !== 'undefined') && (u.IsGo(v2.E06.E06_01_0.E06_01) == true)) {
                    if (typeof E06_01_0 === 'undefined') {
                        var E06_01_0 = new Object();
                    };
                    E06_01_0.E06_01 = v2.E06.E06_01_0.E06_01;
                }
                else {
                    if (typeof E06_01_0 === 'undefined') {
                        var E06_01_0 = new Object();
                    };
                    E06_01_0.E06_01 = "-20";
                };

                if ((typeof v2.E06.E06_01_0.E06_02 !== 'undefined') && (u.IsGo(v2.E06.E06_01_0.E06_02) == true)) {
                    if (typeof E06_01_0 === 'undefined') {
                        var E06_01_0 = new Object();
                    };
                    E06_01_0.E06_02 = v2.E06.E06_01_0.E06_02;
                }
                else {
                    if (typeof E06_01_0 === 'undefined') {
                        var E06_01_0 = new Object();
                    };
                    E06_01_0.E06_02 = "-20";
                };

                if ((typeof v2.E06.E06_01_0.E06_03 !== 'undefined') && (u.IsGo(v2.E06.E06_01_0.E06_03) == true)) {
                    if (typeof E06_01_0 === 'undefined') {
                        var E06_01_0 = new Object();
                    };
                    E06_01_0.E06_03 = v2.E06.E06_01_0.E06_03;
                }
                else {
                    if (typeof E06_01_0 === 'undefined') {
                        var E06_01_0 = new Object();
                    };
                    E06_01_0.E06_03 = "-20";
                }
            };


            if (typeof E06_01_0 !== 'undefined') {
                if (typeof E06 === 'undefined') {
                    var E06 = new Object();
                };
                E06.E06_01_0 = E06_01_0;
            };

            //////////////            

            if (typeof v2.E06.E06_04_0 === 'undefined') {
                if (typeof E06_04_0 === 'undefined') {
                    var E06_04_0 = new Object();
                };
                E06_04_0.E06_04 = "-20"
                E06_04_0.E06_05 = "-20"
                E06_04_0.E06_07 = "-20"
                E06_04_0.E06_08 = "-20"
            }
            else {
                if ((typeof v2.E06.E06_04_0.E06_04 !== 'undefined') && (u.IsGo(v2.E06.E06_04_0.E06_04) == true)) {
                    if (typeof E06_04_0 === 'undefined') {
                        var E06_04_0 = new Object();
                    };

                    E06_04_0.E06_04 = v2.E06.E06_04_0.E06_04;
                }
                else {
                    if (typeof E06_04_0 === 'undefined') {
                        var E06_04_0 = new Object();
                    };
                    E06_04_0.E06_04 = "-20";
                };

                if ((typeof v2.E06.E06_04_0.E06_05 !== 'undefined') && (u.IsGo(v2.E06.E06_04_0.E06_05) == true)) {
                    if (typeof E06_04_0 === 'undefined') {
                        var E06_04_0 = new Object();
                    };
                    E06_04_0.E06_05 = v2.E06.E06_04_0.E06_05;
                }
                else {
                    if (typeof E06_04_0 === 'undefined') {
                        var E06_04_0 = new Object();
                    };
                    E06_04_0.E06_05 = "-20";
                };

                if ((typeof v2.E06.E06_04_0.E06_07 !== 'undefined') && (u.IsGo(v2.E06.E06_04_0.E06_07) == true)) {
                    if (typeof E06_04_0 === 'undefined') {
                        var E06_04_0 = new Object();
                    };
                    E06_04_0.E06_07 = v2.E06.E06_04_0.E06_07;
                }
                else {
                    if (typeof E06_04_0 === 'undefined') {
                        var E06_04_0 = new Object();
                    };
                    E06_04_0.E06_07 = "-20";
                };


                if ((typeof v2.E06.E06_04_0.E06_08 !== 'undefined') && (u.IsGo(v2.E06.E06_04_0.E06_08) == true)) {
                    if (typeof E06_04_0 === 'undefined') {
                        var E06_04_0 = new Object();
                    };
                    E06_04_0.E06_08 = v2.E06.E06_04_0.E06_08;
                }
                else {
                    if (typeof E06_04_0 === 'undefined') {
                        var E06_04_0 = new Object();
                    };
                    E06_04_0.E06_08 = "-20";
                };

                if (typeof E06_04_0 !== 'undefined') {
                    if (typeof E06 === 'undefined') {
                        var E06 = new Object();
                    }
                    E06.E06_04_0 = E06_04_0;
                }
            };

            if ((typeof v2.E06.E06_06 !== 'undefined') && (u.IsGo(v2.E06.E06_06) == true)) {
                E06.E06_06 = v2.E06.E06_06;
            }
            else {
                E06.E06_06 = "-20";
            };

            if ((typeof v2.E06.E06_09 !== 'undefined') && (u.IsGo(v2.E06.E06_09) == true)) {
                E06.E06_09 = v2.E06.E06_09;
            }
            else {
                E06.E06_09 = "-20";
            };


            if ((typeof v2.E06.E06_10 !== 'undefined') && (u.IsGo(v2.E06.E06_10) == true)) {

                E06.E06_10 = v2.E06.E06_10;
            }
            else {
                E06.E06_10 = "-20";
            };

            if ((typeof v2.E06.E06_11 !== 'undefined') && (u.IsGo(v2.E06.E06_11) == true)) {
                E06.E06_11 = v2.E06.E06_11;
            }
            else {
                E06.E06_11 = "-20";
            };


            if ((typeof v2.E06.E06_12 !== 'undefined') && (u.IsGo(v2.E06.E06_12) == true)) {
                E06.E06_12 = v2.E06.E06_12;
            }
            else {
                E06.E06_12 = "-20";
            };

            if ((typeof v2.E06.E06_13 !== 'undefined') && (u.IsGo(v2.E06.E06_13) == true)) {
                E06.E06_13 = v2.E06.E06_13;
            }
            else {
                E06.E06_13 = "-20";
            };

            if (typeof v2.E06.E06_14_0 === 'undefined') {
                var E06_14_0 = new Object();
                E06_14_0.E06_14 = null;
                E06_14_0.E06_15 = "-20";
            }
            else {
                var E06_14_0 = new Object();
                if (typeof v2.E06.E06_14_0.E06_14 !== 'undefined') {
                    E06_14_0.E06_14 = v2.E06.E06_14_0.E06_14;
                };

                if ((typeof v2.E06.E06_14_0.E06_15 !== 'undefined') && (u.IsGo(v2.E06.E06_14_0.E06_15) == true)) {
                    E06_14_0.E06_15 = v2.E06.E06_14_0.E06_15;
                }
                else {
                    E06_14_0.E06_15 = "-20";
                }
            };

            if (typeof E06_14_0 !== 'undefined') {
                E06.E06_14_0 = E06_14_0;
            };

            //////////////////////

            if (typeof v2.E06.E06_16 !== 'undefined') {
                E06.E06_16 = v2.E06.E06_16;
            };


            if (typeof v2.E06.E06_17 !== 'undefined') {
                E06.E06_17 = v2.E06.E06_17;
            };

            if (typeof v2.E06.E06_19_0 === 'undefined') {
                if (typeof E06_19_0 === 'undefined') {
                    var E06_19_0 = new Object();
                };
                if ((TheCall.Props.Age > 16) && (TheCall.Props.AgeUnit == 'Years')) {
                    E06_19_0.E06_18 = "-10";
                    E06_19_0.E06_19 = "-10";
                }
            }
            else {
                if ((typeof v2.E06.E06_19_0.E06_18 !== 'undefined') && (u.IsGo(v2.E06.E06_19_0.E06_18) == true)) {
                    if (typeof E06_19_0 === 'undefined') {
                        var E06_19_0 = new Object();
                    };
                    E06_19_0.E06_18 = v2.E06.E06_19_0.E06_18;
                }
                else {
                    if (typeof E06_19_0 === 'undefined') {
                        var E06_19_0 = new Object();
                    };
                    E06_19_0.E06_18 = "-20";

                };

                if ((typeof v2.E06.E06_19_0.E06_19 !== 'undefined') && (u.IsGo(v2.E06.E06_19_0.E06_19) == true)) {
                    if (typeof E06_19_0 === 'undefined') {
                        var E06_19_0 = new Object();
                    };
                    E06_19_0.E06_19 = v2.E06.E06_19_0.E06_19;
                }
                else {
                    if (typeof E06_19_0 === 'undefined') {
                        var E06_19_0 = new Object();
                    };
                    E06_19_0.E06_19 = "-20";
                }
            };
            if (typeof E06_19_0 !== 'undefined') {
                E06.E06_19_0 = E06_19_0;
            }
        };
        if (typeof v2.E07 === 'undefined') {
            var E07 = {};
            var E07_03_0 = [];
            var E07030 = {};
            var E07_05_0 = {};
            var E07_35_0 = {};
            var E07_35_0 = {};
            E07.E07_01 = "-20";
            E07030.E07_03 = "-25";
            E07030.E07_04 = "-25";
            E07030.E07_09 = "-25";
            E07030.E07_10 = "-25";
            E07030.E07_14 = "-25";
            E07030.E07_14 = "-15";
            E07_03_0.push(E07030)

            var e = [];
            e.push("-20")
            E07.E07_15 = "0";
            if (typeof TheCall.Props.ResponseUrgency !== 'undefined') {
                if (TheCall.Props.ResponseUrgency == 'Immediate') {
                    E07.E07_33 = "980";
                };
                if (TheCall.Props.ResponseUrgency == 'NonImmediate') {
                    E07.E07_33 = "985";
                };
            }
            else {
                E07.E07_33 = "-20";
            }

            E07.E07_37 = e;
            E07.E07_34 = "-20";
            E07_35_0.E07_35 = "-20";
            var ee = [];
            ee.push(E07_35_0)
            E07.E07_35_0 = ee;
            //}
        }
        else {
            if ((typeof TheCall.Props.PatientDeadAtScene !== 'undefined') && (TheCall.Props.PatientDeadAtScene == false)) {
                if ((typeof TheCall.Props.HasPatient !== 'undefined') && (TheCall.Props.HasPatient == true)) {
                    if (typeof E07 === 'undefined') {
                        var E07 = new Object();
                    };

                    if (typeof v2.E07.E07_01 !== 'undefined') {
                        E07.E07_01 = v2.E07.E07_01;

                        if (E07.E07_01 == '720') {
                            PaymentType = "Insurance"
                        };
                        if (E07.E07_01 == '725') {
                            PaymentType = "Insurance"
                        };
                        if (E07.E07_01 == '730') {
                            PaymentType = "Insurance"
                        };
                        if (E07.E07_01 == '740') {
                            PaymentType = "Insurance"
                        };
                        if (E07.E07_01 == '750') {
                            PaymentType = "Insurance"
                        };
                        if (E07.E07_01 == '735') {
                            PaymentType = "NotBilled"
                        };
                        if (E07.E07_01 == '745') {
                            PaymentType = "SelfPay"
                        };
                    }
                    else {
                        E07.E07_01 = "-20";
                    };

                    if (typeof v2.E07.E07_02 !== 'undefined') {
                        E07.E07_02 = v2.E07.E07_02;
                    };

                    if ((typeof PaymentType !== 'undefined') && (PaymentType !== 'Insurance')) {
                        var E07_03_0 = [];
                        var E07030 = {};
                        var E07_05_0 = {};
                        var E07_11_0 = {};
                        E07.E07_01 = "-25";
                        E07.E07_02 = "-25";
                        E07030.E07_03 = "-25";
                        E07030.E07_04 = "-25";
                        E07030.E07_09 = "-25";
                        E07030.E07_10 = "-25";
                        E07030.E07_14 = "-25";
                        E07_03_0.push(E07030)

                        E07_05_0.E07_05 = "-25";
                        E07_05_0.E07_06 = "-25";
                        E07_05_0.E07_08 = "-25";
                        E07_11_0.E07_11 = "-25";
                        E07_11_0.E07_12 = "-25";
                        E07_11_0.E07_13 = "-25";
                        E07.E07_03_0 = E07_03_0;
                        E07_03_0.E07_05_0 = E07_05_0;
                        E07_03_0.E07_11_0 = E07_11_0;
                        E07.E07_03_0 = E07_03_0;
                    }
                    else {
                        if (typeof v2.E07.E07_03_0 !== 'undefined') {
                            for (var x = 0; x < v2.E07.E07_03_0.length ; x++) {
                                var e07030 = new Object();
                                if ((typeof v2.E07.E07_03_0[x].E07_03 !== 'undefined') && (u.IsGo(v2.E07.E07_03_0[x].E07_03) == true)) {
                                    e07030.E07_03 = v2.E07.E07_03_0[x].E07_03;
                                }
                                else {
                                    e07030.E07_03 = "-20"
                                };

                                if ((typeof v2.E07.E07_03_0[x].E07_04 !== 'undefined') && (u.IsGo(v2.E07.E07_03_0[x].E07_04) == true)) {
                                    e07030.E07_04 = v2.E07.E07_03_0[x].E07_04;
                                }
                                else {
                                    e07030.E07_04 = "-20"
                                };

                                if (typeof v2.E07.E07_03_0[x].E07_05_0 !== 'undefined') {
                                    if ((typeof v2.E07.E07_03_0[x].E07_05_0.E07_05 !== 'undefined') && (u.IsGo(v2.E07.E07_03_0[x].E07_05_0.E07_05) == true)) {
                                        if (typeof E0707050 === 'undefined') {
                                            var E0707050 = new Object();
                                        };

                                        E0707050.E07_05 = v2.E07.E07_03_0[x].E07_05_0.E07_05;
                                    }
                                    else {
                                        E0707050.E07_05_0.E07_05 = "-20"
                                    };

                                    if ((typeof v2.E07.E07_03_0[x].E07_05_0.E07_06 !== 'undefined') && (u.IsGo(v2.E07.E07_03_0[x].E07_05_0.E07_06) == true)) {
                                        if (typeof E0707050 === 'undefined') {
                                            var E0707050 = new Object();
                                        };
                                        E0707050.E07_06 = v2.E07.E07_03_0[x].E07_05_0.E07_06;
                                    }
                                    else {
                                        E0707050.E07_06 = "-20";
                                    };


                                    if ((typeof v2.E07.E07_03_0[x].E07_05_0.E07_07 !== 'undefined') && (u.IsGo(v2.E07.E07_03_0[x].E07_05_0.E07_07) == true)) {
                                        if (typeof E0707050 === 'undefined') {
                                            var E0707050 = new Object();
                                        };
                                        E0707050.E07_07 = v2.E07.E07_03_0[x].E07_05_0.E07_07;
                                    }
                                    else {
                                        if (typeof E0707050 === 'undefined') {
                                            var E0707050 = new Object();
                                        };
                                        E0707050.E07_07 = "-20";
                                    };

                                    if ((typeof v2.E07.E07_03_0[x].E07_05_0.E07_08 !== 'undefined') && (u.IsGo(v2.E07.E07_03_0[x].E07_05_0.E07_08) == true)) {
                                        if (typeof E0707050 === 'undefined') {
                                            var E0707050 = new Object();
                                        };
                                        E0707050.E07_08 = v2.E07.E07_03_0[x].E07_05_0.E07_08;
                                    }
                                    else {
                                        if (typeof E0707050 === 'undefined') {
                                            var E0707050 = new Object();
                                        };
                                        E0707050.E07_08 = "-20";
                                    };

                                    if (typeof E0707050 !== 'undefined') {
                                        e07030.E07_05_0 = E0707050;
                                    }
                                };

                                if ((typeof v2.E07.E07_03_0[x].E07_09 !== 'undefined') && (u.IsGo(v2.E07.E07_03_0[x].E07_09) == true)) {
                                    e07030.E07_09 = v2.E07.E07_03_0[x].E07_09;
                                }
                                else {

                                    e07030.E07_09 = "-20";
                                };

                                if ((typeof v2.E07.E07_03_0[x].E07_10 !== 'undefined') && (u.IsGo(v2.E07.E07_03_0[x].E07_10) == true)) {
                                    e07030.E07_10 = v2.E07.E07_03_0[x].E07_10;
                                }
                                else {
                                    e07030.E07_10 = "-20";
                                };

                                if (typeof v2.E07.E07_03_0[x].E07_11_0 !== 'undefined') {
                                    var E07_11_0 = new Object();

                                    if ((typeof v2.E07.E07_03_0[x].E07_11_0.E07_11 !== 'undefined') && (u.IsGo(v2.E07.E07_03_0[x].E07_11_0.E07_11) == true)) {
                                        if (typeof E07110 === 'undefined') {
                                            var E07110 = new Object();
                                        };

                                        E07110.E07_11 = v2.E07.E07_03_0[x].E07_11_0.E07_11;
                                    }
                                    else {
                                        if (typeof E07110 === 'undefined') {
                                            var E07110 = new Object();
                                        };

                                        E07110.E07_11 = "-20";
                                    };

                                    if ((typeof v2.E07.E07_03_0[x].E07_11_0.E07_12 !== 'undefined') && (u.IsGo(v2.E07.E07_03_0[x].E07_11_0.E07_12) == true)) {

                                        if (typeof E07110 === 'undefined') {
                                            var E07110 = new Object();
                                        };

                                        E07110.E07_12 = v2.E07.E07_03_0[x].E07_11_0.E07_12;
                                    }
                                    else {
                                        if (typeof E07110 === 'undefined') {
                                            var E07110 = new Object();
                                        };

                                        E07110.E07_12 = "-20";
                                    };

                                    if ((typeof v2.E07.E07_03_0[x].E07_11_0.E07_13 !== 'undefined') && (u.IsGo(v2.E07.E07_03_0[x].E07_11_0.E07_13) == true)) {
                                        if (typeof E07110 === 'undefined') {
                                            var E07110 = new Object();
                                        };

                                        E07110.E07_13 = v2.E07.E07_03_0[x].E07_11_0.E07_13;
                                    }
                                    else {
                                        if (typeof E07110 === 'undefined') {
                                            var E07110 = new Object();
                                        };

                                        E07110.E07_13 = "-20";
                                    }
                                    if (typeof E07110 !== 'undefined') {
                                        e07030.E07_11_0 = E07110;
                                    }
                                };
                                //////////////////////////////


                                if ((typeof v2.E07.E07_03_0[x].E07_14 !== 'undefined') && (u.IsGo(v2.E07.E07_03_0[x].E07_14) == true)) {
                                    e07030.E07_14 = v2.E07.E07_03_0[x].E07_14;
                                }
                                else {

                                    e07030.E07_14 = "-20";
                                };

                                if (typeof e07030 !== 'undefined') {
                                    if (typeof E07030 === 'undefined') {
                                        var E07030 = new Array();
                                    }
                                    E07030.push(e07030)
                                    e07030 = undefined;
                                }
                            };

                            if (typeof E07030 !== 'undefined') {
                                if (E07030.length > 0) {
                                    if (typeof E07 === 'undefined') {
                                        var E07 = new Object();
                                    };
                                    E07.E07_03_0 = E07030;
                                }
                            }
                        }
                    }
                }
            };//INSURANCE


            if (typeof TheCall.Props.Injury === 'undefined')//no injury
            {
                if (typeof E07 === 'undefined') {
                    var E07 = new Object();
                };
                E07.E07_15 = "-25";
            }
            else if (TheCall.Props.Age < 16) {
                if (typeof E07 === 'undefined') {
                    var E07 = new Object();
                };
                E07.E07_15 = "-25";
            }
            else {
                if ((typeof v2.E07.E07_15 !== 'undefined') && (u.IsGo(v2.E07.E07_15) == true)) {
                    if (typeof E07 === 'undefined') {
                        var E07 = new Object();
                    };
                    E07.E07_15 = v2.E07.E07_15;
                }
                else {
                    if (typeof E07 === 'undefined') {
                        var E07 = new Object();
                    };
                    E07.E07_15 = "0";
                }
            };


            if ((typeof TheCall.Props.Age !== 'undefined') && (TheCall.Props.Age <= 16)) {
                if (typeof E07 === 'undefined') {
                    var E07 = new Object();
                };

                E07.E07_16 = "-25";
                E07.E07_17 = "-25"
            }
            else {
                if ((typeof v2.E07.E07_16 !== 'undefined') && (u.IsGo(v2.E07.E07_16) == true)) {
                    if (typeof E07 === 'undefined') {
                        var E07 = new Object();
                    };
                    E07.E07_16 = v2.E07.E07_16;
                }
                if ((typeof v2.E07.E07_17 !== 'undefined') && (u.IsGo(v2.E07.E07_17) == true)) {
                    if (typeof E07 === 'undefined') {
                        var E07 = new Object();
                    };
                    E07.E07_17 = v2.E07.E07_17;
                }
            };


            if (typeof v2.E07.E07_18_0 !== 'undefined') {
                if (typeof v2.E07.E07_18_0.E07_18_01 !== 'undefined') {
                    var obj = v2.E07.E07_18_0.E07_18_01;
                    if ((typeof obj.E07_18 !== 'undefined') && (u.IsGo(obj.E07_18) == true)) {
                        if (typeof E07_18_01 === 'undefined') {
                            var E07_18_01 = new Object();
                        };

                        E07_18_01.E07_18 = obj.E07_18;
                    }
                    else {
                        if (typeof E07_18_01 === 'undefined') {
                            var E07_18_01 = new Object();
                        };
                        E07_18_01.E07_18 = "-20";
                    };

                    if ((typeof obj.E07_19 !== 'undefined') && (u.IsGo(obj.E07_19) == true)) {
                        if (typeof E07_18_01 === 'undefined') {
                            var E07_18_01 = new Object();
                        };
                        E07_18_01.E07_19 = obj.E07_19;
                    }
                    else {
                        if (typeof E07_18_01 === 'undefined') {
                            var E07_18_01 = new Object();
                        };
                        E07_18_01.E07_19 = "-20";
                    };


                    if ((typeof obj.E07_20 !== 'undefined') && (u.IsGo(obj.E07_20) == true)) {
                        if (typeof E07_18_01 === 'undefined') {
                            var E07_18_01 = new Object();
                        };

                        E07_18_01.E07_20 = obj.E07_20;
                    }
                    else {
                        if (typeof E07_18_01 === 'undefined') {
                            var E07_18_01 = new Object();
                        }
                    };


                    if (typeof E07_18_01 !== 'undefined') {
                        if (typeof E07_18_0 === 'undefined') {
                            var E07_18_0 = new Object();
                        }
                        E07_18_0.E07_18_01 = E07_18_01;
                    }
                }


                if (typeof v2.E07.E07_18_0.E07_21_0 !== 'undefined') {

                    var obj2 = v2.E07.E07_18_0.E07_21_0
                    if ((typeof obj2.E07_21 !== 'undefined') && (u.IsGo(obj2.E07_21) == true)) {
                        if (typeof E07_21_0 === 'undefined') {
                            var E07_21_0 = new Object();
                        };
                        E07_21_0.E07_21 = obj2.E07_21;

                    }
                    else {
                        if (typeof E07_21_0 === 'undefined') {
                            var E07_21_0 = new Object();
                        };
                        E07_21_0.E07_21 = "-20";
                    };

                    if ((typeof obj2.E07_22 !== 'undefined') && (u.IsGo(obj2.E07_22) == true)) {
                        if (typeof E07_21_0 === 'undefined') {
                            var E07_21_0 = new Object();
                        };
                        E07_21_0.E07_22 = obj2.E07_22;
                    }
                    else {
                        if (typeof E07_21_0 === 'undefined') {
                            var E07_21_0 = new Object();
                        };
                        E07_21_0.E07_22 = "-20";
                    };


                    if ((typeof obj2.E07_23 !== 'undefined') && (u.IsGo(obj2.E07_23) == true)) {
                        if (typeof E07_21_0 === 'undefined') {
                            var E07_21_0 = new Object();
                        };
                        E07_21_0.E07_23 = obj2.E07_23;
                    }
                    else {
                        if (typeof E07_21_0 === 'undefined') {
                            var E07_21_0 = new Object();
                        };
                        E07_21_0.E07_23 = "-20";
                    };


                    if ((typeof obj2.E07_24 !== 'undefined') && (u.IsGo(obj2.E07_24) == true)) {
                        if (typeof E07_21_0 === 'undefined') {
                            var E07_21_0 = new Object();
                        };
                        E07_21_0.E07_24 = obj2.E07_24;
                    }
                    else {
                        if (typeof E07_21_0 === 'undefined') {
                            var E07_21_0 = new Object();
                        };
                        E07_21_0.E07_24 = "-20";
                    };
                };


                if (typeof E07_21_0 !== 'undefined') {
                    if (typeof E07_18_0 === 'undefined') {
                        var E07_18_0 = new Object();
                    };
                    E07_18_0.E07_21_0 = E07_21_0;
                    if (typeof E07 === 'undefined') {
                        var E07 = new Object();
                    };

                    E07.E07_18_0 = E07_18_0;
                };
            };
            if ((typeof v2.E07.E07_25 !== 'undefined') && (u.IsGo(v2.E07.E07_25) == true)) {
                E07.E07_25 = v2.E07.E07_25;
            };

            if ((typeof v2.E07.E07_26 !== 'undefined') && (u.IsGo(v2.E07.E07_26) == true)) {
                E07.E07_26 = v2.E07.E07_26;
            };


            ////////////////////////////////
            if (typeof v2.E07.E07_27_0 !== 'undefined') {

                if ((typeof v2.E07.E07_27_0.E07_27 !== 'undefined') && (u.IsGo(v2.E07.E07_27_0.E07_27) == true)) {
                    if (typeof E07_27_0 === 'undefined') {
                        var E07_27_0 = new Object();
                    };
                    E07_27_0.E07_27 = v2.E07.E07_27_0.E07_27;
                };

                if (typeof v2.E07.E07_27_0.E07_28_0 !== 'undefined') {
                    if (typeof E07_28_0 === 'undefined') {
                        var E07_28_0 = new Object();
                    };

                    if ((typeof v2.E07.E07_27_0.E07_28_0.E07_28 !== 'undefined') && (u.IsGo(v2.E07.E07_27_0.E07_28_0.E07_28) == true)) {
                        E07_28_0.E07_28 = v2.E07.E07_27_0.E07_28_0.E07_28;
                    };


                    if ((typeof v2.E07.E07_27_0.E07_28_0.E07_29 !== 'undefined') && (u.IsGo(v2.E07.E07_27_0.E07_28_0.E07_29) == true)) {
                        if (typeof E07_28_0 === 'undefined') {
                            var E07_28_0 = new Object();
                        };
                        E07_28_0.E07_29 = v2.E07.E07_27_0.E07_28_0.E07_29;
                    };


                    if ((typeof v2.E07.E07_27_0.E07_28_0.E07_30 !== 'undefined') && (u.IsGo(v2.E07.E07_27_0.E07_28_0.E07_30) == true)) {
                        if (typeof E07_28_0 === 'undefined') {
                            var E07_28_0 = new Object();
                        };
                        E07_28_0.E07_30 = v2.E07.E07_27_0.E07_28_0.E07_30;
                    };

                    if ((typeof v2.E07.E07_27_0.E07_28_0.E07_31 !== 'undefined') && (u.IsGo(v2.E07.E07_27_0.E07_28_0.E07_31) == true)) {
                        if (typeof E07_28_0 === 'undefined') {
                            var E07_28_0 = new Object();
                        };
                        E07_28_0.E07_31 = v2.E07.E07_27_0.E07_28_0.E07_31;
                    };
                }
            };
            if (typeof E07_28_0 !== 'undefined') {
                if (typeof E07_27_0 !== 'undefined') {
                    E07_27_0.E07_28_0 = E07_28_0;
                    if (typeof E07 === 'undefined') {
                        var E07 = new Object();
                    };
                    E07.E07_27_0 = E07_27_0;
                }
            };

            if (typeof E07_27_0 !== 'undefined') {
                if (typeof E07 === 'undefined') {
                    var E07 = new Object();
                };
                E07.E07_27_0 = E07_27_0;
            };
            ////////////////////



            if ((typeof v2.E07.E07_32 !== 'undefined') && (u.IsGo(v2.E07.E07_32) == true)) {
                if (typeof E07 === 'undefined') {
                    var E07 = new Object();
                };
                E07.E07_32 = v2.E07.E07_32;
            };

            if ((typeof v2.E07.E07_33 !== 'undefined') && (u.IsGo(v2.E07.E07_33) == true)) {
                if (typeof E07 === 'undefined') {
                    var E07 = new Object();
                };
                E07.E07_33 = v2.E07.E07_33;
            };

            if ((typeof v2.E07.E07_34 !== 'undefined') && (u.IsGo(v2.E07.E07_34) == true)) {
                if (typeof E07 === 'undefined') {
                    var E07 = new Object();
                };
                E07.E07_34 = v2.E07.E07_34;
            };

            if (typeof v2.E07.E07_35_0 !== 'undefined') {
                if ((typeof v2.E07.E07_35_0.E07_35 !== 'undefined') && (u.IsGo(v2.E07.E07_35_0.E07_35) == true)) {
                    if (typeof E07_35_0 === 'undefined') {
                        var E07_35_0 = new Object();
                    };
                    E07_35_0.E07_35 = v2.E07.E07_35_0.E07_35;
                }
                else {
                    if (typeof E07_35_0 === 'undefined') {
                        var E07_35_0 = new Object();
                    };
                    E07_35_0.E07_35 = "-20"
                }
            };


            if (typeof v2.E07.E07_35_0 !== 'undefined') {
                if ((typeof v2.E07.E07_35_0.E07_36 !== 'undefined') && (u.IsGo(v2.E07.E07_35_0.E07_36) == true)) {
                    if (typeof E07_35_0 === 'undefined') {
                        var E07_35_0 = new Object();
                    };
                    E07_35_0.E07_36 = v2.E07.E07_35_0.E07_36;

                }
                else {
                    if (typeof E07_35_0 === 'undefined') {
                        var E07_35_0 = new Object();
                    };
                    E07_35_0.E07_36 = "-20"
                }
            };


            if (typeof E07_35_0 !== 'undefined') {
                var e = []
                e.push(E07_35_0)
                E07.E07_35_0 = e;
            };

            var E07_37 = [];
            if ((typeof v2.E07.E07_37 !== 'undefined') && (u.IsGo(v2.E07.E07_37) == true)) {
                E07_37 = v2.E07.E07_37;
            };
            if (typeof E07 === 'undefined') {
                var E07 = new Object();
            };
            E07.E07_37 = E07_37
        }
        //};

        if (typeof E07_34 === 'undefined') {
            if (typeof TheCall.Props.ResponseUrgency !== 'undefined') {
                if (TheCall.Props.ResponseUrgency == 'Immediate') {
                    if (typeof E07 === 'undefined') {
                        var E07 = new Object();
                    };
                    E07.E07_34 = '980';
                };
                if (TheCall.Props.ResponseUrgency == 'NonImmediate') {
                    if (typeof E07 === 'undefined') {
                        var E07 = new Object();
                    };
                    E07.E07_34 = '985';
                }
            }
        };

        if (typeof v2.E08 !== 'undefined') {

        

            if ((typeof v2.E08.E08_01 !== 'undefined') && (u.IsGo(v2.E08.E08_01) == true)) {
                if (typeof E08 === 'undefined') {
                    var E08 = new Object();
                };
                E08.E08_01 = v2.E08.E08_01;
                var OtherAgencies = v2.E08.E08_01.length;
            }
            else {
                if (typeof E08 === 'undefined') {
                    var E08 = new Object();
                }
            };

            if ((typeof v2.E08.E08_02 !== 'undefined') && (u.IsGo(v2.E08.E08_02) == true)) {
                if (typeof E08 === 'undefined') {
                    var E08 = new Object();
                };
                E08.E08_02 = v2.E08.E08_02;
            };

            if ((typeof v2.E08.E08_03 !== 'undefined') && (u.IsGo(v2.E08.E08_03) == true)) {
                if (typeof E08 === 'undefined') {
                    var E08 = new Object();
                };
                E08.E08_03 = v2.E08.E08_03;
            };

            if ((typeof v2.E08.E08_04 !== 'undefined') && (u.IsGo(v2.E08.E08_04) == true)) {
                if (typeof E08 === 'undefined') {
                    var E08 = new Object();
                };
                E08.E08_04 = v2.E08.E08_04;
            };


            if ((typeof v2.E08.E08_05 !== 'undefined') && (u.IsGo(v2.E08.E08_05) == true)) {
                if (typeof E08 === 'undefined') {
                    var E08 = new Object();
                };
                E08.E08_05 = v2.E08.E08_05;
                if (E08.E08_05 == "1120") {
                    E08.E08_06 = "0";
                }
                else {
                    if ((typeof v2.E08.E08_06 !== 'undefined') && (u.IsGo(v2.E08.E08_06) == true)) {
                        if (typeof E08 === 'undefined') {
                            var E08 = new Object();
                        };
                        E08.E08_06 = v2.E08.E08_06;

                    }
                    else {
                        if (typeof E08 === 'undefined') {
                            var E08 = new Object();
                        };
                        E08.E08_06 = "-20";
                    }
                }
            }
            else {
                if (typeof E08 === 'undefined') {
                    var E08 = new Object();
                };
                E08.E08_05 = "-20";
                E08.E08_06 = "-20";
            };



            if ((typeof v2.E08.E08_07 !== 'undefined') && (u.IsGo(v2.E08.E08_07) == true)) {
                if (typeof E08 === 'undefined') {
                    var E08 = new Object();
                };
                E08.E08_07 = v2.E08.E08_07;
            }
            else {
                if (typeof E08 === 'undefined') {
                    var E08 = new Object();
                };
                E08.E08_07 = "-20";
            };

            if ((typeof v2.E08.E08_08 !== 'undefined') && (u.IsGo(v2.E08.E08_08) == true)) {
                if (typeof E08 === 'undefined') {
                    var E08 = new Object();
                };
                E08.E08_08 = v2.E08.E08_08;
            };

            if ((typeof v2.E08.E08_09 !== 'undefined') && (u.IsGo(v2.E08.E08_09) == true)) {
                if (typeof E08 === 'undefined') {
                    var E08 = new Object();
                };
                E08.E08_09 = v2.E08.E08_09;
            };

            if ((typeof v2.E08.E08_10 !== 'undefined') && (u.IsGo(v2.E08.E08_10) == true)) {
                if (typeof E08 === 'undefined') {
                    var E08 = new Object();
                };
                E08.E08_10 = v2.E08.E08_10;
            };

            if (typeof v2.E08.E08_11_0 !== 'undefined') {
                if ((typeof v2.E08.E08_11_0.E08_11 !== 'undefined') && (u.IsGo(v2.E08.E08_11_0.E08_11) == true)) {
                    if (typeof E08_11_0 === 'undefined') {
                        var E08_11_0 = new Object();
                    };
                    E08_11_0.E08_11 = v2.E08.E08_11_0.E08_11;
                };

                if ((typeof v2.E08.E08_11_0.E08_12 !== 'undefined') && (u.IsGo(v2.E08.E08_11_0.E08_12) == true)) {
                    if (typeof E08_11_0 === 'undefined') {
                        var E08_11_0 = new Object();
                    };
                    E08_11_0.E08_12 = v2.E08.E08_11_0.E08_12;
                };



                if ((typeof v2.E08.E08_11_0.E08_14 !== 'undefined') && (u.IsGo(v2.E08.E08_11_0.E08_14) == true)) {
                    if (typeof E08_11_0 === 'undefined') {
                        var E08_11_0 = new Object();
                    };
                    E08_11_0.E08_14 = v2.E08.E08_11_0.E08_14;
                };

                if ((typeof v2.E08.E08_11_0.E08_15 !== 'undefined') && (u.IsGo(v2.E08.E08_11_0.E08_15) == true)) {
                    if (typeof E08_11_0 === 'undefined') {
                        var E08_11_0 = new Object();
                    };
                    E08_11_0.E08_15 = v2.E08.E08_11_0.E08_15;
                }
                else {
                    if (typeof E08_11_0 === 'undefined') {
                        var E08_11_0 = new Object();
                    };
                    E08_11_0.E08_15 = "-20";
                };
                if (typeof E08_11_0 !== 'undefined') {
                    if (typeof E08 === 'undefined') {
                        var E08 = new Object();
                    };
                    E08.E08_11_0 = E08_11_0
                }
            };
            if ((typeof v2.E08.E08_13 !== 'undefined') && (u.IsGo(v2.E08.E08_13) == true)) {
                if (typeof E08 === 'undefined') {
                    var E08 = new Object();
                };
                E08.E08_13 = v2.E08.E08_13;
            };
        };
        if (TheCall.Props.HasPatient == false) {

            var E09 = new Object();
            E09.E09_01 = NAArray;
            E09.E09_02 = NAArray;
            E09.E09_03 = "-25";
            E09.E09_04 = "-25";
            E09.E09_11 = "-25";
            E09.E09_12 = "-25";
            E09.E09_13 = "-25";
            E09.E09_14 = NAArray;
            E09.E09_15 = "-25";
            E09.E09_16 = "-25";

        }
        else {
            if (typeof E09 === 'undefined') {
                var E09 = new Object();
            };
         
            {
                if (typeof v2.E09 !== 'undefined') {
                    if ((typeof v2.E09.E09_01 !== 'undefined') && (u.IsGo(v2.E09.E09_01) == true)) {
                        E09.E09_01 = v2.E09.E09_01;

                        if ((typeof v2.E09.E09_02 !== 'undefined') && (u.IsGo(v2.E09.E09_02) == true)) {
                            E09.E09_02 = v2.E09.E09_02;
                        }
                        else {
                            E09.E09_02 = NRArray;
                        };

                        if ((typeof v2.E09.E09_03 !== 'undefined') && (u.IsGo(v2.E09.E09_03) == true)) {
                            E09.E09_03 = v2.E09.E09_03;
                        }
                        else {
                            E09.E09_03 = "-20";
                        }
                    }
                    else {
                        E09.E09_01 = NAArray;
                        E09.E09_02 = NAArray;
                        E09.E09_03 = "-25";
                    }

                    if ((typeof v2.E09.E09_04 !== 'undefined') && (u.IsGo(v2.E09.E09_04) == true)) {
                        E09.E09_04 = v2.E09.E09_04;
                    }
                    else {

                        E09.E09_04 = "-20";
                    };

                    if (typeof v2.E09.E09_05 !== 'undefined') {
                        E09.E09_05 = v2.E09.E09_05;
                    };

                    if (typeof v2.E09.E09_06_0 !== 'undefined') {
                        if ((typeof v2.E09.E09_06_0.E09_06 !== 'undefined') && (u.IsGo(v2.E09.E09_06_0.E09_06) == true)) {
                            if (typeof E09_06_0 === 'undefined') {
                                var E09_06_0 = new Object();
                            };
                            E09_06_0.E09_06 = v2.E09.E09_06_0.E09_06;
                        };

                        if ((typeof v2.E09.E09_06_0.E09_07 !== 'undefined') && (u.IsGo(v2.E09.E09_06_0.E09_07) == true)) {
                            if (typeof E09_06_0 === 'undefined') {
                                var E09_06_0 = new Object();
                            };
                            E09_06_0.E09_07 = v2.E09.E09_06_0.E09_07;
                        };
                        if (typeof E09_06_0 !== 'undefined') {
                            E09.E09_06_0 = E09_06_0;
                        }
                    };

                    if ((typeof v2.E09.E09_08 !== 'undefined') && (u.IsGo(v2.E09.E09_08) == true)) {

                        E09.E09_08 = v2.E09.E09_08;
                    };

                    if (typeof v2.E09.E09_09_0 !== 'undefined') {
                        if ((typeof v2.E09.E09_09_0.E09_09 !== 'undefined') && (u.IsGo(v2.E09.E09_09_0.E09_09) == true)) {
                            if (typeof E09_09_0 === 'undefined') {
                                var E09_09_0 = new Object();
                            }
                            E09_09_0.E09_09 = v2.E09.E09_09_0.E09_09;
                        };

                        if ((typeof v2.E09.E09_09_0.E09_10 !== 'undefined') && (u.IsGo(v2.E09.E09_09_0.E09_10) == true)) {
                            if (v2.E09.E09_09_0.E09_10 == "1235") {
                                E09_09_0.E09_10 = "1270"
                            };
                            if (v2.E09.E09_09_0.E09_10 == "1240") {
                                E09_09_0.E09_10 = "1275"
                            };
                            if (v2.E09.E09_09_0.E09_10 == "1245") {
                                E09_09_0.E09_10 = "1280"
                            };
                            if (v2.E09.E09_09_0.E09_10 == "1250") {
                                E09_09_0.E09_10 = "1285"
                            };

                            if (v2.E09.E09_09_0.E09_10 == "1255") {
                                E09_09_0.E09_10 = "1290"
                            };
                            if (v2.E09.E09_09_0.E09_10 == "1260") {
                                E09_09_0.E09_10 = "1295"
                            };
                            if (v2.E09.E09_09_0.E09_10 == "1265") {
                                E09_09_0.E09_10 = "1300"
                            };
                            E09_09_0.E09_10 = E09_09_0.E09_10;
                        };

                        if (typeof E09_09_0 !== 'undefined') {
                            E09.E09_09_0 = E09_09_0;
                        }
                    };

                    if ((typeof v2.E09.E09_11 !== 'undefined') && (u.IsGo(v2.E09.E09_11) == true)) {
                        E09.E09_11 = v2.E09.E09_11;

                    }
                    else {
                        E09.E09_11 = "-20";
                        E09.E09_12 = "-25";
                    };
                    if ((typeof v2.E09.E09_12 !== 'undefined') && (u.IsGo(v2.E09.E09_12) == true)) {
                        E09.E09_12 = v2.E09.E09_12;
                    }
                    else {
                        E09.E09_12 = "-20";
                    }


                    if ((typeof v2.E09.E09_13 !== 'undefined') && (u.IsGo(v2.E09.E09_13) == true)) {
                        E09.E09_13 = v2.E09.E09_13;

                        if ((typeof v2.E09.E09_14 !== 'undefined') && (u.IsGo(v2.E09.E09_14) == true)) {
                            E09.E09_14 = v2.E09.E09_14;
                        }
                        else {
                            E09.E09_14 = NRArray;
                        }
                    }
                    else {
                        E09.E09_13 = "-20";
                        var ee3 = [];
                        E09.E09_14 = NRArray;
                    };

                    if ((typeof v2.E09.E09_15 !== 'undefined') && (u.IsGo(v2.E09.E09_15) == true)) {
                        E09.E09_15 = v2.E09.E09_15;

                        if ((typeof v2.E09.E09_16 !== 'undefined') && (u.IsGo(v2.E09.E09_16) == true)) {
                            E09.E09_16 = v2.E09.E09_16;
                        }
                        else {
                            E09.E09_16 = "-20";
                        }
                    }
                    else {
                        E09.E09_15 = "-20";
                        E09.E09_16 = "-25";
                    };
                }
            }
        };
        if (TheCall.Props.HasPatient == false) {
            if (typeof E10 === 'undefined') {
                var E10 = new Object()
            };
            var c = [];
            c.push("-25")
            E10.E10_01 = "-25"
            E10.E10_03 = c;
            E10.E10_08 = c;
            E10.E10_09 = c;
        }
        else {
            if (typeof v2.E10 === 'undefined') {
                if (typeof E10 === 'undefined') {
                    var E10 = new Object()
                };
                var c = [];
                c.push("-25")
                E10.E10_01 = "-25"
                E10.E10_03 = c;
                E10.E10_08 = c;
                E10.E10_09 = c;
            }
            else {
                if (typeof E10 === 'undefined') {
                    var E10 = new Object()
                };
                if ((typeof v2.E10.E10_01 !== 'undefined') && (u.IsGo(v2.E10.E10_01) == true)) {
                    E10.E10_01 = v2.E10.E10_01;
                }
                else {
                    E10.E10_01 = v2.NOTRECORD;
                };

                if ((typeof v2.E10.E10_02 !== 'undefined') && (u.IsGo(v2.E10.E10_02) == true)) {
                    E10.E10_02 = v2.E10.E10_02;
                };

                if ((typeof v2.E10.E10_03 !== 'undefined') && (u.IsGo(v2.E10.E10_03) == true)) {
                    E10.E10_03 = v2.E10.E10_03;
                };

                if (TheCall.Props.IsVehicleInjury == false) {
                    var ee = [];
                    ee.push("-20")
                    E10.E10_08 = ee;
                }
                else {
                    if ((typeof v2.E10.E10_04 !== 'undefined') && (u.IsGo(v2.E10.E10_04) == true)) {
                        E10.E10_04 = v2.E10.E10_04;
                    };


                    if ((typeof v2.E10.E10_05 !== 'undefined') && (u.IsGo(v2.E10.E10_05) == true)) {
                        E10.E10_05 = v2.E10.E10_05;
                    };

                    if (typeof v2.E10.E10_06_0 !== 'undefined') {
                        if ((typeof v2.E10.E10_06 !== 'undefined') && (u.IsGo(v2.E10.E10_06) == true)) {

                            if (typeof E10_06_0 === 'undefined') {
                                var E10_06_0 = new Object();
                            };

                            E10_06_0.E10_06 = v2.E10.E10_06_0.E10_06;

                            if ((typeof v2.E10.E10_06_0.E10_07 !== 'undefined') && (u.IsGo(v2.E10.E10_06_0.E10_07) == true)) {
                                E10_06_0.E10_07 = v2.E10.E10_06_0.E10_07;
                            }
                            else {
                                E10_06_0.E10_07 = v2.E10.E10_06_0.E10_07;
                            }
                        }
                        else {
                            if (typeof E10_06_0 === 'undefined') {
                                var E10_06_0 = new Object();
                            };
                            E10_06_0.E10_06 = "-20"
                            E10_06_0.E10_07 = "-20"
                        }
                        if (typeof E10_06_0 !== 'undefined') {
                            E10.E10_06_0 = E10_06_0;
                        };
                    };
                    if ((typeof v2.E10.E10_08 !== 'undefined') && (u.IsGo(v2.E10.E10_08) == true)) {
                        E10.E10_08 = v2.E10.E10_08;
                    }
                    else {
                        var o = [];
                        o.push("-20")
                        E10.E10_08 = o;
                    };

                    if ((typeof v2.E10.E10_09 !== 'undefined') && (u.IsGo(v2.E10.E10_09) == true)) {
                        E10.E10_09 = v2.E10.E10_09;
                    }
                }
                if ((typeof v2.E10.E10_10 !== 'undefined') && (u.IsGo(v2.E10.E10_10) == true)) {
                    E10.E10_10 = v2.E10.E10_10;
                }
            }
        };

        if (TheCall.HasPatient == false) {
            if (typeof E11 === 'undefined') {
                var E11 = new Object();
            };
            E11.E11_01 = "-25";
            E11.E11_02 = "-25";
            E11.E11_03 = NAArray;
        }
        else {

            if (typeof v2.E11 === 'undefined') {

                if (typeof E11 === 'undefined') {
                    var E11 = new Object();
                };

                E11.E11_01 = "-25";
                E11.E11_02 = "-25";
                E11.E11_03 = NAArray;
            }
            else {

                if (typeof E11 === 'undefined') {
                    var E11 = new Object();
                };

                if ((typeof v2.E11.E11_01 !== 'undefined') && (u.IsGo(v2.E11.E11_01) == true)) {
                    E11.E11_01 = v2.E11.E11_01;
                }
                else {
                    E11.E11_01 = "-25";
                    E11.E11_02 = "-25";
                    E11.E11_03 = NAArray;
                };

                if (E11.E11_01 == "0") {

                    E11.E11_02 = "-25";
                    E11.E11_03 = NAArray;
                }
                else {

                    if ((typeof v2.E11.E11_02 !== 'undefined') && (u.IsGo(v2.E11.E11_02) == true)) {
                        E11.E11_02 = v2.E11.E11_02;
                    }
                    else {
                        E11.E11_02 = "-20";
                    };

                    if ((typeof v2.E11.E11_03 !== 'undefined') && (u.IsGo(v2.E11.E11_03) == true)) {
                        E11.E11_03 = v2.E11.E11_03;
                    }
                    else {
                        E11.E11_03 = "-20";
                    };

                    if ((typeof v2.E11.E11_04 !== 'undefined') && (u.IsGo(v2.E11.E11_04) == true)) {
                        E11.E11_04 = v2.E11.E11_04;
                    }
                    else {
                        E11.E11_04 = "-20";
                    };

                    if ((typeof v2.E11.E11_05 !== 'undefined') && (u.IsGo(v2.E11.E11_05) == true)) {
                        E11.E11_05 = v2.E11.E11_05;
                    }
                    else {
                        E11.E11_05 = "-20";
                    };

                    if ((typeof v2.E11.E11_06 !== 'undefined') && (u.IsGo(v2.E11.E11_06) == true)) {
                        E11.E11_06 = v2.E11.E11_06;
                    }
                    else {
                        E11.E11_06 = "-20";
                    };


                    if (TheCall.Props.PatientDeadAtScene == true) {
                        E11.E11_07 = "-25";
                    }
                    else {
                        if ((typeof v2.E11.E11_07 !== 'undefined') && (u.IsGo(v2.E11.E11_07) == true)) {
                            E11.E11_07 = v2.E11.E11_07;
                        }
                        else {
                            E11.E11_07 = "-10";
                        }
                    };

                    if ((typeof v2.E11.E11_08 !== 'undefined') && (u.IsGo(v2.E11.E11_08) == true)) {
                        E11.E11_08 = v2.E11.E11_08;
                    }
                    else {
                        E11.E11_08 = "-20";
                    };

                    if ((typeof v2.E11.E11_09 !== 'undefined') && (u.IsGo(v2.E11.E11_09) == true)) {
                        E11.E11_09 = v2.E11.E11_09;
                    }

                    if ((typeof v2.E11.E11_10 !== 'undefined') && (u.IsGo(v2.E11.E11_10) == true)) {
                        var ed = ["2290", "2285", "2280"];
                        if (ed.indexOf(v2.E11.E11_10) == -1) {
                            E11.E11_10 = v2.E11.E11_10;
                        }
                        else {
                            E11.E11_10 = "-25";
                        }
                    }
                    else {
                        E11.E11_10 = "-20";
                    };

                    if (TheCall.Props.PatientDeadAtScene == true) {
                        var a = ["-25"]
                        E11.E11_11 = a;
                    }
                    else {
                        if ((typeof v2.E11.E11_11 !== 'undefined') && (u.IsGo(v2.E11.E11_11) == true)) {
                            E11.E11_11 = v2.E11.E11_11;
                        }
                    }
                }
            }
        };

        if (TheCall.HasPatient == false) {
            if (typeof E12 === 'undefined') {
                var E12 = new Object();
            };
            var a = [];
            a.push("-25");
            E12.E12_01 = a;
            E12.E12_19 = a;
        }
        else {
            if (typeof v2.E12 === 'undefined') {
                if (typeof E12 === 'undefined') {
                    var E12 = new Object();
                };
                var a = [];
                a.push("-25");
                E12.E12_01 = a;
                E12.E12_19 = a;
            }
            else {
                if (typeof E12 === 'undefined') {
                    var E12 = new Object();
                };

                if ((typeof v2.E12.E12_01 !== 'undefined') && (u.IsGo(v2.E12.E12_01) == true)) {
                    E12.E12_01 = v2.E12.E12_01;
                }
                else {
                    E12.E12_01 = NRArray;
                };

                if ((typeof v2.E12.E12_02 !== 'undefined') && (u.IsGo(v2.E12.E12_02) == true)) {
                    E12.E12_02 = v2.E12.E12_02;
                };

                if ((typeof v2.E12.E12_03 !== 'undefined') && (u.IsGo(v2.E12.E12_03) == true)) {
                    E12.E12_03 = v2.E12.E12_03;
                };

                if (typeof v2.E12.E12_4_0 !== 'undefined') {

                    if ((typeof v2.E12.E12_4_0.E12_04 !== 'undefined') && (u.IsGo(v2.E12.E12_4_0.E12_04) == true)) {
                        if (typeof E12_4_0 === 'undefined') {
                            var E12_4_0 = new Object();
                        };
                        E12_4_0.E12_04 = v2.E12.E12_4_0.E12_04;
                    };

                    if ((typeof v2.E12.E12_4_0.E12_05 !== 'undefined') && (u.IsGo(v2.E12.E12_4_0.E12_05) == true)) {
                        if (typeof E12_4_0 === 'undefined') {
                            var E12_4_0 = new Object();
                        };
                        E12_4_0.E12_05 = v2.E12.E12_4_0.E12_05;
                    };


                    if ((typeof v2.E12.E12_4_0.E12_06 !== 'undefined') && (u.IsGo(v2.E12.E12_4_0.E12_06) == true)) {
                        if (typeof E12_4_0 === 'undefined') {
                            var E12_4_0 = new Object();
                        };
                        E12_4_0.E12_06 = v2.E12.E12_4_0.E12_06;
                    }
                    if (typeof E12_4_0 !== 'undefined') {

                        if (typeof E12 === 'undefined') {
                            var E12 = new Object();
                        };
                        E12.E12_4_0 = E12_4_0;
                    };
                };

                if ((typeof v2.E12.E12_07 !== 'undefined') && (u.IsGo(v2.E12.E12_07) == true)) {
                    E12.E12_07 = v2.E12.E12_07;
                };

                if ((typeof v2.E12.E12_08 !== 'undefined') && (u.IsGo(v2.E12.E12_08) == true)) {
                    E12.E12_08 = v2.E12.E12_08;
                };



                if ((typeof v2.E12.E12_09 !== 'undefined') && (u.IsGo(v2.E12.E12_09) == true)) {
                    E12.E12_09 = v2.E12.E12_09;
                };

                if ((typeof v2.E12.E12_10 !== 'undefined') && (u.IsGo(v2.E12.E12_10) == true)) {
                    E12.E12_10 = v2.E12.E12_10;
                }
                else {
                    E12.E12_10 = NRArray;
                };


                if ((typeof v2.E12.E12_11 !== 'undefined') && (u.IsGo(v2.E12.E12_11) == true)) {
                    if (typeof E12 === 'undefined') {
                        var E12 = new Object();
                    };
                    E12.E12_11 = v2.E12.E12_11;
                };

                if (typeof v2.E12.E12_12_0 !== 'undefined') {
                    for (var i = 0; i < v2.E12.E12_12_0.length; i++) {
                        if ((typeof v2.E12.E12_12_0[i].E12_12 !== 'undefined') && (u.IsGo(v2.E12.E12_12_0[i].E12_12) == true)) {
                            if (typeof E12_120 === 'undefined') {
                                var E12_120 = new Object();
                            };
                            E12_120.E12_12 = v2.E12.E12_12_0[i].E12_12;
                        };

                        if ((typeof v2.E12.E12_12_0[i].E12_13 !== 'undefined') && (u.IsGo(v2.E12.E12_12_0[i].E12_13) == true)) {
                            if (typeof E12_120 === 'undefined') {
                                var E12_120 = new Object();
                            };
                            E12_120.E12_13 = v2.E12.E12_12_0[i].E12_13;
                        }
                        else {
                            E12_120.E12_13 = "-10";
                        }

                        if (typeof E12_120 !== 'undefined') {
                            if (typeof E12a === 'undefined') {
                                var E12a = new Array();
                            }
                            E12a.push(E12_120)
                        };
                        E12_120 = undefined
                    }
                };
                if (typeof E12a !== 'undefined') {
                    if (typeof E12 === 'undefined') {
                        var E12 = new Object();
                    };
                    E12.E12_12_0 = E12a
                };

                if (typeof v2.E12.E12_14_0 !== 'undefined') {
                    for (var i = 0; i < v2.E12.E12_14_0.length; i++) {
                        var obj = v2.E12.E12_14_0[i];
                        if ((typeof obj.E12_14 !== 'undefined') && (u.IsGo(obj.E12_14) == true)) {
                            if (typeof E12_14_0 === 'undefined') {
                                var E12_14_0 = new Object();
                            };
                            E12_14_0.E12_14 = obj.E12_14;
                        };
                        if ((typeof obj.E12_17 !== 'undefined') && (u.IsGo(obj.E12_17) == true)) {
                            if (typeof E12_14_0 === 'undefined') {
                                var E12_14_0 = new Object();
                            };
                            E12_14_0.E12_17 = obj.E12_17;
                        };

                        if (typeof obj.E12_15_0 !== 'undefined') {
                            if ((typeof obj.E12_15_0.E12_15 !== 'undefined') && (u.IsGo(obj.E12_15_0.E12_15) == true)) {
                                if (typeof E12_15_0 === 'undefined') {
                                    var E12_15_0 = new Object();
                                };
                                E12_15_0.E12_15 = obj.E12_15_0.E12_15;
                            };

                            if ((typeof obj.E12_15_0.E12_16 !== 'undefined') && (u.IsGo(obj.E12_15_0.E12_16) == true)) {
                                if (typeof E12_15_0 === 'undefined') {
                                    var E12_15_0 = new Object();
                                };
                                E12_15_0.E12_16 = obj.E12_15_0.E12_16;
                            }
                        };
                        if (typeof E12_14_0 !== 'undefined') {
                            var e1214 = new Object()
                            e1214 = E12_14_0;
                            if (typeof E12_15_0 !== 'undefined') {
                                e1214.E12_15_0 = E12_15_0;
                                E12_15_0 = undefined;
                            };

                            E12_14_0 = undefined;
                            if (typeof e1214Array === 'undefined') {
                                e1214Array = new Array();
                            };
                            e1214Array.push(e1214)
                        }
                    };
                    if (typeof e1214Array !== 'undefined') {
                        if (e1214Array.length > 0) {
                            E12.E12_14_0 = e1214Array;
                        }
                    }
                };

                if ((typeof v2.E12.E12_17 !== 'undefined') && (u.IsGo(v2.E12.E12_17) == true)) {
                    E12.E12_17 = v2.E12.E12_17;
                };

                if ((typeof v2.E12.E12_18 !== 'undefined') && (u.IsGo(v2.E12.E12_18) == true)) {
                    E12.E12_18 = v2.E12.E12_18;
                };

                if ((typeof v2.E12.E12_19 !== 'undefined') && (u.IsGo(v2.E12.E12_19) == true)) {
                    E12.E12_19 = v2.E12.E12_19;
                }
                else {
                    var d = [];
                    d.push("-20")
                    E12.E12_19 = d;
                };

                if (TheCall.Props.Gender == 'Male') {
                    E12.E12_20 = '-25'
                }
                else {
                    if ((typeof v2.E12.E12_20 !== 'undefined') && (u.IsGo(v2.E12.E12_20) == true)) {
                        E12.E12_20 = v2.E12.E12_20;
                    }
                    else {
                        if (TheCall.Props.Gender == 'Unknown (Unable to Determine)') {
                            E12.E12_20 = '-10'
                        }
                        else {
                            E12.E12_20 = '-10'
                        };
                    }
                }
            }
        };
        if ((typeof v2.E13 !== 'undefined') && (v2.E13 !== null)) {
            if (typeof v2.E13.E13_01 !== 'undefined') {
                var E13 = new Object();
                E13.E13_01 = v2.E13.E13_01;
            }
            else {
                var E13 = new Object();
                E13.E13_01 = "-20";
            }
        };

        ////////////////REMOVE
        if (TheCall.Props.HasPatient == true) {
            if (typeof v2.E14 !== 'undefined') {
                for (var i = 0; i < v2.E14.length; i++) {
                    var obj = v2.E14[i];
                    var e14a = new Object();
                    if ((typeof obj.E14_01 !== 'undefined') && (u.IsGo(obj.E14_01) == true)) {
                        e14a.E14_01 = obj.E14_01
                    };

                    if ((typeof obj.E14_02 !== 'undefined') && (u.IsGo(obj.E14_02) == true)) {
                        e14a.E14_02 = obj.E14_02;
                    };

                    if ((typeof obj.E14_03 !== 'undefined') && (u.IsGo(obj.E14_03) == true)) {
                        e14a.E14_03 = obj.E14_03;
                    };


                    if (typeof obj.E14_04_0 !== 'undefined') {
                        if ((typeof obj.E14_04_0.E14_04 !== 'undefined') && (u.IsGo(obj.E14_04_0.E14_04) == true)) {
                            if (typeof E14_04_0 === 'undefined') {
                                var E14_04_0 = new Object();
                            };
                            E14_04_0.E14_04 = obj.E14_04_0.E14_04;
                        };

                        if ((typeof obj.E14_04_0.E14_05 !== 'undefined') && (u.IsGo(obj.E14_04_0.E14_05) == true)) {
                            if (typeof E14_04_0 === 'undefined') {
                                var E14_04_0 = new Object();
                            };
                            E14_04_0.E14_05 = obj.E14_04_0.E14_05;
                        };

                        if ((typeof obj.E14_04_0.E14_06 !== 'undefined') && (u.IsGo(obj.E14_04_0.E14_06) == true)) {
                            if (typeof E14_04_0 === 'undefined') {
                                var E14_04_0 = new Object();
                            };
                            E14_04_0.E14_06 = obj.E14_04_0.E14_06;
                        }
                    };
                    if (typeof E14_04_0 !== 'undefined') {
                        e14a.E14_04_0 = E14_04_0;
                        E14_04_0 = undefined;
                    };


                    if ((typeof obj.E14_07 !== 'undefined') && (u.IsGo(obj.E14_07) == true)) {
                        e14a.E14_07 = obj.E14_07;
                    };

                    if ((typeof obj.E14_08 !== 'undefined') && (u.IsGo(obj.E14_08) == true)) {
                        e14a.E14_08 = obj.E14_08;
                    };

                    if ((typeof obj.E14_09 !== 'undefined') && (u.IsGo(obj.E14_09) == true)) {
                        e14a.E14_09 = obj.E14_09;
                    };

                    if ((typeof obj.E14_10 !== 'undefined') && (u.IsGo(obj.E14_10) == true)) {
                        e14a.E14_10 = obj.E14_10;
                    };

                    if ((typeof obj.E14_11 !== 'undefined') && (u.IsGo(obj.E14_11) == true)) {
                        e14a.E14_11 = obj.E14_11;
                    };

                    if ((typeof obj.E14_12 !== 'undefined') && (u.IsGo(obj.E14_12) == true)) {
                        e14a.E14_12 = obj.E14_12;
                    };

                    if ((typeof obj.E14_13 !== 'undefined') && (u.IsGo(obj.E14_13) == true)) {
                        e14a.E14_13 = obj.E14_13;
                    };

                    if ((typeof obj.E14_14 !== 'undefined') && (u.IsGo(obj.E14_14) == true)) {
                        e14a.E14_14 = obj.E14_14;
                    };
                    /////////////////////////////////////////////

                    if (typeof obj.E14_15_0 !== 'undefined') {
                        if ((typeof obj.E14_15_0.E14_15 !== 'undefined') && (u.IsGo(obj.E14_15_0.E14_15) == true)) {
                            if (typeof E14_15_0 === 'undefined') {
                                var E14_15_0 = new Object();
                            };
                            E14_15_0.E14_15 = obj.E14_15_0.E14_15;
                        };

                        if ((typeof obj.E14_15_0.E14_16 !== 'undefined') && (u.IsGo(obj.E14_15_0.E14_16) == true)) {
                            if (typeof E14_15_0 === 'undefined') {
                                var E14_15_0 = new Object();
                            };
                            E14_15_0.E14_16 = obj.E14_15_0.E14_16;

                        };

                        if ((typeof obj.E14_15_0.E14_17 !== 'undefined') && (u.IsGo(obj.E14_15_0.E14_17) == true)) {
                            if (typeof E14_15_0 === 'undefined') {
                                var E14_15_0 = new Object();
                            };
                            E14_15_0.E14_17 = obj.E14_15_0.E14_17;

                        };

                        if ((typeof obj.E14_15_0.E14_18 !== 'undefined') && (u.IsGo(obj.E14_15_0.E14_18) == true)) {
                            if (typeof E14_15_0 === 'undefined') {
                                var E14_15_0 = new Object();
                            };
                            E14_15_0.E14_18 = obj.E14_15_0.E14_18;
                        };


                        if (typeof E14_15_0 !== 'undefined') {
                            e14a.E14_15_0 = E14_15_0;
                        }
                    };
                    /////////////////////////////////////////////

                    if ((typeof obj.E14_19 !== 'undefined') && (u.IsGo(obj.E14_19) == true)) {
                        e14a.E14_19 = obj.E14_19;
                    };

                    /////////////////////////////////////////////
                    //E14_20_0

                    if (typeof obj.E14_20_0 !== 'undefined') {
                        if ((typeof obj.E14_20_0.E14_20 !== 'undefined') && (u.IsGo(obj.E14_20_0.E14_20) == true)) {
                            if (typeof E14_20_0 === 'undefined') {
                                var E14_20_0 = new Object();
                            };
                            E14_20_0.E14_20 = obj.E14_20_0.E14_20;
                        };

                        if ((typeof obj.E14_20_0.E14_21 !== 'undefined') && (u.IsGo(obj.E14_20_0.E14_21) == true)) {
                            if (typeof E14_20_0 === 'undefined') {
                                var E14_20_0 = new Object();
                            };
                            E14_20_0.E14_21 = obj.E14_20_0.E14_21;
                        };
                        if (typeof E14_20_0 !== 'undefined') {
                            e14a.E14_20_0 = E14_20_0;
                        }
                    };
                    /////////////////////////////////////////////

                    if ((typeof obj.E14_22 !== 'undefined') && (u.IsGo(obj.E14_22) == true)) {
                        e14a.E14_22 = obj.E14_22;
                    };
                    if ((typeof obj.E14_23 !== 'undefined') && (u.IsGo(obj.E14_23) == true)) {
                        e14a.E14_23 = obj.E14_23;
                    };

                    //Was a Stroke Reported?
                    if ((typeof obj.E14_24 !== 'undefined') && (u.IsGo(obj.E14_24) == true)) {
                        e14a.E14_24 = obj.E14_24;
                    }
                    else {
                        e14a.E14_24 = "-25"
                        if (typeof obj.E03 !== 'undefined') {
                            if (typeof E03.E03_01 !== 'undefined') {
                                if (E03.E03_01 == '535') {  //if Complaint == Stroke
                                    e14a.E14_24 = "-15"
                                }
                                else {
                                    //e14a.E14_24 = "-25"
                                }
                            }
                        }
                    };

                    if ((typeof obj.E14_25 !== 'undefined') && (u.IsGo(obj.E14_25) == true)) {
                        e14a.E14_25 = obj.E14_25;

                    }
                    else {
                        e14a.E14_25 = "-25";
                        if (typeof obj.E03 !== 'undefined') {
                            if (typeof E03.E03_01 !== 'undefined') {
                                if (E03.E03_01 == '535') {
                                    e14a.E14_25 = "-15"
                                }
                                else {
                                    //  e14a.E14_25 = "-25";
                                };
                            }
                        }
                    };

                    if ((typeof obj.E14_26 !== 'undefined') && (u.IsGo(obj.E14_26) == true)) {
                        e14a.E14_26 = obj.E14_26;
                    };

                    if ((typeof obj.E14_27 !== 'undefined') && (u.IsGo(obj.E14_27) == true)) {
                        e14a.E14_27 = obj.E14_27;
                    };

                    if ((typeof obj.E14_28 !== 'undefined') && (u.IsGo(obj.E14_28) == true)) {
                        e14a.E14_28 = obj.E14_28;
                    };

                    if (typeof E14Array === 'undefined') {
                        var E14Array = new Array();
                    };
                    E14Array.push(e14a)
                    e14a = undefined;
                };

                if (typeof E14Array !== 'undefined') {
                    if (E14Array.length > 0) {
                        if (typeof E14 === 'undefined') {
                            var E14 = new Array();
                        };
                        E14 = E14Array;
                    }
                }
            }
        };

        if (TheCall.Props.HasPatient == false) {
            if (typeof E15 === 'undefined') {
                var E15 = new Object();
            }
            var a = [];
            a.push("-25");
            E15.E15_01 = a;
        }
        else {
            if (typeof v2.E15 === 'undefined') {
                if (typeof E15 === 'undefined') {
                    var E15 = new Object();
                }
                var a = [];
                a.push("-20");
                E15.E15_01 = a;
            }
            else {
                if ((typeof v2.E15.E15_01 !== 'undefined') && (u.IsGo(v2.E15.E15_01) == true)) {
                    if (typeof E15 === 'undefined') {
                        var E15 = new Object();
                    }
                    E15.E15_01 = v2.E15.E15_01;
                };

                if ((typeof v2.E15.E15_02 !== 'undefined') && (u.IsGo(v2.E15.E15_02) == true)) {
                    if (typeof E15 === 'undefined') {
                        var E15 = new Object();
                    }
                    E15.E15_02 = v2.E15.E15_02;
                };

                if ((typeof v2.E15.E15_03 !== 'undefined') && (u.IsGo(v2.E15.E15_03) == true)) {
                    if (typeof E15 === 'undefined') {
                        var E15 = new Object();
                    }
                    E15.E15_03 = v2.E15.E15_03;
                };


                if ((typeof v2.E15.E15_04 !== 'undefined') && (u.IsGo(v2.E15.E15_04) == true)) {
                    if (typeof E15 === 'undefined') {
                        var E15 = new Object();
                    }
                    E15.E15_04 = v2.E15.E15_04;
                };


                if ((typeof v2.E15.E15_05 !== 'undefined') && (u.IsGo(v2.E15.E15_05) == true)) {
                    if (typeof E15 === 'undefined') {
                        var E15 = new Object();
                    }
                    E15.E15_05 = v2.E15.E15_05;
                };


                if ((typeof v2.E15.E15_06 !== 'undefined') && (u.IsGo(v2.E15.E15_06) == true)) {
                    if (typeof E15 === 'undefined') {
                        var E15 = new Object();
                    }
                    E15.E15_06 = v2.E15.E15_06;
                };


                if ((typeof v2.E15.E15_07 !== 'undefined') && (u.IsGo(v2.E15.E15_07) == true)) {
                    if (typeof E15 === 'undefined') {
                        var E15 = new Object();
                    }
                    E15.E15_07 = v2.E15.E15_07;
                };


                if ((typeof v2.E15.E15_08 !== 'undefined') && (u.IsGo(v2.E15.E15_08) == true)) {
                    if (typeof E15 === 'undefined') {
                        var E15 = new Object();
                    }
                    E15.E15_08 = v2.E15.E15_08;
                };


                if ((typeof v2.E15.E15_09 !== 'undefined') && (u.IsGo(v2.E15.E15_09) == true)) {
                    if (typeof E15 === 'undefined') {
                        var E15 = new Object();
                    }
                    E15.E15_09 = v2.E15.E15_09;
                };


                if ((typeof v2.E15.E15_10 !== 'undefined') && (u.IsGo(v2.E15.E15_10) == true)) {
                    if (typeof E15 === 'undefined') {
                        var E15 = new Object();
                    }
                    E15.E15_10 = v2.E15.E15_10;
                };


                if ((typeof v2.E15.E15_11 !== 'undefined') && (u.IsGo(v2.E15.E15_11) == true)) {
                    if (typeof E15 === 'undefined') {
                        var E15 = new Object();
                    }
                    E15.E15_11 = v2.E15.E15_11;
                }
            }
        };

        if (TheCall.Props.HasPatient == false) {

        }
        else {

            if (typeof v2.E16 === 'undefined') {
            }
            else {

                if ((typeof v2.E16.E16_01 !== 'undefined') && (u.IsGo(v2.E16.E16_01) == true)) {
                    if (typeof E16 === 'undefined') {
                        var E16 = new Object();
                    }
                    E16.E16_01 = v2.E16.E16_01;
                };

                if ((typeof v2.E16.E16_02 !== 'undefined') && (u.IsGo(v2.E16.E16_02) == true)) {
                    if (typeof E16 === 'undefined') {
                        var E16 = new Object();
                    }
                    E16.E16_02 = v2.E16.E16_02;
                };
                var nr = [];
                nr.push("-20")
                if (typeof v2.E16.E16_00_0 !== 'undefined') {
                    for (var i = 0; i < v2.E16.E16_00_0.length; i++) {
                        var obj = v2.E16.E16_00_0[i];
                        if ((typeof obj.E16_03 !== 'undefined') && (u.IsGo(obj.E16_03) == true)) {
                            var E16_00_0 = new Object();
                            E16_00_0.E16_03 = obj.E16_03;

                            if ((typeof obj.E16_04 !== 'undefined') && (u.IsGo(obj.E16_04) == true)) {
                                E16_00_0.E16_04 = obj.E16_04;
                            }


                            if ((typeof obj.E16_05 !== 'undefined') && (u.IsGo(obj.E16_05) == true)) {
                                E16_00_0.E16_05 = obj.E16_05;
                            }


                            if ((typeof obj.E16_06 !== 'undefined') && (u.IsGo(obj.E16_06) == true)) {
                                E16_00_0.E16_06 = obj.E16_06;
                            }


                            if ((typeof obj.E16_07 !== 'undefined') && (u.IsGo(obj.E16_07) == true)) {
                                E16_00_0.E16_07 = obj.E16_07;
                            }


                            if ((typeof obj.E16_09 !== 'undefined') && (u.IsGo(obj.E16_09) == true)) {
                                E16_00_0.E16_09 = obj.E16_09;
                            }


                            if ((typeof obj.E16_10 !== 'undefined') && (u.IsGo(obj.E16_10) == true)) {
                                E16_00_0.E16_10 = obj.E16_10;
                            }

                            if ((typeof obj.E16_11 !== 'undefined') && (u.IsGo(obj.E16_11) == true)) {
                                E16_00_0.E16_11 = obj.E16_11;
                            }


                            if ((typeof obj.E16_12 !== 'undefined') && (u.IsGo(obj.E16_12) == true)) {
                                E16_00_0.E16_12 = obj.E16_12;
                            }

                            if ((typeof obj.E16_13 !== 'undefined') && (u.IsGo(obj.E16_13) == true)) {
                                E16_00_0.E16_13 = obj.E16_13;
                            }


                            if ((typeof obj.E16_14 !== 'undefined') && (u.IsGo(obj.E16_14) == true)) {
                                E16_00_0.E16_14 = obj.E16_14;
                            }


                            if ((typeof obj.E16_15 !== 'undefined') && (u.IsGo(obj.E16_15) == true)) {
                                E16_00_0.E16_15 = obj.E16_15;
                            }


                            if ((typeof obj.E16_16 !== 'undefined') && (u.IsGo(obj.E16_16) == true)) {
                                E16_00_0.E16_16 = obj.E16_16;
                            }


                            if ((typeof obj.E16_17 !== 'undefined') && (u.IsGo(obj.E16_17) == true)) {
                                E16_00_0.E16_17 = obj.E16_17;
                            }


                            if ((typeof obj.E16_18 !== 'undefined') && (u.IsGo(obj.E16_18) == true)) {
                                E16_00_0.E16_18 = obj.E16_18;
                            }


                            if ((typeof obj.E16_19 !== 'undefined') && (u.IsGo(obj.E16_19) == true)) {
                                E16_00_0.E16_19 = obj.E16_19;
                            }


                            if ((typeof obj.E16_20 !== 'undefined') && (u.IsGo(obj.E16_20) == true)) {
                                E16_00_0.E16_20 = obj.E16_20;
                            }


                            if ((typeof obj.E16_21 !== 'undefined') && (u.IsGo(obj.E16_21) == true)) {
                                E16_00_0.E16_21 = obj.E16_21;
                            }


                            if ((typeof obj.E16_22 !== 'undefined') && (u.IsGo(obj.E16_22) == true)) {
                                E16_00_0.E16_22 = obj.E16_22;
                            }

                            if ((typeof obj.E16_23 !== 'undefined') && (u.IsGo(obj.E16_23) == true)) {
                                E16_00_0.E16_23 = obj.E16_23;
                            }

                            if ((typeof obj.E16_24 !== 'undefined') && (u.IsGo(obj.E16_24) == true)) {
                                E16_00_0.E16_24 = obj.E16_24;
                            }
                            if (typeof E16010 === 'undefined') {
                                var E16010 = new Array()
                            };
                            E16010.push(E16_00_0);

                            E16_00_0 = undefined;
                        };

                    };//date time assessment
                };


                if (typeof E16010 !== 'undefined') {
                    if (E16010.length > 0) {
                        if (typeof E16 === 'undefined') {
                            var E16 = new Object()
                        }
                        E16.E16_00_0 = E16010;
                    }
                }
            }
        };

        if (TheCall.Props.HasPatient == true) {
            if (typeof v2.E17 !== 'undefined') {
                for (var i = 0; i < v2.E17.length; i++) {

                    if ((typeof v2.E17[i] !== 'undefined') && (u.IsGo(v2.E17[i]) == true)) {
                        if (typeof e17 === 'undefined') {
                            var e17 = new Object()
                        };
                        e17.E17_01 = v2.E17[i];
                    }
                    if (typeof e17 !== 'undefined') {

                        if (typeof E17 === 'undefined') {
                            var E17 = new Array();
                        };
                        E17.push(e17)
                        e17 = undefined
                    }
                }
            }
        };
        if (TheCall.Props.HasPatient == false) {
            if (typeof E18 === 'undefined') {
                var E18 = new Array()
            };
            var a = []
            a.push("-25")
            var e18 = new Object();
            e18.E18_03 = "-25";
            e18.E18_08 = a;
            E18.push(e18)
        }
        else {
            if (typeof v2.E18 === 'undefined') {

                if (typeof E18 === 'undefined') {
                    var E18 = new Array()
                };
                var a = []
                a.push("-25")
                var e18 = new Object();
                e18.E18_03 = "-25";
                e18.E18_08 = a;
                //e18.e18_11 = a;                
                E18.push(e18);

            }
            else {

                for (var i = 0; i < v2.E18.length; i++) {

                    var obj = v2.E18[i];
                    if ((typeof obj.E18_01 !== 'undefined') && (u.IsGo(obj.E18_01) == true)) {
                        var _E18 = new Object();
                        _E18.E18_01 = obj.E18_01;

                        if ((typeof obj.E18_02 !== 'undefined') && (u.IsGo(obj.E18_02) == true)) {
                            _E18.E18_02 = obj.E18_02;
                        }
                        else {
                            _E18.E18_02 = "-20";
                        };


                        if ((typeof obj.E18_03 !== 'undefined') && (u.IsGo(obj.E18_03) == true)) {
                            _E18.E18_03 = obj.E18_03;
                        }
                        else {
                            _E18.E18_03 = "-20";
                        };


                        if ((typeof obj.E18_04 !== 'undefined') && (u.IsGo(obj.E18_04) == true)) {
                            _E18.E18_04 = obj.E18_04;
                        }
                        else {
                            _E18.E18_04 = "-20";
                        };

                        if (typeof obj.E18_05_0 !== 'undefined') {

                            if ((typeof obj.E18_05_0.E18_05 !== 'undefined') && (u.IsGo(obj.E18_05_0.E18_05) == true)) {
                                if (typeof E18_05_0 === 'undefined') {
                                    var E18_05_0 = new Object();
                                };
                                E18_05_0.E18_05 = obj.E18_05_0.E18_05;

                                if ((typeof obj.E18_05_0.E18_06 !== 'undefined') && (u.IsGo(obj.E18_05_0.E18_06) == true)) {
                                    E18_05_0.E18_06 = obj.E18_05_0.E18_06;
                                }
                            };
                            if (typeof E18_05_0 !== 'undefined') {
                                _E18.E18_05_0 = E18_05_0;
                            }
                        };

                        if ((typeof obj.E18_07 !== 'undefined') && (u.IsGo(obj.E18_07) == true)) {
                            _E18.E18_07 = obj.E18_07;
                        }
                        else {
                            _E18.E18_07 = "-20";
                        };

                        if ((typeof obj.E18_08 !== 'undefined') && (u.IsGo(obj.E18_08) == true)) {
                            _E18.E18_08 = obj.E18_08;
                        }
                        else {
                            _E18.E18_08 = "-20";
                        };

                        if ((typeof obj.E18_09 !== 'undefined') && (u.IsGo(obj.E18_09) == true)) {
                            _E18.E18_09 = obj.E18_09;
                        }
                        else {
                            _E18.E18_09 = "-20";
                        };


                        if ((typeof obj.E18_10 !== 'undefined') && (u.IsGo(obj.E18_10) == true)) {
                            _E18.E18_10 = obj.E18_10;
                        }
                        else {
                            _E18.E18_10 = "-20";
                        };


                        if ((typeof obj.E18_11 !== 'undefined') && (u.IsGo(obj.E18_11) == true)) {
                            _E18.E18_11 = obj.E18_11;
                        }
                        else {
                            if (_E18.E18_10 == '4490') {
                                _E18.E18_11 = "-25";
                            }
                            else {
                                _E18.E18_11 = "-20";
                            }

                        };
                    }
                    if (typeof _E18 !== 'undefined') {
                        if (typeof E18A === 'undefined') {
                            var E18A = new Array();
                        };
                        E18A.push(_E18);
                        _E18 = undefined;
                    }
                };
                if (typeof E18A === 'undefined') {
                    var E18 = new Object();
                    E18 = null;
                }
                else {
                    if (E18A.length > 0) {
                        var E18 = new Array();
                        E18 = E18A;
                    }
                    else {
                        E18 = null;
                    }
                }
            }
        };

        if (TheCall.Props.HasPatient == false) {
            if (typeof E19 === 'undefined') {
                var E19 = new Object()
            };

            if (typeof E19_010 === 'undefined') {
                var E19_010 = new Array()
            };
            var a = []
            var e19a = new Object();
            a.push("-25")
            e19a.E19_03 = "-25";
            e19a.E19_05 = "-25";
            e19a.E19_06 = "-25";
            e19a.E19_07 = a;
            E19_010.push(e19a)
            E19.E19_01_0 = E19_010;
        }
        else {

            if (typeof v2.E19 === 'undefined') {
                if (typeof E19 === 'undefined') {
                    var E19 = new Object()
                };

                if (typeof E19_01_0 === 'undefined') {
                    var E19_01_0 = new Array()
                };
                var a = []
                a.push("-25")
                E19_01_0.E19_03 = "-25";
                E19_01_0.E19_05 = "-25";
                E19_01_0.E19_06 = "-25";
                E19_01_0.E19_07 = a;
                E19.E19_01_0 = E19_01_0;
            }
            else {

                if (typeof v2.E19.E19_01_0 !== 'undefined') {
                    for (var i = 0; i < v2.E19.E19_01_0.length; i++) {
                        if (typeof v2.E19.E19_01_0[i] !== 'undefined') {
                            var obj = v2.E19.E19_01_0[i];
                            if ((typeof obj.E19_01 !== 'undefined') && (u.IsGo(obj.E19_01) == true)) {
                                var e1901 = new Object();
                                e1901.E19_01 = obj.E19_01;

                                if ((typeof obj.E19_02 !== 'undefined') && (u.IsGo(obj.E19_02) == true)) {
                                    e1901.E19_02 = obj.E19_02;
                                };

                                if ((typeof obj.E19_03 !== 'undefined') && (u.IsGo(obj.E19_03) == true)) {
                                    e1901.E19_03 = obj.E19_03;
                                };

                                if ((typeof obj.E19_04 !== 'undefined') && (u.IsGo(obj.E19_04) == true)) {
                                    e1901.E19_04 = obj.E19_04;
                                };
                                if ((typeof obj.E19_05 !== 'undefined') && (u.IsGo(obj.E19_05) == true)) {
                                    e1901.E19_05 = obj.E19_05;
                                }
                                else {
                                    e1901.E19_05 = "-20";
                                };

                                if ((typeof obj.E19_06 !== 'undefined') && (u.IsGo(obj.E19_06) == true)) {
                                    e1901.E19_06 = obj.E19_06;
                                }
                                else {
                                    e1901.E19_06 = "-20";
                                };
                                if ((typeof obj.E19_07 !== 'undefined') && (u.IsGo(obj.E19_07) == true)) {
                                    e1901.E19_07 = obj.E19_07;
                                }
                                else {
                                    e1901.E19_07 = NRArray;
                                };
                                if ((typeof obj.E19_08 !== 'undefined') && (u.IsGo(obj.E19_08) == true)) {
                                    e1901.E19_08 = obj.E19_08;
                                };
                                if ((typeof obj.E19_09 !== 'undefined') && (u.IsGo(obj.E19_09) == true)) {
                                    e1901.E19_09 = obj.E19_09;
                                };
                                if ((typeof obj.E19_10 !== 'undefined') && (u.IsGo(obj.E19_10) == true)) {
                                    e1901.E19_10 = obj.E19_10;
                                };
                                if ((typeof obj.E19_11 !== 'undefined') && (u.IsGo(obj.E19_11) == true)) {
                                    e1901.E19_11 = obj.E19_11;
                                };
                                if (typeof E19010 === 'undefined') {
                                    var E19010 = new Array();
                                };
                                E19010.push(e1901);


                                if ((typeof obj.E19_13 !== 'undefined') && (u.IsGo(obj.E19_13) == true)) {
                                    if (typeof eA13 === 'undefined') {
                                        var eA13 = new Array()
                                    }
                                    eA13 = obj.E19_13;
                                };

                                if ((typeof obj.E19_14 !== 'undefined') && (u.IsGo(obj.E19_14) == true)) {
                                    if (typeof eA14 === 'undefined') {
                                        var eA14 = new Array()
                                    }

                                    eA14 = obj.E19_14;
                                };
                            }
                        }
                    };

                    if ((typeof v2.E19.E19_12 !== 'undefined') && (u.IsGo(v2.E19.E19_12) == true)) {
                        if (typeof eA12 === 'undefined') {
                            var eA12 = new Array()
                        };
                        eA12 = v2.E19.E19_12;
                    };

                    if (typeof E19010 !== 'undefined') {
                        if (E19010.length > 0) {
                            if (typeof E19 === 'undefined') {
                                var E19 = new Object();
                            };

                            E19.E19_01_0 = E19010;
                        }
                    };

                    if (typeof v2.E19.E19_12 !== 'undefined') {
                        if (eA12.length > 0) {
                            E19.E19_12 = eA12
                        }
                    };

                    if (typeof eA13 !== 'undefined') {
                        if (eA13.length > 0) {
                            E19.E19_13 = eA13
                        }
                    };
                    if (typeof eA14 !== 'undefined') {
                        if (eA14.length > 0) {
                            E19.E19_14 = eA14
                        }
                    };


                }
            }
        };


        if (TheCall.Props.HasPatient == false) {
            var E20 = new Object;
            var E20030 = new Object;
            E20.E20_02 = "-20";
            E20030.E20_07 = "-25";
            E20.E20_03_0 = E20030;
            if (typeof v2.E20 !== 'undefined') {
                if (typeof v2.E20.E20_10 !== 'undefined') {
                    E20.E20_10 = v2.E20.E20_10;
                }
            }
            E20.E20_14 = "-25";
            E20.E20_16 = "-25";
            E20.E20_17 = "-25";
        };

        if (TheCall.Props.HasTransport == false) {
            var E20 = new Object;
            var E20030 = new Object;
            E20.E20_02 = "-20";
            E20030.E20_07 = "-25";
            E20.E20_03_0 = E20030;
            if (typeof v2.E20 !== 'undefined') {
                if (typeof v2.E20.E20_10 !== 'undefined') {
                    E20.E20_10 = v2.E20.E20_10;
                }
            }
            E20.E20_14 = "-25";
            E20.E20_16 = "-25";
            E20.E20_17 = "-25";
        };


        if (typeof v2.E20 !== 'undefined') {
            if (typeof E20 === 'undefined') {
                var E20 = new Object()
            };
            if ((typeof v2.E20.E20_01 !== 'undefined') && (u.IsGo(v2.E20.E20_01) == true)) {
                E20.E20_01 = v2.E20.E20_01;
            }
            else {
                E20.E20_01 = "-20";
            };

            if ((typeof v2.E20.E20_02 !== 'undefined') && (u.IsGo(v2.E20.E20_02) == true)) {
                E20.E20_02 = v2.E20.E20_02;
            }
            else {
                E20.E20_02 = "-20";
            };
            if (typeof v2.E20.E20_03_0 === 'undefined') {
                if (typeof E20030 === 'undefined')
                { var E20030 = new Object() };
                E20030.E20_07 = "-20";
            }
            else {
                if ((typeof v2.E20.E20_03_0.E20_03 !== 'undefined') && (u.IsGo(v2.E20.E20_03_0.E20_03) == true)) {
                    if (typeof E20030 === 'undefined')
                    { var E20030 = new Object() }
                    E20030.E20_03 = v2.E20.E20_03_0.E20_03;
                };

                if ((typeof v2.E20.E20_03_0.E20_04 !== 'undefined') && (u.IsGo(v2.E20.E20_03_0.E20_04) == true)) {
                    if (typeof E20030 === 'undefined')
                    { var E20030 = new Object() }
                    E20030.E20_04 = v2.E20.E20_03_0.E20_04;
                };

                if ((typeof v2.E20.E20_03_0.E20_05 !== 'undefined') && (u.IsGo(v2.E20.E20_03_0.E20_05) == true)) {
                    if (typeof E20030 === 'undefined')
                    { var E20030 = new Object() }
                    E20030.E20_05 = v2.E20.E20_03_0.E20_05;
                };


                if ((typeof v2.E20.E20_03_0.E20_07 !== 'undefined') && (u.IsGo(v2.E20.E20_03_0.E20_07) == true)) {
                    if (typeof E20030 === 'undefined')
                    { var E20030 = new Object() }
                    E20030.E20_07 = v2.E20.E20_03_0.E20_07;
                }
                else {
                    E20030.E20_07 = "-20";
                };

                if ((typeof v2.E20.E20_03_0.E20_07 !== 'undefined') && (u.IsGo(v2.E20.E20_03_0.E20_07) == true)) {
                    if (typeof E20030 === 'undefined')
                    { var E20030 = new Object() }
                    E20030.E20_07 = v2.E20.E20_03_0.E20_07;
                }

            };
            if (typeof E20030 !== 'undefined') {
                if (typeof E20 === 'undefined') {
                    var E20 = new Object();
                };
                E20.E20_03_0 = E20030;
            };
            if ((typeof v2.E20.E20_06 !== 'undefined') && (u.IsGo(v2.E20.E20_06) == true)) {
                if (typeof E20 === 'undefined')
                { var E20 = new Object() }
                E20.E20_06 = v2.E20.E20_06;
            };

            if ((typeof v2.E20.E20_08 !== 'undefined') && (u.IsGo(v2.E20.E20_08) == true)) {
                if (typeof E20 === 'undefined')
                { var E20 = new Object() }
                E20.E20_08 = v2.E20.E20_08;
            };

            if ((typeof v2.E20.E20_09 !== 'undefined') && (u.IsGo(v2.E20.E20_09) == true)) {
                if (typeof E20 === 'undefined')
                { var E20 = new Object() }
                E20.E20_09 = v2.E20.E20_09;
            };

            if ((typeof v2.E20.E20_10 !== 'undefined') && (u.IsGo(v2.E20.E20_10) == true)) {
                if (typeof E20 === 'undefined')
                { var E20 = new Object() }
                E20.E20_10 = v2.E20.E20_10;
            };


            if ((typeof v2.E20.E20_11 !== 'undefined') && (u.IsGo(v2.E20.E20_11) == true)) {
                if (typeof E20 === 'undefined')
                { var E20 = new Object() }
                E20.E20_11 = v2.E20.E20_11;
            };


            if ((typeof v2.E20.E20_12 !== 'undefined') && (u.IsGo(v2.E20.E20_12) == true)) {
                if (typeof E20 === 'undefined')
                { var E20 = new Object() }
                E20.E20_12 = v2.E20.E20_12;
            };


            if ((typeof v2.E20.E20_13 !== 'undefined') && (u.IsGo(v2.E20.E20_13) == true)) {
                if (typeof E20 === 'undefined')
                { var E20 = new Object() }
                E20.E20_13 = v2.E20.E20_13;
            };

            if ((typeof v2.E20.E20_14 !== 'undefined') && (u.IsGo(v2.E20.E20_14) == true)) {
                if (typeof E20 === 'undefined')
                { var E20 = new Object() }
                E20.E20_14 = v2.E20.E20_14;
            }
            else {
                if (typeof E20 === 'undefined')
                { var E20 = new Object() }
                E20.E20_14 = "-20";
            };

            if ((typeof v2.E20.E20_15 !== 'undefined') && (u.IsGo(v2.E20.E20_15) == true)) {
                if (typeof E20 === 'undefined')
                { var E20 = new Object() }
                E20.E20_15 = v2.E20.E20_15;
            };

            if ((typeof v2.E20.E20_16 !== 'undefined') && (u.IsGo(v2.E20.E20_16) == true)) {
                if (typeof E20 === 'undefined')
                { var E20 = new Object() }
                E20.E20_16 = v2.E20.E20_16;
            }
            else {
                if (typeof E20 === 'undefined')
                { var E20 = new Object() }
                E20.E20_16 = "-20";
            };



            if ((typeof v2.E20.E20_17 !== 'undefined') && (u.IsGo(v2.E20.E20_17) == true)) {
                if (typeof E20 === 'undefined')
                { var E20 = new Object() }
                E20.E20_17 = v2.E20.E20_17;
            }
            else {
                if (typeof E20 === 'undefined')
                { var E20 = new Object() }
                E20.E20_17 = "-20";
            };

        };

        if (typeof v2.E21 !== 'undefined') {
            for (var x = 0; x < v2.E21.length; x++) {
                var obj = new Object();
                obj = v2.E21[x];
                if ((typeof obj.E21_01 !== 'undefined') && (u.IsGo(obj.E21_01) == true)) {
                    if (typeof e21 === 'undefined')
                    { var e21 = new Object() }
                    e21.E21_01 = obj.E21_01;
                }
                else {
                    e21.E21_01 = "-20"
                }

                if ((typeof obj.E21_02 !== 'undefined') && (u.IsGo(obj.E21_02) == true)) {
                    e21.E21_02 = obj.E21_02;
                };

                if (typeof obj.E23_03_0 !== 'undefined') {
                    if ((typeof obj.E23_03_0.E21_03 !== 'undefined') && (u.IsGo(obj.E23_03_0.E21_03) == true)) {
                        var e23030 = new Object();
                        e23030.E21_03 = obj.E23_03_0.E21_03;

                        if ((typeof obj.E23_03_0.E21_04 !== 'undefined') && (u.IsGo(obj.E23_03_0.E21_04) == true)) {
                            e23030.E21_04 = obj.E23_03_0.E21_04;

                        }
                    }
                    e21.E23_03_0 = e23030;
                };
                if ((typeof obj.E21_05 !== 'undefined') && (u.IsGo(obj.E21_05) == true)) {
                    e21.E21_05 = obj.E21_05;
                };

                if ((typeof obj.E21_06 !== 'undefined') && (u.IsGo(obj.E21_06) == true)) {
                    e21.E21_06 = obj.E21_06;
                };

                if ((typeof obj.E21_07 !== 'undefined') && (u.IsGo(obj.E21_07) == true)) {
                    e21.E21_07 = obj.E21_07;
                };

                if ((typeof obj.E21_08 !== 'undefined') && (u.IsGo(obj.E21_08) == true)) {
                    e21.E21_08 = obj.E21_08;
                };

                if ((typeof obj.E21_09 !== 'undefined') && (u.IsGo(obj.E21_09) == true)) {
                    e21.E21_09 = obj.E21_09;
                };

                if ((typeof obj.E21_10 !== 'undefined') && (u.IsGo(obj.E21_10) == true)) {
                    e21.E21_10 = obj.E21_10;
                };

                if ((typeof obj.E21_11 !== 'undefined') && (u.IsGo(obj.E21_11) == true)) {
                    e21.E21_11 = obj.E21_11;
                };

                if ((typeof obj.E21_12 !== 'undefined') && (u.IsGo(obj.E21_12) == true)) {
                    e21.E21_12 = obj.E21_12;
                };

                if ((typeof obj.E21_13 !== 'undefined') && (u.IsGo(obj.E21_13) == true)) {
                    e21.E21_13 = obj.E21_13;
                };

                if ((typeof obj.E21_14 !== 'undefined') && (u.IsGo(obj.E21_14) == true)) {
                    e21.E21_14 = obj.E21_14;
                };

                if ((typeof obj.E21_15 !== 'undefined') && (u.IsGo(obj.E21_15) == true)) {
                    e21.E21_15 = obj.E21_15;
                };

                if ((typeof obj.E21_16 !== 'undefined') && (u.IsGo(obj.E21_16) == true)) {
                    e21.E21_16 = obj.E21_16;
                };

                if ((typeof obj.E21_17 !== 'undefined') && (u.IsGo(obj.E21_17) == true)) {
                    e21.E21_17 = obj.E21_17;
                };

                if (typeof obj.E23_18_0 !== 'undefined') {
                    if ((typeof obj.E23_18_0.E21_18 !== 'undefined') && (u.IsGo(obj.E23_18_0.E21_18) == true)) {
                        var e23180 = new Object();
                        e23180.E21_18 = obj.E23_18_0.E21_18;

                        if ((typeof obj.E23_18_0.E21_19 !== 'undefined') && (u.IsGo(obj.E23_18_0.E21_19) == true)) {
                            e23180.E21_19 = obj.E23_18_0.E21_19;
                        }
                    }
                    e21.E23_18_0 = e23180;
                };

                if ((typeof obj.E21_20 !== 'undefined') && (u.IsGo(obj.E21_20) == true)) {
                    e21.E21_20 = obj.E21_20;
                };

                //Push Onto Object Array
                if (typeof E21Array === 'undefined') {
                    var E21Array = new Array();
                };

                if (e21 !== 'undefined') {
                    E21Array.push(e21)
                    e21 = undefined;
                }

            };
            if (typeof E21 === 'undefined') {
                var E21 = new Array();
            };

            if (E21Array !== 'undefined') {
                E21 = E21Array
            }
        };

        if (TheCall.Props.HasPatient == false) {
            var E22 = new Object();
            E22.E22_01 = "-25";
            E22.E22_02 = "-25";
            E22.E22_06 = "-25";
        };

        if (TheCall.Props.HasTransport == false) {
            var E22 = new Object();
            E22.E22_01 = "-25";
            E22.E22_02 = "-25";
            E22.E22_06 = "-25";
        };
        if (typeof v2.E22 === 'undefined') {
            var E22 = new Object();
            E22.E22_01 = "-15";
            E22.E22_02 = "-15";
            E22.E22_06 = "-20";
        };

        if (typeof v2.E22 !== 'undefined') {
            var E22 = new Object();

            if ((typeof v2.E22.E22_01 !== 'undefined') && (u.IsGo(v2.E22.E22_01) == true)) {
                E22.E22_01 = v2.E22.E22_01;
            }
            else {
                E22.E22_01 = "-20";
            };

            if ((typeof v2.E22.E22_02 !== 'undefined') && (u.IsGo(v2.E22.E22_02) == true)) {
                E22.E22_02 = v2.E22.E22_02;
            }
            else {
                E22.E22_02 = "-15";
            };


            if ((typeof v2.E22.E22_03 !== 'undefined') && (u.IsGo(v2.E22.E22_03) == true)) {
                E22.E22_03 = v2.E22.E22_03;
            }
            else {

                if (typeof E08 !== 'undefined') {
                    if (typeof E08.E08_02 !== 'undefined') {
                        if (E08.E08_02.indexOf('1075') !== -1) {
                            E22.E22_03 = "-10";
                        }
                    }
                }
            };

            if ((typeof v2.E22.E22_04 !== 'undefined') && (u.IsGo(v2.E22.E22_04) == true)) {
                E22.E22_04 = v2.E22.E22_04;
            }


            if ((typeof v2.E22.E22_05 !== 'undefined') && (u.IsGo(v2.E22.E22_05) == true)) {
                E22.E22_05 = v2.E22.E22_05;
            }


            if ((typeof v2.E22.E22_06 !== 'undefined') && (u.IsGo(v2.E22.E22_06) == true)) {
                E22.E22_06 = v2.E22.E22_06;
            }
            else {
                E22.E22_06 = "-15";
            };
        };
        if (typeof v2.E23 === 'undefined') {
            var E23 = new Object();
            var ee = [];
            ee.push("-20")
            E23.E23_01 = "-20";
            E23.E23_04 = ee;
            E23.E23_05 = "0";

        }
        else {
            if ((typeof v2.E23.E23_01 !== 'undefined') && (u.IsGo(v2.E23.E23_01) == true)) {
                if (typeof E23 === 'undefined') {
                    var E23 = new Object();
                };
                E23.E23_01 = v2.E23.E23_01;
            };

            if ((typeof v2.E23.E23_02 !== 'undefined') && (u.IsGo(v2.E23.E23_02) == true)) {
                if (typeof E23 === 'undefined') {
                    var E23 = new Object();
                };
                E23.E23_02 = v2.E23.E23_02;
            };

            if ((typeof v2.E23.E23_03 !== 'undefined') && (u.IsGo(v2.E23.E23_03) == true)) {
                if (typeof E23 === 'undefined') {
                    var E23 = new Object();
                };
                E23.E23_03 = v2.E23.E23_03;
            };

            if ((typeof v2.E23.E23_04 !== 'undefined') && (u.IsGo(v2.E23.E23_04) == true)) {
                if (typeof E23 === 'undefined') {
                    var E23 = new Object();
                };
                E23.E23_04 = v2.E23.E23_04;
            };
            if ((typeof v2.E23.E23_05 !== 'undefined') && (u.IsGo(v2.E23.E23_05) == true)) {
                if (typeof E23 === 'undefined') {
                    var E23 = new Object();
                };
                E23.E23_05 = v2.E23.E23_05;
            };

            if ((typeof v2.E23.E23_06 !== 'undefined') && (u.IsGo(v2.E23.E23_06) == true)) {
                if (typeof E23 === 'undefined') {
                    var E23 = new Object();
                };
                E23.E23_06 = v2.E23.E23_06;
            };

            if ((typeof v2.E23.E23_07 !== 'undefined') && (u.IsGo(v2.E23.E23_07) == true)) {
                if (typeof E23 === 'undefined') {
                    var E23 = new Object();
                };
                E23.E23_07 = v2.E23.E23_07;
            };

            if ((typeof v2.E23.E23_08 !== 'undefined') && (u.IsGo(v2.E23.E23_08) == true)) {
                if (typeof E23 === 'undefined') {
                    var E23 = new Object();
                };
                E23.E23_08 = v2.E23.E23_08;
            };

            if ((typeof v2.E23.E23_09 !== 'undefined') && (u.IsGo(v2.E23.E23_09) == true)) {
                if (typeof E23 === 'undefined') {
                    var E23 = new Object();
                };
                E23.E23_09 = v2.E23.E23_09;
            };

            if ((typeof v2.E23.E23_10 !== 'undefined') && (u.IsGo(v2.E23.E23_10) == true)) {
                if (typeof E23 === 'undefined') {
                    var E23 = new Object();
                };
                E23.E23_10 = v2.E23.E23_10;
            };

            if ((typeof v2.E23.E23_11 !== 'undefined') && (u.IsGo(v2.E23.E23_11) == true)) {
                if (typeof E23 === 'undefined') {
                    var E23 = new Object();
                };
                E23.E23_11 = v2.E23.E23_11;
            }
        }
    };

    var v2XMLReady = new Object()
    if (typeof v2 !== 'undefined') {
        if (typeof E01 !== 'undefined') {
            v2XMLReady.E01 = E01;
        };
        if (typeof E02 !== 'undefined') {
            v2XMLReady.E02 = E02;
        };
        if (typeof E03 !== 'undefined') {
            v2XMLReady.E03 = E03;
        };
        if (typeof E04 !== 'undefined') {
            v2XMLReady.E04 = E04;
        };
        if (typeof E05 !== 'undefined') {
            v2XMLReady.E05 = E05;
        };
        if (typeof E06 !== 'undefined') {
            v2XMLReady.E06 = E06;
        };
        if (typeof E07 !== 'undefined') {
            v2XMLReady.E07 = E07;
        };
        if (typeof E08 !== 'undefined') {
            v2XMLReady.E08 = E08;
        };
        if (typeof E09 !== 'undefined') {
            v2XMLReady.E09 = E09;
        };
        if (typeof E10 !== 'undefined') {
            v2XMLReady.E10 = E10;
        };
        if (typeof E11 !== 'undefined') {
            v2XMLReady.E11 = E11;
        };
        if (typeof E12 !== 'undefined') {
            v2XMLReady.E12 = E12;
        };
        if (typeof E13 !== 'undefined') {
            v2XMLReady.E13 = E13;
        };
        if (typeof E14 !== 'undefined') {
            v2XMLReady.E14 = E14;
        };
        if (typeof E15 !== 'undefined') {
            v2XMLReady.E15 = E15;
        };
        if (typeof E16 !== 'undefined') {
            v2XMLReady.E16 = E16;
        };
        if (typeof E17 !== 'undefined') {
            v2XMLReady.E17 = E17;
        };
        if (typeof E18 !== 'undefined') {
            v2XMLReady.E18 = E18;
        };
        if (typeof E19 !== 'undefined') {
            v2XMLReady.E19 = E19
        };
        if (typeof E20 !== 'undefined') {
            v2XMLReady.E20 = E20
        };
        if (typeof E21 !== 'undefined') {
            v2XMLReady.E21 = E21
        };
        if (typeof E22 !== 'undefined') {
            v2XMLReady.E22 = E22
        };
        if (typeof E23 !== 'undefined') {
            v2XMLReady.E23 = E23
        }
    };
    if (typeof v2XMLReady !== 'undefined') {
        return v2XMLReady
    }
    else {
        return null
    }
};