/**
 * * /// 5(a) --> To print all the powers of two less than 2
var fs = require("fs");
/// Defining the process module fo the argumentative input
const { argv } = require("process");
/// Argv takes by default a hexadecimal format input
/// Needed to parse to  integer after converting the input to string
let number = parseInt(process.argv[2].toString());
/// Loop to iterate through all the index and then getting output as 2^index
for(let i = 0; i <= number; i++) 
{
    console.log(`2 ^ ${i} = ${Math.pow(2, i)}`);
}
 */
/**
 * * /// 5(b) --> To print the harmonic number 
/// H(n) = 1/1 + 1/2 + 1/3 + 1/4 + 1/5 + 1/6.....+ 1/n
var fs = require("fs");
/// Defining the process module fo the argumentative input
const { argv } = require("process");
/// Argv takes by default a hexadecimal format input
/// Needed to parse to  integer after converting the input to string
let number = parseInt(process.argv[2].toString());
var harmonicSum = 0;
/// Loop to iterate and get the harmonic sum accumulated in the variable harmonicSum
for(let i = 1; i <= number; i++) 
{
    harmonicSum += (1/i);
}
console.log(`Harmonic sum of ${number}: ` + harmonicSum);
 */

/**
  * * /// 5(c) --> To check whether a number is prime or not.
/// Prime number is one not divisible by any number number 2 - (n-1)
var fs = require("fs");
/// Defining the process module fo the argumentative input
const { argv } = require("process");
/// Argv takes by default a hexadecimal format input
/// Needed to parse to  integer after converting the input to string
let number = parseInt(process.argv[2].toString());
var primeOrNot;
/// Loop to iterate and check whether the number is divisible by the index
for(let i = 2; i < number; i++) 
{
    /// If the number is divisible by the index then then number is prime
    if(number % i == 0) 
    {
        primeOrNot = "Number is not Prime";
        break;
    }
    else
    primeOrNot = "Number is Prime";
}
/// Managing the end condition of 2 and 1 as they cannot be checked under the loop
if(number == 2)
primeOrNot = "Number is Prime";
else if(number == 1)
primeOrNot = "Number is neither prime nor composite";
/// Printing the result whether the number is prime or not
console.log(primeOrNot);
  */

/**
 * * /// 5(d) --> To check which numbers are prime in a number range.
/// Prime number is one not divisible by any number number 2 - (n-1)
var fs = require("fs");
/// Defining the process module fo the argumentative input
const { argv } = require("process");
/// Argv takes by default a hexadecimal format input
/// Needed to parse to  integer after converting the input to string
/// Start number -->  begining number in the range
/// End number --> end number in the range 
let startNumber = parseInt(process.argv[2].toString());
let endNumber = parseInt(process.argv[3].toString());
var primeOrNot;
/// Outer loop to increment the range number
for(let i = startNumber; i < endNumber; i++)
{
/// Managing the end condition of 2 and 1 as they cannot be checked under the loop
if(i == 2)
primeOrNot = "Number is Prime";
else if(i == 1)
primeOrNot = "Number is neither prime nor composite";
else
{
    /// Loop to iterate and check whether the number i.e. outer loop index is divisible by the inner loop index
    for(let j = 2; j < i; j++) 
    {
        /// If the number is divisible by the index then then number is prime
        if(i % j == 0) 
        {
            primeOrNot = "Number is not Prime";
            break;
        }
        else
        primeOrNot = "Number is Prime";
    }
}
/// Printing the result whether the number is prime or not
if(primeOrNot == "Number is Prime") 
console.log( i + " is Prime.");
}
 */

/**
 * * /// 5(e) --> To compute the factorial of a number passed
/// Factorial --> f(n) = n! = 1 x 2 x 3 x 4 x 5 x 6 x 7..... x n
var fs = require("fs");
/// Defining the process module fo the argumentative input
const { argv } = require("process");
/// Argv takes by default a hexadecimal format input
/// Needed to parse to  integer after converting the input to string
let number = parseInt(process.argv[2].toString());
/// Variable to store the factorial of the number
var factorial = 1;
/// Incrementing the factorial by aggregrating the product in the factorial number
/// Using the shorthand operator
for (let i =2; i <= number; i++)
factorial *= i;
/// Printing the result of the factorial
console.log("Factorial of " + number + " = " + factorial);
 */

 /**
  * * /// 5(f) --> To compute the factors of a number passed
/// Factors --> i = [2, number] => if(number is divisible by i) then factors = i, number/i
var fs = require("fs");
/// Defining the process module fo the argumentative input
const { argv } = require("process");
/// Argv takes by default a hexadecimal format input
/// Needed to parse to  integer after converting the input to string
let number = parseInt(process.argv[2].toString());
/// Variable to store the factorial of the number
var factors = [1];
/// Incrementing the factorial by aggregrating the product in the factorial number
/// Using the shorthand operator
for (let i =2; i*i <= number; i++)
{
    if(number % i == 0)
    {
        if(i*i == number)
        factors.push(i);
        else
        factors.push([i, number/i]);
    }
}
/// Printing the result of the factorial
console.log("Factors of " + number + " = " + factors);

  */