import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <footer className='Footer'>
        <h5 className='Footer__author'>Created by Nick J. Lee</h5>
        <div className='Footer__icons'>
          <FontAwesomeIcon icon={faGitSquare} size='lg'/>
          <FontAwesomeIcon icon={faLinkedin} size='lg'/>
        </div>
        <h6>Copyright 2019</h6>
        <h6>All Rights Reserved</h6>
      </footer>
    )
  }
}
