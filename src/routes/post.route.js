const express = require('express');
const postRouter = express.Router();
const {postMiddleware} = require('../middleware/postMiddleware')
const multer = require("multer");
const {createPost} = require('../controllers/post.controller.js')


const upload = multer({storage: multer.memoryStorage()})


postRouter.post('/create',postMiddleware,upload.single("image"),createPost)




module.exports = postRouter