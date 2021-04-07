import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid , Typography} from '@material-ui/core';
import ColumnCards from './ColumnCards';
import TaskCardForm from './TaskCardForm';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    flexGrow: 1,
  },
  titleApp:{
    color: '#ffffff',
    fontSize: '30px',
    paddingLeft: '5px',
    fontWeight: 400,
    marginBottom: '5px',
    marginTop: '10px',
  }
}));

const App = ({
  columnTasks, 
  onAddTask,
  onDeleteTask, 
  onEditCard,
  onCancelEdit, 
  currentTask,
  isEditionMode,
  onSaveTask,
  onDragItemTask,
  onEditColumnName,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item >
          <Typography
          className={classes.titleApp}
          variant="h1"
          >
            TASK MANAGEMENT BOARD
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {
          columnTasks.length > 0 &&
          columnTasks.map((column, idx)=>{
            return(
              <Grid item xs key={column.id}>
                <ColumnCards 
                title={column.title} 
                cards={column.tasks} 
                onAddTask={()=> onAddTask(columnTasks, idx)}
                onEditCard={(task)=> onEditCard(task)}
                onDragItemTask={onDragItemTask}
                columnTasks={columnTasks}
                columnId={column.id}
                onEditColumnName={onEditColumnName}
                />
              </Grid>
            );
          })
        }
      </Grid>
      { 
        currentTask && 
        <TaskCardForm 
          task={currentTask}
          onSave={(task)=> onSaveTask(task)}
          onDelete={()=> onDeleteTask(currentTask.id)}
          onClose={onCancelEdit}
          onCancel={onCancelEdit}
          open={isEditionMode}
        />
      }
    </div>
  );
}

App.defaultProps = {
  columnTasks:[],
};

App.propTypes = {
  columnTasks: PropTypes.array,
  onAddTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onEditCard: PropTypes.func.isRequired,
  currentTask: PropTypes.shape({
    id: PropTypes.string,
    labelColor: PropTypes.string,
    description: PropTypes.string
  }),
  isEditionMode: PropTypes.bool,
  onCancelEdit: PropTypes.func.isRequired,
  onSaveTask: PropTypes.func.isRequired,
  onDragItemTask: PropTypes.func.isRequired,
  onEditColumnName: PropTypes.func.isRequired,
};

export default App;
