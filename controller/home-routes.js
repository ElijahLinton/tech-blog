/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
// eslint-disable-next-line new-cap
const router = require('express').Router();
const {User, Post, Comment} = require('../models');
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
  Post.findAll({
    include: [User],
  })
    .then((postData) => {
      const posts = postData.map((post) => post.get({plain: true}));
      res.render('load-post', {posts});
    }).catch((err) => {
      res.status(500).json(err);
    });
});

router.get('/post/:id', (req, res) =>{
  Post.findByPk(req.params.id, {
    include: [
      {
        model: Comment,
        include: [User],
      },
    ],
  });
}).then((postData) => {
  if (postData) {
    const onePost = postData.get({plain: true});

    res.render('one-post', {onePost});
  } else {
    res.status(404).end();
  }
}).catch((err) => {
  res.status(500).json(err);
});


router.get('/login', (req, res) => {
  if (req.session.loggedin) {
    res.redirect('/login');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedin) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});

module.exports = router;
