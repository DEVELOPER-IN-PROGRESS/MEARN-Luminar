//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20],
    [8,'milk bikis',50,0],
]
//1. display all product name
products.forEach((pdt)=>console.log(pdt[1]))

//2. display product whose price < Rs.50
less50 = products.filter((pdt) => pdt[2]<50).map((a)=> a[1])
console.log(`Products less than Rs50`,less50)

//3. print price of oreo
oreo = products.find((pdt) => pdt[1]=='oreo')
console.log(`Oreo Price ${oreo[2]}`)

//4. print costly product name
max_price = products.reduce((a,b)=> a[2]>b[2]?a[2]:b[2])
console.log(`highest price recorded : ${max_price}`)

//5. display out of stock product
no_stock = products.filter(pdt => pdt[3]==0).map((a) =>(a[1]))
console.log(`Products with empty stock ${no_stock}`)

//6. sort products based on stock in decsending order
pd_sorted = products.sort((a,b)=>b[3]-a[3]).map((pd) => pd[1])
// or pd_sorted_desc = products.sort((a,b)=>b[3]-a[3]).forEach((pd) => console.log(pd[1]))
console.log('Products sorted by stock unit descending', pd_sorted)

//7. print product having maximum available stock
max_stock = products.reduce((a,b)=> a[3]>b[3]?a:b)
console.log(`Highest Stock unit recorded ${max_stock[1]}`)

//8. is there any product can be purchased by Rs. 10
y = products.find( pdt => pdt[3]==10 )
console.log(`Product with price Rs10 ${y[1]}`)
 // true or false qn
i = products.some( pdt => pdt[2]<= 10)
console.log(`is there any product can be purchased by Rs.10? ${i?'yes':'no'} `,)

//9. Is there any product in the range of Rs10 to 30
z = products.some( pdt => pdt[2]>=10 && pdt[2]<=30)
console.log(`is there any Product within price  range 10 and 30 ${z?'yes':'no'} `)

//10. print all products in the range of Rs10 to 30
range =  products.filter( pdt => pdt[3]>=10 && pdt[3]<=30).forEach(a=> console.log(a[1]))
// console.log(range)