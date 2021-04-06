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

const ColumnCards = ({
  title, 
  cards, 
  onAddCard,
  onEditCard,
}) => {
  const classes = useStyles();
  const canDropTask = (drop)=>{
    return true;
  };
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: ItemTypes.TASK,
      drop: () => console.log('is drop'),
      canDrop: () => canDropTask(drop),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop()
      })
    })
  )
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
                <div
                  key={task.id}
                  ref={drop}
                  style={{
                    borderRadius:'5px',
                    transition: 'background-color 0.5s',
                    backgroundColor: (!isOver && canDrop) ? '#ccc': 'transparent',
                  }}
                >
                  <TaskCard
                    task={task}
                    onClickEdit={()=> onEditCard(task)}
                  />
                </div>
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
    title: PropTypes.string,
    cards: PropTypes.arrayOf(PropTypes.shape({
        labelColor: PropTypes.string,
        description: PropTypes.string
    })),
    onAddCard: PropTypes.func,  
};

export default ColumnCards;
