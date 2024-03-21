/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Teas', [
      {
        userID: 1,
        title: 'Индийский чай',
        description: 'из Индии получается',
        img: 'https://s.auto.drom.ru/img1/catalog/photos/fullsize/lamborghini/aventador/lamborghini_aventador_33309.jpg',
        commentID: 1,
        area: "Индия",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userID: 1,
        title: 'Грузинский чай',
        description: 'из Грузии получается',
        img: 'https://s.auto.drom.ru/img1/catalog/photos/fullsize/lamborghini/aventador/lamborghini_aventador_33309.jpg',
        commentID: 1,
        area: "Грузия",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userID: 1,
        title: 'Калмыцкий чай',
        description: 'тоже на базе',
        img: 'https://s.auto.drom.ru/img1/catalog/photos/fullsize/lamborghini/aventador/lamborghini_aventador_33309.jpg',
        commentID: 1,
        area: "Калмыкия",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userID: 1,
        title: 'Турецкий чай',
        description: 'в оригинале очень горький',
        img: 'https://s.auto.drom.ru/img1/catalog/photos/fullsize/lamborghini/aventador/lamborghini_aventador_33309.jpg',
        commentID: 1,
        area: "Туркие",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Teas');
  },
};