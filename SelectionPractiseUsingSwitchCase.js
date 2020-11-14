/**
 * * /// UC 4(a) --> Convert a single digit number to words
// Invoking the fs module to do asynchronous input-output operation
var fs = require("fs");
/// Defining the process module fo the argumentative input
const { argv } = require("process");
/// Argv takes by default a hexadecimal format input
/// Needed to parse to  integer after converting the input to string
let number = parseInt(process.argv[2].toString());
/// Variable to  store the number in words
var numberInWord;
/// Switch-Case to convert the number to words
switch (number) 
{
    case 1: numberInWord = "One"; break;
    case 2: numberInWord = "Two"; break;
    case 3: numberInWord = "Three"; break;
    case 4: numberInWord = "Four"; break;
    case 5: numberInWord = "Five"; break;
    case 6: numberInWord = "Six"; break;
    case 7: numberInWord = "Seven"; break;
    case 8: numberInWord = "Eight"; break;
    case 9: numberInWord = "Nine"; break;
    case 0: numberInWord = "Zero"; break
    default : console.log("Number not in single digit range"); break;
}
/// Printing the result on the console
console.log( number +" in words is " + numberInWord);
 */

/**
 * * /// UC 4(b) --> Convert a day number to equivalent day in the week
/// 0 --> Sunday , 1 --> Monday, 2 --> Tuesday, 3 --> Wednesday, 4 --> Thursday, 5 --> Friday, 6 --> Saturday
// Invoking the fs module to do asynchronous input-output operation
var fs = require("fs");
/// Defining the process module fo the argumentative input
const { argv } = require("process");
/// Argv takes by default a hexadecimal format input
/// Needed to parse to  integer after converting the input to string
let dayNumber = parseInt(process.argv[2].toString());
/// Variable to store the number in words
var dayInWord;
/// Switch-Case to convert the number to words
switch (dayNumber) 
{
    case 0: dayInWord = "Sunday"; break;
    case 1: dayInWord = "Monday"; break;
    case 2: dayInWord = "Tuesday"; break;
    case 3: dayInWord = "Wednesday"; break;
    case 4: dayInWord = "Thursday"; break;
    case 5: dayInWord = "Friday"; break;
    case 6: dayInWord = "Saturday"; break
    default: console.log("Invalid day number: Enter between 0 to 6"); break;
}
/// Printing the result on the console using the index of the day number
if([0, 1, 2, 3, 4, 5, 6].indexOf(dayNumber) != -1) 
{
    console.log( dayNumber +" th day in words is " + dayInWord);
}
 */

/**
 * * /// UC 4(c) --> Convert a number to whether it is unit, ten, hundred or thousand
/// 1 --> Unit , 10 --> Ten, 100 --> Hundred, 1000 --> Thousand
// Invoking the fs module to do asynchronous input-output operation
var fs = require("fs");
/// Defining the process module fo the argumentative input
const { argv } = require("process");
/// Argv takes by default a hexadecimal format input
/// Needed to parse to  integer after converting the input to string
let number = parseInt(process.argv[2].toString());
/// Variable to store the number in words
var numberInWord;
/// Switch-Case to convert the number to words
switch (number) 
{
    case 1: numberInWord ="Unit"; break;
    case 10: numberInWord ="Ten"; break;
    case 100: numberInWord =" hundred"; break;
    case 1000: numberInWord =" thousand"; break;
    default: console.log("Invalid number: Enter 1, 10, 100, 1000"); break;
}
/// Printing the result on the console using the index of the number
if([1, 10, 100, 1000].indexOf(number) != -1) 
{
    console.log( number +" in words is " + numberInWord);
}
 */

/**
 * * /// UC 4(d) --> Perform length unit conversion operation
/// 1 --> feet to inch, 2 --> inch to feet, 3 --> feet to meter, 4 --> meter to feet
// Invoking the fs module to do asynchronous input-output operation
var fs = require("fs");
/// Defining the process module fo the argumentative input
const { argv } = require("process");
/// Argv takes by default a hexadecimal format input
/// Needed to parse to  integer after converting the input to string
let choice = parseInt(process.argv[2].toString());
let inputValueForConversion = parseInt(process.argv[3].toString());

const FEET_IN_INCH = 12;
const FEET_IN_METER = 3.28084;
/// Variable to store the output operation produced by conversion operations
var outputValueAfterConversion;
/// Switch-Case to get the output from the conversion operation
/// Printing the result on the console after conversion
switch (choice)
{
    case 1: 
    outputValueAfterConversion = inputValueForConversion * FEET_IN_INCH; 
    console.log(`FEET = ${inputValueForConversion} TO INCH = ${outputValueAfterConversion}`);
    break;
    case 2: 
    outputValueAfterConversion = inputValueForConversion/FEET_IN_INCH;
    console.log(`INCH = ${inputValueForConversion} TO FEET = ${outputValueAfterConversion}`);
    break;
    case 3: 
    outputValueAfterConversion = inputValueForConversion * FEET_IN_METER; 
    console.log(`FEET = ${inputValueForConversion} TO METER = ${outputValueAfterConversion}`);
    break;
    case 4: 
    outputValueAfterConversion = inputValueForConversion/FEET_IN_METER; 
    console.log(`METER = ${inputValueForConversion} TO FEET = ${outputValueAfterConversion}`);
    break;
    case 5: console.log("Conversion out of scope."); break;
}
 */