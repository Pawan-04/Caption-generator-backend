const ImageKit = require("imagekit");
require('dotenv').config()
const mongoose = require('mongoose')

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

const uploadToImageKit = async (file,filename) => {
    const response = await imagekit.upload({
        file:file,
        fileName:filename,
        folder:"posts-social"
    })
    return response
}
 
module.exports =  uploadToImageKit ;