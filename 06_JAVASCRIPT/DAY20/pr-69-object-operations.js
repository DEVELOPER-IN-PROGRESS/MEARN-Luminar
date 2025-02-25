let text = "HAI HELLO ALL HELLO WORLD"

//w.a.p to print the word count from the given string

//o/p  = {HAI:1 , HELLO: 2 , ALL: 1 , WORLD: 1}

let word_count = {}
text.split(' ').forEach( (word) => word in word_count?word_count[word] += 1: word_count[word] =1)
console.log(word_count)

//method 2
word_count = {}
words = text.split(' ')

for(let w of words){
    if(w in word_count){
        word_count[w] += 1
    }else{
        word_count[w] = 1
    }
}

console.log(word_count)


//p2

let newArray = [10,20,30,10,50,20,30,30,60]
num_count = {}
newArray.forEach( (num) => num_count.hasOwnProperty(num) ? num_count[num]++ : num_count[num]=1)
console.log(`Number count in newArray`,num_count)



//p3
// w.a.p to print the first repeated letter in the below pattern variable  // B

let pattern = "ABCBCDA"
let letter_count = {}

for( ch of pattern){
    if (ch in letter_count){
        letter_count[ch]++;
        console.log(`First repeated letter: ${ch}`)
        break;
    }
    else{
        letter_count[ch] = 1
    }
}
