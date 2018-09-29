const Token = require('jsonwebtoken')
const Account = require('./../models/account')

// middleware authentication
exports.authentication =  async (ctx, next) => {
  if (!ctx.header.token) {
    ctx.status = 401
    ctx.body = 'Unauthorized'
    return
  }
  let token = ctx.header.token
  let account = await Account.get({token: token})
  if (!account) {
    ctx.status = 401
    ctx.body = 'Unauthorized'
    return
  }
  ctx.user = account
  try {
    Token.verify(token, 'peclico')
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      ctx.status = 401
      ctx.body = 'Token expired'
    } else {
      console.error(err.message)
      ctx.status = 500
      ctx.body = 'Cannot verify token'
    }
    return
  }
  next()
}