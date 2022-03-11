const Sequelize = require('sequelize')
const db = require('../db')


const Plant = db.define('plant', {
    genus: {
        type: Sequelize.STRING
    }, 
    species: {
        type: Sequelize.STRING
    }, 
    potSize: {
        type: Sequelize.INTEGER
    }, 
    pottingMedium: {
        type: Sequelize.STRING, 
        allowNull: false
    }, 
    image:{
        type: Sequelize.STRING,
        defaultValue: 'https://www.kindpng.com/picc/m/435-4359511_pot-plant-clipart-many-plant-potted-plants-clipart.png'
    }
}); 

module.exports(Plant)