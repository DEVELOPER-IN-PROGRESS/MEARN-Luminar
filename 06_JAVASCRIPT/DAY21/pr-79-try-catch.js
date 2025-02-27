let divisor = 10;
console.log(10/0)
    try{
        // let exp = 10/divisior;
        // console.log(exp)
        divisor.forEach(a => a*2)
    }
    catch(exp){
        console.error(`Inside Catch Block`,exp)
    }

console.log({divisor})
console.log(`Beyond Try catch block`)