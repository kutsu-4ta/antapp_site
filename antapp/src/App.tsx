import React from 'react';
import {VFC} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Work from './components/pages/Work';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

const App: VFC = () => {
  return (
      <div className="container">
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/work" component={Work}/>;
            <Route exact path="/about" component={About}/>;
            <Route exact path="/contact" component={Contact}/>;
            <Redirect to={"/"}/>
        </Switch>
      </div>
  );
};

export default App;
