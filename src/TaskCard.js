import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Box, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';

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
}));

const TaskCard = ({
    labelColor, 
    description
}) => {
  const classes = useStyles();
  const [ isEditHover, setIsEditHover ] = useState(false);
  return (
    <Paper 
        className={classes.paper} 
        onMouseEnter={()=> setIsEditHover(true)} 
        onMouseLeave={()=> setIsEditHover(false)}
    >
        <Grid container spacing={0}>
            <Grid item xs={11}>
                <Box component="div" className={classes.label} style={{backgroundColor: CATEGORY_COLOR[labelColor]}} />
            </Grid>
            <Grid item xs={1}>
                <EditIcon 
                className={classes.editIcon} 
                style={{visibility: (isEditHover) ? 'visible' : 'hidden' }}
                />
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

TaskCard.propTypes = {
    labelColor: PropTypes.oneOf(['green', 'yellow', 'red']),
    description: PropTypes.string
};

export default TaskCard;
