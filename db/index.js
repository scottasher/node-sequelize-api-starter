const Sequelize = require('sequelize');
const { db_name, db_user, db_pass, db_host } = require('../config/keys');

const UserModel = require('../models/User');

const sequelize = new Sequelize(db_name, db_user, db_pass, {
    host: db_host,
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }
});

const User = UserModel(sequelize, Sequelize)

sequelize.sync({ force: false }).then(() => {
    console.log('Database & tables created!')
}).catch(err => {
    console.log('Unable to connect to the database: ', err)
})

module.exports = {
    User,
}