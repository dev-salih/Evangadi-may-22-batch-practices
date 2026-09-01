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