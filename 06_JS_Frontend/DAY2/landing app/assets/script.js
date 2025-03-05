class Landing{
    //properties
    database =  {
        "gojo":{username:"gojo", password:"satoru_clan"},
        "armin": {username:"armin",password:"shiganshina"},
        "toji": {username:"toji",password:"zenin23"},
        "levi": {username:"levi",password:"12ackerman"},
    }

    //methods
    saveData(){
        if(this.database){
            localStorage.setItem("database",JSON.stringify(this.database))
        }
    }

    getData(){
        this.database =  JSON.parse(localStorage.getItem("database"));
        console.log(this.database);
        return this.database? this.database : {};
    }


    user_exist(username){
        if(this.getData().hasOwnProperty(username)){
            return true;
        }
        return false;
    }

    register(){
        let full_db = this.getData();

        let user_name = username.value;
        let pass_word = password.value;

        if(full_db.hasOwnProperty(user_name)){
            console.log(`USer Already Exists`)
            return;
        }
        if(!user_name || !pass_word){
            alert('Please fill the required fields')
        }

        // console.log(user_name,pass_word);

        this.database[user_name] = {username:user_name,password:pass_word};
        this.saveData();

        // alert('registration successful')
        console.log('registration successful');
        window.location = "home.html"
    }


    user_login(){
        let db = this.getData();
        if(!username.value || !password.value){
            alert(`Please Fill the form`)
            return
        }

        if( !this.user_exist(username.value) ){
            console.log("user doesn't exist")
            return
        }

        let name = username.value;
        let pass = password.value;
        console.log(name,pass)
        if(db[name].username == name && db[name].password == pass) {

            localStorage.setItem('Loggedin', name);
            // go to dashboard

            setTimeout( ()=>{},1000)
            window.location = "home.html"

        }else{
            alert('Invalid Credentials')
        return;
        }


    }
}


const obj = new Landing()
obj.saveData()
obj.getData()