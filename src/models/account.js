const Mongo = require('./../tools/mongo')
const ObjectID = require('mongodb').ObjectID

// get one account from email
exports.get = filter => {
  let collection = Mongo.getCollection('account')
  return collection.findOne(filter)
}

// insert one account
exports.set = account => {
  let collection = Mongo.getCollection('account')
  return collection.insertOne(account)
}

// update one account
exports.update = account => {
  let collection = Mongo.getCollection('account')
  let id = ObjectID(account._id)
  return collection.updateOne({_id: id}, {$set: account})
}

// delete one account from id
exports.remove = id => {
  id = ObjectID(id)
  let collection = Mongo.getCollection('account')
  return collection.deleteOne({_id: id})
}
