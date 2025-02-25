//w.a.p to return all even numbers from an array

a = [1,2,3,4,5,6,7,8,9,10]

even = a.filter( num => num%2==0)
console.log(even)

//w.a.p to print all numbers greater than 4 using filter method
gr4 = a.filter( num => num>=4)
console.log(`Numbers greater than or equal to  4 in this array are :: ${gr4}`)

console.log('-------------------')

//w.a.p to print all numbers greater than 4 using find method

greaterthan4 = a.find(num => num>=4)
console.log(greaterthan4)

console.log('-----------------')

//[id, name, designation, location, salary, experience]
let employee =[
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

// print all employee name
names = employee.map( emp => emp[1])
// if array is not required use the forEach methods
console.log(names)

console.log('----------------')
//print total numbers of employee
console.log(`Total Employees = ${employee.length -1}`)

console.log('----------------')
//print developer employee details
developers = employee.filter( emp => emp[2]=='developer')
console.log(developers)

console.log('----------------')
//print employee whose salary > 30000

sal30k = employee.filter(emp => emp[4]>30000).forEach(name=> console.log(name[1]))
// console.log(`Employees with salary > 30000`,sal30k)

console.log('----------------')

// print details of employee Laisha

laisha = employee.find(emp => emp[1]== 'Laisha')
console.log(`Details of Employee Laisha ${laisha}`)

/* When searching for names always use filter method bacause there may be
    more than 1 people with same name , but in this example it is okay to use name
    as names are unique
*/

//arrange employees based on salary in descending order
salaryorder = employee.sort((a,b) =>b[4] -a[4]) //.forEach(a => console.log(a[1]))
console.log(`Employees sorted by salary in descending order`)
console.log(salaryorder)

//arrange employees based on experience in ascending order
experience_order = employee.sort((a,b) =>a[5]-b[5]) //.forEach(a => console.log(a[1]))
console.log(`Employees sorted on experience \n`)
console.log(experience_order)

//find the total expense of the company
// total_expense = employee.reduce(a,b=>a[5]+b[5])

//[],[]  [][4] +
total_expense = employee.map(a=>a[4]).reduce((a,b)=>a+b)
console.log(`Total Company Expense:: ${total_expense}`);

//method2
total_expense1 = employee.reduce((a,b)=>a+b[4],10)
console.log(`Total Company Expense (modified method) :: ${total_expense1}`);

// employee.reduce( (e1,e2) => e1[4]+e2[4])
// employee.map(a=>a[4]).reduce((a,b)=>a+b)

//find the highest salary
highest_salary = employee.map(a =>a[4]).reduce((a,b)=> b>a?b:a)
console.log(`Highest Salary Recorded ${highest_salary}`)

//find the lowest salary
lowest_salary = employee.reduce((a,b)=>a[4]<b[4]?a:b)
// employee.map(a =>a[4]).reduce((a,b)=> a<b?a:b)
console.log(`Lowest Salary Recorded ${lowest_salary[4]}`)


