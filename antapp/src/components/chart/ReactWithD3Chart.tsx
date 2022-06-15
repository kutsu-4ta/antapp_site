import * as React from "react";
import * as d3 from "d3-scale";

type DataItem = {
    name: string;
    value: number;
};

type ChartProps = {
    data: DataItem[];
};

type BarProps = {
    width: number;
    label: string;
    color: string;
};

const Bar: React.FC<BarProps> = ({ width, label, color }) => (
    <div
        style={{
            display: "flex",
            maxWidth: "300px"
        }}
    >
        <div style={{ width: "120px", textAlign: "left" }}>{label}</div>
        <div
            style={{ width: `${width}px`, height: "12px", backgroundColor: color }}
        />
    </div>
);

const Chart: React.FC<ChartProps> = ({ data }) => {
    const color = d3
        .scaleLinear()
        .domain([60, 120]);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <h1>React + D3</h1>
            <div>
                {data.map(i => (
                    <Bar
                        width={i.value}
                        label={i.name}
                        key={i.name}
                        color={'black'}
                    />
                ))}
            </div>
        </div>
    );
};

export default Chart;
