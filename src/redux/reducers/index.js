import { combineReducers } from 'redux';
import { TaskReducer } from './task';

const rootReducer = combineReducers({
  task: TaskReducer,
});

export default rootReducer;
