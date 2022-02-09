import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        <ul >
          {this.props.state.tasks.map(tsk => {
          return <Todo handleToggle = {this.props.handleToggle} key = {tsk.id} task = {tsk}/>})}
        </ul>
      </div>
    )
  }
}