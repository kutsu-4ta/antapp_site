import * as React from "react";
import {scaleLinear} from "@vx/scale";

type BarProps = {
    width: number;
    label: string;
    color: string | undefined;
};

const Bar: React.FC<BarProps> = ({ width, label, color}) => (
    <div
        style={{
            display: "flex",
            maxWidth: "500px",
            width: "500px",
            alignItems: "center"
        }}
    >
        {/*凡例エリア*/}
        <div style={{ width: "120px", textAlign: "left" }}>{label}</div>
        {/*プロットエリア*/}
        <div style={{ width: `${width * 170}px`, height: "12px", textAlign: "left", backgroundColor: color }}/>
    </div>
);

type DataItem = {
    name: string;
    value: number;
    color: string;
};

type ChartProps = {
    data: DataItem[];
};

const Chart: React.FC<ChartProps> = ({ data }) => {

    // valueと連動させるときに使う
    const color = scaleLinear({
        domain: [60, 120],
        range: ["#ffa500", "#87CEEB"]
    });

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <h3>FlameWork</h3>
            <div>
                {data.map(i => (
                    <Bar
                        width={i.value}
                        label={i.name}
                        key={i.name}
                        color={i.color}
                    />
                ))}
            </div>
        </div>
    );
};

export default Chart;
