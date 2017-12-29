import React, { Component } from 'react';
import axios from 'axios';

import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

const URL = 'http://localhost:3003/api/todos';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {description: '', list: []};
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      //...this.state,
      description: e.target.value
    });
  }

  handleAdd() {
    const description = this.state.description;
    axios
      .post(URL, { description })
      .then(result => console.log(result));
  }

  render() {
    return (
      <div>
        <PageHeader name='Tarefas' small='Cadastro' />
        <TodoForm description={this.state.description} handleChange={this.handleChange} handleAdd={this.handleAdd} />
        <TodoList />
      </div>
    );
  }
}

export default Todo;
