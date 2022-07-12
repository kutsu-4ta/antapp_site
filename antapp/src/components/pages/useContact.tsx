import React, {useRef} from "react";
import {useState} from "react";
import { Dialog } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress'
import {init, send} from "emailjs-com";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import SendIcon from "@mui/icons-material/Send";
import {validateEmail, validateRequired} from "../utility/validation";
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Sentence from "../atoms/texts/Sentence";
import { MyDialog } from '../CustomDialog/MyDialog';
import FoxLogo from "../../assets/images/fox-white.svg";

const UseForm = () => {
    interface State {
        company: string | null;
        fromName: string | null;
        email: string | null;
        content: string | null;
        validCompany: string | null;
        validFromName: string | null;
        validEmail: string | null;
        validContent: string | null;
        errors: string | null;
    }

    type MyDialogProps = {
        onClose: (value: string) => void
        title?: string
        message?: string
    }


    const [isOpenDialog, setIsOpenDialog] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [modalConfig, setModalConfig] = React.useState<MyDialogProps | undefined>()
    const [state, setState] = React.useState<State>({
        company: '',
        fromName: '',
        email: '',
        content: '',
        validCompany: '',
        validFromName: '',
        validEmail: '',
        validContent: '',
        errors: '',
    });

    const companyInputRef = useRef<HTMLInputElement>();
    const contentInputRef = useRef<HTMLInputElement>();
    const fromNameInputRef = useRef<HTMLInputElement>();
    const emailInputRef = useRef<HTMLInputElement>();

    const openDialog = () => setIsOpenDialog(true);
    const closeDialog = () => setIsOpenDialog(false);

    const onChangeFormValue = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(event.target.value)
        setState({...state, [prop]: event.target.value});
    };
    const openConfirmDialog = async () => {
        const ret = await new Promise<string>((resolve) => {
            setModalConfig({
                onClose: resolve,
                title: 'お問い合わせを送信しますか？',
                message: 'ご入力頂いた宛先に確認メールが自動送信されます.'
            })
        })
        setModalConfig(undefined)
        if (ret === 'ok') {
            console.log('OK押した');
            setState((state) => ({...state, errors: ''}));

            // 送信
            const pubKey = process.env.REACT_APP_CONTACT_PUB_KEY;
            const serviceID = process.env.REACT_APP_CONTACT_SERVICE_ID;
            const templateID = process.env.REACT_APP_TEMPLATE_ID;
            if (pubKey !== undefined && serviceID !== undefined && templateID !== undefined && state.errors === '' ) {
                init(pubKey);

                const template_param = {
                    title: '【新規問い合わせ】',
                    company: state.company,
                    from_name: state.fromName,
                    to_name: process.env.REACT_APP_MY_EMAIL,
                    customerEmail: state.email,
                    from_email: process.env.REACT_APP_MY_EMAIL,
                    message: state.content
                };

                setIsLoading(true);
                await send(serviceID, templateID, template_param).then(
                    () => {
                        setIsLoading(false);
                        openDialog();
                        setState((state) => ({...state, company: '', fromName: '', email: '', content: '', errors: ''}));
                    }
                );
            };
        }
        if (ret === 'cancel') {
            console.log('Cancel押した')
        }
    };

    // 送信
    const sendForm = async () => {
        let validFromName: string | null = null;
        if (!validateRequired(fromNameInputRef.current?.value)) {
            validFromName = '名前を入力してください';
        }
        let validEmail: string | null = null;
        if (!validateRequired(emailInputRef.current?.value)) {
            validEmail = 'メールアドレスを入力してください';
        }
        if (!validateEmail(emailInputRef.current?.value)) {
            validEmail = validEmail ? validEmail : `不正なメールアドレスです`;
        }

        let validContent: string | null = null;
        if (!validateRequired(contentInputRef.current?.value)) {
            validContent = 'お問い合わせ内容を入力してください';
        }

        if (validFromName || validEmail || validContent) {
            setState((state) => ({
                ...state,
                validFromName: validFromName,
                validEmail: validEmail,
                validContent: validContent,
                errors: 'フォームを送信できませんでした.'
            }));
            return;
        } else {
            setState((state) => ({
                ...state,
                validFromName: null,
                validEmail: null,
                validContent: null,
                errors: null
            }));
        }

        openConfirmDialog();

    };
    return (
        <>
            <Grid container justifyContent="center" className="text-center">
                <Box sx={{display: 'flex', flexWrap: 'wrap'}}>

                    <Grid item xs={12}>
                        <FormControl sx={{m: 1, width: '50vw'}} variant="outlined">
                            <TextField
                                id="outlined-textarea"
                                multiline
                                label="会社名"
                                placeholder='株式会社エグザンプル'
                                variant="standard"
                                sx={{background: '#FFFFFF'}}
                                value={state.company}
                                type="text"
                                inputRef={companyInputRef}
                                onChange={onChangeFormValue('company')}
                            />
                            <FormHelperText
                                id="input-name-helper-text">{state.validCompany ? `*${state.validCompany}` : ''}</FormHelperText>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl sx={{m: 1, width: '50vw'}} variant="outlined">
                            <TextField
                                // required
                                label="お名前"
                                required
                                placeholder='山田 太郎'
                                variant="standard"
                                value={state.fromName}
                                type="text"
                                inputRef={fromNameInputRef}
                                onChange={onChangeFormValue('fromName')}
                            />
                            <FormHelperText id="input-name-helper-text" focused
                                            error>{state.validFromName ? `*${state.validFromName}` : ''}</FormHelperText>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl sx={{m: 1, width: '50vw'}} variant="outlined">

                            <TextField
                                label="メールアドレス"
                                variant="standard"
                                required
                                placeholder='taro@example.com'
                                value={state.email}
                                type="text"
                                inputRef={emailInputRef}
                                onChange={onChangeFormValue('email')}
                            />
                            <FormHelperText id="input-email-helper-text" focused
                                            error>{state.validEmail ? `*${state.validEmail}` : ''}</FormHelperText>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl sx={{m: 1, width: '50vw'}}>
                            <TextField
                                label="お問い合わせ内容"
                                variant="standard"
                                required
                                rows={6}
                                multiline
                                value={state.content}
                                onChange={onChangeFormValue('content')}
                                inputRef={contentInputRef}
                                placeholder="（例）JavaScriptを用いたWebサイトのコーディングについてご依頼の相談"
                            />
                            <FormHelperText id="input-content-helper-text" focused
                                            error>{state.validContent ? `*${state.validContent}` : ''}</FormHelperText>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <Button variant="contained" endIcon={<SendIcon/>} onClick={() => sendForm()}>
                            <text className="text-center">
                                フォームを送る！
                            </text>
                        </Button>
                    </Grid>
                </Box>

                {modalConfig && <MyDialog {...modalConfig} />}

                <Dialog
                    open={isOpenDialog}
                    onClose={closeDialog}
                >
                    <DialogTitle>{"お問い合わせありがとうございます！"}</DialogTitle>
                    <DialogContent>
                        メモ：猫の画像貼る
                        <DialogContentText>
                            <Sentence text={"お問い合わせの内容につきましては、別途ご返信いたします。"}></Sentence>
                            <Sentence text={"何卒よろしくお願いいたします。"}></Sentence>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={closeDialog}  variant="contained">
                            <text className="text-center">
                            完了
                            </text>
                        </Button>
                    </DialogActions>
                </Dialog>

                <Dialog open={isLoading}>
                    <DialogContent style={{textAlign:"center"}}>
                        <Grid container justifyContent="center">
                            <Grid item xs={12}>
                                <img src={FoxLogo} className="icon-logo"/>
                            </Grid>
                            <Grid item xs={12}>
                                <CircularProgress/>
                            </Grid>
                        </Grid>
                    </DialogContent>
                </Dialog>
            </Grid>
        </>
    );
};

export default UseForm;