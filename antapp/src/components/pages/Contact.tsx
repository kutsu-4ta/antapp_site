import React from "react";
import "./style.css";
import Grid from "@mui/material/Grid";
import { Typography } from '@mui/material';
import {IsPc, IsMobile} from "../utility/Responsive";
import ContactIcon from "../../assets/images/icons/contact_mail.svg";
import InfinateGradation from "../backgrounAnimation/InfinateGradation";
import HomeMobile from "../../assets/images/PlayerUI.png";

import UseForm from "./useContact";

const contact = () => {
    return (
        <>
            <IsPc>
                <div>
                    <Grid container justifyContent="center">
                        <Grid item xs={12} className="text-center">
                            <UseForm/>
                        </Grid>
                    </Grid>

                    {/*<p className="" style={{border: "solid blue"}}>*/}
                    {/*    <a href="https://twitter.com/antapp_?ref_src=twsrc%5Etfw" className="twitter-follow-button"*/}
                    {/*       data-show-count="false">ツイッター @antapp_</a>*/}
                    {/*    <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>*/}
                    {/*</p>*/}
                    <div className="text-center">
                        <h2 style={{fontFamily: "Noto Serif JP"}} className="margin-top-2" >Q & A</h2>
                        <Typography component="p" variant="body1" textAlign="center" className="padding-3" style={{fontFamily: "Noto Serif JP"}}>
                            Q. 職務経歴書が見たいです<br/>
                            A. お問い合わせフォームにでご要望いただければお送りいたします。<br/><br/>
                            Q. zoomなどで打ち合わせはできますか？<br/>
                            A. もちろんです！<br/><br/>
                        </Typography>
                    </div>
                </div>
            </IsPc>
            <IsMobile>
                <Grid container justifyContent="center">
                    <Grid item xs={12}>

                        <InfinateGradation
                            color1="#00ff00"
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
                                        <h3 style={{fontFamily: "Noto Serif JP"}}>Please Contact</h3>
                                    </Grid>
                                    <Grid item xs={12} className="content-flex-center" style={{height: "3rem"}}>
                                        <img src={ContactIcon} alt='skillSet' style={{height: "10vh"}}/>
                                    </Grid>
                                </Grid>
                            </div>
                        </InfinateGradation>
                    </Grid>
                </Grid>

                    <Grid container justifyContent="center" style={{marginTop:"10rem"}}>
                        <Grid item xs={12} className="text-center">
                            <UseForm/>
                        </Grid>
                    </Grid>

                    {/*<p className="" style={{border: "solid blue"}}>*/}
                    {/*    <a href="https://twitter.com/antapp_?ref_src=twsrc%5Etfw" className="twitter-follow-button"*/}
                    {/*       data-show-count="false">ツイッター @antapp_</a>*/}
                    {/*    <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>*/}
                    {/*</p>*/}
                    <div className="text-center">
                        <h2 style={{fontFamily: "Noto Serif JP"}} className="margin-top-2" >Q & A</h2>
                        <Typography component="p" variant="body1" textAlign="left" className="padding-3" style={{fontFamily: "Noto Serif JP"}}>
                        Q. 職務経歴書が見たいです<br/>
                        A. お問い合わせフォームにでご要望いただければお送りいたします。<br/><br/>
                        Q. zoomなどで打ち合わせはできますか？<br/>
                        A. もちろんです！<br/><br/>
                        </Typography>
                    </div>
            </IsMobile>
        </>
    );
};

export default contact;



// function MyFormHelperText() {
//     const {focused} = useFormControl() || {};
//
//     const helperText = React.useMemo(() => {
//             return focused ? '入力中' : '入力中じゃない';
//         }, [focused]
//     );
//
//     return (
//         <FormHelperText>{helperText}</FormHelperText>
//     );
// }