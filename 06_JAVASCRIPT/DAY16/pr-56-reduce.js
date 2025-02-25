//w.a.p to find the lowest value from an array using reduce

expense = [1200,1500,700,800,40,100,200]
lowest = expense.reduce((n1,n2) => (n1<n2)?n1:n2)

console.log(`Lowest expense = ${lowest}`)

sum = expense.reduce((n1,n2)=>n1+n2)
console.log(`Total Expense = ${sum}`)