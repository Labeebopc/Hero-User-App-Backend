const mongoose = require('mongoose')

const Schema = mongoose.Schema


const PostSchema = new Schema({

    postImage: { type: String },
    date: { type: String },
    views: Number,
    tags: [String],
    user: { type: Schema.Types.ObjectId, ref: 'Users', required: true }

})
const postModel = mongoose.model("Posts", PostSchema)

module.exports = postModel
