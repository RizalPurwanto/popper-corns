'use strict';
const fs = require('fs')
let data =  JSON.parse(fs.readFileSync('./Casts.json'))
module.exports = {
  async up (queryInterface, Sequelize) {
    data.forEach(el => {
      delete el.id 
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })
    return queryInterface.bulkInsert("Casts", data)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Casts", null)
  }
};