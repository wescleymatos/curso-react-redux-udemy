import React from 'react';
import { connect } from 'react-redux';

import IconButton from '../template/iconButton';


const renderRows = (list, handleRemove, handleMarkAsDone, handleMarkAsPending) => {
  return list.map(todo => {
    return (
      <tr key={todo._id}>
        <td className={todo.done ? 'marked' : ''}>{todo.description}</td>
        <td>
          <IconButton style='success' icon='check' onClick={() => handleMarkAsDone(todo)} hide={todo.done} />
          <IconButton style='warning' icon='undo' onClick={() => handleMarkAsPending(todo)} hide={!todo.done} />
          <IconButton style='danger' icon='trash-o' onClick={() => handleRemove(todo)} />
        </td>
      </tr>
    )
  });
};

const TodoList = props => {
  const list = props.list || [];

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Descrição</th>
          <th className='table-actions'>Ações</th>
        </tr>
      </thead>
      <tbody>
        { renderRows(list, props.handleRemove, props.handleMarkAsDone, props.handleMarkAsPending) }
      </tbody>
    </table>
  )
}

const mapStateToProps = state => ({list: state.todo.list});
export default connect(mapStateToProps)(TodoList);
