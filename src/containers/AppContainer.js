import { connect } from 'react-redux';
import App from '../App';
import { 
    setTaskList, 
    setCurrentTask,
    setEditionMode,
    saveTask,
    replaceOrderTask,
    renameColumnById,
    deleteTask,
} from '../redux/actions/task';
import { 
    getTaskList,
    getCurrentTask,
    getIsEditionMode,
} from "../redux/reducers/task";
import { v4 as uuidv4 } from 'uuid';

const mapStateToProps = state => {
    return {
        columnTasks: getTaskList(state),
        currentTask: getCurrentTask(state),
        isEditionMode: getIsEditionMode(state),
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAddTask: (columnTasks, idx)=> {
            const newTask = {
                id: uuidv4(), 
                labelColor: 'green',
                description: '',
            };
            columnTasks[idx].tasks.push(newTask);
            dispatch(setTaskList(columnTasks));
            dispatch(setEditionMode(true));
            dispatch(setCurrentTask(newTask));
        },
        onDeleteTask: (taskId)=> {
           dispatch(deleteTask(taskId));
           dispatch(setEditionMode(false)); 
        },
        onEditCard:(task)=> {
            dispatch(setEditionMode(true));
            dispatch(setCurrentTask(task));
        },
        onCancelEdit:()=> {
            dispatch(setEditionMode(false));
        },
        onSaveTask: (task)=> {
            dispatch(saveTask(task));    
            dispatch(setEditionMode(false));
        },
        onDragItemTask: (originalTask, newTask, originalTaskColumnId, newTaskColumnId)=> {
            dispatch(replaceOrderTask({...originalTask}, {...newTask}, originalTaskColumnId, newTaskColumnId));
        },
        onEditColumnName:(id, newName)=> {
            dispatch(renameColumnById(id, newName));    
        },
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);