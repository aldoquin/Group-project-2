const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    portfolio: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0],
      },
    },
    github: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0],
      },
    },
    portrait: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0],
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'dev',
  }
);

module.exports = User;
