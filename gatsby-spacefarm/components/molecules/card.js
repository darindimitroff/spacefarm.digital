import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.a`
    margin-bottom: 1rem;
    max-width: 32rem;
    text-decoration: none;
    background-color: #fff;
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
`;

class Card extends React.Component {

    render() {
        return (
            <CardWrapper href={this.props.link} color={this.props.color}>
                <h2>Getting stronger</h2>
                <p>{this.props.text}</p>
            </CardWrapper>
        );
    }
}

export default Card;