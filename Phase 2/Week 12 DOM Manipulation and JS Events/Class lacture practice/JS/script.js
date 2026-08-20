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
