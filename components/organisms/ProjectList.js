import React from 'react'
import styled from 'styled-components'
import Project from 'components/molecules/Project'
import { Row, Column } from 'hedron'

// Styles
const ListTitle = styled.h2`
    font-weight: 600;
    margin-bottom: .5rem;
    line-height: 1.2;
`

// Component
class ProjectList extends React.Component {

    render() {
        return (
            <div>
                <ListTitle>Currently working on:</ListTitle>
                <Row>
                    <Column fluid lg='6'>
                        <Project color="red" link="http://download.bg" title="Parsed now" text="We spent the past couple of months working on a front-end design system and illustration guideline for a major health and fitness company."></Project>
                    </Column>
                </Row>
            </div>
        );
    }
}

export default ProjectList;