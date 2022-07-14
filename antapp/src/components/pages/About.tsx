import React from "react";
import "./style.css";
import ProfileImage from "../../assets/images/profile_kari.png";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import { Typography } from '@mui/material';
import  {IsPc, IsMobile} from "../utility/Responsive";

import InfinateGradation from "../backgrounAnimation/InfinateGradation";
import HomeMobile from "../../assets/images/PlayerUI.png";
import AboutIcon from "../../assets/images/icons/about_human.svg";

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
                        <Grid container justifyContent="center">
                            <Grid item xs={12} className="content-flex-center">
                                <Typography
                                    component="p"
                                    variant="h5"
                                    fontWeight="bold"
                                    textAlign="center"
                                    mb="8px"
                                    style={{fontFamily: "Noto Serif JP"}}
                                >山下 将史
                                </Typography>
                            </Grid>
                            <Grid item xs={12} className="text-size-sub-title content-flex-center">
                                <Typography
                                    component="p"
                                    variant="h6"
                                    textAlign="center"
                                    mb="8px"
                                    style={{fontFamily: "Noto Serif JP"}}
                                >Masafumi Yamashita
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} className="text-size-body">

                        <Item className="margin-top-2">
                            <Typography
                                component="p"
                                variant="inherit"
                                textAlign="left"
                                mb="8px"
                                style={{fontFamily: "Noto Serif JP"}}
                            >
                                <h3>エンジニアを目指した経緯</h3>
                                大学では情報系を専攻していましたがバンド活動に夢中になり留年してしまいました。留年期間中にIT業界に惹かれ、プログラミングとWeb技術を猛勉強しました。<br/>
                                同時に物を売ることにも興味があったため、Web業界で自社開発をしている会社を軸に就職活動をし、エンジニアとしてのキャリアをスタートしました。<br/>

                                <h3>フリーランスになった経緯</h3>
                                新卒入社した企業で1年間、自社開発の実務を積みました。<br/>
                                そこでの配属先の自社製品のチームは少数で構成されており、入社1年目ながら自社開発の全工程に携らせていただきましsた。<br/>
                                以前の会社はとてもありがたい環境でしたが、より自由な発想でエンジニアとしての自分を磨きたいという気持ちが強くなり、フリーランスを考えるようになりました。<br/>
                                以前の会社では副業ができなかったため、退社して今はフリーランスのエンジニアとして働かせていただいています。<br/>
                                会社での経験は自社開発のみで受託開発の経験はまだまだ浅いですが、<br/>
                                丁寧なコミュニケーションを心がけて、プロの技術者としてお客様の課題解決に貢献していきます。
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={12} className="text-size-body">

                        {/*<Item className="margin-top-2">*/}
                        {/*    <Link to={'/history'}>*/}
                        {/*        <Button variant="contained">詳しく見る</Button>*/}
                        {/*    </Link>*/}
                        {/*</Item>*/}
                    </Grid>
                </Grid>
            </IsPc>
            <IsMobile>


                <Grid container justifyContent="center">
                    <Grid item xs={12}>

                        <InfinateGradation
                            color1="#ff8c00"
                            color2="#c0c0c0"
                            color3="#696969"
                            scale={2}
                            style={{
                                width: `${window.innerWidth}`,
                                height: '45vh',
                                position: "sticky",
                                top: "0",
                                border: "none"
                            }}>

                            <div
                                style={{
                                    marginTop: "3vh",
                                    backgroundImage: `url(${HomeMobile})`,
                                    backgroundRepeat: 'no-repeat',
                                    width: `${window.innerWidth}`,
                                    height: '65vh',
                                    position: "sticky",
                                    top: "0",
                                }}
                            >
                                <Grid container justifyContent="center" className="content-flex-center">
                                    <Grid item xs={12} className="content-flex-center" style={{height: "5rem", marginTop: "3rem"}}>
                                        <h3 style={{fontFamily: "Noto Serif JP"}}>About Me</h3>
                                    </Grid>
                                    <Grid item xs={12} className="content-flex-center" style={{height: "3rem"}}>
                                        <img src={AboutIcon} alt='skillSet' style={{height: "10vh"}}/>
                                    </Grid>
                                </Grid>
                            </div>
                        </InfinateGradation>
                    </Grid>
                </Grid>

                <div className="content-top">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} className="text-center content-top"></Grid>

                        <Grid item xs={8} className="text-size-sub-title content-flex-center">
                            <Grid container justifyContent="center">
                                <Grid item xs={12} className="content-flex-center">
                                    <Typography
                                        component="p"
                                        variant="h5"
                                        fontWeight="bold"
                                        textAlign="center"
                                        mb="8px"
                                        style={{fontFamily: "Noto Serif JP"}}
                                    >山下 将史
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} className="text-size-sub-title content-flex-center">
                                    <Typography
                                        component="p"
                                        variant="h6"
                                        textAlign="center"
                                        mb="8px"
                                        style={{fontFamily: "Noto Serif JP"}}
                                    >Masafumi Yamashita
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid container className="margin-top-1">
                            <Grid item xs={12} className="mobile-text-size-body">
                                <Item>
                                    <Typography
                                        component="p"
                                        variant="inherit"
                                        textAlign="left"
                                        mb="4px"
                                        style={{fontFamily: "Noto Serif JP"}}
                                    >
                                        <h3>エンジニアを目指した経緯</h3>
                                        大学では情報系を専攻していましたがバンド活動に夢中になり留年してしまいました。留年期間中にIT業界に惹かれ、プログラミングとWeb技術を猛勉強しました。<br/>
                                        同時に物を売ることにも興味があったため、Web業界で自社開発をしている会社を軸に就職活動をし、エンジニアとしてのキャリアをスタートしました。<br/>

                                        <h3>フリーランスになった経緯</h3>
                                        新卒入社した企業で1年間、自社開発の実務を積みました。<br/>
                                        そこでの配属先の自社製品のチームは少数で構成されており、入社1年目ながら自社開発の全工程に携らせていただきましsた。<br/>
                                        以前の会社はとてもありがたい環境でしたが、より自由な発想でエンジニアとしての自分を磨きたいという気持ちが強くなり、フリーランスを考えるようになりました。<br/>
                                        以前の会社では副業ができなかったため、退社して今はフリーランスのエンジニアとして働かせていただいています。<br/>
                                        会社での経験は自社開発のみで受託開発の経験はまだまだ浅いですが、<br/>
                                        丁寧なコミュニケーションを心がけて、プロの技術者としてお客様の課題解決に貢献していきます。
                                    </Typography>
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