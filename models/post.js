const {Schema, model} = require('mongoose')

const postSchema = new Schema({
    postTitle: {type: String, required: true},
    url: String,
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comments'
    }]
}, {
    timestamps:true
})

const Post = model('Post', postSchema)

module.exports = Post