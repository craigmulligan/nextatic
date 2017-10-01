require('babel-polyfill')
const PORT = process.env.PORT || 3000
const graphqlHTTP = require(`express-graphql`)
const server = require('express')()
const conf = require('./conf')
const debug = require('debug')('server')
const { buildSchema, GraphQLSchema, GraphQLObjectType } = require('graphql')
const adapter = require('./adapters/next')

const bootstrap = async () => {
  // launch graqhql server
  // get declared pages, exportPathMap() needs access to server
  // apply middleware

  server.use(
    `/graphql`,
    graphqlHTTP({
      schema: conf.get('schema'),
      graphiql: true
    })
  )

  server.listen(PORT, err => {
    if (err) throw err
  })

  conf.set({
    exportPathMap: adapter.exportPathMap
  })

  const middleware = await adapter.middleware()
  server.use(middleware)

  server.use(function(err, req, res, next) {
    res.status(500).send({ error: err })
  })
}

const nextatic = config => {
  conf.set(config)
  adapter.init()
}

nextatic.dev = async () => {
  await bootstrap()

  if (conf.get('dev') === true) {
    // prepare() turns on hot reloading
    return adapter.prepare()
  }
}

nextatic.export = async () => {
  await adapter.build()
  await bootstrap()
  await adapter.export()
}

module.exports = nextatic
