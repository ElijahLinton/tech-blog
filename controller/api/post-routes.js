/* eslint-disable linebreak-style */
const router = require('express').Router();
const withAuth = require('../../utilis/auth');
const {Post, Comment, User} = require('../../models');
router.post('/', withAuth, (req, res) => {
  Post.create({
    title: req.body.title,
    post_text: req.body.post_text,
    user_id: req.session.user_id,
  }).then((postData) =>{
    res.json(postData);
  }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});
router.put('/id:', withAuth, (req, res) => {
  post.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then((postData) => {
    if (!postData) {
      res.status(404).json({message: 'this post doesnt exist...Try again?'});
      return;
    }
    res.json(postData);
  }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', withAuth, (req, res) => {
  Post.update(req.body, {
    where: {
      id: req.params.id,
    },

  }).then((postData) => {
    try {
      if (!postData) {
        res.status(404).json({message: 'post doesnt exist...try again'});
        return;
      }
    } catch {
      console.log(err);
      res.status(500).json(err);
    }
  });
});

module.exports = router;
