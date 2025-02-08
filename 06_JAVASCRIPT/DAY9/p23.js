// w.a.p to print numbers from 1 to 5

for(let i = 1; i<= 5;i++ ){
    console.log(i)
}

console.log('-----------')
// w.a.p to print numbers from  10 to 1 using for loop
for(let i = 10 ; i >0 ;i--){
    console.log(i);
}
console.log('-----------')

// w.a.p to print factorial of number using  for loop
pdt = 1
let ip = 10
for(let num = ip ; num >0 ; num--){
    pdt *= num;
}
console.log(`Factorial = ${pdt}`);
console.log('-----------')

// w.a.p  to create a loop which have the potential to print  1-10 number but only prints  1- 5  for loop
for(let i = 1 ; i < 10 ;i++){
    if(i>5){
        break;
    }
    console.log(i);
}

