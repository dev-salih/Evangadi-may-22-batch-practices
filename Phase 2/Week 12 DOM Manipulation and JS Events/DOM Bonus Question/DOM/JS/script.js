// Q-1
let themeForm = document.getElementById("themeChoice");
// let blue = document.getElementById("blue");

const colorMap = {
  blue: { bg: "#5ab5ff", text: "#000000" },
  green: { bg: "#03c4a1", text: "#000000" },
  purple: { bg: "#c300ff", text: "#ffffff" },
  sunny: { bg: "#FFEB3B", text: "#000000" },
  nightmode: { bg: "#000000", text: "#ffffff" },
};

if (themeForm) {
  themeForm.addEventListener("change", function (event) {
    let selectorColor = event.target.value;
    if (colorMap[selectorColor]) {
      // Change background color
      document.body.style.backgroundColor = colorMap[selectorColor].bg;
      // Ensure text stays visible across light/dark backgrounds (Question 2 requirement)
      document.body.style.color = colorMap[selectorColor].text;
    }
  });
}
// Q-2
let formCounter = document.getElementById("counter");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let result = document.getElementById("result");

let counts = 0;

plus.addEventListener("click", function (e) {
  e.preventDefault();
  if (counts < 20) {
    counts++;
    result.textContent = counts;
  }
});
minus.addEventListener("click", function (event) {
  event.preventDefault();
  if (counts > 0) {
    counts--;
    result.textContent = counts;
  }
});
