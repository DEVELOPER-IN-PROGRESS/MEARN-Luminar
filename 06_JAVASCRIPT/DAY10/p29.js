//w.a.p to print armstrong numbers from 8 - 500

for(let num = 8;num <=500;num++){

    let temp = num , sum = 0
    let len = `${temp}`.length

    while(temp){
        d = temp%10
        sum += d**len
        temp = Math.floor(temp/10)
    }

    if(sum == num){
        console.log(num)
    }
}