/**
 ** /// UC 2(a) --> Find the minimum value and maximum value from five entered input by the user
// Invoking the fs module to do asynchronous input-output operation
var fs = require("fs");
/// Defining the process module fo the argumentative input
const { argv } = require("process");
/// Defining the input array
var inputArray = [];
/// Loop construct to take the input else sequential could be used
/// Sequential construct fails once the input length of srguments increase
for(var i = 0; i<5; i++)
{
    var inputValue = process.argv[2+i];
    /// Pushing the input to the input array
    inputArray.push(parseInt(inputValue.toString()));
}
/// Printing the input array
console.log(inputArray);
/// Initialising the initial input of the minimum and maximum value of the array
var minimumInArray = inputArray[0];
var maximumInArray = inputArray[0];
for(var j=1; j<5; j++)
{
    /// Selection construct coming in picture to filter the maximum value
    if(inputArray[j]>maximumInArray)
    {
        maximumInArray = inputArray[j];
    }
    /// To filter the minimum value
    if(inputArray[j]<minimumInArray)
    {
        minimumInArray = inputArray[j];
    }
}
/// Printing the minimum and maximum value
console.log("Minimum value = "+ minimumInArray + "\nMaximum value = "+ maximumInArray);
 */


/** 
** /// UC 2(b) --> Find whether the date is between two dates or not
// Invoking the fs module to do asynchronous input-output operation
var fs = require("fs");
/// Defining the process module fo the argumentative input
const { argv } = require("process");
/// Argv takes by default a hexadecimal format input
/// Needed to parse to  integer after converting the input to string
let day = parseInt(process.argv[2].toString());
let month = parseInt(process.argv[3].toString());
/// By default, JavaScript will use the browser's time zone and display a date as a full text string:
/// Sat Nov 14 2020 14:08:54 GMT+0530 (India Standard Time)
/// Defining for a single year i.e. 2000
/// Date(year, month, date) -- Note 2 for march and 3 for april
var minimumDate = new Date(2000, 2, 20);
var maximumDate = new Date(2000, 3, 20);
var ourDate = new Date(2000, month, day);
/// Sequence construct to check for the condition given in the question
/// Condition -- Date should be between 20 March to 20 April
if(ourDate >= minimumDate && ourDate <= maximumDate)
console.log("True");
else
console.log("False");
  */

/**
 ** /// UC 2(c) --> Find whether a given year is leap year or not
// Invoking the fs module to do asynchronous input-output operation
var fs = require("fs");
/// Defining the process module fo the argumentative input
const { argv } = require("process");
/// Argv takes by default a hexadecimal format input
/// Needed to parse to  integer after converting the input to string
let year = parseInt(process.argv[2].toString());
if((year % 4 == 0) || (year % 400 == 0) && (year % 100 != 0))
console.log(`${year} Is a Leap Year.`);
else
console.log(`${year} Is Not a Leap Year.`);
 */

/**
 ** /// UC 2(d) --> Simulation of a toss
/// Any input operation can be sought from readline module
var requirement = require('readline');
/// Creating an interface interface for standard console input and output
var prompts = requirement.createInterface(process.stdin, process.stdout);
/// Defining a constant for user choice
var choice;
/// Random number generator for tossOutcome- 0, 1
let tossOutcome = Math.floor(Math.random()*100 % 2);
/// Method to convert the toss outcome to a string toss outcome
function TossValue(tossOutcome)
{
    /// 0 --> head
    /// 1 --> tail
    if(tossOutcome == 0)
    return "head";
    else
    return "tail";
}
/// variable used to represent the toss outcome in a string format
/// Either head or tail
let tossOutcomeToString = TossValue(tossOutcome);
/// prompts to take the input as a buffer in hexadecimal format
prompts.question("Enter your choice -- head or tail.", function(data)
{ 
    /// Pushing the input to the choice variable    
    choice = (data.toString().trim()); 
    /// Condition check for toss won or lost
    if(tossOutcomeToString == choice)
    console.log(choice.toUpperCase() + " It is!!! Congratulations!!! You have won the toss.");
    else
    console.log("It is " + tossOutcomeToString.toUpperCase() + " Congratulations to the opponent!!! You have won the toss.");
    /// Exiting the standart input output process
    process.exit();
});
 */