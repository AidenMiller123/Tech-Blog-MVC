const { User } = require('../models');


 const userdata = [
    {
      "id": 1,
      "username": "AIDEN",
      "password": "Miller123"
    },
  ]

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;