//w.a.p to print the sum of all numbers in a given array

let arr = [[1,2],[3,4],[5,6]]

let sum = 0;

for(let a of arr){
    for(let x of a){
        sum += x;
    }
}

console.log(`Total Sum = ${sum}`)

//w.a.p to find all even numbers in a given 2D array
for(let a of arr){
    for(let x of a){
        if(x%2 == 0){
            console.log(x)
        }
    }
}