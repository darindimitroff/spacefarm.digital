import React from 'react'
import styled, { keyframes } from 'styled-components'
import Isvg from 'react-inlinesvg'
import Icon from 'components/atoms/Icon'

// Styles
const Fader = styled.div`
    width: 100%;
    z-index: 2;
    position: absolute;
    height: 100%;
    display: block !important;
    background: linear-gradient(-180deg, #f7f8fa 0%, rgba(247,248,250,0) 10%);
`

const IllustrationWrapper = styled.div`
    position: relative;
    width: 100%;
    overflow:hidden;
    height: 11rem;
`

const fan = keyframes`
  from {
    transform-origin: 50% 50%;
    transform: rotate(0deg) translate3d(0,0,0);
  }
  to {
    transform-origin: 50% 50%;
    transform: rotate(360deg) translate3d(0,0,0);
  }
`

const lightsRed = keyframes`
  from {
    opacity: 1;
    fill: #e686a6;
    transform: translate3d(0,0,0);
  }
  to {
    fill: #e686a6;
    opacity: 0;
    transform: translate3d(0,0,0);
  }
`

const Animate = styled.div`
    position: absolute;
    width: 600%;
    transform: translate3d(0,0,0);
    left: 50%;
    transform: translateX(-50%);
    @media (min-width: 30em) {
        width: 250%;
    }
    @media (min-width: 52em) {
        width: 2560px;
    }
    svg g.fan {
        animation: ${fan} 10s infinite linear;
        -moz-animation: none;
    }
    svg path#red-lights {
        animation: ${lightsRed} .3s infinite;
        animation-direction: alternate;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
    }
`

//Component
class Illustration extends React.Component {

    render() {
        return (
            <IllustrationWrapper>
                <Fader/>
                <Animate>
                    <Isvg src="../test.svg" uniquifyIDs={false}></Isvg>
                </Animate>
            </IllustrationWrapper>
        )
    }
}

export default Illustration