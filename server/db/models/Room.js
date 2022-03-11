const Sequelize = require('sequelize')
const db = require('../db')


const Room = db.define('room', {
   humidity: {
       type: Sequelize.INTEGER
   },
   temp: {
       type: Sequelize.INTEGER
   }
}); 

module.exports(Room)