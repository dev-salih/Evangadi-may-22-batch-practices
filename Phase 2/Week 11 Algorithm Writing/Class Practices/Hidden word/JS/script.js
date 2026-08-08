// Writing Algorithms using the built-in objects and their methods:
// Q-1)
//     What's hiding amongst the crowd?
//     A word is on the loose and now has tried to hide amongst a crowd of tall letters!
//     Help write a function to detect what the word is, knowing the following rules.
//         • Rule 1: The crowd word has all its letters in uppercase
//         • Rule 2: The wanted word has all its letters in lowercase
//         • Rule 3: Note that the word will be spread out amongst the random letters, but their letters remain in the same order

//     • Test case 1: detectWord("UcUNFYGaFYFYGtNUH") prints "cat"
//     • Test case 2: detectWord("bEEFGBuFBRrHgUHlNFYaYr") prints "burglar"

// // steps which happen in our mind
//     U
//     check if smallcase or uppercase
//     Not
//     skip

//     c
//     check if smallcase or uppercase
//     yes
//     write it down

//     U
//     check if smallcase or uppercase
//     Not
//     skip
//     .
//     .
//     continue till the end
//     collect the lowercase letters together keeping their order
//     that is the answer

// // pseudo code
// -define a function detectWord that takes an argument
//     -for loop to iterate through the letters

//     var hiddenWord  = ""
//         -for every letter
//             -use charAt method to take out a single letter from the crowd;
//             -check if the letter is uppercase or lower case
//             HOW?
//                 -Convert the letter to uppercase and compare it with the original
//                 HOW?
//                     -use the toUpperCase() method

//                 if equal then it is upper case
//                     skip

//                 else
//                     save the value on the hiddenWord variable

//                 return the hiddenWord variable

// write the javaScrip code

// function detectWord(a){
//     var hiddenWord = "";

//     for(i=0; i < a.length; i++){
//         var singleLetter = a.charAt(i);
//         if(singleLetter == singleLetter.toLowerCase()){
//             hiddenWord = hiddenWord + singleLetter;
//         }
//     }

//     return hiddenWord;
// }
// var hiddenWord = detectWord("UcUNFYGaFYFYGtNUH");
// console.log(hiddenWord);

// detectWord("UcUNFYGaFYFYGtNUH")
// U
// check if small case or uppercase
// not
// skip

// c
// check if small case or uppercase
// yes
// write it down

// U
// check if small case or uppercase
// not
// skip

// continue till the end

// collect the lowercase letters together keeping their order

// // pseudo code
// -define a function detectWord that takes an argument
//     -use for loop
//     var hiddenWord= "";

//     -for every letter
//         -take out a singleLetter[using charAt method ]
//         -check the singleLetter if small case or uppercase[by converting each letter to uppercase and comparing it with the original letter]
//             -use toUpperCase() method
//         if equal with the original
//             skip
//         else
//             write it on the hiddenWord variable
//         return hiddenWord;


// js code

// method-1

function detectWord(a) {
  var hiddenWord = "";
  for (i = 0; i < a.length; i++) {
    var singleLetter = a.charAt(i);
    if (singleLetter !== singleLetter.toUpperCase()) {
      hiddenWord = hiddenWord + singleLetter;
    }
  }
  return hiddenWord;
}
var hiddenWord = detectWord("UcUNFYGaFYFYGtNUH");
console.log(hiddenWord);



// method-2
function detectLowercases(b) {
  let singleArrays = b.split("");
  // console.log(singleArrays);

  let smallLetters = singleArrays.filter(
    (singleLetter) => singleLetter !== singleLetter.toUpperCase()
  );
  // console.log(smallLetters);

  smallLetters = smallLetters.join("");
  return smallLetters;
}
var ();
console.log(object);