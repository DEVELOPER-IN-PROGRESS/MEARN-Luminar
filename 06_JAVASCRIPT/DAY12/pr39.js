// w.a.f to find a given number is odd or even

function is_odd(a){
    return a%2==0?`Given number is odd`:`Given Number is Even`
}

console.log(is_odd(10));

// w.a.f to find a given number is positive or negative

function is_positive(num){
    return num>0?`Given Number is positive`:num<0?`Number is negative`:`Number neither positive or negative`;
}

console.log(is_positive(0))

// w.a.f to find cube of a given number

function find_cube(n){
    return `Cube of ${n} is ${n**3}`;
}

console.log(find_cube(9))

/*  convert the above functions to arrow functions to their arrow variant*/

const sum = (a,b) => a+b;

console.log(sum(20,25))

let is_negative =(num) => num>0?`Positive`:num==0?`neither positive or negative`:`number negative`;

console.log(is_positive(9))