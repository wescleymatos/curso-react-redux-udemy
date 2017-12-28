import React from 'react';

import Grid from '../template/grid';
import IconButton from '../template/iconButton';

export default props => {
  return (
    <div role='form' className='todo-form'>
      <Grid cols='12 9 10'>
        <input id='description' className='form-control' placeholder='Add nova tarefa' />
      </Grid>
      <Grid cols='12 9 10'>
        <IconButton style='primary' icon='plus' />
      </Grid>
    </div>
  );
};
