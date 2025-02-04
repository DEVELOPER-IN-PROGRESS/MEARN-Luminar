/*
input =1     2    3    4
output = 1   24  369  4936

hint(division)
1
1*10 +2
12*10 +3
1230 + 4 = 1234

*/

/* method 1*/
let x = 0 , k =1;

while(k<10){
    x = x*10+k // x = 0*10+ 1 , 1*10+2  , 12*10 + 3
    console.log(x*k)
    k++;
}

/* method 2*/

let i = 1; k='1' ;
while(i < 10){
    console.log(i*k)  // '2'*'12' = 24
    i++;
    k  = k +i;
}

/*
1*'1' = 1
2
'1' + 2 = '12


*/

/* method 3*/
// pattern  1 ,  2 + 22 ; 3 + 33 + 333 ; 4 + 44 + 444 + 4444

i = 1 , ip = 3 , str = '';
sum = 0
while(i<=ip){
  str = str + ip; // '' + 3 = '3'
  sum = sum + Number(str)
  i++;
}
console.log(sum)

// we can convert string to number by Number() method