# koa-api

## POST http://localhost/identification/account/create
```
body = {
  "account": {
    "name": "qlem",
    "email": "qlem@world.net",
    "password": "foo42"
  }
}
```

## POST http://localhost:3000/identification/
```
body = {
  "user": {
    "email": "qlem@world.net",
    "password": "foo42"
  }
}

response = {
  "token" = "my.beautiful.token"
}
```

## GET http://localhost:3000/test/auth
```
headers = {
  "token" = "my.beautiful.token"
}
response = "hello $user.name"
```
