const router = require('express').Router()
const { models: { Room, Plant }} = require('../db')
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

    //api post route for new room
router.post('/', async (req, res, next) => {
  try {
    const newRoom = await Room.create(req.body);
    res.send(newRoom);
  } catch (error) {
    next(error);
  }
});

//get route for api/Rooms/:id
router.get('/:id', async (req, res, next) => {
  try {
    const singleRoom = await Room.findByPk(req.params.id, {
      include: { all: true },
    });
    res.json(singleRoom);
  } catch (error) {
    next(error);                                                 
  }
});

//put route for api/room/:id
router.put('/:id', async (req, res, next) => {
  try {
    const RoomToEdit = await Room.findByPk(req.params.id, {
      include: Plant,
    });
    res.send(await RoomToEdit.update(req.body));
  } catch (error) {
    next(error);
  }
});

// route to unassign project
router.put('/:id/unassign/:plantid', async (req, res, next) => {
  try {
    const RoomWithPlantToUnassign = await Room.findByPk(req.params.id);
    await RoomWithPlantToUnassign.removeRoom(req.params.plantid);
    res.send(await Room.findByPk(req.params.id, { include: Plant }));
  } catch (error) {
    next(error);
  }
});

// delete route for api/room/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const Room = await Room.findByPk(req.params.id);
    await Room.destroy();
    res.send(Room);
  } catch (error) {
    next(error);
  }
});