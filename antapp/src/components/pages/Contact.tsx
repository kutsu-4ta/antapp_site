import React from "react";
import "./style.css";
import FormControl from '@mui/material/FormControl';
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import { Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import {IsPc, IsMobile} from "../utility/Responsive";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/core/Icon";


interface State {
    email: string;
    name: string;
    content: string;
    validEmail: boolean,
    validName: boolean,
    validContent: boolean
}

const UseForm = () => {

    const [values, setValues] = React.useState<State>({
        email: '',
        name: '',
        content: '',
        validEmail: false,
        validName: false,
        validContent: false
    });

    const handleChange =
        (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setValues({ ...values, [prop]: event.target.value });
        };

    // TODO:名前、問い合わせ内容のバリデーション、文字列長さ、不正文字
    const handlelValidateString = (targetState: State) => {
        const validState = targetState ? true : false ;
        setValues({
            ...values,
            validName: validState,
        });
    };

    // TODO:メールのバリデーション
    const handlelValidateMail = (targetState: State) => {
        const validState = targetState ? true : false ;
        setValues({
            ...values,
            validName: validState,
        });
    };

    return (
        <>
                <Grid container justifyContent="center" className="text-center">
                    <Box sx={{display: 'flex', flexWrap: 'wrap'}}>

                        <Grid item xs={12}>
                            <FormControl sx={{m: 1, width: '50vw'}} variant="outlined">
                                <InputLabel htmlFor="input-name">name</InputLabel>
                                <Input id="input-name" value={values.name} onChange={handleChange('name')}/>
                                <FormHelperText id="input-name-helper-text">バリデーションがここに表示される</FormHelperText>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl sx={{m: 1, width: '50vw'}} variant="outlined">
                                <InputLabel htmlFor="input-email">e-mail</InputLabel>
                                <Input id="input-email" value={values.email} onChange={handleChange('email')}/>
                                <FormHelperText id="input-email-helper-text">バリデーションがここに表示される</FormHelperText>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl sx={{m: 1, width: '50vw'}} variant="outlined">
                                <TextField
                                    id="filled-multiline-static"
                                    label="content"
                                    multiline
                                    rows={6}
                                    variant="standard"
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <Button variant="contained" endIcon={<SendIcon />} onClick={()=>alert('送信するで!')}>
                                Send
                            </Button>
                        </Grid>
                    </Box>
                </Grid>
        </>
    );
};

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