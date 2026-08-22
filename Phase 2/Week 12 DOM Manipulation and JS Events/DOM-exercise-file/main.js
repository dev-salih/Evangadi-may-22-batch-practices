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
