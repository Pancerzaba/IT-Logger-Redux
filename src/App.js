import React, { Fragment, useEffect } from 'react';
import SearchBar from './components/layout/SearchNavbar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';

import M from 'materialize-css';
import './App.css';

const App = () => {
  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
