// console.log(document);
// document.body.children[0].innerText = "HELLO WORLD";


// =================================
//        DOM Manupulation
// =================================

// ===========  step 1 (selecting element) ==========
    
// a) for individual ele

        // console.dir(document);
        // console.log(document.body.children[1].children[0]);

        // let firstElement = document.getElementById("one");
        // console.log(firstElement);

        // console.log(firstElement.className);
        // firstElement.className = "blue";

      // ******** 1) getElementById(" ");  ************
        // document.getElementById("four").className ="blue";

      // ******** 2) querySelector("#___or .___");*****
        // console.log(document.querySelector("#two"));
        // console.log(document.querySelector(".red"));
        // console.log(document.querySelector("h1"));
        
        
// b) for multiple ele

      // ******* 1) getElementByClassName("  "); ******

        // let classElements = document.getElementsByClassName("red");
        // console.log(classElements);

      // ******* 2) getElementByTagName("  "); *******

        // let tagElements = document.getElementsByTagName("h1");
        // console.log(tagElements);
        // // console.log(tagElements[1]);

      // ******* 3) querySelectorAll("#__ or .__"); ***

        // let queryElements = document.querySelectorAll(".red");
        // console.log(queryElements);
        // // console.log(queryElements[2]);

// 8.8 – Selecting elements (HTML collection vs NodeList)
// Selecting multiple elements and changing properties by one instruction
    // Use for loop to apply same property for multiple elements
// HTML collection vs NodeList
    // NodeList
       // Selectors that return NodeList
          // querySelectorAll()
       // The returned list is static
    // HTML collection
       // Selectors that return HTML collection
          // getElementsByClassName()
          // getElementsByTagName()
       // The returned list is live (updates live)


      // let Ele = document.getElementsByClassName("red");
      // // let Ele = document.getElementsByTagName("h1");
      // // let Ele = document.querySelectorAll(".red");
      // for (let i = 0; i < Ele.length; i++) {
      //   const element = Ele[i];
      //   element.className = "blue";
      //   // element.outerHTML =`<li>${element.textContent}</li>`;
      // }


// c) Traversing b/n multiple elements 
      // // firstElementChild
      // console.log(document.getElementById("numbersList").firstElementChild);

      // // lastElementChild
      // console.log(document.getElementById("numbersList").lastElementChild);

      // // parentElement
      // console.log(document.getElementById("one").parentElement);

      // // previousElementSibling
      // console.log(document.getElementById("three").previousElementSibling);

      // // nextElementSibling
      // console.log(document.getElementById("three").nextElementSibling);


// =============== Step 2 - Altering values (working with HTML contents) ======================

// 1)   createElement() ----- method

let liElem = document.createElement("li");
console.log(liElem);

// 2)    appendChild()  ----- method

let pareElem = document.getElementById("numbersList");
// pareElem.appendChild(liElem);
// liElem.innerText = "Hi Everyone!!"; // innerText --- property

// 3)    PrependChild()  ----- method

pareElem.prepend(liElem);

// 4)    innerHTML & outerHTML ---- properties

// innerHTML;--- inserts the new html inside the selected tag
// liElem.innerHTML = "<i>selam new, using innerHTML</i>";

// outerHTML;---- replaces the selected tag itself
// liElem.outerHTML = "<P>selam new 2, using outerHTML</P>";

// 5)    textContent --- property

liElem.textContent = "Hello Class";

// 6)    remove() ---- method

let childEle = document.getElementById("two");
// pareElem.removeChild(childEle);

// 7)    after() & before() ---- methodes

let myReferenceElem = document.getElementById("three");
// myReferenceElem.after(liElem);
myReferenceElem.before(liElem);
