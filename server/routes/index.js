const router = require('express').Router()
const Controller = require('../controllers/Controller')

router.get('/', Controller.allPerson)
router.post('/', Controller.addPerson)

module.exports = router 