import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './css/App.css';
import Header from './components/Header.js';
import HeaderExtended from './components/HeaderExtended.js';
import Main from './components/Main';
import Footer from './components/Footer';
import Identifier from './components/Identifier';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <HeaderExtended />
        <Main />
        <Footer />
        <Identifier />
      </div>
    </Router>
  );
}

export default App;
