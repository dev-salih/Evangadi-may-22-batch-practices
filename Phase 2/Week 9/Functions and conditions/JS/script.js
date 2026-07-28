// ===========================================================

// Functions and conditional statements - practice exercise

// ============================================================

// Questions on functions

console.log("\n ======Question 1=======");
// ● Define a simple function named myFirst that prints the word "Hello" on the console
// ○ First define the function
// ○ Then call the function

function myFirst() {
  console.log("Hello");
}
myFirst();

console.log("\n ======Question 2=======");
// ● Define a function called mySecond that takes a parameter and prints the parameter on
// console
// ○ Feel free to give any value as a parameter in your function

function mySecond(a) {
  console.log(a);
}
mySecond("salih");

console.log("\n ======Question 3=======");
// ● Define a function called myThird that takes a parameter and prints the parameter on the
// console. But, it uses mySecond function to print the parameter on the console

function myThird(d) {
  mySecond(d);
}
myThird("Abebe");

// OR

function theThird(b) {
  return b;
}
var c = theThird("mohammed");
mySecond(c);

console.log("\n ======Question 4=======");
// ● Write a function named myFourth that takes an array as a parameter and prints only the first
// value of the array on the console.

function theFourth(arr) {
  console.log(arr[0]);
}
theFourth([1, 2, 3, 4, 5]);

console.log("\n ======Question 5=======");
// ● Write a function named myFifth that takes an array with two numbers in it as a parameter and
// prints the sum of the two numbers on console

function myFifth(arr) {
  let sum = arr[0] + arr[1];
  console.log(sum);
}
myFifth([65, 3]);

// =======================================================
// Questions on functions from edabit (https://edabit.com)
// =======================================================
// step 1; understand
// step 2; solve it on paper
// step 3; craft a general step/formula
// step 4; pseudocode writing
// step 5; pseudocode to JS translation
// step 6; Test

// =============================================
console.log("\n ======Question 6=======");
// ===============
// ● Write a function that takes an integer minutes and converts it to seconds.
// ○ https://edabit.com/challenge/8q54MKnRrm89pSLmW

// step 1; understand

// 1 minute = 60 second, so i have to multiply the minute by 60 to convert it to seconds;

// step 2; write on paper

// 4 * 60 = 240;
// 3 * 60 = 180;

// step 3; craft a general step/formula

// second = minute * 60;

// step 4; pseudocode writing

// -define a function which takes an argument(minute)
// -check the argument is a number and positive integer
// -declare a var "result" which multiply minute by 60;
// -print the result on console

// step 5; pseudocode to JS translation
function converter(minute) {
  let min = Number(minute);
  // let min = parseInt(minute);
  // let min = parseFloat(minute);
  if (isNaN(min)) {
    console.log("please enter a number !!");
  } else if (min < 0) {
    console.log("please enter a positive integer!!");
  } else {
    let result = min * 60;
    console.log(result);
  }
}
converter(2.2);

// step 6; Test
// it is working right
//  Question 1; what if we enter a decimal number????????????????????????
//  Question 2; how do we change string to number?????????????????????????

// =================================================
console.log("\n ======Question 7=======");
// ========================================
// ● Create a function that takes a number as a parameter, increments the number by +1 and
// returns the result.
// ○ https://edabit.com/challenge/NAQhEoxbofPidLxm9

// step 1; understand

// step 2; write on paper

// step 3; craft a general step/formula

// step 4; pseudocode writing

// -define a function which takes a number as a parameter

// -check the argument is a number

// -declare a var which increments by +1;

// -print the result on console

// step 5; pseudocode to JS translation
function increment(num) {
  if (isNaN(num)) {
    console.log("please enter a number value!!");
  } else {
    let number = num + 1;
    console.log(number);
  }
}

// step 6; Test

increment(5);

// OR

// function increment(num) {
//   if (isNaN(num)) {
//     console.log("please enter a number value!!");
//   } else {
//     return ++num;
//   }
// }
// let result = increment(7);
// console.log(result);

// =====================================================
console.log("\n ======Question 8=======" ) 
// =====================================================
// ● Write a function that takes the base and height of a triangle and returns its area.
// ○ https://edabit.com/challenge/3CaszbdZYGN4otQD8

// step 1; understand
        // -base & height are given values and want to declare a function which calculates the are of the triangle

// step 2; write on paper
        // ex.. if base= 4, height = 6
        //     area = 4*6/2 =12
// step 3; craft a general step/formula
        // areaTri = base * height / 2;
// step 4; pseudocode writing

// -define a function which takes the base and height of a triangle as a parameter

// -check the argument is a number

// -declare a var = area which which calculates the area of the triangle;

// -return its result

// step 5; pseudocode to JS translation
function areaTri(base, height) {
  if (isNaN(base) || isNaN(height)) {
    console.log("please enter a number value!!");
  } else {
    let area = (base * height) / 2;
    return area;
  }
}

// step 6; Test
let triArea = areaTri(3, 20);
console.log(triArea);

// ======================================================
console.log("\n ======Question 9=======");
// ======================================================
// ● Create a function that returns the total number of legs of all the animals. In this challenge, a
// farmer is asking you to tell him how many legs can be counted among all his animals. The
// farmer breeds three species (chickens = 2 legs, cows =, 4 legs, pigs = 4 legs). Remember: the
// farmer wants to know the total number of legs and not the total number of animals.
// ○ https://edabit.com/challenge/8Qg78sf5SNDEANKti


// =============================================================
console.log("\n ======Question 10=======");
// =============================================================
// ● Create a function that takes an array containing only TWO numbers as a parameter and returns
// a value that is 3 times the first element of the array.

// ================================================================
// Questions on Conditional statements and - practice exercise
// =====================================================================

console.log("\n ======Question 11=======");
// ● Create a function that returns true when num1 is equal to num2; otherwise return false.
// ○ https://edabit.com/challenge/QSnaSH5S3oxZkwcNc

console.log("\n ======Question 12=======");
// ● Create a function that takes an integer and returns true if it's divisible by 100, otherwise
// return false.
// ○ https://edabit.com/challenge/qMr6wYGr6NaXAPQGF

console.log("\n ======Question 13=======");
// ● Create a function that takes a number as an argument and returns "even" for even numbers
// and "odd" for odd numbers.
// ○ https://edabit.com/challenge/kuzB5CMXiKDEYKXAP

console.log("\n ======Question 14=======");
// ● Create a function that returns
// ○ “Invalid score” if score is above 100 or score is a negative number
// ○ “Grade A” when score is between 90 and 100 (both 90 and 100 included)
// ○ “Grade B” when score is between 80 and 89 (both 80 and 89 included)
// ○ “Grade C” for any score below 79

// Question 7
// function number(num){
//    return ++num         // or u can use  return num + 1;
// }
// console.log(number(9));

// Question 8
// function triAngle(base, height){
//   return base * height/2
// }
// console.log(triAngle(4, 6));
// console.log(triAngle(4, "6"));

// Question 9
// function totalAnimalLegs(chickens, cows, pigs){
//   return chickens*2 + cows*4 + pigs*4
// }
// console.log(totalAnimalLegs(abebe, 3, 5));
// console.log(totalAnimalLegs(1, 2, 3));
// console.log(totalAnimalLegs(5, 2, 8));

// Question 10
// function arryNumber(ab){
//   return ab[0]*3
// }
// let sum = arryNumber([10, 7]);
// console.log(sum);

// Question 11
// function checkEquality(num1, num2){
//   return num1 === num2;    // or u can use by using if //if (num1 === num2) {
// }                                 //          return true;
// console.log(checkEquality(3,3));    //        } else {
// console.log(checkEquality (3,"3"));   //     return false; }

// Question 12
// function divisible (integer){
//   return integer%100===0      // or u can use if else
// }
// console.log(divisible (100));
// console.log(divisible (450));

// ?Question 13
// function evenOrOdd(a){
//   if (typeof a !== "number") {
//     return "Invalid input";
//   }
//   if (a%2 ===0){
//     return "even"            //return a%2 ===0? "even" : "odd"
//   } else {
//     return "odd"
//   }
//   }
//? or
// function evenOrOdd(a) {
//   if (typeof a !== "number" || Number.isNaN(a)) {
//     return "Invalid input";
//   }

//   return a % 2 === 0 ? "even" : "odd";
// }
// console.log(evenOrOdd(10));
// console.log(evenOrOdd(15));
// console.log(evenOrOdd("salih"));
// console.log(evenOrOdd("Helo"));

// Question 14
// function getGrade(score) {
//   if (score > 100 || score < 0) {
//     return "Invalid score";
//   } else if (score >= 90 && score <= 100) {
//     return "Grade A";
//   } else if (score >= 80 && score <= 89) {
//     return "Grade B";
//   } else {
//     return "Grade C";
