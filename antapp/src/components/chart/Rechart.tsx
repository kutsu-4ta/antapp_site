import * as React from "react";
import { BarChart, Bar, XAxis, YAxis} from "recharts";

type DataItem = {
    name: string;
    value: number;
    color: string;
};

type ChartProps = {
    data: DataItem[];
};

const Rechart: React.FC<ChartProps> = ({ data }) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <h3>Language</h3>
            <BarChart width={600} height={500} data={data} barSize={30} layout="horizontal">
                <Bar
                    dataKey="value"
                    animationEasing="ease-in-out"
                    fill={"#08d"}
                />
                <XAxis dataKey="name" />
                <YAxis />
            </BarChart>
        </div>
    );
};

export default Rechart;
