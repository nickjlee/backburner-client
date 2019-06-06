import React, { Component } from 'react'
import RewardItem from '../RewardItem/RewardItem';
import { Section } from '../Utils/Utils';
import './RewardsChest.css'
export default class RewardsChest extends Component {
  renderRewards = () => {
    const { rewardsChest, onClaim } = this.props

    if(rewardsChest.length === 0) {
      return 'No Rewards Earned. Keep working!'
    } else {
      return rewardsChest.map(reward => 
        <RewardItem 
          key={reward.id}
          reward={reward}
          onClaim={onClaim}
        />
      )
    }
  }

  render() {
    return (
      <Section list className='RewardsChest'>
        <h2>Rewards Chest</h2>
        <div className='RewardsChest__rewards'>
          {this.renderRewards()}
        </div>
      </Section>
    )
  }
}
