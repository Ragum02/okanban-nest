'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('card_has_tag', {
    card_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'card',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    tag_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'tag',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('card_has_tag');
}