const arr = [10, 20, 30, 40, 50];

console.log("Length:", arr.length); 

//Adding and Removing Elements
arr.push(60); 
console.log("Push (Add 60):", arr);
arr.pop(); 
console.log("Pop (Remove last):", arr);
arr.unshift(5); 
console.log("Unshift (Add 5):", arr);
arr.shift(); 
console.log("Shift (Remove first):", arr);

//Access and Find Elements
console.log("Element at index 2:", arr[2]); // Access by index
console.log("Index of 30:", arr.indexOf(30)); // Find index of a value
console.log("Includes 40:", arr.includes(40)); // Check if value exists
console.log("Find > 25:", arr.find(num => num > 25)); // First match
console.log("FindIndex > 25:", arr.findIndex(num => num > 25)); // Index of first match

//Splicing and Slicing
const spliced = [...arr];
spliced.splice(2, 1, 35, 45); 
console.log("Splice (Modify):", spliced);
const sliced = arr.slice(1, 4); 
console.log("Slice (1 to 4):", sliced);

//Joining and Splitting
const joined = arr.join(", ");
console.log("Join (String):", joined);


