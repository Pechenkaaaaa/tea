'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Tea}) {
      this.belongsTo(User, {foreignKey:"userID"})
      this.belongsTo(Tea, {foreignKey:"teaID"})
    }
  }
  Comment.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    commentText: {
      type: DataTypes.TEXT
    },
    userID: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
    },
    teaID: {
      type: DataTypes.INTEGER,
      references: {
        model: "Teas",
        key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};