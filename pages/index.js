import Post from '../components/post'
import Layout from './_Layout'

const Page = ({ allMarkdownRemark, ...props }) => {
  return (
    <Layout>
      {
        allMarkdownRemark.edges.map(edge => {
          return (<Post key={edge.node.frontmatter.slug} html={edge.node.html} title={edge.node.frontmatter.title} slug={edge.node.frontmatter.slug}/>)
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
