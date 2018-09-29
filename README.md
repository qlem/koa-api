# koa-api

POST http://drop.run:3000/identification/account/create
body = {
  "account": {
    "name": "qlem",
    "email": "qlem@world.net",
    "password": "foo42"
  }
}

POST http://drop.run:3000/identification/
body = {
  "user": {
    "email": "qlem@world.net",
    "password": "foo42"
  }
}
response = {
  "token" = "my.beautiful.token"
}

GET http://drop.run:3000/test/auth
headers = {
  "token" = "my.beautiful.token"
}
response = "hello $user.name"
