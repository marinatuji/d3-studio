import React from 'react';

class InputSearch extends React.Component {

  state = {
    country: ''
  }

  handleChange(e) {
    console.log(e);
    this.setState({
      country: e.target.value
    });
  }

  
  handleClick(){
    alert(this.state.texto) 
   }

  render() {

    return <div>
      <input type="text" onChange={this.handleChange.bind(this)}/>
      <div>{this.state.text}</div>
      <button onClick={this.handleClick.bind(this)}>Search for a country...</button>
    </div>
  }

}

export default InputSearch;