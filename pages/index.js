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
import H1 from 'components/H1'
import A from 'components/a'
import Paragraph from 'components/p'
import Project from 'components/molecules/Project'
import Icon from 'components/icon'
import Button from 'components/button'
import ProjectList from 'components/organisms/ProjectList'
import Illustration from 'components/molecules/illustration'

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
          <H1>
            <Icon>
              <Isvg src="logo.svg" uniquifyIDs={false}></Isvg>
            </Icon>
            <span>spacefarm</span>
          </H1>
          <Paragraph>Spacefarm is a multidisciplinary design and front-end shop focused on digital products, design systems and branding. We used to be called <A target="blank" href="http://www.thecrazyones.agency">The Crazy Ones↗</A>. Our full site is coming soon.</Paragraph>

          <ProjectList/>

          <Center>
            <Button>Contact</Button>
          </Center>

        </Container>

        <Illustration/>
        
      </App>
    )
  }
}
