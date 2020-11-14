/// 1- Generate a random one digit number
console.log(Math.floor(Math.random()*10));
/// 2- Use random to get dice input between 1 to 6
console.log(Math.floor((Math.random()*1000)%6 +1));
/// 3- Add two dice number and print the result
/// Dice 1 - 1 to 6 and Dice 2 - 1 to 6 {2 <= Sum <= 12}
let diceOne = Math.floor((Math.random()*1000))%6 +1;
let diceTwo = Math.floor((Math.random()*1000))%6 +1;
let sumDice = diceOne + diceTwo;
console.log("Sum of two dice = " + sumDice);
/// 4- Enter the five number and print sum and average
/// Input string stored as an array
{
var questions = [ 
    "Enter first number", 
      "Enter Second Number", 
      "Enter Third Number", "Enter Fourth Number",
      "Enter Fifth Number" 
    ]; 
var answers = []; 
/// Function to print the input string
function ask(i) 
{ 
    process.stdout.write(`\n\n${questions[i]} >`); 
}
/// Standard Input for data 
process.stdin.on('data', function(data)
{ 
    /// Pushing the input to the answer array    
    answers.push(data.toString().trim()); 
    if (answers.length < questions.length) 
    { 
        ask(answers.length); 
    } 
    else 
    { 
        process.exit(); 
    } 
    }); 
    /// Count variable to count the number of inputs to be taken from the user
    var count = 1;
    process.on('exit', function() 
    { 
        /// Using reduce as the callback function to accumulate the result
        var sum = answers.reduce(function(a, b)
        {
            /// Incrementing the count of the number entered by the user
            ++count;
            /// Returning the sum of two numbers of the array and default
            return parseInt(a)+parseInt(b);
        });
    console.log("Sum = "+sum+ " Average = "+(sum/count));
    }); 
ask(0);
} 
/// 5 - Unit Conversion for the length conversion
/// 5(a) - inches to ft
const INCH_IN_FEET = 12;
let conversionRatio = (1/INCH_IN_FEET);
let numberOfInch = 42;
let numberOfFeet = conversionRatio * numberOfInch;
console.log("Number of feet = " + numberOfFeet);
/// 5(b) - Converting an area in feet to area in inch square
let areaInFeetSqr = 60*40;
let areaInInchSqr = areaInFeetSqr * (conversionRatio*conversionRatio);
console.log("Area in Square feet = " + areaInFeetSqr +'\n'+ "Area in Square Inch = "+areaInInchSqr);
/// 5(c) - Computing area of 25 such plots in acre
const NUMBER_OF_PLOTS = 25;
/// Conversion factor taken from conversion tables
const SQRFOOT_IN_ACRES = 43560;
let totalArea = NUMBER_OF_PLOTS*areaInFeetSqr;
let totalAreaInAcre = totalArea/SQRFOOT_IN_ACRES;
console.log("Area in Acre = "+ totalAreaInAcre);
