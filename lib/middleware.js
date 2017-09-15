const { parse } = require('url')
const find = require('lodash/find')

const middleware = (pages, nextApp) => {
  return async (req, res, next) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl
    const page = pages[Object.keys(pages).find(pageKey => {
      return pageKey === pathname
    })]

    if (page) {
      console.log('Page found')
      // console.log(page, parsedUrl)
      const queryParams = { slug: page.slug }
      nextApp.render(req, res, page.page, {
        slug: pathname
      })
    } else {
      console.log('no page found')
      nextApp.getRequestHandler(req, res, parsedUrl)
    }
  }
}

module.exports = middleware
