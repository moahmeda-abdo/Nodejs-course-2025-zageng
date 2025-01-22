//! Arithmetic Operators
let a = 10, b = 3;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Increment:", ++a);
console.log("Decrement:", --b);

//! Assignment Operators
let x = 5;
x += 2; // Same as x = x + 2
console.log("Addition Assignment:", x);
x -= 2; // Same as x = x - 2
console.log("Subtraction Assignment:", x);
x *= 2; // Same as x = x * 2
console.log("Multiplication Assignment:", x);
x /= 2; // Same as x = x / 2
console.log("Division Assignment:", x);
x %= 2; // Same as x = x % 2
console.log("Modulus Assignment:", x);

//!Comparison Operators
console.log("Equal (==):", a == b);
console.log("Strict Equal (===):", a === b);
console.log("Not Equal (!=):", a != b);
console.log("Strict Not Equal (!==):", a !== b);
console.log("Greater Than (>):", a > b);
console.log("Less Than (<):", a < b);
console.log("Greater or Equal (>=):", a >= b);
console.log("Less or Equal (<=):", a <= b);

//!Logical Operators
let c = true, d = false;
console.log("Logical AND (&&):", c && d);
console.log("Logical OR (||):", c || d);
console.log("Logical NOT (!):", !c);

const num = 10;
const str = "JavaScript";
const isActive = true;

if (num > 5) {
    console.log("The number is greater than 5.");
}

if (str === "JavaScript") {
    console.log("This is JavaScript.");
} else {
    console.log("This is not JavaScript.");
}

if (num < 5) {
    console.log("The number is less than 5.");
} else if (num === 10) {
    console.log("The number is exactly 10.");
} else {
    console.log("The number is greater than 10.");
}

if (num > 5) {
    if (isActive) {
        console.log("The number is greater than 5, and isActive is true.");
    } else {
        console.log("The number is greater than 5, but isActive is false.");
    }
}

// Logical operators in if conditions
if (num > 0 && num < 20) {
    console.log("The number is between 0 and 20.");
}

if (num > 20 || isActive) {
    console.log("Either the number is greater than 20 or isActive is true.");
}

//! Very important Example
const day = new Date().getDay()

// Get day using else if
if (day === 0) {
    console.log("Today is Sunday");
} else if (day === 1) {
    console.log("Today is Monday");
} else if (day === 2) {
    console.log("Today is Tuesday");
} else if (day === 3) {
    console.log("Today is Wednesday");
} else if (day === 4) {
    console.log("Today is Thursday");
} else if (day === 5) {
    console.log("Today is Friday");
} else if (day === 6) {
    console.log("Today is Saturday");
}

// Get day using switch
switch (day) {
    case 0:
        console.log("Today is Sunday");
        break;
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    default:
        console.log("Invalid day");
}