//! JavaScript Data Types

const integer = 42; 
const float = 3.14; 


const singleQuoteString = 'Hello, World!'; 
const doubleQuoteString = "Hello, World!"; 


const isJavaScriptFun = true; 
const isDebugMode = false; 


let uninitializedVariable; 


const noValue = null; 


const person = {
    name: 'John Doe',
    age: 30,
    isStudent: false,
};


const fruits = ['Apple', 'Banana', 'Cherry']; 


console.log(typeof integer); 
console.log(typeof singleQuoteString); 
console.log(typeof isJavaScriptFun); 
console.log(typeof uninitializedVariable); 
console.log(typeof noValue); 
console.log(typeof person); 
console.log(typeof fruits); 





//! Numbers 
let num = 10.1

console.log(Math.floor(num))
console.log(Math.ceil(num))
console.log(Math.round(num))
console.log(Math.max(1, 2, 3, 4, 5))
console.log(Math.min(1, 2, 3, 4, 5))
console.log(num.toString())
console.log(num.toExponential(3))
console.log(num.toFixed(3))
console.log(Number(num.toFixed(3)))
console.log(Number.parseFloat(num.toFixed(3)))
console.log(Number.isNaN(num))



//! String
const str = "  Hello, JavaScript World!  ";

console.log("Length:", str.length);
console.log("Trimmed:", str.trim()); 
console.log("To Uppercase:", str.toUpperCase()); 
console.log("To Lowercase:", str.toLowerCase()); 
console.log("Substring:", str.substring(7, 17)); 
console.log("Slice:", str.slice(-6)); 
console.log("Char At:", str.charAt(7)); 
console.log("Includes 'JavaScript':", str.includes("JavaScript")); 
console.log("Starts With 'Hello':", str.startsWith("Hello")); 
console.log("Ends With 'World!':", str.trim().endsWith("World!")); 
console.log("Index of 'JavaScript':", str.indexOf("JavaScript")); 
console.log("Last Index of 'o':", str.lastIndexOf("o")); 
console.log("Repeat 2 times:", str.repeat(2)); 
console.log("Replace:", str.replace("JavaScript", "JS")); 
console.log("Replace All:", str.replaceAll("o", "0")); 
console.log("Split by space:", str.split(" ")); 
console.log("Search for 'World':", str.search("World")); 
console.log("Split into characters:", str.split("")); 
