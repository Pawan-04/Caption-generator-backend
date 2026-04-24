const userModel = require('../model/user.model.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


const registerUser = async function(req,res){
    const {username,password} = req.body
    if(!(username&&password)){
        return res.status(401).json({message:"username or pasword is empty"})
    }
    const user = await userModel.findOne({username})

    if(user){
        return res.status(409).json({message:"User Already exists"})
    }
    const hashedPass = await bcrypt.hash(password,10)
    const createUser = await userModel.create({username,password:hashedPass})

    const token = jwt.sign({id:createUser._id},process.env.SECRET_KEY)

    res.cookie("token", token, {
    httpOnly: true,
    sameSite: "None",
    secure: true
});
    res.status(201).json({"message":"User registered",
       "user" :createUser
    })
    return

}

const loginUser = async function(req,res){
    console.log(req.body)
    const {username,password} = req.body
    

    if(!(username&&password)){
        return res.status(401).json({message:"username or pasword is empty"})
    }

    const user = await userModel.findOne({username})

    if(!user){
        return res.status(409).json({message:"Register first"})
    }
    
    const isPass = await bcrypt.compare(password,user.password)

    if(!isPass){
       return res.status(403).json({message:"password is wrong"})
    }
    const token = jwt.sign({id:user._id},process.env.SECRET_KEY)
    res.cookie("token", token, {
    httpOnly: true,
    sameSite: "None",
    secure: true
});

    res.status(200).json({message:"Userv logged in successfully"})
    



}


module.exports = {registerUser,
    loginUser
}