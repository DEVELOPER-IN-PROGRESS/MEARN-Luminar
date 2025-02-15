let fruits = ['apple','mango','pineapple','kiwi','guava']

for(let i = 0 ; i < fruits.length; i++){
    console.log(fruits[i])
}

// in operator

for(let x in fruits){
    console.log(fruits[x]);
}

// of operator

for(let x of fruits){
    console.log(x)
}

// w.a.p to find the highest expense
// w.a.p to find the lowest expense
// w.a.p to find total expense

let expense = [12000,5000,4000,2000,50,10000]
let low = expense[0] , high =  expense[0] , total = 0

for(let i = 0 ; i< expense.length ;i++){
    total += expense[i]

    if(expense[i]< low)
        low = expense[i]

    if(expense[i] > high)
        high = expense[i]
}

console.log(`Lowest expense :${low}\n Highest Expense: ${high} \n total expense: ${total}`)

low = high =  expense[0] , total = 0

for(let e of expense){
    if(e< low){
        low = e
    }
    if(e > high){
        high = e
    }
    total += e
}
console.log(`Lowest expense :${low}\n Highest Expense: ${high} \n total expense: ${total}`)

