export const SET_CURRENT_TASK = 'SET_CURRENT_TASK';
export const SET_TASK_LIST = 'SET_CURRENT_TASK';

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

