const Sequelize = require('sequelize')
const db = require('../db')

const Window = db.define('window', {
    exposure: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
})
   

module.exports = Window