/*
w.a.p to print a hollow square
*  *  *  *  *
*           *
*           *
*           *
*  *  *  *  *

*/
let rows = 5;
for(let i = 1 ;i <= rows ;i++){
    let str = ``;
    for(let j = 1;j<= rows;j++){
        if((i==1) || (i==rows) ||(j==1) || (j== rows)){
            str += `* `
        }
        else{
            str += `  `
        }
    }
    console.log(str)
}

// 1,1 1,2 1,3 1