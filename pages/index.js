import Post from './post'

const Page = ({ allMarkdownRemark, ...props }) => {
  return (
    <div>
      {
        allMarkdownRemark.edges.map(edge => {
          return (<Post key={edge.node.frontmatter.slug} html={edge.node.html} title={edge.node.frontmatter.title} slug={edge.node.frontmatter.slug}/>)
        })
      }
    </div>
  )
}


Page.getInitialProps = async ({ req }) => {
  const isServer = typeof window === 'undefined'
  const gql = require('../lib/client')

  const { data } = await gql.query(`{
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

  return isServer ? data : null;
}

export default Page
