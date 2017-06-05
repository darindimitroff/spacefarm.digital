import React from "react"

import Container from '../../components/wrappers/container'
import LatestPosts from "../../components/LatestPosts"
import OpeningHeading from '../../components/molecules/openingHeading'
import Page from "../Page"

const Homepage = (props) => {
  return (
    <Container>
      <OpeningHeading>spacefarm</OpeningHeading>
      <Page { ...props }>
          <LatestPosts numberOfPosts={3}/>
      </Page>
    </Container>
  )
}

export default Homepage
