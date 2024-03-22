/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Teas', [
      {
        userID: 1,
        title: 'Индийский чай',
        description: 'из Инди',
        img: 'https://assamika.ru/wa-data/public/shop/products/65/00/65/images/470/470.240@2x.jpg',
        commentID: 1,
        area: "Индия",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userID: 1,
        title: 'Грузинский чай',
        description: 'из Грузии получается',
        img: 'https://assamika.ru/wa-data/public/shop/products/65/00/65/images/470/470.240@2x.jpg',
        commentID: 1,
        area: "Грузия",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userID: 1,
        title: 'Калмыцкий чай',
        description: 'тоже на базе',
        img: 'https://assamika.ru/wa-data/public/shop/products/65/00/65/images/470/470.240@2x.jpg',
        commentID: 1,
        area: "Калмыкия",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userID: 1,
        title: 'Турецкий чай',
        description: 'в оригинале очень горький',
        img: 'https://assamika.ru/wa-data/public/shop/products/65/00/65/images/470/470.240@2x.jpg',
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