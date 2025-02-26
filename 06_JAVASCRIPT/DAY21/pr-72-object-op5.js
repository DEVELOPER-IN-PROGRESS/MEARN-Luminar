accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    }
]

//1. total number of accounts
console.log(`Total No of Accounts in this bank ${accounts.length}`)

//2. print account number whose ac_type is savings
accounts.forEach( (acc) => acc.ac_type == 'savings' && console.log(`Account numbers with Saving ${acc.acno}`) )

//3.print the balance of accnount number 1000
acno_1000 = accounts.find( (acc) =>  acc.acno == 1000)
console.log(`Balance amount of account number:1000  ::  Rs${acno_1000.balance}`)

//4. print all gpay transactions
all_transactions =  accounts.map( (data) => data.transaction ).flat()
        // .filter( tx => tx.mode == 'gpay')
// .filter( arr => arr.mode == 'gpay')
// console.log(all_transactions)

console.log(`All gpay transactions history till date::`)
txx = all_transactions.filter( ac => ac.mode == 'gpay')
        .forEach( (obj) => console.log(obj))
console.log('\n-----------------\n')

//5. print all transaction whose amount > 5000
console.log(`All Transactions with amount above 5000:: `)
// console.log(all_transactions)

txx_5000 =  all_transactions.filter( acc => acc.amount >5000 )
            .forEach( tx => console.log(tx) )
// console.log(txx_5000)

//6. print credit transaction of account 1002
console.log(`\ncredit transaction of account 1002\n`)
credit_1002 = accounts.map( (data) => data.transaction ).flat()
            .filter( item => item.to == 1002)
            .map( tx => tx)

// console.log(credit_1002)

//7. print debit transaction of account 1002
console.log(`\ndebit transaction of account 1002\n`)
debit_1002 = accounts.find( data => data.acno == 1002).transaction.map( db =>  db)

//8. print transaction history of 1002
history_1002 = {
    credit: credit_1002,
    debit: debit_1002,
}
console.log(`transaction history of account:1002`,history_1002)

//print  transaction history as array of account 1002
//spread operator  is used to join array  operator:  ...
console.log(`Transaction history of 1002 as array:`,[...credit_1002,...debit_1002])

//9. print highest balance account details
highest_balance = accounts.reduce( (ac1,ac2) => ac1.balance > ac2.balance? ac1:ac2)
console.log(`\naccount details with highest balance`,highest_balance)