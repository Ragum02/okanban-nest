'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class List extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  List.init({
      // Première propriété : titre de la liste
      title: {
          type: DataTypes.STRING,
          allowNull: false
      },
      // Deuxième propriété : la position de la liste
      position: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 1
      }
  },
  
  {
      sequelize, 
    tableName: 'list' 
      
    });
    List.associate = (models) => {

      List.hasMany(models.Card, {
        foreignKey: {
          name: "list_id",
          allowNull: false
        },
        as: "cards",
        onDelete: "CASCADE"
      });
    };
  return List;
};