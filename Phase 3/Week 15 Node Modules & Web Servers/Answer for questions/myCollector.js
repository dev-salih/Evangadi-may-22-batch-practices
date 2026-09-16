// 3 (a)
const first = require("./myFirst");
const second = require("./mySecond");

// 3 (b)
const result1 = first.myMultiplier(5);
const result2 = second.myMultiplier(5);

console.log(result1);
console.log(result2);

// 4 (a)

const fs = require("fs");

const result3 = first.myMultiplier(14);
fs.writeFile(
  "results.txt",
  `The value of 14 when passed through the myMultiplier 
function is (${result3}).`,
);

// 4 (b)

const result4 = second.myMultiplier(14);

fs.appendFile(
  "results.txt",
  `\nThe value of 14 when passed through the myMultiplier function is (${result4}).`,
);
