//w.a.p to check whether a given number is palindrome or not

let num = 123216;
rev = 0 ;
copy= num

while(copy){
    rem = copy % 10;
    rev = rev*10 + rem
    copy = Math.floor(copy/10)
}

console.log(rev==num?'palindrome':'not a palindorme')