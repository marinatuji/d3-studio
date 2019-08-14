import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(1),
    // display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(7),
    marginRight: theme.spacing(7),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // dense: {
  //   marginTop: theme.spacing(2),
  // },
}));

export default function InputSearch() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    country: '',
  });

  const handleChange = country => event => {
    setValues({ ...values, [country]: event.target.value });
  };

  return (
    <div>
    <FormControl className={classes.container} autoComplete="off" noValidate >
    <Grid container spacing={1} alignItems="flex-end">
      <Grid item>
        <SearchIcon />
      </Grid>
      <Grid item>
        <TextField
          alignItems="flex-end"
          className={classes.textField}
          id="input-with-icon-grid"
          label="Search for a country..."
          type="text"
          onChange={handleChange('country')}
          margin="normal"
        variant="outlined"
        />
      </Grid>
    </Grid>
    </FormControl>
    </div>

  )
}

// class InputSearch extends React.Component {

//   state = {
//     country: ''
//   }

//   handleChange(e) {
//     console.log(e);
//     this.setState({
//       country: e.target.value
//     });
//   }


//   handleClick() {
//     alert(this.state.texto)
//   }

//   render() {

//     return <div>
//       <input type="text" placeholder="Search for a country..." onChange={this.handleChange.bind(this)} />
//       <div>{this.state.text}</div>
//     </div>
//   }

// }

// export default InputSearch;