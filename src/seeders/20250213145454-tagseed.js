'use strict';

/** @type {import('sequelize-cli').Migration} */
export function up(queryInterface, Sequelize) {
  return queryInterface.bulkInsert('tag', [
    {
      name: 'Urgent',
      color: '#F00',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Front-end',
      color: '#F0F',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Back-end',
      color: '#00F',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
}
export function down(queryInterface, Sequelize) {
  return queryInterface.bulkDelete('tag', null, {});
}
