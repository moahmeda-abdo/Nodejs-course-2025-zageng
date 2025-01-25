const numbers = [1, 2, 3, 4, 5, 6];
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 },
];

// 1. map 
const doubled = numbers.map((num) => num * 2);
console.log("Doubled:", doubled);

// 2. filter
const evens = numbers.filter((num) => num % 2 === 0);
console.log("Evens:", evens);

// 3. reduce 
const sum = numbers.reduce((acc, num) => acc + num);
console.log("Sum:", sum); 

// 4. forEach 
console.log("ForEach:");
numbers.forEach((num) => console.log(num)); 

// 5. sort
const sortedUsers = users.sort((a, b) => a.age - b.age);
console.log("Sorted Users by Age:", sortedUsers);

