/**
 * * /// UC 7(a) --> Unit conversion program for converting the  degree celcius to degrees farenheit
/// 1 --> degree celcius to degrees farenheit, 2 --> degree farenheit to degree celcius
var fs = require("fs");
/// Defining the process module for the argumentative input
const { argv } = require("process");
/// Argv takes by default a hexadecimal format input
/// Needed to parse to  integer after converting the input to string
let choice = parseInt(process.argv[2].toString());
/// Variable to store the input temperature in the temperature calculator program
let inputTemprature = parseInt(process.argv[3].toString());
let outputTemprature = 0;
/// Initial choice check for input parsing as celcius or farenheit degrees
if(choice == 1)
{
    console.log("Temprature in degree celcius = " + inputTemprature);
    /// Function call to store the output temperature in the temperature calculator program
    outputTemprature = TemperatureConverter(choice, inputTemprature);
    console.log("Temprature in degree farenheit = " + outputTemprature);
}
else if(choice == 2)
{
    console.log("Temprature in degree farenheit = " + inputTemprature);
    /// Function call to store the output temperature in the temperature calculator program
    outputTemprature = TemperatureConverter(choice, inputTemprature);
    console.log("Temprature in degree celcius = " + outputTemprature);        
}
 * Function definition for the temperature conversion
 * @param {1 --> degree celcius to degrees farenheit, 2 --> degrees farenheit to degrees celcius} choice 
 * @param {temperature in degrees celcius or degrees farenheit} inputTemprature 
function TemperatureConverter(choice, inputTemprature) 
{
    var convertedTemprature = 0;
    switch(choice)
    { 
        case 1:
            convertedTemprature = (inputTemprature * 9/5) + 32;
            return convertedTemprature;
        case 2:
            convertedTemprature = (inputTemprature - 32) * 5/9;
            return convertedTemprature;
    }
}
 */

 /**
  * * /// UC 7(b) --> Check whether two numbers are pallindrome or not
/// 121 and 121 are pallindrome, both numbermust be equal and symmetric
var fs = require("fs");
/// Defining the process module for the argumentative input
const { argv } = require("process");
/// Argv takes by default a hexadecimal format input
/// Needed to parse to  integer after converting the input to string
let firstNumber = parseInt(process.argv[2].toString());
/// Variable to store the second number in the pallindrome program
let secondNumber = parseInt(process.argv[3].toString());
/// Variable to store the reverse of the first number in the pallindrome program
let reverseFirstNumber = 0;
/// Check if the numbers are equal or not
/// If they are not equal they can never be pallindrome
if(firstNumber == secondNumber) 
{
    reverseFirstNumber = PallindromeCheck(firstNumber);
}
else
{
    console.log("Both the number cannot be pallindrome of each other");
    process.exit();
}
if(reverseFirstNumber == secondNumber)
{
    console.log("Both the numbers are pallindrome of each other.")
}
 * Function to return the reverse of the first number
 * @param {first number from the input console} firstNumber 
function PallindromeCheck(firstNumber) 
{
    var reverseFirstNumber = 0;
    while(firstNumber !=0)
    {
        /// Getting the last digit of the current value of firstNumber
        var remainder = firstNumber % 10;
        /// Incrementing the reverse value by the place value
        reverseFirstNumber = reverseFirstNumber * 10 + remainder;
        /// converting the float return of the division to integer
        firstNumber = parseInt(firstNumber/10);
    }
    return reverseFirstNumber;
}
  */

/**
 * * /// UC 7(c) --> Check whether a number is prime or not and show that it's pallindrome is also prime
/// 11 is a pallindrome number and  prime number as well
/// 121 is a pallindrome number but is not prime
var fs = require("fs");
/// Defining the process module for the argumentative input
const { argv } = require("process");
/// Argv takes by default a hexadecimal format input
/// Needed to parse to  integer after converting the input to string
let number = parseInt(process.argv[2].toString());
/// Boolean response for whether the number is prime or not
let primeOrNot = PrimeOrNot(number);
/// Return of the pallindrome of the number
let pallindrome = PallindromeReturn(number);
/// Boolean response for whether the pallindrome is prime or not
let pallindromePrimeOrNot = PrimeOrNot(pallindrome);

if(primeOrNot)
{
    console.log("The number is prime");
}
else
{
    console.log("The number is not prime");
}

if(pallindrome == number)
{
    console.log("The number is pallindrome.");
}
else
{
    console.log("The number is not pallindrome.");
}

if(pallindromePrimeOrNot)
{
    console.log("Pallindrome is also prime.");
}
else
{
    console.log("Pallindrome is not prime.");
}
/// Function to check whether the number is prime or not
/// @param {number from the input console} number
function PrimeOrNot(number)
{
    for(let i = 2; i < number; i++)
    {
        if(number % i == 0)
        return false;
    }
    return true;
}
/// Function to return whether the number is pallindrome or not
/// @param {number from the input console} number
function PallindromeReturn(number) 
{
    var reverseFirstNumber = 0;
    while(number !=0)
    {
        /// Getting the last digit of the current value of firstNumber
        var remainder = number % 10;
        /// Incrementing the reverse value by the place value
        reverseFirstNumber = reverseFirstNumber * 10 + remainder;
        /// converting the float return of the division to integer
        number = parseInt(number/10);
    }
    return reverseFirstNumber;
}
 */