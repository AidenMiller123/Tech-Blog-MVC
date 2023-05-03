const { Comment } = require('../models');

const commentdata = [
  {
    content: 'Thanks for the CSS Tip!',
    post_id: 1,
    user_id: 2,
  },
  {
    content: 'Great research',
    post_id: 1,
    user_id: 3,
  },
  {
    content: 'Very useful for creating Javascript applications',
    post_id: 2,
    user_id: 2,
  },
  {
    content: 'Lots of details about buttons you left out!',
    post_id: 3,
    user_id: 3,
  },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;