const PORT = process.env.PORT || 3000
const graphqlHTTP = require(`express-graphql`)
const server = require('express')()
const next = require('next')
const exportPathMapDefault = require('./exportPathMap')
const middleware = require('./middleware')
const conf = require('./config')
const nextBuild = require('next/dist/server/build')
const nextExport = require('next/dist/server/export')
const { buildId } = require('./utils')
const debug = require('debug')('server')
const { buildSchema, GraphQLSchema, GraphQLObjectType } = require('graphql')

const bootstrap = async () => {
  const nextApp = next({
    dev: conf.get('dev'),
    dir: conf.get('dir'),
    conf: conf.store()
  })

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

  const pages = await conf.get('exportPathMap')()

  server.use(conf.get('middleware')(pages, nextApp))

  server.use(function(err, req, res, next) {
    res.status(500).send({ error: err })
  })

  return {
    server,
    nextApp,
    pages
  }
}

const nextatic = config => {
  conf.set(config)
}

nextatic.dev = async () => {
  const { nextApp, server } = await bootstrap()
  if (conf.get('dev') === true) {
    // prepare() turns on hot reloading
    return nextApp.prepare()
  }
}

nextatic.export = async () => {
  // always set export to prod
  conf.set({
    dev: false
  })
  // compile
  await nextBuild.default(conf.get('dir'), conf.store())
  // boot server
  const { server, nextApp } = await bootstrap()

  // export html page by page
  return nextExport.default(
    conf.get('dir'),
    {
      outdir: conf.get('outdir')
    },
    conf.store()
  )
}

module.exports = nextatic
