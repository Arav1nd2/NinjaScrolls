import React from 'react';
import './App.css';
import Navbar from './components/Main-Navigation/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/login';


function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <Switch>
        <Route exact path = '/login' component = {Login} />
        <Route exact path = '/signup' component = {null} />
        <Route exact path = '/books' component = {null} />
        <Route path = '/' component = {Home} />
        
      </Switch>
    </Router>
  );
}

export default App;
