import React from 'react'
import ReactDOM from 'react-dom'
import LandingPageHero from './LandingPageHero'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LandingPageHero />,div)
  ReactDOM.unmountComponentAtNode(div)
})