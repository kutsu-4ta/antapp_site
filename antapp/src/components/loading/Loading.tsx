/**
 * [説明] なんちゃってロード
 * 特にロードを使うタイミングがないので、ページにアクセスした際の読み込み時に擬似的にローディングさせる。
 */

import {VFC} from "react";

type Props = {
    isLoading?: boolean;
};

const Loading: VFC<Props> = ({
                                 isLoading = true,
                             }) => (
    <div>
        <div>
            {isLoading ? <div>ロード中</div> : '完了'}
        </div>
    </div>
);

export default Loading;