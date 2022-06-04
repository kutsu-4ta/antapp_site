import React from 'react';
import {VFC} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';

const App: VFC = () => {
  return (
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about" component={About}/> <Redirect to="/"/>;
        </Switch>
      </div>
  );
};

export default App;
