import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import './App.css';
import ColumnCards from './ColumnCards';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    flexGrow: 1,
    backgroundColor:'#818c91',
  },
}));

const App = ({columnTasks}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {
          columnTasks.length > 0 &&
          columnTasks.map((column, idx)=>{
            return(
              <Grid item xs key={'task-column-' + idx}>
                <ColumnCards 
                title={column.title} 
                cards={column.tasks} 
                onAddCard={()=> console.log('add card.')}
                />
              </Grid>
            );
          })
        }
      </Grid>
    </div>
  );
}

App.defaultProps = {
  columnTasks:[],
};

App.propTypes = {
  columnTasks: PropTypes.array
};

export default App;
