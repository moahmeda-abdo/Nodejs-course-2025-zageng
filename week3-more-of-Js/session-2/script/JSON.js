/*
 JSON: JavaScript Object Notation
 -> JSON is a lightweight data format used to store and exchange data.
 -> It’s commonly used when sending data between a server and a web application.
 - (JSON only supports text, numbers, booleans, arrays, and objects)
 - JS objects vs JSON objects
 - JSON.parse() and JSON.stringify()
*/

// JS objects
const object = {
    name: "John",
    age: 30,
    city: "New York"
}

// JSON objects
const json_object = "{ \"name\": \"John\", \"age\": 30, \"city\": \"New York\" }"

const jsonOb = JSON.stringify(object)
// console.log(jsonOb)
// console.log(object)


const jsOb = JSON.parse(json_object)
console.log(jsOb)