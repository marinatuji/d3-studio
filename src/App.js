import React from 'react';
import {BrouserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Detail from './Detail'
import InputSearch from './InputSearch';

function App() {
  return (
    <div className="App">
      <h1 className="title">Where in the world?</h1>
      <InputSearch></InputSearch>
    </div>
  );
}

export default App;
