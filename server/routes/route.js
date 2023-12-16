const express =require('express');
const { uploadImage,getImage } = require('../controller/image-controller');

const upload=require('../utils/upload');
const router =express.Router();

const {
    singupUser,
    loginUser
  } = require('../controller/user-controller');

const { authenticateToken, createNewToken } = require('../controller/jwt-controller');

const { createPost,getAllPost,getPost,deletePost,updatePost } = require('../controller/post-controller');
const { newComment, getComments, deleteComment } = require('../controller/comment-controller');


router.post('/signup',singupUser);
router.post('/login',loginUser);

router.post('/file/upload', upload.single('file'), uploadImage);
router.post('/create',authenticateToken,createPost);
router.post('/token',createNewToken);



// router.put('/update/:id', authenticateToken, updatePost);
router.delete('/delete/:id', authenticateToken,deletePost);



router.get('/file/:filename', getImage);
router.get('/post/:id', authenticateToken, getPost);
router.get('/posts', authenticateToken, getAllPost);
router.put('/update/:id',authenticateToken,updatePost)



router.post('/comment/new',authenticateToken,newComment);
router.get('/comments/:id',authenticateToken,getComments);
router.delete('/comment/delete/:id',authenticateToken,deleteComment);
module.exports = router;


