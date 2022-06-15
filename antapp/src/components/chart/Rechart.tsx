import * as React from "react";
import { BarChart, Bar, XAxis, YAxis} from "recharts";
import {ReactNode} from "react";
import "./style.css";
import {LayoutType} from "recharts/types/util/types";

type DataItem = {
    name: string;
    value: number;
    color: string;
};

type ChartProps = {
    data: DataItem[];
    children: ReactNode;
    layoutType?: LayoutType | undefined;
};

const Rechart: React.FC<ChartProps> = ({ data , children, layoutType}) => {
    return (
        <>
            <h3>{children}</h3>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        // alignItems: "center",
                        // justifyContent: "center"
                    }}
                >
                    <BarChart
                        data={data}
                        layout={layoutType}
                        margin={{top: 0, right: 5, left: 5, bottom: 5}}
                        width={600}
                        height={400}
                        barSize={10}
                    >
                    <Bar
                        dataKey="value"
                        animationEasing="ease-in-out"
                        fill={"#08d"}
                    />
                        <XAxis type="number" hide={true}/>
                        <YAxis dataKey="name" type="category" axisLine={false} />
                    </BarChart>
                </div>
        </>
    );
};

const Rectangle = () => {
    return(
        <div>

        </div>

    )
}


export default Rechart;
