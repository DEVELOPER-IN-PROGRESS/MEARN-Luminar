const users = require('../model/userModel');
const jwt = require('jsonwebtoken')

exports.registerController =  async (req,res) => {
	//logic
  	const { username, email , password }  = req.body ;
	console.log(req.body)

	try{
	  const existingUser = await users.findOne({ email:email } );

	  if(existingUser){
	    res.status(409).json('User Already Exists!');
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

exports.loginController = async(req,res) => {
	const { email ,password } = req.body;
	console.log(email,password)
	try{
		const existingUser = await users.findOne({email});

		if(existingUser){
			if(existingUser.password == password){
				const token = jwt.sign({ email:existingUser.email}, process.env.JWT_SECRET )
				console.log(token)
				res.status(200).json({existingUser,token})
			}else{
				res.status(401).json('invalid credentials')
			}
		}
		else{
			res.status(404).json('User Not Registered')
		}
	}catch(error){
		res.status(501).json(error)
	}
}

//login

