
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 },
]; // for map : return names

const cities = ['london', 'paris', 'new york', 'Cairo', 'Giza']; // for map : capitalize first letter  

const tasks = [
    { id: 1, completed: true, title: 'Task 1' },
    { id: 2, completed: false, title: 'Task 2' },
    { id: 3, completed: true, title: 'Task 3' },
]; // for filter : return completed tasks 

// 1. map 
const doubled = numbers.map((num) => num * 2);
console.log("Doubled:", doubled);


const names = users.map((user) => user.name)
console.log(names)

const capLetters = cities.map((city) => {

    if (city.charAt(0) === city.charAt(0).toUpperCase()) {
        return city
    }
    return city.charAt(0).toUpperCase() + city.slice(1)
})
console.log(capLetters)


// 2. filter
const evens = numbers.filter((num) => num % 2 === 0);
console.log("Evens:", evens);

const completed = tasks.filter((task) => task.completed) // === true
console.log(completed)

// 3. reduce 
const numbers = [1, 2, 3, 4, 5, 6]; // for map and for loop : double the numbers
const sum = numbers.reduce((acc, num, index, arr) => {
    return acc + num 
});
console.log("Sum:", sum);

// 4. forEach 
console.log("ForEach:");
numbers.forEach((num) => console.log(num));

// 5. sort
const sortedUsers = numbers.sort((a, b) => b - a);
console.log("Sorted :", sortedUsers);

