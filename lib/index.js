require('babel-polyfill')
const PORT = process.env.PORT || 3000
const graphqlHTTP = require(`express-graphql`)
const server = require('express')()
const next = require('next')
const conf = require('./conf')
const nextBuild = require('next/dist/server/build').default
const nextExport = require('next/dist/server/export').default
const debug = require('debug')('server')
const { buildSchema, GraphQLSchema, GraphQLObjectType } = require('graphql')
const adapter = require('./adapters/next')

const bootstrap = async () => {
  server.use(
    `/graphql`,
    graphqlHTTP({
      schema: conf.get('schema'),
      graphiql: true
    })
  )

  // Note we have to launch the server first so getPages() has acess to graphql
  server.listen(PORT, err => {
    if (err) throw err
  })

  // get declared pages
  await adapter.exportPathMap()

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
