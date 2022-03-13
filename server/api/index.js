const router = require('express').Router()
module.exports = router

// users 
router.use('/users', require('./users'))

// plants 
router.use('/plants', require('./plants'))

//rooms 
router.use('/rooms', require('./rooms'))

//windows 
router.use('/windows', require('./windows'))

//error handling 
router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
