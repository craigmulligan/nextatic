module.exports = {
  exportPathMap: async () => {
    return {
      '/': { page: '/' },
      '/post/post1': { page: '/post', query: { slug: '/post/post1' } },
      '/post/post2': { page: '/post', query: { slug: '/post/post2' } }
    }
  }
}
