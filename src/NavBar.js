import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  }
});

export default function ComponentNavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <AppBar position="static" color="default">
        <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.navTitle}>
              Where in the world?
            </Typography>
        </Toolbar>
      </AppBar>
    
    </div>
  );
}