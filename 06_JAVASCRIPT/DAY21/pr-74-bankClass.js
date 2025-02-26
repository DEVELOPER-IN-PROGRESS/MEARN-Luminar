class Bank{
    //property
    accountDetails = {
        1000:{acno:1000,username: "gustavo" , password:"pollos",balance:50000},
        1001:{acno:1001,username: "armin" , password:"arlet",balance:10000},
        1002:{acno:1002,username: "eren" , password:"jaeger",balance:15000},
        1003:{acno:1003,username: "toji" , password:"fushiguro",balance:25000},
        1004:{acno:1004,username: "gojo" , password:"satoru",balance:90000},
        1005:{acno:1005,username: "nanami" , password:"kento",balance:65000},
    }

    // w.a.p to validate a given acccount number
    validate(acc_no){
        if (!this.accountDetails.hasOwnProperty(acc_no)){
            console.error("invalid Account number. Check Again \n")
            return false;
        }
        console.log(`Account Exists ...`)
        return true;
    }

    //w.a.p to authenticate a given account
    authenticate(acc_no,pass_word){
        let acc_check = this.validate(acc_no);

        if(acc_check){
            if(this.accountDetails[acc_no].password == pass_word ){
                console.log(`Authentication Successful Loggin in ..\n`)
                return true;
            }
        }
        console.error(`Invalid Username or Password \n`)
        return false;
    }

    //w.a.p to check balance of a given account number
    balance(ac_no,pass_word){
        if(!this.authenticate(ac_no,pass_word)){
            console.error('Invalid Account Number or Password \n')
            return ;
        }

        let usr_name  = this.accountDetails[ac_no].username;
        let cur_balance = this.accountDetails[ac_no].balance;

        console.log(`Current Account Balance for ${usr_name} Account:${ac_no}::$${cur_balance} \n`)
        return cur_balance;
    }

    //w.a.p to transfer money between two accounts
    fund_transfer(from_acc,pass_word,to_acc,money){
        if(from_acc == to_acc){
            console.error(`Account Numbers cannot be same \n`)
            return ;
        }

        let user1 = this.authenticate(from_acc,pass_word);
        let user2 = this.validate(to_acc);

        if( !user1 || !user2){
            console.error(`Account number mismatched Re-Enter:: \n`)
            return false;
        }

        if( this.balance(from_acc,pass_word) < money){
            console.error(`Insufficient Balance .Please Enter lesser amount \n`);
            return false;
        }

        this.accountDetails[from_acc].balance -= money;
        this.accountDetails[to_acc].balance += money;

        console.log(`Funds successfully Transferred from Account:${from_acc} to Account:${to_acc} \n`);
        console.log(`Current Balance  $${this.accountDetails[from_acc].balance} \n`);
        return true;
    }
}

const usr = new Bank();
usr.validate(900);
usr.validate(1004);

usr.authenticate(1005,"kento")
usr.authenticate(1003,"arlet")

usr.balance(1004,"satoru")
usr.balance(1001,"arlet")

//transfer
usr.fund_transfer(1004,"satoru",1003,2000)

usr.fund_transfer(1002,"jaeger",1003,120000)

usr.fund_transfer(1002,"jaeger",1002,120000)

usr.balance(1003,"fushiguro")