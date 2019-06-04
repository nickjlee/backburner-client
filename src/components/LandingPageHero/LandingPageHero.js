import React, { Component } from 'react'
import { Section } from '../Utils/Utils'
import './LandingPageHero.css'

export default class LandingPageHero extends Component {
  render() {
    return (
      <Section className='hero'>
        <h1 className='hero-textblock'>
          <span className='hero-title'>
            BackBurner
          </span>
          <span className='hero-subtitle'>
            Complete Tasks. Level Up
          </span>
          <span className='hero-text'>
            BackBurner allows you to questify your life, set goals, and be productive. Gain XP and Coins to loot rewards for completing dailies and todo quests. Complete tasks, level up, and collect loot on your way to a more productive you.
          </span>
        </h1>
      </Section>
    )
  }
}
