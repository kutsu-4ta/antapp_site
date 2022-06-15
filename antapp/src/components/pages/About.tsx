import React from "react";
import "./style.css";
import MainTitle from '../heading/MainTitle';
import ProfileImage from "../../assets/images/profile_kari.png";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import {Bar} from "react-chartjs-2";

import { Chart, registerables } from "chart.js"
Chart.register(...registerables)

const languageData = {
    // x 軸のラベル
    labels: ['JavaScript', 'TypeScript', 'PHP', 'MySQL'],
    datasets: [
        {
            label: 'Dataset',
            // データの値
            data: [65, 59, 80, 81, 56, 55, 40],
            // グラフの背景色
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)',
            ],
            // グラフの枠線の色
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)',
            ],
            // グラフの枠線の太さ
            borderWidth: 1,
        },
    ],
};

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
                        <h3>Language</h3>
                        <Bar data={languageData}/>
                        <h3>FrameWork</h3>
                        <Bar data={languageData}/>
                    </Item>
                </Grid>

                <Grid item xs={12}>
                    {/*<Item>*/}
                    {/*    <ul>JavaScript(1年)</ul>*/}
                    {/*    <ul>TypeScript</ul>*/}
                    {/*    <ul>PHP(2年)</ul>*/}
                    {/*    <ul>MySQL(1年)</ul>*/}
                    {/*    <ul>GitHub</ul>*/}
                    {/*    <ul>React.js</ul>*/}
                    {/*    <ul>Vue.js</ul>*/}
                    {/*    <ul>Flutter</ul>*/}
                    {/*    <ul>Docker</ul>*/}
                    {/*    <ul>Laravel</ul>*/}
                    {/*</Item>*/}
                </Grid>
            </Grid>
        </>
    );
};

export default about;