import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import { ThemeProvider } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // backgroundColor: hsl(0,0,100)
  },
  navTitle: {
    marginLeft: theme.spacing(2),
    fontFamily: "Nunito sans",
    fontWeight: "bold",
    fontSize: 16,
  }
}));

export default function ComponentNavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <AppBar position="static" color="white">
        <Toolbar>
            <Typography variant="h6" className={classes.navTitle}>
              Where in the world?
            </Typography>
        </Toolbar>
      </AppBar>
    
    </div>
  );
}