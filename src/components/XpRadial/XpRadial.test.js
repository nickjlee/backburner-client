import React from 'react'
import ReactDOM from 'react-dom'
import XpRadial from './XpRadial'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<XpRadial />,div)
  ReactDOM.unmountComponentAtNode(div)
})