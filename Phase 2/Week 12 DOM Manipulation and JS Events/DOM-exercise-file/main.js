// Q-1
// 1.1
let ele_1 = document.getElementById("sample1");
// 1.2
console.log(ele_1);
// 1.3
console.log(ele_1.textContent);

// Q-2
// 2.1
let ele_2 = document.getElementById("techCompanies");
console.log(ele_2);

// 2.2
let ele_3 = document.querySelector("#techCompanies");
console.log(ele_3);

// 2.3
let ele_4 = document.querySelectorAll("#techCompanies li").length;
console.log(ele_4);

// 2.4
let redClass = document.querySelectorAll(".red");
console.log(redClass);

let redClass_2 = document.getElementsByClassName("red");
console.log(redClass_2);

// 2.5
let newEle = document.createElement("li");
newEle.innerText = "Facebook"; // we can also use "textContent"
console.log(newEle);

// 2.6
newEle.className = "blue"; // OR
// newEle.classList.add("blue");

// 2.7
ele_2.appendChild(newEle);

// 2.8
let blueClass = document.querySelectorAll(".blue").length;
console.log(blueClass);

// 2.9
let totalBlue = document.getElementById("blueCompanies");
totalBlue.textContent = `Total blue companies are: ${blueClass}`; // Q-1; is there any difference of using "innerText" or "innerHTML" instead of "textContent" ?

// Q-3
let yesEle = document.getElementById("yes");
// method-1
yesEle.onclick = addBG;
// method-2
// yesEle.addEventListener("click", addBG);

let noEle = document.getElementById("No");
// noEle.onclick = removeBG; // OR
noEle.addEventListener("click", removeBG);

function addBG() {
  document.body.style.backgroundColor = "#99ecff";
}
function removeBG() {
  document.body.style.backgroundColor = "";
}

// Q-2; what should be done with the css of "#yesBackground" and "#noBackground" inside style.css file ?

// Q-4
const form = document.getElementById("adder");
const resultDiv = document.getElementById("sum");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get input values using their name attributes
  const firstVal = document
    .querySelector('input[name="first-value"]')
    .value.trim();
  const secondVal = document
    .querySelector('input[name="second-value"]')
    .value.trim();

  // Validate if both inputs are valid non-empty numbers
  if (
    firstVal === "" ||
    secondVal === "" ||
    isNaN(firstVal) ||
    isNaN(secondVal)
  ) {
    const errorMsg = "Please enter numerical values only";
    console.log(errorMsg);
    resultDiv.textContent = errorMsg;
  } else {
    const sum = Number(firstVal) + Number(secondVal);

    // 1. Display the result on the console
    console.log(sum);

    // 2. Display the result underneath the form inside the #sum div
    resultDiv.textContent = `Sum: ${sum}`;
  }
});