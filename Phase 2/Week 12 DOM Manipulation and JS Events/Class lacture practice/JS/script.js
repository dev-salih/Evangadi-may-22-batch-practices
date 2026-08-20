console.log(document);
document.body.children[0].innerText = "HELLO WORLD";

// DOM Manupulation
// step 1 (selecting element)
    // a) of individual ele
        console.dir(document);
        console.log(document.body.children[1].children[0]);

        let firstElement = document.getElementById("one");
        console.log(firstElement);

        console.log(firstElement.className);
        // firstElement.className = "blue";
      // 1) using getElementById(" ");
        document.getElementById("four").className ="blue";

      // 2) using querySelector("#___or .___");
        console.log(document.querySelector("#two"));
        console.log(document.querySelector(".red"));
        console.log(document.querySelector("h1"));
        
        
    // b) for multiple ele
      // 1)  getElementByClassName(".___");
        let classElements = document.getElementsByClassName("red");
        console.log(classElements);
      // 2)  getElementByTagName()
        let tagElements = document.getElementsByTagName("h1");
        console.log(tagElements);
        // console.log(tagElements[1]);
      // 3)  querySelectorAll("#___ or .__");
        let queryElements = document.querySelectorAll(".red");
        console.log(queryElements);
        // console.log(queryElements[2]);