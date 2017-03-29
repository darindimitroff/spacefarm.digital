import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import App from 'components/app'
import H1 from 'components/H1'
import Paragraph from 'components/p'
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
        <H1>
          <Icon>
            <Isvg src="logo.svg"></Isvg>
          </Icon>
          <span>spacefarm</span>
        </H1>
        <Paragraph>Spacefarm is a multidisciplinary design and front-end shop focused on digital products, design systems and branding. We used to be called <a target="blank" href="http://www.thecrazyones.agency">The Crazy Ones↗</a>. Our full site is coming soon.</Paragraph>
      </App>
    )
  }
}
