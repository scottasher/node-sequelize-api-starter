const { Model } = require('sequelize');
const jwt = require("jsonwebtoken");
const { cookieKey } = require('../config/keys');

module.exports = (sequelize, type) => {
    class User extends Model {
        generateJWT() {
            const today = new Date();
            today.setDate(today.getDate() + 60);
            const sign = jwt.sign({
                exp: Math.floor(today),
                id: this.id,
                email: this.email,
                name: this.name
            }, cookieKey);
    
            return sign;
        }
    
        userToJsonWithToken(token) {
            const finalUser = this.toJSON();
            finalUser.apiTok = token;
            return finalUser;
        }
        userToJsonCurrent() {
            const finalUser = this.toJSON();
            delete finalUser.hash
            return finalUser;
        }
    }
    User.init({
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: { type: type.STRING, allowNull: false },
        hash: type.STRING,
        name: type.STRING,
        authority: { type: type.STRING, defaultValue: 'user' },
        active: { type: type.STRING, defaultValue: false }
    }, { 
        sequelize,
        modelName: "User"
    });

    return User;
}