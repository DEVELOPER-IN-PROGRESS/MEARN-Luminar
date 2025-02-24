//w.a.p to find the largest word from the given string

let stri = "my soldiers push forward"
lw = stri.trim().split(' ').reduce((a,b) => a.length>b.length?a:b)

console.log(lw)

//method2

let words = stri.split(' ')
let largest = words[0]

for( w of words){
    if(w.length > largest){
        largest = w
    }
}

console.log(largest)