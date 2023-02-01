const { Schema, model } = require('mongoose')

const commentSchema = new Schema({
    commentTitle: {type: String, required: true},
    commentOwner: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    replies: [{
        type: Schema.Types.ObjectId,
        ref: 'Comments'
    }]
},
    {timestamps: true}
)

const Comment = model('Comment', commentSchema)

module.exports = Comment