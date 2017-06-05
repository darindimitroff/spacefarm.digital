import React, {PropTypes} from 'react'
import styled from 'styled-components'
import { storiesOf, action, linkTo } from '@kadira/storybook'

// My components
import App from '../src/components/app'
import A from '../src/components/atoms/a'
import Button from '../src/components/atoms/button'
import H1 from '../src/components/atoms/H1'
import InlineIcon from '../src/components/atoms/icon'
import P from '../src/components/atoms/p'

const stories = storiesOf('Atoms', module);

stories.add('Text Link', () => (
  <App><A>Good ol' text link</A></App>
))
stories.add('Button', () => (
  <App><Button onClick={action('clicked')}>Text</Button></App>
))
stories.add('H1', () => (
  <App><H1>Heading 1</H1></App>
))
stories.add('Icon', () => (
  <App><InlineIcon path='http://s.cdpn.io/3/kiwi.svg' description='Hello'/></App>
))
stories.add('Paragraph', () => (
  <App><P>Herro</P></App>
))
