import React from 'react';

import IconButton from '../template/iconButton';


const renderRows = (list, handleRemove) => {
  return list.map(todo => {
    return (
      <tr key={todo._id}>
        <td>{todo.description}</td>
        <td>
          <IconButton style='danger' icon='trash-o' onClick={() => handleRemove(todo)} />
        </td>
      </tr>
    )
  });
};

export default props => {
  const list = props.list || [];

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody>
        { renderRows(list, props.handleRemove) }
      </tbody>
    </table>
  )
}
