// object is a Key-Value pair
// dot & bracket notation

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    "full name": "John Doe"

};
console.log(person["full name"])
const person2 = {};
person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 50;
person2.eyeColor = "blue";


const person3 = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";



const obj = {
    model:"i20",
    color:"red",
    year:2023
}
const obj2 = {
    gender:"male"
}
console.log(person.age)

const person41 = Object.create(person)
console.log(person41) // {}

const newPerson = Object.assign({} ,obj , obj2)
console.log(newPerson)