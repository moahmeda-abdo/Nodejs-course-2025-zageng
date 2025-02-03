/*
- call stack 
->  is  a stack of function calls (LIFO)
->  function called are pushed onto the stack
->  function finished are popped off the stack
->  stack overflow : when function call it self (recursion)
*/


function one() {
    console.log("One!");
}
function two() {
    one()
    console.log("Two!");
}

function three() {
    two();
    console.log("three!");
}

// three();
// function infinte (){
//     console.log("object")
//     infinte();
// }
