import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import '../css/markdown-styles'

import { rhythm } from '../utils/typography'

module.exports = React.createClass({
  propTypes() {
    return {
      children: React.PropTypes.any,
    }
  },
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  },
})
