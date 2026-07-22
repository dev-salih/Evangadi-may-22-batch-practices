// ========Question 1: Find out the answers ================
// A)
console.log("A.", 24 > 3);
// B)
console.log("B.", 2 < "12");
// C)
console.log("C.", 0 == 2);
// D)
console.log("D.", 2.0 === 2);
// E)
console.log("E.", 2.0 == "2");
// F)
console.log("F.", 2 < "JOHN");
// G)
console.log("G.", 2 > "JOHN");
// H)
console.log("H.", "2" < "2");
// I
console.log("I.", "2" > "12");
// J
console.log("J.", 1 == 1 || 3 == 2 || 3 == 7);
// K
console.log("K.", 1 == 1 && 2 == 2 && 3 == 7);
// L)
console.log("L.", 1 == 1 || (2 == 2 && 3 == 7));
// M)
console.log(
  "M.",
  (1 == true && 0 > true) ||
    "31" > "9" ||
    10 > 5 ||
    !("2" == "two" || 1 == "1"),
);

// ======Question 2) MCQ =========

// 1. Which expression returns true?
// A/ 
    console.log('1' === 1);
// B/   
    console.log(1 == 1); 
// C/   
    console.log(1 === 1); 
// D/  B and C from above----------(CORRECT)

// 2. What is the value of x in this statement?
let x = (1 == true);
console.log(x);
// A/ 1
// B/ true-------------(CORRECT)
// C/ false
// D/ undefined

// 3. What is the value of y from the following statements?
let a = 10;
let y = (a > 5) && (a < 15);
console.log(y);
// A/ 10
// B/ 5
// C/ 15
// D/ true--------------(CORRECT)

// 4. What is the value of b from the following statements?
let b = 5;
b += 3;
console.log(b);
// A/ 3
// B/ 8----------(CORRECT)
// C/ 15
// D/ 5

// 5. What is the value of d from the following statements?
let c = 10;
let d = c++;
console.log(d);
// A/ 10---------------(CORRECT)
// B/ 11
// C/ 12
// D/ 13

// 6. What is the value of f in the following statements?
let e = 1;
let f = (e !== 2);
console.log(f);
// A/ 1
// B/ 2
// C/ false
// D/ true------------(CORRECT)

// 7. What is the output of (+”2”+2)?
console.log(+"2"+2); //----------(4)

// 8. What is the output of (7 % 3)?
console.log(7 % 3); //--------(1)

// 9. What is the output of (2+true)?
console.log(2 + true);