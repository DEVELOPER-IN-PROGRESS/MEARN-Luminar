//[id, name, designation, location, salary, experience]
a = [1000,'Neel','developer','kochi',25000,3]

let employee = {
    empid: 1000,
    empName: 'Neal',
    empDesg:'developer',
    empLoc: 'kochi',
    empSal:2500,
    empExp: 3,
}

// value
console.log(a[2])
console.log(employee['empDesg'])
console.log(employee.empDesg)

//display all keys in a given object
for(key in employee){
    console.log(key,employee[key])
}


// Object Operations

// 1) Add a key
employee['empAttn'] = '90%'
console.log(employee)

Object.assign(employee,{'status':true})
console.log(employee)

//2) update
employee['empExp'] += 5
console.log(employee)


delete employee.status
console.log(employee)