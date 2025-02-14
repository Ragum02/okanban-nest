'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Card.belongsTo(models.List, {
        foreignKey: 'list_id',
        as: 'list',
      });

      Card.belongsToMany(models.Tag, {
        as: 'tags',
        through: 'card_has_tag',
        foreignKey: 'card_id',
        otherKey: 'tag_id',
      });
    }
  }

  Card.init(
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      position: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      color: {
        type: DataTypes.STRING(7), // On limite le nombre de caractères, afin de stocker une valeur en hexadécimal exemple: #FF00FF
        allowNull: true,
      },
      list_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },

    {
      sequelize,
      timestamps: true,
      tableName: 'card',
    },
  );

  return Card;
};
