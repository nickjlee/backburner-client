import React, { Component } from 'react'
import { Button } from '../Utils/Utils';

export default class RewardItem extends Component {
  render() {
    const { reward } = this.props

    return (
      <li key={reward.id} className="RewardItem">
        <div className="RewardItem__reward">{reward.reward}</div>
        <Button className='RewardItem__loot'>Loot</Button>
      </li>
    )
  }
}
