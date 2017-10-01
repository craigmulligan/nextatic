const exportPathMap = async client => {
  const { data } = await client(`{
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
