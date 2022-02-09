import React from 'react'

export default class Todo extends React.Component {

handleClick = () => {
  this.props.handleToggle(this.props.task.name)
}

  render() {
    return (
      <div onClick = {this.handleClick} className = {this.props.task.completed ? "list" : ''}>
        <li > {this.props.task.name} </li>
      </div>
    )
  }
}
