import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { loadingReducer, initialState } from "./reducer";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'; import App from './App';
import ReportWebVitals from "./reportWebVitals";

const store = createStore(loadingReducer, initialState);

ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    , document.getElementById('root'),
);

render:ReportWebVitals();