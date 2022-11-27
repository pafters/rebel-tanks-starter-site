
import NavBar from './components/navigation/NavBar';
import Main from './components/main/Main';
import Contacts from './components/contacts/Contacts'
import HelpPage from './components/helpPage/HelpPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as React from 'react';

import './App.css';

function App() {

  return (
    <div>
      <NavBar />

      <Router>
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route exact path='/contacts' element={<Contacts />} />
          <Route exact path='/help' element={<HelpPage />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
