import React, { Component } from 'react'
import LandingPageHero from '../../components/LandingPageHero/LandingPageHero';
import LandingPageIntro from '../../components/LandingPageIntro/LandingPageIntro';

export default class LandingPage extends Component {
  render() {
    return (
      <main>
        <LandingPageHero />
        <LandingPageIntro />
      </main>
    )
  }
}
