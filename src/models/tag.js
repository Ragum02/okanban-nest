'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tag.init({
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      color: {
        type: DataTypes.STRING(7),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "tag",
    });
  
    Tag.associate = (models) => {
      Tag.belongsToMany(models.Card, {
        as: "cards",
        through: "card_has_tag",
        foreignKey: "tag_id",
        otherKey: "card_id"
      });
    };
  
  return Tag;
};