import React from "react"

import LatestPosts from "../../components/LatestPosts"
import Page from "../Page"

const Homepage = (props) => {
  return (
    <Page { ...props }>
      <LatestPosts numberOfPosts={3}/>
    </Page>
  )
}

export default Homepage
