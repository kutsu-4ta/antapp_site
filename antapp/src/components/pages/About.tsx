import React from "react";
import "./style.css";
import MainTitle from '../heading/MainTitle';
import ProfileImage from "../../assets/images/profile_kari.png";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Rechart from "../chart/Rechart";
import Human from "../../assets/images/icons/about_human.svg";
import SkillSets from "../../assets/images/icons/skillsets_dev.svg";

const about = () => {
    return (
        <div className="content-top">
            <Grid container justifyContent="center" rowSpacing={1}>
                <Grid item xs={12} className="text-center">
                    <Item>
                        <img src={Human} className="icon-title" alt="about"/>
                        <MainTitle>about</MainTitle>
                    </Item>
                </Grid>

                <div className={'text-left'}>

                    <Grid container>
                        <Grid item xs={4}>
                            <Item><img src={ProfileImage} className={"image-profile"} alt="profile"/></Item>
                        </Grid>
                        <Grid item xs={8} className="text-size-sub-title">
                            <Item>山下 将史</Item>
                            <Item>Yamashita Masafumi</Item>
                        </Grid>
                    </Grid>

                    <Grid container spacing={8}>
                        <Grid item xs={12} className={'text-size-body'}>
                            <Item>
                                {/*web制作のご依頼を受け付けております。<br/>*/}
                                {/*（LP、webサイトの制作・機能追加など）<br/>*/}
                                前職では自社でメーラーの開発・運用に携わっていました。<br/>
                                以前はネットワークやサーバサイドをメインで仕事をしていましたが、<br/>
                                最近はフロントが好きで、このサイトもReact.jsの練習として作りました。<br/>
                                スキルセットは以下になります。<br/>
                                【メモ：経歴を書く。仕事の姿勢。前職でしていたことや得意なことなど。】
                            </Item>
                        </Grid>
                    </Grid>
                </div>
            </Grid>

            <Grid container justifyContent="center" className={'text-size-body text-center'} style={{paddingTop: "2rem"}}>

                <Grid item xs={12}>
                    <Item>
                        <h2><img src={SkillSets} className="icon-sub-title" alt="skillSets"/>Skill Set</h2>
                        <Rechart data={languageData} layoutType="vertical">Language</Rechart>
                    </Item>
                </Grid>

                <Grid item xs={12}>
                    <Item>
                        <Rechart data={flameworkData} layoutType="vertical">FlameWork</Rechart>
                    </Item>
                </Grid>

            </Grid>
        </div>
    );
};

export default about;


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