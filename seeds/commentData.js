const { Comment } = require('../models');

const commentdata = [
  {
    content: 'Nice Post',
    post_id: 1,
    user_id: 2,
  },
  {
    content: 'Great research',
    post_id: 1,
    user_id: 3,
  },
  {
    content: 'Nice Post',
    post_id: 2,
    user_id: 2,
  },
  {
    content: 'Nice Post',
    post_id: 3,
    user_id: 3,
  },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;