// w.a.p to reverse a number

ip = 123456789;
sum = 0

// Method 1
while(ip){
    r = ip % 10
    sum = sum*10 + r
    ip =  (ip -r)/10
}

console.log(sum)
