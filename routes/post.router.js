const postController = require('../controllers/post.controller');
const Router = require('express');
const router = new Router();

router.post('/post', postController.createPost);

router.get('/post', postController.getPostByUser);

module.exports = router;