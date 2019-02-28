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
   return queryInterface.bulkInsert('Questions', 
   [
     {
      question: 'Pantai Tempat Orang?',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Seekor Rusa Memiliki?',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Burung adalah hewan yang bisa ?',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Bendera NKRI warnanya ?',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Ketika apa orang biasanya makan ?',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Questions', null, {});
  }
};
