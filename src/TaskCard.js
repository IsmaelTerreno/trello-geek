import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Box } from '@material-ui/core';
import PropTypes from 'prop-types';

const CATEGORY_COLOR = {
    green: '#1dc33b',
    yellow: '#f7d400',
    red: '#fd4d39',  
};

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    margin: theme.spacing(1),
  },
  title:{
    fontSize:'15px',
    color:'#0f1e3d',
    textAlign: 'left',
  },
  label:{
    backgroundColor: CATEGORY_COLOR.green,
    padding: '4px',
    width: '37px',
    borderRadius: '5px',
    marginBottom: '5px'
  }
}));

const TaskCard = ({
    labelColor, 
    description
}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
        <Box component="div" className={classes.label} style={{backgroundColor: CATEGORY_COLOR[labelColor]}} />
        <Typography  
        className={classes.title}
        variant="body2"
        >
            {description}
        </Typography>
    </Paper>
  );
}

TaskCard.propTypes = {
    labelColor: PropTypes.oneOf(['green', 'yellow', 'red']),
    description: PropTypes.string
};

export default TaskCard;
