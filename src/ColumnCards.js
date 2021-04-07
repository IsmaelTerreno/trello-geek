import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Box, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import TaskCard, { ItemTypes } from './TaskCard';
import AddIcon from '@material-ui/icons/Add';
import { useDrop } from 'react-dnd';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    backgroundColor:'#ebecf0',
  },
  title:{
    fontSize:'15px',
    color:'#0f1e3d',
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: theme.spacing(1),
  },
  addBtn:{
    color: '#697889',
    marginLeft: theme.spacing(1),
    fontSize:'17px',
    cursor: 'pointer',
  },
  addIcon:{
      position:'relative',
      top:'5px',
  },
  columnNaneInput:{
    padding: '0',
    '& input':{
      padding:'6px'
    }
  },
}));

const Droppable = ({
  children, 
  onDragItemTask, 
  task, 
  columnTasks, 
  columnId,
})=>{
  const [ { isOver }, drop] = useDrop(
    () => ({
      accept: ItemTypes.TASK,
      drop: (item) => {
        const dataDroppable = task;
        let dataDragable = item;
        let dataDragableColumnId = '';
        columnTasks.forEach(columnX => {
          const taskFreshInfo = columnX.tasks.find(x => x.id === item.id);
          if(taskFreshInfo){
            dataDragable = taskFreshInfo;
            dataDragableColumnId = columnX.id;
          }
        });
        onDragItemTask(dataDroppable, dataDragable, dataDragableColumnId, columnId);
      },
      canDrop: (item) => item.id !== task.id,
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      })
    })
  );
  return (
    <div            
      ref={drop}
      style={{
        borderRadius:'5px',
        transition: 'background-color 0.5s',
        backgroundColor: (isOver) ? '#9e9faf': 'transparent',
      }}
    >
      {children}
    </div>
  );
};

const ColumnCards = ({
  title, 
  cards, 
  onAddCard,
  onEditCard,
  onDragItemTask,
  columnTasks,
  columnId,
  onEditColumnName,
}) => {
  const classes = useStyles();
  const [ isEditMode, setIsEditMode ] = useState(false);
  return (
    <Paper className={classes.paper}>
        <Box 
          component="div" 
          onClick={()=>{
            setIsEditMode(true);
          }}
        >
          { 
            isEditMode &&
            <TextField
              id="columnNameInput"
              fullWidth
              variant="outlined"
              className={classes.columnNaneInput} 
              defaultValue={title}
              onBlur={(evt)=> {
                setIsEditMode(false);
                onEditColumnName(columnId, evt.target.value);
              }}
            />
          }
          { 
            !isEditMode &&
            <Typography  
            className={classes.title}
            variant="h6"
            >
                {title}
            </Typography>
          }
        </Box>
        {
           cards.length > 0 && 
           cards.map((task)=> {
            return(
                <Droppable 
                  key={task.id}
                  onDragItemTask={onDragItemTask}
                  task={task}
                  columnTasks={columnTasks}
                  columnId={columnId}
                >
                  <TaskCard
                    task={task}
                    onClickEdit={()=> onEditCard(task)}
                  />
                </Droppable>
            );
           })
        }
        <Typography  
        className={classes.addBtn}
        variant="subtitle2"
        onClick={onAddCard}
        >
            <AddIcon className={classes.addIcon}/> Add another card
        </Typography>
    </Paper>
  );
}

ColumnCards.defaultProps = {
    title:'',
    cards:[],
};

ColumnCards.propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.shape({
        labelColor: PropTypes.string,
        description: PropTypes.string
    })),
    onAddCard: PropTypes.func.isRequired,
    onDragItemTask: PropTypes.func.isRequired,
    columnTasks: PropTypes.array.isRequired,
    columnId: PropTypes.string.isRequired,
    onEditColumnName: PropTypes.string.isRequired,
};

export default ColumnCards;
