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
    this.handleRemove = this.handleRemove.bind(this);
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.refresh();
  }

  refresh(description = '') {
    const search = description ? `&description__regex=/${description}/` : '';

    axios
      .get(`${URL}?sort=-createdAt${search}`)
      .then(result => this.setState({ description, list: result.data}));
  }

  handleChange(e) {
    this.setState({
      description: e.target.value
    });
  }

  handleSearch() {
    this.refresh(this.state.description);
  }

  handleAdd() {
    const description = this.state.description;
    axios
      .post(URL, { description })
      .then(result => this.refresh());
  }

  handleRemove(todo) {
    axios
    .delete(`${URL}/${todo._id}`)
      .then(result => this.refresh(this.state.description));
  }

  handleMarkAsDone(todo) {
    axios
      .put(`${URL}/${todo._id}`, { done: true })
      .then(result => this.refresh(this.state.description));
  }

  handleMarkAsPending(todo) {
    axios
      .put(`${URL}/${todo._id}`, { done: false })
      .then(result => this.refresh(this.state.description));
  }

  render() {
    return (
      <div>
        <PageHeader name='Tarefas' small='Cadastro' />
        <TodoForm
          description={this.state.description}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          handleAdd={this.handleAdd} />
        <TodoList
          handleRemove={this.handleRemove}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending}
          list={this.state.list} />
      </div>
    );
  }
}

export default Todo;
