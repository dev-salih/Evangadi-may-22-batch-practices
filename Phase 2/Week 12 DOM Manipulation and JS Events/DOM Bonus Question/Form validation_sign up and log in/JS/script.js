// DOM

//Step 1
    //  creates a variable
        // const variableName
// Step 2
    // current HTML document loaded in the browser.
        // document
// Step 3
    // Find the element whose ID is form.
        // getElementById("your id")


// Listen for FORM event-driven something happening to  this
        // click;
        // submit;
        // input;
        // change;
        // mouseover;
        // keydown;
        // keyup;
        // focus;
        // blur;


// form.addEventListener("submit", (event) => {
//     console.log("Form submitted");
// });
    // There are two arguments: 

        //      addEventListener()
        //           /       \
        //          /         \
        // "submit"            function
        // argument             argument

    // First
        // what should i watch for? "Submit"
    // Second
        // what should i do when it happens? "Function"
        // eg:-
        // form
        //  ↓
        // listen
        //  ↓
        // submit
        //  ↓
        // run function



// function handleSubmit(event) {
//     console.log("Form submitted");
// }

// form.addEventListener("submit", handleSubmit);

            // form
            //  ↓
            // listen
            //  ↓
            // submit
            //  ↓
            // run handleSubmit
            //  ↓
            // find function handleSubmit(event)



// Listen for something happening to this element.
    // form.addEventListener('submit', ...)
    // Listen for the form being submitted.

        // what is 'submit'
            // <button type="submit">Signup</button>;
        // When the user presses that button, the form attempts to submit.
        // the browseer creates a submit event

        // What is (e) =>{...}?
            // this is arrow function
            // receives argument => (e)
                // (e) is a variable conttaining information about event
    // Eg:-
        // Firstname: Zele
        // Email: zele@example.com
        // Password: 12345678
        // Repeat: 12345678
    // then clicks
        // Signup
    // "Submit Event happen"

const form = document.getElementById("form");
const firstname_input = document.getElementById("firstname-input");
const email_input = document.getElementById("email-input");
const password_input = document.getElementById("password-input");
const repeat_Password_input = document.getElementById("repeat-password-input");
const error_message = document.getElementById("error-message");



form.addEventListener('submit', (e) =>{
    // Create empty array
        // Because the program does not know yet whether anything is wrong
        // then the validation function add error messages
    let errors = []

    if (firstname_input) { // This must be Signup page " firstname_input" emil kalew Signup mehonun yeredal kalhone "else" Login check yadergal

        // if we have a firstname input we are in the signup
        errors = getSignupFormErrors(firstname_input.value, email_input.value, password_input.value, repeat_Password_input.value);

      // firstname_input, email_input, password_input, repeat_Password_input
        // are represents the entire HTML element
                // that means 
            // firstname_input => <input id="email-input">
            // <input type="text" name="firstname" id="firstname-input" placeholder="Firstname ">


    // firstname_input.value, email_input.value password_input.value, repeat_Password_input.value,
        // Represented the text currently enter into that field
        // that means
    // firstname_input.value => zele@gmail.com

    
    } else {
        // if we don't have a firstname input then we are in the login page
        errors = getLoginFormErrors(email_input.value, password_input.value);
    }

    if (errors.length > 0) {
        // if there are any errors
        e.preventDefault();
        error_message.innerText = errors.join(". ") 
    }
})
        // User clicks Signup
        //        ↓
        // submit event
        //        ↓
        // JavaScript validation
        //        ↓
        // ERROR?
        //    ↙         ↘
        //  YES          NO
        //  ↓             ↓
        // preventDefault submit

    // join(. ) => its combines array elements into one string
        // display all error in one paragraph

function getSignupFormErrors (firstname, email, password, repeatPassword) {
    let  errors = []

    if (firstname === '' || firstname == null){
        errors.push('Firstname is required')
        firstname_input.parentElement.classList.add("incorrect");
    }
            // Is firstname empty
                    // OR
            // is firstname null(No value)?

    if (email === '' || email == null){
        errors.push('Email is required')
        email_input.parentElement.classList.add("incorrect");
    }

    if (password === '' || password == null){
        errors.push('Password is required')
        password_input.parentElement.classList.add("incorrect");

    }else if(password.length < 8){
        errors.push('Password must have 8 characters')
        password_input.parentElement.classList.add("incorrect");
    }

    if(password !== repeatPassword){
        errors.push('Password dose not match repeated password')
        password_input.parentElement.classList.add("incorrect");
        repeat_Password_input.parentElement.classList.add("incorrect");
    }
    return errors;
}


function getLoginFormErrors (email, password){
    let errors = []

    if (email === "" || email == null) {
        errors.push("Email is required");
        email_input.parentElement.classList.add("incorrect");
    }
    if (password === "" || password == null) {
        errors.push("Password is required");
        password_input.parentElement.classList.add("incorrect");
    }
    return errors;
}

const allInputs = [firstname_input, email_input, password_input, repeat_Password_input];

allInputs.forEach(input => {
    if (input){
        input.addEventListener('input', () =>{
            if (input.parentElement.classList.contains('incorrect')){
                input.parentElement.classList.remove('incorrect');
                error_message.innerText = '';
            }
        })
    }

})












// FINAL 
    // If you work on this project thoroughly and fully understand everything involved,
        // you will know the important JavaScript concepts listed below.
    // concept 1
        // document.getElementById(); => DOM selection
    // concept 2
        // .value => reading user input
    // concept 3
        // addEventListener() => event-driven programming
    // concept 4
        // preventDefault() => controlling browser behavior
    // concept 5
        // function => reusable logic
    // concept 6
        // return => sending data back from a function
    // concept 7
        // array.push() => Storing multiple errors or (Value)
    // concept 8
        // array.length => checking how many errors or (Value) exist
    // concept 9
        // array.join  => converting multiple errors into one message
    // concept 10
        // parentElement => navigating the DOM tree
    // concept 11
        // classList.add() => changing CSS classes
    // concept 12
        // classList.remove() => removing CSS classes
    // concept 13
        // classList.contains() => checking whether a class exists
    // concept 14
        // forEach() => looping through elements
    // concept 15
        // input event => reacting to user typing
    