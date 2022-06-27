export const LoadingActionType = {
    ADD: 'ADD',
    DECREMENT: 'DECREMENT',
    INCREMENT: 'INCREMENT',
} as const;

type ValueOf<T> = T[keyof T];

export type LoadingAction = {
    type: ValueOf<typeof LoadingActionType>;
    amount?: number;
};

export const add = (amount: number): LoadingAction => ({
    type: LoadingActionType.ADD,
    amount,
});

export const decrement = (): LoadingAction => ({
    type: LoadingActionType.DECREMENT,
});

export const increment = (): LoadingAction => ({
    type:LoadingActionType.INCREMENT,
});