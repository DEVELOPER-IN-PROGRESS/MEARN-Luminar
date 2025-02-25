products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only]
products.forEach( (pdt) => console.log(pdt.pName))
console.log('\n----------\n')

//2. print all mobile details whose display is lcd
products.forEach( (pdt) => pdt.display == 'lcd' && console.log(pdt) )
console.log('\n----------\n')

//3. print 5g mobile phone name
products.forEach( (pdt) => pdt.band == '5g' && console.log(pdt.pName) )
console.log('\n----------\n')

//4. sort mobile based on price
products.sort((a,b) => a.price - b.price).forEach( (pdt) => pdt.pName)
// console.log(products)
console.log('\n----------\n')

//5. print costly mobile
hc = products.reduce( (a,b) => a.price > b.price?a:b)
console.log(`Costly phone in this list: ${hc.pName}`)

//6. print low cost mobile
lc = products.reduce( (a,b) => a.price<b.price?a:b)
console.log(`Cheapest phone in this list: ${lc.pName}`)