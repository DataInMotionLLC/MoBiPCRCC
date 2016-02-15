var moment = require('moment');

var CallErrors = new Object();
var ErrorList = [];
var CallLog = [];
var Warning = [];
var Fatal = [];
var Rules = [];
var Time = [];
var BuildList = [];
var seq = 0;
exports.IsOk = function (valObject) {
    if (typeof valObject === 'undefined') {
        return false;
    }
    else {
        if (valObject.length === 0) { //empty object            
            return false;
        }
    };

    if (valObject === null) {
        return false;
    };

    if (typeof valObject.IsNull !== 'undefined') {
        if (valObject.IsNull === true)
            return false;
    };
    return true;

};
function escapeXml(unsafe) {
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
exports.ReportingRequired = function (ElementName) {
    if (ElementName == "eDisposition.02") {
        return true;
    }
    else {

        return false;
    }
};
exports.getSectionIndex = function (sectionObject, sectionName) {
    //Returns an array of index values for a given sectionName within a sectionObject
    // if sectionName does not exist within the sectionObject, return -1
    var _retValue = [];
    if (typeof sectionObject.attributes.sections !== 'undefined') {
        for (var d = 0; d < sectionObject.attributes.sections.length; d++) {

            if (sectionObject.attributes.sections[d].attributes.name == sectionName) {
                _retValue.push(d);
            }
        }
    };
    if (_retValue.length == 0) {
        _retValue.push(-1);
    }

    return _retValue;
};
var getValue = function (elementList, valueElement) {
    //Gets NEMSIS values from list of NEMSIS elements
    //Sets ReturnObject as Array of valueElement value objects.
    //elementList: Entire corpus of valueObjects for a given section - eHistory.01, eHistory.02, eHistory.01
    //valueElement:  The NEMSIS value sought
    var _arr = [];
    var retString = "";
    var returnObject = new Object();
    var valueObject = new Object();
    valueObject.IsNull = true;
    returnObject.val = null;
    if (elementList === 'undefined') {
        //console.log("undefined")
    }
    if (elementList !== 'undefined') {

        for (var i = 0; i < elementList.length; i++) //Run through entire array of valueObjects
        {
            if (elementList[i].attributes.title == valueElement) //when elementList.item equals valueElement sought, process
            {

                var returnObject = new Object(); //if valueElement in list, return an Object.
                valueObject.Count = 0;
                valueObject.IsNull = true;
                returnObject.val = null;
                returnObject.text = null;
                //if ((typeof elementList[i].attributes.value === 'undefined')||(elementList[i].attributes.value ==null ))   //Determine if valueObject exists
                if (elementList[i].attributes.value == "")   //Determine if valueObject exists
                {
                    //If Not, retrun NullObject assertion
                    valueObject.Count = 0;
                    returnObject.HasValue = false;
                    valueObject.IsNull = true;
                    returnObject.val = null;
                    returnObject.text = null;
                    _arr.push(returnObject);
                    valueObject.Count = _arr.length;
                    valueObject.ValueArray = _arr;

                    //Pertient Negatives
                    if (typeof elementList[i].attributes.pn !== 'undefined') {
                        if (elementList[i].attributes.pn.length > 0) {
                            valueObject.pn = elementList[i].attributes.pn;
                            valueObject.HasPN = true;
                        }

                    };
                    return valueObject;

                }
                else if (elementList[i].attributes.value === null)   //Determine if valueObject exists
                {


                    //If Not, retrun NullObject assertion
                    valueObject.Count = 0;
                    returnObject.HasValue = false;
                    valueObject.IsNull = true;
                    returnObject.val = null;
                    returnObject.text = null;
                    _arr.push(returnObject);
                    valueObject.Count = _arr.length;
                    valueObject.ValueArray = _arr;

                    //Pertient Negatives
                    if (elementList[i].attributes.pn !== 'undefined') {
                        if (elementList[i].attributes.pn.length > 0) {
                            valueObject.pn = elementList[i].attributes.pn;
                            valueObject.HasPN = true;
                        }

                    };
                    return valueObject;
                }
                else {
                    if (typeof elementList[i].attributes.value !== 'undefined') {

                        if (elementList[i].attributes.value.trim().length !== 0)  //Can't trust data in this world.  
                        {
                            valueObject.IsNull = false;                                 // The Object has valid Value, so set IsNull 
                            returnObject.val = elementList[i].attributes.value.trim();  // Good data, assign it to return object
                            if (typeof elementList[i].attributes.codeString !== 'undefined') {
                                returnObject.text = elementList[i].attributes.codeString.trim();  // Good data, assign it to return object
                            }
                            else {
                                returnObject.text = null;
                            };

                            //Pertient Negatives
                            if (typeof elementList[i].attributes.pn !== 'undefined') {
                                if (elementList[i].attributes.pn.length > 0) {
                                    returnObject.pn = elementList[i].attributes.pn;
                                    valueObject.HasPN = true;
                                }

                            };


                            //Exceptional Values, PhoneNumber, eMail Address, DrugCode Type
                            if (typeof elementList[i].attributes.params !== 'undefined') {
                                if (typeof elementList[i].attributes.params.PhoneNumberType !== 'undefined') {
                                    returnObject.PhoneNumberType = elementList[i].attributes.params.PhoneNumberType.value;
                                    returnObject.PhoneNumberTypeText = elementList[i].attributes.params.PhoneNumberType.description;
                                } else if (typeof elementList[i].attributes.params.EmailAddressType !== 'undefined') {
                                    returnObject.EmailType = elementList[i].attributes.params.EmailAddressType.value;
                                    returnObject.EmailTypeText = elementList[i].attributes.params.EmailAddressType.description;
                                }
                                else {
                                    returnObject.Params = elementList[i].attributes.params;
                                }
                            }
                        }
                    }
                };
                //PN values, find the Pertinent Negatives

                // if ((elementList[i].attributes.pn !== "") && (elementList[i].attributes.pn !== 'undefined'))

                if (_arr.indexOf(returnObject.val) == -1) {
                    returnObject.HasValue = true;
                    retString = retString + "  " + returnObject.val
                    _arr.push(returnObject);
                };

                returnObject = null;
            }
        };
        valueObject.Count = _arr.length;
        valueObject.ValueArray = _arr;
        //RaiseError("Utilities.getValueP", 100, valueElement, retString);
        return valueObject;
    };
};
exports.IsGo = function (valObject) {
    if (typeof valObject === 'undefined') {
        return false;
    };
    if (valObject == null) {
        return false;
    };

    if (valObject.length === 0) {
        return false;
    };
    return true;
};
function findById(source, id) {
    if (source !== 'undefined') {
        if (source !== null) {
            for (var i = 0; i < source.length; i++) {
                if (source[i].Number !== 'undefined') {
                    if (source[i].Number === id) {
                        return source[i];
                    }
                }
            }
        }
    };
    return null;
    //throw "Couldn't find object with id: " + id;
}
var setPN = function (iVal) {
    //  console.log(iVal)
    var pn = null
    if (iVal.pn == 'Refused') {
        pn = "8801019";
    }
    else if (iVal.pn == "UnableToComplete") {
        pn = "8801023";
    }
    else if (iVal.pn == "ContraindicationNoted") {
        pn = "8801001";
    }
    else if (iVal.pn == "DeniedByOrder") {
        pn = "8801003";
    }
    else if (iVal.pn == "ExamFindingNotPresent") {
        pn = "8801005";
    }
    else if (iVal.pn == "MedicationAllergy") {
        pn = "8801007";
    }
    else if (iVal.pn == "MedicationAlreadyTaken") {
        pn = "8801009";
    }
    else if (iVal.pn == "NoKnownDrugAllergy") {
        pn = "8801013";
    }
    else if (iVal.pn == "NoneReported") {
        pn = "8801015";
    }
    else if (iVal.pn == "NotPerformedByEMS") {
        pn = "8801017";
    }

    else if (iVal.pn == "Unresponsive") {
        pn = "8801021";
    }

    return pn
};
var setNV = function (iVal, callStatus)  //NOT USED
{

    if (iVal.props.Usage == "Required") {
        var retObj = new Object();
        if ((typeof callStatus.IsCancelled !== 'undefined') && (callStatus.IsCancelled == true)) {
            retObj.val = NOTAPPLICABLE;
            retObj.NV = true;
            retObj.text = "Not Applicable";
        }
        if ((typeof callStatus.IsStandBy !== 'undefined') && (callStatus.IsStandBy == true)) {
            retObj.val = NOTAPPLICABLE;
            retObj.NV = true;
            retObj.text = "Not Applicable";
        }
        else {
            retObj.val = NOTRECORDED;
            retObj.NV = true;
            retObj.text = "Not Recorded";
        };
    };
    if (iVal.props.Usage == "Recommended") {
        var retObj = new Object();
        if ((typeof callStatus.IsCancelled !== 'undefined') && (callStatus.IsCancelled == true)) {
            retObj.val = NOTAPPLICABLE;
            retObj.NV = true;
            retObj.text = "Not Applicable";
        }
        if ((typeof callStatus.IsStandBy !== 'undefined') && (callStatus.IsStandBy == true)) {
            retObj.val = NOTAPPLICABLE;
            retObj.NV = true;
            retObj.text = "Not Applicable";
        }
        else if (ReportingRequired(iVal.Name) == true) {
            retObj.val = NOTRECORDED;
            retObj.NV = true;
            retObj.text = "Not Recorded";
        }
        else {
            retObj.val = NOTREPORTING;
            retObj.NV = true;
            retObj.text = "Not Reporting";
        }
    };

    if (typeof retObj !== 'undefined') {
        return retObj
    }
    else {
        return null;
    };

};
var setCustomConfigs = function (iVal) {
    var eCR = new Object();
    if (iVal.ValueArray[i].CustID !== null) {
        if ((typeof iVal.ValueArray[i].val !== 'undefined') && (iVal.ValueArray[i].val !== null)) {
            eCR["eCustomResults.01"] = iVal.ValueArray[i].val;
        }
        else {
            eCR["eCustomResults.01"] = null;
        };
        if ((typeof iVal.ValueArray[i].CustId !== 'undefined') && (iVal.ValueArray[i].CustId !== null)) {
            eCR["eCustomResults.02"] = iVal.ValueArray[i].CustId;
        }
        else {
            eCR["eCustomResults.02"] = null;
        };
    };
    return eCR;
};
exports.getObjectFromOLTPExtract = function (businessObject, sectionName) {
    //Returns an array of index values for a given sectionName within a sectionObject
    // if sectionName does not exist within the sectionObject, return -1
    var _retValue = new Object();
    if (typeof businessObject !== undefined) {

        _retValue.IsUndefined = true;

        for (var d = 0; d <= businessObject.attributes.sections.length - 1; d++) {
            if (businessObject.attributes.sections[d].attributes.name == sectionName) {

                _retValue = businessObject.attributes.sections[d];
                _retValue.IsUndefined = false;
            }
        };
    };

    return _retValue;
};
exports.RaiseError = function (theError, theSeverity, theOrigin, error) {    

    //theCallObject : Global Call Object
    //theError      : Error Text
    //theSeverity   : 0 = Malformed, 1 = 
    //theOrigin     : Either Section and/or Element
    //error         : runtime error
    //Time
    //Seq
    //if ((typeof theOrigin !== 'undefined') && (theOrigin !== null)) {
        if (typeof Error === 'undefined') {
            var Error = new Object();
        };
        Error.Source = theOrigin;
    //};

    if ((typeof theSeverity !== 'undefined') && (theSeverity !== null)) {
        if (typeof Error == 'undefined') {
            var Error = new Object();
        };
        Error.Severity = theSeverity;
        if (theSeverity === 0) {
            CallErrors.Fatal = true;
        }
    };

    if ((typeof theError !== 'undefined') && (theError !== null)) {
        if (typeof Error == 'undefined') {
            var Error = new Object();
        };
        Error.SMethod = theError;
        Error.Time = moment().format("HH:mm:ss:SS");
        Error.Seq = seq++
    };
    if ((typeof error !== 'undefined') && (error !== null)) {
        if (typeof Error == 'undefined') {
            var Error = new Object();
        };
        Error.Text = error.toString();
    };
    if (typeof Error === 'undefined')
    {
        console.log("ERROR UNDEFINED")
        //throw new error("Raise Error Method Error")
    }
    else
        {
        
        if (theSeverity == 100) {
            CallLog.push(Error)
        }
        else if (theSeverity === 0) {
            Fatal.push(Error);
        }
        else if (theSeverity === -1) {
            Fatal.push(Error)
        }
        else if (theSeverity === 1) {
            Warning.push(Error)
        }
        else if (theSeverity === 2) {
            Time.push(Error)
        }
        else if (theSeverity === 10) {
            Rules.push(Error)
        }         
        
    }
    
};
exports.getCallErrors = function () {
    return CallErrors;
};
exports.getCallLog = function () {
    return CallLog;
};
exports.getTimeErrors = function ()
{
    return Time 
};
exports.getFatalErrors = function () {
    return Fatal;
};
exports.getWarnings= function () {
    return Warning;
};

exports.setBuild = function(n)
{
    var Build = new Object();
    Build.Time = moment().format("mm:ss:SSS");
    Build.Event = n;
    BuildList.push(Build)
}

function formatPhoneNumber(s) {
    var s2 = ("" + s).replace(/\D/g, '');
    var m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
    return (!m) ? null : "(" + m[1] + ") " + m[2] + "-" + m[3];
};
exports.setBusinessObject = function (elementList, NemsisList, NemsisElement) {    
    //RaiseError("setBusinessObject", 100, "setBusinessObject", NemsisElement);
    var _v = new Array();
    _v = getValue(elementList, NemsisElement);
    var Props = findById(NemsisList, NemsisElement);
    if (Props !== null) {
        _v.props = Props;
    }
    else {
        throw new Error("Element not defined in NEMSIS Config")
    }
    _v.Name = NemsisElement;

    var BO = new Object();
    BO = SetItUp(_v);
    return BO;

};
var SetItUp = function (inputVal) {
    var valObj = {};
    var CustomResults = [];
    valObj.IsNull = inputVal.IsNull;
    valObj.ElementName = inputVal.props.ElementName;
    valObj.Usage = inputVal.props.Usage;
    valObj.ElementNumber = inputVal.props.Number;

    //Check for PN
    //PN can be associated with Null Values as well as Custom or COTS values.
    if (typeof inputVal.HasPN !== 'undefined') {
        if (inputVal.HasPN == true) {
            if (typeof inputVal.pn !== 'undefined') {
                if (inputVal.pn !== null) {
                    {
                        var PN = "";
                        PN = setPN(inputVal)
                    }
                }
            }
        }
    };

    //Check for NV
    //A Custom Configuration with not Correlation Value can have an NV with a Corelation Value
    if (inputVal.IsNull == false) {
        //    var nvObject = setNV(inputVal)
        //}
        //else  //It's not null, get the data
        //{
        for (var i = 0; i < inputVal.Count ; i++) {
            //Determine Custom Data for a given ValueItem
            if (typeof inputVal.ValueArray[i].CustID !== 'undefined') {
                var CustomResults = setCustomConfig(inputVal);
                //eCR["eCustomResults.03"] = iVal.Name + "_i";
                CustomResults.push(CustomResults);
                _val = iVal.ValueArray[i].nemsisElement;
                _text = iVal.ValueArray[i].text;

            }
            else {
                _val = inputVal.ValueArray[i].val;
                if (inputVal.ValueArray[i].text === "") {
                    _text = inputVal.ValueArray[i].val;
                    if (typeof inputVal.ValueArray[i].PhoneNumberType !== 'undefined') {
                        var _phoneType = inputVal.ValueArray[i].PhoneNumberType;
                        if (typeof inputVal.ValueArray[i].PhoneNumberTypeText !== 'undefined') {
                            var _phoneTypeText = inputVal.ValueArray[i].PhoneNumberTypeText;
                        }
                    };
                    if (typeof inputVal.ValueArray[i].EmailType !== 'undefined') {
                        var _eMailType = inputVal.ValueArray[i].EmailType;
                        if (typeof inputVal.ValueArray[i].EmailTypeText !== 'undefined') {
                            var _eMailTypeText = inputVal.ValueArray[i].EmailTypeText;
                        }
                    }
                }
                else {
                    _text = inputVal.ValueArray[i].text;
                };
                _corID = null;
            };

            var corVal = {};
            var _corID = {};
            _corID = null;
            valObj.IsNull = false;
            corVal.val = _val;

            corVal.text = _text;
            corVal.corID = _corID;
            if (typeof _phoneType !== 'undefined') {
                if (_phoneType.length > 0) {
                    corVal.PhoneType = _phoneType;
                    if (typeof _phoneTypeText !== 'undefined') {
                        if (_phoneTypeText.length > 0) {
                            corVal.PhoneTypeText = _phoneTypeText;

                        }
                    }
                }
            };

            if (typeof _eMailType !== 'undefined') {
                if (_eMailType.length > 0) {
                    corVal.eMailType = _eMailType;
                    if (typeof _eMailTypeText !== 'undefined') {
                        if (_eMailTypeText.length > 0) {
                            corVal.eMailTypeText = _eMailTypeText;

                        }
                    }
                }
            };
            if (typeof BO === 'undefined') {
                var BO = new Array();
            };

            BO.push(corVal);
            valObj.CustomResults = CustomResults;
            corVal = undefined;
        }
    };
    //
    //Put it all together.  Check Nillable, validate,...etc.
    if ((typeof PN !== 'undefined') && (PN !== null)) {
        valObj.PN = true;
        valObj.PNVal = PN;
    }
    else {
        valObj.PN = false;
        valObj.PNVal = null;
    };


    if (inputVal.props.IsNillable == "Nillable") {
        valObj.IsNillable = true;
    };
    valObj.NV = false;

    if (typeof nvObject !== 'undefined') {
        if (nvObject !== null) {
            valObj.NV = true;
            valObj.NVal = nvObject.val;
            var corVal = {};

            corVal.text = nvObject.text;
            if (typeof BO === 'undefined') {
                var BO = new Array();
            };
            BO.push(corVal);
        }
    };

    valObj.vSet = BO;
    return valObj;
};
exports.getDateNumbers = function (d) {
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
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
    var monthNumber = m + 1;
    var monthStart = monthNames[m];
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    // Return array of year and week number
    var YEAR = d.getFullYear()
    YEAR = moment(d).format("YY")
    var ret = {};
    ret.YEAR = YEAR;
    ret.weekNumber = weekNumber;
    ret.monthStart = monthStart;
    ret.monthNumber = monthNumber;
    ret.weekDay = md;
    return ret;
};