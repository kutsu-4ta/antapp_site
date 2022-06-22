import React, {ReactNode} from "react";
import { BarChart, Bar, XAxis, YAxis, Rectangle} from "recharts";
import "./style.css";
import {LayoutType} from "recharts/types/util/types";
import Grid from "@mui/material/Grid";

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
            <Grid container justifyContent="center">
                <Grid item xs={12}>
                    <h3 style={{marginTop: "3rem"}}>{children}</h3>
                </Grid>
            </Grid>
            <Grid container justifyContent="center">
                <Grid item xs={12} style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}>

                    {data.map(item => {
                            return (
                                <BarChart
                                    data={[item]}
                                    layout={layoutType}
                                    margin={{top: 0, right: 0, left: 60, bottom: 0}}
                                    width={600}
                                    height={35}
                                    barSize={16}
                                >
                                    <Bar
                                        dataKey="value"
                                        animationEasing="ease-in-out"
                                        animationBegin={1000}
                                        fill={item.color}
                                        shape={<Rectangle className="rectangle" radius={[10, 10, 10, 10]}/>}
                                    />
                                    <XAxis
                                        domain={[0, 2.0]}
                                        type="number"
                                        axisLine={false}
                                        hide={true}
                                    />
                                    <YAxis
                                        dataKey="name"
                                        type="category"
                                        axisLine={false}
                                    />
                                </BarChart>
                            )
                        }
                    )}
                    <BarChart
                        data={[
                            {
                                name: "",
                                value: 0.0,
                                color: "#eec263"
                            }
                        ]}
                        layout={layoutType}
                        margin={{top: 0, right: 0, left: 60, bottom: 0}}
                        width={600}
                        height={40}
                        barSize={16}
                    >
                        <XAxis
                            domain={[0, 2.0]}
                            unit="年"
                            type="number"
                            axisLine={false}
                            hide={false}
                        />
                        <YAxis
                            dataKey="name"
                            type="category"
                            axisLine={false}
                        />
                    </BarChart>
                </Grid>
            </Grid>
            {/*<div*/}
            {/*    style={{*/}
            {/*        display: "flex",*/}
            {/*        flexDirection: "column",*/}
            {/*        alignItems: "center",*/}
            {/*        justifyContent: "center"*/}
            {/*    }}*/}
            {/*>*/}
            {/*    {data.map(item => {*/}
            {/*            return (*/}
            {/*                <BarChart*/}
            {/*                    data={[item]}*/}
            {/*                    layout={layoutType}*/}
            {/*                    margin={{top: 0, right: 0, left: 60, bottom: 0}}*/}
            {/*                    width={800}*/}
            {/*                    height={40}*/}
            {/*                    barSize={16}*/}
            {/*                >*/}
            {/*                    <Bar*/}
            {/*                        dataKey="value"*/}
            {/*                        animationEasing="ease-in-out"*/}
            {/*                        animationBegin={1000}*/}
            {/*                        fill={item.color}*/}
            {/*                        shape={<Rectangle className="rectangle" radius={[10, 10, 10, 10]}/>}*/}
            {/*                    />*/}
            {/*                    <XAxis*/}
            {/*                        domain={[0, 2.5]}*/}
            {/*                        type="number"*/}
            {/*                        axisLine={false}*/}
            {/*                        hide={true}*/}
            {/*                    />*/}
            {/*                    <YAxis*/}
            {/*                        dataKey="name"*/}
            {/*                        type="category"*/}
            {/*                        axisLine={false}*/}
            {/*                    />*/}
            {/*                </BarChart>*/}
            {/*            )*/}
            {/*        }*/}
            {/*    )}*/}
            {/*</div>*/}
        </>
    );
};



export default Rechart;
