import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Box, Grid, Dialog, TextField, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import { v4 as uuidv4 } from 'uuid';

const CATEGORY_COLOR = {
    green: '#1dc33b',
    yellow: '#f7d400',
    red: '#fd4d39',  
};

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    color:'#0f1e3d',
    cursor: 'pointer',
  },
  title:{
    fontSize:'15px',
    textAlign: 'left',
  },
  label:{
    backgroundColor: CATEGORY_COLOR.green,
    padding: '4px',
    width: '37px',
    borderRadius: '5px',
    marginBottom: '5px'
  },
  editIcon:{
    fontSize:'15px',
    visibility: 'hidden',
  },
  closeIcon:{
    fontSize:'15px',
    cursor:'pointer',
  },
}));

const TaskCardForm = ({
  task,
  open,
  onClose,
  onSave,
  onCancel,
}) => {
  const classes = useStyles();
  const newTask = () => ({
    id: uuidv4(), 
    labelColor: 'green',
    description: '',
  });
  const [ taskInput, setTaskInput ] = useState({...task});
  useEffect(() => {
    if(!open){
      setTaskInput(newTask());
    } else {
      setTaskInput({...task})
    }
  },[open, task]);
  const CardGrid = () => {
    return(
      <form 
      id="taskForm"
      onSubmit={(event)=>{
        event.preventDefault();
        onSave({
          ...taskInput,
          description: event.target[0].value
        });
      }}>
        <Paper className={classes.paper} >
          <Grid container spacing={0}>
              <Grid item xs={11}>
                <Box component="div" className={classes.label} style={{backgroundColor: CATEGORY_COLOR[task.labelColor]}} />
              </Grid>
              <Grid item xs={1}>
                <CloseIcon
                  className={classes.closeIcon} 
                  onClick={()=> onClose()}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="taskDescriptionInput"
                  multiline
                  rows={4}
                  variant="outlined"
                  defaultValue={taskInput.description}
                />  
              </Grid>
              <Grid item xs={3}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  type="submit">
                  Save
                </Button>
              </Grid>
              <Grid item xs={9}>
                <Button variant="contained" color="secondary" onClick={onCancel}>
                  Cancel
                </Button> 
              </Grid>
          </Grid>
        </Paper>
      </form>
    );
  }
  return (
    <Dialog aria-labelledby="task-edit" open={open} onClose={onClose}>
      <CardGrid />
    </Dialog>
  );
}

const taskShape = PropTypes.shape({
  id: PropTypes.string,
  labelColor: PropTypes.oneOf(['green', 'yellow', 'red']),
  description: PropTypes.string
});

TaskCardForm.propTypes = {
    task: taskShape,
    onClose: PropTypes.func,
    onSave: PropTypes.func,
    onCancel: PropTypes.func,
    open: PropTypes.bool 
};

export default TaskCardForm;
