// w.a.p to print the second largest

let num1 = 9 , num2 = 5, num3 = 18;

if(( num1 > num2)&&(num2> num3)){
    console.log(`Num2 ${num2} is second largest`)
}
else if(( num1 > num3)&&(num3> num2)){
    console.log(`Num3 ${num3} is second largest`)
}
else if ((num2> num1) && (num1 > num3)){
    console.log(`Num1 ${num1} is second largest`)
}
else if((num2>num3) &&(num3 > num1)){
    console.log(`Num3 ${num3} is second largest`)
}
else if((num3>num2) &&(num2 > num1)){
    console.log(`Num2 ${num2} is second largest`)
}
else if((num3>num1) &&(num1 > num2)){
    console.log(`Num1 ${num1} is second largest`)
}


//  arrange these in descending order
if((num1 > num2) && (num2> num3) ){
    console.log(`Descending order would be ${num1}, ${num2}, ${num3}`)
}
else if((num1 > num3) && (num3 > num2)  ){
    console.log(`Descending order would be ${num1}, ${num3}, ${num2}`)
}
else if((num2 > num3) && (num3 > num1)){
    console.log(`Descending order would be ${num2}, ${num3}, ${num1}`)
}
else if((num2 > num1) && (num1 > num3)){
    console.log(`Descending order would be ${num2}, ${num1}, ${num3}`)
}
else if((num3 > num2) && (num2 > num1)){
    console.log(`Descending order would be ${num3}, ${num2}, ${num1}`)
}
else if((num3 > num1) && (num1 > num2)){
    console.log(`Descending order would be ${num3}, ${num1}, ${num2}`)
}
/*
permutations
1 2 3
1 3 2
2 3 1
2 1 3
3 2 1
3 1 2

*/