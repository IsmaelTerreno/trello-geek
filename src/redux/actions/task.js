export const SET_CURRENT_TASK = 'SET_CURRENT_TASK';
export const SET_TASK_LIST = 'SET_TASK_LIST';
export const SET_EDITION_MODE = 'SET_EDITION_MODE';
export const SAVE_TASK = 'SAVE_TASK';
export const REPLACE_ORDER_TASK = 'REPLACE_ORDER_TASK';

export const setCurrentTask = (task) => {
  return {
    type: SET_CURRENT_TASK,
    task
  };
};

export const setTaskList = (list) => {
  return {
    type: SET_TASK_LIST,
    list
  };
};

export const setEditionMode = (isEditionMode) => {
  return {
    type: SET_EDITION_MODE,
    isEditionMode
  };
};

export const saveTask = (task) => {
  return {
    type: SAVE_TASK,
    task
  };
};

export const replaceOrderTask = (originalTask, newTask, originalTaskColumnId, newTaskColumnId) => {
  return {
    type: REPLACE_ORDER_TASK,
    originalTask,
    newTask,
    originalTaskColumnId,
    newTaskColumnId,
  };
};
