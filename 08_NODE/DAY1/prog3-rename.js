const fs = require('fs')

fs.rename('./text1.txt', './sample1.txt', (err)=> {
	if(err){
	throw err;
	}
	console.log('File renaimed')

})
