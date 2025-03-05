function display(val){
    output.innerText += val;
}

function purge(){
    output.innerText = '';
}

function remove_last(){
    let t = output.innerText;
    console.log(t)
    output.innerText = t.slice(0,t.length-2)
}

function evaluate_exp(){
    console.log(output.innerText,typeof(output.innerHTML));
    console.log(eval("10+2"))
    try{
        output.innerHTML = eval(output.innerHTML)
    }catch{
        output.innerText ='Invalid Expression'
    }

    setTimeout( ()=> output.innerText = `` ,2000)
}