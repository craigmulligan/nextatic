import Post from '../components/post'
import Layout from './_Layout'
import Link from 'next/link'

const Page = ({ Posts, ...props }) => {
  return (
    <Layout>
      {
        Posts.map((post, i) => {
          return (
            <div key={i}>
              <Link
                as={`${post.slug}`}
                href={`/post?slug=${post.slug}`}
                >
                <a>{edge.node.frontmatter.title}</a>
              </Link>
            </div>
          )
        })
      }
    </Layout>
  )
}


Page.getInitialProps = async ({ asPath }) => {
  const gql = require('../lib/client')

  const data = await gql(`{
    Posts {
      title
      body
      slug
    }
  }`)

  console.log(data)
  return data;
}

export default Page
