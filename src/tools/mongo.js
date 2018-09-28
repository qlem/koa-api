const Mongo = require('mongodb').MongoClient

var client = null

exports.connect = async () => {
  try {
    let url = 'mongodb://localhost:27017/drop'
    client = await Mongo.connect(url, {useNewUrlParser: true})
    console.log('Connected to mongo database')
  } catch (err) {
    if (err.message) {
      console.error(err.message)
    }
    console.error('Cannot connect to database')
  }
}

exports.getCollection = collection => {
  try {
    if (client == null) {
      throw {message: 'Mongo client is null'}
    }
    return client.db('drop').collection(collection)
  } catch (err) {
    if (err.message) {
      console.error(err.message)
    }
    console.error('Cannot get collection')
  }
}
