/*
    w.a.p to print the below pattern
        *
       * *
      * * *
     * * * *
    * * * * *

*/

let rows = 40
for(let i = 1; i<= rows;i++){
    str = ``;
    for(let k = 1; k<=rows-i;k++){
        str += ` `;
    }
    for(let j = 1;j<=i;j++){
        str += `* `
    }
    console.log(str)
}


/*
w.a.p to print the below pattern
        *
      *   *
    *   *   *
  *   *   *   *
*   *   *   *   *

pattern: (row - 1)*2

*/

console.log('---------------')

rows = 5;
for(let i = 1; i <= rows;i++){
    str = ``;
    for(let space =(rows-i)*2; space>0;space--){
        str += ` `;
    }
    for(let j = 1;j<=i;j++){
        str += `*   `
    }
    console.log(str)
}


//just for fun:: Christmas tree remastered

rows = 25;
for(let i = 1; i <= rows;i++){
    str = ``;
    for(let space =(rows-i)*2; space>0;space--){
        str += ` `;
    }
    for(let j = 1;j<i;j++){
        str += `*---`
    }
    str += `*`
    console.log(str)
}

