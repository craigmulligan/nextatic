import Layout from './_Layout'
import Link from 'next/link'

const Post = ({ title, body, slug }) => {
  return (
    <Layout>
      <div>
        <Link prefetch as={slug} href={`/post?slug=${slug}`}>
          <a>{title}</a>
        </Link>
      </div>
      <p dangerouslySetInnerHTML={{__html: body}}/>
    </Layout>
  )
}

Post.getInitialProps = async ({ asPath }) => {
  const gql = require('../lib/client')
  const { data } = await gql(`{
    post(slug: "${asPath.replace(/\/$/, '')}") {
      title
      slug
      body
    }
  }`)

  return data.post;
}

export default Post
