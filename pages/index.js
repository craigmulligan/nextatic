import Post from '../components/post'
import Layout from './_Layout'
import Link from 'next/link'

const Page = ({ posts, ...props }) => {
  return (
    <Layout>
      {
        posts.map((post, i) => {
          return (
            <div key={i}>
              <Link
                as={`${post.slug}`}
                href={`/post?slug=${post.slug}`}
                >
                <a>{post.title}</a>
              </Link>
            </div>
          )
        })
      }
    </Layout>
  )
}


Page.getInitialProps = async ({ pathname }) => {
  const gql = require('../lib/client')

  const { data } = await gql(`{
    posts {
      title
      body
      slug
    }
  }`)

  return data;
}

export default Page
