const { Model } = require('sequelize');
const jwt = require("jsonwebtoken");
const { cookieKey } = require('../config/keys');

module.exports = (sequelize, type) => {
    class Media extends Model {}

    Media.init({
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        type: type.STRING,
        size: type.STRING,
        tags: type.STRING,
        path: { type: type.STRING, allowNull: false},
        author: { type: type.STRING, allowNull: false}
    }, { 
        sequelize,
        modelName: "Media"
    });

    return Media;
}