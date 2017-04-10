import React from 'react'
import styled from 'styled-components'

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
    & h2 {
        font-size: 1.414rem;
        margin-bottom: .25rem;
        line-height: 1.2;
        font-family: Real Head Offc;
        color: ${props => props.color};
    }
`;

// Component
class Project extends React.Component {

    render() {
        return (
            <Card flex href={this.props.link} color={this.props.color}>
                <h2>{this.props.title}</h2>
                <p>{this.props.text}</p>
            </Card>
        );
    }
}

export default Project;