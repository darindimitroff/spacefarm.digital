import React from 'react'
import styled, { keyframes } from 'styled-components'
import Isvg from 'react-inlinesvg'

// Styles
const Card = styled.a`
    margin-bottom: 1rem;
    text-decoration: none;
    background-color: #fff;
    width: 100%;
    box-shadow: 0 0 10px 0 rgba(61,62,64,0.07), 0 4px 8px 0 rgba(61,62,64,0.025);
    display: block;
    color: inherit;
    padding: 1rem;
    border-radius: 8px;
    width: 100%;
    & h2 {
        font-size: 1.414rem;
        margin-bottom: .25rem;
        line-height: 1.2;
        font-family: Real Head Offc;
        color: ${props => props.color};
    }
`

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
                    <Isvg src="test.svg" uniquifyIDs={false}></Isvg>
                </Animate>
            </IllustrationWrapper>
        );
    }
}

export default Illustration;