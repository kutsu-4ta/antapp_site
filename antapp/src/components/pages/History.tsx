/**
 * NOTE: [機能] 自分語りコンポーネント
 */

import React from 'react';
import Grid from "@mui/material/Grid";
import './style.css';
import {IsPc, IsMobile} from "../utility/Responsive";
// スタイル
import ScrollFader from '../scrollEvent/Fader';
import {Typography} from "@mui/material";
import {Link} from "react-router-dom";

console.log('history');
export default () => {
    const width = window.innerWidth;
    // ボディ
    return (
        <div>
            <IsPc>
                <div style={{width: width * 2}}>
                    <Grid container justifyContent="center">
                        <Grid item xs={6} className="content-flex-center">
                            <Grid container justifyContent="center" className="padding-3">
                                <Grid item xs={12}>
                                    <Link to={'/about'}>
                                        <button> 戻る</button>
                                    </Link>
                                    <Typography component="p" variant="h3" textAlign="left" mb="8px"
                                                style={{fontFamily: "Noto Serif JP"}}>
                                        MyHistory
                                    </Typography>
                                </Grid>
                                {/*ボディ*/}
                                <Grid item xs={12}>
                                    <Typography component="p" variant="inherit" textAlign="left"
                                                mb="8px"
                                                style={{fontFamily: "Noto Serif JP"}}>
                                        1996年、滋賀県の田舎に生まれる。
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography component="p" variant="inherit" textAlign="left"
                                                mb="8px"
                                                style={{fontFamily: "Noto Serif JP"}}>
                                        小学生時代、図画・工作で毎年賞状を貰っていたことが唯一の自慢...<br/>
                                        当時の将来の夢はお笑い芸人。
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography component="p" variant="inherit" textAlign="left"
                                                mb="8px"
                                                style={{fontFamily: "Noto Serif JP"}}>
                                        中学時代、マイケル・ジャクソンを敬愛。周りがBumpOfChickenやアジカンを聴くなか洋楽厨を拗らせる。<br/>
                                        魚釣りにハマり、平日の朝5時から友人と魚釣りに行き、9時から登校するという漁師のような生活を送る。
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography component="p" variant="inherit" textAlign="left"
                                                mb="8px"
                                                style={{fontFamily: "Noto Serif JP"}}>
                                        高校時代、当時、映像監督を目指し大阪芸術大学を受験し合格。<br/>
                                        入学金を振り込む際に自分の人生を見つめ直し、浪人を決意。<br/>
                                        （お父さんお母さんありがとう...）
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} className="content-flex-center">
                            <Grid container justifyContent="center" className="padding-3">
                                <Grid item xs={12}>
                                    <Typography component="p" variant="inherit" textAlign="left"
                                                mb="8px"
                                                style={{fontFamily: "Noto Serif JP"}}>
                                        1年の浪人生活を経て、受験当日に肺気胸で倒れ、そのまま緊急入院。<br/>
                                        絶望に打ちひしがれていたが、退院後に受けた龍谷大学 理工学部 電子情報学部に合格し、晴れて大学生となる。
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography component="p" variant="inherit" textAlign="left"
                                                mb="8px"
                                                style={{fontFamily: "Noto Serif JP"}}>
                                        大学時代（前半）、友人と京都へ洋服を買いに行ったはずが、なぜか30万円のギターをローンで購入。<br/>
                                        軽音サークルでバンドに明け暮れる。<br/>
                                        授業についていけず単位を落とし、苦労して入ったはずの大学を留年。<br/>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <ScrollFader>
                                        <Grid container justifyContent="center">
                                            <Grid item xs={12}>

                                                <Typography component="p" variant="inherit" textAlign="left"
                                                            mb="8px"
                                                            style={{fontFamily: "Noto Serif JP"}}>
                                                    大学時代（後半）、留年したこともあり、お金はないが時間はあったため、<br/>
                                                    自分の進路を決めるため、大学時代は思いつく限りやりたいことをやると決める。<br/>
                                                    カメラ、動画編集、キャンプ、バイクの整備、DIY、エレキギター・エフェクターの自作、Tシャツの制作・販売などを行う。<br/>
                                                    その一環で、当時、動画編集や作曲に使っていたMacBookProで様々な無料ツールを漁りまくる。<br/>
                                                    AdobeCC, Blender, Unity, arduino等を触っているうちにプログラミングを好きになっていく。<br/>
                                                    それまでプログラミングは授業と研究室でC言語やPythonを扱った程度であったが、興味がなく好きではなかった。<br/>
                                                    ITの流れの速さと、物理的な資源をほとんど必要としない性質に惚れ、<br/>
                                                    そのままWeb業界を志望するようになり、プログラミング・Web関連知識の猛勉強期間に入る。<br/>
                                                    中小企業のIT企業から内定をいただき、卒業後に就職。
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Typography component="p" variant="inherit" textAlign="left"
                                                            mb="8px"
                                                            style={{fontFamily: "Noto Serif JP"}}>
                                                    会社員時代、自社製品の開発と並行して新卒採用の仕事に取り組む。<br/>
                                                    業務を通してビジネスの面白さに気づく。<br/>
                                                    新卒採用の仕事柄、自分のキャリアを常日頃から見直していたこともあり、お世話になった会社を退社。<br/>
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography component="p" variant="inherit" textAlign="left"
                                                            mb="8px"
                                                            style={{fontFamily: "Noto Serif JP"}}>
                                                    現在、個人事業主という形で<br/>
                                                    1人のエンジニアとしてスキルアップをしながら、社会にイノベーションを起こすべく奮闘している。<br/>
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </ScrollFader>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </IsPc>
        </div>
    );
};