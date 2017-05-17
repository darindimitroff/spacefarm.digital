import React from 'react'
import styled from 'styled-components'
import Project from 'components/molecules/Project'
import { Row, Column } from 'hedron'
import H1 from 'components/atoms/H1'
import Paragraph from 'components/atoms/p'
import A from 'components/atoms/a'
import Isvg from 'react-inlinesvg'
import Icon from 'components/atoms/icon'

// Component
class Intro extends React.Component {

    render() {
        return (
            <div>
                <H1>
                   <Icon>
                       <Isvg src="../logo.svg"></Isvg>
                    </Icon>
                    <span>spacefarm</span>
                </H1>
                <Paragraph>Spacefarm is a multidisciplinary design and front-end shop focused on digital products, design systems and branding. We used to be called <A target="blank" href="http://www.thecrazyones.agency">The Crazy Ones↗</A>. Our full site is coming soon.</Paragraph>
            </div>
        );
    }
}

export default Intro;