///w.a.p to display all the vowels from the given string

str = 'good Afternoon'

for(let i = 0 ;i <str.length ;i++){
    if(str[i]=='a' || str[i]=='e' || str[i]=='e' || str[i]=='o' || str[i]=='u' ){
        console.log(str[i])
    }
    else if(str[i]=='A' || str[i]=='E' || str[i]=='I' || str[i]=='O' || str[i]=='U' ){
        console.log(str[i])
    }
    else{
        ;
    }
}
console.log('------------')
vowels = ['a','e','i','o','u','A','E','I','O','U']
for(ch of str){
  if (vowels.includes(ch)){
    console.log(ch)
  }
}