import { PropTypes } from 'react'
import styled from 'styled-components'
import ReactSVG from 'react-svg'

import colors from '../../../utils/colors'

const InlineIcon = styled(ReactSVG)`
    position: relative;
    display: inline-block;
    margin-right: .25em;
    vertical-align: -2.5%;
    fill: currentColor;
    color: ${props => props.color ? props.color : colors.spacefarm};
    width: ${props => props.width ? props.width : '5em' };
    height: ${props => props.height ? props.height : '5em' };
`;

InlineIcon.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
}

export default InlineIcon;



