import React, {VFC} from "react";
import "./style.css";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import { Typography } from '@mui/material';
import {IsPc, IsMobile} from  "../utility/Responsive";


// TODO:ダイアログを追加するでみられるようにする

const Work: VFC = () => {
    return (
        <div>
            <IsPc>
                <Grid container justifyContent="center" spacing={4} className="text-center">
                    {itemData.map((item) => {
                        return (
                            <Grid item xs={6}>
                                <Item className="content-work-grid">
                                    <div>
                                        <img src={item.img} style={{height: "15rem", width: "15rem"}}/>
                                    </div>
                                    <Typography component="p" variant="body1" textAlign="center">{item.name}</Typography>
                                    <Typography component="p" variant="body2" textAlign="center">{item.subscribe}</Typography>
                                </Item>
                            </Grid>
                        );
                    })}
                </Grid>
            </IsPc>

            <IsMobile>
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
                                        <a href={item.url}>
                                            {item.name}
                                        </a>
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
    url: string;
}

const itemData:itemDataType[] = [
    {
        img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
        name: 'Yamashita公式ポートフォリオサイト',
        subscribe: "このポートフォリオサイトです。React.jsで制作。",
        url: 'https://google.com'
    },
    {
        img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
        name: 'Books',
        subscribe: 'とある会社のLPです。React.jsで作りました。',
        url: 'https://google.com'
    },
    {
        img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
        name: 'Sink',
        subscribe: '○○システムです。Larave × PHP × Reactで作りました。',
        url: 'https://google.com'
    },
    {
        img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
        name: 'Kitchen',
        subscribe: 'うんち',
        url: 'https://google.com'
    },
];