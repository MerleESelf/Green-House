const Sequelize = require('sequelize');
const db = require('../db');

const Room = db.define('room', {
  humidity: {
    type: Sequelize.DECIMAL,
    validate: {
      isDecimal: true,
      max: 100,
      min: 0,
    },
  },
  temp: {
    type: Sequelize.DECIMAL,
    validate: {
      isDecimal: true,
      max: 100,
      min: 0,
    },
  },
  growLights: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Room;
