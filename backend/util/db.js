const Sequelize = require('sequelize')

const sequelize = new Sequelize('sonika' ,'root', 'password',{
    host :"localhost",
    dialect :"mysql"
})

module.exports = sequelize;