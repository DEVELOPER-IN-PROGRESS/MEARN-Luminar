const fs = require('fs');

fs.unlink('./sample1.txt', (err)=> {
 if(err){
 throw err;
}else{
 console.log('file deleted')
}
})
