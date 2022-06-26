import React from 'react';
import {VFC} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import {Loading, ShowLoading} from './components/utility/Loading ';

const App: VFC = () => {
    return (
        <>
            <ShowLoading timeout={6000}>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Redirect to={"/"}/>
                </Switch>
            </ShowLoading>
        </>
    );
};

export default App;
