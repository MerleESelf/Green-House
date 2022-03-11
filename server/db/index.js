//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Plant = require('./models/Plant')
const Room = require('./models/Room')
const Window = require('./models/Window')

//associations
User.hasMany(Plant);
Plant.belongsTo(User); 
User.hasMany(Room); 
Room.belongsTo(User); 

Room.hasMany(Plant); 
Plant.belongsTo(Room); 
Room.hasMany(Window); 
Window.belongsTo(Room); 

module.exports = {
  db,
  models: {
    User,
    Plant,
    Room,
    Window
  },
}
