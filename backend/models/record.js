const Sequelize = require('sequelize')

const sequelize = require('../util/db')

const Record = sequelize.define('record' , {
    id : {
        type : Sequelize.INTEGER,
        allowNull : false,
        primaryKey : true,
        autoIncrement : true
    },
    present : {
        type : Sequelize.BOOLEAN,
        allowNull : false,
        
    }
})

module.exports = Record;