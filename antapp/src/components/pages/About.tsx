import React from "react";
import "./style.css";
import ProfileImage from "../../assets/images/profile_kari.png";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import SkillSet from "./Skillset";

import Human from "../../assets/images/icons/about_human.svg";

const about = () => {

    return (
        <div className="content-top">
            <Grid container justifyContent="center" className="space-5-vertical">
                <Grid item xs={12} className="text-center content-top" ></Grid>

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
                                【メモ：経歴を書く。仕事の姿勢。前職でしていたことや得意なことなど。】<br/>
                            </Item>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </div>
    );
};

export default about;