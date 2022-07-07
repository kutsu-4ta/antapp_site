import React from "react";
import { Typography } from '@mui/material';
import Rechart from "../chart/Rechart";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import "./style.css";
import {IsPc, IsMobile} from "../utility/Responsive";

type SkillSet = () => JSX.Element;
const SkillSet: SkillSet = () => {
    return (
        <div>
            <IsPc>
                <Grid container justifyContent="center" className="space-3-vertical">
                    <Grid item className='text-center' style={{paddingBottom: "2rem"}}>
                        <Grid item xs={12}>
                            <Rechart data={languageData} layoutType="vertical" width={null} height={null}>
                                <Typography
                                    component="p"
                                    variant="h6"
                                    textAlign="center"
                                >Language
                                </Typography>
                            </Rechart>
                        </Grid>
                        <Grid item xs={12}>
                            <Rechart data={flameworkData} layoutType="vertical" width={null} height={null}>
                                <Typography
                                    component="p"
                                    variant="h6"
                                    textAlign="center"
                                >FlameWork・Tools
                                </Typography>
                                </Rechart>
                        </Grid>
                    </Grid>
                </Grid>
            </IsPc>
            <IsMobile>
                <Grid container justifyContent="center">
                    <Grid item xs={12} className='text-center' style={{paddingTop: "2rem"}}>
                            <Item className="mobile-text-size-body">
                                業務で扱ったことのある言語とフレームワークの経験年数は以下になります。<br/>
                                Flutterは只今勉強中です。
                            </Item>
                    </Grid>

                    <Grid item xs={12}>
                        <Rechart data={languageData} layoutType="vertical" width={300} height={25}><p className="text-center">Language</p></Rechart>
                    </Grid>
                    <Grid item xs={12}>
                        <Rechart data={flameworkData} layoutType="vertical" width={300} height={25}><p className="text-center">FlameWork</p></Rechart>
                    </Grid>

                </Grid>
            </IsMobile>
        </div>
    );
};

export default SkillSet;

const languageData = [
    {
        name: "TypeScript",
        value: 0.3,
        color: "#eec263"
    },
    {
        name: "JavaScript",
        value: 1.5,
        color: "#eec263"
    },
    {
        name: "Dart",
        value: 0.3,
        color: "#2e8b57"
    },
    {
        name: "PHP",
        value: 2.0,
        color: "#4169e1"
    },
    {
        name: "MySQL",
        value: 2.0,
        color: "#4169e1"
    }
];

const flameworkData = [
    {
        name: "React.js",
        value: 0.3,
        color: "#eec263"
    },
    {
        name: "Vue.js",
        value: 1.5,
        color: "#eec263"
    },
    {
        name: "Flutter",
        value: 0.5,
        color: "#2e8b57"
    },
    {
        name: "Laravel",
        value: 2.0,
        color: "#4169e1"
    },
    {
        name: "WordPress",
        value: 1.0,
        color: "#4169e1"
    },
    {
        name: "docker",
        value: 1.0,
        color: "#4169e1"
    }
];