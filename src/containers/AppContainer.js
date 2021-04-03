import { connect } from 'react-redux';
import App from '../App';
import { 
    getTaskList,
} from "../redux/reducers/task";

const mapStateToProps = state => {
    return {
        columnTasks: getTaskList(state),
    }
};

export default connect(
    mapStateToProps,
    null
)(App);