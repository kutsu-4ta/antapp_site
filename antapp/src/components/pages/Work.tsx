import React, {VFC} from "react";
import "./style.css";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import IconButton from '@mui/material/IconButton';
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
                                    {item.name}
                                    <div className="text-ellipsis">
                                    {item.subscribe}
                                    </div>
                                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                                        (デモサイトへ)
                                    </a>
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

// function TitlebarBelowMasonryImageList() {
//     return (
//         <ImageList sx={{ width: '50', height: '100' }}>
//             <ImageListItem key="Subheader" cols={5}>
//                 <ListSubheader>
//                     これからここの実績を増やしていくんですね〜
//                 </ListSubheader>
//             </ImageListItem>
//
//             {itemData.map((item) => (
//                 <ImageListItem key={item.img}>
//                     <img
//                         src={`${item.img}?w=248&fit=crop&auto=format`}
//                         srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//                         alt={item.title}
//                         loading="lazy"
//                     />
//                     <ImageListItemBar
//                         title={item.title}
//                         subtitle={item.author}
//                         actionIcon={
//                             <IconButton
//                                 sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
//                                 aria-label={`info about ${item.title}`}
//                             >
//                             </IconButton>
//                         }
//                     />
//                 </ImageListItem>
//             ))}
//         </ImageList>
//     );
// }



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