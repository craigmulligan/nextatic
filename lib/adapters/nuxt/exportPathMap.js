const exportPathMap = async client => {
  const { data } = await client(`{
    posts {
      slug
    }
  }`)

  return data.posts.reduce(
    (acc, post) => {
      acc.push(`/post/${post.slug}`)
    },
    ['/']
  )
}

module.exports = exportPathMap
