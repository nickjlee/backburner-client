import React from 'react'
import ReactDOM from 'react-dom'
import LandingPageIntro from './LandingPageIntro'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LandingPageIntro />,div)
  ReactDOM.unmountComponentAtNode(div)
})