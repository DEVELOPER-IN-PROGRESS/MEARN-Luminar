//import express library
const express = require('express');

//create express server using express
const bookServer = express();

// create/set the port 
const PORT = 4000 || process.env.PORT


// listen to incoming requests
bookServer.listen(PORT,()=>{
	console.log(`server running successfully at port number ${PORT} `);
})



