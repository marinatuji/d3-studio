import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/Grid';
// import CardDetail from './CardDetail';
class InputSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      database: [],
      name: "",
    }
  }


  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(res => this.setState({ database: res }))
  }

  handleTermChange(event) {
    const newName = event.target.value;
    this.setState({name: newName});
    console.log(this.state.name);
  }

  search() {
    this.props.onSearch(this.state.name);
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.search();
    }
  }

  render() {
    return (
      <div>
        <FormControl className="Container-input" autoComplete="off" noValidate
          style={{ margin: 1, flexWrap: "wrap" }} >
          <TextField
            alignItems="flex-end"
            className="Input-textfield"
            style={{ width: "85%", fontFamily: "Nunito sans", marginLeft: "7%" }}
            id="input-with-icon-grid"
            placeholder="Search for a country..."
            // label="Search for a country..."
            type="text"
            InputProps={{
              startAdornment: <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }}
            onChange={this.handleTermChange} onKeyUp={this.handleKeyPress.bind(this)}
            margin="dense"
            variant="outlined"
          />
        </FormControl>
      </div>

    )
  }
}

export default InputSearch;