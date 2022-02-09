import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div className = {this.props.task.completed ? "list" : ''}>
        <li> {this.props.task.name} </li>
      </div>
    )
  }
}
