class A{
    method_a(){
        console.log(`Inside method A`)
    }
}

class B extends A{
    method_b(){
        console.log(`Inside method B`)
    }
}

const obj = new B()
obj.method_b()
obj.method_a()

//Object Inheritance

baleno = {
    model:"Hatch Back",
    variant:["manual","automatic"],
    manufacturer:"maruthi",
}

glanza = {
    manufacturer:"Toyota",
}

console.log(glanza.manufacturer)

//object inheritance
glanza.__proto__ = baleno
console.log(glanza.model)