import React from 'react';
import InputSearch from './InputSearch';
// import 

class Home extends React.Component {
  state = {
    allCountries: []
  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(res => {
        this.setState({
          allCountries: res
        })
        console.log(this.state.allCountries)
      })
  }

  render() {
    return (
      <div className='App'>
        <ul>
        {this.state.linguagens.map(item => (
          <li key={item.id}>
           <p><b>Country: </b> {item.country}</p>
           <p><b>Bandeira: </b> {item.flag}</p>
          </li>
        ))}
        </ul>
      </div>
    )
  }
}

export default Home;