import Layout from './_Layout'
import Link from 'next/link'

const Post = ({ title, html, slug }) => {
  return (
    <Layout>
      <Link prefetch as={slug} href={`/post/?slug=${slug}`}>
        <h1>{title}</h1>
      </Link>
      <p dangerouslySetInnerHTML={{__html: html}}/>
    </Layout>
  )
}

Post.getInitialProps = async ({ query, jsonPageRes }) => {
  const isServer = typeof window === 'undefined'
  const gql = require('../lib/client')
  const { data } = await gql(`{
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
