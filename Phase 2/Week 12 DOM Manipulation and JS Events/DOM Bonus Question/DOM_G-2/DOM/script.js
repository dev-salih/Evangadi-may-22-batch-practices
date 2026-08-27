const blue = document.getElementById("blue");
const green = document.getElementById("green");
const purple = document.getElementById("purple");
const sunny = document.getElementById("sunny");
const nightmode = document.getElementById("nightmode");
const white = document.getElementById("white");


blue.onclick = function  (){ document.body.style.backgroundColor = "#5ab5ff";}
green.onclick = function  (){ document.body.style.backgroundColor = "#03c4a1";}
purple.onclick = function  (){ document.body.style.backgroundColor = "#c300ff";}
sunny.onclick = function  (){ document.body.style.backgroundColor = "#FFEB3B";}
nightmode.onclick = function  (){ document.body.style.backgroundColor = "#000";}
white.onclick = function  (){ document.body.style.backgroundColor = "#fff";}



// Q2
const result = document.getElementById("result");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");

let count = 0;

plus.addEventListener ("click", function (event) {
    event.preventDefault();
    if (count < 20) {
        count++;
        result.textContent = count;
    }
})

minus.addEventListener ("click", function (event) {
    event.preventDefault();
    if (count > 0) {
        count--;
        result.textContent = count;
    }
})

// Q3


const form = document.getElementById("form");
const fullName = document.getElementById("fullName");
const password = document.getElementById("password");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {

    // Stop the form from submitting/reloading the page
    event.preventDefault();

    // Check Full Name
    if (fullName.value.trim() === "") {
        fullName.style.backgroundColor = "pink";
    } else {
        fullName.style.backgroundColor = "";
    }

    // Check Password
    if (password.value.trim() === "") {
        password.style.backgroundColor = "pink";
    } else {
        password.style.backgroundColor = "";
    }

    // Check if both fields are filled
    if (
        fullName.value.trim() !== "" &&
        password.value.trim() !== ""
    ) {
        message.textContent = "Form submitted";

        // Hide the form
        form.style.display = "none";
    }
});