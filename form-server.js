// app.js

// const http = require('http');

var express = require('express');
var cors = require('cors')
// var bodyParser = require('body-parser')
let app = express();

// Create an instance of the http server to handle HTTP requests
// let app = http.createServer((req, res) => {
// 	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')

//     // Send back a response and end the connection
//     res.end('Hello World!\n');
// });

// app.use((req, res) => {
// 	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000';
// 	res.end('Hello World!\n');
// })

app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(bodyParser.json())

app.get('/', (req, res) =>  {
	console.log('it worked!');
	res.send(req.query);
})

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');