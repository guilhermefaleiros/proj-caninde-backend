const Post = require('../models/Post')

class PostController{
    async index(req, res){
        const posts = await Post.find()

        return res.json(posts)
    }

    async show(req, res){
        const post = await Post.findById(req.params.id)
        
        return res.json(post)
    }

    async update(req, res){
        const { id } = req.body
        const post = await Post.findByIdAndUpdate({
            _id: id
        }, req.body);

        return res.json(post)
    }

    async store(req, res){
        const post = await Post.create({
            title: req.body.title,
            description: req.body.description,
            imagePrincipal: req.files[0]["location"],
            imageSecondaryOne: req.files[1] ? req.files[1]["location"] : null,
            imageSecondaryTwo: req.files[2] ? req.files[2]["location"] : null
        });
        
        return res.json(post)
    }

    async delete(req, res){
        await Post.findByIdAndDelete(req.params.id)

        return res.send()
    }
}

module.exports = new PostController()