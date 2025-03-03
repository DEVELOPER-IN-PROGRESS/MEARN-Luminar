/*
conditions
no data - please enter a value blue
>= 18 eligible - green
< 18 not eligible red
invalid - invalid input - orange
*/

function check_age() {
    let num = document.getElementById('age').value;
    // console.log(typeof(num))

    num = Number(num)
    // console.log(typeof(num))

    console.log(num)

    let err_msg = document.getElementById('error');
    err_msg.style.display = 'block';

    // if(num<=0 ){
    //     err_msg.innerHTML = 'Enter a valid number !';
    //     err_msg.style.backgroundColor = 'orange';

    // }else

    if(!num){
        err_msg.innerHTML = 'Please Enter a value!';
        err_msg.style.backgroundColor = 'transparent';
        err_msg.style.color = 'blue';
        // setTimeout( ()=>{ },4000);
        // err_msg.style.color = 'white';
    }
    else if(num < 18){
        err_msg.style.backgroundColor = 'red';
        err_msg.innerHTML = `Sorry You're not eligible to vote`;
        // alert("Not eligible")
    }
    else if(num >18){
        err_msg.innerHTML = `Congrats!! You're eligible to vote`;
        err_msg.style.backgroundColor = 'green';
        // alert("you are eligible")
    }
    else{
        // if()
        err_msg.innerHTML = `Invalid input !!`
        err_msg.style.backgroundColor = 'orange';
    }

    if(!num){
        err_msg.style.color = 'blue';
    }else{
        err_msg.style.color = 'white';
    }
    // setTimeout( ()=>{ console.log('delay')},4000);
    // err_msg.style.color = 'white';
    // err_msg.style.display = 'none';
}