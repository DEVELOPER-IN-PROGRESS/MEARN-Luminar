//w.a.p to print common numbers from the given 2 arrays

let a = [10,11,12,20,30,10,11,5,20,14]
let b = [11,20,25,30,35,11]
iterations = 1
common = []

for(i of a){
    duplicate = false;
    for(x of common){
        if(x == i){
            duplicate = true;
            break;
        }
    }

    if(!duplicate){
        for(it of b){
            if(i == it){
                common.push(i)
                break;
            }
        }
    }

}

console.log(common.length?`Common numbers ${common}`:`All numbers are distinct`)