import React from 'react';

const renderRows = (list) => {
  return list.map(todo => {
    return <tr key={todo._id}>
      <td>{todo.description}</td>
    </tr>
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
        { renderRows(list) }
      </tbody>
    </table>
  )
}
