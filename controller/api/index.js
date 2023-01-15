/* eslint-disable linebreak-style */
const router = require('express').Router();

const userRoutes = require('./userRoutes');
const commentRoutes = require('./comment-routes');
const postRoutes = require('./post-routes');

router.use('/user', userRoutes);
router.use('/comment', commentRoutes);
router.use('/post', postRoutes);

module.exports = router;
