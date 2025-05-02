
require('dotenv').config() // no need to create a variable as we don't use it later 
//import express library
const express = require('express');
const cors = require('cors');
const route = require('./routes' );

//import db connection file
require('./databaseconnection');

//create express server using express
const bookServer = express();

// the following order is important
bookServer.use(cors()); // connect the server with frontend using cors
bookServer.use(express.json()); // pares JSON data , we use middleware
bookServer.use(route)  // tell server to use route 


// create/set the port 
const PORT = 4000 || process.env.PORT

// listen to incoming requests
bookServer.listen(PORT,()=>{
	console.log(`server running successfully at port number ${PORT} `);
})



