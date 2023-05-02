const { User } = require('../models');


 const userdata = [
    {
      "id": 1,
      "username": "AIDEN",
      "password": "Miller123"
    },
    {
      "id": 2,
      "username": "Angel",
      "password" : "Angel123"
    },
    {
      "id": 3,
      "username": "Bob",
      "password" : "Bob123"
    },
  ]

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;