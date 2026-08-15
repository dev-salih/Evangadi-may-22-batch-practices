// Q1

// Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.

// Examples
// shiftToLeft(5, 2) ➞ 20

// shiftToLeft(10, 3) ➞ 80

// shiftToLeft(-32, 2) ➞ -128

// shiftToLeft(-6, 5) ➞ -192

// shiftToLeft(12, 4) ➞ 192

// shiftToLeft(46, 6) ➞ 2944

// step 1(understand)
// step 2(practice in paper)
// 10 << 3 = 10 * 2^3 = 10 * 8 = 80
// -32 << 2 = -32 * 2^2 = -32 * 4 = -128
// 5 << 2 = 5 * 2^2 = 5 * 4 = 20
// 12 * 2^4 = 12 * 16 = 192
// step 3(craft the general formula)
// x * 2^y
// STEP 4(pseudocode)
// -define a function shiftToLeft which takes 2 arguments
// -HOW?
// function shiftToLeft(x,y) {};
// -check the arguments are numbers and the power value should not be a negative
// declare a variable z = x * 2^y
// - return z
// step 5
function shiftToLeft(x, y) {
  if (typeof x !== "number" || typeof y !== "number" || y <= 0) {
    return "please enter a valid number!";
  }
  let z = x * 2 ** y;
  return z;
}
// step 6(Test)
console.log(shiftToLeft(46, 6));
console.log(shiftToLeft(-6, 5));
console.log(shiftToLeft(6, -5));
console.log(shiftToLeft("abebe", 2));
console.log(shiftToLeft("abebe", "3"));
console.log(shiftToLeft(2, "3"));

// Q-2
// Create a function that changes specific words into emoticons. Given a sentence as a string, replace the words smile, grin, sad and mad with their corresponding emoticons.

// word	emoticon
// smile	:D
// grin	:)
// sad	:(
// mad	:P
// Examples
// emotify("Make me smile") ➞ "Make me :D"

// emotify("Make me grin") ➞ "Make me :)"

// emotify("c") ➞ "Make me :("

// step 1
// step 2

// step 3
// step 4(pseudocode)
// -define a function which takes one string as an argument
// -check
// -declare a variable smile = :D;
// -declare a variable grin = :);
// -declare a variable sad = :(;
// -declare a variable mad = :P;


// this pseudocode needs to be corrected
// step 5
// function emotify(a) {
//   let smile = "Make me :D";
//   let grin = "Make me :)";
//   let sad = "Make me :(";
//   let mad = "Make me :P";
//   return;
// }
// console.log(emotify("Make me grin"));

// this JS code needs to be corrected



// the correct solution
function emotify(sentence) {
  const emoticons = {
    smile: ":D",
    grin: ":)",
    sad: ":(",
    mad: ":P",
  };

  let words = sentence.split(" "); // ["Make","me","smile"]  
  // console.log(words);
  let lastWord = words[words.length - 1];
  // console.log(lastWord);
  words[words.length - 1] = emoticons[lastWord];
  // console.log(emoticons[lastWord]);

  // return words.join(" ");
}

console.log(emotify("Make me smile"));
// console.log(emotify("Make me grin"));
// console.log(emotify("Make me sad"));
// console.log(emotify("Make me mad"));

// Q-3
// A decimal number can be represented as a sequence of bits. To illustrate:

// 6 = 00000110
// 23 = 00010111
// From the bitwise representation of numbers, we can calculate the bitwise AND, bitwise OR and bitwise XOR. Using the example above:

// bitwiseAND(6, 23) ➞ 00000110

// bitwiseOR(6, 23) ➞ 00010111

// bitwiseXOR(6, 23) ➞ 00010001
// Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.

// Examples
// bitwiseAND(7, 12) ➞ 4

// bitwiseOR(7, 12) ➞ 15

// bitwiseXOR(7, 12) ➞ 11
// Notes
// JavaScript has a useful function: toString(2), where you can see the binary representation of a decimal number.


// Q-4
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// Examples
// addUp(4) ➞ 10

// addUp(13) ➞ 91

// addUp(600) ➞ 180300
// Notes
// Expect any positive number between 1 and 1000.