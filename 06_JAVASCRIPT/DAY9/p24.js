//w.a.p to check a given number is prime or not

let ip = 25 , flag = true;

if(ip == 1){
    console.log('Neither prime nor composite')
}
else if(ip <= 0){
    console.log('Not a  prime number')
}
else{
    for(let i = 2; i <= Math.sqrt(ip);i++){
        if(ip%i == 0){
            flag = false;
            break;
        }
    }
    console.log(flag?`given Input is Prime Number`:`Not prime number `);
}
