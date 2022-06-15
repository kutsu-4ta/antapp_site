import * as React from "react";

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
};

const Bar: React.FC<BarProps> = ({ width, label }) => (
    <div
        style={{
            display: "flex",
            maxWidth: "200px"
        }}
    >
        <div style={{ width: "120px", textAlign: "left" }}>{label}</div>
        <div
            style={{ width: `${width}px`, height: "12px", backgroundColor: "silver" }}
        />
    </div>
);

const Chart: React.FC<ChartProps> = ({ data }) => {
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
                    <Bar width={i.value * 100} label={i.name} key={i.name} />
                ))}
            </div>
        </div>
    );
};

export default Chart;
