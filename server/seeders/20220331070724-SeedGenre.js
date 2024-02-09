'use strict';
const fs = require('fs')
let data =  JSON.parse(fs.readFileSync('./genres.json'))
module.exports = {
  async up (queryInterface, Sequelize) {
    data.forEach(el => {
      delete el.id 
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })
    return queryInterface.bulkInsert("Genres", data)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Genres", null)
  }
};
