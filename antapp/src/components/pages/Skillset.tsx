import React from "react";
import SkillSets from "../../assets/images/icons/skillsets_dev.svg";
import Rechart from "../chart/Rechart";
import Grid from "@mui/material/Grid";
import "./style.css";
import Fader from "../scrollEvent/Fader";
import Work from "./Work";

type SkillSet = () => JSX.Element;
const SkillSet: SkillSet = () => {
    return (
        <div>
            <Grid container justifyContent="center" className="space-3-vertical">

                <Grid item className='text-size-body text-center' style={{paddingBottom: "2rem"}}>
                    <Grid item xs={12}>
                        <Rechart data={languageData} layoutType="vertical">Language</Rechart>
                    </Grid>
                    <Grid item xs={12}>
                        <Rechart data={flameworkData} layoutType="vertical">FlameWork</Rechart>
                    </Grid>
                </Grid>

            </Grid>
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