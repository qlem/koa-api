# KOA API

## Create account
route http://localhost/identification/account/create  
method POST
```
body = {
  "account": {
    "name": "qlem",
    "email": "qlem@world.net",
    "password": "foo42"
  }
}
```

## POST
route http://localhost:3000/identification/  
method POST
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

## GET 
route http://localhost:3000/test/auth  
method GET
```
headers = {
  "token" = "my.beautiful.token"
}

response = "hello $user.name"
```
