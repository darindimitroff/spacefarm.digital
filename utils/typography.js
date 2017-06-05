import ReactDOM from 'react-dom/server'
import React from 'react'
import Typography from 'typography'
import CodePlugin from 'typography-plugin-code'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

const options = {
  baseFontSize: '20px',
  baseLineHeight: 1.5,
  scaleRatio: 2.25,
  plugins: [new CodePlugin()],
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
