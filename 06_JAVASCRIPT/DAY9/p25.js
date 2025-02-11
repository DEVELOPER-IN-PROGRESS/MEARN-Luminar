// w.a.p  to print prime numbers in a given range
let start = 1 , end = 50;

for(let i = start ; i <= end ;i++){
    flag = true;
    j = 2
    while(j <= Math.sqrt(i)){
        if(i%j == 0 ){
            flag = false;
            break;
        }
        j++;
    }
    if(flag){
        console.log(i)
    }
}