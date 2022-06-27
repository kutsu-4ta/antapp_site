import { VFC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { LoadingState, added, decremented, incremented } from "../features/Loading";
import Loading from '../components/loading/Loading';


const EnhancedLoading: VFC = () => {
    const count = useSelector<LoadingState, number>((state) => state.count);
    const dispatch = useDispatch();
    return (
        <Loading
            count={count}
            add={(amount: number) => dispatch(added(amount))}
            decrement={() => dispatch(decremented())}
            increment={() => dispatch(incremented())}
        />
    );
};

export default EnhancedLoading;


