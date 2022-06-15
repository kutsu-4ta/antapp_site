import React from "react";
import "./style.css";
import MainTitle from '../heading/MainTitle';
import ProfileImage from "../../assets/images/profile_kari.png";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Chart from "../chart";

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
                        <Chart/>
                    </Item>
                </Grid>

                <Grid item xs={12}>
                </Grid>
            </Grid>
        </>
    );
};

export default about;