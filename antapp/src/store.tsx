import { combineReducers, createStore, compose, applyMiddleware} from 'redux'
import { loadingReducer, LoadingState } from './reducer'
import thunk from "redux-thunk"

export type AppState = {
    state: LoadingState
}

const storeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers<AppState>({
        state: loadingReducer
    }),
    storeEnhancers(applyMiddleware(thunk))
)

export default store