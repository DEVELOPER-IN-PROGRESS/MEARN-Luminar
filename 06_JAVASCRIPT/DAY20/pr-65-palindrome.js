//w.a.p to check whether a gven string is palindrome or not

let str = 'malayalam'
flag = true;

i = 0, j = str.length -1
while(i<=j){
    if(str[i++] != str[j--]){
        flag = false;
        break;
    }
}

console.log(`Given String is ${flag?'Palindrome':'Not a palindrome'}`)


//method 2
pal = ''
for(let i = str.length -1;i>=0;i--){
    pal += str[i]
}

console.log(`Given String is ${pal == str?'Palindrome':'Not a palindrome'}`)
console.log('---------------')

//method 3
pal = str.split('').reverse().join('')

console.log(`Given String is ${pal == str?'Palindrome':'Not a palindrome'}`)

