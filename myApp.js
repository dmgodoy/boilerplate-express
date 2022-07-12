let express = require('express');
let app = express();
console.log("Hello World");

let middlewareFunction = express.static(__dirname + "/public/");

console.log(middlewareFunction);

app.use("/public", middlewareFunction);


app.get("/", (req, res) => {res.sendFile(__dirname + "/views/index.html")});
































 module.exports = app;
