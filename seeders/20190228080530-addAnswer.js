'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Answers',
      [{
          answer: 'Berlibur',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          answer: 'Bercanda',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          answer: 'Ramai',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          answer: 'Tanduk',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          answer: 'Teman',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          answer: 'Perasaan',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          answer: 'Terbang',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          answer: 'Temenan',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          answer: 'Bertelur',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          answer: 'Merah / Putih',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          answer: 'Putih-Merah',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          answer: 'Dua',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          answer: 'Tidur',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          answer: 'Berlibur',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          answer: 'Marah',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          answer: 'Mati',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Answers', null, {});
  }
};