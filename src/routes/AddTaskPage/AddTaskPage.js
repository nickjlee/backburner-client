import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils';
import TaskForm from '../../components/TaskForm/TaskForm';

export default class AddTaskPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  }

  handleAddSuccess = () => {
    const { history } = this.props
    const destination = '/dash'
    history.push(destination)
  }

  render() {
    return (
      <Section className='AddTaskPage'>
        <h2>Add New Task</h2>
        <TaskForm onAddSuccess={this.handleAddSuccess} />
      </Section>
    )
  }
}
