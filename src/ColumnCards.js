import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
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
  }
}));

const Droppable = ({children, onDragItemTask})=>{
  const [ { isOver }, drop] = useDrop(
    () => ({
      accept: ItemTypes.TASK,
      drop: (item) => {
        const dataDroppable = children.props.task;
        const dataDragable = item;
        onDragItemTask(dataDroppable, dataDragable);
      },
      canDrop: (item) => item.id !== children.props.task.id,
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
        backgroundColor: (isOver) ? '#ccc': 'transparent',
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
}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
        <Typography  
        className={classes.title}
        variant="h6"
        >
            {title}
        </Typography>
        {
           cards.length > 0 && 
           cards.map((task)=> {
            return(
                <Droppable 
                  key={task.id}
                  onDragItemTask={onDragItemTask}
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
};

export default ColumnCards;
