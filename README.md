# KOA API
Small API with authentication. Build with [Koa](https://koajs.com/) and mongo database.

## Create account
route http://localhost/identification/account/create  
method **POST**
```
body = {
  "account": {
    "name": "qlem",
    "email": "qlem@world.net",
    "password": "foo42"
  }
}

response = "Account created"
```

## Log In
route http://localhost:3000/identification/  
method **POST**
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

## Test authentication
route http://localhost:3000/test/auth  
method **GET**
```
headers = {
  "token" = "my.beautiful.token"
}

response = "hello $user.name"
```
