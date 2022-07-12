import ReactDOM from 'react-dom';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';

import { loadingSlice } from "./features/Loading";
import { BrowserRouter } from 'react-router-dom'; import App from './App';
import EnhancedLoading from "./containers/Loading";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {createTheme} from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

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
let theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 768,
            lg: 1025,
            xl: 1536,
        },
    },
    palette: {
        primary: {
            main: "#16abe5",
            light: "#843eee",
            dark: "#818181",
        },
        background: {
            default:  "#ffffff",
        },
        text: { primary: "#2a2929" },
    }
});
ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <EnhancedLoading message={helloMessage}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline/>
                    <App/>
                    </ThemeProvider>
                </EnhancedLoading>
            </Provider>
        </BrowserRouter>
    , document.getElementById('root'),
);