import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Box, Grid, Dialog } from '@material-ui/core';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';

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

const TaskCard = ({
    labelColor, 
    description,
    onEditCard
}) => {
  const classes = useStyles();
  const [ isEditHover, setIsEditHover ] = useState(false);
  const [ isEditionMode, setIsEditionMode ] = useState(false);
  const CardGrid = () =>{
    return(
      <Paper className={classes.paper} >
        <Grid container spacing={0}>
            <Grid item xs={11}>
                <Box component="div" className={classes.label} style={{backgroundColor: CATEGORY_COLOR[labelColor]}} />
            </Grid>
            <Grid item xs={1}>
                {
                  isEditionMode && 
                  <CloseIcon
                    className={classes.closeIcon} 
                    onClick={()=> setIsEditionMode(false)}
                  />
                }
                {
                  !isEditionMode &&
                  <EditIcon 
                  className={classes.closeIcon} 
                  style={{visibility: !isEditHover ? 'hidden' : 'visible' }}
                  />
                }
            </Grid>
            <Grid item xs={12}>
                <Typography
                className={classes.title}
                variant="body2"
                >
                  {description}
                </Typography>
            </Grid>
        </Grid>
      </Paper>
    );
  }
  return (
    <div  
        onMouseEnter={()=> setIsEditHover(true)} 
        onMouseLeave={()=> setIsEditHover(false)}
        onClick={()=>{
          onEditCard();
          if(!isEditionMode){ setIsEditionMode(!isEditionMode); } 
        }}
    >
        { !isEditionMode && <CardGrid />}
        { isEditionMode &&
          <Dialog aria-labelledby="task-edit" open={isEditionMode} onClose={()=> setIsEditionMode(false)}>
            <CardGrid />
          </Dialog>
        }
    </div>
  );
}

TaskCard.propTypes = {
    labelColor: PropTypes.oneOf(['green', 'yellow', 'red']),
    description: PropTypes.string,
    onEditCard: PropTypes.func,
};

export default TaskCard;
