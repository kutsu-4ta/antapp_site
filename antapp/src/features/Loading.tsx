/**
 * [説明]action と reducer を定義している.
 * Sliceを使って同時に定義している.
 */

import { createSlice } from '@reduxjs/toolkit';

export type LoadingState = { isLoading:boolean ,count: number};
const initialState: LoadingState = { isLoading: true, count: 0 };

export const loadingSlice = createSlice(
    { name: 'loading',
        initialState,
        reducers: {
            loaded: (state) => ({...state, isLoading: !state.isLoading}),
        },
    });

export const { loaded } = loadingSlice.actions;