import React, { Component } from 'react'
import RewardItem from '../RewardItem/RewardItem';
import { Section } from '../Utils/Utils';

export default class RewardsChest extends Component {
  renderRewards = () => {
    const { rewardsChest } = this.props

    if(rewardsChest.length === 0) {
      return 'No Rewards Earned. Keep working!'
    } else {
      return rewardsChest.map(reward => 
          <RewardItem key={reward.id} reward={reward} />
      )
    }
  }

  render() {
    return (
      <Section list className='RewardsChest'>
        <ul>
          {this.renderRewards()}
        </ul>
      </Section>
    )
  }
}
