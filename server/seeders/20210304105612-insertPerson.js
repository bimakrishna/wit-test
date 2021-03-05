'use strict';

let person = require('../file/data.json');
person.forEach(element => {
  element.createdAt = new Date();
  element.updatedAt = new Date();
})


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('People', person, {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('People', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
