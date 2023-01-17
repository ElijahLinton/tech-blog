/* eslint-disable linebreak-style */
const router = require('express').Router();
const {Comment} = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, (req, res) =>{
  if (req.session) {
    Comment.create({
      comments: req.body.comment_text,
      post_id: req.body.post_id,
      user_id: req.body.session.user_id,
    }).then((commentData) => res.json(commentData))
      .catch((err) => {
        console.log(err);
        res.status(404).json(err);
      });
  }
});

router.delete('/:id', withAuth, (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id,
    },
  }).then((commentData) => {
    if (!commentData) {
      res.status(404)
        .json({message: 'comment doesnt existt....Try again?'});
      return;
    }
    res.json(commentData);
  }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
