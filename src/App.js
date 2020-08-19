import React, {Fragment, useEffect} from 'react';
import SearchBar from './components/layout/SearchNavbar';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App=()=> {
  useEffect(()=>{
    //Init Materialize JS
    M.AutoInit();
  })
  return <Fragment className="App">
    <SearchBar/>
     My App
    </Fragment>
};

export default App;
