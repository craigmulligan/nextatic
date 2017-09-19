import Post from '../components/post'
import Layout from './_Layout'
import Link from 'next/link'
import styled from 'styled-components'

import {Banner, Subhead, Text, Flex, Box, Container, Heading, Image } from 'rebass'
const Title = styled.h1`
  color: blue;
  font-size: 50px;
`
const Page = (props) => {
  console.log(props)
  return(
    <div>
      <Banner>
        <Title>Welcome to Landr!</Title>
        <Subhead>Source code = website</Subhead>
        <Flex>
          <Container p={2}>
            <Text center>Your repo contains more than enough info to create a killer website, landr will automatically scan your content and build a tailor made website. Why maintain a website when landr can do it for you.</Text>
          </Container>
        </Flex>
      </Banner>
      <Container p={2}>
        <Text py={2} center>
          Your Project is called {props.name} - {props.description}, hosted on <a>github</a>
        </Text>
        <Text py={2} center>Built by {props.owner.login}</Text>
        <Text py={2} center>With some help from these guys</Text>
        <Text center>{props.contributors.map(contributor => contributor.login).join(', ')}</Text>
      </Container>
      <Container p={2}>
        <Text center p={2}>We Noticed that you are publishing packages to github releases here are the ones we found</Text>
        <Text center>
          {
            props.releases.map(release => {
              return (
                <div>
                  <Text>{release.name}</Text>
                  <code>{release.version}</code>
                  <Text>{release.body}</Text>
                </div>
              )
            })
          }
        </Text>
        <Text>Was any of this information wrong? Let us know by opening a github issue?</Text>
      </Container>
      <Container p={2}>
        <Heading center p={2}>Are you ready to build your landr website?</Heading>
        <Subhead>Pick one our our amazing themes</Subhead>
        <Text>To install this theme run:</Text>
        <Text><code>npm i red-theme</code></Text>
        <Text>Then update your landr.conf.js to include <code>`theme:red-theme`</code></Text>
        <Flex mt={2}>
          <Box width={1/3}>
            <Image src={'http://place-hold.it/300X300'} />
          </Box>
          <Box width={1/3}>
            <Image src={'http://place-hold.it/300X300'} />
          </Box>
          <Box width={1/3}>
            <Image src={'http://place-hold.it/300X300'} />
          </Box>
        </Flex>
        <Text>Want to create or customize a theme? Head over the the themeing guide.</Text>
      </Container>
      <Container>
        <Text>Made with Love by resin.io</Text>
      </Container>
    </div>
  )
}


Page.getInitialProps = async ({ pathname }) => {
  const data = require('../etcher.json')
  // const gql = require('../lib/client')
  //
  // const { data } = await gql(`{
  //   posts {
  //     title
  //     body
  //     slug
  //   }
  // }`)

  return data;
}

export default Page
