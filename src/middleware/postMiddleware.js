const userModel = require('../model/user.model.js')
const jwt = require('jsonwebtoken')

const postMiddleware = async function(req,res,next){

    const {token} = req.cookies;

    if(!token){
        return res.status(409).json({message:"NBot Registered"})
    }

    try{
    const decoded = jwt.verify(token,process.env.SECRET_KEY)

    const user = await userModel.findOne({_id:decoded.id})

    req.user = user
    next()
            
    }
    catch{
        res.status(401).json({"message":"Unauthorized access"})
    }

}

module.exports = {postMiddleware}