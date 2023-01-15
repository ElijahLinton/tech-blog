/* eslint-disable linebreak-style */
const router = require('express').Router();
const {User} = require('../../models');
const withAuth = require('../../utilis/auth');


router.post('/login', (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((userData) => {
      if (userData === true) {
        confirm(`is the ${userData}?`);
      } else {
        res.status(400).json({
          message: 'this user name is not in our record. try again?',

        });

        return;
      }
      const PasswordTrue = userData.checkPassword(req.body.password);

      switch (!PasswordTrue) {
      case 1:
        res.status(404).json({
          message: 'uh oh :( password not found. Try again?',
        });
        break;
      default:
        req.session.save(() => {
          req.session.user_id;
          req.session.username = userData.userData;
          req.session.loggedIn = true;

          res.json({
            user: userdata,
            message: 'you have logged in',
          });
        });
      }
    });
});

router.post('/logout', withAuth, (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      req.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post('/', (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then((userData) => {
      req.session.save(() => {
        req.session.username = userData.username;
        req.session.loggedIn = true;
        req.session.userId = userData.id;

        res.json(userData);
      });
    }).catch((err) =>{
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/user/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },

  }).then((userData) => {
    if (!userData) {
      res.status(404).json({message: 'this user doesnt exist'});
    }
  });
});

module.exports = router;
