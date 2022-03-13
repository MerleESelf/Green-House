const router = require('express').Router()
const { models: { Window }} = require('../db')
module.exports = router

// route for /api/windows to get all Window data
router.get('/', async (req, res, next) => {
    try {
      const allWindows = await Window.findAll();
      res.json(allWindows);
    } catch (error) {
      next(error);
    }
  });