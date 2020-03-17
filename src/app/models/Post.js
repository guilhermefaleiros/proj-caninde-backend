const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    imagePrincipal:{
        type: String,
        required: true
    },
    imageSecondaryOne:{
        type: String,
        required: false
    },
    imageSecondaryTwo:{
        type: String,
        required: false
    },
    description:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Post', PostSchema)