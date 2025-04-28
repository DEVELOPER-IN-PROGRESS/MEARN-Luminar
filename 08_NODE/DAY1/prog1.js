// file system

const fs = require('fs');

fs.writeFile('./text1.txt', 'My First Program', (err) => {
	if(err){
	throw err;
	}else{
	console.log('data written')
	}
})


