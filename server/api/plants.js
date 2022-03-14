const router = require('express').Router()
const { models: { Plant, Room }} = require('../db')
module.exports = router

// route for /api/plants to get all plant data
router.get('/', async (req, res, next) => {
    try {
      const allPlants = await Plant.findAll();
      res.json(allPlants);
    } catch (error) {
      next(error);
    }
  });

  //api post route for new plant
router.post('/', async (req, res, next) => {
  try {
    const newplant = await Plant.create(req.body);
    res.send(newplant);
  } catch (error) {
    next(error);
  }
});

//get route for api/plants/:id
router.get('/:id', async (req, res, next) => {
  try {
    const singlePlant = await Plant.findByPk(req.params.id, {
      include: { all: true },
    });
    res.json(singlePlant);
  } catch (error) {
    next(error);                                                 
  }
});

//put route for api/plant/:id
router.put('/:id', async (req, res, next) => {
  try {
    const plantToEdit = await Plant.findByPk(req.params.id, {
      include: Room,
    });
    res.send(await plantToEdit.update(req.body));
  } catch (error) {
    next(error);
  }
});

// route to unassign room
router.put('/:id/unassign/:roomid', async (req, res, next) => {
  try {
    const roomWithPlantToUnassign = await Room.findByPk(req.params.roomid);
    await roomWithPlantToUnassign.removePlant(req.params.id);
    res.send(await Room.findByPk(req.params.roomid, { include: Plant }));
  } catch (error) {
    next(error);
  }
});

//route to assign room
router.put('/:id/assign/:roomid', async (req, res, next) => {
  try {
    const roomWithPlantToAssign = await Room.findByPk(req.params.roomid);
    await roomWithPlantToAssign.addPlant(req.params.id);
    res.send(await Plant.findByPk(req.params.id, { include: Room }));
  } catch (error) {
    next(error);
  }
});

// delete route for api/plant/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const plant = await Plant.findByPk(req.params.id);
    await Plant.destroy();
    res.send(plant);
  } catch (error) {
    next(error);
  }
});