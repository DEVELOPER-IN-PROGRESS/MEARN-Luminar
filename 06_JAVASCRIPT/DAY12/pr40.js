// callback functions example

function greet(name , callback){
    console.log(`Hello ${name}`)
    console.log('Main function')
    callback()
    console.log(`Back to main functions`)
}

function A(){
    console.log(`we are inside the callback function`)
}

greet('Peter',A)