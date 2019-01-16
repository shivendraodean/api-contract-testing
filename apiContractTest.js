const newman = require('newman')

newman.run({
  collection: require('./homer-simpson-api.postman_collection.json'),
  reporters: 'cli',
})
