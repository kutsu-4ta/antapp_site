import React from "react";
import "./style.css";
import Grid from "@mui/material/Grid";
import { Typography } from '@mui/material';
import {IsPc, IsMobile} from "../utility/Responsive";

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