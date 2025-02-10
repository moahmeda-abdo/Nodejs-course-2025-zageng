const http = require('http');
const os = require('os');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('user.json' ,'utf-8',(err , data)=>{
        if(err){
            res.end(err.message)
            return;
        }
        const users = JSON.parse(data)
       if(req.url === "/names"){
        const names = users.map(user => user.name)
        res.end(JSON.stringify(names))
       }
    } )
    // res.end('Hello World');
})

const PORT = 3000

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`
    )
})




//built-modules in NODEJS
//http
//os
//path

//fs -> file system

// const filePath = "/Users/student/project/server.js";

// console.log("File Name:", path.basename(filePath));
// console.log("Directory:", path.dirname(filePath));
// console.log("File Extension:", path.extname(filePath));


// console.log("Operating System:", os.platform());
// console.log("CPU Architecture:", os.arch());
// console.log("Total Memory (GB):", os.totalmem() / 1024 / 1024 / 1024);
// console.log("Free Memory (GB):", os.freemem() / 1024 / 1024 / 1024);
// console.log("Home Directory:", os.homedir());














