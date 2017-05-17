// Tools
import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import Isvg from 'react-inlinesvg'
import Center from 'components/wrappers/center'

// Components
import App from 'components/app'
import Container from 'components/wrappers/container'
import Button from 'components/atoms/button'
import Intro from 'components/organisms/intro'
import ProjectList from 'components/organisms/ProjectList'
import Illustration from 'components/molecules/Illustration'

export default class Index extends React.Component {
  render() {
    return (
      <App>
        <Helmet
          title={config.siteTitle}
          meta={[
            { "name": "description", "content": "Sample" },
            { "name": "keywords", "content": "sample, something" },
          ]}
        />
        <Container>

          <Intro/>


          {/* Featured projects */}
          <ProjectList/>

          {/* Contact button */}
          <Center>
            <Button>Contact</Button>
          </Center>

        </Container>

        <Illustration/>
        
      </App>
    )
  }
}
