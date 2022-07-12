import React from "react";
import { Typography } from '@mui/material';
import Rechart from "../chart/Rechart";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import "./style.css";
import {IsPc, IsMobile} from "../utility/Responsive";
import GitHubLogo from "../../assets/images/LanguageLogo/github-icon.svg";
import FlutterLogo from "../../assets/images/LanguageLogo/flutter.svg";

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
        value: 30,
        color: "#eec263"
    },
    {
        name: "JavaScript",
        value: 70,
        color: "#eec263"
    },
    {
        name: "Flutter",
        value: 30,
        color: "#2e8b57"
    },
    {
        name: "PHP",
        value: 70,
        color: "#4169e1"
    },
    {
        name: "MySQL",
        value: 30,
        color: "#4169e1"
    }
];

const flameworkData = [
    {
        name: "React.js",
        value: 30,
        color: "#eec263"
    },
    {
        name: "Vue.js",
        value: 70,
        color: "#eec263"
    },
    {
        name: "Laravel",
        value: 80,
        color: "#4169e1"
    },
    {
        name: "WordPress",
        value: 60,
        color: "#4169e1"
    },
    {
        name: "docker",
        value: 70,
        color: "#4169e1"
    }
];