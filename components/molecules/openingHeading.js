import React, { PropTypes } from 'react'
import styled from 'styled-components'

import Icon from '../atoms/icon'
import H1 from '../atoms/H1'
import Box from '../helpers/box'

// Component
const OpeningHeading = ({ children, icon, color, fontSize }) => {
  return (
    <Box color={color} fontSize={fontSize}  marginBottom="1rem">
      {icon ? <Icon path={icon} color="green" /> : false}
      <p>{children}</p>
    </Box>
  )
}

OpeningHeading.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  f: PropTypes.string,
}

export default OpeningHeading
