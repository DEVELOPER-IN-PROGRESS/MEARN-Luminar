//w.a.p to check whether 2 is present in the array or not
let arr = [6,5,3,1,7,8,9,10], flag = false , searchItem = 2
for( num of arr){
    if( num == searchItem){
        flag = true;
        break
    }
}

console.log(flag?`2 is present`:`2 is not present`)

/* w.a.p to print  the following output
i/p = [4,5,6]
       7 5 3
o/p = [11,10,9]
*/

arr = [4,5,6];
start = 3
for(let i = arr.length -1; i >=0 ;i--){
    arr[i] += start
    start += 2
}
console.log(arr)


// Method 2 : find total sum and reduce each  input from sum

let sum = 0;
for(n of arr)
    sum += n

for(n of arr){
    n = sum-n
}
console.log(arr)
