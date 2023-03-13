const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');

class Posts extends Model{}

Posts.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        title:{
            type: DataTypes.STRING(20),
            allowNull: false
        },
        body:{
            type: DataTypes.STRING(300),
            allowNull: false
        },
        date:{
            type: DataTypes.DATE,
            allowNull: false
        },
        time:{
            type: DataTypes.TIME,
            allowNull: false
        },
        poster_id: {
            type: DataTypes.INTEGER,
            references:{
                model: 'User',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'posts',
    },
);

module.exports = Posts;