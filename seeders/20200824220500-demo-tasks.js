'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     *
    */

    await queryInterface.bulkInsert('Tasks', [{
      description: 'Batata',
      done: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Cenoura',
      done: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Maçãs',
      done: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
