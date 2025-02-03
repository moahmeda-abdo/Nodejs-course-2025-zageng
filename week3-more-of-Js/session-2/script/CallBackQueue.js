/*

Callback Queue (FIFO):
-> where asynchronous callbacks wait until the Call Stack is empty.
-> event loop  moves the callback from the Callback Queue to the Call Stack.
*/

console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

console.log("3");
