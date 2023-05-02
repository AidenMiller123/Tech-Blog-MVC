const { Post } = require('../models');

const postdata = [
  {
    title: 'CSS Flexbox',
    content: 'To create a flexbox in css, just input to following: display: flex;',
    user_id: 1,
  },
  {
    title: 'Example Post 2',
    content: 'Example content 2',
    user_id: 1,
  },
  {
    title: 'Example Post 3',
    content: 'Example content 3',
    user_id: 2,
  },
  {
    title: 'Example Post 4',
    content: 'Example content 4',
    user_id: 3,
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
