import React, {PropTypes} from 'react'
import styled from 'styled-components'

const Box = styled.div`
    position: relative;
    color: ${props => props.color ? props.color : colors.spacefarm};
    font-size: ${props => props.fontSize ? props.fontSize : '1em'};
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : '0px'};
`

Box.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
  marginBottom: PropTypes.string,
}

export default Box