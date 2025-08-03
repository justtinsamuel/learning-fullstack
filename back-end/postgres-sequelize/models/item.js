"use strict";
const { Model } = require("sequelize");
const { FOREIGNKEYS } = require("sequelize/lib/query-types");
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsTo(models.User, { foreignKey: "UserId" });
      Item.belongsTo(models.Type, { foreignKey: "TypeId"});
    }
  }
  Item.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Name cannot be blank",
          },
        },
      },
      category: {
        type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Category cannot be empty"
        }
      }
      },
      price: DataTypes.INTEGER,
      stock: DataTypes.INTEGER,
      TypeId: DataTypes.INTEGER,
      UserId: DataTypes.INTEGER,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Item",
    }
  );
  return Item;
};
