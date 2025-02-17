// Optimize the program to find indices in a sorted array  that add upto a given targetsum .

arr = [1,2,3,4,5,8,9];
let targetsum = 9;

i = 0
j = arr.length -1
flag = false

while(i<j){
    temp = arr[i] + arr[j]
    if( temp == targetsum){
        flag = true;
        console.log(`Indices (${i},${j})`)
        i++;
        j--;
    }
    else if(temp < targetsum){
        i++;
    }else{
        j--;
    }
}

!flag && console.log(`No pairs found`)