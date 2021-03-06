const router = require('express').Router()
const handlers = require('../handlers/index')
const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 60 // 60 requests
})

router.get('/', limiter, handlers.redirectToApi)

module.exports = router
