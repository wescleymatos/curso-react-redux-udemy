import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import IconButton from '../template/iconButton';
import { markAsDone, markAsPending, remove } from './todoActions';


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
        { renderRows(list, props.remove, props.markAsDone, props.markAsPending) }
      </tbody>
    </table>
  )
}

const mapStateToProps = state => ({list: state.todo.list});
const mapDispatchToProps = dispatch => bindActionCreators({ markAsDone, markAsPending, remove }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
