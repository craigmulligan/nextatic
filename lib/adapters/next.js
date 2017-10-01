const nextBuild = require('next/dist/server/build')
const nextExport = require('next/dist/server/export')
const next = require('next')
const conf = require('../conf')

module.exports = () => {
  let nextApp;

  return {
    init: () => {
      return next(
        dev: conf.get('dev'),
        dir: conf.get('dir'),
        conf: conf.store()
      )
    },
    dev: (nextApp) => {
      return nextApp.prepare()
    },
    export: async () => {
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
  }
}
