console.log("\n ======== Question 1 =========");

// function functionName(parentheses) {
    
// }

// 1, Function Declaration

// function myFirst () {
//     console.log("Hello Function Declaration");
// }
// myFirst();

// 2, Function Exprerssion

// const myFirst = function (){
//     console.log("Hello");
// }
// myFirst();

// 3, Arrow Function

// const myFirst = () => console.log("Hello Arrow Function");

// myFirst();

// console.log("\n ======== Question 2 =========");

// 1, Function Declaration

// A parameter is a variable inside the function definition that receives a value.
// An argument is the actual value passed to the function when it is called.

// function mySecond(x) {
//     console.log(x);
// }
// mySecond("JavaScript Function Declaration");
// mySecond(100);

// 2, Function Exprerssion

// const mySecond = function (a) {
//     console.log(a);
// }
// mySecond(" mySecond JavaScript Function Exprerssion");
// mySecond(200);

// 3, Arrow Function
// const mySecond = (parameter) => {
//     console.log(parameter);
// };
// mySecond("JavaScript Arrow Function Zele");
// mySecond(600);

console.log("\n ======== Question 3 =========");
//1,  Function Declaration
// function myThird(parameter) {
//   mySecond(parameter); // Calls mySecond to print the value
// }
// myThird("myThird JavaScript Function Declaration");

// 2, Function Exprerssion
// const myThird = function (parameter) {
//     mySecond(parameter);
// };
// myThird("myThird JavaScript Function Exprerssion");

// 3, Arrow Function
// const myThird = (parameter) => {
//     mySecond(parameter);
// };
// myThird("myThird JavaScript Arrow Function");
// myThird(6)

console.log("\n ======== Question 4 =========");
// //1,  Function Declaration
// function myFourth (x) {

//     console.log(x[2]);
// }
// myFourth([10, 20, 30, 40]);
// myFourth(["Apple", "Banana", "Orange"]);


// 2, Function Exprerssion
// const myFourth = function (array){
//     console.log(array[1]);
//     console.log(array.at(1)); // second option
// }
// myFourth([100, 200, 300]);
// myFourth(["Dog", "Cat", "Bird"]);

// 3, Arrow Function
// const myFourth = (array) => {
//     // const [second] = array;
//     // console.log(second);
//     console.log(array[0]);
// }
// myFourth([5, 10, 15]);
// myFourth(["Red", "Blue", "Green"]);

console.log("\n ======== Question 5 =========");
//  //1,  Function Declaration
// function myFifth (sew) {
//     // const [a, b] = sew;
//     // console.log(a + b);

//     console.log(array[0] * array[1]);
// }
// myFifth([100, 20]);

// function myFifth(array) {
//     // const [a, b] = array;
//     // console.log(a + b);
//     console.log(array[0] + array[1]);
// }
// myFifth([10, 20]);
// myFifth([3, 5]);

// 2, Function Exprerssion
// const myFifth = function (array)  {

//     const [num1, num2] = x;
//     // console.log(num1 + num2);
//     // console.log(array[0] + array[1]);

// }
// myFifth([10, 20]);

// 3, Arrow Function

// const myFifth = (array) => {
//     let sum = 0;

//     for (const number of array){
//     // sum += number;
//     // sum = sum + number;
//     }
//     console.log(sum);
// }

// myFifth([12, 18])


console.log("\n ======== Question 6 =========");

//Question 6:- Write a function that takes an integer minutes and converts it to seconds.

//1, Understand the Problem
        // We need to create a function that:
        // Takes one parameter called minutes
        // Converts the minutes into seconds
        // Returns the result

        // 1 minute = 60 seconds So seconds = minutes × 60

// 2, solve on paper
        //  5 * 60 = 300
        //  2 * 60 = 120

// 3, Write Pseudo code

        // Step 1 Create a function named minutesToSeconds
                // function minutesToSeconds(minutes){};
        // Step 2
                // we have string value conver to number
                // Check minutes value is NOT a valid number  
                // check Minutes cannot be negative.
                //check Minutes cannot be decimal.
       // Step 3 Multiply the minutes by 60 and Return the answer.
                //return minutes * 60
        // Step 4 Call the function.
                // console.log(minutesToSeconds(5));
        // Step 5 Test
                // 5 * 60 = 300
                // 2 * 60 = 120


// 4,  Pseudo code to JavaScript

// const minutesToSeconds = (minutes) => {
//   //  Step 1 Create a function named minutesToSeconds
    
//     minutes = Number(minutes); 
//     // Convert the input into a number
//     if (isNaN(minutes)) { 
//         return "Please enter a valid number.";
//     }else if (minutes < 0) { 
//         return "Minutes cannot be negative.";
//     }else if(!Number.isInteger(minutes)){
//         return "Minutes cannot be decimal.";
//     }
// //   // Check minutes value is NOT a valid number
//     return minutes * 60;
// }

// // // 5 Test Passd

// console.log(minutesToSeconds(5));
// console.log(minutesToSeconds("2"));
// console.log(minutesToSeconds("10"));
// console.log(minutesToSeconds("abc"));
// console.log(minutesToSeconds("-5"));
// console.log(minutesToSeconds(2.50));
// console.log(minutesToSeconds("-2.4"));
// ploblem 
    //1,  if we are add 3.5 number what happen check it
    // 2, minutes be decimal biseten mn chger alew( 3 minutes to 50 second mekeyer bifelges)??


console.log("\n ======== Question 7 =========");

//1, Understand the Problem
    // We need to create a function:
    // Takes one number as input.
    // Increases the number by 1.
    // Returns the new value.

    // 5 number  after adding 1 to 6

// 2, solve it on paper
    //  0 + 1 = 1
    //  5 + 1 = 6
    //  -5 + 1 = -4

// 3, Write Pseudo code

        //  Step 1 Create a function named increments
                // function increments(number){};
        // Step 2 
                // Check number value is NOT a valid number
        // Step 3 Add 1 and Return the answer.
                // number + 1
        // Step 4 Call the function.
                // console.log(increments(5));
        // Step 5 Test
            //  0 + 1 = 1
            //  5 + 1 = 6
            //  -5 + 1 = -4


// 4,  Pseudo code to JavaScript

// function increments(number){
//     number = Number(number);

//     if(isNaN(number)){
//         return "ቁጥር ያሰገቡ.";
//     }
//     // if (isNaN(number)) {
//     // return "Please enter a valid number.";
//     // }

//     return number + 1;
// };
// console.log(increments(0));
// console.log(increments(6));
// console.log(increments(-4));
// console.log(increments("5"));
// console.log(increments("zele"));


console.log("\n ======== Question 8 =========");

// 1, Understand the Problem
    // Accepts two parameters: base & height
    // Calculates the area of a triangle.
    // Returns the result.


// 2, soli ti on paper
    // Area = base * height / 2
        // 3 * 2 / 2 = 3
// 3, Write Pseudo code

    // Step 1 Create a function named triArea
            // function triArea(base, height){};
    // Step 2 
            // Check area value is NOT a valid number 
    // Step 3 Multiply base by height and Divide the result by 2
    // Step 4 Call the function.
            // console.log(triArea(base, height)));
    // Step 5 Test
        // 3 * 2 / 2 = 3



// 4,  Pseudo code to JavaScript

// function triArea(base, height) {
//     base = Number(base);
//     height = Number(height);

//     if (isNaN(base) || isNaN(height)) {
//         return "Please enter a valid number.";
//     }


//     // if (typeof base !== "number" || typeof height !== "number") {
//     //     return " base and height must be numbers.";
//     // }
//     return (base * height) / 2;
// }

// // 5, Test Cases
// console.log(triArea(0, 2));   // 3
// console.log(triArea(7, 4));   // 14
// console.log(triArea(-4, -8));
// console.log(triArea("5", "10"));
// console.log(triArea("zele"));
//  problem:-
    // 1, User Andun asegebto andun bitew eg:- base asegebto height beresa


// function triArea (base, height) {

//     if (base == null || base === "") return "Please enter the base.";
//     if (height == null || height === "") return "Please enter the height.";

//     base = Number(base);
//     height = Number(height);

//     // if(Number.isNaN(base) || Number.isNaN(height)) {
//     //     return "Base and height must be valid numbers.";
//     // }

//     if (isNaN(base) || isNaN(height)) {
//         return "Please enter a valid number.";
//     }


//     // if (typeof base !== "number" || typeof height !== "number") {
//     //     return " base and height must be numbers.";
//     // }

//   return (base * height) / 2;
// }
// // 5, Test Cases
// console.log(triArea(0, 2));   // 3
// console.log(triArea(7, 4));   // 14
// console.log(triArea( 6));
// console.log(triArea("5" ));
// console.log(triArea("zele", "hh" ));

// Problem :- 
// 1, base or height check emnadergebet bota lay kelay ena ketach sihon lyunet alew ( Kelay sihon ayseram)
        //  base = Number(base);
        //  height = Number(height);


console.log("\n ======== Question 9 =========");

//1, Understand the Problem
    // Create a function that returns the total number of legs of all the animals. The farmer has:
    //Chickens = 2 legs
    // Cows = 4 legs
    // Pigs = 4 legs

    // Takes three parameters:
        // chickens
        // cows
        // pigs
    // Calculates the total number of legs.
    // Returns the total


// 2, solve it on paper
        //  Total Legs = (chickens × 2) + (cows × 4) + (pigs × 4)

// 3, Write Pseudo code

        // Step 1 Create a function named animals and Accept three parameters
        // function animals(chickens, cows, pigs){};

        // Step 2 Check if any value is missing.

        // Step 3 
        // Convert each value to a number.

        // Step 4 Check if all values are valid numbers.

        // Step 5 Multiply:
            // chickens * 2
            // cows * 4
            // pigs * 4

        // Step 6 Add the three results together.
        // Step 7 Return the total




// 4,  Pseudo code to JavaScript

// function animals(chickens, cows, pigs) {

//     if (chickens == null || chickens === "" ) return "Please enter the number of value chickens.";
//     if (cows == null || cows === "") return "Please enter the number of cows.";
//     if (pigs == null || pigs === "") return "Please enter the number of pigs.";


//     if ((chickens < 0)) {
//         return "chickens leg number cannot be negative. Please enter a valid number  of posetive ";
//     }else if (( cows < 0)) {
//         return "cows leg number cannot be negative. Please enter a valid number of posetive ";
//     }else if (pigs < 0) {
//         return "pigs leg number cannot be negative. Please enter a valid number of posetive ";
//     }
//     // if ((chickens < 0 || pigs < 0 || cows <0 )) {
//     //     return "animal leg number cannot be negative.";
//     // }


//     chickens = Number(chickens);
//     cows = Number(cows);
//     pigs = Number(pigs);

//     // if (Number.isNaN(chickens) || Number.isNaN(cows) || Number.isNaN(pigs)) {
//     //     return "Please enter valid numbers.";
//     // }

//     if (isNaN(chickens)) {
//         return "Please enter a valid number of chickens.";
//     }else if (isNaN(cows)) {
//         return "Please enter a valid number of cows.";
//     }else if (isNaN(pigs)) {
//         return "Please enter a valid number of pigs.";
//     }

//     // if (isNaN(chickens) || isNaN(cows) || isNaN(pigs)) {
//     //     return "Please enter valid numbers.";
//     // }
    

//     return chickens * 2 + cows * 4 + pigs * 4;
// }

// console.log(animals(2, 3, 5)); // 36
// console.log(animals(0, 0, 0)); // 0
// console.log(animals("22", "33", "55")); // 369
// console.log(animals("2", "-3", "5")); // 36
// console.log(animals("", 3, 5)); // Please enter the number of chickens.
// console.log(animals(2, "", 8)); // Please enter the number of cows.
// console.log(animals(4, 5, "")); // Please enter the number of pigs.
// console.log(animals(2, "zzz", 5));


// Problem :-
    // 1, animals(2, "zzz", 5) ezi gar missed yaderegenew ye ye cow nw, only "Please enter valid numbers of cow" emil comment endiyametaln madreg alebegn

console.log("\n ======== Question 10 =========");
//1, Understand the Problem
        // Accepts an array containing exactly two numbers.
        // Returns 3 times the first element of the array.
        // If the input is invalid, return an appropriate error message.
        // Return 3 times the first element

// 2, solve it on paper
        //  threeTimesFirst([2, 5]); 2  * 3 =  6
        // threeTimesFirst([10, 8]); 10 * 3 = 30
        // threeTimesFirst([7, 20]); 7 * 3 = 21

// 3, Write Pseudo code
        // step 1
            // Create a function named threeTimesFirst
                // function threeTimesFirst(arr)
        // Step 2
            // Check if input is an array
        // Step 3
            // Check array contains exactly two elements
        // Step 4
            // Convert both elements to numbers.
        // Step 5
            // Check if the first and second element is a valid number.
        // Step 6 
            // Multiply the first element by 3 then 
            // Return 3 times the first element


// 4,  Pseudo code to JavaScript


// const threeTimesFirst = (arr) => {

//   // Check if input is an array
//     if (!Array.isArray(arr)) {
//         return "Please  enter an array.";
//     // Check array contains exactly two elements
//     }else if (arr.length !== 2){
//         return "Check array contains exactly two elements"
//     }
    
//     let first = Number(arr[0]);
//     let second = Number(arr[1]);

//     if (isNaN(first)) {
//         return "The First element must be a valid number.";
//     }else if (isNaN(second)) {
//         return "The Second element must be a valid number.";
//     }
//     return first * 3;
// } 

// // 5, Test
// console.log(threeTimesFirst([2, 5])); //6
// console.log(threeTimesFirst(["7", "20"])); //21
// console.log(threeTimesFirst());  // Please enter an array.
// console.log(threeTimesFirst([]));  // Array must contain exactly two elements.
// console.log(threeTimesFirst([5])); // Array must contain exactly two elements.
// console.log(threeTimesFirst(["abc", 8])); // The first element must be a valid number.
// console.log(threeTimesFirst([5, "xyz"])); // The second element must be a valid number.

console.log("\n ======== Question 11 =========");

//1, Understand the Problem
        // Write a JavaScript function that isSameNum
        // Accepts two parameters:- num1 and num2
        // Compares the two values
        // Returns: 
                // if they are equal:- true
                //  otherwise. :- False
   
// 2, solve it on paper
        //  isSameNum(4, 8);      // false
        // isSameNum(2, 2);      // true
        // isSameNum(-5, -5);    // true

// 3, Write Pseudo code
        // step 1
            // Create a function named isSameNum
                // function isSameNum(num1, num2)
        // Step 2
            // Convert both values to numbers.
        // Step 3
            // Check each value is a valid number.
        // Step 4
        // Compare the values
            // Use an if...else  statement
            // use Ternary Operator ? ... :
        // Step 5 
            // Return the result


// 4,  Pseudo code to JavaScript

// const SameNum = function (num1, num2) {
//     if (num1 == undefined || num1 === "") return "Please enter the first number.";
//     if (num2 == undefined || num2 === "") return "Please enter the second number.";


//     num1 = Number(num1);
//     num2 = Number(num2);
    
//     if (Number.isNaN(num1)) {
//         return "The first value must be a valid number.";
//     }else if(Number.isNaN(num2)){
//         return "The Second value must be a valid number.";
//     }

//     // if(num1 === num2){
//     //     return true;
//     // }else {
//     //     return false;
//     // }

//     // Ternary Operator
//     return num1 === num2 ? true : false;


// };


// // 5, Test Cases
// console.log(SameNum(4, 8));        // false
// console.log(SameNum(2, 2));        // true
// console.log(SameNum(2, -2));        // false
// console.log(SameNum(-5, -5));      // true
// console.log(SameNum("5", 5));      // true
// console.log(SameNum());            // Please enter the first value.
// console.log(SameNum(5));           // Please enter the second value.
// console.log(SameNum("abc", 5));    // The first value must be a valid number.
// console.log(SameNum(5, "xyz"));    // The second value must be a valid number.

console.log("\n ======== Question 12 =========");
//1, Understand the Problem
        // Write a JavaScript function that divisible
        // Accepts two parameters:- num
        // Checks  the number is divisible by 100
        // Returns: 
                // if it is divisible by 100 :- true
                //  otherwise. :- False
                // Use a Ternary Operator (? :) for the conditional statement.
   
// 2, solve it on paper
        //  divisible(25);      // false
        // divisible(100);      // true
        // divisible(-200);    // true

// 3, Write Pseudo code
        // step 1
            // Create a function named divisible
                // function divisible(num)
        // Step 2
            // Check if the input is missing
        // Step 3
            // Convert the input to a number.
            // Check if the input is a valid number.
        // Step 4
            // Use the modulus operator (%) the number is divisible by 100
        // Compare the values
            // Use an if...else  statement
            // use Ternary Operator num % 100 === 0 ? ... : 
        // Step 5 
            // Return the result


// 4,  Pseudo code to JavaScript

// function divisible(num){

//      // Check if input is missing
//     if (num == null || num === "")
//         return "Please enter the first number.";

//     //convert to number
//     num = Number(num);

//     //check valid number
//     if(Number.isNaN(num)){
//         return "Please enter a valid number.";
//     }
//     // if...else  statement
//     // if (num % 100 === 0){
//     //     return true;
//     // }else{
//     //     return false;
//     // }
//     // Ternary Operator 
//     return num % 100 === 0 ? true : false;

// }
// // 5, Test


// // Test Cases
// console.log(divisible(100));      // true
// console.log(divisible(1000));     // true
// console.log(divisible(25));       // false
// console.log(divisible(-200));     // true
// console.log(divisible("300"));    // true
// console.log(divisible());         // Please enter a number.
// console.log(divisible(""));       // Please enter a number.
// console.log(divisible("abc"));    // Please enter a valid number.

console.log("\n ======== Question 13 =========");
//1, Understand the Problem
        // Write a JavaScript function that EvenOrOdd
        // Accepts two parameters:- num
        // Check if the input is missing.
        // Convert the input to a number.
        // check the number is even or odd.
        // Returns: 
                // if the number is divisible by 2 :- even
                //  otherwise. :- odd
                // Use a Ternary Operator (? :) for the conditional statement.

// 2, solve it on paper
        // EvenOrOdd(2);      // "even"
        // EvenOrOdd(7);      // "odd"
        // EvenOrOdd(0);      // "even"
        // EvenOrOdd(-5);     // "odd"
        // EvenOrOdd(-8);     // "even"

// 3, Write Pseudo code
        // step 1
            // Create a function named EvenOrOdd
                // function EvenOrOdd(num)
        // Step 2
            // Check if the input is missing
        // Step 3
            // Convert the input to a number.
            // Check if the input is a valid number.
        // Step 4
            // Use the modulus operator (%) the number is divisible by 2
        // Compare the values
            // Use an if...else  statement
            // use Ternary Operator num % 2 === 0 ? ... : 
        // Step 5 
            // Return the result


// 4,  Pseudo code to JavaScript

// const EvenOrOdd = (num) => {
//     // Check if input is missing
//     if (num === undefined || num === "") {
//         return "Please enter a number.";
//     }
//     // Convert to number
//     num = Number(num);
//      //Check Valid input
//     if (Number.isNaN(num)) {
//         return "Please enter a valid number.";
//     }

//     // if (num % 2 === 0){
//     //     return "even";
//     // }else{
//     //     return "odd";
//     // }
//     return num % 2 === 0 ? "even" : "odd";
// }

// //5, Test Cases
// console.log(EvenOrOdd(2));        // even
// console.log(EvenOrOdd(7));        // odd
// console.log(EvenOrOdd(0));        // even
// console.log(EvenOrOdd(-5));       // odd
// console.log(EvenOrOdd(-8));       // even
// console.log(EvenOrOdd("10"));     // even
// console.log(EvenOrOdd("15"));     // odd
// console.log(EvenOrOdd());         // Please enter a number.
// console.log(EvenOrOdd(""));       // Please enter a number.
// console.log(EvenOrOdd("abc"));    // Please enter a valid number.

console.log("\n ======== Question 14 =========");
//1, Understand the Problem
        // Write a JavaScript function that getGrade
        // Accepts two parameters:- score
        // Check if the input is missing.
        // Convert the input to a number.
        // Invalid score" if the score is above 100 or below 0
        // "Grade A" if the score is between 90 and 100 (inclusive).
        // "Grade B" if the score is between 80 and 89 (inclusive).
        // "Grade C" if the score is below 80

        // Returns: 
                // Returns the correct grade based on the score.
                //  otherwise. :- odd
                // Use a Ternary Operator (? :) for the conditional statement.

// 2, solve it on paper
        // getGrade(95);      // "Grade A"
        // getGrade(85);      // "Grade B"
        // getGrade(79);      // "Grade C"
        // getGrade(101);     // "Invalid score"
        // getGrade(-5);      // "Invalid score"

// 3, Write Pseudo code
        // step 1
            // Create a function named getGrade
                // function getGrade(score)
        // Step 2
            // Check if the input is missing
        // Step 3
            // Convert the input to a number.
            // Check if the input is a valid number.
        // Step 4
            // Use nested ternary operators or if...else statement to determine the result
                // If the score is less than 0 or greater than 100, return "Invalid score"
                // Else if the score is 90 or above, return "Grade A".
                // Else if the score is 80 or above, return "Grade B".
                // Otherwise, return "Grade C"
        // Step 5 
            // Return the result


// 4,  Pseudo code to JavaScript

// function getGrade(score) {
//     // Check if input is missing
//     if (score === undefined || score === "") {
//         return "Please enter a score.";
//     }
//     // Convert to number
//     if (score = Number(score)){

//     }else if (Number.isNaN(score)) {
//         return "Please enter a valid number.";
//     }   // Validate input

//     // if...else statement

//     // if (score < 0 || score > 100){
//     //     return "Invalid Score";
//     // }else if(score >= 90){
//     //     return "Grade A";
//     // }else if(score >= 80){
//     //     return "Grade B";
//     // }else{
//     //     return "Grade C";
//     // }

//     // Ternary Operator
//     return score < 0 || score > 100 ? "Invalid Score" : score >= 90 ? "Grade A" : score >= 80 ? "Grade B" : "Grade C";
// }


// // 5, Test 

// console.log(getGrade(92));      // Grade A
// console.log(getGrade(80));      // Grade B
// console.log(getGrade(79));      // Grade C
// console.log(getGrade(101));     // Invalid score
// console.log(getGrade(-5));      // Invalid score
// console.log(getGrade("92"));    // Grade A
// console.log(getGrade());        // Please enter a score.
// console.log(getGrade(""));      // Please enter a score.
// console.log(getGrade("abc"));   // Please enter a valid number.