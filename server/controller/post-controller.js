const Post = require("../models/post");

const createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    // post.save();

    res.status(200).json("Post saved successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};
const updatePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            res.status(404).json({ msg: 'Post not found' })
        }
        
        await Post.findByIdAndUpdate( req.params.id, { $set: req.body })

        res.status(200).json('post updated successfully');
    } catch (error) {
        res.status(500).json(error);
    }
}

const deletePost = async (req, res) => {
  
    try {
      console.log("deletion state 1");
        const post = await Post.findById(req.params.id);
        
        await post.delete()

        res.status(200).json('post deleted successfully');
    } catch (error) {
        res.status(500).json(error)
    }
}

const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};
const getAllPost = async (req, res) => {
  let username = req.query.username;
  let category = req.query.category;

  let posts;

  try {
    if (username) posts = await Post.find({ username: username });
    else if (category) posts = await Post.find({ categories: category });
    else posts = await Post.find({});

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createPost,
  getAllPost,
  getPost,updatePost,deletePost
};
