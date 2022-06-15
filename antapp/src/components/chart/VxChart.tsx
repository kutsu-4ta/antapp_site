import * as React from "react";
import { scaleLinear, scaleBand } from "@vx/scale";
import { Bar } from "@vx/shape";
import { AxisLeft } from "@vx/axis";
import { Group } from "@vx/group";
import {listClasses} from "@mui/material";

type DataItem = {
    name: string;
    value: number;
};

type ChartProps = {
    data: DataItem[];
};

const Chart: React.FC<ChartProps> = ({ data }) => {
    const color = scaleLinear({
        domain: [60, 120],
        range: ["#ffa500", "#87CEEB"]
    });

    type ScaleProp = {
        rangeRound: number[]
        domain: string[]
        padding: number
    }

    const scaleProp: ScaleProp  = {
        rangeRound: [0, 100],
        domain: data.map(i => i.name),
        padding: 1.5
    }

    const yScale = scaleBand(scaleProp);

    type TickProps = {
        textAnchor: String
        dy: number
        dx: number
        textAlign: string
        fontFamily: string
        fontSize: number
        fill: String
    }

    const tickProps = {
        textAnchor: "left",
        dy: 10,
        dx: -30,
        textAlign: "left",
        fontFamily: "Arial",
        fontSize: 16,
        fill: "black"
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <h1>React + vx</h1>
            <svg>
                <Group left={75}>
                    {data.map(i => (
                        <Bar
                            key={i.name}
                            x={80}
                            y={yScale(i.name)}
                            width={i.value}
                            height="12"
                            fill={color(i.value)}
                        />
                    ))}
                    <AxisLeft
                        scale={yScale}
                        stroke="#333"
                        tickStroke="#000"
                        hideTicks
                        hideAxisLine
                        // tickLabelProps ={(tickValue, index) => (tickProps:TickProps)}
                    />
                </Group>
            </svg>
        </div>
    );
};

export default Chart;
