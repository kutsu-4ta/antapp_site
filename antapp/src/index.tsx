import ReactDOM from 'react-dom';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';

import { loadingSlice } from "./features/Loading";
import { BrowserRouter } from 'react-router-dom'; import App from './App';
import EnhancedLoading from "./containers/Loading";
import React from "react";

const store = configureStore({ reducer: loadingSlice.reducer });

const helloMessages: string[] = [
    'Hello.',
    'こんにちは',
    'いらっしゃいませ',
    '見に来てくれてありがとう',
    'ゆっくりしていってね',
    'thanks for coming',
]

const helloMessage: string = helloMessages[Math.floor(Math.random() * (helloMessages.length+1))]

ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <EnhancedLoading message={helloMessage}>
                    <App/>
                </EnhancedLoading>
            </Provider>
        </BrowserRouter>
    , document.getElementById('root'),
);