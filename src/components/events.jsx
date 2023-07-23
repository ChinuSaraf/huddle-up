import { PureComponent } from "react";
import { withRouter } from './common/withRouter';
import React from "react";
import { Button } from "@mui/material";


export class Events extends PureComponent {
    constructor(props) {
        super(props);
        this.showNotification = this.showNotification.bind(this);
    }

    showNotification = async (e) => {
        e.preventDefault();
        var options = {
            body: "This is the body of the Notification",
            icon: "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?    auto=compress&cs=tinysrgb&dpr=1&w=500",
            dir: "ltr"
        };
        if (!("Notification" in window)) {
            console.log("Browser does not support desktop notification");
        } else if (Notification.permission === "granted") {
            const notification = new Notification("Notification Demo", options);
        } else if (Notification.permission === "denied") {
            await Notification.requestPermission().then((permission) => {
                if (permission === "granted") {
                    const notification = new Notification("Notification Demo", options);
                }
            });
        }
    }

    render() {
        return (
            <div>
                <Button
                    variant="contained"
                    color="error"
                    sx={{ mt: 3, mb: 2, marginBottom: 5 }} onClick={this.showNotification}>Show notification</Button>
                <div style={{width: '100%', height: '100%', position: 'relative', background: '#E2F1FE'}}>
                    <div style={{width: 1440, height: 135, left: 0, top: 0, position: 'absolute'}}>
                        <div style={{left: 210, top: 51, position: 'absolute', color: '#1C274C', fontSize: 40, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>HuddleUp</div>
                        <div style={{width: 60, height: 60, left: 113, top: 45, position: 'absolute'}}>
                            <div style={{width: 60, height: 60, left: 0, top: 0, position: 'absolute'}}></div>
                            <div style={{width: 18.02, height: 18.41, left: 19.62, top: 9.41, position: 'absolute', border: '2.81px #1C274C solid'}}></div>
                            <div style={{width: 18.49, height: 23.92, left: 9.64, top: 10.83, position: 'absolute', border: '2.81px #1C274C solid'}}></div>
                            <div style={{width: 45.47, height: 38.61, left: 5.16, top: 16.70, position: 'absolute', border: '2.81px #1C274C solid'}}></div>
                            <div style={{width: 0, height: 3.75, left: 36.56, top: 2.81, position: 'absolute', border: '2.81px #1C274C solid'}}></div>
                            <div style={{width: 1.88, height: 3.23, left: 45.94, top: 5.84, position: 'absolute', border: '2.81px #1C274C solid'}}></div>
                            <div style={{width: 3.23, height: 1.88, left: 52.80, top: 14.06, position: 'absolute', border: '2.81px #1C274C solid'}}></div>
                        </div>
                    </div>
                    <div style={{width: 367, height: 284, left: 123, top: 280, position: 'absolute', background: 'white', boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.10)', borderRadius: 10, overflow: 'hidden'}}>
                        <div style={{width: 218, height: 218, left: -69, top: -76, position: 'absolute', background: '#A67CF3', borderRadius: 9999}} />
                        <div style={{width: 60, height: 60, left: 35, top: 29, position: 'absolute'}}>
                            <div style={{width: 5.40, height: 5.62, left: 53.32, top: 27.13, position: 'absolute', background: '#83EEEF'}}></div>
                            <div style={{width: 5.73, height: 26.94, left: 47.59, top: 16.48, position: 'absolute', background: '#F4BA43'}}></div>
                            <div style={{width: 5.73, height: 34.08, left: 40.45, top: 12.90, position: 'absolute', background: '#EE81D4'}}></div>
                            <div style={{width: 20.86, height: 5.62, left: 19.59, top: 27.13, position: 'absolute', background: '#83EEEF'}}></div>
                            <div style={{width: 5.73, height: 34.08, left: 13.86, top: 12.90, position: 'absolute', background: '#EE81D4'}}></div>
                            <div style={{width: 5.73, height: 26.94, left: 6.72, top: 16.48, position: 'absolute', background: '#F4BA43'}}></div>
                            <div style={{width: 5.25, height: 5.62, left: 1.47, top: 27.13, position: 'absolute', background: '#83EEEF'}}></div>
                            <div style={{width: 59.87, height: 8.25, left: 0.16, top: 25.82, position: 'absolute', background: '#1C274C'}}></div>
                            <div style={{width: 8.35, height: 36.71, left: 12.55, top: 11.59, position: 'absolute', background: '#1C274C'}}></div>
                            <div style={{width: 42.08, height: 36.71, left: 5.41, top: 11.59, position: 'absolute', background: '#1C274C'}}></div>
                            <div style={{width: 8.35, height: 29.56, left: 46.28, top: 15.16, position: 'absolute', background: '#1C274C'}}></div>
                        </div>
                        <div style={{left: 223, top: 15, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                                <div style={{width: 16, height: 16, position: 'relative'}}>
                                    <div style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute'}}></div>
                                    <div style={{width: 11, height: 14, left: 2.50, top: 1, position: 'absolute', background: '#EE7975'}}></div>
                                </div>
                                <div style={{width: 103, color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>US - Natick, LakeSide</div>
                            </div>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                                <div style={{width: 16, height: 16, position: 'relative'}}>
                                    <div style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute'}}></div>
                                    <div style={{width: 4, height: 1, left: 6, top: 0, position: 'absolute', background: '#F4BA43'}}></div>
                                    <div style={{width: 12, height: 12, left: 2, top: 2, position: 'absolute', background: '#F4BA43'}}></div>
                                </div>
                                <div style={{width: 63, color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>In 15 minutes</div>
                            </div>
                        </div>
                        <div style={{left: 24, top: 160, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 18, display: 'inline-flex'}}>
                            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
                                <div style={{width: 299, color: '#FF8139', fontSize: 10, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>@math_bud1234:</div>
                                <div style={{alignSelf: 'stretch', height: 24, color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Pilates anyone?</div>
                                <div style={{width: 299, color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Looking for a group of two-three people to work out with!</div>
                            </div>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <div style={{width: 16, height: 16, position: 'relative'}}>
                                    <div style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute'}}></div>
                                    <div style={{width: 4.18, height: 3.82, left: 5.73, top: 2.01, position: 'absolute', border: '0.38px black solid'}}></div>
                                    <div style={{width: 4.43, height: 4.26, left: 3.07, top: 2.39, position: 'absolute', border: '0.38px black solid'}}></div>
                                    <div style={{width: 12.12, height: 10.30, left: 1.88, top: 3.95, position: 'absolute', border: '0.38px black solid'}}></div>
                                    <div style={{width: 2.07, height: 2.25, left: 3, top: 12.75, position: 'absolute', border: '0.38px black solid'}}></div>
                                    <div style={{width: 2.81, height: 1.63, left: 11, top: 1.94, position: 'absolute', border: '0.38px black solid'}}></div>
                                </div>
                                <div style={{color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>3 people are interested</div>
                            </div>
                        </div>
                    </div>
                    <div style={{width: 367, height: 284, left: 123, top: 617, position: 'absolute', background: 'white', boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.10)', borderRadius: 10, overflow: 'hidden'}}>
                        <div style={{width: 218, height: 218, left: -69, top: -76, position: 'absolute', background: '#EE7975', borderRadius: 9999}} />
                        <div style={{width: 60, height: 60, left: 35, top: 29, position: 'absolute'}}>
                            <div style={{width: 60, height: 60, left: 0, top: 0, position: 'absolute'}}>
                                <div style={{width: 60, height: 60, left: 0, top: 0, position: 'absolute', background: '#1C274C'}}></div>
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
                                <div style={{width: 6.77, height: 6.77, left: 15.56, top: 24.70, position: 'absolute', background: '#83EEEF'}}></div>
                            </div>
                        </div>
                        <div style={{left: 223, top: 15, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                                <div style={{width: 16, height: 16, position: 'relative'}}>
                                    <div style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute'}}></div>
                                    <div style={{width: 11, height: 14, left: 2.50, top: 1, position: 'absolute', background: '#EE7975'}}></div>
                                </div>
                                <div style={{width: 103, color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>US - Natick, LakeSide</div>
                            </div>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                                <div style={{width: 16, height: 16, position: 'relative'}}>
                                    <div style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute'}}></div>
                                    <div style={{width: 4, height: 1, left: 6, top: 0, position: 'absolute', background: '#F4BA43'}}></div>
                                    <div style={{width: 12, height: 12, left: 2, top: 2, position: 'absolute', background: '#F4BA43'}}></div>
                                </div>
                                <div style={{width: 63, color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>In 15 minutes</div>
                            </div>
                        </div>
                        <div style={{left: 24, top: 160, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 18, display: 'inline-flex'}}>
                            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
                                <div style={{width: 299, color: '#FF8139', fontSize: 10, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>@math_bud1234:</div>
                                <div style={{alignSelf: 'stretch', height: 24, color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Ping Pong?</div>
                                <div style={{width: 299, color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Looking for a group of two-three people to work out with!</div>
                            </div>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <div style={{width: 16, height: 16, position: 'relative'}}>
                                    <div style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute'}}></div>
                                    <div style={{width: 4.18, height: 3.82, left: 5.73, top: 2.01, position: 'absolute', border: '0.38px black solid'}}></div>
                                    <div style={{width: 4.43, height: 4.26, left: 3.07, top: 2.39, position: 'absolute', border: '0.38px black solid'}}></div>
                                    <div style={{width: 12.12, height: 10.30, left: 1.88, top: 3.95, position: 'absolute', border: '0.38px black solid'}}></div>
                                    <div style={{width: 2.07, height: 2.25, left: 3, top: 12.75, position: 'absolute', border: '0.38px black solid'}}></div>
                                    <div style={{width: 2.81, height: 1.63, left: 11, top: 1.94, position: 'absolute', border: '0.38px black solid'}}></div>
                                </div>
                                <div style={{color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>3 people are interested</div>
                            </div>
                        </div>
                    </div>
                    <div style={{width: 367, height: 284, left: 541, top: 700, position: 'absolute', background: 'white', boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.10)', borderRadius: 10, overflow: 'hidden'}}>
                        <div style={{width: 218, height: 218, left: -69, top: -76, position: 'absolute', background: '#6CB9F9', borderRadius: 9999}} />
                        <div style={{width: 60, height: 60, left: 35, top: 29, position: 'absolute'}}>
                            <div style={{width: 20.04, height: 24.05, left: 19.98, top: 28, position: 'absolute', background: '#71E48F'}}></div>
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
                            <div style={{width: 58, height: 37.95, left: 1, top: 22.05, position: 'absolute', background: '#1C274C'}}></div>
                        </div>
                        <div style={{left: 223, top: 15, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                                <div style={{width: 16, height: 16, position: 'relative'}}>
                                    <div style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute'}}></div>
                                    <div style={{width: 11, height: 14, left: 2.50, top: 1, position: 'absolute', background: '#EE7975'}}></div>
                                </div>
                                <div style={{width: 103, color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>US - Natick, LakeSide</div>
                            </div>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                                <div style={{width: 16, height: 16, position: 'relative'}}>
                                    <div style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute'}}></div>
                                    <div style={{width: 4, height: 1, left: 6, top: 0, position: 'absolute', background: '#F4BA43'}}></div>
                                    <div style={{width: 12, height: 12, left: 2, top: 2, position: 'absolute', background: '#F4BA43'}}></div>
                                </div>
                                <div style={{width: 63, color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>In 15 minutes</div>
                            </div>
                        </div>
                        <div style={{left: 24, top: 160, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 18, display: 'inline-flex'}}>
                            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
                                <div style={{width: 299, color: '#FF8139', fontSize: 10, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>@math_bud1234:</div>
                                <div style={{alignSelf: 'stretch', height: 24, color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Fan of FIFA?</div>
                                <div style={{width: 299, color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>I have three consoles and we can play for about an hour in some conference room.</div>
                            </div>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <div style={{width: 16, height: 16, position: 'relative'}}>
                                    <div style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute'}}></div>
                                    <div style={{width: 4.18, height: 3.82, left: 5.73, top: 2.01, position: 'absolute', border: '0.38px black solid'}}></div>
                                    <div style={{width: 4.43, height: 4.26, left: 3.07, top: 2.39, position: 'absolute', border: '0.38px black solid'}}></div>
                                    <div style={{width: 12.12, height: 10.30, left: 1.88, top: 3.95, position: 'absolute', border: '0.38px black solid'}}></div>
                                    <div style={{width: 2.07, height: 2.25, left: 3, top: 12.75, position: 'absolute', border: '0.38px black solid'}}></div>
                                    <div style={{width: 2.81, height: 1.63, left: 11, top: 1.94, position: 'absolute', border: '0.38px black solid'}}></div>
                                </div>
                                <div style={{color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>3 people are interested</div>
                            </div>
                        </div>
                    </div>
                    <div style={{width: 367, height: 284, left: 961, top: 617, position: 'absolute', background: 'white', boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.10)', borderRadius: 10, overflow: 'hidden'}}>
                        <div style={{width: 218, height: 218, left: -69, top: -76, position: 'absolute', background: '#EE81D4', borderRadius: 9999}} />
                        <div style={{width: 60, height: 60, left: 35, top: 29, position: 'absolute'}}>
                            <div style={{width: 34.80, height: 45.57, left: 12.60, top: 13.17, position: 'absolute', background: '#EE7975'}}></div>
                            <div style={{width: 37.50, height: 48.08, left: 11.25, top: 11.92, position: 'absolute', background: '#1C274C'}}></div>
                            <div style={{width: 34.72, height: 9.43, left: 12.64, top: 1.25, position: 'absolute', background: '#EE7975'}}></div>
                            <div style={{width: 37.50, height: 11.92, left: 11.25, top: -0, position: 'absolute', background: '#1C274C'}}></div>
                            <div style={{width: 39.27, height: 6.97, left: 10.36, top: 7.60, position: 'absolute', background: '#F4BA43'}}></div>
                            <div style={{width: 41.78, height: 9.49, left: 9.11, top: 6.35, position: 'absolute', background: '#1C274C'}}></div>
                            <div style={{width: 33.49, height: 29.14, left: 13.26, top: 21.72, position: 'absolute', background: '#F4BA43'}}></div>
                            <div style={{width: 36.19, height: 31.64, left: 11.91, top: 20.47, position: 'absolute', background: '#1C274C'}}></div>
                        </div>
                        <div style={{left: 223, top: 15, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                                <div style={{width: 16, height: 16, position: 'relative'}}>
                                    <div style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute'}}></div>
                                    <div style={{width: 11, height: 14, left: 2.50, top: 1, position: 'absolute', background: '#EE7975'}}></div>
                                </div>
                                <div style={{width: 103, color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>US - Natick, LakeSide</div>
                            </div>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                                <div style={{width: 16, height: 16, position: 'relative'}}>
                                    <div style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute'}}></div>
                                    <div style={{width: 4, height: 1, left: 6, top: 0, position: 'absolute', background: '#F4BA43'}}></div>
                                    <div style={{width: 12, height: 12, left: 2, top: 2, position: 'absolute', background: '#F4BA43'}}></div>
                                </div>
                                <div style={{width: 63, color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>In 15 minutes</div>
                            </div>
                        </div>
                        <div style={{left: 24, top: 160, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 18, display: 'inline-flex'}}>
                            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
                                <div style={{width: 299, color: '#FF8139', fontSize: 10, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>@math_bud1234:</div>
                                <div style={{alignSelf: 'stretch', height: 24, color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Coffee Chat?</div>
                                <div style={{width: 299, color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Anyone wanna hang out for a coffee break? </div>
                            </div>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <div style={{width: 16, height: 16, position: 'relative'}}>
                                    <div style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute'}}></div>
                                    <div style={{width: 4.18, height: 3.82, left: 5.73, top: 2.01, position: 'absolute', border: '0.38px black solid'}}></div>
                                    <div style={{width: 4.43, height: 4.26, left: 3.07, top: 2.39, position: 'absolute', border: '0.38px black solid'}}></div>
                                    <div style={{width: 12.12, height: 10.30, left: 1.88, top: 3.95, position: 'absolute', border: '0.38px black solid'}}></div>
                                    <div style={{width: 2.07, height: 2.25, left: 3, top: 12.75, position: 'absolute', border: '0.38px black solid'}}></div>
                                    <div style={{width: 2.81, height: 1.63, left: 11, top: 1.94, position: 'absolute', border: '0.38px black solid'}}></div>
                                </div>
                                <div style={{color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>3 people are interested</div>
                            </div>
                        </div>
                    </div>
                    <div style={{width: 367, height: 284, left: 961, top: 954, position: 'absolute', background: 'white', boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.10)', borderRadius: 10, overflow: 'hidden'}}>
                        <div style={{width: 218, height: 218, left: -69, top: -76, position: 'absolute', background: '#83EEEF', borderRadius: 9999}} />
                        <div style={{width: 60, height: 60, left: 35, top: 29, position: 'absolute'}}>
                            <div style={{width: 28.72, height: 28.72, left: 30, top: 30, position: 'absolute', background: '#71E48F'}}></div>
                            <div style={{width: 22.40, height: 35.05, left: 30, top: 1.28, position: 'absolute', background: '#6CB9F9'}}></div>
                            <div style={{width: 28.72, height: 35.05, left: 7.60, top: 1.28, position: 'absolute', background: '#EE7975'}}></div>
                            <div style={{width: 35.05, height: 28.72, left: 1.28, top: 30, position: 'absolute', background: '#F4BA43'}}></div>
                            <div style={{width: 60, height: 60, left: -0, top: 0, position: 'absolute', background: '#1C274C'}}></div>
                            <div style={{width: 2.55, height: 6.34, left: 47.10, top: 42.88, position: 'absolute', background: '#1C274C'}}></div>
                            <div style={{width: 2.55, height: 3.10, left: 47.10, top: 37.52, position: 'absolute', background: '#1C274C'}}></div>
                        </div>
                        <div style={{left: 223, top: 15, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                                <div style={{width: 16, height: 16, position: 'relative'}}>
                                    <div style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute'}}></div>
                                    <div style={{width: 11, height: 14, left: 2.50, top: 1, position: 'absolute', background: '#EE7975'}}></div>
                                </div>
                                <div style={{width: 103, color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>US - Natick, LakeSide</div>
                            </div>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                                <div style={{width: 16, height: 16, position: 'relative'}}>
                                    <div style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute'}}></div>
                                    <div style={{width: 4, height: 1, left: 6, top: 0, position: 'absolute', background: '#F4BA43'}}></div>
                                    <div style={{width: 12, height: 12, left: 2, top: 2, position: 'absolute', background: '#F4BA43'}}></div>
                                </div>
                                <div style={{width: 63, color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>In 15 minutes</div>
                            </div>
                        </div>
                        <div style={{left: 24, top: 160, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 18, display: 'inline-flex'}}>
                            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
                                <div style={{width: 299, color: '#FF8139', fontSize: 10, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>@math_bud1234:</div>
                                <div style={{alignSelf: 'stretch', height: 24, color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Pilates anyone?</div>
                                <div style={{width: 299, color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Looking for a group of two-three people to work out with!</div>
                            </div>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <div style={{width: 16, height: 16, position: 'relative'}}>
                                    <div style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute'}}></div>
                                    <div style={{width: 4.18, height: 3.82, left: 5.73, top: 2.01, position: 'absolute', border: '0.38px black solid'}}></div>
                                    <div style={{width: 4.43, height: 4.26, left: 3.07, top: 2.39, position: 'absolute', border: '0.38px black solid'}}></div>
                                    <div style={{width: 12.12, height: 10.30, left: 1.88, top: 3.95, position: 'absolute', border: '0.38px black solid'}}></div>
                                    <div style={{width: 2.07, height: 2.25, left: 3, top: 12.75, position: 'absolute', border: '0.38px black solid'}}></div>
                                    <div style={{width: 2.81, height: 1.63, left: 11, top: 1.94, position: 'absolute', border: '0.38px black solid'}}></div>
                                </div>
                                <div style={{color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>3 people are interested</div>
                            </div>
                        </div>
                    </div>
                    <div style={{width: 367, height: 284, left: 541, top: 1037, position: 'absolute', background: 'white', boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.10)', borderRadius: 10, overflow: 'hidden'}}>
                        <div style={{width: 218, height: 218, left: -69, top: -76, position: 'absolute', background: '#EE7975', borderRadius: 9999}} />
                        <div style={{width: 60, height: 60, left: 35, top: 29, position: 'absolute'}}>
                            <div style={{width: 60, height: 60, left: 0, top: 0, position: 'absolute'}}>
                                <div style={{width: 60, height: 60, left: 0, top: 0, position: 'absolute', background: '#1C274C'}}></div>
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
                                <div style={{width: 6.77, height: 6.77, left: 15.56, top: 24.70, position: 'absolute', background: '#83EEEF'}}></div>
                            </div>
                        </div>
                        <div style={{left: 223, top: 15, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                                <div style={{width: 16, height: 16, position: 'relative'}}>
                                    <div style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute'}}></div>
                                    <div style={{width: 11, height: 14, left: 2.50, top: 1, position: 'absolute', background: '#EE7975'}}></div>
                                </div>
                                <div style={{width: 103, color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>US - Natick, LakeSide</div>
                            </div>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                                <div style={{width: 16, height: 16, position: 'relative'}}>
                                    <div style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute'}}></div>
                                    <div style={{width: 4, height: 1, left: 6, top: 0, position: 'absolute', background: '#F4BA43'}}></div>
                                    <div style={{width: 12, height: 12, left: 2, top: 2, position: 'absolute', background: '#F4BA43'}}></div>
                                </div>
                                <div style={{width: 63, color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>In 15 minutes</div>
                            </div>
                        </div>
                        <div style={{left: 24, top: 160, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 18, display: 'inline-flex'}}>
                            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
                                <div style={{width: 299, color: '#FF8139', fontSize: 10, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>@math_bud1234:</div>
                                <div style={{alignSelf: 'stretch', height: 24, color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Pilates anyone?</div>
                                <div style={{width: 299, color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Looking for a group of two-three people to work out with!</div>
                            </div>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <div style={{width: 16, height: 16, position: 'relative'}}>
                                    <div style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute'}}></div>
                                    <div style={{width: 4.18, height: 3.82, left: 5.73, top: 2.01, position: 'absolute', border: '0.38px black solid'}}></div>
                                    <div style={{width: 4.43, height: 4.26, left: 3.07, top: 2.39, position: 'absolute', border: '0.38px black solid'}}></div>
                                    <div style={{width: 12.12, height: 10.30, left: 1.88, top: 3.95, position: 'absolute', border: '0.38px black solid'}}></div>
                                    <div style={{width: 2.07, height: 2.25, left: 3, top: 12.75, position: 'absolute', border: '0.38px black solid'}}></div>
                                    <div style={{width: 2.81, height: 1.63, left: 11, top: 1.94, position: 'absolute', border: '0.38px black solid'}}></div>
                                </div>
                                <div style={{color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>3 people are interested</div>
                            </div>
                        </div>
                    </div>
                    <div style={{width: 367, height: 284, left: 123, top: 954, position: 'absolute', background: 'white', boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.10)', borderRadius: 10, overflow: 'hidden'}}>
                        <div style={{width: 218, height: 218, left: -69, top: -76, position: 'absolute', background: '#83EEEF', borderRadius: 9999}} />
                        <div style={{width: 60, height: 60, left: 35, top: 29, position: 'absolute'}}>
                            <div style={{width: 28.72, height: 28.72, left: 30, top: 30, position: 'absolute', background: '#71E48F'}}></div>
                            <div style={{width: 22.40, height: 35.05, left: 30, top: 1.28, position: 'absolute', background: '#6CB9F9'}}></div>
                            <div style={{width: 28.72, height: 35.05, left: 7.60, top: 1.28, position: 'absolute', background: '#EE7975'}}></div>
                            <div style={{width: 35.05, height: 28.72, left: 1.28, top: 30, position: 'absolute', background: '#F4BA43'}}></div>
                            <div style={{width: 60, height: 60, left: -0, top: 0, position: 'absolute', background: '#1C274C'}}></div>
                            <div style={{width: 2.55, height: 6.34, left: 47.10, top: 42.88, position: 'absolute', background: '#1C274C'}}></div>
                            <div style={{width: 2.55, height: 3.10, left: 47.10, top: 37.52, position: 'absolute', background: '#1C274C'}}></div>
                        </div>
                        <div style={{left: 223, top: 15, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                                <div style={{width: 16, height: 16, position: 'relative'}}>
                                    <div style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute'}}></div>
                                    <div style={{width: 11, height: 14, left: 2.50, top: 1, position: 'absolute', background: '#EE7975'}}></div>
                                </div>
                                <div style={{width: 103, color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>US - Natick, LakeSide</div>
                            </div>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                                <div style={{width: 16, height: 16, position: 'relative'}}>
                                    <div style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute'}}></div>
                                    <div style={{width: 4, height: 1, left: 6, top: 0, position: 'absolute', background: '#F4BA43'}}></div>
                                    <div style={{width: 12, height: 12, left: 2, top: 2, position: 'absolute', background: '#F4BA43'}}></div>
                                </div>
                                <div style={{width: 63, color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>In 15 minutes</div>
                            </div>
                        </div>
                        <div style={{left: 24, top: 160, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 18, display: 'inline-flex'}}>
                            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
                                <div style={{width: 299, color: '#FF8139', fontSize: 10, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>@math_bud1234:</div>
                                <div style={{alignSelf: 'stretch', height: 24, color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Pilates anyone?</div>
                                <div style={{width: 299, color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Looking for a group of two-three people to work out with!</div>
                            </div>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <div style={{width: 16, height: 16, position: 'relative'}}>
                                    <div style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute'}}></div>
                                    <div style={{width: 4.18, height: 3.82, left: 5.73, top: 2.01, position: 'absolute', border: '0.38px black solid'}}></div>
                                    <div style={{width: 4.43, height: 4.26, left: 3.07, top: 2.39, position: 'absolute', border: '0.38px black solid'}}></div>
                                    <div style={{width: 12.12, height: 10.30, left: 1.88, top: 3.95, position: 'absolute', border: '0.38px black solid'}}></div>
                                    <div style={{width: 2.07, height: 2.25, left: 3, top: 12.75, position: 'absolute', border: '0.38px black solid'}}></div>
                                    <div style={{width: 2.81, height: 1.63, left: 11, top: 1.94, position: 'absolute', border: '0.38px black solid'}}></div>
                                </div>
                                <div style={{color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>3 people are interested</div>
                            </div>
                        </div>
                    </div>
                    <div style={{width: 367, height: 284, left: 541, top: 363, position: 'absolute', background: 'white', boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.10)', borderRadius: 10, overflow: 'hidden'}}>
                        <div style={{width: 218, height: 218, left: -69, top: -76, position: 'absolute', background: '#71E48F', borderRadius: 9999}} />
                        <div style={{width: 60, height: 60, left: 35, top: 29, position: 'absolute'}}>
                            <div style={{width: 53.28, height: 53.29, left: 3.35, top: 3.35, position: 'absolute', background: 'white'}}></div>
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
                            </div>
                        </div>
                        <div style={{left: 223, top: 15, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                                <div style={{width: 16, height: 16, position: 'relative'}}>
                                    <div style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute'}}></div>
                                    <div style={{width: 11, height: 14, left: 2.50, top: 1, position: 'absolute', background: '#EE7975'}}></div>
                                </div>
                                <div style={{width: 103, color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>US - Natick, LakeSide</div>
                            </div>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                                <div style={{width: 16, height: 16, position: 'relative'}}>
                                    <div style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute'}}></div>
                                    <div style={{width: 4, height: 1, left: 6, top: 0, position: 'absolute', background: '#F4BA43'}}></div>
                                    <div style={{width: 12, height: 12, left: 2, top: 2, position: 'absolute', background: '#F4BA43'}}></div>
                                </div>
                                <div style={{width: 63, color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>In 1 hour</div>
                            </div>
                        </div>
                        <div style={{left: 24, top: 160, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 18, display: 'inline-flex'}}>
                            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
                                <div style={{width: 299, color: '#FF8139', fontSize: 10, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>@math_bud1234:</div>
                                <div style={{alignSelf: 'stretch', height: 24, color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>In for painting together?</div>
                                <div style={{width: 299, color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>I have 4 canvas boards and some supplies. First come first serve + $15 for a board.</div>
                            </div>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <div style={{width: 16, height: 16, position: 'relative'}}>
                                    <div style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute'}}></div>
                                    <div style={{width: 4.18, height: 3.82, left: 5.73, top: 2.01, position: 'absolute', border: '0.38px black solid'}}></div>
                                    <div style={{width: 4.43, height: 4.26, left: 3.07, top: 2.39, position: 'absolute', border: '0.38px black solid'}}></div>
                                    <div style={{width: 12.12, height: 10.30, left: 1.88, top: 3.95, position: 'absolute', border: '0.38px black solid'}}></div>
                                    <div style={{width: 2.07, height: 2.25, left: 3, top: 12.75, position: 'absolute', border: '0.38px black solid'}}></div>
                                    <div style={{width: 2.81, height: 1.63, left: 11, top: 1.94, position: 'absolute', border: '0.38px black solid'}}></div>
                                </div>
                                <div style={{color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>3 people are interested</div>
                            </div>
                        </div>
                    </div>
                    <div style={{width: 367, height: 284, left: 961, top: 280, position: 'absolute', background: 'white', boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.10)', borderRadius: 10, overflow: 'hidden'}}>
                        <div style={{width: 218, height: 218, left: -69, top: -76, position: 'absolute', background: '#F2A861', borderRadius: 9999}} />
                        <div style={{width: 60, height: 60, left: 35, top: 29, position: 'absolute'}}>
                            <div style={{width: 12.50, height: 12.50, left: 40, top: 5, position: 'absolute', border: '1.88px #1C274C solid'}}></div>
                            <div style={{width: 26, height: 39.39, left: 10, top: 15.61, position: 'absolute', border: '1.88px #1C274C solid'}}></div>
                            <div style={{width: 15, height: 7.50, left: 7.50, top: 42.50, position: 'absolute', border: '1.88px #1C274C solid'}}></div>
                            <div style={{width: 10, height: 0.62, left: 40, top: 30, position: 'absolute', border: '1.88px #1C274C solid'}}></div>
                        </div>
                        <div style={{left: 223, top: 15, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                                <div style={{width: 16, height: 16, position: 'relative'}}>
                                    <div style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute'}}></div>
                                    <div style={{width: 11, height: 14, left: 2.50, top: 1, position: 'absolute', background: '#EE7975'}}></div>
                                </div>
                                <div style={{width: 103, color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>US - Natick, LakeSide</div>
                            </div>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                                <div style={{width: 16, height: 16, position: 'relative'}}>
                                    <div style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute'}}></div>
                                    <div style={{width: 4, height: 1, left: 6, top: 0, position: 'absolute', background: '#F4BA43'}}></div>
                                    <div style={{width: 12, height: 12, left: 2, top: 2, position: 'absolute', background: '#F4BA43'}}></div>
                                </div>
                                <div style={{width: 63, color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>In 15 minutes</div>
                            </div>
                        </div>
                        <div style={{left: 24, top: 160, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 18, display: 'inline-flex'}}>
                            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
                                <div style={{width: 299, color: '#FF8139', fontSize: 10, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>@math_bud1234:</div>
                                <div style={{alignSelf: 'stretch', height: 24, color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Ultimate Frisbee?</div>
                                <div style={{width: 299, color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>In for any other outdoor game too - let’s make use of the quad toys box!</div>
                            </div>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <div style={{width: 16, height: 16, position: 'relative'}}>
                                    <div style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute'}}></div>
                                    <div style={{width: 4.18, height: 3.82, left: 5.73, top: 2.01, position: 'absolute', border: '0.38px black solid'}}></div>
                                    <div style={{width: 4.43, height: 4.26, left: 3.07, top: 2.39, position: 'absolute', border: '0.38px black solid'}}></div>
                                    <div style={{width: 12.12, height: 10.30, left: 1.88, top: 3.95, position: 'absolute', border: '0.38px black solid'}}></div>
                                    <div style={{width: 2.07, height: 2.25, left: 3, top: 12.75, position: 'absolute', border: '0.38px black solid'}}></div>
                                    <div style={{width: 2.81, height: 1.63, left: 11, top: 1.94, position: 'absolute', border: '0.38px black solid'}}></div>
                                </div>
                                <div style={{color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>3 people are interested</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}

export default Events;