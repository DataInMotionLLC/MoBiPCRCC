var u = require('cloud/Utilities.js');
var jsXML = require('cloud/XMLWriter34.js');
exports.setV2XML = function (EMSDataSet) {
    var eDS = EMSDataSet;
    var NAPP = "-25";
    var NA = "-5";
    var NKA = "-10";
    var specMap = {
        "7701001": "-5",
        "7701003": "-15",
        "7701005": "-20",
        "8801005": "-10",
        "8801013": "-10",
        "8801015": "-10",
        "8801017": "-10",
        "8801019": "-10",
        "8801021": "-10",
        "8801023": "-10"
    };
    var specVal = ["7701001", "7701003", "7701005", "8801005", "8801013", "8801015", "8801017", "8801019", "8801021", "8801023"];
    
    //var v2XML = new jsXML.XMLWriter('UTF-8', '1.0');
    var v2XML = new jsXML.XMLWriter('UTF-8', '1.0');
    
    v2XML.WSD();
    v2XML.WSE('EMSDataSet');
    v2XML.WAS('xmlns', "http://www.nemsis.org")
    v2XML.WAS('xmlns:xsi', "http://www.w3.org/2001/XMLSchema-instance")
    v2XML.WAS('xsi:schemaLocation', "http://www.nemsis.org http://www.nemsis.org/media/XSD/EMSDataSet.xsd")


    v2XML.WSE("Header");
    v2XML.WES("D01_01", "65347212");
    v2XML.WES("D01_03", "37");
    v2XML.WES("D01_04", "37135");
    v2XML.WES("D01_07", "6110");
    v2XML.WES("D01_08", "5810");
    v2XML.WES("D01_09", "5880");
    v2XML.WES("D01_21", "4356857");
    v2XML.WES("D02_07", "84105");
    v2XML.WEE("Header");

    //var trace = false;


    

    if (typeof eDS !== 'undefined') {
        v2XML.WSE("Record");
        
        if (typeof eDS.E01 !== 'undefined') {
            v2XML.WSE("E01");
            if (u.IsOk(eDS.E01.E01_01) == true) {
            var d = eDS.E01.E01_01.toString();
                var da = d.substring(0, 31)                
                v2XML.WES("E01_01", da)
            };
            if (u.IsOk(eDS.E01.E01_02) == true) {
                v2XML.WES("E01_02", eDS.E01.E01_02)
            };

            if (u.IsOk(eDS.E01.E01_03) == true) {
                v2XML.WES("E01_03", eDS.E01.E01_03)
            };
            if (u.IsOk(eDS.E01.E01_04) == true) {
                v2XML.WES("E01_04", eDS.E01.E01_04)
            };
            v2XML.WEE("E01");
        };
        if (typeof eDS.E02 !== 'undefined')
        {
            v2XML.WSE("E02");
            if (u.IsOk(eDS.E02.E02_01) == true) {
                v2XML.WES("E02_01", eDS.E02.E02_01);
            };
    
            if (u.IsOk(eDS.E02.E02_02) == true) {
                    v2XML.WES("E02_02", eDS.E02.E02_02);
            };

            if (u.IsOk(eDS.E02.E02_03) == true) {
                v2XML.WES("E02_03", eDS.E02.E02_03);
            };
    
            if (u.IsOk(eDS.E02.E02_04) == true) {
                v2XML.WES("E02_04", eDS.E02.E02_04);
            };


            if (u.IsOk(eDS.E02.E02_05) == true) {
                v2XML.WES("E02_05", eDS.E02.E02_05);
            };

            if (typeof eDS.E02.E02_06 !== 'undefined') {
                for (var i = 0; i < eDS.E02.E02_06.length; i++) {
                    if (u.IsOk(eDS.E02.E02_06[i]) == true) {
                        v2XML.WES("E02_06", eDS.E02.E02_06[i]);
                    }
                }
            };
            if (typeof eDS.E02.E02_07 !== 'undefined') {
                for (var i = 0; i < eDS.E02.E02_07.length; i++) {
                    if (u.IsOk(eDS.E02.E02_07[i]) == true) {
                        v2XML.WES("E02_07", eDS.E02.E02_07[i]);
                    }
                }
            };
            if (typeof eDS.E02.E02_08 !== 'undefined') {
                for (var i = 0; i < eDS.E02.E02_08.length; i++) {
                    if (u.IsOk(eDS.E02.E02_08[i]) == true) {
                        v2XML.WES("E02_08", eDS.E02.E02_08[i]);
                    }
                }
            };
            if (typeof eDS.E02.E02_09 !== 'undefined') {
                for (var i = 0; i < eDS.E02.E02_09.length; i++) {
                    if (u.IsOk(eDS.E02.E02_09[i]) == true) {
                        v2XML.WES("E02_09", eDS.E02.E02_09[i]);
                    }
                }
            };
            if (typeof eDS.E02.E02_10 !== 'undefined') {
                for (var i = 0; i < eDS.E02.E02_10.length; i++) {
                    if (u.IsOk(eDS.E02.E02_10[i]) == true) {
                        v2XML.WES("E02_10", eDS.E02.E02_10[i]);
                    }
                }
            };
            if (u.IsOk(eDS.E02.E02_11) == true) {
                v2XML.WES("E02_11", eDS.E02.E02_11);
            };
            if (typeof eDS.E02.E02_12 !== 'undefined') {
                if (eDS.E02.E02_12.length !== 0) {
                    if (u.IsOk(eDS.E02.E02_12) == true) {
                        var rr = eDS.E02.E02_12.substring(0, 14)
                        v2XML.WES("E02_12", rr);
                    }
                }
            };            
            if (typeof eDS.E02.E02_13 !== 'undefined') {
                if (u.IsOk(eDS.E02.E02_13) == true) {
                    v2XML.WES("E02_13", escapeXml(eDS.E02.E02_13));
                }
            };
            if (typeof eDS.E02.E02_14 !== 'undefined') {
                if (u.IsOk(eDS.E02.E02_14) == true) {
                    v2XML.WES("E02_14", eDS.E02.E02_14);
                }
            };
            //if (typeof eDS.E02.E02_15 !== 'undefined') {
            //    if (u.IsOk(eDS.E02.E02_15) == true) {
            //        //v2XML.WES("E02_15", eDS.E02.E02_15);
            //    }
            //};
            if (typeof eDS.E02.E02_16 !== 'undefined') {
                if (u.IsOk(eDS.E02.E02_16) == true) {
                    v2XML.WES("E02_16", eDS.E02.E02_16);
                }
            };
            if (typeof eDS.E02.E02_17 !== 'undefined') {
                if (u.IsOk(eDS.E02.E02_17) == true) {
                    v2XML.WES("E02_17", eDS.E02.E02_17);
                }
            };
            if (typeof eDS.E02.E02_18 !== 'undefined') {
                if (eDS.E02.E02_18.length !== 0) {
                    v2XML.WES("E02_18", eDS.E02.E02_18);
                }
            };
            if (typeof eDS.E02.E02_19 !== 'undefined') {
                if (eDS.E02.E02_19.length !== 0) {
                    v2XML.WES("E02_19", eDS.E02.E02_19);
                }
            };
            if (typeof eDS.E02.E02_20 !== 'undefined') {
                if (eDS.E02.E02_20.length !== 0) {
                    v2XML.WES("E02_20", eDS.E02.E02_20);
                }
            };
            v2XML.WEE("E02");          
        };
        if (typeof eDS.E03 !== 'undefined') {
            v2XML.WSE("E03");
            if (typeof eDS.E03.E03_01 !== 'undefined') {
                if (u.IsOk(eDS.E03.E03_01) == true) {
                    v2XML.WES("E03_01", eDS.E03.E03_01);
                }
            };
            if (typeof eDS.E03.E03_02 !== 'undefined') {
                if (u.IsOk(eDS.E03.E03_02) == true) {
                    v2XML.WES("E03_02", eDS.E03.E03_02);
                }
            };
            if (typeof eDS.E03.E03_03 !== 'undefined') {
                if (u.IsOk(eDS.E03.E03_03) == true) {
                    v2XML.WES("E03_03", escapeXml(eDS.E03.E03_03));
                }
            };
            v2XML.WEE("E03");
        };


        if (typeof eDS.E04 !== 'undefined') {
            for (var x = 0; x < eDS.E04.length; x++) {
                v2XML.WSE("E04");
                if (typeof eDS.E04[x].E04_01 !== 'undefined') {
                    if (u.IsOk(eDS.E04[x].E04_01) == true) {
                        v2XML.WES("E04_01", escapeXml(eDS.E04[x].E04_01));
                    }
                };
                if (typeof eDS.E04[x].E04_02 !== 'undefined') {
                    if (u.IsOk(eDS.E04[x].E04_02) == true) {
                        v2XML.WES("E04_02", eDS.E04[x].E04_02);
                    }
                };
                if (typeof eDS.E04[x].E04_03 !== 'undefined') {
                    if (u.IsOk(eDS.E04[x].E04_03) == true) {
                        v2XML.WES("E04_03", eDS.E04[x].E04_03)
                    }
                };

                v2XML.WEE("E04");
            }
        };
        
        if (typeof eDS.E05 !== 'undefined') {
            v2XML.WSE("E05");
            if (typeof eDS.E05.E05_01 !== 'undefined') {
                if (u.IsOk(eDS.E05.E05_01) == true) {
                    v2XML.WES("E05_01", eDS.E05.E05_01)
                }
            };
            if ((typeof eDS.E05.E05_02 !== 'undefined') && (u.IsOk(eDS.E05.E05_02) == true)) {
                v2XML.WES("E05_02", eDS.E05.E05_02)
            }
            else {
                v2XML.WSE('E05_02');
                v2XML.WAS('xsi:nil', 'true');
                v2XML.WEE();
            };

            if (typeof eDS.E05.E05_03 !== 'undefined') {
                if (u.IsOk(eDS.E05.E05_03) == true) {
                    v2XML.WES("E05_03", eDS.E05.E05_03)
                }
            };

            if ((typeof eDS.E05.E05_04 !== 'undefined') && (u.IsOk(eDS.E05.E05_04) == true)) {
                v2XML.WES("E05_04", eDS.E05.E05_04)
            }
            else {
                v2XML.WSE('E05_04');
                v2XML.WAS('xsi:nil', 'true');
                v2XML.WEE();
            };

            if ((typeof eDS.E05.E05_05 !== 'undefined') && (u.IsOk(eDS.E05.E05_05) == true)) {
                v2XML.WES("E05_05", eDS.E05.E05_05)
            }
            else {
                v2XML.WSE('E05_05');
                v2XML.WAS('xsi:nil', 'true');
                v2XML.WEE();
            };

            if ((typeof eDS.E05.E05_06 !== 'undefined') && (u.IsOk(eDS.E05.E05_06) == true)) {
                v2XML.WES("E05_06", eDS.E05.E05_06)
            }
            else {
                v2XML.WSE('E05_06');
                v2XML.WAS('xsi:nil', 'true');
                v2XML.WEE();
            };

            if ((typeof eDS.E05.E05_07 !== 'undefined') && (u.IsOk(eDS.E05.E05_07) == true)) {
                v2XML.WES("E05_07", eDS.E05.E05_07)
            }
            else {
                v2XML.WSE('E05_07');
                v2XML.WAS('xsi:nil', 'true');
                v2XML.WEE();
            };

            if ((typeof eDS.E05.E05_08 !== 'undefined') && (u.IsOk(eDS.E05.E05_08) == true)) {
                v2XML.WES("E05_08", eDS.E05.E05_08)
            }
            else {
                v2XML.WSE('E05_08');
                v2XML.WAS('xsi:nil', 'true');
                v2XML.WEE();
            };
            if ((typeof eDS.E05.E05_09 !== 'undefined') && (u.IsOk(eDS.E05.E05_09) == true)) {
                v2XML.WES("E05_09", eDS.E05.E05_09)
            }
            else {
                v2XML.WSE('E05_09');
                v2XML.WAS('xsi:nil', 'true');
                v2XML.WEE();
            };

            if ((typeof eDS.E05.E05_10 !== 'undefined') && (u.IsOk(eDS.E05.E05_10) == true)) {
                v2XML.WES("E05_10", eDS.E05.E05_10)
            }
            else {
                v2XML.WSE('E05_10');
                v2XML.WAS('xsi:nil', 'true');
                v2XML.WEE();
            };

            if ((typeof eDS.E05.E05_11 !== 'undefined') && (u.IsOk(eDS.E05.E05_11) == true)) {
                v2XML.WES("E05_11", eDS.E05.E05_11)
            }
            else {
                v2XML.WSE('E05_11');
                v2XML.WAS('xsi:nil', 'true');
                v2XML.WEE();
            };

            if ((typeof eDS.E05.E05_12 !== 'undefined') && (u.IsOk(eDS.E05.E05_12) == true)) {
                v2XML.WES("E05_12", eDS.E05.E05_12)
            }
            else {
                v2XML.WSE('E05_12');
                v2XML.WAS('xsi:nil', 'true');
                v2XML.WEE();
            };

            if ((typeof eDS.E05.E05_13 !== 'undefined') && (u.IsOk(eDS.E05.E05_13) == true)) {
                v2XML.WES("E05_13", eDS.E05.E05_13)
            }
            else {
                v2XML.WSE('E05_13');
                v2XML.WAS('xsi:nil', 'true');
                v2XML.WEE();
            };

            v2XML.WEE("E05");

        };


        if (typeof eDS.E06 !== 'undefined') {
            v2XML.WSE("E06");
            if (typeof eDS.E06.E06_01_0 !== 'undefined') {
                v2XML.WSE("E06_01_0");

                if (typeof eDS.E06.E06_01_0.E06_01 !== 'undefined') {
                    if (u.IsOk(eDS.E06.E06_01_0.E06_01) == true) {
                        v2XML.WES("E06_01", escapeXml(eDS.E06.E06_01_0.E06_01));
                    }
                };

                if (typeof eDS.E06.E06_01_0.E06_02 !== 'undefined') {
                    if (u.IsOk(eDS.E06.E06_01_0.E06_02) == true) {
                        v2XML.WES("E06_02", escapeXml(eDS.E06.E06_01_0.E06_02));
                    }
                };

                if (typeof eDS.E06.E06_01_0.E06_03 !== 'undefined') {
                    if (u.IsOk(eDS.E06.E06_01_0.E06_03) == true) {
                        v2XML.WES("E06_03", escapeXml(eDS.E06.E06_01_0.E06_03));
                    }
                };
                v2XML.WEE("E06_01_0");
            };

            if (typeof eDS.E06.E06_04_0 !== 'undefined')
            {
                v2XML.WSE("E06_04_0");
                if (typeof eDS.E06.E06_04_0.E06_04 !== 'undefined') {
                    if (u.IsOk(eDS.E06.E06_04_0.E06_04) == true) {
                        v2XML.WES("E06_04", escapeXml(eDS.E06.E06_04_0.E06_04))
                    }
                };
                if (typeof eDS.E06.E06_04_0.E06_05 !== 'undefined') {
                    if (u.IsOk(eDS.E06.E06_04_0.E06_05) == true) {
                        v2XML.WES("E06_05", escapeXml(eDS.E06.E06_04_0.E06_05));
                    }
                };


                if (typeof eDS.E06.E06_04_0.E06_07 !== 'undefined') {
                    if (u.IsOk(eDS.E06.E06_04_0.E06_07) == true) {
                        v2XML.WES("E06_07", eDS.E06.E06_04_0.E06_07)
                    }
                };
                if (typeof eDS.E06.E06_04_0.E06_08 !== 'undefined') {
                    if (u.IsOk(eDS.E06.E06_04_0.E06_08) == true) {
                        v2XML.WES("E06_08", eDS.E06.E06_04_0.E06_08)
                    }
                };

                v2XML.WEE("E06_04_0");
            };

            if (typeof eDS.E06.E06_06 !== 'undefined') {
                if (u.IsOk(eDS.E06.E06_06) == true) {
                    v2XML.WES("E06_06", eDS.E06.E06_06)
                }
            };

            if (typeof eDS.E06.E06_09 !== 'undefined') {
                if (u.IsOk(eDS.E06.E06_09) == true) {
                    v2XML.WES("E06_09", eDS.E06.E06_09)
                }
            };

            if (typeof eDS.E06.E06_10 !== 'undefined') {
                if (u.IsOk(eDS.E06.E06_10) == true) {
                    v2XML.WES("E06_10", eDS.E06.E06_10)
                }
            };
            if (typeof eDS.E06.E06_11 !== 'undefined') {
                if (u.IsOk(eDS.E06.E06_11) == true) {
                    v2XML.WES("E06_11", eDS.E06.E06_11)
                }
            };
            if (typeof eDS.E06.E06_12 !== 'undefined') {
                //  for (var i = 0; i < eDS.E06.E06_12.length; i++) {
                if (u.IsOk(eDS.E06.E06_12) == true) {
                    v2XML.WES("E06_12", eDS.E06.E06_12)
                    //     }
                }
            };
            if (typeof eDS.E06.E06_13 !== 'undefined') {
                if (u.IsOk(eDS.E06.E06_13) == true) {
                    v2XML.WES("E06_13", eDS.E06.E06_13)
                }
            };


            v2XML.WSE("E06_14_0");
            if (typeof eDS.E06.E06_14_0 !== 'undefined') {
                if (eDS.E06.E06_14_0.E06_14 !== 'undefined') {
                    if (u.IsOk(eDS.E06.E06_14_0.E06_14) == true) {
                        v2XML.WES("E06_14", eDS.E06.E06_14_0.E06_14)
                    }
                    else {
                        v2XML.WSE('E06_14');
                        v2XML.WAS('xsi:nil', 'true');
                        v2XML.WEE();
                    }
                };

                if (eDS.E06.E06_14_0.E06_15 !== 'undefined') {
                    if (u.IsOk(eDS.E06.E06_14_0.E06_15) == true) {
                        v2XML.WES("E06_15", eDS.E06.E06_14_0.E06_15)
                    }
                };

            }
            else {
                v2XML.WSE('E06_14');
                v2XML.WAS('xsi:nil', 'true');
                v2XML.WEE();

                v2XML.WES("E06_15", "-5")
            };
            v2XML.WEE("E06_14_0");
            if (typeof eDS.E06.E06_16 !== 'undefined') {
                if (u.IsOk(eDS.E06.E06_16) == true) {
                    v2XML.WES("E06_16", eDS.E06.E06_16)
                }
            };

            if (typeof eDS.E06.E06_17 !== 'undefined') {
                if (u.IsOk(eDS.E06.E06_17) == true) {
                    v2XML.WES("E06_17", escapeXml(eDS.E06.E06_17));
                }
            };

            if (typeof eDS.E06.E06_19_0 !== 'undefined') {
                v2XML.WSE("E06_19_0");
                if (typeof eDS.E06.E06_19_0.E06_18 !== 'undefined') {
                    if (u.IsOk(eDS.E06.E06_19_0.E06_18) == true) {
                        v2XML.WES("E06_18", eDS.E06.E06_19_0.E06_18)
                    }
                };
                if (typeof eDS.E06.E06_19_0.E06_19 !== 'undefined') {
                    if (u.IsOk(eDS.E06.E06_19_0.E06_19) == true) {
                        v2XML.WES("E06_19", escapeXml(eDS.E06.E06_19_0.E06_19));
                    }
                };

                v2XML.WEE("E06_19_0");
            };

            v2XML.WEE("E06");
        };

        if (typeof eDS.E07 !== 'undefined') {
            v2XML.WSE("E07");

            if (typeof eDS.E07.E07_01 !== 'undefined') {
                if (u.IsOk(eDS.E07.E07_01) == true) {
                    v2XML.WES("E07_01", eDS.E07.E07_01)
                }
            };

            if (typeof eDS.E07.E07_02 !== 'undefined') {
                if (u.IsOk(eDS.E07.E07_02) == true) {
                    v2XML.WES("E07_02", eDS.E07.E07_02);
                }
            };
            if (typeof eDS.E07.E07_03_0 !== 'undefined') {
                for (var i = 0; i < eDS.E07.E07_03_0.length; i++) {
                    if (typeof eDS.E07.E07_03_0[i] !== 'undefined') {
                        var eObj = new Object();
                        eObj = eDS.E07.E07_03_0[i];
                        v2XML.WSE("E07_03_0");
                        {
                            if (u.IsOk(eObj.E07_03) == true) {
                                v2XML.WES("E07_03", escapeXml(eObj.E07_03));
                            }
                        };

                        if (typeof eObj.E07_04 !== 'undefined') {
                            if (u.IsOk(eObj.E07_04) == true) {
                                v2XML.WES("E07_04", eObj.E07_04)
                            }
                        };

                        if (typeof eObj.E07_05_0 !== 'undefined') {
                            {
                                v2XML.WSE("E07_05_0");

                                if (typeof eObj.E07_05_0.E07_05 !== 'undefined') {
                                    if (u.IsOk(eObj.E07_05_0.E07_05) == true) {
                                        v2XML.WES("E07_05", escapeXml(eObj.E07_05_0.E07_05));
                                    }
                                };
                                if (typeof eObj.E07_05_0.E07_06 !== 'undefined') {
                                    if (u.IsOk(eObj.E07_05_0.E07_06) == true) {
                                        v2XML.WES("E07_06", eObj.E07_05_0.E07_06)
                                    }
                                };
                                if (typeof eObj.E07_05_0.E07_07 !== 'undefined') {
                                    if (u.IsOk(eObj.E07_05_0.E07_07) == true) {
                                        v2XML.WES("E07_07", eObj.E07_05_0.E07_07)
                                    }
                                };
                                if (typeof eObj.E07_05_0.E07_08 !== 'undefined') {
                                    if (u.IsOk(eObj.E07_05_0.E07_08) == true) {
                                        v2XML.WES("E07_08", eObj.E07_05_0.E07_08)
                                    }
                                };

                                v2XML.WEE("E07_05_0");
                            };

                            if (typeof eObj.E07_09 !== 'undefined') {
                                if (u.IsOk(eObj.E07_09) == true) {
                                    v2XML.WES("E07_09", escapeXml(eObj.E07_09));
                                }
                            };
                            if (typeof eObj.E07_10 !== 'undefined') {
                                if (u.IsOk(eObj.E07_10) == true) {
                                    v2XML.WES("E07_10", escapeXml(eObj.E07_10));
                                }
                            };

                            if (typeof eObj.E07_11_0 !== 'undefined') {
                                {
                                    v2XML.WSE("E07_11_0");
                                    if (typeof eObj.E07_11_0.E07_11 !== 'undefined') {
                                        if (u.IsOk(eObj.E07_11_0.E07_11) == true) {
                                            v2XML.WES("E07_11", escapeXml(eObj.E07_11_0.E07_11));
                                        }
                                    };

                                    if (typeof eObj.E07_11_0.E07_12 !== 'undefined') {
                                        if (u.IsOk(eObj.E07_11_0.E07_12) == true) {
                                            v2XML.WES("E07_12", escapeXml(eObj.E07_11_0.E07_12));
                                        }
                                    };

                                    if (typeof eObj.E07_11_0.E07_13 !== 'undefined') {
                                        if (u.IsOk(eObj.E07_11_0.E07_13) == true) {
                                            v2XML.WES("E07_13", escapeXml(eObj.E07_11_0.E07_13));
                                        }
                                    };

                                    v2XML.WEE("E07_11_0");
                                }
                            };
                            if (typeof eObj.E07_14 !== 'undefined') {
                                if (u.IsOk(eObj.E07_14) == true) {
                                    v2XML.WES("E07_14", eObj.E07_14)
                                }
                            };

                            v2XML.WEE("E07_03_0");
                        }
                    }
                }
            };


            if (typeof eDS.E07.E07_15 !== 'undefined') {
                if (u.IsOk(eDS.E07.E07_15) == true) {
                    v2XML.WES("E07_15", eDS.E07.E07_15)
                }
            };
            if (typeof eDS.E07.E07_16 !== 'undefined') {
                if (u.IsOk(eDS.E07.E07_16) == true) {
                    v2XML.WES("E07_16", eDS.E07.E07_16)
                }
            };
            if (typeof eDS.E07.E07_17 !== 'undefined') {
                if (u.IsOk(eDS.E07.E07_17) == true) {
                    v2XML.WES("E07_17", eDS.E07.E07_17)
                }
            };
            if (typeof eDS.E07.E07_18_0 !== 'undefined') {
                var iobj = eDS.E07.E07_18_0;
                v2XML.WSE("E07_18_0");

                if (typeof iobj.E07_18_01 !== 'undefined') {
                    v2XML.WSE("E07_18_01");

                    if (typeof iobj.E07_18_01.E07_18 !== 'undefined') {
                        if (u.IsOk(iobj.E07_18_01.E07_18) == true) {
                            v2XML.WES("E07_18", escapeXml(iobj.E07_18_01.E07_18));
                        }
                    }
                    if (typeof iobj.E07_18_01.E07_19 !== 'undefined') {
                        if (u.IsOk(iobj.E07_18_01.E07_19) == true) {
                            v2XML.WES("E07_19", escapeXml(iobj.E07_18_01.E07_19));
                        }
                    };
                    if (typeof iobj.E07_18_01.E07_20 !== 'undefined') {
                        if (u.IsOk(iobj.E07_18_01.E07_20) == true) {
                            v2XML.WES("E07_20", escapeXml(iobj.E07_18_01.E07_20));
                        }
                    };
                    v2XML.WEE("E07_18_1");
                };

                if (typeof iobj.E07_21_0 !== 'undefined') {
                    v2XML.WSE("E07_21_0");

                    if (typeof iobj.E07_21_0.E07_21 !== 'undefined') {
                        if (u.IsOk(iobj.E07_21_0.E07_21) == true) {
                            v2XML.WES("E07_21", escapeXml(iobj.E07_21_0.E07_21));
                        }
                    };
                    if (typeof iobj.E07_21_0.E07_22 !== 'undefined') {
                        if (u.IsOk(iobj.E07_21_0.E07_22) == true) {
                            v2XML.WES("E07_22", iobj.E07_21_0.E07_22)
                        }
                    };
                    if (typeof iobj.E07_21_0.E07_23 !== 'undefined') {
                        if (u.IsOk(iobj.E07_21_0.E07_23) == true) {
                            v2XML.WES("E07_23", iobj.E07_21_0.E07_23)
                        }
                    };
                    if (typeof iobj.E07_21_0.E07_24 !== 'undefined') {
                        if (u.IsOk(iobj.E07_21_0.E07_24) == true) {
                            v2XML.WES("E07_24", iobj.E07_21_0.E07_24)
                        }
                    }

                    v2XML.WEE("E07_21_0");
                };

                if (typeof eDS.E07.E07_25 !== 'undefined') {
                    if (u.IsOk(eDS.E07.E07_25) == true) {
                        v2XML.WES("E07_25", eDS.E07.E07_25)
                    }
                };
                if (typeof eDS.E07.E07_26 !== 'undefined') {
                    if (u.IsOk(eDS.E07.E07_26) == true) {
                        v2XML.WES("E07_26", eDS.E07.E07_26)
                    }
                };
                v2XML.WEE("E07_18_0");
            };



            if (typeof eDS.E07.E07_27_0 !== 'undefined') {
                var bObj = eDS.E07.E07_27_0
                v2XML.WSE("E07_27_0");
                if (typeof bObj.E07_27 !== 'undefined') {
                    if (u.IsOk(bObj.E07_27) == true) {
                        v2XML.WES("E07_27", escapeXml(bObj.E07_27));
                    }
                };

                if (typeof bObj.E07_28_0 !== 'undefined') {
                    v2XML.WSE("E07_28_0");
                    if (bObj.E07_28_0.E07_28 !== 'undefined') {
                        if (u.IsOk(bObj.E07_28_0.E07_28) == true) {
                            v2XML.WES("E07_28", escapeXml(bObj.E07_28_0.E07_28))
                        }
                    }

                    if (bObj.E07_28_0.E07_29 !== 'undefined') {
                        if (u.IsOk(bObj.E07_28_0.E07_29) == true) {
                            v2XML.WES("E07_29", bObj.E07_28_0.E07_29)
                        }
                    };

                    if (bObj.E07_28_0.E07_30 !== 'undefined') {
                        if (u.IsOk(bObj.E07_28_0.E07_30) == true) {
                            v2XML.WES("E07_30", bObj.E07_28_0.E07_30)
                        }
                    };

                    if (bObj.E07_28_0.E07_31 !== 'undefined') {
                        if (u.IsOk(bObj.E07_28_0.E07_31) == true) {
                            v2XML.WES("E07_31", bObj.E07_28_0.E07_31)
                        }
                    };
                    v2XML.WEE("E07_28_0");
                };
                v2XML.WEE("E07_27_0");
            };

            if (typeof eDS.E07.E07_32 !== 'undefined') {
                if (u.IsOk(eDS.E07.E07_32) == true) {
                    v2XML.WES("E07_32", eDS.E07.E07_32)
                }
            };
            if (typeof eDS.E07.E07_33 !== 'undefined') {
                if (u.IsOk(eDS.E07.E07_33) == true) {
                    v2XML.WES("E07_33", eDS.E07.E07_33)
                }
            };
            if (typeof eDS.E07.E07_34 !== 'undefined') {
                if (u.IsOk(eDS.E07.E07_34) == true) {
                    v2XML.WES("E07_34", eDS.E07.E07_34)
                }
            };


            if (typeof eDS.E07.E07_35_0 !== 'undefined') {
                for (var i = 0; i < eDS.E07.E07_35_0.length; i++) {
                    v2XML.WSE("E07_35_0");
                    if (typeof eDS.E07.E07_35_0[i].E07_35 !== 'undefined') {
                        for (var ii = 0; ii < eDS.E07.E07_35_0[i].E07_35.length; ii++) {
                            if (u.IsOk(eDS.E07.E07_35_0[i].E07_35[ii]) == true) {
                                v2XML.WES("E07_35", eDS.E07.E07_35_0[i].E07_35[ii])
                            };
                        }
                    };

                    if (typeof eDS.E07.E07_35_0[i].E07_36 !== 'undefined') {
                        if (u.IsOk(eDS.E07.E07_35_0[i].E07_36) == true) {
                            v2XML.WES("E07_36", escapeXml(eDS.E07.E07_35_0[i].E07_36));
                        }
                    };
                    v2XML.WEE("E07_35_0");
                }
            };

            if (typeof eDS.E07.E07_37 !== 'undefined') {
                for (var i = 0; i < eDS.E07.E07_37.length; i++) {
                    if (u.IsOk(eDS.E07.E07_37[i]) == true) {
                        v2XML.WES("E07_37", eDS.E07.E07_37[i])
                    }
                }
            };
            v2XML.WEE("E07");
        };


        if (typeof eDS.E08 !== 'undefined') {
            v2XML.WSE("E08");
            if (typeof eDS.E08.E08_01 !== 'undefined') {
                for (var i = 0; i < eDS.E08.E08_01.length; i++) {
                    if (u.IsOk(eDS.E08.E08_01[i]) == true) {
                        v2XML.WES("E08_01", eDS.E08.E08_01[i]);
                    }
                }
            };

            if (typeof eDS.E08.E08_02 !== 'undefined') {
                for (var i = 0; i < eDS.E08.E08_02.length; i++) {
                    if (u.IsOk(eDS.E08.E08_02[i]) == true) {
                        v2XML.WES("E08_02", eDS.E08.E08_02[i]);
                    }
                }
            };

            if (typeof eDS.E08.E08_03 !== 'undefined') {
                if (u.IsOk(eDS.E08.E08_03) == true) {
                    var t = eDS.E08.E08_03.toString()
                    v2XML.WES("E08_03", t)
                }
            };
            if (typeof eDS.E08.E08_04 !== 'undefined') {
                if (u.IsOk(eDS.E08.E08_04) == true) {
                    v2XML.WES("E08_04", eDS.E08.E08_04)
                }
            };
            if (typeof eDS.E08.E08_05 !== 'undefined') {
                if (u.IsOk(eDS.E08.E08_05) == true) {
                    v2XML.WES("E08_05", eDS.E08.E08_05)
                }
            };

            if (typeof eDS.E08.E08_06 !== 'undefined') {
                if (u.IsOk(eDS.E08.E08_06) == true) {
                    v2XML.WES("E08_06", eDS.E08.E08_06)
                }
            };
            if (typeof eDS.E08.E08_07 !== 'undefined') {
                if (u.IsOk(eDS.E08.E08_07) == true) {
                    v2XML.WES("E08_07", eDS.E08.E08_07);

                }
            };

            if (typeof eDS.E08.E08_08 !== 'undefined') {
                if (u.IsOk(eDS.E08.E08_08) == true) {
                    v2XML.WES("E08_08", escapeXml(eDS.E08.E08_08));
                }
            };
            if (typeof eDS.E08.E08_09 !== 'undefined') {
                if (u.IsOk(eDS.E08.E08_09) == true) {
                    v2XML.WES("E08_09", eDS.E08.E08_09)
                }
            };
            if (typeof eDS.E08.E08_10 !== 'undefined') {
                if (u.IsOk(eDS.E08.E08_10) == true) {
                    v2XML.WES("E08_10", escapeXml(eDS.E08.E08_10));
                }
            };


            if (typeof eDS.E08.E08_11_0 !== 'undefined') {
                var obj = eDS.E08.E08_11_0
                v2XML.WSE("E08_11_0");
                if (typeof obj.E08_11 !== 'undefined') {
                    if (obj.E08_11.length !== 0) {
                        v2XML.WES("E08_11", escapeXml(obj.E08_11))
                    }
                };
                if (typeof obj.E08_12 !== 'undefined') {
                    if (obj.E08_12.length !== 0) {
                        v2XML.WES("E08_12", obj.E08_12)
                    }
                };

                if (typeof obj.E08_14 !== 'undefined') {
                    if (obj.E08_14.length !== 0) {
                        v2XML.WES("E08_14", obj.E08_14)
                    }
                };
                if (typeof obj.E08_15 !== 'undefined') {
                    if (obj.E08_15.length !== 0) {
                        v2XML.WES("E08_15", obj.E08_15)
                    }
                };
                v2XML.WEE("E08_11_0");
                if (typeof eDS.E08.E08_13 !== 'undefined') {
                    if (u.IsOk(eDS.E08.E08_13) == true) {
                        v2XML.WES("E08_13", escapeXml(eDS.E08.E08_13));
                    }
                };
            };

            v2XML.WEE("E08");
        };

        if (typeof eDS.E09 !== 'undefined') {
            v2XML.WSE("E09");

            if (typeof eDS.E09.E09_01 !== 'undefined') {
                for (var i = 0; i < eDS.E09.E09_01.length; i++) {
                    if (u.IsOk(eDS.E09.E09_01[i]) == true) {
                        v2XML.WES("E09_01", eDS.E09.E09_01[i]);
                    }
                }
            };

            if (typeof eDS.E09.E09_02 !== 'undefined') {
                for (var i = 0; i < eDS.E09.E09_02.length; i++) {
                    if (u.IsOk(eDS.E09.E09_02[i]) == true) {
                        v2XML.WES("E09_02", eDS.E09.E09_02[i]);
                    }
                }
            };

            if (typeof eDS.E09.E09_03 !== 'undefined') {
                if (u.IsOk(eDS.E09.E09_03) == true) {
                    v2XML.WES("E09_03", eDS.E09.E09_03)
                }
            };


            if (typeof eDS.E09.E09_04 !== 'undefined') {
                if (u.IsOk(eDS.E09.E09_04) == true) {
                    v2XML.WES("E09_04", eDS.E09.E09_04)
                }
            };

            if (typeof eDS.E09.E09_05 !== 'undefined') {
                if (u.IsOk(eDS.E09.E09_05) == true) {
                    v2XML.WES("E09_05", escapeXml(eDS.E09.E09_05));
                }
            };
            if (typeof eDS.E09.E09_06_0 !== 'undefined') {
                v2XML.WSE("E09_06_0");
                if (typeof eDS.E09.E09_06_0.E09_06 !== 'undefined') {
                    if (u.IsOk(eDS.E09.E09_06_0.E09_06) == true) {
                        v2XML.WES("E09_06", eDS.E09.E09_06_0.E09_06)
                    }
                };
                if (typeof eDS.E09.E09_06_0.E09_07 !== 'undefined') {
                    if (u.IsOk(eDS.E09.E09_06_0.E09_07) == true) {
                        v2XML.WES("E09_07", eDS.E09.E09_06_0.E09_07)
                    }
                };
                v2XML.WEE("E09_06_0");
            };

            if (typeof eDS.E09.E09_08 !== 'undefined') {
                if (u.IsOk(eDS.E09.E09_08) == true) {
                    v2XML.WES("E09_08", escapeXml(eDS.E09.E09_08))
                }
            };
            if (typeof eDS.E09.E09_09_0 !== 'undefined') {
                v2XML.WSE("E09_09_0");
                if (typeof eDS.E09.E09_09_0.E09_09 !== 'undefined') {
                    if (u.IsOk(eDS.E09.E09_09_0.E09_09) == true) {
                        v2XML.WES("E09_09", eDS.E09.E09_09_0.E09_09)
                    }
                };
                if (typeof eDS.E09.E09_09_0.E09_10 !== 'undefined') {
                    if (u.IsOk(eDS.E09.E09_09_0.E09_10) == true) {
                        v2XML.WES("E09_10", eDS.E09.E09_09_0.E09_10)
                    }
                };

                v2XML.WEE("E09_09_0");
            };

            if (typeof eDS.E09.E09_11 !== 'undefined') {
                if (u.IsOk(eDS.E09.E09_11) == true) {
                    v2XML.WES("E09_11", eDS.E09.E09_11)
                }
            };

            if (typeof eDS.E09.E09_12 !== 'undefined') {
                if (u.IsOk(eDS.E09.E09_12) == true) {
                    v2XML.WES("E09_12", eDS.E09.E09_12)
                }
            };

            if (typeof eDS.E09.E09_13 !== 'undefined') {
                if (u.IsOk(eDS.E09.E09_13) == true) {
                    v2XML.WES("E09_13", eDS.E09.E09_13)
                }
            };
            if (typeof eDS.E09.E09_14 !== 'undefined') {
                for (var i = 0; i < eDS.E09.E09_14.length; i++) {
                    if (u.IsOk(eDS.E09.E09_14[i]) == true) {
                        v2XML.WES("E09_14", eDS.E09.E09_14[i]);
                    }
                }
            };
            if (typeof eDS.E09.E09_15 !== 'undefined') {
                if (u.IsOk(eDS.E09.E09_15) == true) {
                    v2XML.WES("E09_15", eDS.E09.E09_15)
                }
            };
            if (typeof eDS.E09.E09_16 !== 'undefined') {
                if (u.IsOk(eDS.E09.E09_16[0]) == true) {
                    v2XML.WES("E09_16", eDS.E09.E09_16)
                }
            };

            v2XML.WEE("E09");
        };

        if (typeof eDS.E10 !== 'undefined') {
            v2XML.WSE("E10");
            if (typeof eDS.E10.E10_01 !== 'undefined') {
                if (u.IsOk(eDS.E10.E10_01) == true) {
                    v2XML.WES("E10_01", eDS.E10.E10_01);
                }
            };
            if (typeof eDS.E10.E10_02 !== 'undefined') {
                if (u.IsOk(eDS.E10.E10_02) == true) {
                    v2XML.WES("E10_02", eDS.E10.E10_02);
                }
            };

            if (typeof eDS.E10.E10_03 !== 'undefined') {
                for (var i = 0; i < eDS.E10.E10_03.length; i++) {
                    if (u.IsOk(eDS.E10.E10_03[i]) == true) {
                        v2XML.WES("E10_03", eDS.E10.E10_03[i]);
                    }
                }
            };
            if (typeof eDS.E10.E10_04 !== 'undefined') {
                for (var i = 0; i < eDS.E10.E10_04.length; i++) {
                    if (u.IsOk(eDS.E10.E10_04[i]) == true) {
                        v2XML.WES("E10_04", eDS.E10.E10_04[i]);
                    }
                }
            };

            if (typeof eDS.E10.E10_05 !== 'undefined') {
                for (var i = 0; i < eDS.E10.E10_05.length; i++) {
                    if (u.IsOk(eDS.E10.E10_05[i]) == true) {
                        v2XML.WES("E10_05", eDS.E10.E10_05[i]);
                    }
                }
            };

            if (typeof eDS.E10.E10_06_0 !== 'undefined') {
                v2XML.WSE("E10_06_0");
                if (typeof eDS.E10.E10_06_0.E10_06 !== 'undefined') {
                    if (u.IsOk(eDS.E10.E10_06_0.E10_06) == true) {
                        v2XML.WES("E10_06", escapeXml(eDS.E10.E10_06_0.E10_06));
                    }
                };

                if (typeof eDS.E10.E10_06_0.E10_07 !== 'undefined') {
                    if (u.IsOk(eDS.E10.E10_06_0.E10_07) == true) {
                        v2XML.WES("E10_07", eDS.E10.E10_06_0.E10_07);
                    }
                };

                v2XML.WEE("E10_06_0");
            };
            if (typeof eDS.E10.E10_08 !== 'undefined') {
                for (var i = 0; i < eDS.E10.E10_08.length; i++) {
                    if (u.IsOk(eDS.E10.E10_08[i]) == true) {
                        v2XML.WES("E10_08", eDS.E10.E10_08[i]);
                    }
                }
            };

            if (typeof eDS.E10.E10_09 !== 'undefined') {
                for (var i = 0; i < eDS.E10.E10_09.length; i++) {
                    if (u.IsOk(eDS.E10.E10_09[i]) == true) {
                        v2XML.WES("E10_09", eDS.E10.E10_09[i]);
                    }
                }
            };

            if (typeof eDS.E10.E10_10 !== 'undefined') {
                if (u.IsOk(eDS.E10.E10_10) == true) {
                    v2XML.WES("E10_10", eDS.E10.E10_10);
                }
            };

            v2XML.WEE("E10");
        };

        if (typeof eDS.E11 !== 'undefined') {
            v2XML.WSE("E11");

            if (typeof eDS.E11.E11_01 !== 'undefined') {
                if (u.IsOk(eDS.E11.E11_01) == true) {
                    v2XML.WES("E11_01", eDS.E11.E11_01)
                }
            };

            if (typeof eDS.E11.E11_02 !== 'undefined') {
                if (u.IsOk(eDS.E11.E11_02) == true) {
                    v2XML.WES("E11_02", eDS.E11.E11_02)
                }
            };

            if (typeof eDS.E11.E11_03 !== 'undefined') {
                for (var i = 0; i < eDS.E11.E11_03.length; i++) {
                    if (u.IsOk(eDS.E11.E11_03[i]) == true) {
                        v2XML.WES("E11_03", eDS.E11.E11_03[i]);
                    }
                }
            };

            if (typeof eDS.E11.E11_04 !== 'undefined') {
                if (u.IsOk(eDS.E11.E11_04) == true) {
                    v2XML.WES("E11_04", eDS.E11.E11_04)
                }
            };
            if (typeof eDS.E11.E11_05 !== 'undefined') {
                if (u.IsOk(eDS.E11.E11_05) == true) {
                    v2XML.WES("E11_05", eDS.E11.E11_05)
                }
            };
            if (typeof eDS.E11.E11_06 !== 'undefined') {
                if (u.IsOk(eDS.E11.E11_06) == true) {
                    v2XML.WES("E11_06", eDS.E11.E11_06)
                }
            };
            if (typeof eDS.E11.E11_07 !== 'undefined') {
                if (u.IsOk(eDS.E11.E11_07) == true) {
                    v2XML.WES("E11_07", eDS.E11.E11_07)
                }
            };
            if (typeof eDS.E11.E11_08 !== 'undefined') {
                if (u.IsOk(eDS.E11.E11_08) == true) {
                    v2XML.WES("E11_08", eDS.E11.E11_08)
                }
            };
            if (typeof eDS.E11.E11_09 !== 'undefined') {
                if (u.IsOk(eDS.E11.E11_09) == true) {
                    v2XML.WES("E11_09", eDS.E11.E11_09)
                }
            };
            if (typeof eDS.E11.E11_10 !== 'undefined') {
                if (eDS.E11.E11_10.length !== 0) {
                    v2XML.WES("E11_10", eDS.E11.E11_10)
                }
            };

            if (typeof eDS.E11.E11_11 !== 'undefined') {
                for (var i = 0; i < eDS.E11.E11_11.length; i++) {
                    if (u.IsOk(eDS.E11.E11_11[i]) == true) {
                        v2XML.WES("E11_11", eDS.E11.E11_11[i]);
                    }
                }
            };

            v2XML.WEE("E11");
        };
        
        if (typeof eDS.E12 !== 'undefined') {
            v2XML.WSE("E12");

            if (typeof eDS.E12.E12_01 !== 'undefined') {
                for (var i = 0; i < eDS.E12.E12_01.length; i++) {
                    if (u.IsOk(eDS.E12.E12_01[i]) == true) {
                        v2XML.WES("E12_01", eDS.E12.E12_01[i]);
                    }
                }
            };

            if (typeof eDS.E12.E12_02 !== 'undefined') {
                if (u.IsOk(eDS.E12.E12_02) == true) {
                    v2XML.WES("E12_02", escapeXml(eDS.E12.E12_02));
                }
            };

            if (typeof eDS.E12.E12_03 !== 'undefined') {
                if (u.IsOk(eDS.E12.E12_03) == true) {
                    v2XML.WES("E12_03", escapeXml(eDS.E12.E12_03));
                }
            };


            if (typeof eDS.E12.E12_4_0 !== 'undefined') {
                v2XML.WSE("E12_4_0");
                if (typeof eDS.E12.E12_4_0.E12_06 !== 'undefined') {
                    if (u.IsOk(eDS.E12.E12_4_0.E12_06) == true) {
                        v2XML.WES("E12_06", escapeXml(eDS.E12.E12_4_0.E12_06));
                    }
                };

                if (typeof eDS.E12.E12_4_0.E12_04 !== 'undefined') {
                    if (u.IsOk(eDS.E12.E12_4_0.E12_04) == true) {
                        v2XML.WES("E12_04", escapeXml(eDS.E12.E12_4_0.E12_04))
                    }
                };

                if (typeof eDS.E12.E12_4_0.E12_05 !== 'undefined') {
                    if (u.IsOk(eDS.E12.E12_4_0.E12_05) == true) {
                        v2XML.WES("E12_05", escapeXml(eDS.E12.E12_4_0.E12_05));
                    }
                };
                v2XML.WEE("E12_4_0");
            };

            if (typeof eDS.E12.E12_07 !== 'undefined') {
                for (var i = 0; i < eDS.E12.E12_07.length; i++) {
                    if (u.IsOk(eDS.E12.E12_07[i]) == true) {
                        v2XML.WES("E12_07", eDS.E12.E12_07[i]);
                    }
                }
            };

            if (typeof eDS.E12.E12_08 !== 'undefined') {
                for (var i = 0; i < eDS.E12.E12_08.length; i++) {
                    if (u.IsOk(eDS.E12.E12_08[i]) == true) {
                        v2XML.WES("E12_08", eDS.E12.E12_08[i]);
                    }
                }
            };
            if (typeof eDS.E12.E12_09 !== 'undefined') {
                for (var i = 0; i < eDS.E12.E12_09.length; i++) {
                    if (u.IsOk(eDS.E12.E12_09[i]) == true) {
                        v2XML.WES("E12_09", eDS.E12.E12_09[i]);
                    }
                }
            };

            if (typeof eDS.E12.E12_10 !== 'undefined') {
                for (var i = 0; i < eDS.E12.E12_10.length; i++) {
                    if (u.IsOk(eDS.E12.E12_10[i]) == true) {
                        v2XML.WES("E12_10", eDS.E12.E12_10[i]);
                    }
                }
            };

            if (typeof eDS.E12.E12_11 !== 'undefined') {
                for (var i = 0; i < eDS.E12.E12_11.length; i++) {
                    if (u.IsOk(eDS.E12.E12_11[i]) == true) {
                        v2XML.WES("E12_11", eDS.E12.E12_11[i]);
                    }
                }
            };

            if (typeof eDS.E12.E12_12_0 !== 'undefined') {
                for (var x = 0; x < eDS.E12.E12_12_0.length; x++) {

                    if (typeof eDS.E12.E12_12_0[x].E12_12 !== 'undefined') {
                        v2XML.WSE("E12_12_0");
                        if (typeof eDS.E12.E12_12_0[x].E12_12 !== 'undefined') {

                            if (u.IsOk(eDS.E12.E12_12_0[x].E12_12) == true) {
                                v2XML.WES("E12_12", eDS.E12.E12_12_0[x].E12_12);
                            }
                        };

                        if (typeof eDS.E12.E12_12_0[x].E12_13 !== 'undefined') {
                            v2XML.WES("E12_13", eDS.E12.E12_12_0[x].E12_13)
                        };
                        v2XML.WEE("E12_12_0");
                    }
                }
            };

            if (typeof eDS.E12.E12_14_0 !== 'undefined') {
                if (eDS.E12.E12_14_0.length > 0) {
                    for (var x = 0; x < eDS.E12.E12_14_0.length; x++) {
                        v2XML.WSE("E12_14_0");
                        if (typeof eDS.E12.E12_14_0[x].E12_14 !== 'undefined') {

                            if (u.IsOk(eDS.E12.E12_14_0[x].E12_14) == true) {
                                v2XML.WES("E12_14", eDS.E12.E12_14_0[x].E12_14);
                            }

                        };
                        if (typeof eDS.E12.E12_14_0[x].E12_15_0 !== 'undefined') {

                            v2XML.WSE("E12_15_0");
                            if (typeof eDS.E12.E12_14_0[x].E12_15_0.E12_15 !== 'undefined') {
                                if (u.IsOk(eDS.E12.E12_14_0[x].E12_15_0.E12_15) == true) {
                                    v2XML.WES("E12_15", eDS.E12.E12_14_0[x].E12_15_0.E12_15)
                                }
                            };

                            if (typeof eDS.E12.E12_14_0[x].E12_15_0.E12_16 !== 'undefined') {
                                if (u.IsOk(eDS.E12.E12_14_0[x].E12_15_0.E12_16) == true) {
                                    v2XML.WES("E12_16", eDS.E12.E12_14_0[x].E12_15_0.E12_16)
                                }
                            }
                            v2XML.WEE("E12_15_0");

                        };
                        if (typeof eDS.E12.E12_14_0[x].E12_17 !== 'undefined') {
                            if (u.IsOk(eDS.E12.E12_14_0[x].E12_17) == true) {
                                v2XML.WES("E12_17", eDS.E12.E12_14_0[x].E12_17)
                            }
                        };
                        v2XML.WEE("E12_14_0");

                    }
                }
            };

            if (typeof eDS.E12.E12_18 !== 'undefined') {
                if (u.IsOk(eDS.E12.E12_18) == true) {
                    v2XML.WES("E12_18", eDS.E12.E12_18)
                }
            };

            if (typeof eDS.E12.E12_19 !== 'undefined') {
                for (var i = 0; i < eDS.E12.E12_19.length; i++) {
                    if (u.IsOk(eDS.E12.E12_19[i]) == true) {
                        v2XML.WES("E12_19", eDS.E12.E12_19[i]);
                    }
                }
            };
            if (typeof eDS.E12.E12_20 !== 'undefined') {
                if (u.IsOk(eDS.E12.E12_20) == true) {
                    v2XML.WES("E12_20", eDS.E12.E12_20)
                }
            };

            v2XML.WEE("E12");

        };

        if (typeof eDS.E13 !== 'undefined') 
        {

            v2XML.WSE("E13");
            

            if (typeof eDS.E13.E13_01 !== 'undefined') {

                if (u.IsOk(eDS.E13.E13_01) == true) {
                    var xmlString = eDS.E13.E13_01;
                    //var str = xmlString.replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g, '')
                    var someText = xmlString.replace(/(\r\n|\n|\r)/gm, "");
                    v2XML.WES("E13_01", escapeXml(someText));
                }
            }
            v2XML.WEE("E13");
        };

        if (typeof eDS.E14 !== 'undefined') {
            for (var x = 0; x < eDS.E14.length; x++) {
                if (typeof eDS.E14[x] !== 'undefined') {
                    var obj = eDS.E14[x];
                    v2XML.WSE("E14");
                    if (typeof obj.E14_01 !== 'undefined') {
                        if (u.IsOk(obj.E14_01) == true) {
                            v2XML.WES("E14_01", obj.E14_01.toString())
                        }
                    };
                    if (typeof obj.E14_02 !== 'undefined') {
                        if (u.IsOk(obj.E14_02) == true) {
                            v2XML.WES("E14_02", obj.E14_02)
                        }
                    };
                    if (typeof obj.E14_03 !== 'undefined') {
                        for (var i = 0; i < obj.E14_03; i++) {
                            if (u.IsOk(obj.E14_03[i]) == true) {
                                v2XML.WES("E14_03", obj.E14_03[i]);
                            }
                        }
                    };

                    if (typeof obj.E14_04_0 !== 'undefined') {
                        v2XML.WSE("E14_04_0");

                        if (typeof obj.E14_04_0.E14_04 !== 'undefined') {
                            if (u.IsOk(obj.E14_04_0.E14_04) == true) {
                                v2XML.WES("E14_04", obj.E14_04_0.E14_04)
                            }
                        };
                        if (typeof obj.E14_04_0.E14_05 !== 'undefined') {
                            if (u.IsOk(obj.E14_04_0.E14_05) == true) {
                                v2XML.WES("E14_05", obj.E14_04_0.E14_05)
                            }
                        };
                        if (typeof obj.E14_04_0.E14_06 !== 'undefined') {
                            if (u.IsOk(obj.E14_04_0.E14_06) == true) {
                                v2XML.WES("E14_06", obj.E14_04_0.E14_06)
                            }
                        };
                        v2XML.WEE("E14_04_0");
                    };

                    if (typeof obj.E14_07 !== 'undefined') {
                        if (u.IsOk(obj.E14_07) == true) {
                            v2XML.WES("E14_07", obj.E14_07)
                        }
                    };
                    if (typeof obj.E14_08 !== 'undefined') {
                        if (u.IsOk(obj.E14_08) == true) {
                            v2XML.WES("E14_08", obj.E14_08)
                        }
                    };
                    if (typeof obj.E14_09 !== 'undefined') {
                        if (u.IsOk(obj.E14_09) == true) {
                            v2XML.WES("E14_09", obj.E14_09)
                        }
                    };
                    if (typeof obj.E14_10 !== 'undefined') {
                        if (u.IsOk(obj.E14_10) == true) {
                            v2XML.WES("E14_10", obj.E14_10)
                        }
                    };
                    if (typeof obj.E14_11 !== 'undefined') {
                        if (u.IsOk(obj.E14_11) == true) {
                            v2XML.WES("E14_11", obj.E14_11)
                        }
                    };
                    if (typeof obj.E14_12 !== 'undefined') {
                        if (u.IsOk(obj.E14_12) == true) {
                            v2XML.WES("E14_12", obj.E14_12)
                        }
                    };
                    if (typeof obj.E14_13 !== 'undefined') {
                        if (u.IsOk(obj.E14_13) == true) {
                            v2XML.WES("E14_13", obj.E14_13)
                        }
                    };
                    if (typeof obj.E14_14 !== 'undefined') {
                        if (u.IsOk(obj.E14_14) == true) {
                            v2XML.WES("E14_14", obj.E14_14)
                        }
                    };

                    if (typeof obj.E14_15_0 !== 'undefined') {
                        v2XML.WSE("E14_15_0");
                        if (typeof obj.E14_15_0.E14_15 !== 'undefined') {
                            if (u.IsOk(obj.E14_15_0.E14_15) == true) {
                                v2XML.WES("E14_15", obj.E14_15_0.E14_15)
                            }
                        };

                        if (typeof obj.E14_15_0.E14_16 !== 'undefined') {
                            if (u.IsOk(obj.E14_15_0.E14_16) == true) {
                                v2XML.WES("E14_16", obj.E14_15_0.E14_16)
                            }
                        };

                        if (typeof obj.E14_15_0.E14_17 !== 'undefined') {
                            if (u.IsOk(obj.E14_15_0.E14_17) == true) {
                                v2XML.WES("E14_17", obj.E14_15_0.E14_17)
                            }
                        };

                        if (typeof obj.E14_15_0.E14_18 !== 'undefined') {
                            if (u.IsOk(obj.E14_15_0.E14_18) == true) {
                                v2XML.WES("E14_18", obj.E14_15_0.E14_18)
                            }
                        };

                        v2XML.WEE("E14_15_0");
                    };

                    if (typeof obj.E14_19 !== 'undefined') {
                        if (u.IsOk(obj.E14_19) == true) {
                            v2XML.WES("E14_19", obj.E14_19)
                        }
                    };
                    if (typeof obj.E14_20_0 !== 'undefined') {

                        v2XML.WSE("E14_20_0");
                        if (typeof obj.E14_20_0.E14_20 !== 'undefined') {
                            if (u.IsOk(obj.E14_20_0.E14_20) == true) {
                                v2XML.WES("E14_20", obj.E14_20_0.E14_20)
                            }
                        };

                        if (typeof obj.E14_20_0.E14_21 !== 'undefined') {
                            if (u.IsOk(obj.E14_20_0.E14_21) == true) {
                                v2XML.WES("E14_21", obj.E14_20_0.E14_21)
                            }
                        };
                        v2XML.WEE("E14_20_0");
                    };

                    if (typeof obj.E14_22 !== 'undefined') {
                        if (u.IsOk(obj.E14_22) == true) {
                            v2XML.WES("E14_22", obj.E14_22)
                        }
                    };
                    if (typeof obj.E14_23 !== 'undefined') {
                        if (u.IsOk(obj.E14_23) == true) {
                            v2XML.WES("E14_23", obj.E14_23)
                        }
                    };
                    if (typeof obj.E14_24 !== 'undefined') {
                        if (u.IsOk(obj.E14_24) == true) {
                            v2XML.WES("E14_24", obj.E14_24)
                        }
                    };
                    if (typeof obj.E14_25 !== 'undefined') {
                        if (u.IsOk(obj.E14_25) == true) {
                            v2XML.WES("E14_25", obj.E14_25)
                        }
                    };
                    if (typeof obj.E14_26 !== 'undefined') {
                        if (u.IsOk(obj.E14_26) == true) {
                            v2XML.WES("E14_26", obj.E14_26)
                        }
                    };
                    if (typeof obj.E14_27 !== 'undefined') {
                        if (u.IsOk(obj.E14_27) == true) {
                            v2XML.WES("E14_27", obj.E14_27)
                        }
                    };

                    if (typeof obj.E14_28 !== 'undefined') {
                        if (u.IsOk(obj.E14_28) == true) {
                            v2XML.WES("E14_28", obj.E14_28)
                        }
                    };
                    v2XML.WEE("E14");
                }
            }
        };

        if (typeof eDS.E15 !== 'undefined') {
            v2XML.WSE("E15");

            if (typeof eDS.E15.E15_01 !== 'undefined') {
                if (u.IsOk(eDS.E15.E15_01) == true) {
                    for (var x = 0; x < eDS.E15.E15_01.length; x++) {
                        v2XML.WES("E15_01", eDS.E15.E15_01[x]);
                    }
                }
            };

            if (typeof eDS.E15.E15_02 !== 'undefined') {
                if (u.IsOk(eDS.E15.E15_02) == true) {
                    for (var x = 0; x < eDS.E15.E15_02.length; x++) {
                        v2XML.WES("E15_02", eDS.E15.E15_02[x]);
                    }
                }
            };

            if (typeof eDS.E15.E15_03 !== 'undefined') {
                if (u.IsOk(eDS.E15.E15_03) == true) {
                    for (var x = 0; x < eDS.E15.E15_03.length; x++) {
                        v2XML.WES("E15_03", eDS.E15.E15_03[x]);
                    }
                }
            };


            if (typeof eDS.E15.E15_04 !== 'undefined') {
                if (u.IsOk(eDS.E15.E15_04) == true) {
                    for (var x = 0; x < eDS.E15.E15_04.length; x++) {
                        v2XML.WES("E15_04", eDS.E15.E15_04[x]);
                    }
                }
            };

            if (typeof eDS.E15.E15_05 !== 'undefined') {
                if (u.IsOk(eDS.E15.E15_05) == true) {
                    for (var x = 0; x < eDS.E15.E15_05.length; x++) {
                        v2XML.WES("E15_05", eDS.E15.E15_05[x]);
                    }
                }
            };

            if (typeof eDS.E15.E15_06 !== 'undefined') {
                if (u.IsOk(eDS.E15.E15_06) == true) {
                    for (var x = 0; x < eDS.E15.E15_06.length; x++) {
                        v2XML.WES("E15_06", eDS.E15.E15_06[x]);
                    }
                }
            };
            if (typeof eDS.E15.E15_07 !== 'undefined') {
                if (u.IsOk(eDS.E15.E15_07) == true) {
                    for (var x = 0; x < eDS.E15.E15_07.length; x++) {
                        v2XML.WES("E15_07", eDS.E15.E15_07[x]);
                    }
                }
            };
            if (typeof eDS.E15.E15_08 !== 'undefined') {
                if (u.IsOk(eDS.E15.E15_08) == true) {
                    for (var x = 0; x < eDS.E15.E15_08.length; x++) {
                        v2XML.WES("E15_08", eDS.E15.E15_08[x]);
                    }
                }
            };
            if (typeof eDS.E15.E15_09 !== 'undefined') {
                if (u.IsOk(eDS.E15.E15_09) == true) {
                    for (var x = 0; x < eDS.E15.E15_09.length; x++) {
                        v2XML.WES("E15_09", eDS.E15.E15_09[x]);
                    }
                }
            };
            if (typeof eDS.E15.E15_10 !== 'undefined') {
                if (u.IsOk(eDS.E15.E15_10) == true) {
                    for (var x = 0; x < eDS.E15.E15_10.length; x++) {
                        v2XML.WES("E15_10", eDS.E15.E15_10[x]);
                    }
                }
            };
            if (typeof eDS.E15.E15_11 !== 'undefined') {
                if (u.IsOk(eDS.E15.E15_11) == true) {
                    for (var x = 0; x < eDS.E15.E15_11.length; x++) {
                        v2XML.WES("E15_11", eDS.E15.E15_11[x]);
                    }
                }
            };
            

            v2XML.WEE("E15");
        };
        
        if (typeof eDS.E16 !== 'undefined') {
            v2XML.WSE("E16");

            if (typeof eDS.E16.E16_01 !== 'undefined') {
                if (u.IsOk(eDS.E16.E16_01) == true) {
                    v2XML.WES("E16_01", eDS.E16.E16_01)
                }
            };

            if (typeof eDS.E16.E16_02 !== 'undefined') {
                if (u.IsOk(eDS.E16.E16_02) == true) {
                    v2XML.WES("E16_02", eDS.E16.E16_02)
                }
            };

            if (typeof eDS.E16.E16_00_0 !== 'undefined') {
                for (var i = 0; i < eDS.E16.E16_00_0.length; i++) {
                    var obj = {};
                    obj = eDS.E16.E16_00_0[i];
                    v2XML.WSE("E16_00_0");

                    if ((typeof obj.E16_03 !== 'undefined') && (u.IsOk(obj.E16_03) == true)) {
                        v2XML.WES("E16_03", obj.E16_03)
                    };
                    if (typeof obj.E16_04 !== 'undefined') {
                        for (var x = 0; x < obj.E16_04.length; x++) {
                            if (u.IsOk(obj.E16_04[i]) == true) {
                                v2XML.WES("E16_04", obj.E16_04[x])
                            }
                        }
                    };
                    if (typeof obj.E16_05 !== 'undefined') {
                        for (var x = 0; x < obj.E16_05.length; x++) {
                            if (u.IsOk(obj.E16_05[i]) == true) {
                                v2XML.WES("E16_05", obj.E16_05[x])
                            }
                        }
                    };
                    if (typeof obj.E16_06 !== 'undefined') {
                        for (var x = 0; x < obj.E16_06.length; x++) {
                            if (u.IsOk(obj.E16_06[i]) == true) {
                                v2XML.WES("E16_06", obj.E16_06[x])
                            }
                        }
                    };
                    if (typeof obj.E16_07 !== 'undefined') {
                        for (var x = 0; x < obj.E16_07.length; x++) {
                            if (u.IsOk(obj.E16_07[i]) == true) {
                                v2XML.WES("E16_07", obj.E16_07[x])
                            }
                        }
                    };
                    if (typeof obj.E16_08 !== 'undefined') {
                        for (var x = 0; x < obj.E16_08.length; x++) {
                            if (u.IsOk(obj.E16_08[i]) == true) {
                                v2XML.WES("E16_08", obj.E16_08[x])
                            }
                        }
                    };
                    if (typeof obj.E16_09 !== 'undefined') {
                        for (var x = 0; x < obj.E16_09.length; x++) {
                            if (u.IsOk(obj.E16_09[i]) == true) {
                                v2XML.WES("E16_09", obj.E16_09[x])
                            }
                        }
                    };

                    if (typeof obj.E16_10 !== 'undefined') {
                        for (var x = 0; x < obj.E16_10.length; x++) {
                            if (u.IsOk(obj.E16_10[i]) == true) {
                                v2XML.WES("E16_10", obj.E16_10[x])
                            }
                        }
                    };

                    if (typeof obj.E16_11 !== 'undefined') {
                        for (var x = 0; x < obj.E16_11.length; x++) {
                            if (u.IsOk(obj.E16_11[i]) == true) {
                                v2XML.WES("E16_11", obj.E16_11[x])
                            }
                        }
                    };
                    if (typeof obj.E16_12 !== 'undefined') {
                        for (var x = 0; x < obj.E16_12.length; x++) {
                            if (u.IsOk(obj.E16_12[i]) == true) {
                                v2XML.WES("E16_12", obj.E16_12[x])
                            }
                        }
                    };
                    if (typeof obj.E16_13 !== 'undefined') {
                        for (var x = 0; x < obj.E16_13.length; x++) {
                            if (u.IsOk(obj.E16_13[i]) == true) {
                                v2XML.WES("E16_13", obj.E16_13[x])
                            }
                        }
                    };
                    if (typeof obj.E16_14 !== 'undefined') {
                        for (var x = 0; x < obj.E16_14.length; x++) {
                            if (u.IsOk(obj.E16_14[i]) == true) {
                                v2XML.WES("E16_14", obj.E16_14[x])
                            }
                        }
                    };
                    if (typeof obj.E16_15 !== 'undefined') {
                        for (var x = 0; x < obj.E16_15.length; x++) {
                            if (u.IsOk(obj.E16_15[i]) == true) {
                                v2XML.WES("E16_15", obj.E16_15[x])
                            }
                        }
                    };
                    if (typeof obj.E16_16 !== 'undefined') {
                        for (var x = 0; x < obj.E16_16.length; x++) {
                            if (u.IsOk(obj.E16_16[i]) == true) {
                                v2XML.WES("E16_16", obj.E16_16[x])
                            }
                        }
                    };
                    if (typeof obj.E16_17 !== 'undefined') {
                        for (var x = 0; x < obj.E16_17.length; x++) {
                            if (u.IsOk(obj.E16_17[i]) == true) {
                                v2XML.WES("E16_17", obj.E16_17[x])
                            }
                        }
                    };
                    if (typeof obj.E16_18 !== 'undefined') {
                        for (var x = 0; x < obj.E16_18.length; x++) {
                            if (u.IsOk(obj.E16_18[i]) == true) {
                                v2XML.WES("E16_18", obj.E16_18[x])
                            }
                        }
                    };
                    if (typeof obj.E16_19 !== 'undefined') {
                        for (var x = 0; x < obj.E16_19.length; x++) {
                            if (u.IsOk(obj.E16_19[i]) == true) {
                                v2XML.WES("E16_19", obj.E16_19[x])
                            }
                        }
                    };
                    if (typeof obj.E16_20 !== 'undefined') {
                        for (var x = 0; x < obj.E16_20.length; x++) {
                            if (u.IsOk(obj.E16_20[i]) == true) {
                                v2XML.WES("E16_20", obj.E16_20[x])
                            }
                        }
                    };
                    if (typeof obj.E16_21 !== 'undefined') {
                        for (var x = 0; x < obj.E16_21.length; x++) {
                            if (u.IsOk(obj.E16_21[i]) == true) {
                                v2XML.WES("E16_21", obj.E16_21[x])
                            }
                        }
                    };
                    if (typeof obj.E16_22 !== 'undefined') {
                        for (var x = 0; x < obj.E16_22.length; x++) {
                            if (u.IsOk(obj.E16_22[i]) == true) {
                                v2XML.WES("E16_22", obj.E16_22[x])
                            }
                        }
                    };
                    if (typeof obj.E16_23 !== 'undefined') {
                        for (var x = 0; x < obj.E16_23.length; x++) {
                            if (u.IsOk(obj.E16_23[i]) == true) {
                                v2XML.WES("E16_23", obj.E16_23[x])
                            }
                        }
                    };
                    if (typeof obj.E16_24 !== 'undefined') {
                        for (var x = 0; x < obj.E16_24.length; x++) {
                            if (u.IsOk(obj.E16_24[i]) == true) {
                                v2XML.WES("E16_24", obj.E16_24[x])
                            }
                        }
                    }
                    v2XML.WEE("E16_00_0");
                };
                v2XML.WEE("E16");
            }
        };

        if (typeof eDS.E17 !== 'undefined') {
            for (var i = 0; i < eDS.E17.length; i++) {
                if (typeof eDS.E17[i] !== 'undefined') {
                    v2XML.WSE("E17");
                    if (u.IsOk(eDS.E17[i]) == true) {
                        v2XML.WES("E17_01", eDS.E17[i]);
                    };
                    v2XML.WEE("E17");
                }
            }
        };

        if (typeof eDS.E18 !== 'undefined') {
            for (var x = 0; x < eDS.E18.length; x++) {
                var obj = {};
                obj = eDS.E18[x];
                v2XML.WSE("E18");
                if ((typeof obj.E18_01 !== 'undefined') && (u.IsOk(obj.E18_01) == true)) {
                    if (u.IsOk(obj.E18_01) == true) {
                        v2XML.WES("E18_01", obj.E18_01)
                    }
                };

                if (typeof obj.E18_02 !== 'undefined') {
                    if (u.IsOk(obj.E18_02) == true) {
                        v2XML.WES("E18_02", obj.E18_02)
                    }
                };
                if (typeof obj.E18_03 !== 'undefined') {
                    if (u.IsOk(obj.E18_03) == true) {
                        var d = obj.E18_03.toString();
                        var da = d.substring(0, 29)

                        v2XML.WES("E18_03", da)
                    }
                };
                if (typeof obj.E18_04 !== 'undefined') {
                    if (u.IsOk(obj.E18_04) == true) {
                        v2XML.WES("E18_04", obj.E18_04)
                    }
                };

                if (typeof obj.E18_05_0 !== 'undefined') {
                    var iobj = obj.E18_05_0;
                    v2XML.WSE("E18_05_0");
                    if (typeof iobj.E18_05 !== 'undefined') {
                        if (u.IsOk(iobj.E18_05) == true) {
                            v2XML.WES("E18_05", iobj.E18_05)
                        }
                    };
                    if (typeof iobj.E18_06 !== 'undefined') {
                        if (u.IsOk(iobj.E18_06) == true) {
                            v2XML.WES("E18_06", iobj.E18_06)
                        }
                    };
                    v2XML.WEE("E18_05_0");


                };

                if (typeof obj.E18_07 !== 'undefined') {
                    if (u.IsOk(obj.E18_07) == true) {
                        v2XML.WES("E18_07", obj.E18_07)
                    }
                };

                if (typeof obj.E18_08 !== 'undefined') {
                    for (var xx = 0; xx < obj.E18_08.length; xx++) {
                        if (u.IsOk(obj.E18_08[xx]) == true) {
                            v2XML.WES("E18_08", obj.E18_08[xx]);
                        }
                    }
                };
                if (typeof obj.E18_09 !== 'undefined') {
                    if (u.IsOk(obj.E18_09) == true) {
                        v2XML.WES("E18_09", escapeXml(obj.E18_09))
                    }
                };
                if (typeof obj.E18_10 !== 'undefined') {
                    if (u.IsOk(obj.E18_10) == true) {
                        v2XML.WES("E18_10", obj.E18_10)
                    }
                };
                if (typeof obj.E18_11 !== 'undefined') {
                    if (u.IsOk(obj.E18_11) == true) {
                        v2XML.WES("E18_11", escapeXml(obj.E18_11))
                    }
                };
                v2XML.WEE("E18");
            }
        };

        if (typeof eDS.E19 !== 'undefined')
        {
            v2XML.WSE("E19");
            if (typeof eDS.E19.E19_01_0 !== 'undefined') {
          
                for (var x = 0; x < eDS.E19.E19_01_0.length; x++)
                {
                    v2XML.WSE("E19_01_0");
                    var eObj = {};
                    eObj = eDS.E19.E19_01_0[x];
                    if (typeof eObj.E19_01 !== 'undefined') {
                        if (u.IsOk(eObj.E19_01) == true) {
                            v2XML.WES("E19_01", eObj.E19_01)
                        }
                    };

                    if (typeof eObj.E19_02 !== 'undefined') {
                        if (u.IsOk(eObj.E19_02) == true) {
                            v2XML.WES("E19_02", eObj.E19_02)
                        }
                    };

                    if (typeof eObj.E19_03 !== 'undefined') {
                        if (u.IsOk(eObj.E19_03) == true) {
                            v2XML.WES("E19_03", escapeXml(eObj.E19_03));
                        }
                    };


                    if (typeof eObj.E19_04 !== 'undefined') {
                        if (u.IsOk(eObj.E19_04) == true) {
                            v2XML.WES("E19_04", escapeXml(eObj.E19_04));
                        }
                    };

                    if (typeof eObj.E19_05 !== 'undefined') {
                        if (u.IsOk(eObj.E19_05) == true) {
                            v2XML.WES("E19_05", escapeXml(eObj.E19_05))
                        }
                    };

                    if (typeof eObj.E19_06 !== 'undefined') {
                        if (u.IsOk(eObj.E19_06) == true) {
                            v2XML.WES("E19_06", eObj.E19_06)
                        }
                    };

                    if (typeof eObj.E19_07 !== 'undefined') {
                        for (var i = 0; i < eObj.E19_07.length; i++) {
                            if (u.IsOk(eObj.E19_07[i]) == true) {
                                v2XML.WES("E19_07", eObj.E19_07[i].toString());
                            }
                        }
                    };

                    if (typeof eObj.E19_08 !== 'undefined') {
                        if (u.IsOk(eObj.E19_08) == true) {
                            v2XML.WES("E19_08", eObj.E19_08)
                        }
                    };
                    if (typeof eObj.E19_09 !== 'undefined') {
                        if (u.IsOk(eObj.E19_09) == true) {
                            v2XML.WES("E19_09", eObj.E19_09);
                        }
                    };

                    if (typeof eObj.E19_10 !== 'undefined') {
                        if (u.IsOk(eObj.E19_10) == true) {
                            v2XML.WES("E19_10", eObj.E19_10)
                        }
                    };
                    if (typeof eObj.E19_11 !== 'undefined') {
                        if (u.IsOk(eObj.E19_11) == true) {
                            v2XML.WES("E19_11", escapeXml(eObj.E19_11));
                        }
                    };

                    v2XML.WEE("E19_01_0");
                }
            };

            v2XML.WEE("E19");
        };


        if (typeof eDS.E20 !== 'undefined') {

            v2XML.WSE("E20");

            if (typeof eDS.E20.E20_01 !== 'undefined') {
                if (u.IsOk(eDS.E20.E20_01) == true) {
                    v2XML.WES("E20_01", escapeXml(eDS.E20.E20_01));
                }
            };
            if (typeof eDS.E20.E20_02 !== 'undefined') {
                if (u.IsOk(eDS.E20.E20_02) == true) {
                    v2XML.WES("E20_02", escapeXml(eDS.E20.E20_02));
                }
            };
            if (typeof eDS.E20.E20_03_0 !== 'undefined') {
                v2XML.WSE("E20_03_0");
                var obj1 = eDS.E20.E20_03_0;
                if (typeof obj1.E20_03 !== 'undefined') {
                    if (u.IsOk(obj1.E20_03) == true) {
                        v2XML.WES("E20_03", escapeXml(obj1.E20_03));
                    }
                };
                if (typeof obj1.E20_04 !== 'undefined') {
                    if (u.IsOk(obj1.E20_04) == true) {
                        v2XML.WES("E20_04", obj1.E20_04)
                    }
                };
                if (typeof obj1.E20_05 !== 'undefined') {
                    if (u.IsOk(obj1.E20_05) == true) {
                        v2XML.WES("E20_05", obj1.E20_05)
                    }
                };
                if (typeof obj1.E20_07 !== 'undefined') {
                    if (u.IsOk(obj1.E20_07) == true) {
                        v2XML.WES("E20_07", escapeXml(obj1.E20_07));
                    }
                };
                v2XML.WEE("E20_03_0");
            };

            if (typeof eDS.E20.E20_06 !== 'undefined') {
                if (u.IsOk(eDS.E20.E20_06) == true) {
                    v2XML.WES("E20_06", eDS.E20.E20_06)
                }
            };
            if (typeof eDS.E20.E20_08 !== 'undefined') {
                if (u.IsOk(eDS.E20.E20_08) == true) {
                    v2XML.WES("E20_08", escapeXml(eDS.E20.E20_08));
                }
            };
            if (typeof eDS.E20.E20_09 !== 'undefined') {
                if (u.IsOk(eDS.E20.E20_09) == true) {
                    v2XML.WES("E20_09", eDS.E20.E20_09)
                }
            };
            if (typeof eDS.E20.E20_10 !== 'undefined') {
                if (u.IsOk(eDS.E20.E20_10) == true) {
                    v2XML.WES("E20_10", eDS.E20.E20_10)
                }
            };
            if (typeof eDS.E20.E20_11 !== 'undefined') {
                if (u.IsOk(eDS.E20.E20_11) == true) {
                    v2XML.WES("E20_11", eDS.E20.E20_11)
                }
            };
            if (typeof eDS.E20.E20_12 !== 'undefined') {
                if (u.IsOk(eDS.E20.E20_12) == true) {
                    v2XML.WES("E20_12", eDS.E20.E20_12)
                }
            };
            if (typeof eDS.E20.E20_13 !== 'undefined') {
                if (u.IsOk(eDS.E20.E20_13) == true) {
                    v2XML.WES("E20_13", eDS.E20.E20_13)
                }
            };
            if (typeof eDS.E20.E20_14 !== 'undefined') {
                if (u.IsOk(eDS.E20.E20_14) == true) {
                    v2XML.WES("E20_14", eDS.E20.E20_14)
                }
            };
            if (typeof eDS.E20.E20_15 !== 'undefined') {
                if (u.IsOk(eDS.E20.E20_15) == true) {
                    v2XML.WES("E20_15", eDS.E20.E20_15)
                }
            };
            if (typeof eDS.E20.E20_16 !== 'undefined') {
                if (u.IsOk(eDS.E20.E20_16) == true) {
                    v2XML.WES("E20_16", eDS.E20.E20_16)
                }
            }
            if (typeof eDS.E20.E20_17 !== 'undefined') {
                if (u.IsOk(eDS.E20.E20_17) == true) {
                    v2XML.WES("E20_17", eDS.E20.E20_17)
                }
            };
            v2XML.WEE("E20");
        };

        if (typeof eDS.E21 !== 'undefined') {
            for (var i = 0; i < eDS.E21.length; i++) {
                var obj = eDS.E21[i];
                v2XML.WSE("E21");

                if (typeof obj.E21_01 !== 'undefined') {
                    if (u.IsOk(obj.E21_01) == true) {
                        v2XML.WES("E21_01", obj.E21_01)
                    }
                };

                if (typeof obj.E21_02 !== 'undefined') {
                    if (u.IsOk(obj.E21_02) == true) {
                        v2XML.WES("E21_02", obj.E21_02)
                    }
                };
                if (typeof obj.E21_03_0 !== 'undefined') {
                    v2XML.WSE("E21_03_0");
                    if (typeof obj.E21_03_0.E21_03 !== 'undefined') {
                        if (u.IsOk(obj.E21_03_0.E21_03) == true) {
                            v2XML.WES("E21_03", escapeXml(obj.E21_03_0.E21_03));
                        }
                    };

                    if (typeof obj.E21_03_0.E21_04 !== 'undefined') {
                        v2XML.WES("E21_04", obj.E21_03_0.E21_04)
                    };
                    v2XML.WEE("E21_03_0");
                };

                if (typeof obj.E21_05 !== 'undefined') {
                    if (u.IsOk(obj.E21_05) == true) {
                        v2XML.WES("E21_05", obj.E21_05)
                    }
                };
                if (typeof obj.E21_06 !== 'undefined') {
                    if (u.IsOk(obj.E21_06) == true) {
                        v2XML.WES("E21_06", obj.E21_06)
                    }
                };

                if (typeof obj.E21_07 !== 'undefined') {
                    if (u.IsOk(obj.E21_07) == true) {
                        v2XML.WES("E21_07", obj.E21_07)
                    }
                };

                if (typeof obj.E21_08 !== 'undefined') {
                    if (u.IsOk(obj.E21_08) == true) {
                        v2XML.WES("E21_08", escapeXml(obj.E21_08));
                    }
                };

                if (typeof obj.E21_09 !== 'undefined') {
                    if (u.IsOk(obj.E21_09) == true) {
                        v2XML.WES("E21_09", obj.E21_09)
                    }
                };

                if (typeof obj.E21_10 !== 'undefined') {
                    if (u.IsOk(obj.E21_10) == true) {
                        v2XML.WES("E21_10", obj.E21_10)
                    }
                };

                if (typeof obj.E21_11 !== 'undefined') {
                    if (u.IsOk(obj.E21_11) == true) {
                        v2XML.WES("E21_11", obj.E21_11)
                    }
                };

                if (typeof obj.E21_12 !== 'undefined') {
                    if (u.IsOk(obj.E21_12) == true) {
                        v2XML.WES("E21_12", obj.E21_12)
                    }
                };

                if (typeof obj.E21_13 !== 'undefined') {
                    if (u.IsOk(obj.E21_13) == true) {
                        v2XML.WES("E21_13", obj.E21_13)
                    }
                };

                if (typeof obj.E21_14 !== 'undefined') {
                    if (u.IsOk(obj.E21_14) == true) {
                        v2XML.WES("E21_14", obj.E21_14)
                    }
                };

                if (typeof obj.E21_15 !== 'undefined') {
                    if (u.IsOk(obj.E21_15) == true) {
                        v2XML.WES("E21_15", obj.E21_15)
                    }
                };

                if (typeof obj.E21_16 !== 'undefined') {
                    if (u.IsOk(obj.E21_16) == true) {
                        v2XML.WES("E21_16", obj.E21_16)
                    }
                };

                if (typeof obj.E21_17 !== 'undefined') {
                    if (u.IsOk(obj.E21_17) == true) {
                        v2XML.WES("E21_17", obj.E21_17)
                    }
                };
                if (typeof eDS.E21.E21_18_0 !== 'undefined') {
                    v2XML.WSE("E21_18_0");
                    var obj = eDS.E21.E21_18_0;
                    if (typeof obj.E21_18 !== 'undefined') {
                        if (u.IsOk(obj.E21_18) == true) {
                            v2XML.WES("E21_18", obj.E21_18)
                        }
                    };
                    if (typeof obj.E21_19 !== 'undefined') {
                        if (u.IsOk(obj.E21_19) == true) {
                            v2XML.WES("E21_19", obj.E21_19)
                        }
                    };
                    v2XML.WEE("E21_18_0");
                };

                if (typeof obj.E21_20 !== 'undefined') {
                    if (u.IsOk(obj.E21_20) == true) {
                        v2XML.WES("E21_20", obj.E21_20)
                    }
                };
                v2XML.WEE("E21")
            }
        };
        

        if (typeof eDS.E22 !== 'undefined') {
            v2XML.WSE("E22");

            if (typeof eDS.E22.E22_01 !== 'undefined') {
                if (u.IsOk(eDS.E22.E22_01) == true) {
                    v2XML.WES("E22_01", eDS.E22.E22_01)
                }
            };

            if (typeof eDS.E22.E22_02 !== 'undefined') {
                if (u.IsOk(eDS.E22.E22_02) == true) {
                    v2XML.WES("E22_02", eDS.E22.E22_02)
                }
            };

            if (typeof eDS.E22.E22_03 !== 'undefined') {
                if (u.IsOk(eDS.E22.E22_03) == true) {
                    v2XML.WES("E22_03", escapeXml(eDS.E22.E22_03));
                }
            };

            if (typeof eDS.E22.E22_04 !== 'undefined') {
                if (u.IsOk(eDS.E22.E22_04) == true) {
                    v2XML.WES("E22_04", escapeXml(eDS.E22.E22_04));
                }
            };
            if (typeof eDS.E22.E22_05 !== 'undefined') {
                if (u.IsOk(eDS.E22.E22_05) == true) {
                    v2XML.WES("E22_05", escapeXml(eDS.E22.E22_05));
                }
            };

            if (typeof eDS.E22.E22_06 !== 'undefined') {
                if (u.IsOk(eDS.E22.E22_06) == true) {
                    v2XML.WES("E22_06", escapeXml(eDS.E22.E22_06));
                }
            };
            v2XML.WEE("E22");
        };

        if (typeof eDS.E23 !== 'undefined') {
            v2XML.WSE("E23");

            if (eDS.E23.E23_01 !== 'undefined') {
                if (u.IsOk(eDS.E23.E23_01) == true) {
                    v2XML.WES("E23_01", eDS.E23.E23_01)
                }
            };
            if (typeof eDS.E23.E23_02 !== 'undefined') {
                for (var i = 0; i < eDS.E23.E23_02.length; i++) {
                    if (u.IsOk(eDS.E23.E23_02[i]) == true) {
                        v2XML.WES("E23_02", eDS.E23.E23_02[i]);
                    }
                }
            };

            if (typeof eDS.E23.E23_03 !== 'undefined') {

                for (var i = 0; i < eDS.E23.E23_03.length; i++) {
                    if (u.IsOk(eDS.E23.E23_03[i]) == true) {
                        v2XML.WES("E23_03", eDS.E23.E23_03[i]);
                    }
                }
            };


            if (typeof eDS.E23.E23_04 !== 'undefined') {
                for (var i = 0; i < eDS.E23.E23_04.length; i++) {
                    if (u.IsOk(eDS.E23.E23_04[i]) == true) {
                        v2XML.WES("E23_04", eDS.E23.E23_04[i].toString());
                    }
                }
            };

            if (typeof eDS.E23.E23_05 !== 'undefined') {
                if (u.IsOk(eDS.E23.E23_05) == true) {
                    v2XML.WES("E23_05", eDS.E23.E23_05.toString());
                }
            };

            if (typeof eDS.E23.E23_06 !== 'undefined') {

                for (var i = 0; i < eDS.E23.E23_06.length; i++) {
                    if (u.IsOk(eDS.E23.E23_06[i]) == true) {
                        v2XML.WES("E23_06", eDS.E23.E23_06[i]);
                    }
                }
            };

            if (typeof eDS.E23.E23_07 !== 'undefined') {
                for (var i = 0; i < eDS.E23.E23_07.length; i++) {
                    if (u.IsOk(eDS.E23.E23_07[i]) == true) {
                        v2XML.WES("E23_07", eDS.E23.E23_07[i]);
                    }
                }
            };


            if (typeof eDS.E23.E23_08 !== 'undefined') {
                if (u.IsOk(eDS.E23.E23_08) == true) {
                    v2XML.WES("E23_08", eDS.E23.E23_08)
                }
            };
            if (typeof eDS.E23.E23_09_0 !== 'undefined') {
                v2XML.WSE("E23_09_0");
                if (typeof eDS.E23.E23_09_0.E23_09 !== 'undefined') {
                    if (u.IsOk(eDS.E23.E23_09_0.E23_09) == true) {
                        v2XML.WES("E23_09", escapeXml(eDS.E23.E23_09_0.E23_09));

                    }
                };

                if (typeof eDS.E23.E23_09_0.E23_11 !== 'undefined') {
                    if (u.IsOk(eDS.E23.E23_09_0.E23_11) == true) {
                        v2XML.WES("E23_11", escapeXml(eDS.E23.E23_09_0.E23_11));
                    }
                };

                v2XML.WEE("E23_09_0");
            };

            if (typeof eDS.E23.E23_10 !== 'undefined') {
                if (u.IsOk(eDS.E23.E23_10) == true) {
                    v2XML.WES("E23_10", escapeXml(eDS.E23.E23_10));
                }
            };
            v2XML.WEE("E23");
        };
    v2XML.WEE("Record");
    };
    v2XML.WEE();
    //XML.WAS('timeStamp', Data);
    var XMLDoc = v2XML.flush()
    return XMLDoc;
};

var escapeXml = function (unsafe) {
    if (typeof unsafe !== 'undefined') {
        if (unsafe !== null) {
            return unsafe.replace(/[<>&'"]/g, function (c) {
                switch (c) {
                    case '<': return '&lt;';
                    case '>': return '&gt;';
                    case '&': return 'and';
                    case '\'': return '&apos;';
                    case '"': return '&quot;';
                    case '\n': return ' ';
                }
            });
        }
    }
};
