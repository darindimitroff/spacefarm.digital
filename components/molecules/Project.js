import React, { PropTypes } from 'react'
import styled from 'styled-components'
import colors from '../../utils/colors'
import Card from '../wrappers/card'

// Component
const Project = ({ link, color, title, text }) => {
  return (
    <Card href={link} color={color}>
      <h2>{title}</h2>
      <p>{text}</p>
    </Card>
  )
}

Project.propTypes = {
  link: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Project
