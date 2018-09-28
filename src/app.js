const Koa = require('koa')
const BodyParser = require('koa-bodyparser')
const Logger = require('koa-logger')
const Mongo = require('./tools/mongo')

// controllers
const router = require('./controllers/index')

const app = new Koa()

app
  .use(Logger())
  .use(BodyParser())
  .use(router.routes())
  // .use(router.allowedMethods())

const run = async () => {
  await Mongo.connect()
  app.listen(3000, () => {
    console.log('Drop api listening on port 3000')
  })
}

run()
