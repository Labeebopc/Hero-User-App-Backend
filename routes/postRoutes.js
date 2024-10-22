const express = require('express');

const { createPost, getPost } = require('../controllers/postController.js');
const { authUser } = require('../middlewares/auth-middleware.js');

const router = express.Router()


//CREATE_POST || POST
router.post("/add_post", authUser, createPost)

//GET_ALL_POST || GET
router.get("/get_all_posts/:id", getPost)


module.exports = router;