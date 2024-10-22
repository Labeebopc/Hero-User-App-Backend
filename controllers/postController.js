const mongoose = require("mongoose");
const { PostSchema } = require("../models/postModel.js")
const Post = require("../models/postModel.js")


const createPost = async (req, res) => {
    const userId = req.user.id
    const { postImage } = req.body;
    let date = new Date().toLocaleDateString()
    let views = Math.floor(Math.random() * 100)

    try {

        const post = await Post.create({ postImage: postImage.base64, date, views, user: userId })
        console.log(post);

        return res.status(201).json({ success: true, post, message: "Post Created Successfuly" })

    } catch (error) {
        return res.status(500).json({ success: false, error: error.message })
    }
}

const getPost = async (req, res) => {
    const { id } = req.params
    try {
        const post = await Post.find()
        console.log(post)
        if (!post) {
            return res.status(400).json({ success: true, message: "No Posts" })
        }
        else {
            return res.status(201).json({ success: true, post, message: "Posts are Successfuly Fetched" })

        }

    } catch (error) {
        return res.status(500).json({ success: false, error: error.message })
    }


}


module.exports = { createPost, getPost }