/*
Run a node.js file on the command line via 
locqakhost 127.0.0.1 without needing an html file
*/

var http= require("http")


//remember: a callback function best written in arrow syntax
http.createServer((request, response) => {
    response.writeHead(200,{"Content-Type": "text/html"})
    response.end("Hello World- The server up and running ")
}).listen(8088)