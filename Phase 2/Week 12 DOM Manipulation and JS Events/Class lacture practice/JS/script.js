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


// =============== Step 2 - Altering values  ======================

// ************ A (working with HTML contents) ******************

// 1)   createElement() ----- method

// let liElem = document.createElement("li");
// console.log(liElem);

// 2)    appendChild()  ----- method

// let pareElem = document.getElementById("numbersList");
// pareElem.appendChild(liElem);
// liElem.innerText = "Hi Everyone!!"; // innerText --- property

// 3)    PrependChild()  ----- method

// pareElem.prepend(liElem);

// 4)    innerHTML & outerHTML ---- properties

// innerHTML;--- inserts the new html inside the selected tag
// liElem.innerHTML = "<i>selam new, using innerHTML</i>";

// outerHTML;---- replaces the selected tag itself
// liElem.outerHTML = "<P>selam new 2, using outerHTML</P>";

// 5)    textContent --- property

// liElem.textContent = "Hello Class";

// 6)    remove() ---- method

// let childEle = document.getElementById("two");
// pareElem.removeChild(childEle);

// 7)    after() & before() ---- methodes

// let myReferenceElem = document.getElementById("three");
// myReferenceElem.after(liElem);
// myReferenceElem.before(liElem);


// ************ B (working with HTML Attribute) ******************

// 1) className --------- property
let parent = document.getElementById("numbersList");
// console.log(parent.className);    
// parent.className = "blue pink";    

// // 2) classList() ------- method
//   console.log(parent.classList);
//   // adding class using classList
//       parent.classList.add("violet");
//       console.log(parent.classList);
//   // removing class using classList
//       parent.classList.remove("pink");
//   // adding & removing class together using ---- classList.toggle()
//       parent.classList.toggle("green"); //it removes if it was existed and add if not existed.

// 3) ID ----- property 
  // parent.id = "newID";
  // console.log(parent.id);


// 4) hasAttribute() ---- method
    // console.log(parent.hasAttribute("href"));
    // console.log(parent.hasAttribute("id"));
// 5) getAttribute() ---- method
    // console.log(parent.getAttribute("id"));
    // console.log(parent.getAttribute("type"));
// 6) setAttribute() ---- method
    // console.log(parent.setAttribute("name", "abebe"));


// example ---- to insert an image iside the html 

// let imgEle = document.createElement("img");
// // console.log(imgEle);
// imgEle.setAttribute(
//   "src",
//   "https://t4.ftcdn.net/jpg/01/00/34/13/360_F_100341373_Pq7QzOJOLAvZaJysSYYbeZ9uqEIQV7bk.jpg",
// );
// parent.appendChild(imgEle);
// imgEle.setAttribute("width", "300px");
// // 7) removeAttribute() ---------- method
// imgEle.removeAttribute("width");

// ==========================================================
// 8.12 Altering values (working with inline styling)
// directly (without the need of classes or ids)
// ===========================================================

// parent.document.getElementById("numbersList");

// parent.style.backgroundColor = "green";
// parent.style.color = "white";
// parent.style.fontSize = "20px";
// parent.style.border = "black double 20px";
// parent.style.display = "none";
// parent.style.display = "block";



