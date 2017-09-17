const gql = require('./client')
const exportPathMap = async () => {
  const { data } = await gql(`{
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            slug
            component
          }
        }
      }
    }
  }`)

  return {
    '/': { page: '/' },
    '/post/1': { page: '/post' },
    '/post/2': { page: '/post' }
  }
}

module.exports = exportPathMap
