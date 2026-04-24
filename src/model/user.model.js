const mongoose = require('mongoose')

const dbSchema = mongoose.Schema({
    username:{
        type:String,
        unique:true,
        require:true
    },
    password:{
        type:String,
        required:true
    }
})

const dbModel = mongoose.model("users",dbSchema)

module.exports = dbModel