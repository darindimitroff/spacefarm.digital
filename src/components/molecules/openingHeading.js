import React, { PropTypes } from 'react'

import Icon from '../../../components/atoms/icon'
import H1 from '../../../components/atoms/H1'

// Component
const OpeningHeading = ({ children, icon }) => {
  return (
    <div>
      {icon ? <Icon icon={icon} /> : false}
      <H1>{children}</H1>
    </div>
  )
}

OpeningHeading.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string,
  text: PropTypes.string.isRequired,
}

export default OpeningHeading
