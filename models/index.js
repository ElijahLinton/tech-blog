/* eslint-disable linebreak-style */
const Post = require('./Post');
const Comment = require('./Comment');
const User = require('./User');

User.hasMany(Post, {
  foreignKey: 'user_id',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});
Post.hasMany(Comment, {
  foreignKey: 'postId',
});
module.exports = {User, Post, Comment};
