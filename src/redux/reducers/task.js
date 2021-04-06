import {
  SET_CURRENT_TASK,
  SET_TASK_LIST,
  SET_EDITION_MODE,
  SAVE_TASK,
} from '../actions/task';
import {createSelector} from 'reselect';
import { v4 as uuidv4 } from 'uuid';



const columnTasks = [
  {
    id: uuidv4(),
    title: "Column 1",
    tasks: [
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
    ],  
  },
  {
    id: uuidv4(),
    title: "Column 2",
    tasks: [
      {
          id: uuidv4(),
          labelColor: 'green',
          description: 'You can click and drag items up and down the list',
      },
      {
          id: uuidv4(),
          labelColor: 'yellow',
          description: 'As well drag items from one column to the other',
      }
    ],  
  },
  {
    id: uuidv4(),
    title: "DONE",
    tasks: [
      {
          id: uuidv4(),
          labelColor: 'red',
          description: 'As well rename the Columns',
      }
    ]  
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
    case SAVE_TASK:
      const updatedTaskList = {...state}.list.map((columnX)=>{
        columnX.tasks = columnX.tasks.map((taskX)=>{
          return (taskX.id === action.task.id) ? action.task : taskX; 
        })
        return columnX;
      });
      return {
        ...state,
        list: updatedTaskList,
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