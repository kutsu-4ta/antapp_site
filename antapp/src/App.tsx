import React from 'react';
import {VFC} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import History from './components/pages/History';

const App: VFC = () => {

    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/home">
                    <Home/>
                </Route>
                <Route exact path="/history">
                    <History/>
                </Route>
                <Redirect to={"/"}/>
            </Switch>
        </>
    );
};

export default App;
