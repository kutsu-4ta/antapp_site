import { VFC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { add, decrement, increment } from '../components/utility/utility-actions';
import { LoadingState } from '../reducer';
import Loading from "../components/utility/Loading ";

const EnhancedLoading: VFC = () => {
    const count = useSelector<LoadingState, number>((state) => state.count);
    const dispatch = useDispatch();
    return (
        <Loading
            count={count}
            add={(amount: number) => dispatch(add(amount))}
            decrement={() => dispatch(decrement())}
            increment={() => dispatch(increment())}
        />
    );
};

export default EnhancedLoading;


