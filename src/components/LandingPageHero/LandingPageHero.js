import React, { Component } from 'react'
import { Section } from '../Utils/Utils'
import './LandingPageHero.css'

export default class LandingPageHero extends Component {
  render() {
    return (
      <Section className="LandingPageHero">
        <h1 className="LandingPageHero__textblock">
          <span className="LandingPageHero__title">BackBurner</span>
          <span className="LandingPageHero__subtitle">
            <span className="blue">Complete Tasks.</span>
            {' '}
            <span className="red">Level Up</span>
          </span>
          <span className="LandingPageHero__intro">
            BackBurner allows you to questify your life, set goals, and be more
            productive. Gain XP to level up and earn rewards. Complete tasks, level up, and collect loot as you clear those tasks that you pile on your BackBurner.
          </span>
        </h1>
      </Section>
    )
  }
}
