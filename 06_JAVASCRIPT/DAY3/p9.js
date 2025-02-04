//w.a.p to check whether a given number is positive or negative
let num = -19;
if (num>0){
    console.log('positive')
}else if(num<0){
    console.log('negative')
}
else {
    console.log('zero');
}

// Ternary
console.log(num>0?'positive':!num?'Zero':'Negative')