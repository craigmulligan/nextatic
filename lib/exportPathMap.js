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
    '/': { page: '/', query: { slug: '/' } },
    '/post/1': { page: '/post', query: { slug: '/post/1' } },
    '/post/2': { page: '/post', query: { slug: '/post/2' } }
  }
  // return data.allMarkdownRemark.edges.map(edge => edge.node.frontmatter).concat(
  //   { slug: '/', page: '/index' }
  // )
}

module.exports = exportPathMap
