// w.a.p to display numbers whose exponential is in the given range 8-36
//user can input the power to find the exponential for a particular number

let pow = 2 , num = 0 , temp = 0

while(temp <= 36){
    temp = num**pow
    if(temp >=8 && temp <= 36){
        console.log(num)
    }
    num++;
}

console.log('----------')
//use break; keyword to break from forcefully from a loop
pow = 2, num = 1
while(num<=36){
    if(num**pow >= 8 && num**pow <= 36){
        console.log(num)
    }
    if(num**pow >36){
        break;
    }
    num++;
}