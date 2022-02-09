import React from 'react'

export default class Form extends React.Component {
  state = {
    name: '',
    id: 152881707728,
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
    this.props.handleClear()
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
          <button> Add Task </button>
          <button onClick = {this.handleClick}> Clear Completed </button>
        </form>
      </div>
    )
  }
}
