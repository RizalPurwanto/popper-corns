'use strict';
const fs = require('fs')
let data =  JSON.parse(fs.readFileSync('./movies.json'))
module.exports = {
  async up (queryInterface, Sequelize) {
    data.forEach(el => {
      delete el.id 
      el.createdAt = new Date()
      el.updatedAt = new Date()
      
        let slug = el.title.replace(/\s+/g, '-').toLowerCase();
        
       el.slug = slug
    })
    return queryInterface.bulkInsert("Movies", data)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Movies", null)
  }
};