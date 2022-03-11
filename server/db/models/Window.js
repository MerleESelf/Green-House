const Sequelize = require('sequelize')
const db = require('../db')

const Window = db.define('room', {
    exposure: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
})
   

module.exports(Window)