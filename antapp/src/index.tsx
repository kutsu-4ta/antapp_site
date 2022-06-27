import ReactDOM from 'react-dom';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';

import { loadingSlice } from "./features/Loading";
import { BrowserRouter } from 'react-router-dom'; import App from './App';

const store = configureStore({ reducer: loadingSlice.reducer });

ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    , document.getElementById('root'),
);