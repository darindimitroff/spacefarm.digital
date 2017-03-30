import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import App from 'components/app'
import Container from 'components/wrappers/container'
import H1 from 'components/H1'
import A from 'components/a'
import Paragraph from 'components/p'
import Card from 'components/molecules/card'
import Icon from 'components/icon'
var Isvg = require('react-inlinesvg')

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
              <Isvg src="logo.svg"></Isvg>
            </Icon>
            <span>spacefarm</span>
          </H1>
          <Paragraph>Spacefarm is a multidisciplinary design and front-end shop focused on digital products, design systems and branding. We used to be called <A target="blank" href="http://www.thecrazyones.agency">The Crazy Ones↗</A>. Our full site is coming soon.</Paragraph>
          <Card color="red" link="http://download.bg" title="Getting stronger" text="We spent the past couple of months working on a front-end design system and illustration guideline for a major health and fitness company."></Card>
        </Container>
      </App>
    )
  }
}
