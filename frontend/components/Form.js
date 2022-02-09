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
  
  render() {
    console.log(this.state.name)
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
          <button> Clear Completed </button>
        </form>
      </div>
    )
  }
}
