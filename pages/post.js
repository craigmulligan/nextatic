import Link from 'next/link'

const Post = ({ title, html, slug }) => {
  console.log(slug)
  return (
    <div>
      <Link prefetch as={slug} href={`/post/?slug=${slug}`}>
        <h1>{title}</h1>
      </Link>
      <p dangerouslySetInnerHTML={{__html: html}}/>
    </div>
  )
}

Post.getInitialProps = async ({ query, jsonPageRes }) => {
  console.log('json', jsonPageRes)
  const isServer = typeof window === 'undefined'
  const gql = require('../lib/client')
  const { data } = await gql.query(`{
    markdownRemark(frontmatter: {slug: {eq: "${query.slug}"}}) {
      frontmatter {
        title
        slug
      }
      html
    }
  }`)

  return {
    title: data.markdownRemark.frontmatter.title,
    html: data.markdownRemark.html,
    slug: data.markdownRemark.frontmatter.slug || '/'
  }
}

export default Post
