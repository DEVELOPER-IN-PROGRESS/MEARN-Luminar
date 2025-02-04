//w.a.p to chec whether a given three digit number is armrstrong number or not
// eg 153 = 1^3 + 5^3+ 3^3

let sum = 0 , num = 153 ;
temp = num;

while(num){
    rem = num % 10
    sum += rem**3
    num = Math.floor(num/10)
}

console.log(temp == sum?'Armstrong Number': 'Not an Amrstrong number')

// method 2

sum = 0 , num = 1741725 , temp = num;
power = `${num}`.length

while(num){
    rem = num % 10
    sum += rem**power
    num = Math.floor(num/10)
}

console.log(temp == sum?'Armstrong Number': 'Not an Amrstrong number')
