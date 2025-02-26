class Employee{

    //properties
    empid
    empName
    empDesg
    empLoc
    empSal
    empExp

    //constructor
    constructor(id, name, designation, location, salary, experience){
        // console.log(`constructor fn...`)
        this.empid = id;
        this.empName = name;
        this.empDesg = designation;
        this.empLoc = location;
        this.empSal = salary;
        this.empExp = experience;
    }

    //methods
    display(){
        console.log(`Employee name is ${this.empName}`)
    }
}

const emp1 = new Employee('1000','werner','engineer','frankfurt','$5600',15)
emp1.display()

const emp2 = new Employee(empName='Gustavo')
emp2.display()

// New class

class Student{
    stud_class
    stud_name
    stud_id

    constructor(stud_class,name,id){
        this.stud_class = stud_class;
        this.stud_name = name;
        this.stud_id = id;
        this.details();
    }

    details(){
        console.log(`Student Name: ${this.stud_name}\nClass: ${this.stud_class}\nStudent Id: ${this.stud_id}`)
    }

    marks(mark){
        this.total_mark = mark
    }
}

let s1 = new Student('X','Charles',10)
let s2 = new Student('XII','Armin',20)
