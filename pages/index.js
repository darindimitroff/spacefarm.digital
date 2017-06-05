import React from 'react'
import { config } from 'config'

import OpeningHeading from '../components/molecules/openingHeading'

import Project from '../components/molecules/Project'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <OpeningHeading icon="https://s.cdpn.io/3/kiwi.svg" color="red" fontSize="75px">
          Hello
        </OpeningHeading>
        <Project color="green" link="http://download.bg" title="Parsed now" text="We spent the past couple of months working on a front-end design system and illustration guideline for a major health and fitness company."></Project>
      </div>
    )
  }
}
