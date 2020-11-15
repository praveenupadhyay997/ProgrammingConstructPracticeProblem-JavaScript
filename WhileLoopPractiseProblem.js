/***
 * * /// 5(a) --> To print all the powers of two less than 2
var fs = require("fs");
/// Defining the process module fo the argumentative input
const { argv } = require("process");
/// Argv takes by default a hexadecimal format input
/// Needed to parse to  integer after converting the input to string
let number = parseInt(process.argv[2].toString());
/// Initialisation of iteration parameter
let i = 0;
/// Loop to iterate through all the index and then getting output as 2^index
/// Using the while loop
while (i <= number && Math.pow(2, i) <= Math.pow(2, 8)) 
{
    console.log(`2 ^ ${i} = ${Math.pow(2, i)}`);
    /// Incrementing the iteration counter
    i++;
}
*/

/**
 * * /// 5(b) --> To Magically compute the number entered by user
var fs = require("fs");
/// Defining the process module fo the argumentative input
const { argv } = require("process");
/// Argv takes by default a hexadecimal format input
/// Needed to parse to  integer after converting the input to string
let number = parseInt(process.argv[2].toString());
let leftLimit = 0;
let rightLimit = 100;
let middleLimit = 0;
/// Logic -  Compute the middle number, Check whether the number is greter or less than the middle limit
/// Accordingly iterate inside the limit only
while(number != middleLimit)
{
    /// Using math.ceil to decrease the time complexity by minimum iterations
    middleLimit = Math.ceil((leftLimit + rightLimit) / 2);
    console.log("Middle element log : " + middleLimit);
    if(number > middleLimit)
    {
        console.log("Your element is to the right of middle Limit"); 
        leftLimit = middleLimit;
    }
    else if(number < middleLimit)
    {
        console.log("Your element is to the left of middle Limit"); 
        rightLimit = middleLimit;
    }
    else
    console.log("Your number is = " + middleLimit);
}
 */

 /**
  * * /// UC 5(c) --> Simulation of a toss till user won a fixed number of times
var fs = require("fs");
/// Defining the process module fo the argumentative input
const { argv } = require("process");
/// Argv takes by default a hexadecimal format input
/// Needed to parse to  integer after converting the input to string
let choice = process.argv[2].toString();
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
let numberOfTossWon = 0;
let numberOfTossLost = 0;
/// Loop to check whether the toss has been won to a limit number of times
while(numberOfTossWon <= 11)
{
    /// Random number generator for tossOutcome- 0, 1
    let tossOutcome = Math.floor(Math.random()*100 % 2);
    /// variable used to represent the toss outcome in a string format
    /// Either head or tail
    let tossOutcomeToString = TossValue(tossOutcome);   
    /// Condition check for toss won or lost
    if(tossOutcomeToString == choice)
    {
        console.log(choice.toUpperCase() + " It is!!! Congratulations!!! You have won the toss "+ numberOfTossWon+ " Times.");
        numberOfTossWon++;
    }
    else
    {
        console.log("OOPS!!! It is!!! " +tossOutcomeToString.toUpperCase() + " You have lost the toss "+ (++numberOfTossLost) + " Times.");
    }
}
process.exit();
  */

  /**
   * * /// UC 5(d) --> Simulation of a betting till gambler win a fixed amount of money or turns bankruptcy
 var fs = require("fs");
 /// Defining the process module fo the argumentative input
 const { argv } = require("process");
 /// Argv takes by default a hexadecimal format input
 /// Needed to parse to  integer after converting the input to string
 let betAmount = parseInt(process.argv[2].toString());
 /// Variable to store the winningLimit in the gambling game
 let winningLimit = parseInt(process.argv[3].toString());
 /// Variable to store the number of bets won by the gambler
let numberOfBetsWon = 0;
/// Variable to store the current balance of the gambler
let currentBalance = 100;
/// Variable to store the round Number
let roundNumber = 0;
/// Loop to iterate till the end of the balance or crossing the winningLimit
 while(currentBalance <= winningLimit && currentBalance > 0)
 {
     console.log("\n\n=====================");
     console.log(`Welcome to Round : ${++roundNumber}`);
     console.log("=====================");
     /// Random number generator for bettingOutcome- 0 --> Lost, 1 --> Won
     let bettingOutcome = Math.floor(Math.random()*100 % 2);   
     /// Condition check for bet won or lost
     if(bettingOutcome == 1)
     {
        numberOfBetsWon++;
        /// Incrementing the currentBalance by two times the bet amount
        currentBalance += 2*betAmount;
        console.log("Congratulations!!! You have won this bet ");
        console.log("Your current balance: "+currentBalance);
     }
     else
     {
         /// decreasing the bet amount by twice
        currentBalance -= 2*betAmount;
        console.log("OOPS!!! You have lost the bet this time. ");
        console.log("Your current balance: "+currentBalance);
     }
 }
 process.exit();
   */