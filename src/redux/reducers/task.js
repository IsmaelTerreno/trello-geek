import {
  SET_CURRENT_TASK,
  SET_TASK_LIST,
  SET_EDITION_MODE,
} from '../actions/task';
import {createSelector} from 'reselect';
import { v4 as uuidv4 } from 'uuid';

const MockDataCards = [
  {
      id: uuidv4(),
      labelColor: 'green',
      description: 'This is a Todo list with items that can be marked off',
  },
  {
      id: uuidv4(),
      labelColor: 'yellow',
      description: 'You can categorize each item with a Color (Red, Yellow, Green)',
  },
  {
      id: uuidv4(),
      labelColor: 'red',
      description: 'Hover on a item to edit',
  },
];

const columnTasks = [
  {
    title: "Column 1",
    tasks: [...MockDataCards] ,  
  },
  {
    title: "Column 2",
    tasks: [...MockDataCards] ,  
  },
  {
    title: "DONE",
    tasks: [...MockDataCards] ,  
  }
];

const initState = {
  current: null,
  list: columnTasks,
  isEditionMode: false,
};

export const TaskReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_CURRENT_TASK:
      return {
        ...state,
        current: {...action.task}
      };
    case SET_TASK_LIST:
        return {
          ...state,
          list: [...action.list]
        }; 
    case SET_EDITION_MODE:
      return {
        ...state,
        isEditionMode: action.isEditionMode
      };   
    default:
      return state;
  }
}

const tasklistSelector = state => state.task.list;
const currentTaskSelector = state => state.task.current;
const isEditionModeSelector = state => state.task.isEditionMode;


export const getTaskList = createSelector(
  tasklistSelector,
  list => list
);

export const getCurrentTask = createSelector(
  currentTaskSelector,
  task => task
);

export const getIsEditionMode = createSelector(
  isEditionModeSelector,
  isEditionMode => isEditionMode
);