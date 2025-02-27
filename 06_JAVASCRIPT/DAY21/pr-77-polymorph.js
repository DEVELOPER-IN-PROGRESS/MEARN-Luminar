class A{
    method_a(){
        console.log(`Inside method a`)
    }

    method_a(num){
        console.log(`method a variant:2  ${num}`)
    }

    method_b(...arg){
        console.log(arg);
        let sum = arg.reduce((a,b) => a+b);
        console.log({sum});
    }
}

let obj = new A()
b = [9]
obj.method_a()
obj.method_a()

obj.method_b(1,2,3,4,5,6,7)

// In Js method overloading is not directly supported