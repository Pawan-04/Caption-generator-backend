const postModel = require('../model/post.model.js')
const generateCaption = require("../services/ai.service.js")
const uploadImage = require("../services/image.service.js")
const {v4: uuidv4} = require('uuid')


const createPost = async function(req,res){
    const file = req.file
    console.log(file)

    const base64Image = new Buffer.from(file.buffer).toString('base64')
    const caption = await generateCaption(base64Image)
    const result = await uploadImage(file.buffer,`${uuidv4()}`);

    const post = await postModel.create({
        caption: caption,
        image: result.url,
        user: req.user._id
    })
    res.status(201).json({
        message:"Post created successfully",
        post
    })
}


module.exports = {createPost}