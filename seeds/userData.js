const { User } = require('../models');


 const userdata = [
    {
      "id": 1,
      "username": "Aiden123",
      "password": "password1"
    },
    {
      "id": 2,
      "username": "AngelNugget810",
      "password" : "password2"
    },
    {
      "id": 3,
      "username": "Bob221",
      "password" : "password3"
    },
  ]

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;