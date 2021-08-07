'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("BotUsers", {
      Connection_ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
