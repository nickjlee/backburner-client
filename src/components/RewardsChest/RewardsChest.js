import React, { Component } from 'react'
import RewardItem from '../RewardItem/RewardItem'
import { Section } from '../Utils/Utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import './RewardsChest.css'
export default class RewardsChest extends Component {
  state ={
    isHidden: true
  }

  renderRewards = () => {
    const { rewardsChest, onClaim } = this.props

    if (rewardsChest.length === 0) {
      return 'No Rewards Earned. Keep working!'
    } else {
      return rewardsChest.map(reward => (
        <RewardItem key={reward.id} reward={reward} onClaim={onClaim} />
      ))
    }
  }

  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {
    const hide = this.state.isHidden ? ' hidden' : ''
    const icon = this.state.isHidden ? faCaretDown : faCaretUp

    return (
      <Section list className='RewardsChest'>
        <h3 onClick={this.toggleHidden}>
          Rewards Chest
          {' '}
          <FontAwesomeIcon
            className='blue RewardsChest__icon'
            icon={icon} />
        </h3>
        <div className={'RewardsChest__rewards' + hide }>
          {this.renderRewards()}
        </div>
      </Section>
    )
  }
}
