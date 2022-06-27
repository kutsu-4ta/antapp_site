/**
 * [説明] なんちゃってロード
 * 非同期処理などもないので、特にロードを使うタイミングがない。
 * ページにアクセスした際の読み込み時に擬似的にローディングさせる。
 */

import { VFC } from "react";
import { Button, Card, Statistic } from "semantic-ui-react";

const BULK_UNIT = 10; type Props = {
    count?: number;
    add?: (amount: number) => void;
    decrement?: () => void;
    increment?: () => void;
};

const Loading: VFC<Props> = ({
                                 count = 0,
                                 add = () => undefined,
                                 decrement = () => undefined,
                                 increment = () => undefined,
                             }) => (
    <Card>
        <Statistic className="number-board">
            <Statistic.Label>count</Statistic.Label>
            <Statistic.Value>{count}</Statistic.Value>
        </Statistic>
        <Card.Content>
            <div>
                <Button onClick={decrement}>
                    -1
                </Button>
                <Button onClick={increment}>
                    +1 </Button>
            </div>
            <div>
                <Button onClick={() => add(BULK_UNIT)}> +{BULK_UNIT}
                </Button>
            </div>
        </Card.Content>
    </Card>
);

export default Loading;