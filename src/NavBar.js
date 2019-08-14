import React from 'react';
import { makeStyles, hslToRgb } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { pink } from '@material-ui/core/colors';
// import { ThemeProvider } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // backgroundColor: hsl(0,0,100)
  },
  navTitle: {
    marginLeft: theme.spacing(3),
  }
}));

export default function ComponentNavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <AppBar position="static" color="white">
        <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.navTitle}>
              Where in the world?
            </Typography>
        </Toolbar>
      </AppBar>
    
    </div>
  );
}