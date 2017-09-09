const Page = ({ data }) =>
  <div>
    Hello
    {data.markdownRemark.html}
  </div>

Page.getInitialProps = async ({ req }) => {
  const gql = require('graphql-client')({
    url: 'http://localhost:3000/graphql'
  })
  const data = await gql.query(`
    {
      markdownRemark {
        html
      }
    }
  `)
  return data
}

export default Page
