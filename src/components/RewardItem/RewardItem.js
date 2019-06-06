import React, { Component } from 'react'
import { Button } from '../Utils/Utils'
import './RewardItem.css'

export default class RewardItem extends Component {
  render() {
    const { reward, onClaim } = this.props

    return (
      <div key={reward.id} className='RewardItem'>
        <div className='RewardItem__reward'>{reward.reward}</div>
        <Button 
          className='RewardItem__claim-button'
          onClick={() => onClaim(reward.id)}  
        >
          Claim
        </Button>
      </div>
    )
  }
}
