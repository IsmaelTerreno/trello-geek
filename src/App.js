import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import './App.css';
import ColumnCards from './ColumnCards'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    flexGrow: 1,
    backgroundColor:'#818c91',
  },
}));

const MockDataCards = [
  {
      labelColor: 'green',
      description: 'This is a Todo list with items that can be marked off',
  },
  {
      labelColor: 'yellow',
      description: 'You can categorize each item with a Color (Red, Yellow, Green)',
  },
  {
      labelColor: 'red',
      description: 'Hover on a item to edit',
  },
];
const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <ColumnCards title="Column 1" cards={MockDataCards} />
        </Grid>
        <Grid item xs>
          <ColumnCards title="Column 2" />
        </Grid>
        <Grid item xs>
          <ColumnCards title="DONE" />
        </Grid> 
      </Grid>
    </div>
  );
}

export default App;
