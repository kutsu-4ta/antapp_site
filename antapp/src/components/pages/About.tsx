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
                <Grid container justifyContent="center" className="padding-3">
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
                            フリーランスでweb制作を行っています。<br/>
                            新卒でwebシステム開発の会社に就職し、サーバサイドエンジニアとして自社製品の開発・運用に携わっていました。<br/>
                            業務では主にLaravel、PHP、Vue.jsを使っておりました。<br/>
                            2022年の6月からフリーランスとして活動を開始しました。<br/>
                            最近はフロント・エンドが好きで、このサイトをReact.jsで作成しました。<br/>
                            LP・Webサイトのコーディング、webシステムの制作などご依頼いただければと思います。<br/>
                            お客様の理想の実現に貢献し、真心を込めて良いものを作っていきたいと思います。<br/>
                            業務で扱った言語とフレームワークをSkillSetのページに載せていますのでご覧ください。<br/>
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
                                <Item className="mobile-text-size-title">Yamashita Masafumi</Item>
                            </Grid>
                        </Grid>

                        <Grid container className="margin-top-1">
                            <Grid item xs={12} className="mobile-text-size-body">
                                <Item>
                                    フリーランスでweb制作を行っています。<br/>
                                    新卒でwebシステム開発の会社に就職し、サーバサイドエンジニアとして自社製品の開発・運用に携わっていました。<br/>
                                    業務では主にLaravel、PHP、Vue.jsを使っておりました。<br/>
                                    2022年の6月からフリーランスとして活動を開始しました。<br/>
                                    最近はフロント・エンドが好きで、このサイトをReact.jsで作成しました。<br/>
                                    LP・Webサイトのコーディング、webシステムの制作などご依頼いただければと思います。<br/>
                                    お客様の理想の実現に貢献し、真心を込めて良いものを作っていきたいと思います。<br/>
                                    業務で扱った言語とフレームワークをSkillSetのページに載せていますのでご覧ください。<br/>
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