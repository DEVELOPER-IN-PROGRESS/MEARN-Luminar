/*
w.a.p to print  inverted triangle
* * * *
* * *
* *
*
*/

for(let x = 4 ; x>0;x--){
    let str = ``
    for(let y = 1; y <=x;y++){
        str += `* `
    }
    console.log(str)
}


/*
w.a.p to print  inverted triangle

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

console.log('------------')

let i = 1 , flag = true;
while(i){
    str = ``
    for(let j = 1; j<=i ;j++){
        str += `* `
    }
    console.log(str)

    if(i ==5){
        flag = false
    }

    if(flag){
        i++;
    }else{
        i--;
    }
}