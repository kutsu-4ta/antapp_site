/**
 * [説明] カスタムフック
 * 擬似ローディングのため、asyncの中でsetTimeoutを使って任意の秒数だけ遅延させる。
 * storeのisLoadingを変更するアクションを呼んでいるが、もっと上手いやり方がある気がする...
 */

import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {loadingSlice} from "../../features/Loading";

const useLoading = () => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
            let isUnmounted = false;    // コンポーネントがアンマウントした際に非同期プロセスを意図的にキルする必要がある
            const {loaded} = loadingSlice.actions;

            const load = async (): Promise<void> => {
                try {
                    if (!isUnmounted) {
                        setTimeout(() => {
                            loaded()
                            dispatch(loaded())
                        }, 2500);
                    }
                } catch (err) {
                    throw new Error('Load is failed');
                } finally {
                    setIsLoading(true);
                }
            };

            void load();    // Promiseの返り値を明示的に無視する

            return () => {
                isUnmounted = true;
            };
        },
        [dispatch]);
    return false;
};

export default useLoading