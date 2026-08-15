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

