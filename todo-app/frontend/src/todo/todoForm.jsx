import React from 'react';

export default props => {
  return (
    <div role='form' className='todo-form'>
      <div className='col-xs-12 col-sm-9 col-md-10'>
        <input id='description' className='form-control' placeholder='Add nova tarefa' />
      </div>
      <div className='col-xs-12 col-sm-9 col-md-10'>
        <button className='btn btn-primary'>
          <i className='fa fa-plus'></i> Salvar
        </button>
      </div>
    </div>
  );
};
