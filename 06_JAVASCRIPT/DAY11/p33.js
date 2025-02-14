/*
w.a.p to print the following patters
       *
     *   *
   *       *
 * * * * * * *
*/

let rows = 4;
for(let i=1;i <=rows;i++){
    str= ``;
    for(let j=1;j<=rows+3;j++){
        if( (i+j == rows+1)  || (j-i == 3)|| (i==rows)){
            str += `*`
        }
        else{
            str += ` `
        }
    }
    console.log(str)
}
console.log('----------------')
//General pattern program
rows = 4;
for(let i=1;i<=rows;i++){
  let str =``;
  for(j=1;j<=rows*2-1;j++){
        if((i+j==rows+1) || (j-i == rows) || (i==rows) ){
            str += `*`
            if(i==1)
                break;
        }
        // else if(j-i == rows){
        //     str += `*`
        // }
        // else if (i==rows){
        //     str += `*`
        // }
        else{
            str += ` `
        }
    }
  console.log(str);
}
