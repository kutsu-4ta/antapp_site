import React from "react";
import "./style.css";
import ProfileImage from "../../assets/images/profile_kari.png";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import  {IsPc, IsMobile} from "../utility/Responsive";

import Human from "../../assets/images/icons/about_human.svg";

const about = () => {

    return (
        <div>
            <IsPc>
                <Grid container justifyContent="center" className="content-top padding-3">
                    <Grid item xs={4} className="content-flex-center">
                        <Item>
                            <img src={ProfileImage} className="image-about" alt="profile"/>
                        </Item>
                    </Grid>
                    <Grid item xs={8} className="text-size-sub-title content-flex-center">
                        <div className="text-left">
                        山下 将史<br/>
                        Yamashita Masafumi
                        </div>
                    </Grid>

                    <Grid item xs={12} className="text-size-body">
                        <Item className="margin-top-2">
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
            </IsPc>
            <IsMobile>
                <div className="content-top">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} className="text-center content-top"></Grid>
                        <Grid container justifyContent="center" className="text-center">
                            <Grid item xs={12}>
                                <img src={ProfileImage} className="mobile-image-about" alt="profile"/>
                            </Grid>
                            <Grid item xs={12} className="text-size-sub-title">
                                {/*<Item>山下 将史</Item>*/}
                                <Item className="">Yamashita Masafumi</Item>
                            </Grid>
                        </Grid>

                        <Grid container className="margin-top-1">
                            <Grid item xs={12} className="mobile-text-size-body">
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
                    </Grid>
                </div>
            </IsMobile>
        </div>
    );
};

export default about;