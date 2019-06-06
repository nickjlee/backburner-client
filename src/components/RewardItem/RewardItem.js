import React, { Component } from 'react'
import { Button } from '../Utils/Utils'
import './RewardItem.css'

export default class RewardItem extends Component {
  render() {
    const { reward } = this.props

    return (
      <div key={reward.id} className='RewardItem'>
        <div className='RewardItem__reward'>{reward.reward}</div>
        <Button className='RewardItem__loot-button'>Loot</Button>
      </div>
    )
  }
}
