import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Divider } from 'semantic-ui-react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import StoriesList from './components/Stories/StoriesList';

function App() {
  return (
    <>
      <Divider hidden />
      <SearchBar />
      <Divider />
      <StoriesList />
    </>
  );
}

export default App;
