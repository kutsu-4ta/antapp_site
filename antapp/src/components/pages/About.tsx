import React from "react";
import "./style.css";
import MainTitle from '../heading/MainTitle';
import ProfileImage from "../../assets/images/profile_kari.png";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";

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
                            <Item className={'text-size-sub-title'}>Masafumi Yamashita</Item>
                        </Grid>
                    </Grid>

                    <Grid container spacing={8}>
                        <Grid item xs={12} className={'text-size-body'}>
                            <Item>
                                うんこの専門家<br/>
                                二酸化炭素を吐き出します。<br/>
                                冷やし中華、はじめました。<br/>
                                目をつぶってうんこをすることができます。
                            </Item>
                        </Grid>
                    </Grid>
                </div>
            </Grid>

            <Grid container justifyContent="center" className={'text-size-body text-center'}>

                <Grid item xs={12}>
                    <Item><h3>Skill Set</h3></Item>
                </Grid>

                <Grid item xs={12}>
                    <Item>
                        <ul>JavaScript(1年)</ul>
                        <ul>TypeScript</ul>
                        <ul>PHP(2年)</ul>
                        <ul>MySQL(1年)</ul>
                        <ul>GitHub</ul>
                        <ul>React.js</ul>
                        <ul>Vue.js</ul>
                        <ul>Flutter</ul>
                        <ul>Docker</ul>
                        <ul>Laravel</ul>
                    </Item>
                </Grid>
            </Grid>
        </>
    );
};

export default about;