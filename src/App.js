import React from 'react';
// import {BrouserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import ComponentNavBar from './NavBar'
// import Home from './Home';
// import Detail from './Detail'
import InputSearch from './InputSearch';
// import CountryList from './CountryList';
import CardList from './CardList';
// import Box from '@material-ui/core/Box';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ComponentNavBar className="App-title"></ComponentNavBar>
      </header>
      <section>
        <InputSearch></InputSearch>
      </section>
      <section>
        <CardList/>
        {/* <CountryList /> */}
      </section>
    </div>
  );
}

export default App;
