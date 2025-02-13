'use strict';

/** @type {import('sequelize-cli').Migration} */
export function up(queryInterface, Sequelize) {
  return queryInterface.bulkInsert('card', [
    {
      content: "Prendre un café",
      position: 1,
      color: "#f254ad",
      list_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      content: "Souhaiter l'anniversaire de André",
      position: 2,
      color: "#ff00ff",
      list_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      content: "Suivre les cours de Fabien en S13",
      position: 3,
      color: "#FFAABB",
      list_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
}
export function down(queryInterface, Sequelize) {
  return queryInterface.bulkDelete('card', null, {});
}

