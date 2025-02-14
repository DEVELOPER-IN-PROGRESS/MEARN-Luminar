/*
    *
   * *
  * * *
 * * * *
* * * * *
 * * * *
  * * *
   * *
    *
*/

//brute force version
rows = 7; // a.k.a maxwidth

for(let i =1; i<= rows ;i++){
    let str = ``
    for(let space = rows-1; space>= i; space--){
        str += ` `
    }

    for(let j = 1; j<=i;j++){
        str += `* `
    }
    console.log(str)
}

for(let i = 1; i < rows ;i++){
    let str = ``
    for(let space = 1; space <= i; space++){
        str += ` `
    }

    for(let j = 1; j<=(rows-i);j++){
        str += `* `
    }
    console.log(str)
}


console.log('====================')

//optimized version

let maxwidth = 9;
// let sp = 6;
// let st = 1;

for(let k = 1 ; k<= 2*maxwidth -1;k++){
    let str = ``;

    let space = maxwidth - k;

    if(space < 0){
        space *= -1
    }
    
    let stars = maxwidth - space

    for(col = 1; col<= space ;col++){
        str+= ` `
    }

    for(col = 1;  col<= stars ; col++ ){
        str += `* `;
    }
    console.log(str)
}

/*
i = 1 col<=6   ######*
i=  2 col<=5   #####* *

6sp 1st
5sp 2st
4sp 3st
3sp 4st
2sp 5st
1sp 6st
0sp 7st
1sp 6st
2sp 5st
3sp 4st
4sp 3st
5sp 2st
6sp 1st

*/