const { Nuxt, Builder } = require('nuxt')

const client = require('../../client')
const conf = require('../../conf')
let nuxtApp
let pages


module.exports = {
  init: () => {
    nuxtApp = new Nuxt(conf.store())
    return nuxtApp
  },
  middleware: () => {
    return nuxtApp.render
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
    if (nuxtApp.options.dev) {
      return new Builder(nuxtApp).build()
    }
  },
  build: () => {
    conf.set({
      dev: false
    })

    return new Builder(nuxtApp).generate()
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
