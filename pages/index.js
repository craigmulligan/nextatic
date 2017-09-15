import Post from '../components/post'
import Layout from './_Layout'
import Link from 'next/link'

const Page = ({ allMarkdownRemark, ...props }) => {
  return (
    <Layout>
      {
        allMarkdownRemark.edges.map((edge, i) => {
          return (
            <div key={i}>
              <Link
                as={`${edge.node.frontmatter.slug}`}
                href={`/post?slug=${edge.node.frontmatter.slug}`}
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


Page.getInitialProps = async (props) => {
  const gql = require('../lib/client')

  const { data } = await gql(`{
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            slug
          }
          html
        }
      }
    }
  }`)

  return data;
}

export default Page
