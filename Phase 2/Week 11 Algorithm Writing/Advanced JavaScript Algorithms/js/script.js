// Advanced JavaScript Algorithms  - practice exercise

console.log("\n ===========Question 1===============");
// Given an array of numbers, write a function that prints in the console another array
// which contains all the even numbers in the original array, which also have even indexes only.
// ○ Test 1:  getOnlyEvens([1, 2, 3, 6, 4, 8]) prints  [ 4]
// ○ Test 2:  getOnlyEvens([0, 1, 2, 3, 4]) prints  [0, 2, 4]

// step 1---understand
// -I will check the the numbers in the even index
// -then if the number is also an even number
// -i will collect in one array and
// -finally execute the collected array

// step 2---check on paper

// step 3---craft a general formula

// step 4---pseudo code
// -define a function which takes an array as an argument
// -check the argument is an array or not
// -declare a variable with array value which collects the results
// -create for loop to access every even-indexes
// -check the even-index value is even number or not
// -if it is even number;
// -add it to the previously declared variable
// -if not even number;
// -skip it
// -finally execute the the variable which collected the results

// step 5--- JS code
function getOnlyEvens(arr) {
  if (!Array.isArray(arr)) {
    return "please enter an Array value!";
  }
  let results = [];
  for (let i = 0; i <= arr.length; i = i + 2) {
    if (arr[i] % 2 === 0) {
      results.push(arr[i]);
    }
  }

  return results;
}
// let a = getOnlyEvens([1, 2, 3, 6, 4, 8]);
// let a = getOnlyEvens([0, 1, 2, 3, 4]);
// let a = getOnlyEvens(0, 1, 2, 3, 4);
// console.log(a);



// method 2
function getOnlyEvens(arr) {
  const result = arr.filter((value, index) =>
    index % 2 === 0 && value % 2 === 0
  );

  // console.log(result);
}

// Test Cases
// getOnlyEvens([1, 2, 3, 6, 4, 8]); // [4]
// getOnlyEvens([0, 1, 2, 3, 4]);    // [0, 2, 4]


function getOnlyEvens(arr) {
  const result = [];

  arr.forEach((value, index) => {
    if (index % 2 === 0 && value % 2 === 0) {
      result.push(value);
    }
  });

  console.log(result);
}

// Test Cases
getOnlyEvens([1, 2, 3, 6, 4, 8]); // [4]
getOnlyEvens([0, 1, 2, 3, 4]);    // [0, 2, 4]



console.log("\n ===========Question 2===============");

// ● Create a function that takes a two-digit number as an parameter and prints "Ok" in
// the console if the given string is greater than its reversed digit version. If not, the
// function will print "Not ok"
// ○ Test 1: reverseCompare(72)  prints "ok" because  72 > 27
// ○ reverseCompare(23) prints  "Not ok", because 23 is not greater than 32

function reverseCompare(num) {
    let tens = Math.floor(num / 10);
    let ones = num % 10;

    let reversed = ones * 10 + tens;

    if (num > reversed) {
        console.log("Ok");
    } else {
        console.log("Not ok");
    }
}

// Test Cases
reverseCompare(72); // Ok
reverseCompare(23); // Not ok


// method 2
function reverseCompare(num) {
    let reversed = Number(
        num.toString().split("").reverse().join("")
    );

    if (num > reversed) {
        console.log("Ok");
    } else {
        console.log("Not ok");
    }
}

// Test Cases
reverseCompare(72); // Ok
reverseCompare(23); // Not ok

console.log("\n ===========Question 3===============");

// ● Write a function that takes a positive integer and returns the factorial of the number.
// Notes: The factorial of 0 is 1. Ex: factorial seven is : 1 × 2 × 3 × 4 × 5 × 6 × 7. The
// factorial of any positive integer x is x * (x- 1) * (x- 2) * . . . . . . * 1 (ex: factorial of 4 is
// 4 * 3 * 2 * 1 = 24)
// ○ Test 1: returnFactorial(5) outputs 120
// ○ Test 2: returnFactorial(6) outputs 720
// ○ Test 3: returnFactorial(0) outputs 1

function returnFactorial(x) {
  let factorial = 1;

  for (let i = 1; i <= x; i++) {
    factorial *= i;
  }

  return factorial;
}

console.log(returnFactorial(5)); // 120
console.log(returnFactorial(6)); // 720
console.log(returnFactorial(0)); // 1

console.log("\n ===========Question 4 (Meera array)===============");
// ● A Meera array is defined to be an array containing only numbers as its elements and for
// all n values in the array, the value n*2 is not in the array. So [3, 5,-2] is a Meera array
// because 3*2, 5*2 or 2*2 are not in the array. But [8, 3, 4] is not a Meera array because
// 2*4=8 and both 4 and 8 are elements found in the array. Write a function that takes an
// array of numbered elements and prints “I am a Meera array” in the console if its array
// does NOT contain n and also n*2 as value. Otherwise, the function prints “I am NOT a
// Meera array”
// ○ Test 1: checkMeera([10, 4, 0, 5]) outputs “I am NOT a Meera array” because 5 *
// 2 is 10
// ○ Test 2: checkMeera([7, 4, 9]) outputs “I am a Meera array”
// ○ Test 1: checkMeera([1,-6, 4,-3]) outputs “I am NOT a Meera array” because-3
// *2 is -6


function checkMeera(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(arr[i] * 2)) {
      console.log("I am NOT a Meera array");
      return;
    }
  }

  console.log("I am a Meera array");
}

// Test 1
checkMeera([10, 4, 0, 5]);
// I am NOT a Meera array

// Test 2
checkMeera([7, 4, 9]);
// I am a Meera array

// Test 3
checkMeera([1, -6, 4, -3]);
// I am NOT a Meera array

console.log("\n ===========Question 5 (Dual array)===============");

// ● Define a Dual array to be an array where every value occurs exactly twice. For example,
// {1, 2, 1, 3, 3, 2} is a dual array.The following arrays are not Dual arrays {2, 5, 2, 5, 5} (5
// occurs three times instead of two times) {3, 1, 1, 2, 2} (3 occurs once instead of two
// times) Write a function named isDual that returns 1 if its array argument is a Dual array.
// Otherwise it returns 0.


function isDual(arr) {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }

    if (count !== 2) {
      return 0;
    }
  }

  return 1;
}

// Test 1
console.log(isDual([1, 2, 1, 3, 3, 2])); // 1

// Test 2
console.log(isDual([2, 5, 2, 5, 5])); // 0

// Test 3
console.log(isDual([3, 1, 1, 2, 2])); // 0



console.log("\n ===========Question 6===============");

// ● Write a function that takes the number of seconds and returns the digital format clock
// time as a string. Time should be counted from 00:00:00.
// ○ Examples: digitalClock(5025) as "01:23:45" 5025 seconds is 1 hour, 23 mins, 45
// secs.
// ■ digitalClock(61201) as "17:00:01"   No AM/PM. 24h format.
// ■ digitalClock(87000) as "00:10:00" It's 00:10 next day


function digitalClock(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;

  // Keep the clock in 24-hour format
  hours = hours % 24;

  // Add leading zeros
  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  secs = String(secs).padStart(2, "0");

  return `${hours}:${minutes}:${secs}`;
}

// Tests
console.log(digitalClock(5025));  // "01:23:45"
console.log(digitalClock(61201)); // "17:00:01"
console.log(digitalClock(87000)); // "00:10:00"
