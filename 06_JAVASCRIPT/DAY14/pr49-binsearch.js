// develop the binary search algorithm in js

/*
1) sort the array
2) find the mid point of array and store it in variable 'mid'
3) initialize the start point to start of array index (0) and
    end to end of array index( array.length -1)
4)run while loop till start <= end
5) check if value at mid index equals search value or not
    arr[mid] == value
    a) if mid index equals print the value and break out of loop
    b) if search value is greater than mid index value
        change start point to (mid+1)
    c) if search value is less that mid index value change the
        end point to (mid-1)
6) run the loop indefinitely till value is found
7) if target value is not found print error message


*/

let arr = [2,3,4,5,6,7,8,9,10,11,13,15,17,20,21,22,40];

arr.sort((a,b)=> a-b)
let searchItem =3;
found = false;
let start=0,end= arr.length -1,mid;

while(start<=end){
    mid = Math.floor((start+end)/2)

    if(arr[mid] == searchItem){
        found = true;
        console.log(`${searchItem} found at index ${mid}`)
        break;
    }
    else if(searchItem < arr[mid]){
        end = mid -1;
    }
    else{
        start = mid +1;
    }
}

!found && console.log(`Search Item not found`)