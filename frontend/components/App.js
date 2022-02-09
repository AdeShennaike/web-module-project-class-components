import React from 'react';
import TodoList from './TodoList';
import Form from './Form';
import axios from 'axios';

export default class App extends React.Component {
state = {
  tasks:[]
}

componentDidMount() {
axios.get('http://localhost:9000/api/todos')
  .then( res => {
    this.setState({
      ...this.state,
      tasks: res.data.data
    })
  })
  .catch( err => {
    console.error(err)
  })
}
  
  render() {
    return (
      <div>
        <h1> ToDo List: MVP! </h1>
        <TodoList state = {this.state}/>
        <Form state = {this.state}/>
      </div>
    )
  }
}
