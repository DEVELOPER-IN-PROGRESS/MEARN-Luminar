const users = require('../model/userModel');

exports.registerController =  async (req,res) => {
	//logic
  	const { username, email , password }  = req.body ;
	console.log(req.body)

	try{
	  const existingUser = await users.findOne({ email:email} );

	  if(existingUser){
	     res.status(400).json('User Already Exists!');
	  }else{
	     const  newUser = new users({
		username,
		email,
		password,
	     });

 	 // save() is a mongoose method
            await  newUser.save()
	     res.status(200).json(newUser);
 	  }
	}catch(err){
	 	res.status(500).json(err);
	}
	//res.status(200).json('request received')
}

//login

