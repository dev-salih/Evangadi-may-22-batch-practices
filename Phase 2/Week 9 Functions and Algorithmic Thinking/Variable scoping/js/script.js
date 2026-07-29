// 3.5 scoping

//========================
// 1) function scope
//========================

function myCar() {
  var x = "toyota"; //has function scope
  let y = "Honda"; //has function scope
  const z = "Tesla"; //has function scope

  // console.log(x);
  // console.log(y);
  // console.log(z);
}
myCar();

// console.log(x);
// console.log(y);
// console.log(z);

//====================
// 2) Global scope
//====================

var a = "Abebe"; // Global scope
let b = "chala"; // Global scope
const c = "kebede"; // Global scope

// console.log(a);
// console.log(b);
// console.log(c);

function myFirstName() {
  w = "Almaz"; //Global scope
  console.log(w);
  // console.log(a);
  // console.log(b);
  // console.log(c);
}
// myFirstName();

// console.log(w);

//=======================
// 3) Block scope
//=======================

if (true) {
  const message = "Hello"; //Block scope
  let newMessage = "Hi class"; //Block scope
  var otherMessage = "selam new"; //Block scope

  console.log(message);
  console.log(newMessage);
  console.log(otherMessage);
}

// console.log(message);
// console.log(newMessage);
console.log(otherMessage);
