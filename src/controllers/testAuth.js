const Router = require('koa-router')
const Auth = require('./../middleware/authentication')

var router = new Router()

// auth middleware
router.use(Auth.authentication)

// route that test auth middleware
router.get('/', async (ctx, next) => {
  ctx.body = 'hello ' + ctx.user.name
})

module.exports = router
