import { PureComponent } from "react";
import { withRouter } from './common/withRouter';
import React from "react";
import workout from "./common/icons/workout.svg";
import craft from "./common/icons/craft.svg";
import videoGame from "./common/icons/video_game.svg";
import paint from "./common/icons/paint.svg";
import boardGame from "./common/icons/board_game.svg";
import outdoor from "./common/icons/outdoor.svg";
import pingPong from "./common/icons/ping_pong.svg";
import coffee from "./common/icons/coffee.svg";
import selected from "./common/icons/selected.svg";


export class SelectCategories extends PureComponent {
    constructor(props) {
        super(props);
    }

    onClickProceed = (e) => {
        this.props.navigate('/selectUsername')
    };

    render() {
        return (
            <div>
                <div style={{width: '100%', height: '100%', position: 'relative', background: '#E2F1FE'}}>
                    <div style={{width: 732.50, height: 637, left: 354, top: 193, position: 'absolute'}}>
                        <div style={{left: 60, top: 0, position: 'absolute', color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Select categories you are interested in -></div>
                        <div style={{width: 585, left: 72, top: 59, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>This helps us personalize your feed and send suitable recommendations!</div>
                        <div style={{width: 730, height: 300, left: 0, top: 163, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 30, display: 'inline-flex'}}>
                            <div style={{width: 160, height: 140, paddingLeft: 50, paddingRight: 50, paddingTop: 30, paddingBottom: 30, background: 'white', boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.10)', borderRadius: 10, overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                            <img style={{width: 92.12, height: 120.21, left: 7.47, top: 11.76, position: 'absolute'}} src={workout} />
                                <div style={{width: 60, height: 60, position: 'relative'}}>
                                    {/* <div style={{width: 5.40, height: 5.62, left: 53.32, top: 27.13, position: 'absolute', background: '#83EEEF'}}></div>
                                    <div style={{width: 5.73, height: 26.94, left: 47.59, top: 16.48, position: 'absolute', background: '#F4BA43'}}></div>
                                    <div style={{width: 5.73, height: 34.08, left: 40.45, top: 12.90, position: 'absolute', background: '#EE81D4'}}></div>
                                    <div style={{width: 20.86, height: 5.62, left: 19.59, top: 27.13, position: 'absolute', background: '#83EEEF'}}></div>
                                    <div style={{width: 5.73, height: 34.08, left: 13.86, top: 12.90, position: 'absolute', background: '#EE81D4'}}></div>
                                    <div style={{width: 5.73, height: 26.94, left: 6.72, top: 16.48, position: 'absolute', background: '#F4BA43'}}></div>
                                    <div style={{width: 5.25, height: 5.62, left: 1.47, top: 27.13, position: 'absolute', background: '#83EEEF'}}></div>
                                    <div style={{width: 59.87, height: 8.25, left: 0.16, top: 25.82, position: 'absolute', background: '#1C274C'}}></div>
                                    <div style={{width: 8.35, height: 36.71, left: 12.55, top: 11.59, position: 'absolute', background: '#1C274C'}}></div>
                                    <div style={{width: 42.08, height: 36.71, left: 5.41, top: 11.59, position: 'absolute', background: '#1C274C'}}></div>
                                    <div style={{width: 8.35, height: 29.56, left: 46.28, top: 15.16, position: 'absolute', background: '#1C274C'}}></div> */}
                                </div>
                                <div style={{color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Workout</div>
                            </div>
                            <div style={{width: 160, height: 140, paddingLeft: 50, paddingRight: 50, paddingTop: 30, paddingBottom: 30, background: 'white', boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.10)', borderRadius: 10, overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <img style={{width: 92.12, height: 120.21, left: 7.47, top: 11.76, position: 'relative'}} src={craft} />
                                <div style={{width: 60, height: 60, position: 'relative'}}>
                                    {/* <div style={{width: 17.88, height: 17.88, left: 40.76, top: 1.36, position: 'absolute', background: '#F4BA43'}}></div>
                                    <div style={{width: 15.57, height: 17.24, left: 54.04, top: 18.15, position: 'absolute', transform: 'rotate(135deg)', transformOrigin: '0 0', background: '#EE7975'}}></div>
                                    <div style={{width: 16.23, height: 16.23, left: 5.94, top: 37.83, position: 'absolute', background: '#6CB9F9'}}></div>
                                    <div style={{width: 21.55, height: 21.55, left: 1.36, top: 37.09, position: 'absolute'}}>
                                        <div style={{width: 14.31, height: 12.39, left: 0, top: 0, position: 'absolute', background: '#1C274C'}}></div>
                                        <div style={{width: 12.39, height: 14.31, left: 9.16, top: 7.24, position: 'absolute', background: '#1C274C'}}></div>
                                    </div>
                                    <div style={{width: 32.28, height: 19.43, left: 45.73, top: 28.01, position: 'absolute', transform: 'rotate(135deg)', transformOrigin: '0 0', background: '#EE81D4'}}></div>
                                    <div style={{width: 60, height: 60, left: 0, top: -0, position: 'absolute', background: '#1C274C'}}></div> */}
                                </div>
                                <div style={{color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Crafts</div>
                            </div>
                            <div style={{width: 160, height: 140, paddingLeft: 50, paddingRight: 50, paddingTop: 30, paddingBottom: 30, background: 'white', boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.10)', borderRadius: 10, overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <img style={{width: 92.12, height: 120.21, left: 7.47, top: 11.76, position: 'relative'}} src={videoGame} />
                                <div style={{width: 60, height: 60, position: 'relative'}}>
                                    {/* <div style={{width: 20.04, height: 24.05, left: 19.98, top: 28, position: 'absolute', background: '#71E48F'}}></div>
                                    <div style={{width: 2, height: 24.05, left: 19.98, top: 28, position: 'absolute', background: '#71E48F'}}></div>
                                    <div style={{width: 3.01, height: 24.05, left: 31, top: 28, position: 'absolute', background: '#71E48F'}}></div>
                                    <div style={{width: 20.04, height: 5.01, left: 19.98, top: 28, position: 'absolute', background: '#71E48F'}}></div>
                                    <div style={{width: 28.06, height: 8.02, left: 15.97, top: 22.99, position: 'absolute', background: '#71E48F'}}></div>
                                    <div style={{width: 28.06, height: 8.02, left: 15.97, top: 22.99, position: 'absolute', background: '#71E48F'}}></div>
                                    <div style={{width: 2, height: 8.02, left: 15.97, top: 22.99, position: 'absolute', background: '#71E48F'}}></div>
                                    <div style={{width: 26.05, height: 8.02, left: 17.97, top: 22.99, position: 'absolute'}}>
                                        <div style={{width: 15.03, height: 8.02, left: 0, top: 0, position: 'absolute', background: '#71E48F'}}></div>
                                        <div style={{width: 8.02, height: 8.02, left: 18.04, top: 0, position: 'absolute', background: '#71E48F'}}></div>
                                    </div>
                                    <div style={{width: 10.02, height: 18.04, left: 26.99, top: 0.94, position: 'absolute', background: '#F4BA43'}}></div>
                                    <div style={{width: 10.02, height: 4.01, left: 26.99, top: 7.95, position: 'absolute', background: '#F4BA43'}}></div>
                                    <div style={{width: 8.02, height: 18.04, left: 22.99, top: 0.94, position: 'absolute', background: '#F2A861'}}></div>
                                    <div style={{width: 10.02, height: 6.01, left: 4.95, top: 47.04, position: 'absolute', background: '#EE81D4'}}></div>
                                    <div style={{width: 10.02, height: 6.01, left: 4.95, top: 47.04, position: 'absolute', background: '#EE81D4'}}></div>
                                    <div style={{width: 10.02, height: 6.01, left: 14.97, top: 47.04, position: 'absolute', background: '#EE81D4'}}></div>
                                    <div style={{width: 10.02, height: 6.01, left: 14.97, top: 47.04, position: 'absolute', background: '#EE81D4'}}></div>
                                    <div style={{width: 10.02, height: 6.01, left: 24.99, top: 47.04, position: 'absolute', background: '#EE81D4'}}></div>
                                    <div style={{width: 10.02, height: 6.01, left: 24.99, top: 47.04, position: 'absolute', background: '#EE81D4'}}></div>
                                    <div style={{width: 10.02, height: 6.01, left: 35.01, top: 47.04, position: 'absolute', background: '#EE81D4'}}></div>
                                    <div style={{width: 10.02, height: 6.01, left: 35.01, top: 47.04, position: 'absolute', background: '#EE81D4'}}></div>
                                    <div style={{width: 10.02, height: 6.01, left: 45.03, top: 47.04, position: 'absolute', background: '#EE81D4'}}></div>
                                    <div style={{width: 10.02, height: 6.01, left: 45.03, top: 47.04, position: 'absolute', background: '#EE81D4'}}></div>
                                    <div style={{width: 10.02, height: 6.01, left: 9.96, top: 53.05, position: 'absolute', background: '#EE81D4'}}></div>
                                    <div style={{width: 10.02, height: 6.01, left: 9.96, top: 53.05, position: 'absolute', background: '#EE81D4'}}></div>
                                    <div style={{width: 10.02, height: 6.01, left: 19.98, top: 53.05, position: 'absolute', background: '#EE81D4'}}></div>
                                    <div style={{width: 10.02, height: 6.01, left: 19.98, top: 53.05, position: 'absolute', background: '#EE81D4'}}></div>
                                    <div style={{width: 10.02, height: 6.01, left: 30, top: 53.05, position: 'absolute', background: '#EE81D4'}}></div>
                                    <div style={{width: 10.02, height: 6.01, left: 30, top: 53.05, position: 'absolute', background: '#EE81D4'}}></div>
                                    <div style={{width: 10.02, height: 6.01, left: 40.02, top: 53.05, position: 'absolute', background: '#EE81D4'}}></div>
                                    <div style={{width: 10.02, height: 6.01, left: 40.02, top: 53.05, position: 'absolute', background: '#EE81D4'}}></div>
                                    <div style={{width: 8.02, height: 6.01, left: 50.04, top: 53.05, position: 'absolute', background: '#EE81D4'}}></div>
                                    <div style={{width: 8.02, height: 6.01, left: 50.04, top: 53.05, position: 'absolute', background: '#EE81D4'}}></div>
                                    <div style={{width: 8.02, height: 6.01, left: 1.94, top: 53.05, position: 'absolute', background: '#EE81D4'}}></div>
                                    <div style={{width: 8.02, height: 6.01, left: 1.94, top: 53.05, position: 'absolute', background: '#EE81D4'}}></div>
                                    <div style={{width: 15.91, height: 19.92, left: 22.05, top: 0, position: 'absolute', background: '#1C274C'}}></div>
                                    <div style={{width: 3.88, height: 11.90, left: 25.05, top: 4.01, position: 'absolute', background: '#1C274C'}}></div>
                                    <div style={{width: 58, height: 37.95, left: 1, top: 22.05, position: 'absolute', background: '#1C274C'}}></div> */}
                                </div>
                                <div style={{color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Video Games</div>
                            </div>
                            <div style={{width: 160, height: 140, paddingLeft: 50, paddingRight: 50, paddingTop: 30, paddingBottom: 30, background: 'white', boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.10)', borderRadius: 10, overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <img style={{width: 92.12, height: 120.21, left: 7.47, top: 11.76, position: 'relative'}} src={paint} />
                                <div style={{width: 60, height: 60, position: 'relative'}}>
                                    {/* <div style={{width: 53.28, height: 53.29, left: 3.35, top: 3.35, position: 'absolute', background: 'white'}}></div>
                                    <div style={{width: 46.64, height: 46.72, left: 6.71, top: 6.60, position: 'absolute', background: '#F4BA43'}}></div>
                                    <div style={{width: 60, height: 59.97, left: 0, top: 0.02, position: 'absolute', background: '#1C274C'}}></div>
                                    <div style={{width: 4.37, height: 4.37, left: 40.56, top: 15.67, position: 'absolute', background: 'white'}}></div>
                                    <div style={{width: 4.37, height: 4.37, left: 41.80, top: 33.54, position: 'absolute', background: '#6CB9F9'}}></div>
                                    <div style={{width: 4.37, height: 4.37, left: 28.70, top: 43.83, position: 'absolute', background: 'white'}}></div>
                                    <div style={{width: 4.37, height: 4.37, left: 13.11, top: 37.38, position: 'absolute', background: '#6CB9F9'}}></div>
                                    <div style={{width: 39.72, height: 39.20, left: 9.78, top: 12.34, position: 'absolute'}}>
                                        <div style={{width: 11.03, height: 11.03, left: 27.45, top: 0, position: 'absolute', background: '#1C274C'}}></div>
                                        <div style={{width: 11.03, height: 11.03, left: 28.69, top: 17.86, position: 'absolute', background: '#1C274C'}}></div>
                                        <div style={{width: 11.03, height: 11.03, left: 15.58, top: 28.17, position: 'absolute', background: '#1C274C'}}></div>
                                        <div style={{width: 11.03, height: 11.03, left: 0, top: 21.72, position: 'absolute', background: '#1C274C'}}></div>
                                    </div> */}
                                </div>
                                <div style={{color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Art</div>
                            </div>
                            <div style={{width: 160, height: 140, paddingLeft: 50, paddingRight: 50, paddingTop: 30, paddingBottom: 30, background: 'white', boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.10)', borderRadius: 10, overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <img style={{width: 92.12, height: 120.21, left: 7.47, top: 11.76, position: 'relative'}} src={coffee} />
                                <div style={{width: 60, height: 60, position: 'relative'}}>
                                    {/* <div style={{width: 34.80, height: 45.57, left: 12.60, top: 13.17, position: 'absolute', background: '#EE7975'}}></div>
                                    <div style={{width: 37.50, height: 48.08, left: 11.25, top: 11.92, position: 'absolute', background: '#1C274C'}}></div>
                                    <div style={{width: 34.72, height: 9.43, left: 12.64, top: 1.25, position: 'absolute', background: '#EE7975'}}></div>
                                    <div style={{width: 37.50, height: 11.92, left: 11.25, top: -0, position: 'absolute', background: '#1C274C'}}></div>
                                    <div style={{width: 39.27, height: 6.97, left: 10.36, top: 7.60, position: 'absolute', background: '#F4BA43'}}></div>
                                    <div style={{width: 41.78, height: 9.49, left: 9.11, top: 6.35, position: 'absolute', background: '#1C274C'}}></div>
                                    <div style={{width: 33.49, height: 29.14, left: 13.26, top: 21.72, position: 'absolute', background: '#F4BA43'}}></div>
                                    <div style={{width: 36.19, height: 31.64, left: 11.91, top: 20.47, position: 'absolute', background: '#1C274C'}}></div> */}
                                </div>
                                <div style={{color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Coffee Chats</div>
                            </div>
                            <div style={{width: 160, height: 140, paddingLeft: 50, paddingRight: 50, paddingTop: 30, paddingBottom: 30, background: 'white', boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.10)', borderRadius: 10, overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <img style={{width: 92.12, height: 120.21, left: 7.47, top: 11.76, position: 'relative'}} src={outdoor} />
                                <div style={{width: 60, height: 60, position: 'relative'}}>
                                    {/* <div style={{width: 12.50, height: 12.50, left: 40, top: 5, position: 'absolute', border: '1.88px #1C274C solid'}}></div>
                                    <div style={{width: 26, height: 39.39, left: 10, top: 15.61, position: 'absolute', border: '1.88px #1C274C solid'}}></div>
                                    <div style={{width: 15, height: 7.50, left: 7.50, top: 42.50, position: 'absolute', border: '1.88px #1C274C solid'}}></div>
                                    <div style={{width: 10, height: 0.62, left: 40, top: 30, position: 'absolute', border: '1.88px #1C274C solid'}}></div> */}
                                </div>
                                <div style={{color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Outdoor Sports</div>
                            </div>
                            <div style={{width: 160, height: 140, paddingLeft: 50, paddingRight: 50, paddingTop: 30, paddingBottom: 30, background: 'white', boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.10)', borderRadius: 10, overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <img style={{width: 92.12, height: 120.21, left: 7.47, top: 11.76, position: 'relative'}} src={pingPong} />
                                <div style={{width: 60, height: 60, position: 'relative'}}>
                                    <div style={{width: 60, height: 60, left: 0, top: 0, position: 'absolute'}}>
                                        {/* <div style={{width: 60, height: 60, left: 0, top: 0, position: 'absolute', background: '#1C274C'}}></div>
                                        <div style={{width: 45.44, height: 45.55, left: 2.15, top: 2.16, position: 'absolute', background: '#EE7975'}}></div>
                                        <div style={{width: 36.04, height: 35.99, left: 21.83, top: 21.89, position: 'absolute', background: 'white'}}></div>
                                        <div style={{width: 43.90, height: 44.01, left: 3.83, top: 2.69, position: 'absolute', background: '#F2A861'}}></div>
                                        <div style={{width: 16.09, height: 6.35, left: 17.13, top: 4.37, position: 'absolute'}}>
                                            <div style={{width: 12.90, height: 4.23, left: 0, top: 0, position: 'absolute', background: 'white'}}></div>
                                            <div style={{width: 2.14, height: 2.14, left: 13.94, top: 4.21, position: 'absolute', background: 'white'}}></div>
                                        </div>
                                        <div style={{width: 33.29, height: 33.25, left: 23.20, top: 23.26, position: 'absolute', background: 'white'}}></div>
                                        <div style={{width: 12.86, height: 12.86, left: 12.86, top: 21.43, position: 'absolute', background: '#1C274C'}}></div>
                                        <div style={{width: 8.57, height: 8.57, left: 15, top: 23.57, position: 'absolute', background: '#6CB9F9'}}></div>
                                        <div style={{width: 6.77, height: 6.77, left: 15.56, top: 24.70, position: 'absolute', background: '#83EEEF'}}></div> */}
                                    </div>
                                </div>
                                <div style={{color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Ping Pong</div>
                            </div>
                            <div style={{width: 160, height: 140, paddingLeft: 50, paddingRight: 50, paddingTop: 30, paddingBottom: 30, background: 'white', boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.10)', borderRadius: 10, overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <img style={{width: 92.12, height: 120.21, left: 7.47, top: 11.76, position: 'relative'}} src={boardGame} />
                                <div style={{width: 60, height: 60, position: 'relative'}}>
                                    {/* <div style={{width: 28.72, height: 28.72, left: 30, top: 30, position: 'absolute', background: '#71E48F'}}></div>
                                    <div style={{width: 22.40, height: 35.05, left: 30, top: 1.28, position: 'absolute', background: '#6CB9F9'}}></div>
                                    <div style={{width: 28.72, height: 35.05, left: 7.60, top: 1.28, position: 'absolute', background: '#EE7975'}}></div>
                                    <div style={{width: 35.05, height: 28.72, left: 1.28, top: 30, position: 'absolute', background: '#F4BA43'}}></div>
                                    <div style={{width: 60, height: 60, left: -0, top: 0, position: 'absolute', background: '#1C274C'}}></div>
                                    <div style={{width: 2.55, height: 6.34, left: 47.10, top: 42.88, position: 'absolute', background: '#1C274C'}}></div>
                                    <div style={{width: 2.55, height: 3.10, left: 47.10, top: 37.52, position: 'absolute', background: '#1C274C'}}></div> */}
                                </div>
                                <div style={{color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Board Games</div>
                            </div>
                        </div>
                        <button onClick={this.onClickProceed} style={{width: 200, height: 50, paddingLeft: 50, paddingRight: 50, paddingTop: 30, paddingBottom: 30, left: 494.50, top: 545, position: 'absolute', background: '#A67CF3', borderRadius: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                            <div style={{color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Proceed</div>
                            <div style={{width: 32, height: 32, position: 'relative'}}>
                                <div style={{width: 32, height: 32, left: 0, top: 0, position: 'absolute'}}></div>
                                <div style={{width: 22, height: 0, left: 5, top: 16, position: 'absolute', border: '1.50px white solid'}}></div>
                                <div style={{width: 9, height: 18, left: 18, top: 7, position: 'absolute', border: '1.50px white solid'}}></div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(SelectCategories);