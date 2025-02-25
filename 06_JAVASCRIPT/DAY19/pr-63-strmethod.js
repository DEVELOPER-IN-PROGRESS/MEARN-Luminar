let mob = "+91 54625 25235"
//w.a.p to check a given number is mobile number or not
flag = true
for(let i = 0 ; i < mob.length ;i++){
    if((mob[i] >='0' && mob[i]<='9')||(mob[i] ==' '|| mob[i]== "+")){
        ;
    }else{
        flag = false;
    }
}

//or  check length and print
console.log(mob.length ==10?`Valid phone number`:`Invalid number`)

console.log(`${flag? 'Valid Mobile number':'not valid'}`)

//w.a.p to check a given mail id is gmail or not
email = 'brucewayne@wayne.com'
console.log(email.endsWith("gmail.com")?'yes':'no')

//w.a.p to check a given string starts with the letter q
str = "starstruck"
console.log((str.startsWith('q')||str.startsWith('Q'))?'yes':'no')

//subString
part = str.substring(0,5)
console.log(part)

console.log(str.slice(5,-1))

message = `Shinzou wo sassageyo`
console.log(message.split(' '))

//replace()

sentence = 'I come from kakkanad . I also work in kakkanad '
console.log(sentence.replace('kakkanad','kochi'))
console.log(sentence)

console.log(sentence.replaceAll('kakkanad','kochi'))

s = Array.from(str)
console.log(s)