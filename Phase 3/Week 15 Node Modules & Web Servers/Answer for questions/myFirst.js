// 1 - (a)
console.log("My first module");

// 1 - (c)
function myMultiplier(x) {
    return 2 * x;
};

// 1 (D & E)
let y = myMultiplier(4);
// console.log(y);

// 1 (F)
module.exports.myMultiplier = myMultiplier;