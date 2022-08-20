const express = require('express')
const router = express.Router()

const compHandler = require('../router_handler/comps')

router.post('/publish', compHandler.publish)
router.get('/getList', compHandler.getList)

module.exports = router
