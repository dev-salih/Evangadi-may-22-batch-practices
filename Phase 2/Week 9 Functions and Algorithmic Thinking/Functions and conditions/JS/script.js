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
//     // return ++num;
//     console.log(++num);
    
//   }
// }
// let result = increment(7);
// console.log(result); // terminate

//gec -> run - > memory phase, code execution phase, fn(), result = fn(7), num = undefine, num = 7 , 8-> return

// =====================================================
console.log("\n ======Question 8=======");
// =====================================================
// ● Write a function that takes the base and height of a triangle and returns its area.
// ○ https://edabit.com/challenge/3CaszbdZYGN4otQD8

// step 1; understand
// -base & height are given values and want to declare a function which calculates the area of a triangle

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

// step 1; understand
// - 3 animals with specific number of legs for each is given.
// - i want to calculate the total number of legs of the 3 animals with given quantity of the animals .
// step 2; solve it on paper
// - ex if we have 3 chicken, 2 cow, and 8 pigs
//         total number of legs = 3*2 + 2*4 + 8*4 = 6 + 8 + 32 = 46;
// step 3; craft a general step/formula
// totalLegs = 2*chickens + 4*cows + 4*pigs;
// step 4; pseudocode writing
// -write a function which takes 3 numbers values as a parameter
// -check the arguments are numbers and positive integers(>=0)
// -validate is the given values are able to be converted to number
// -declare var for each animals
// -declare a var "result" which calculates the total legs
// -return the result

// step 5; pseudocode to JS translation

function animalLegs(chicken, cow, pig) {
  if (isNaN(chicken) && isNaN(cow) && isNaN(pig)) {
    return "Quantity of animals cannot be negative; please enter a positive numerical value!!";
  }
  if (isNaN(chicken)) {
    return "please enter quantity of CHICKENS in a positive numerical value!!";
  } else if (isNaN(cow)) {
    return "please enter quantity of COWS in a positive numerical value!!";
  } else if (isNaN(pig)) {
    return "please enter quantity of PIGS in a positive numerical value!!";
  }

  if (chicken < 0 || cow < 0 || pig < 0) {
    return "Quantity of animals cannot be negative; please enter a positive numerical value!!";
  }

  let totalChickenLegs = chicken * 2;
  let totalCowLegs = cow * 4;
  let totalPigLegs = pig * 4;
  let totalAnimalLegs = totalChickenLegs + totalCowLegs + totalPigLegs;

  return totalAnimalLegs;
}

// step 6; Test
// let total = animalLegs(3,2,8); //46
// let total = animalLegs(-3,2,8); //Quantity of animals cannot be negative; please enter a positive numerical value!!
// let total = animalLegs(3,-2,8); //Quantity of animals cannot be negative; please enter a positive numerical value!!
// let total = animalLegs(3,2,-8); //Quantity of animals cannot be negative; please enter a positive numerical value!!
// let total = animalLegs("3","2",8); //Quantity of animals cannot be negative; please enter a positive numerical value!!
// let total = animalLegs("hen",2,8); //Quantity of animals cannot be negative; please enter a positive numerical value!!
// let total = animalLegs(3,"ox",8); //Quantity of animals cannot be negative; please enter a positive numerical value!!
// let total = animalLegs(3, 2, "goat"); //Quantity of animals cannot be negative; please enter a positive numerical value!!
let total = animalLegs("hen","ox","goat"); //Quantity of animals cannot be negative; please enter a positive numerical value!!

console.log(total);

// NOTE
// 1) NO need of converting string of numbers in to Number value b/c it was only need in addition(which    can also utilized for concatenation) but in multiplication there is no concatenation!!

// Question;
// 1) why the above last test is not working as i expect?????????????????????????????????

// =============================================================
console.log("\n ======Question 10=======");
// =============================================================
// ● Create a function that takes an array containing only TWO numbers as a parameter and returns
// a value that is 3 times the first element of the array.

function arrayCalc(arr) {
  if (!Array.isArray(arr)) {
    return "please enter array value!!";
  }
  if (arr.length !== 2) {
    return "check the array contains two values";
  }
  let e = 3 * arr[0];
  return e;
}
let array = arrayCalc([7, 5]);
// let array = arrayCalc(7,5);
// let array = arrayCalc([7, 5, 4]);
console.log(array);

// ================================================================
// Questions on Conditional statements and - practice exercise
// =====================================================================

console.log("\n ======Question 11=======");
// ● Create a function that returns true when num1 is equal to num2; otherwise return false.
// ○ https://edabit.com/challenge/QSnaSH5S3oxZkwcNc

function equivalence(num1, num2) {
  if (typeof num1 !=='number' || typeof num2 !=='number') {
    return "invalid number";
  }
  return num1 == num2;
}
// let equiv = equivalence("4", "4");
// let equiv = equivalence(4, 4);
let equiv = equivalence(5, 6);
console.log(equiv);

console.log("\n ======Question 12=======");
// ● Create a function that takes an integer and returns true if it's divisible by 100, otherwise
// return false.
// ○ https://edabit.com/challenge/qMr6wYGr6NaXAPQGF

function isDivisibleBy100(int) {
  if (int % 100 === 0) {
    return true;
  } else {
    return false;
  }
}
let divisionBy100 = isDivisibleBy100(240);
console.log(divisionBy100);

console.log("\n ======Question 13=======");
// ● Create a function that takes a number as an argument and returns "even" for even numbers
// and "odd" for odd numbers.
// ○ https://edabit.com/challenge/kuzB5CMXiKDEYKXAP

function checkEvenOdd(num) {
  if (typeof num !=='number') {
    return "Invalid input! please enter numerical value!!";
  } else if (!Number.isInteger(num)) {
    return "please enter integer value!!";
  } else if (num % 2 === 0) {
    return "even";
  } 
    return "odd";
}
// let evenOdd = checkEvenOdd(7);
// let evenOdd = checkEvenOdd(34);
// let evenOdd = checkEvenOdd(-7);
// let evenOdd = checkEvenOdd(7.8);
// let evenOdd = checkEvenOdd("Hi");
let evenOdd = checkEvenOdd("3");
console.log(evenOdd);

// QUESTION;
// 1) WHY the last input executed as "please enter integer value!!"?      now it is corrected by using "typeof" keyword

console.log("\n ======Question 14=======");
// ● Create a function that returns
// ○ “Invalid score” if score is above 100 or score is a negative number
// ○ “Grade A” when score is between 90 and 100 (both 90 and 100 included)
// ○ “Grade B” when score is between 80 and 89 (both 80 and 89 included)
// ○ “Grade C” for any score below 79

// function scoreGrade(score) {
//   if (score > 100 || score < 0) {
//     return "Invalid score";
//   } else if (90 <= score <= 100) {
//     return "Grade A";
//   } else if (80 <= score <= 89) {
//     return "Grade B";
//   } else if (score <= 79) {
//     return "Grade C";
//   }
// }
// NOTE; THE above expression(lower num <= score <= higher num) should not be used in JS, b/c it may give us false positive

function scoreGrade(score) {
  if (score > 100 || score < 0) {
    return "Invalid input!";
  } else if (typeof score !== "number") {
    return "እባክዎ ቁጥር ያስገቡ።";
  } else if (score >= 90 && score <= 100) {
    return "Grade A";
  } else if (score >= 80 && score <= 89) {
    return "Grade B";
  } else if (score <= 79) {
    return "Grade C";
  }
}

// let grading = scoreGrade(110);
// let grading = scoreGrade(-12);
// let grading = scoreGrade(97);
// let grading = scoreGrade(84);
// let grading = scoreGrade(30);
let grading = scoreGrade("88");
// let grading = scoreGrade("hello");
console.log(grading);

// QUESTION; WHY line 392 is still working as number?????   the problem was.. isNaN converts by default the "88" in to 88 first the if statement becomes false, so !executed. but corrected by using typeof.