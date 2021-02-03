import React from "react";
import logo from './logo.svg';
import './App.css';
import JumboTron from './components/jumbotron'
import SearchBar from './components/searchBar';
import Table from './components/table';

function App() {
  return (
    <React.Fragment>
      <JumboTron />

      <Table />

    </React.Fragment>
  );
}

export default App;
