// Array flat method
/*

*/

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
for(let emp of employee){
    console.log(emp[1])
}
console.log('----------------')
//print total numbers of employee
console.log(`Total Employees = ${employee.length -1}`)

console.log('----------------')
//print developer employee details
for(let emp of employee){
    if(emp[2] =='developer'){
        console.log(emp)
    }
}

console.log('----------------')
//print employee whose salary > 30000
for(let emp of employee){
    if(emp[4] > 30000){
        console.log(emp)
    }
}

console.log('----------------')
// print details of employee Laisha
for(let emp of employee){
    if(emp[1] == 'Laisha'){
        console.log(emp)
    }
}