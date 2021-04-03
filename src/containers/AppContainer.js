import { connect } from 'react-redux';
import App from '../App';
import { setTaskList } from '../redux/actions/task';
import { 
    getTaskList,
} from "../redux/reducers/task";

const mapStateToProps = state => {
    return {
        columnTasks: getTaskList(state),
    }
};


const mapDispatchToProps = dispatch => {
    return {
        onAddCard: (columnTasks, column, idx)=> {
            column.tasks.push({
                labelColor: 'green',
                description: '',
            });
            columnTasks[idx] = column;
            dispatch(setTaskList(columnTasks));
        },
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);