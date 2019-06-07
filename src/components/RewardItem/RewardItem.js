import React, { Component } from 'react'
import { Button } from '../Utils/Utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem } from '@fortawesome/free-solid-svg-icons'
import './RewardItem.css'

export default class RewardItem extends Component {
  render() {
    const { reward, onClaim } = this.props

    return (
      <div key={reward.id} className="RewardItem">
        <div className='RewardItem__reward'>
          <FontAwesomeIcon
            className='RewardItem__claim-icon'
            icon={faGem}
          />
          {' '}
          <div className="RewardItem__reward-text">{reward.reward}</div>
        </div>
        <Button
          className="RewardItem__claim-button"
          onClick={() => onClaim(reward.id)}
        >
          Claim
        </Button>
      </div>
    )
  }
}
