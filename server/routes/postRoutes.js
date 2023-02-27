import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

import Post from '../mongoDB/models/post.js';

dotenv.config();

const router = express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

//GET ALL POSTS
router.route('/').get(async (req, res) => {
    try {
        const posts = await Post.find({});

        res.status(200).json({ success: true, data: posts });
    } catch (error) {
        res.status(500).json({ success: false, message: error });
        
    }
});

//CREATE A POST
//As app scales, need to provide storage for images
//Will use cloudinary to store images
//Before creating a new instance of document, will upload image to cloudinary
//Will then get the url of the image and store it in the database
router.route('/').post(async (req, res) => {
    try {
        const { name, prompt, photo } = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo);
    
    //will create new post in database
    const newPost = await Post.create({
        name,
        prompt,
        // photo: photoUrl.secure_url,
        photo: photoUrl.url,
    })

    res.status(201).json({ success: true, data: newPost });
    } catch (error) {
        res.status(500).json({ success: false, message: error })
    }
});

export default router;