import { connect } from 'react-redux';
import App from '../App';
import { 
    setTaskList, 
    setCurrentTask,
    setEditionMode,
    saveTask,
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
        onAddCard: (columnTasks, idx)=> {
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
        onDragItemTask: (dataDroppable, dataDragable)=> {
            console.log(dataDroppable);
            console.log(dataDragable);
        },
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);