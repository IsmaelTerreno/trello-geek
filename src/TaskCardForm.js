import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Paper, 
  Box, 
  Grid, 
  Dialog, 
  TextField, 
  Button, 
  Select,
  MenuItem,
 } from '@material-ui/core';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const CATEGORY_COLOR = {
    green: '#1dc33b',
    yellow: '#f7d400',
    red: '#fd4d39',  
};
const menuOptions = Object.keys(CATEGORY_COLOR); 
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
    padding: '14px',
    width: '37px',
    borderRadius: '5px',
    marginLeft:'5px',
  },
  descriptionInput:{
    marginTop: '15px',
    marginBottom: '15px'
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
  onDelete,
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
      data-testid="TaskCardForm"
      onSubmit={(event)=>{
        event.preventDefault();
        onSave({
          ...taskInput,
          labelColor: event.target[0].value,
          description: event.target[1].value,
        });
      }}>
        <Paper className={classes.paper} >
          <Grid container spacing={0}>
              <Grid item xs={12}>
                <Select
                  fullWidth
                  id="categoryColorInput"
                  defaultValue={taskInput.labelColor}
                >
                  { 
                    menuOptions.map((menuItem)=>{
                      return(
                        <MenuItem value={menuItem}>
                          <Box component="div" className={classes.label} style={{backgroundColor: CATEGORY_COLOR[menuItem]}} />
                        </MenuItem>
                      );
                    })
                  }
                </Select>  
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="taskDescriptionInput"
                  multiline
                  rows={4}
                  fullWidth
                  variant="outlined"
                  defaultValue={taskInput.description}
                  className={classes.descriptionInput} 
                />  
              </Grid>
              <Grid item xs={9}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  type="submit">
                  Save
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button variant="contained" onClick={onDelete}>
                  Delete
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
    onDelete: PropTypes.func,
    onCancel: PropTypes.func,
    open: PropTypes.bool 
};

export default TaskCardForm;
