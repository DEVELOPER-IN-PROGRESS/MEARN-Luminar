const http = require('http');

http.createServer((req,res) => {
	// server logic
	res.write('request received');
	res.end();
	// end functions must be before the closig block
}).listen(4000 , ()=>{
 console.log('server running successfully at port 4000')
})
