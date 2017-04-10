
import styled from 'styled-components'

const Button = styled.a`
    background-color: #5538fa;
    text-decoration: none;
    font-weight: 600;
    color: #f7f8fa;
    padding: .5rem .8rem;
    white-space: nowrap;
    text-align: center;
    line-height: 1.5;
    border-radius: 8px;
    display: inline-block;
    cursor: pointer;
    margin-bottom: 2rem;
    transition: all 150ms ease-in-out;
    box-shadow: 0 0 10px 0 rgba(61,62,64,0.07), 0 4px 8px 0 rgba(61,62,64,0.025);
    &:hover {
        transform: scale(1.007) translateY(-0.06rem) translateZ(0) perspective(1px);
        box-shadow: 0 0 18px 0 rgba(61,62,64,0.075), 0 4px 12px 0 rgba(61,62,64,0.025);
    }
`;

export default Button;