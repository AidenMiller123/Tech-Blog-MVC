const { Post } = require('../models');

const postdata = [
  {
    title: 'CSS Flexbox',
    content: 'To create a flexbox in css, just input to following: display: flex;',
    user_id: 1,
  },
  {
    title: 'Javascript Creating Arrays',
    content: 'In Javascript you can create an array using square brackets "[array]"',
    user_id: 1,
  },
  {
    title: 'HTML Making a button',
    content: 'HTML makes it simple for the user to create a button by making a tag like such "<button> </button>"',
    user_id: 2,
  },
  {
    title: 'SQL Select all from a table',
    content: 'to select all from a table in a database in SQL you can use the following line " SELECT * FROM <tablename>"',
    user_id: 3,
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
