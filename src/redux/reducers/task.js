import {
  SET_CURRENT_TASK,
  SET_TASK_LIST,
  SET_EDITION_MODE,
  SAVE_TASK,
  REPLACE_ORDER_TASK,
} from '../actions/task';
import {createSelector} from 'reselect';
import { v4 as uuidv4 } from 'uuid';



let columnTasks = [
  {
    id: uuidv4(),
    title: "Column 1",
    order: 1,
    tasks: [
      {
          id: uuidv4(),
          labelColor: 'green',
          description: 'This is a Todo list with items that can be marked off',
          order: 1,
      },
      {
          id: uuidv4(),
          labelColor: 'yellow',
          description: 'You can categorize each item with a Color (Red, Yellow, Green)',
          order: 2,
      },
      {
          id: uuidv4(),
          labelColor: 'red',
          description: 'Hover on a item to edit',
          order: 3
      },
    ],  
  },
  {
    id: uuidv4(),
    title: "Column 2",
    order: 2,
    tasks: [
      {
          id: uuidv4(),
          labelColor: 'green',
          description: 'You can click and drag items up and down the list',
          order: 1,
      },
      {
          id: uuidv4(),
          labelColor: 'yellow',
          description: 'As well drag items from one column to the other',
          order: 2,
      }
    ],  
  },
  {
    id: uuidv4(),
    title: "DONE",
    order: 3,
    tasks: [
      {
          id: uuidv4(),
          labelColor: 'red',
          description: 'As well rename the Columns',
          order: 1,
      }
    ]  
  }
];

const initState = {
  current: null,
  list: columnTasks,
  isEditionMode: false,
};
const byTaskOrder = (a,b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0);

export const TaskReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_CURRENT_TASK:
      return {
        ...state,
        current: {...action.task}
      };
    case SET_TASK_LIST:
      const taskListSet = {...action.list.map((columnX)=>{
        columnX.tasks = columnX.tasks.sort(byTaskOrder);
        return columnX;
      })};
      return {
        ...state,
        list: taskListSet,
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
        }).sort(byTaskOrder);
        return columnX;
      });
      return {
        ...state,
        list: updatedTaskList,
      };
    case REPLACE_ORDER_TASK:
      const replacedOrderTaskList = {...state}.list.map((columnX)=>{
        const tasksOrdered = columnX.tasks.map((taskX) => {
          let taskUpdate = {...taskX};
          if (taskUpdate.id === action.newTask.id) {
            taskUpdate.order = action.originalTask.order;
          } 
          if (taskUpdate.id === action.originalTask.id) {
            taskUpdate.order = action.newTask.order;
          };
          return taskUpdate; 
        }).sort(byTaskOrder);
        columnX.tasks = tasksOrdered;
        return columnX;
      });
      return {
        ...state,
        list: [...replacedOrderTaskList],
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