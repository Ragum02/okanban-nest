'use strict';
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('card', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    color: {
      type: Sequelize.STRING(7), // On limite le nombre de caractères, afin de stocker une valeur en hexadécimal exemple: #FF00FF
      allowNull: true,
    },
    position: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    list_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('card');
}