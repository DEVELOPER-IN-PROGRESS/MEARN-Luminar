class A{
    method_a(){
        console.log(`Inside Method A`)
    }

}

class B extends A{
    method_b(){
        console.log(`Inside Method B, class B`)
    }
}

class C extends B{
    method_c(){
        console.log(`Inside Method C class C`)
    }
}

const obj = new C()
obj.method_a()
obj.method_b()
obj.method_c()

//THis is called as multilevel inheritance
