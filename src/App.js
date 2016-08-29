import React, { Component } from 'react';
import _ from 'lodash';

import './styles/App.less';
import TodoList from './components/todo-list';
import CreateTodo from './components/create-todo'

const todos = [
  {
    task: 'make react app',
    isCompleted: false
  },
  {
    task: 'make dinner',
    isCompleted: true
  }
];

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
          todos
      };
  }

  render() {
    return (
      <div>
        <CreateTodo createTask={this.createTask.bind(this)} />
        <TodoList todos = {this.state.todos}
                  toggleTask = {this.toggleTask.bind(this)}
                  saveTask = {this.saveTask.bind(this)}
        />
      </div>
    );
  }

  toggleTask(task) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === task);
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({todos:this.state.todos})
  }

  createTask(task) {
    this.state.todos.push({
      task,
      isCompleted: false
    })

    this.setState({todos: this.state.todos })
  }

  saveTask(oldTask, newTask) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
    foundTodo.task = newTask;
    setState({todos: this.state.todos})
  }
}

export default App;
