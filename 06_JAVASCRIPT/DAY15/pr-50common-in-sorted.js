// optimized version for finding common numbers within two arrays/

let arr1 = [10,11,12,20,30]
let arr2 = [11,20,25,30,35]

// arr1.sort((a,b)=>a-b)
// arr2.sort((a,b)=>a-b)

i = 0;
j = 0;
iterations = 0
flag = false;
while(i< arr1.length && j < arr2.length){
    iterations++;

    if(arr1[i] == arr2[j]){
        flag = true;
        console.log(arr1[i])
        i++;
        j++
    }
    else if(arr1[i] < arr2[j]){
        i++;
    }
    else{
        j++;
    }
}

console.log(`${iterations} Iterations completed `)
!flag && console.log(' No common numbers found')