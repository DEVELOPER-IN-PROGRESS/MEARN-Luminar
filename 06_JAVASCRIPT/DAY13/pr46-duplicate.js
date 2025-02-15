
//w.a.p to find the duplicate(s) number from a given array

let a = [10,12,20,23,30,43,40,1,10,2,30,4,5,20,6,8,9,5,40,10,10,10,2,20];
let duplicate = []

for(let i = 0; i<a.length ;i++){
    found = false;
    for(d of duplicate){
        if(d == a[i]){
            found = true;
            break;
        }
    }
    if(!found){
        for(let j = i+1;j<a.length ;j++){
            if(a[j] == a[i]){
                duplicate.push(a[i]);
                break;
            }
        }
    }

}

console.log(duplicate.length ==0 ?`No duplicate found`:`Duplicate numbers from main array ${duplicate}`)

//method 2

duplicate = []
for(let i = 0; i<a.length ;i++){
    for(let j = i+1;j<a.length ;j++){
        if(a[j] == a[i] ){
            isDup = false;
            for(let k = 0 ; k < duplicate.length;k++){
                if(a[i] == duplicate[k]){
                    isDup = true;
                    break;
                }
            }
            if(!isDup){
                duplicate.push(a[i])
            }
            break;
        }
    }
}
console.log(duplicate.length ==0 ?`No duplicate found`:`Duplicate numbers from main array ${duplicate}`)

