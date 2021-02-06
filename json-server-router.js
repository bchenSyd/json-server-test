const express = require('express')
const methodOverride = require('method-override')
const _ = require('lodash')
const lodashId = require('lodash-id')
const low = require('lowdb')
const Memory = require('lowdb/adapters/Memory')
const FileSync = require('lowdb/adapters/FileSync')
const bodyParser = require('../body-parser')
const validateData = require('./validate-data')
const plural = require('./plural')
const nested = require('./nested')
const singular = require('./singular')
const mixins = require('../mixins')

module.exports = (db, opts) => {
  
  // GET /db
  router.get('/db', (req, res) => {
    res.jsonp(db.getState())
  })

  // Handle /:parent/:parentId/:resource
  router.use(nested(opts))

  // Create routes
  db.forEach((value, key) => {
      /*
      Type of "name" (string)  is not supported. Use objects or arrays of objects.
      i.e. your db.json
       {
            "yourEntityName":"invalid. must be either plainObject or array"
       }
      
      */
    if (_.isPlainObject(value)) {
      router.use(`/${key}`, singular(db, key, opts))
      return
    }

    if (_.isArray(value)) {
      router.use(`/${key}`, plural(db, key, opts))
      return
    }

    const sourceMessage = ''
    // if (!_.isObject(source)) {
    //   sourceMessage = `in ${source}`
    // }

    const msg =
      `Type of "${key}" (${typeof value}) ${sourceMessage} is not supported. ` +
      `Use objects or arrays of objects.`

    throw new Error(msg)
  }).value()

  router.use((req, res) => {
    if (!res.locals.data) {
      res.status(404)
      res.locals.data = {}
    }

    router.render(req, res)
  })

  router.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send(err.stack)
  })

  return router
}