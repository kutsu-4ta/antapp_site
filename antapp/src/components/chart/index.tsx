import * as React from "react";
import ReactChart from "./ReactChart";
import ReactWithD3Chart from "./ReactWithD3Chart";
import Rechart from "./Rechart";
import VxChart from "./VxChart";
import "./style.css";

const data = [
    {
        name: "Nike",
        value: 90
    },
    {
        name: "Adidas",
        value: 60
    },
    {
        name: "New Balance",
        value: 114
    }
];

function ReactBarChart() {
    return (
        <div className="App">
            <ReactChart data={data} />
            <Rechart data={data} />
            <ReactWithD3Chart data={data} />
            <VxChart data={data} />
        </div>
    );
}

export default ReactBarChart;
