import ReactDOM from 'react-dom';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';

import { loadingSlice } from "./features/Loading";
import { BrowserRouter } from 'react-router-dom'; import App from './App';
import EnhancedLoading from "./containers/Loading";
import React from "react";

const store = configureStore({ reducer: loadingSlice.reducer });

ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <EnhancedLoading>
                    <App/>
                </EnhancedLoading>
            </Provider>
        </BrowserRouter>
    , document.getElementById('root'),
);