import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type LoadingState = { count: number };
const initialState: LoadingState = { count: 0 };

export const loadingSlice = createSlice(
    { name: 'loading',
        initialState,
        reducers: {
            added: (state, action: PayloadAction<number>) => ({
                ...state,
                count: state.count + action.payload,
            }),
            decremented: (state) => ({...state, count: state.count - 1}),
            incremented: (state) => ({...state, count: state.count + 1}),
        },
    });

export const { added, decremented, incremented } = loadingSlice.actions;