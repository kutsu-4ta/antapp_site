import React from "react";
import "./style.css";
import FormControl from '@mui/material/FormControl';
import MainTitle from "../heading/MainTitle";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import Contact from "../../assets/images/icons/contact_mail.svg";

const contact = () => {
    return (
        <div className="content-top">
            <Grid container justifyContent="center" rowSpacing={1}>
                <Grid item xs={12} className="text-center">
                    <Item>
                        <img src={Contact} className="icon-title" alt="contact"/>
                        <MainTitle>contact</MainTitle>
                    </Item>
                </Grid>
            </Grid>
            <UseForm/>
        </div>
    );
};

export default contact;

interface State {
    email: string;
    name: string;
    content: string;
    validEmail: boolean,
    validName: boolean,
    validContent: boolean
}

function UseForm() {

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
            <Grid container justifyContent="center" className={'text-center'}>
                <Box sx={{display: 'flex', flexWrap: 'wrap'}}>

                    <Grid item xs={12}>
                        <FormControl sx={{m: 1, width: '50vw'}} variant="outlined">
                            <InputLabel htmlFor="input-name">name</InputLabel>
                            <Input id="input-name" value={values.name} onChange={handleChange('name')} />
                            <FormHelperText id="input-name-helper-text">バリデーションがここに表示される</FormHelperText>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl sx={{m: 1, width: '50vw'}} variant="outlined">
                            <InputLabel htmlFor="input-email">e-mail</InputLabel>
                            <Input id="input-email" value={values.email} onChange={handleChange('email')} />
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

                </Box>
            </Grid>
        </>
    );
};

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