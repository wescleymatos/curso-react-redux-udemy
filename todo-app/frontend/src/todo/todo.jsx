import React, { Component } from 'react';

import PageHeader from '../template/pageHeader';

class Todo extends Component {
    render() {
      return (
        <div>
          <PageHeader name='Tarefas' small='Cadastro' />
        </div>
      );
    }
}

export default Todo;
