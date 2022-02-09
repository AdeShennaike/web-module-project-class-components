import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.state.tasks.map(tsk => {
          return <Todo key = {tsk.id} task = {tsk}/>})}
        </ul>
      </div>
    )
  }
}
