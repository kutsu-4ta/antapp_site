/**
 * [説明] 擬似ロードのisLoadingでstoreを使うためのコンポーネント.
 * ContainerのなかのコンポーネントはComponents以下のコンポーネントへ
 * store絡みの値や関数を橋渡しするためのコンポーネント.
 */

import { VFC } from 'react';
import { useSelector } from 'react-redux';
import { LoadingState } from "../features/Loading";
import Loading from '../components/loading/Loading';
import useLoading from '../hooks/use-loading';

const EnhancedLoading: VFC = () => {
    useLoading();
    const loading = useSelector<LoadingState, boolean>((state) => state.isLoading);
    return (
        <Loading
            isLoading={loading}
        />
    );
};

export default EnhancedLoading;