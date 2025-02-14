'use strict';

/** @type {import('sequelize-cli').Migration} */
export function up(queryInterface, Sequelize) {
  return queryInterface.bulkInsert('list', [
    {
      title: 'Courses à faire',
      position: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Liste des étudiants de la promo Skadi',
      position: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Liste des tâches à faire',
      position: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
}
export function down(queryInterface, Sequelize) {
  return queryInterface.bulkDelete('list', null, {});
}
