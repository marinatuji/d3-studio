import React from 'react';
import { lighten, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

class CountryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      database: [],
      name: "",
      topLevelDomain: "",
      capital: "",
      population: "",
      region: "",
      subregion: "",
      nativeName: "",
      currencies: [],
      languages: [],
      flag: "",
      border: [],
    }
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(res => this.setState({ database: res }))
  }

  render() {
    return (
      <>
        {this.state.database.map(element => {
          return (
            <>
            <h3>{element.name}</h3>
            <img className="Country-flag" src={element.flag}></img>
            </>
          )
        })}
      </>
        )
  }

}

export default CountryList;
