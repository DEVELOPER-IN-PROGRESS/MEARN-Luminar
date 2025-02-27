class A{
    fn_1(){
        console.log(`Inside Function 1 writtten first`);
    }

    fn_1(){
        console.log(`Inside Function 1 writtten second`);
    }
}

const o1 = new A()
o1.fn_1()

//the last written  function will be executed due to method overrriding