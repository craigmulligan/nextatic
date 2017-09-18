const gql = require('./client')
const exportPathMap = async () => {
  const { data } = await gql(`{
    posts {
      slug
    }
  }`)

  return data.posts.reduce(
    (acc, post) => {
      acc[post.slug] = {
        page: '/post'
      }
      return acc
    },
    {
      '/': { page: '/' }
    }
  )
}

module.exports = exportPathMap
