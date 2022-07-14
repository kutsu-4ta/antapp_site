import React, {VFC, useState} from "react";
import "./style.css";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import {Dialog, Typography} from '@mui/material';
import {IsPc, IsMobile} from  "../utility/Responsive";
import YamashitaSite from "../../assets/images/works/yamashitaWebSite.png";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@mui/material/Button";
import InfinateGradation from "../backgrounAnimation/InfinateGradation";
import HomeMobile from "../../assets/images/PlayerUI.png";
import WorkIcon from "../../assets/images/icons/works_pc_phone.svg";

// TODO:ダイアログを追加するでみられるようにする

const Work: VFC = () => {

    const [isOpenDialog, setIsOpenDialog] = useState(false);
    const openDialog = () => setIsOpenDialog(true);
    const closeDialog = () => setIsOpenDialog(false);

    return (
        <div>
            <IsPc>
                <div>
                    <Grid container justifyContent="center" spacing={4} className="text-center">
                        {itemData.map((item) => {
                            return (
                                    <Grid item xs={6}
                                          // onClick={() => {openDialog()}}
                                    >
                                        <Item className="content-work-grid">
                                            <div>
                                                <img src={item.img}
                                                     style={{height: "100%", width: "100%", border: "solid"}}/>
                                            </div>
                                            <Typography component="p" variant="body1"
                                                        textAlign="center">{item.name}</Typography>
                                            <Typography component="p" variant="body2"
                                                        textAlign="center">{item.subscribe}</Typography>
                                            <Dialog
                                                open={isOpenDialog}
                                            >
                                                <DialogTitle>{item.name}の感想</DialogTitle>
                                                <DialogContent>
                                                    <DialogContentText>
                                                        <Typography component="p" variant="body1" textAlign="center">
                                                            {item.comment}
                                                        </Typography>
                                                    </DialogContentText>
                                                </DialogContent>
                                                <DialogActions>
                                                    <Button onClick={()=>closeDialog} variant="contained">
                                                        <text className="text-center">
                                                            閉じる
                                                        </text>
                                                    </Button>
                                                </DialogActions>
                                            </Dialog>
                                        </Item>
                                    </Grid>
                            );
                        })}
                    </Grid>

                </div>
            </IsPc>

            <IsMobile>

                <Grid container justifyContent="center">
                    <Grid item xs={12}>

                        <InfinateGradation
                            color1="#00ffff"
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
                                        <h3 style={{fontFamily: "Noto Serif JP"}}>My Works</h3>
                                    </Grid>
                                    <Grid item xs={12} className="content-flex-center" style={{height: "3rem"}}>
                                        <img src={WorkIcon} alt='skillSet' style={{height: "10vh"}}/>
                                    </Grid>
                                </Grid>

                            </div>
                        </InfinateGradation>
                    </Grid>
                </Grid>

                <Grid container justifyContent="center" spacing={1} className="text-center"
                    // style={{margin: "2rem"}}
                >
                    <Grid container justifyContent="center" spacing={1} className="text-center"
                        // style={{margin: "2rem"}}
                    >
                        {itemData.map((item) => {
                            return (
                                <Grid item xs={12} className="mobile-text-size-body">
                                    <Item className="mobile-content-work-grid">
                                        <div>
                                            <img src={item.img} style={{height: "6rem", width: "6rem"}}/>
                                        </div>
                                    </Item>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
            </IsMobile>
        </div>
    )
}

export default Work;


type itemDataType = {
    img: string;
    name: string;
    subscribe: string;
    comment: string;
}

const itemData:itemDataType[] = [
    {
        img: YamashitaSite,
        name: 'Yamashitaポートフォリオサイト',
        subscribe: "このサイトです。React.js × TypeScriptで制作。",
        comment: 'reactとtypeScriptの学習も兼ねて作りました。reactの状態管理はreduxを使いました。不恰好なサイトですが、今後もっとかっこ良くしていこうと思います。ちょっとパンチのあるサイトにしたいと思い、あえてナビゲーションバーを作らずにスクロールでやってみました。'
    },
    // {
    //     img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    //     name: 'Sink',
    //     subscribe: '○○システムです。Larave × PHP × Reactで作りました。',
    //     url: 'https://google.com'
    // },
    // {
    //     img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    //     name: 'Kitchen',
    //     subscribe: 'うんち',
    //     url: 'https://google.com'
    // },
];