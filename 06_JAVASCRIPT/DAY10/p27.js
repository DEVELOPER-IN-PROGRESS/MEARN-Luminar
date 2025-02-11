//w.a.p to print LCM of two given numbers
let num1 = 10 , num2 = 14;
hcf = 1;

for(let i = 1; i < num1 && i < num2;i++){
    if(num1% i ==0 && num2 %i ==0)
        hcf = i;
}

console.log(`LCM of ${num1} and ${num2} = ${num1*num2/hcf}`)

num1 = 90
num2 = 100;
let factor = 2, lcm = 1;

while(num1 != 1 || num2 != 1 ){
    if(num1%factor == 0 || num2%factor == 0 ){
        lcm *= factor;

        if(num1%factor == 0)
            num1 /= factor
        if(num2%factor == 0)
            num2 /= factor
    }
    else{
        factor++;
    }
}

console.log(`LCM = ${lcm}`)

