import React from 'react'
import axios from 'axios'

export default class Form extends React.Component {
  state = {
    name: '',
    completed: false
  }

  changeHandler = (e) => {
    this.setState({
      ...this.state,
      name: e.target.value
    })
  }

  handleClick = (e) => {
    e.preventDefault()
    axios.patch('http://localhost:9000/api/todos/${:id}')
    .then(res => {
    })
    this.props.handleClear()
  }
  
  onSubmit = (evt) => {
    evt.preventDefault()
    this.props.handleAddTask(this.state)

}
  
  render() {
    return (
      <div>
        <form>
          <input
          id = 'inputs'
          type = 'text'
          placeholder = 'New Task...'
          onChange = {this.changeHandler}
          />
          <button onClick = {this.onSubmit}> Add Task </button>
          <button onClick = {this.handleClick}> Clear Completed </button>
        </form>
      </div>
    )
  }
}
