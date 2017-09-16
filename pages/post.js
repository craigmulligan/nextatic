import Layout from './_Layout'
import Link from 'next/link'

const Post = ({ title, html, slug }) => {
  return (
    <Layout>
      <div>
        <Link prefetch as={slug} href={`/post?slug=${slug}`}>
          <a>{title}</a>
        </Link>
      </div>
      <p dangerouslySetInnerHTML={{__html: html}}/>
    </Layout>
  )
}

Post.getInitialProps = async ({asPath}) => {
  // console.log(ctx)
  const gql = require('../lib/client')
  const { data } = await gql(`{
    Posts(slug: "${asPath}") {
      title
      slug
      body
    }
  }`)

  console.log(data)
  debugger

  return {
    title: data.Posts.title,
    html: data.Posts.body,
    slug: data.Posts.slug || '/'
  }
}

export default Post
