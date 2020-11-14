/**
 * * /// UC 3(a) --> Convert a single digit number to words
// Invoking the fs module to do asynchronous input-output operation
var fs = require("fs");
/// Defining the process module fo the argumentative input
const { argv } = require("process");
/// Argv takes by default a hexadecimal format input
/// Needed to parse to  integer after converting the input to string
let number = parseInt(process.argv[2].toString());
/// Variable to  store the number in words
var numberInWord;
/// If else if ladder to convert the number to words
if(number == 1)
numberInWord = "One";
else if(number ==2)
numberInWord = "Two";
else if(number ==3)
numberInWord = "Three";
else if(number ==4)
numberInWord = "Four";
else if(number ==5)
numberInWord = "Five";
else if(number ==6)
numberInWord = "Six";
else if(number ==7)
numberInWord = "Seven";
else if(number ==8)
numberInWord = "Eight";
else if(number ==9)
numberInWord = "Nine";
else 
numberInWord = "Zero";
/// Printing the result on the console
console.log( number +" in words is " + numberInWord);
 */

 /**
  * * /// UC 3(b) --> Convert a day number to equivalent day in the week
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
/// If else if ladder to convert the number to words
if(dayNumber == 0)
dayInWord = "Sunday";
else if(dayNumber == 1)
dayInWord = "Monday";
else if(dayNumber == 2)
dayInWord = "Tuesday";
else if(dayNumber == 3)
dayInWord = "Wednesday";
else if(dayNumber == 4)
dayInWord = "Thursday";
else if(dayNumber == 5)
dayInWord = "Friday";
else if(dayNumber == 6)
dayInWord = "Saturday";
else 
console.log("Invalid day number: Enter between 0 to 6");
/// Printing the result on the console using the index of the day number
if([0, 1, 2, 3, 4, 5, 6].indexOf(dayNumber) != -1) 
{
    console.log( dayNumber +" in words is " + dayInWord);
}
  */

  /**
   * * /// UC 3(c) --> Convert a number to whether it is unit, ten, hundred or thousand
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
/// If else if ladder to convert the number to words
if(number == 1)
numberInWord = "Unit";
else if(number == 10)
numberInWord = "Ten";
else if(number == 100)
numberInWord = "Hundred";
else if(number == 1000)
numberInWord = "Thousand";
else 
console.log("Invalid number: Enter 1, 10, 100, 1000");
/// Printing the result on the console using the index of the number
if([1, 10, 100, 1000].indexOf(number) != -1) 
{
    console.log( number +" in words is " + numberInWord);
}
   */

/**
 * * /// UC 3(d) --> Perform mathematical operation on three numbers and find the maximum result and the minimum result
/// 1 --> a+b*c , 2 --> c+a/b, 3 --> a%b+c, 4 --> a*b+c
// Invoking the fs module to do asynchronous input-output operation
var fs = require("fs");
/// Defining the process module fo the argumentative input
const { argv } = require("process");
/// Argv takes by default a hexadecimal format input
/// Needed to parse to  integer after converting the input to string
let firstNumber = parseInt(process.argv[2].toString());
let secondNumber = parseInt(process.argv[3].toString());
let thirdNumber = parseInt(process.argv[4].toString())
/// Variable to store the output operation produced by mathematical operations
var outputOperationOne = firstNumber + secondNumber * thirdNumber;
var outputOperationTwo = thirdNumber + firstNumber / secondNumber;
var outputOperationThree = firstNumber % secondNumber + thirdNumber;
var outputOperationFour = firstNumber * secondNumber + thirdNumber;
console.log(`${outputOperationOne}  ${outputOperationTwo}  ${outputOperationThree}  ${outputOperationFour}`);
/// If else if ladder to get the maximum output from the operation
if((outputOperationOne > outputOperationTwo) && (outputOperationOne > outputOperationThree) && (outputOperationOne > outputOperationFour))
console.log("First operation produces the maximum result.");
else if((outputOperationTwo > outputOperationOne) && (outputOperationTwo > outputOperationThree) && (outputOperationTwo > outputOperationFour))
console.log("Second operation produces the maximum result.");
else if((outputOperationThree > outputOperationOne) && (outputOperationThree > outputOperationTwo) && (outputOperationThree > outputOperationFour))
console.log("Third operation produces the maximum result.");
else if((outputOperationFour > outputOperationOne) && (outputOperationFour > outputOperationTwo) && (outputOperationFour > outputOperationThree))
console.log("Fourth operation produces the maximum result.");
else 
console.log("Could not produce the maximum result");

/// If else if ladder to get the minimum output from the operation
if((outputOperationOne < outputOperationTwo) && (outputOperationOne < outputOperationThree) && (outputOperationOne < outputOperationFour))
console.log("First operation produces the minimum result.");
else if((outputOperationTwo < outputOperationOne) && (outputOperationTwo < outputOperationThree) && (outputOperationTwo < outputOperationFour))
console.log("Second operation produces the minimum result.");
else if((outputOperationThree < outputOperationOne) && (outputOperationThree < outputOperationTwo) && (outputOperationThree < outputOperationFour))
console.log("Third operation produces the minimum result.");
else if((outputOperationFour < outputOperationOne) && (outputOperationFour < outputOperationTwo) && (outputOperationFour < outputOperationThree))
console.log("Fourth operation produces the minimum result.");
else 
console.log("Could not produce the minimum result");
 */
