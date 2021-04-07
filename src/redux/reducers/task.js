import {
  SET_CURRENT_TASK,
  SET_TASK_LIST,
  SET_EDITION_MODE,
  SAVE_TASK,
  REPLACE_ORDER_TASK,
  RENAME_COLUMN_NAME,
  DELETE_TASK,
} from '../actions/task';
import {createSelector} from 'reselect';
import { v4 as uuidv4 } from 'uuid';



let columnTasksDemoData = [
  {
    id: uuidv4(),
    title: "Todo",
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
    title: "In progress",
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
    title: "Done",
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
  list: columnTasksDemoData,
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
      const taskListSet = {...action}.list.map((columnX)=>{
        columnX.tasks = columnX.tasks.sort(byTaskOrder);
        return columnX;
      });
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
      const allColumns = {...state}.list;
      const orderSameColumn = (column) => {
        const taskA = column.tasks.find(x => x.id === action.newTask.id);
        const taskB = column.tasks.find(x => x.id === action.originalTask.id);
        if(taskA && taskB){
          taskA.order = action.originalTask.order;
          taskB.order = action.newTask.order;
          column.tasks = column.tasks.sort(byTaskOrder);
        }
        return column;
      };
      let replacedOrderTaskList = allColumns;
      if( action.originalTaskColumnId === action.newTaskColumnId ){
        replacedOrderTaskList = allColumns.map((columnX)=> {
          if( action.originalTaskColumnId === columnX.id){
            return orderSameColumn(columnX);
          } 
          return columnX;
        }); 
      }
      if( action.originalTaskColumnId !== action.newTaskColumnId ){
        replacedOrderTaskList = allColumns.map((columnX)=> {
          if( action.originalTaskColumnId === columnX.id){
            columnX.tasks = columnX.tasks.filter(x => x.id !== action.newTask.id).sort(byTaskOrder);
          }
          if( action.newTaskColumnId === columnX.id){
            
            const insertTask = {
              ...action.newTask,
              order: action.originalTask.order,
            };
            columnX.tasks.push(insertTask);
            columnX.tasks = columnX.tasks.map(taskX => {
              if(taskX.id === action.originalTask.id){
                taskX.order = columnX.tasks.length;
              }
              return taskX
            });
            columnX.tasks = columnX.tasks.sort(byTaskOrder);
          } 
          return columnX;
        });
      }
      return {
        ...state,
        list: [...replacedOrderTaskList],
      }; 
    case RENAME_COLUMN_NAME:
      const columnUpdate = {...state}.list.map((columnX)=>{
        if(columnX.id === action.id){
          columnX.title = action.newName
        }
        return columnX;
      });
      return {
        ...state,
        list: [...columnUpdate],
      };
    case DELETE_TASK:
      const deletedItemTaskList = {...state}.list.map((columnX)=> {
        columnX.tasks = columnX.tasks.filter(x => x.id !== action.taskId).sort(byTaskOrder);
        return columnX;
      });  
      return {
        ...state,
        list: [...deletedItemTaskList],
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