// Q-1
  // 1.1
    let sample_1 = $("#sample1");
    
  // 1.2
    console.log("1.1: ", sample_1);

  // 1.3
    let text = sample_1.text();
    // console.log("1.2: ", text);
  
// Q-2
  // 2.1
    let tech = $("#techCompanies");
    console.log("2.1: ",tech);
  
  // 2.2
    // let techCount = $("#techCompanies > li").length;
    let techCount = $("#techCompanies").children("li").length;
    console.log("2.2: " , techCount);

    // let techCount = $("#techCompanies").find("li").length; we do not use this b/c it is decendent selector

  // 2.3
    let reds = $(".red");
    console.log("2.3: ", reds)

  // 2.4
    let newEle = $("<li>Facebook</li>");
    console.log("2.4: ", newEle);

  // 2.5 
    newEle.addClass("blue");
    console.log("2.5: ", newEle);

  // 2.6 
    $("li:contains('Sony')").after(newEle);

  // 2.7
    let blueCount = $("#techCompanies").children(".blue").length;
    // console.log(blueCount);

    $("#blueCompanies").text(blueCount);

// Q-3 
$(document).ready(function () {
  $("#btn").on("click", function (e) {
    e.preventDefault();

    // Clear previous results
    $("#davg").empty();
    $("#dsum").empty();

    // Get input values
    const val1 = $("#in1").val().trim();
    const val2 = $("#in2").val().trim();

    // Check if both values are valid numbers and not empty strings
    const num1 = Number(val1);
    const num2 = Number(val2);

    if (val1 === "" || val2 === "" || isNaN(num1) || isNaN(num2)) {
      $("#davg").text("Please enter numerical values only");
      return;
    }

    // Calculate sum and average
    const sum = num1 + num2;
    const avg = sum / 2;

    // 3.1. Display the result on the console
    console.log("Sum:", sum);
    console.log("Average:", avg);

    // 3.2. Display the result underneath the form
    $("#davg").text(avg);
    $("#dsum").text(sum);
  });
});


// Q-4 
$(document).ready(function () {
  $("#btn-2").on("click", function (e) {
    // Prevent the default form submission
    e.preventDefault();

    // Clear previous messages
    $(".err").empty();
    $(".result").empty();

    // Fetch and trim values from all fields
    const firstName = $("#forF").val().trim();
    const lastName = $("#forL").val().trim();
    const email = $("#email").val().trim();

    // Check if any field is left empty
    if (!firstName || !lastName || !email) {
      $(".err").css("color", "red").text("Please fill out all fields.");
      return;
    }

    // Hide input fields, labels, and line breaks inside the form
    $("form").find("input, label, br, submit").hide();   //but how do i hide the border in the form and the submit button?


    // Display the provided values inside the result span
    $(".result").html(`
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
    `);
  });
});