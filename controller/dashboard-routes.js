/* eslint-disable linebreak-style */
const router = require('express').Router();
const {Post} = require('../models/');
const withAuth = require('../utils/auth');


router.get('/', withAuth, (req, res) => {
  Post.findAll({
    where: {
      user_id: req.session.user_id,
    },
  }).then((postData) => {
    const posts = postData.map((post) => post.get({plain: true}));
    res.render('dashboard', {posts, loggedIn: true});
  });
});

module.exports = router;
