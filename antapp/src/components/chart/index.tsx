import * as React from "react";
import ReactChart from "./ReactChart";
import ReactWithD3Chart from "./ReactWithD3Chart";
import VxChart from "./VxChart";
import Rechart from "./Rechart";
import "./style.css";

const languageData = [
    {
        name: "PHP",
        value: 2.3,
        color: "#08d"
    },
    {
        name: "JavaScript",
        value: 1.3,
        color: "#08d"
    },
    {
        name: "TypeScript",
        value: 0.3,
        color: "#eec263"
    },
    {
        name: "Dart",
        value: 0.3,
        color: "#08d"
    },
    {
        name: "MySQL",
        value: 2.3,
        color: "#08d"
    }
];

const flameworkData = [
    {
        name: "Laravel",
        value: 2.3,
        color: "#4169e1"
    },
    {
        name: "Vue.js",
        value: 1.3,
        color: "#f0e68c"
    },
    {
        name: "React.js",
        value: 0.3,
        color: "#f0e68c"
    },
    {
        name: "MySQL",
        value: 2.3,
        color: "#4169e1"
    },
    {
        name: "Flutter",
        value: 0.4,
        color: "#2e8b57"
    }
];

function ReactBarChart() {
    return (
        <>
            <Rechart data={languageData}/>
            {/*<ReactChart data={flameworkData}/>*/}
            <ReactWithD3Chart data={flameworkData}/>
            {/*<VxChart data={flameworkData}/>*/}
        </>
    );
}

export default ReactBarChart;
