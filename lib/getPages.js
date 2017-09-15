const gql = require('./client')
const getPages = async () => {
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
    '/post/post1': { page: '/post', query: { slug: '/post/post1' } },
    '/post/post2': { page: '/post', query: { slug: '/post/post2' } }
  }
  // return data.allMarkdownRemark.edges.map(edge => edge.node.frontmatter).concat(
  //   { slug: '/', page: '/index' }
  // )
}

module.exports = getPages
