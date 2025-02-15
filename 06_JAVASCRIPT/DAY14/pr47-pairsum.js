//w.a.p to print the pair sum from the given array
let  a =  [2,3,4,5,4];
targetsum = 7;

pairFound = false
for(let i = 0 ; i < a.length ;i++){
    for(let j = i+1;j < a.length;j++){
        if( a[i] + a[j] == targetsum){
            console.log(`pairs(${a[i]},${a[j]})`)
            pairFound = true
        }
    }
}

/*
if(!pairFound){
    console.log(`No pairs found on given array`)
}
*/

//truthy operator
!pairFound && console.log(`No pairs found on given array`)


