// Decision loop and  object oriented programming:
// practice exercises

// Questions on decision loops
// ************************

console.log("\n =============Question 1===========");
// ● Write a function that prints the first 10 integers on the console starting from the number 1 using
// the JavaScript for loop.

function questionOne() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

questionOne();

console.log("\n =============Question 2===========");
// ● Write a function that takes a single number as an argument and prints the next 5 numbers in the
// console. Note: each output should be displayed on a new line.
// ○ Test case: If you give 7 to the function, output should look like this:
// 8
// 9
// 10
// 11
// 12

function questionTwo(num) {
  for (let i = 1; i <= 5; i++) {
    console.log(num + i);
  }
}

questionTwo(7);

console.log("\n =============Question 3===========");
// ● Write a function that takes a single number and prints the sum of the next 10 numbers after the
// given number.
// ○ Testcase: If you give 7 to the function,out put should be:125-because(8+9+10+
// 11+  12+  13+  14+  15+  16+  17 = 125)

function questionThree(num) {
  let sum = 0;

  for (let i = 1; i <= 10; i++) {
    sum += num + i;
  }

  console.log(sum);
}

questionThree(7);

console.log("\n =============Question 4===========");
// ● Write a function that takes an array as an argument and prints every element of the  array on the
// console.
// ○ Test case: given the array a = [1, "Hello", 8, 44],  output should look like this:
// 1
// Hello
// 8
// 44

function questionFour(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

questionFour([1, "Hello", 8, 44]);

console.log("\n =============Question 5===========");
// ● Write a function that takes anarrayasanargument andprints the totalnumberofelements
// found in the array.Hint: use a property of the Arrayobject to solve this question.
// ○ Test case 1: Given the array a = [1, "Hello", 8, 44], output should be: 4
// ○ Test case 2: Given the array a = ["world", 13], output should be: 2

function questionFive(arr) {
  console.log(arr.length);
}

questionFive([1, "Hello", 8, 44]);
questionFive(["world", 13]);

console.log("\n =============Question 6===========");
// ● Writeafunctionthattakesanarrayofnumbersasaparameterandlogsintheconsolethesumof
// all the numbers in the array.
// ○ Test case1: Ifyougive thisarray, [5, 6, 99, 8, 76, 4, 68, 44], tothefunction,output
// should be: 310 because 5 + 6 + 99 + 8 + 76 + 4 + 68 + 44
// ○ Testcase2:Ifyougivethisarray,[3,0],tothefunction,outputshouldbe: 3 because
// 3 + 0

function questionSix(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  console.log(sum);
}

questionSix([5, 6, 99, 8, 76, 4, 68, 44]);
questionSix([3, 0]);

console.log("\n =============Question 7===========");
// ● Write a function that takes an array of all numbers as a parameter,subtracts the total sum of all
// odd numbers of the array from the total sum of all even numbers and logs the result in the
// console.
// ○ Test case: If you give these array, [5,6,99,8,76,4,68,44], to the function, output
// should be:   102
// ■ Sum of odd numbers: 5 + 99 =  104
// ■ Sum of even numbers: 6 + 8 + 76 + 4 + 68 + 44 =  206
// ■ Difference between total even and total odd numbers: 206 - 104 = 102

function questionSeven(arr) {
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenSum += arr[i];
    } else {
      oddSum += arr[i];
    }
  }

  console.log(evenSum - oddSum);
}

questionSeven([5, 6, 99, 8, 76, 4, 68, 44]);

console.log("\n =============Question 8===========");
// ● Writeafunctionthattakesanarrayasaparameterandlogsintheconsoletheelementsthathave
// evenindexesonly.Notice: thisquestionisnotaskingyoutologelementswithevenvalue,but
// elements that are located on even indexes)
// ○ Test case1: Ifyougive thisarraytothefunction[5, 6, 99, 8,76,4,68,44], toutput
// should be:
// 5
// 99
// 76
// 68
// ○ Testcase2: Ifyougivethisarraytothefunction[11,“Sam”,3,7,“car”], outputshould
// be:
// 11
// 3
// car
// Questions on built in JavaScript methods
// ***********************************
// Questions 9 and 10 are dependent on the sampleArray provided below:
// let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];

function questionEight(arr) {
  for (let i = 0; i < arr.length; i += 2) {
    console.log(arr[i]);
  }
}

questionEight([5, 6, 99, 8, 76, 4, 68, 44]);

questionEight([11, "Sam", 3, 7, "car"]);

console.log("\n =============Question 9===========");
// Writeafunctionthat takes thesampleArrayasaparameter, removes the lastelement fromthearray,
// adds a new value of "32" to the array and prints the new array on the console.Hint: use an array method
console.log("\n =============Question 10===========");
// ● Write a function that takes the sampleArray as an argument, sorts the array in ascending order
// and prints the sorted array on the console
// // Use the sort method. Make sure you understand just using the sort() method alphabetically.
// You should use this sorting syntax -  sort(function(a, b){return a-b});
// Questions on JavaScript objects
// ****************************
// The questions below ( questions 11 to 14) are based on the "evangadiClass" object provided below.
// let evangadiClass = {
// lengthOfCourse: "1 Month",
// website: "https://www.evangadi.com/",
// isChallenging: false,
// topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
// students: [
// {
// },
// {
// },
// {
// },
// {
// },
// {
// }
// ]
// name: "Abebe",
// age: 34,
// sex: "M"
// name: "Kebede",
// age: 44,
// sex: "M"
// name: "Almaz",
// age: 27,
// sex: "F"
// name: "Challa",
// age: 22,
// sex: "M"
// name: "Chaltu",
// age: 19,
// sex: "F"
// }

console.log("\n =============Question 11===========");
// ● Change the lengthOfCourse property of the object to "5 Month" and print the new object on the
// console
// ○ // Use the dot notation "." to call the property you want to change

console.log("\n =============Question 12===========");
// ● Add "Bootstrap" at the end of the topicsCovered property and print the new object on the
// console
// ○ // Use an array method
console.log("\n =============Question 13===========");
// ● Write a function that takes the "evangadiClass" object as an argument and calculates the average
// age of the class. Print the result on the console
console.log("\n =============Question 14===========");
// ● Write a function that takes the "evangadiClass" object as an argument and calculates the
// percentage of male students in the class. Print the result on the console
// Puzzles
// *******
console.log("\n =============Question 15===========");
// Test the divisors of three
// ● Write a function that takes 2 parameters: a low and high number. Your goal is to print all
// numbers (on the console) between low and high, and for each of these numbers print
// whether or not the number is divisible by 3. If the number is divisible by 3, print the word
// "div3" directly after the number.
console.log("\n =============Question 16===========");
// The famous coding interview question (FizzBuzz)
// ● Write a function that prints in the console the numbers from 1 to 100. But for multiples of
// three print “Fizz” instead of the number and for the multiples of five print “Buzz” and for
// numbers which are multiples of both three and five print "FizzBuzz".
console.log("\n =============Question 17===========");
// Evens number
// ● An Evens number is an integer whose digits are all even. For example 2426 is an Evens
// number but 3224 is not. Write a function named isEvens that prints on the console 1 if its
// integer argument is an Evens number. The function prints 0 otherwise.
