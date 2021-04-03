import {
  SET_CURRENT_TASK,
  SET_TASK_LIST,
} from '../actions/task';
import {createSelector} from 'reselect';

const MockDataCards = [
  {
      labelColor: 'green',
      description: 'This is a Todo list with items that can be marked off',
  },
  {
      labelColor: 'yellow',
      description: 'You can categorize each item with a Color (Red, Yellow, Green)',
  },
  {
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
};

export const TaskReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_CURRENT_TASK:
      return {
        ...state,
        current: action.task
      };
    case SET_TASK_LIST:
        return {
          ...state,
          list: [...action.list]
        }; 
    default:
      return state;
  }
}

const tasklistSelector = state => state.task.list;
const currentTaskSelector = state => state.task.current;


export const getTaskList = createSelector(
  tasklistSelector,
  list => list
);

export const getCurrentTask = createSelector(
  currentTaskSelector,
  task => task
);
