import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../template/grid';
import IconButton from '../template/iconButton';
import { changeDescription, search, add } from './todoActions';

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.keyHandler = this.keyHandler.bind(this);
  }

  componentWillMount() {
    this.props.search();
  }

  keyHandler(e) {
    if (e.key === 'Enter') {
      e.shiftKey ? this.props.search() : this.props.add(this.props.description);
    } else if (e.key === 'Escape') {
      props.handleClear();
    }
  }

  render() {
    return (
      <div role='form' className='todo-form'>
        <Grid cols='12 9 10'>
          <input id='description' className='form-control'
            placeholder='Add nova tarefa' onChange={this.props.changeDescription} onKeyUp={this.keyHandler}
            value={this.props.description} />
        </Grid>
        <Grid cols='12 9 10'>
          <IconButton style='primary' icon='plus' onClick={() => this.props.add(this.props.description)} />
          <IconButton style='info' icon='search' onClick={this.props.search} />
          <IconButton style='default' icon='close' onClick={this.props.handleClear} />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({description: state.todo.description});
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search, add }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
