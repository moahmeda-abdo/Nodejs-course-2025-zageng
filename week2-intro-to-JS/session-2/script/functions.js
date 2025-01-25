// 1. Regular Function
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("Alice");

// 2. Function with Return
function addNumbers(a, b) {
    return a + b;
}
const sum = addNumbers(5, 10);
console.log(`The sum is: ${sum}`);

// 3. Arrow Function
const multiply = (a, b) => a * b;

console.log(`The product is: ${multiply(3, 4)}`);

const arrowFunction = () => {
    console.log("This is an arrow function!");
}

// 4. Function Without Return
function sayGoodbye() {
    console.log("Goodbye!");
}
sayGoodbye();

// 5. Self-Invoked Function 
(function () {
    console.log("This is a self-invoked function!");
})();
