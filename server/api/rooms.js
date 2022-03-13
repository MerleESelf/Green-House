const router = require('express').Router()
const { models: { Room }} = require('../db')
module.exports = router

// route for /api/rooms to get all room data
router.get('/', async (req, res, next) => {
    try {
      const allRooms = await Room.findAll();
      res.json(allRooms);
    } catch (error) {
      next(error);
    }
  });