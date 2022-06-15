import React from "react";
import "./style.css";
import MainTitle from '../heading/MainTitle';
import ProfileImage from "../../assets/images/profile_kari.png";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Rechart from "../chart/Rechart";

const about = () => {
    return (
        <>
            <Grid container justifyContent="center" rowSpacing={1}>
                <Grid item xs={12}>
                    <Item>
                        <MainTitle>about</MainTitle>
                    </Item>
                </Grid>

                <div className={'text-left'}>

                    <Grid container>
                        <Grid item xs={4}>
                            <Item><img src={ProfileImage} className={"image-profile"} alt="profile"/></Item>
                        </Grid>
                        <Grid item xs={8}>
                            <Item>山下 将史</Item>
                            <Item>Yamashita Masafumi</Item>
                        </Grid>
                    </Grid>

                    <Grid container spacing={8}>
                        <Grid item xs={12} className={'text-size-body'}>
                            <Item>
                                フロントエンドを主にweb制作の依頼を受け付けております。<br/>
                                具体的にはランディングページ（LP）の制作やwebサイトの更新機能・追加などになります。<br/>
                                【メモ：経歴を書く。前職でしていたことや得意なことなど。】
                            </Item>
                        </Grid>
                    </Grid>
                </div>
            </Grid>

            <Grid container justifyContent="center" className={'text-size-body text-center'}>

                <Grid item xs={12}>
                    <Item><h2>Skill Set</h2>
                        <Rechart data={languageData} layoutType="vertical">Language</Rechart>
                    </Item>
                </Grid>

                <Grid item xs={12}>
                    <Item>
                        <Rechart data={flameworkData} layoutType="vertical">FlameWork</Rechart>
                    </Item>
                </Grid>

            </Grid>
        </>
    );
};

export default about;


const languageData = [
    {
        name: "PHP",
        value: 23,
        color: "#08d"
    },
    {
        name: "JavaScript",
        value: 13,
        color: "#08d"
    },
    {
        name: "TypeScript",
        value: 3,
        color: "#eec263"
    },
    {
        name: "Dart",
        value: 3,
        color: "#08d"
    },
    {
        name: "MySQL",
        value: 23,
        color: "#08d"
    }
];

const flameworkData = [
    {
        name: "Laravel",
        value: 23,
        color: "#4169e1"
    },
    {
        name: "Vue.js",
        value: 13,
        color: "#f0e68c#4169e1"
    },
    {
        name: "React.js",
        value: 3,
        color: "#f0e68c"
    },
    {
        name: "MySQL",
        value: 23,
        color: "#4169e1"
    },
    {
        name: "Flutter",
        value: 4,
        color: "#2e8b57"
    }
];