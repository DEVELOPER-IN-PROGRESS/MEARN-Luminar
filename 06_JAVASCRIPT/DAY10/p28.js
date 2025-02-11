/*
w.a.p to Print the following pattern
        # # # #
        # # # #
        # # # #
        # # # #
*/

for(let i = 1 ; i <= 4 ;i++){
    str = ''
    for(let j = 1;j<5;j++){
        str += `# `
    }
    console.log(str);
}


/*
w.a.p to Print the following pattern
        #
        # #
        # # #
        # # # #
*/

console.log('-------------')

for(let i =1 ; i <=4;i++){
    str = ``
    for(let j =1 ; j <= i ;j++){
        str += `# `
    }
    console.log(str)
}


/*
w.a.p to Print the following pattern
    1
    1 2
    1 2 3
    1 2 3 4
*/

console.log('------------------')

for(let i =1 ; i <=4;i++){
    str = ``
    for(let j =1 ; j <= i ;j++){
        str += `${j} `
    }
    console.log(str)
}

/*
w.a.p to Print the following pattern
    1 2 3 4
    1 2 3 4
    1 2 3 4
    1 2 3 4
*/

console.log('---------')
for(let x = 1 ; x <=4;x++){
    str = ``
    for(let y= 1;y<=4;y++){
        str += `${y} `
    }
    console.log(str)
}

/*
w.a.p to Print the following pattern
    1 1 1 1
    2 2 2 2
    3 3 3 3
    4 4 4 4
*/

console.log('---------')
for(let x = 1 ; x <=4;x++){
    str = ``
    for(let y= 1;y<=4;y++){
        str += `${x} `
    }
    console.log(str)
}

















/*

  # # # #
    # # # #
      # # # #
        # # # #
*/