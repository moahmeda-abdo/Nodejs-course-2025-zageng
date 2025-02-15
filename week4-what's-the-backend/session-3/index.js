// fs sync vs async
// modules (built-in modules , user-defined modules , third-party modules)

const fs = require('fs');
const http = require('http');
const {add, sub , div , mul} = require('./calc')


// const fileData = "Hello World from Node.js";
// fs.writeFile("./text.txt", fileData, (err) => {
//     if (err) {
//         console.log(err);
//     }
// })

//  fs.writeFileSync("./text2.txt", fileData, (err) => {
//     if (err) {
//         console.log(err);
//     }
// })

//fs.readFile vs fs.readFileSync
// fs.writeFile vs fs.writeFileSync

// console.log("1") //1
// fs.readFile("./text.txt" , 'utf-8', (err , data)=>{
//     if (err) {
//         console.log(err);
//     }
//     console.log(data);
// })

// console.log("2")

// const data = fs.readFileSync("./text2.txt" , 'utf-8');
// console.log("3")
// console.log( data)
// console.log("4")



// console.log(add(2,3))
// console.log(sub(2,3))
// console.log(mul(2,3))
// console.log(div(2,3))


const EventEmitter = require('events');

// Create a custom event emitter
class MyEmitter extends EventEmitter {}

// Instantiate the custom event emitter
const myEmitter = new MyEmitter();

// Register event listener
myEmitter.on('event', () => {
    console.log('Event occurred');
});

// Emit the event
myEmitter.emit('event');