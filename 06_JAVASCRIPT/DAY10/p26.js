//w.a.p to print hcf of given two numbers
let num1 = 28 , num2 = 12;

let  cf = 1 ;
for(let i = 1; i < num1 &&  i < num2 ;i++){
    if( num1%i == 0 && num2%i ==0)
        cf = i ;
}

console.log(`HCF of ${num1} and ${num2}  = ${cf}`)

//method2 8 12
if(num1 < num2){
    num1 = num1 + num2
    num2 = num1 -  num2
    num1 = num1 - num2
}

for(let i = num2 ; i >=1  ;i--){
    if( num1%i == 0 && num2%i ==0){
        console.log(`HCF of ${num1} and ${num2}  = ${i}`)
        break;
    }
}
