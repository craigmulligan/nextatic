const nextBuild = require('next/dist/server/build')
const nextExport = require('next/dist/server/export')
const nextMiddleware = require('./middleware')
const exportPathMap = require('./exportPathMap')
const next = require('next')

const client = require('../../client')
const conf = require('../../conf')
let nextApp
let pages

module.exports = {
  init: () => {
    nextApp = next({
      dev: conf.get('dev'),
      dir: conf.get('dir'),
      conf: conf.store()
    })
    return nextApp
  },
  middleware: () => {
    return nextMiddleware(nextApp, pages)
  },
  exportPathMap: async () => {
    try {
      pages = await exportPathMap(client)
      return pages
    } catch (error) {
      throw error
    }
  },
  prepare: () => {
    // turn on hot reload
    return nextApp.prepare()
  },
  build: () => {
    conf.set({
      dev: false
    })

    return nextBuild.default(conf.get('dir'), conf.store())
  },
  export: () => {
    // export html page by page
    return nextExport.default(
      conf.get('dir'),
      {
        outdir: conf.get('outdir')
      },
      conf.store()
    )
  }
}
