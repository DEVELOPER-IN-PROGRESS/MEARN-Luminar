/*
w.a.p to print hollow hour glass

*   *   *
  *   *
    *
  *   *
*   *   *

*/

let rows = 15;
rows = rows%2==0?rows-1:rows;

for(let i = 1 ; i<= rows;i++){
    let str = ``
    for(let j =1;j<=rows;j++){
        if((i==1)||(i==rows)||(i==j)||((i+j)==rows+1)){
            str += `* `
        }else{
            str += `  `
        }
    }
    console.log(str)
}

console.log('=====================')
/* w.a.p to print the following pyramid pattern
                        11
                    12  13  14
                15  16  17  18  19
            20  21  22  23  24  25  26
        27  28  29  30  31  32  33  34  35
    36  37  38  39  40  41  42  43  44  45  46
47  48  49  50  51  52  53  54  55  56  57  58  59

*/

rows = 17;
let start = 11;
for(i=1;i<=rows;i++){
    let str = ``;
    if(i%2 == 1){
        for(let s= 0; s<= rows - i ;s++){
            str += `  `
        }

        for(let s=1;s<=i;s++){
            str += `${start++}  `;
        }
        console.log(str);
    }
}