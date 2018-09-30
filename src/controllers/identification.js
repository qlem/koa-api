const Router = require('koa-router')
const BCrypt = require('bcryptjs')
const Token = require('jsonwebtoken')
const Account = require('./../models/account')

const router = new Router()

// create new account
router.post('/account/create', async (ctx, next) => {
  if (!ctx.request.body.account) {
    ctx.status = 400
    ctx.body = "Missing account"
  } else {
    let pw = ctx.request.body.account.password
    let hash = BCrypt.hashSync(pw, 10)
    ctx.request.body.account.password = hash
    await Account.set(ctx.request.body.account)
    ctx.body = ctx.request.body.account
  }
})

// proceed to logging
router.post('/', async (ctx, next) => {
  if (!ctx.request.body.user || !ctx.request.body.user.email ||
      !ctx.request.body.user.password) {
    ctx.status = 400
    ctx.body = "Wrong or empty body"
    return
  }
  let user = ctx.request.body.user
  let account = await Account.get({email: user.email})
  if (!account) {
    ctx.status = 400
    ctx.body = "Wrong email"
    return
  }
  if (!BCrypt.compareSync(user.password, account.password)) {
    ctx.status = 400
    ctx.body = 'Wrong password'
    return
  }
  if (account.token) {
    try {
      Token.verify(account.token, 'peclico')
      ctx.body = {token: account.token}
    } catch (err) {
      if (err.name === 'TokenExpiredError') {
        account.token = Token.sign({user: account.email}, 'peclico', {expiresIn: '365d'})
        await Account.update(account)
        ctx.body = {token: account.token}
      } else {
        console.error(err.message)
        ctx.status = 500
        ctx.body = 'Cannot verify token'
      }
    }
    return
  }
  account.token = Token.sign({user: account.email}, 'peclico', {expiresIn: '365d'})
  await Account.update(account)
  ctx.body = {token: account.token}
})

module.exports = router
