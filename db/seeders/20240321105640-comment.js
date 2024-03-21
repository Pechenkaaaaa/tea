/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comments', [
      {
        userID: 1,
        teaID: 1,
        commentText:'я тут коммент оставил',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userID: 1,
        teaID: 1,
        commentText:'я тут коммент оставил второй',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userID: 1,
        teaID: 1,
        commentText:'я тут коммент оставил третий',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userID: 1,
        teaID: 1,
        commentText:'я тут коммент оставил четверый',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments');
  },
};