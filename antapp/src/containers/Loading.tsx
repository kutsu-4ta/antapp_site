/**
 * [説明] 擬似ロードのisLoadingでstoreを使うためのコンポーネント.
 * ContainerのなかのコンポーネントはComponents以下のコンポーネントへ
 * store絡みの値や関数を橋渡しするためのコンポーネント.
 */

import { VFC } from 'react';
import { useSelector } from 'react-redux';
import { LoadingState } from "../features/Loading";
import Loading from '../components/loading/Loading';
import useLoading from '../components/loading/useLoading';

interface Props {
    children: JSX.Element;
    message: string;
}

type  EnhancedLoadingType = (props:Props) => JSX.Element;
const EnhancedLoading: EnhancedLoadingType = (props:Props) => {
    useLoading();
    const loading = useSelector<LoadingState, boolean>((state) => state.isLoading);
    return (
        <Loading
            isLoading={loading}
            message={props.message}
        >
            {props.children}
        </Loading>
    );
};

export default EnhancedLoading;


//
// type Props = {
//     children: JSX.Element;
// }
//
// const EnhancedLoading: VFC<Props> = (children) => {
//     useLoading();
//     const loading = useSelector<LoadingState, boolean>((state) => state.isLoading);
//     return (
//         <Loading
//             isLoading={loading}
//             children={children}
//         />
//     );
// };
//
// export default EnhancedLoading;