import React, { PropTypes } from "react"
import A from '../../../backup/components/atoms/a'

import Page from "../Page"

const PageError = ({ error, errorText }) => (
  <Page
    head={{
      // hero credit: https://www.flickr.com/photos/mypubliclands/16101654539/
      hero: "https://farm8.staticflickr.com/7559/16101654539_bee5151340_k.jpg",
    }}
  >
    <div>
        <h1>{ error }</h1>
        <p>{ errorText }</p>
        <A>Link</A>
    </div>
  </Page>
)

PageError.propTypes = {
  error: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  errorText: PropTypes.string,
}

PageError.defaultProps = {
  error: 404,
  errorText: "Page Not Found here",
}

export default PageError
