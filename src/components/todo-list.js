import React from 'react';
import _ from 'lodash';
import TodoListItem from './todo-list-item'
class TodoList extends React.Component {
  renderItems() {
    const props = _.omit(this.props, 'todos');

    return _.map(this.props.todos, (todo, index) => <TodoListItem key={index} {...todo} {...props}/> )
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    )
  }
}

export default TodoList;
