import React, { PropTypes } from 'react'
import styled from 'styled-components'
import ReactSVG from 'react-svg'

import colors from '../../utils/colors'

const Icon = styled(ReactSVG)`
    position: relative;
    display: inline-block;
    margin-right: .25em;
    vertical-align: -2.5%;
    fill: currentColor;
    float: left;
    color: ${props => props.color ? props.color : 'inherit'};
    width: ${props => props.width ? props.width : '1em' };
    height: ${props => props.height ? props.height : '1em' };
`;

Icon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
}

export default Icon;



