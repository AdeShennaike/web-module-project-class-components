import React from 'react';
import TodoList from './TodoList';
import Form from './Form';
import axios from 'axios';

export default class App extends React.Component {
state = {
  tasks:[
    {
      name: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      name: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ]
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

  handleToggle = (task) => {
    this.setState({
      ...this.state,
      tasks: this.state.tasks.map( tsk => {
      if (tsk.name === task){
        return({
          ...tsk,
          completed: !tsk.completed
        })
      }
        else {
          return tsk
        }
      })
    })
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      tasks: this.state.tasks.filter( tsk => {
        if (tsk.completed !== true){
          return tsk
        }
      })
    })
  
  }

  handleAddTask = (newTask) => {
    axios.post('http://localhost:9000/api/todos', newTask)
		.then(res => {
			this.setState({ 
        ...this.state,
        tasks: [...this.state.tasks, res.data.data]
      })
		})
		.catch(err => {
			console.error(err)
		})
	}
    

    
  render() {
    return (
      <div>
        <h1> ToDo List: MVP! </h1>
        <TodoList handleToggle = {this.handleToggle} state = {this.state}/>
        <Form handleClear = {this.handleClear} state = {this.state} handleAddTask = {this.handleAddTask}/>
      </div>
    )
  }
}
