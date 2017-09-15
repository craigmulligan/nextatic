const { parse } = require('url')
const find = require('lodash/find')
const debug = require('debug')('middleware')

const middleware = (pages, nextApp) => {
  const handle = nextApp.getRequestHandler()
  
  return async (req, res, next) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl
    const page = pages[Object.keys(pages).find(pageKey => pageKey === pathname)]

    if (page) {
      debug('Page found')
      debug(page, parsedUrl)
      nextApp.render(req, res, page.page, page.query)
    } else {
      debug('no page found')
      handle(req, res, parsedUrl)
    }
  }
}

module.exports = middleware
