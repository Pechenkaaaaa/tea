'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      commentText: {
        type: Sequelize.TEXT
      },
      userID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
          },
          onDelete: "cascade",
          onUpdate: "cascade",
      },
      teaID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Teas",
          key: "id",
          },
          onDelete: "cascade",
          onUpdate: "cascade",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Comments');
  }
};