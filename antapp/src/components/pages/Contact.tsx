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
                        <h2 style={{fontFamily: "Noto Serif JP"}}>Q & A</h2>
                        <Typography component="p" variant="body1" textAlign="center"
                                    style={{fontFamily: "Noto Serif JP"}}>
                            Q. うんちの頻度は？<br/>
                            A. 言えません。<br/><br/>
                            Q. うんちの頻度は？<br/>
                            A. 言えません。<br/><br/>
                            Q. うんちの頻度は？<br/>
                            A. 言えません。<br/>
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
                        <h2 style={{fontFamily: "Noto Serif JP"}}>Q & A</h2>
                        <Typography component="p" variant="body1" textAlign="center" style={{fontFamily: "Noto Serif JP"}}>
                        Q. うんちの頻度は？<br/>
                        A. 言えません。<br/><br/>
                        Q. うんちの頻度は？<br/>
                        A. 言えません。<br/><br/>
                        Q. うんちの頻度は？<br/>
                        A. 言えません。<br/>
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