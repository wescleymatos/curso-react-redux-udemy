import { combineReducers } from 'redux';
import todoreducer from '../todo/todoReducer';

const rootReducer = combineReducers({
  todo: todoreducer
});

export default rootReducer;
