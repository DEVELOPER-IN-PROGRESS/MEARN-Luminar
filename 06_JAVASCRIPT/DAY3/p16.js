//  01/02/2025

//w.a.p to display all even  numbers between 1 - 50

let k = 1;
while(k<50){
    console.log(!(k%2)?k:'');
    k++;
}



k = 1
while(k<50){
    if(k%2 ==0)
        console.log(k)
    k++;
}

console.log('---------')

k = 1;
while(k<50){
    if(k%2 !=0)
        console.log(k)
    k++;
}

console.log('---------')

//w.a.p to find the sum of all numbers between 1 to 10
let sum = 0;
k = 1

while(k<=10){
    sum += k++;
}

console.log(sum)


// w.a.p to print sum of all even number between 1 and 10
k = 1
sum =0
while(k<=10){
    if(k%2==0){
        sum += k;
    }
    k++;
}

console.log(sum)


// w.a.p to print sum of all odd number between 1 and 10
k = 1
sum =0
while(k<=10){
    if(k%2 != 0){
        sum += k;
    }
    k++;
}

console.log(sum)