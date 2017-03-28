import ReactDOM from 'react-dom/server'
import React from 'react'
import Typography from 'typography'
import CodePlugin from 'typography-plugin-code'


const options = {
  headerFontFamily: ['Real Head', 'sans-serif'],
  bodyFontFamily: ['Real Text', 'sans-serif'],
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  scaleRatio: 2.25,
  plugins: [
    new CodePlugin(),
  ],
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
