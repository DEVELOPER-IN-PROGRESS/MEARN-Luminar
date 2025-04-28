const fs = require('fs')


//utf - unicode transformation format 
fs.readFile('./text1.txt', 'utf-8', (err,data) => {
  if(err){ throw err}
 else{
	 console.log(data)
 }
})

