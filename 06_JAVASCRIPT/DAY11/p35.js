/*
w.a.p to print the following pattern
1
0 1
1 0 1
0 1 0 1
*/

let rows = 5;
for(let i = 1;i<=rows;i++){
    let str = ``;
    for(let j=1;j<=i;j++){
        if((i==j) ||( (i-j)%2 ==0)){
            str += `1 `
        }
        else{
            str += `0 `
        }
        // or one liner  str += ((i+j)%2==0)?`1 `:`0 `;
    }
    console.log(str)
}

/*



*/