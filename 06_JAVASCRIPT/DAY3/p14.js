// w.a.p to print 'fizz' if num is divisible by 3 'buzz' when number is divisible by 5 and 'fizzbuzz' when it is divisible by 15

let x= 0;

if (!x){
    console.log('input number should be above 0')
}
else{
    if(x % 15 ==0){
        console.log('FizzBuzz')
    }
    else if(x % 5 ==0){
        console.log('Buzz')
    }
    else if(x % 3 ==0){
        console.log('Fizz')
    }
    else{
        console.log('Not divisible by 3,5,ne 15')
    }
}
