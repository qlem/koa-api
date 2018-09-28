const Router = require('koa-router')
const identification = require('./identification')
const auth = require('./testAuth')

var router = new Router()

router.use('/identification', identification.routes(), identification.allowedMethods())
router.use('/test/auth', auth.routes(), auth.allowedMethods())

module.exports = router
