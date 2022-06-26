/**
 * [説明] なんちゃってロード
 * 非同期処理などもないので、特にロードを使うタイミングがない。
 * ページにアクセスした際の読み込み時に擬似的にローディングさせる。
 */

import { ReactNode, useEffect, useState } from "react";

const useDelay = (msec: number) => {
    const [isActiveLoading, setIsActiveLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsActiveLoading(true), msec)
    }, []);

    return { isActiveLoading };
}



type LoadingType = () => JSX.Element
export const Loading:LoadingType = () => {
    return(
    <>
        <div>
            ロード中
        </div>
    </>
    );
}



//

interface Props {
    children: ReactNode;
    timeout: number
}
type ShowLoadingType = (props: Props) => JSX.Element
export const ShowLoading: ShowLoadingType = (props) => {
    const {isActiveLoading} = useDelay(props.timeout);
    return (
        <>
            {isActiveLoading ? props.children : Loading}
        </>
    );
};