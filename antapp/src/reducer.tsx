import { Reducer } from 'redux';
import { LoadingAction, LoadingActionType as Type } from './actions';


// 初期値の定義
export type LoadingState = { count: number };
export  const initialState: LoadingState = { count: 0 };

// Reducerの定義
export const loadingReducer: Reducer<LoadingState, LoadingAction> = (
    state: LoadingState = initialState,
    action: LoadingAction,
): LoadingState => {
    switch (action.type) {
        case Type.ADD:
            return {
                ...state,
                count: state.count + (action.amount || 0),
            };
        case Type.DECREMENT:
            return {
                ...state,
                count: state.count-1,
            };
        case Type.INCREMENT:
            return{
                ...state,
                count: state.count + 1,
            };
        default: {
            const const_: never = action.type;
            // never型の変数const_にaction.typeは代入できないのでエラーが返るようになっている.考慮漏れを阻止するテクニック

            return state;
        }
    }
};