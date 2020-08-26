import React, { Fragment, useEffect } from 'react';
import SearchBar from './components/layout/SearchNavbar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModale';
import TechListModal from './components/techs/TechListModal';

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
        <EditLogModal />
        <AddTechModal/>
        <TechListModal/>
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
