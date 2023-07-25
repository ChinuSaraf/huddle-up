import { PureComponent } from "react";
import { withRouter } from './common/withRouter';
import React from "react";
import { Button } from "@mui/material";

import avatar from "./common/icons/avatar.svg";
import avatar1 from "./common/icons/avatar1.svg";
import avatar2 from "./common/icons/avatar2.svg";
import avatar3 from "./common/icons/avatar3.svg";
import avatar4 from "./common/icons/avatar4.svg";
import avatar5 from "./common/icons/avatar5.svg";

export class BreakTime extends PureComponent {
    constructor(props) {
        super(props);
    }

    onClickLetsGo = (e) => {
        this.props.navigate('/selectCategories')
    };

    render() {
        return (
            <div>
                <div style={{width: '100%', height: '100%', position: 'relative', background: 'white'}}>
                    <div style={{width: 508, height: 1024, left: 0, top: 0, position: 'absolute', background: '#6CB9F9'}}>
                        <div style={{width: 135, height: 135, left: 69, top: 220, position: 'absolute'}}>
                            <div style={{width: 133.01, height: 133.01, left: 0, top: 0, position: 'absolute'}}>
                                <div style={{width: 133.01, height: 133.01, left: 0, top: 0, position: 'absolute', background: '#FFEDEF', borderRadius: 9999}} />
                            </div>
                            <div style={{width: 91.40, height: 123.01, left: 20.96, top: 11.01, position: 'absolute'}}>
                                <div style={{width: 71.05, height: 113.68, left: 11.01, top: 4.26, position: 'absolute'}}>
                                    {/* <div style={{width: 43.40, height: 41.30, left: 10.50, top: 74.20, position: 'absolute'}}>
                                        <div style={{width: 43.40, height: 37.63, left: 0, top: 0, position: 'absolute', background: '#AC6651', border: '0.70px black solid'}}></div>
                                        <div style={{width: 43.40, height: 41.13, left: 0, top: 0, position: 'absolute', background: '#AC6651'}}></div>
                                        <div style={{width: 41.30, height: 37.80, left: 12.25, top: -19.60, position: 'absolute', background: 'black', borderRadius: 9999}} />
                                    </div> */}
                                    <img style={{width: 60.21, height: 78.57, left: 4.88, top: 7.68, position: 'absolute'}} src={avatar} />
                                </div>
                                {/* <div style={{width: 22.74, height: 22.74, left: 42.99, top: 61.11, position: 'absolute'}}>
                                    <div style={{width: 22.40, height: 11.20, left: -0.60, top: 7.02, position: 'absolute', transform: 'rotate(-7.05deg)', transformOrigin: '0 0'}}>
                                        <div style={{width: 22.40, height: 11.20, left: 0, top: 0, position: 'absolute', transform: 'rotate(-7.05deg)', transformOrigin: '0 0', background: 'black', borderRadius: 0.35, border: '0.70px black solid'}}></div>
                                        <div style={{width: 22.40, height: 11.20, left: 0, top: 0, position: 'absolute', transform: 'rotate(-7.05deg)', transformOrigin: '0 0'}}>
                                            <div style={{width: 22.40, height: 11.20, left: 0, top: 0, position: 'absolute', transform: 'rotate(-7.05deg)', transformOrigin: '0 0', background: '#171921'}}></div>
                                            <div style={{width: 15.05, height: 15.05, left: 4.29, top: 4.75, position: 'absolute', transform: 'rotate(-7.05deg)', transformOrigin: '0 0', background: '#FC909F', borderRadius: 9999}} />
                                        </div>
                                    </div>
                                </div>
                                <div style={{width: 52.93, height: 17.05, left: 21.67, top: 32.33, position: 'absolute'}}>
                                    <div style={{width: 36.40, height: 11.23, left: 7.70, top: 2.80, position: 'absolute'}}>
                                        <div style={{width: 9.45, height: 3.05, left: 26.95, top: 0, position: 'absolute', border: '0.70px black solid'}}></div>
                                        <div style={{width: 9.45, height: 3.05, left: -0, top: 9.09, position: 'absolute', transform: 'rotate(-45.49deg)', transformOrigin: '0 0', border: '0.70px black solid'}}></div>
                                    </div>
                                </div> */}
                                {/* <div style={{width: 85.26, height: 71.05, left: 0, top: 0, position: 'absolute'}}>
                                    <div style={{width: 49, height: 52.39, left: 16.80, top: -2.10, position: 'absolute'}}>
                                        <div style={{width: 12.43, height: 11.55, left: 36.57, top: 17.56, position: 'absolute', opacity: 0.35, background: '#717376'}}></div>
                                        <div style={{width: 22.66, height: 27.21, left: 12.91, top: 5.28, position: 'absolute', transform: 'rotate(-13.47deg)', transformOrigin: '0 0', background: '#171921'}}></div>
                                        <div style={{width: 19.25, height: 26.43, left: 0, top: 6.01, position: 'absolute', background: '#171921'}}></div>
                                        <div style={{width: 18.93, height: 28.09, left: 0.32, top: 24.30, position: 'absolute', opacity: 0.35, background: '#717376'}}></div>
                                    </div>
                                </div> */}
                                {/* <div style={{width: 34.11, height: 17.05, left: 33.04, top: 38.37, position: 'absolute'}}>
                                    <div style={{width: 29.75, height: 8.04, left: 2.01, top: 4.75, position: 'absolute'}}>
                                        <img style={{width: 7.38, height: 4.58, left: 0, top: 3.45, position: 'absolute', borderRadius: 0.35}} src="https://via.placeholder.com/7x5" />
                                        <img style={{width: 7.31, height: 4.54, left: 22.44, top: 0, position: 'absolute', borderRadius: 0.35}} src="https://via.placeholder.com/7x5" />
                                    </div>
                                </div> */}
                                {/* <div style={{width: 11.37, height: 14.21, left: 45.25, top: 48.82, position: 'absolute', transform: 'rotate(-8deg)', transformOrigin: '0 0'}}>
                                    <div style={{width: 4.90, height: 6.65, left: 3.85, top: 4.20, position: 'absolute', border: '0.70px black solid'}}></div>
                                </div>
                                <div style={{width: 17.05, height: 17.05, left: 12.43, top: 50.80, position: 'absolute'}}>
                                    <div style={{width: 9.10, height: 12.43, left: 1.75, top: 1.75, position: 'absolute', background: '#AC6651', border: '1.40px #171921 solid'}}></div>
                                    <div style={{width: 9.45, height: 12.43, left: 1.75, top: 1.75, position: 'absolute', background: '#AC6651'}}></div>
                                    <div style={{width: 5.60, height: 3.20, left: 4.03, top: 4.33, position: 'absolute', border: '0.70px #171921 solid'}}></div>
                                    <div style={{width: 1.96, height: 5.43, left: 5.95, top: 4.90, position: 'absolute', border: '0.70px #171921 solid'}}></div>
                                </div>
                                <div style={{width: 90.31, height: 31.82, left: 1.09, top: 91.19, position: 'absolute'}}>
                                    <div style={{width: 98.18, height: 21.28, left: -5.59, top: 11.27, position: 'absolute', background: '#6BD9E9', border: '0.70px black solid'}}></div>
                                    <div style={{width: 17.07, height: 14.86, left: 18.64, top: 5.54, position: 'absolute', transform: 'rotate(2deg)', transformOrigin: '0 0', background: '#D2EFF3', borderRadius: 0.35, border: '0.70px black solid'}}></div>
                                    <div style={{width: 11.83, height: 14.08, left: 63.96, top: 5.46, position: 'absolute', transform: 'rotate(178deg)', transformOrigin: '0 0', background: '#D2EFF3', borderRadius: 0.35, border: '0.70px black solid'}}></div>
                                    <div style={{width: 5.60, height: 7.53, left: 32.73, top: 11.55, position: 'absolute', background: 'black', border: '0.70px black solid'}}></div>
                                    <div style={{width: 5.60, height: 7.53, left: 54.95, top: 11.20, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', background: 'black', border: '0.70px black solid'}}></div>
                                    <div style={{width: 4.20, height: 3.33, left: 20.48, top: 4.90, position: 'absolute', background: 'black', border: '0.70px black solid'}}></div>
                                    <div style={{width: 3.85, height: 3.33, left: 59.85, top: 4.90, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', background: 'black', border: '0.70px black solid'}}></div>
                                </div> */}
                            </div>
                        </div>
                        <div style={{width: 180, height: 180, left: -35, top: 507, position: 'absolute'}}>
                            <div style={{width: 180, height: 180, left: 0, top: 0, position: 'absolute'}}>
                                <div style={{width: 180, height: 180, left: 0, top: 0, position: 'absolute', background: '#D2EFF3', borderRadius: 9999}} />
                            </div>
                            <div style={{width: 124.11, height: 166.69, left: 27.95, top: 14.68, position: 'absolute'}}>
                                <div style={{width: 94.74, height: 151.58, left: 14.68, top: 5.68, position: 'absolute'}}>
                                    {/* <div style={{width: 58.74, height: 55.89, left: 14.21, top: 100.42, position: 'absolute'}}>
                                        <div style={{width: 58.74, height: 50.92, left: 0, top: 0, position: 'absolute', background: '#F9C9B6', border: '0.95px black solid'}}></div>
                                        <div style={{width: 58.74, height: 55.66, left: 0, top: 0, position: 'absolute', background: '#AC6651'}}></div>
                                        <div style={{width: 55.89, height: 51.16, left: 16.58, top: -26.53, position: 'absolute', background: 'black', borderRadius: 9999}} />
                                    </div> */}
                                    <img style={{width: 81.48, height: 106.33, left: 6.61, top: 10.40, position: 'absolute'}} src={avatar1} />
                                    {/* <div style={{width: 77.55, height: 72.50, left: 16.11, top: 48.46, position: 'absolute'}}>
                                        <div style={{width: 56.84, height: 35.53, left: 9, top: 28.89, position: 'absolute', background: 'black', border: '0.24px black solid'}}></div>
                                    </div> */}
                                </div>
                                {/* <div style={{width: 30.32, height: 30.32, left: 57.32, top: 81.47, position: 'absolute'}}>
                                    <div style={{width: 17.53, height: 10.63, left: 9.38, top: 21.01, position: 'absolute', transform: 'rotate(-25.91deg)', transformOrigin: '0 0', border: '0.95px black solid'}}></div>
                                </div>
                                <div style={{width: 70.58, height: 22.74, left: 28.89, top: 43.11, position: 'absolute'}}>
                                    <div style={{width: 14.92, height: 7.71, left: 12.79, top: 5.45, position: 'absolute', border: '0.95px black solid'}}></div>
                                    <div style={{width: 13.50, height: 3.35, left: 44.53, top: 1.89, position: 'absolute', border: '0.95px black solid'}}></div>
                                </div>
                                <div style={{width: 113.68, height: 94.74, left: 0, top: 0, position: 'absolute'}}>
                                    <div style={{width: 14.32, height: 17.05, left: 66.32, top: 9.47, position: 'absolute', border: '0.95px black solid'}}></div>
                                    <div style={{width: 14.32, height: 17.05, left: 54, top: 8.53, position: 'absolute', border: '0.95px black solid'}}></div>
                                    <div style={{width: 14.32, height: 17.05, left: 36.95, top: 13.74, position: 'absolute', border: '0.95px black solid'}}></div>
                                </div>
                                <div style={{width: 45.47, height: 22.74, left: 44.05, top: 51.16, position: 'absolute'}}>
                                    <div style={{width: 45.47, height: 22.74, left: 0, top: 0, position: 'absolute'}}>
                                        <div style={{width: 40.24, height: 18.41, left: 2.84, top: 2.37, position: 'absolute'}}>
                                            <div style={{width: 8.53, height: 12.79, left: 0, top: 5.71, position: 'absolute', transform: 'rotate(-6.78deg)', transformOrigin: '0 0', background: 'black', borderRadius: 9999}} />
                                            <div style={{width: 8.53, height: 12.79, left: 30.37, top: 0.93, position: 'absolute', transform: 'rotate(-6.28deg)', transformOrigin: '0 0', background: 'black', borderRadius: 9999}} />
                                        </div>
                                    </div>
                                    <div style={{width: 71.29, height: 30.79, left: -19.42, top: -3.79, position: 'absolute'}}>
                                        <div style={{width: 15.64, height: 2.78, left: 0, top: 17.86, position: 'absolute', border: '0.95px black solid'}}></div>
                                        <div style={{width: 25.35, height: 23.58, left: 11.96, top: 7.48, position: 'absolute', transform: 'rotate(-7.42deg)', transformOrigin: '0 0', borderRadius: 3.79, border: '0.95px black solid'}}></div>
                                        <div style={{width: 25.35, height: 23.58, left: 70.02, top: 0, position: 'absolute', transform: 'rotate(172.58deg)', transformOrigin: '0 0', borderRadius: 3.79, border: '0.95px black solid'}}></div>
                                        <div style={{width: 9.97, height: 1.47, left: 37.85, top: 14.13, position: 'absolute', border: '0.95px black solid'}}></div>
                                    </div>
                                </div>
                                <div style={{width: 15.16, height: 18.95, left: 60.33, top: 65.09, position: 'absolute', transform: 'rotate(-8deg)', transformOrigin: '0 0'}}>
                                    <div style={{width: 6.39, height: 13.93, left: 5.16, top: 0.95, position: 'absolute', border: '0.95px black solid'}}></div>
                                </div>
                                <div style={{width: 22.74, height: 22.74, left: 16.58, top: 67.74, position: 'absolute'}}>
                                    <div style={{width: 12.32, height: 16.82, left: 2.37, top: 2.37, position: 'absolute', border: '1.89px black solid'}}></div>
                                    <div style={{width: 12.79, height: 16.82, left: 2.37, top: 2.37, position: 'absolute', background: '#F9C9B6'}}></div>
                                    <div style={{width: 7.58, height: 4.33, left: 5.45, top: 5.85, position: 'absolute', border: '0.95px black solid'}}></div>
                                    <div style={{width: 2.65, height: 7.34, left: 8.05, top: 6.63, position: 'absolute', border: '0.95px black solid'}}></div>
                                </div>
                                <div style={{width: 122.21, height: 43.06, left: 1.89, top: 123.63, position: 'absolute'}}>
                                    <div style={{width: 132.87, height: 31.29, left: -7.57, top: 12.76, position: 'absolute', background: '#F4D150', border: '0.95px black solid'}}></div>
                                    <div style={{width: 62.06, height: 14.95, left: 25.23, top: 7.50, position: 'absolute', transform: 'rotate(2deg)', transformOrigin: '0 0', background: 'white', borderRadius: 0.47, border: '0.95px black solid'}}></div>
                                </div> */}
                            </div>
                        </div>
                        <div style={{width: 180, height: 180, left: 161, top: 375, position: 'absolute'}}>
                            <div style={{width: 182, height: 182, left: 0, top: 0, position: 'absolute'}}>
                                <div style={{width: 182, height: 182, left: 0, top: 0, position: 'absolute', background: '#F4D150', borderRadius: 9999}} />
                            </div>
                            <div style={{width: 125.79, height: 168.70, left: 27.95, top: 14.68, position: 'absolute'}}>
                                <div style={{width: 58.74, height: 55.89, left: 28.89, top: 106.11, position: 'absolute'}}>
                                    {/* <div style={{width: 59.39, height: 56.28, left: -0.69, top: -0.26, position: 'absolute', background: '#FC909F', border: '0.96px black solid'}}></div>
                                    <div style={{width: 59.39, height: 56.28, left: -0.69, top: -0.26, position: 'absolute'}}>
                                        <div style={{width: 59.39, height: 56.28, left: 0, top: 0, position: 'absolute', background: '#FFEDEF'}}></div>
                                        <div style={{width: 56.52, height: 51.73, left: 17.46, top: -26.56, position: 'absolute', background: 'black', borderRadius: 9999}} />
                                    </div> */}
                                </div>
                                <div style={{width: 94.74, height: 151.58, left: 14.68, top: 5.68, position: 'absolute'}}>
                                    {/* <div style={{width: 59.39, height: 56.52, left: 14.37, top: 101.54, position: 'absolute'}}>
                                        <div style={{width: 59.39, height: 51.49, left: 0, top: 0, position: 'absolute', background: '#F9C9B6', border: '0.96px black solid'}}></div>
                                        <div style={{width: 59.39, height: 56.28, left: 0, top: 0, position: 'absolute', background: '#F9C9B6'}}></div>
                                        <div style={{width: 56.52, height: 51.73, left: 16.76, top: -26.82, position: 'absolute', background: 'black', borderRadius: 9999}} />
                                    </div> */}
                                    <img style={{width: 82.38, height: 107.51, left: 6.68, top: 10.51, position: 'absolute'}} src={avatar2} />
                                </div>
                                {/* <div style={{width: 30.32, height: 30.32, left: 57.32, top: 81.47, position: 'absolute'}}>
                                    <div style={{width: 27.30, height: 8.09, left: -0.24, top: 8.38, position: 'absolute', border: '0.96px black solid'}}></div>
                                </div>
                                <div style={{width: 70.58, height: 22.74, left: 28.89, top: 43.11, position: 'absolute'}}>
                                    <div style={{width: 49.81, height: 15.36, left: 10.54, top: 3.83, position: 'absolute'}}>
                                        <div style={{width: 12.93, height: 4.17, left: 36.88, top: 0, position: 'absolute', border: '0.96px black solid'}}></div>
                                        <div style={{width: 12.93, height: 4.17, left: -0, top: 12.44, position: 'absolute', transform: 'rotate(-45.49deg)', transformOrigin: '0 0', border: '0.96px black solid'}}></div>
                                    </div>
                                </div>
                                <div style={{width: 113.68, height: 94.74, left: 0, top: 0, position: 'absolute'}}>
                                    <div style={{width: 91.16, height: 121.81, left: 11.10, top: 7.27, position: 'absolute', background: 'white', border: '0.96px black solid'}}></div>
                                </div>
                                <div style={{width: 45.47, height: 22.74, left: 44.05, top: 51.16, position: 'absolute'}}>
                                    <div style={{width: 40.32, height: 15.29, left: 2.88, top: 3.34, position: 'absolute'}}>
                                        <div style={{width: 8.62, height: 9.58, left: 0, top: 5.78, position: 'absolute', transform: 'rotate(-6.78deg)', transformOrigin: '0 0', background: 'black', borderRadius: 9999}} />
                                        <div style={{width: 8.62, height: 9.58, left: 30.70, top: 0.94, position: 'absolute', transform: 'rotate(-6.28deg)', transformOrigin: '0 0', background: 'black', borderRadius: 9999}} />
                                    </div>
                                </div>
                                <div style={{width: 15.16, height: 18.95, left: 60.33, top: 65.09, position: 'absolute', transform: 'rotate(-8deg)', transformOrigin: '0 0'}}>
                                    <div style={{width: 6.47, height: 14.08, left: 5.13, top: 0.86, position: 'absolute', border: '0.96px black solid'}}></div>
                                </div>
                                <div style={{width: 22.74, height: 24.63, left: 16.58, top: 67.74, position: 'absolute'}}>
                                    <div style={{width: 14.37, height: 20.59, left: 2.39, top: 2.39, position: 'absolute', border: '0.96px black solid'}}></div>
                                    <img style={{width: 18.24, height: 20.59, left: 2.39, top: 2.39, position: 'absolute'}} src="https://via.placeholder.com/18x21" />
                                    <div style={{width: 7.66, height: 4.38, left: 5.51, top: 5.92, position: 'absolute', border: '0.96px black solid'}}></div>
                                    <div style={{width: 2.68, height: 7.42, left: 8.14, top: 6.71, position: 'absolute', border: '0.96px black solid'}}></div>
                                </div>
                                <div style={{width: 123.57, height: 43.54, left: 2.23, top: 125.17, position: 'absolute'}}>
                                    <div style={{width: 134.35, height: 31.64, left: -7.65, top: 12.90, position: 'absolute', background: '#77311D', border: '0.96px black solid'}}></div>
                                    <div style={{width: 62.75, height: 15.11, left: 25.51, top: 7.58, position: 'absolute', transform: 'rotate(2deg)', transformOrigin: '0 0', background: 'white', borderRadius: 0.48, border: '0.96px black solid'}}></div>
                                </div> */}
                            </div>
                        </div>
                        <div style={{width: 182, height: 182, left: 202, top: 674, position: 'absolute'}}>
                            <div style={{width: 189.08, height: 189.08, left: 0, top: 0, position: 'absolute'}}>
                                <div style={{width: 189.08, height: 189.08, left: 0, top: 0, position: 'absolute', background: '#F9C9B6', borderRadius: 9999}} />
                            </div>
                            <div style={{width: 131.46, height: 175.67, left: 28.26, top: 14.85, position: 'absolute'}}>
                                <div style={{width: 59.39, height: 56.52, left: 29.22, top: 107.28, position: 'absolute'}}>
                                    {/* <div style={{width: 61.70, height: 58.47, left: -0.85, top: -1.36, position: 'absolute', background: '#FC909F', border: '1px black solid'}}></div> */}
                                    {/* <div style={{width: 61.70, height: 58.47, left: -0.85, top: -1.36, position: 'absolute'}}>
                                        <div style={{width: 61.70, height: 58.47, left: 0, top: 0, position: 'absolute', background: '#FFEDEF'}}></div>
                                        <div style={{width: 58.71, height: 53.74, left: 18.26, top: -26.51, position: 'absolute', background: 'black', borderRadius: 9999}} />
                                    </div> */}
                                </div>
                                <div style={{width: 95.79, height: 158.05, left: 14.85, top: 5.75, position: 'absolute'}}>
                                    {/* <div style={{width: 61.70, height: 58.71, left: 14.93, top: 105.49, position: 'absolute'}}>
                                        <div style={{width: 61.70, height: 58.47, left: 0, top: 0, position: 'absolute', background: '#AC6651', border: '1px black solid'}}></div>
                                        <div style={{width: 61.70, height: 58.47, left: 0, top: 0, position: 'absolute'}}>
                                            <div style={{width: 61.70, height: 58.47, left: 0, top: 0, position: 'absolute', background: '#AC6651'}}></div>
                                            <div style={{width: 58.71, height: 53.74, left: 17.42, top: -27.86, position: 'absolute', background: 'black', borderRadius: 9999}} />
                                        </div>
                                    </div> */}
                                    <img style={{width: 85.59, height: 111.69, left: 6.94, top: 10.92, position: 'absolute'}} src={avatar3} />
                                </div>
                                {/* <div style={{width: 30.65, height: 30.65, left: 57.95, top: 82.38, position: 'absolute'}}>
                                    <div style={{width: 18.41, height: 11.17, left: 9.85, top: 22.07, position: 'absolute', transform: 'rotate(-25.91deg)', transformOrigin: '0 0', border: '1px black solid'}}></div>
                                </div>
                                <div style={{width: 71.36, height: 22.99, left: 29.22, top: 43.58, position: 'absolute'}}>
                                    <div style={{width: 51.75, height: 15.96, left: 10.95, top: 3.98, position: 'absolute'}}>
                                        <div style={{width: 13.43, height: 4.34, left: 38.31, top: 0, position: 'absolute', border: '1px black solid'}}></div>
                                        <div style={{width: 13.43, height: 4.34, left: 0, top: 12.92, position: 'absolute', transform: 'rotate(-45.49deg)', transformOrigin: '0 0', border: '1px black solid'}}></div>
                                    </div>
                                </div>
                                <div style={{width: 114.95, height: 95.79, left: 0, top: 0, position: 'absolute'}}>
                                    <div style={{width: 97.39, height: 89.33, left: 13.43, top: -4.98, position: 'absolute'}}>
                                        <div style={{width: 97.39, height: 89.33, left: 0, top: 0, position: 'absolute', background: 'white', border: '1px black solid'}}></div>
                                        <div style={{width: 15.76, height: 28.32, left: 63.32, top: 8.13, position: 'absolute', border: '1px black solid'}}></div>
                                    </div>
                                </div>
                                <div style={{width: 45.98, height: 22.99, left: 44.54, top: 51.73, position: 'absolute'}}>
                                    <div style={{width: 41.89, height: 15.88, left: 2.10, top: 3.04, position: 'absolute'}}>
                                        <div style={{width: 8.96, height: 9.95, left: 0, top: 6, position: 'absolute', transform: 'rotate(-6.78deg)', transformOrigin: '0 0', background: 'black', borderRadius: 9999}} />
                                        <div style={{width: 8.96, height: 9.95, left: 31.90, top: 0.98, position: 'absolute', transform: 'rotate(-6.28deg)', transformOrigin: '0 0', background: 'black', borderRadius: 9999}} />
                                    </div>
                                    <div style={{width: 74.88, height: 32.34, left: -19.90, top: -3.98, position: 'absolute'}}>
                                        <div style={{width: 27.86, height: 27.86, left: 47.02, top: 0, position: 'absolute', borderRadius: 9999, border: '1px #F4D150 solid'}} />
                                        <div style={{width: 27.86, height: 27.86, left: 13.68, top: 4.48, position: 'absolute', borderRadius: 9999, border: '1px #F4D150 solid'}} />
                                        <div style={{width: 7.96, height: 3.98, left: 40.55, top: 13.43, position: 'absolute', border: '1px #F4D150 solid'}}></div>
                                        <div style={{width: 14.93, height: 2.74, left: 0, top: 19.41, position: 'absolute', border: '1px #F4D150 solid'}}></div>
                                    </div>
                                </div>
                                <div style={{width: 15.33, height: 19.16, left: 61, top: 65.82, position: 'absolute', transform: 'rotate(-8deg)', transformOrigin: '0 0'}}>
                                    <div style={{width: 6.16, height: 12.59, left: 5.01, top: 3.53, position: 'absolute', border: '1px black solid'}}></div>
                                </div>
                                <div style={{width: 22.99, height: 22.99, left: 16.76, top: 68.49, position: 'absolute'}}>
                                    <div style={{width: 12.94, height: 17.66, left: 2.49, top: 2.49, position: 'absolute', border: '1.99px black solid'}}></div>
                                    <div style={{width: 13.43, height: 17.66, left: 2.49, top: 2.49, position: 'absolute', background: '#AC6651'}}></div>
                                    <div style={{width: 7.96, height: 4.55, left: 5.72, top: 6.15, position: 'absolute', border: '1px black solid'}}></div>
                                    <div style={{width: 2.79, height: 7.71, left: 8.46, top: 6.97, position: 'absolute', border: '1px black solid'}}></div>
                                </div>
                                <div style={{width: 128.37, height: 45.23, left: 3.09, top: 130.44, position: 'absolute'}}>
                                    <div style={{width: 139.57, height: 32.87, left: -7.95, top: 13.40, position: 'absolute', background: '#9287FF', border: '1px black solid'}}></div>
                                    <div style={{width: 65.19, height: 15.70, left: 26.50, top: 7.88, position: 'absolute', transform: 'rotate(2deg)', transformOrigin: '0 0', background: '#E0DDFF', borderRadius: 0.50, border: '1px black solid'}}></div>
                                </div> */}
                            </div>
                        </div>
                        <div style={{width: 131, height: 131, left: 337, top: 538, position: 'absolute'}}>
                            <div style={{width: 128.82, height: 128.82, left: 0, top: 0, position: 'absolute'}}>
                                <div style={{width: 128.82, height: 128.82, left: 0, top: 0, position: 'absolute', background: '#E0DDFF', borderRadius: 9999}} />
                            </div>
                            <div style={{width: 103.44, height: 119.11, left: 11.38, top: 10.69, position: 'absolute'}}>
                                <div style={{width: 42.75, height: 40.68, left: 29.99, top: 77.22, position: 'absolute'}}>
                                    {/* <div style={{width: 42.03, height: 39.83, left: -0.02, top: -0, position: 'absolute', background: '#FC909F', border: '0.68px black solid'}}></div>
                                    <div style={{width: 42.03, height: 39.83, left: -0.02, top: -0, position: 'absolute'}}>
                                        <div style={{width: 42.03, height: 39.83, left: 0, top: 0, position: 'absolute', background: '#FFEDEF'}}></div>
                                        <div style={{width: 40, height: 36.61, left: 11.88, top: -18.98, position: 'absolute', background: 'black', borderRadius: 9999}} />
                                    </div> */}
                                </div>
                                <div style={{width: 68.95, height: 110.32, left: 19.65, top: 4.14, position: 'absolute'}}>
                                    {/* <div style={{width: 42.03, height: 40, left: 10.17, top: 71.87, position: 'absolute'}}>
                                        <div style={{width: 42.03, height: 36.44, left: 0, top: 0, position: 'absolute', background: '#77311D', border: '0.68px black solid'}}></div>
                                        <div style={{width: 42.03, height: 39.83, left: 0, top: 0, position: 'absolute', background: '#AC6651'}}></div>
                                        <div style={{width: 40, height: 36.61, left: 11.86, top: -18.98, position: 'absolute', background: 'black', borderRadius: 9999}} />
                                    </div> */}
                                    <img style={{width: 58.31, height: 76.09, left: 4.73, top: 7.44, position: 'absolute'}} src={avatar4} />
                                </div>
                                {/* <div style={{width: 22.06, height: 22.06, left: 50.68, top: 59.29, position: 'absolute'}}>
                                    <div style={{width: 21.70, height: 10.85, left: -0.58, top: 6.80, position: 'absolute', transform: 'rotate(-7.05deg)', transformOrigin: '0 0'}}>
                                        <div style={{width: 21.70, height: 10.85, left: 0, top: 0, position: 'absolute', transform: 'rotate(-7.05deg)', transformOrigin: '0 0', background: '#171921', borderRadius: 0.34, border: '0.68px #171921 solid'}}></div>
                                        <div style={{width: 21.70, height: 10.85, left: 0, top: 0, position: 'absolute', transform: 'rotate(-7.05deg)', transformOrigin: '0 0'}}>
                                            <div style={{width: 21.70, height: 10.85, left: 0, top: 0, position: 'absolute', transform: 'rotate(-7.05deg)', transformOrigin: '0 0', background: '#171921'}}></div>
                                            <div style={{width: 14.58, height: 14.58, left: 4.16, top: 4.60, position: 'absolute', transform: 'rotate(-7.05deg)', transformOrigin: '0 0', background: '#FC909F', borderRadius: 9999}} />
                                        </div>
                                    </div>
                                </div>
                                <div style={{width: 82.74, height: 68.95, left: 8.96, top: -0, position: 'absolute'}}>
                                    <div style={{width: 10.25, height: 12.20, left: 47.46, top: 6.78, position: 'absolute', border: '0.68px black solid'}}></div>
                                    <div style={{width: 10.25, height: 12.20, left: 38.65, top: 6.10, position: 'absolute', border: '0.68px black solid'}}></div>
                                    <div style={{width: 10.25, height: 12.20, left: 26.44, top: 9.83, position: 'absolute', border: '0.68px black solid'}}></div>
                                </div>
                                <div style={{width: 51.37, height: 16.55, left: 29.99, top: 31.37, position: 'absolute'}}>
                                    <div style={{width: 37.01, height: 13.92, left: 6.75, top: -0.34, position: 'absolute'}}>
                                        <div style={{width: 9.15, height: 2.95, left: 26.81, top: 3.05, position: 'absolute', border: '0.68px #FC909F solid'}}></div>
                                        <div style={{width: 9.15, height: 2.95, left: 0.70, top: 11.85, position: 'absolute', transform: 'rotate(-45.49deg)', transformOrigin: '0 0', border: '0.68px #FC909F solid'}}></div>
                                        <div style={{width: 1.69, height: 2.20, left: -0, top: 8.49, position: 'absolute', transform: 'rotate(-11deg)', transformOrigin: '0 0', border: '0.68px #FC909F solid'}}></div>
                                        <div style={{width: 1.69, height: 2.20, left: 37.01, top: 2.28, position: 'absolute', transform: 'rotate(-169deg)', transformOrigin: '0 0', border: '0.68px #FC909F solid'}}></div>
                                        <div style={{width: 1.69, height: 2.20, left: 2.90, top: 5.99, position: 'absolute', transform: 'rotate(8deg)', transformOrigin: '0 0', border: '0.68px #FC909F solid'}}></div>
                                        <div style={{width: 1.69, height: 2.20, left: 33.77, top: 0.47, position: 'absolute', transform: 'rotate(172deg)', transformOrigin: '0 0', border: '0.68px #FC909F solid'}}></div>
                                        <div style={{width: 1.69, height: 2.20, left: 6.26, top: 4.51, position: 'absolute', transform: 'rotate(22deg)', transformOrigin: '0 0', border: '0.68px #FC909F solid'}}></div>
                                        <div style={{width: 1.69, height: 2.20, left: 30.07, top: 0, position: 'absolute', transform: 'rotate(158deg)', transformOrigin: '0 0', border: '0.68px #FC909F solid'}}></div>
                                    </div>
                                </div>
                                <div style={{width: 33.09, height: 16.55, left: 41.02, top: 37.23, position: 'absolute'}}>
                                    <div style={{width: 30.83, height: 10.61, left: 0.75, top: 1.06, position: 'absolute'}}>
                                        <div style={{width: 30.83, height: 10.30, left: 0, top: 0, position: 'absolute'}}>
                                            <div style={{width: 8.14, height: 5.07, left: 0, top: 5.43, position: 'absolute', transform: 'rotate(-16.28deg)', transformOrigin: '0 0', background: '#6BD9E9'}}></div>
                                            <div style={{width: 8.14, height: 5.09, left: 21.69, top: 2.01, position: 'absolute', transform: 'rotate(-14.28deg)', transformOrigin: '0 0', background: '#6BD9E9'}}></div>
                                        </div>
                                        <img style={{width: 7.15, height: 4.44, left: 1.73, top: 6.17, position: 'absolute', borderRadius: 0.34}} src="https://via.placeholder.com/7x4" />
                                        <img style={{width: 7.08, height: 4.40, left: 23.46, top: 2.82, position: 'absolute', borderRadius: 0.34}} src="https://via.placeholder.com/7x4" />
                                    </div>
                                </div>
                                <div style={{width: 11.03, height: 13.79, left: 52.87, top: 47.37, position: 'absolute', transform: 'rotate(-8deg)', transformOrigin: '0 0'}}>
                                    <div style={{width: 4.20, height: 8.58, left: 3.97, top: 2.59, position: 'absolute', border: '0.68px black solid'}}></div>
                                </div>
                                <div style={{width: 103.44, height: 111.88, left: 0, top: 2.82, position: 'absolute', background: '#FC909F', border: '0.65px black solid'}}></div>
                                <div style={{width: 16.55, height: 16.55, left: 21.03, top: 49.30, position: 'absolute'}}>
                                    <div style={{width: 8.81, height: 12.03, left: 1.69, top: 1.69, position: 'absolute', border: '1.36px black solid'}}></div>
                                    <div style={{width: 9.15, height: 12.03, left: 1.69, top: 1.69, position: 'absolute', background: '#77311D'}}></div>
                                    <div style={{width: 5.42, height: 3.10, left: 3.90, top: 4.19, position: 'absolute', border: '0.68px black solid'}}></div>
                                    <div style={{width: 1.90, height: 5.25, left: 5.76, top: 4.75, position: 'absolute', border: '0.68px black solid'}}></div>
                                    <div style={{width: 16.27, height: 16.27, left: 1.02, top: 11.86, position: 'absolute'}}>
                                        <div style={{width: 16.27, height: 16.27, left: 0, top: 0, position: 'absolute', border: '0.68px #F4D150 solid'}}></div>
                                    </div>
                                </div>
                                <div style={{width: 87.46, height: 30.81, left: 9.98, top: 88.30, position: 'absolute'}}>
                                    <div style={{width: 95.09, height: 27.12, left: -5.42, top: 4.41, position: 'absolute', background: 'white', border: '0.72px black solid'}}></div>
                                </div> */}
                            </div>
                        </div>
                        <div style={{width: 198, height: 198, left: 259, top: 104, position: 'absolute'}}>
                            <div style={{width: 203.50, height: 203.50, left: 0, top: 0, position: 'absolute'}}>
                                <div style={{width: 203.50, height: 203.50, left: 0, top: 0, position: 'absolute', background: '#E0DDFF', borderRadius: 9999}} />
                            </div>
                            <div style={{width: 141.16, height: 188.90, left: 30.74, top: 16.15, position: 'absolute'}}>
                                <div style={{width: 104.21, height: 166.74, left: 16.15, top: 6.25, position: 'absolute'}}>
                                    {/* <div style={{width: 66.41, height: 63.19, left: 16.07, top: 113.53, position: 'absolute'}}>
                                        <div style={{width: 66.41, height: 57.57, left: 0, top: 0, position: 'absolute', background: '#F9C9B6', border: '1.07px black solid'}}></div>
                                        <div style={{width: 66.41, height: 62.92, left: 0, top: 0, position: 'absolute', background: '#F9C9B6'}}></div>
                                        <div style={{width: 63.19, height: 57.84, left: 18.74, top: -29.99, position: 'absolute', background: 'black', borderRadius: 9999}} />
                                    </div> */}
                                    <img style={{width: 92.12, height: 120.21, left: 7.47, top: 11.76, position: 'absolute'}} src={avatar5} />
                                </div>
                                {/* <div style={{width: 33.35, height: 33.35, left: 63.05, top: 89.62, position: 'absolute'}}>
                                    <div style={{width: 18.85, height: 22.77, left: 5.67, top: 7.59, position: 'absolute', transform: 'rotate(-10.26deg)', transformOrigin: '0 0'}}>
                                        <div style={{width: 18.85, height: 22.77, left: 0, top: 0, position: 'absolute', transform: 'rotate(-10.26deg)', transformOrigin: '0 0', background: 'black', borderRadius: 9999, border: '0.96px black solid'}} />
                                        <div style={{width: 18.85, height: 22.77, left: 0, top: 0, position: 'absolute', transform: 'rotate(-10.26deg)', transformOrigin: '0 0'}}>
                                            <div style={{width: 18.85, height: 22.77, left: 0, top: 0, position: 'absolute', transform: 'rotate(-10.26deg)', transformOrigin: '0 0', background: '#171921', borderRadius: 9999}} />
                                            <div style={{width: 21.64, height: 19.61, left: 0.65, top: 11.45, position: 'absolute', transform: 'rotate(-10.26deg)', transformOrigin: '0 0', background: '#FC909F', borderRadius: 9999}} />
                                        </div>
                                    </div>
                                </div>
                                <div style={{width: 50.02, height: 25.01, left: 48.46, top: 56.27, position: 'absolute'}}>
                                    <div style={{width: 48.34, height: 24.37, left: 0.37, top: -0.72, position: 'absolute'}}>
                                        <div style={{width: 12.85, height: 12.85, left: 0, top: 6.03, position: 'absolute', transform: 'rotate(-6.28deg)', transformOrigin: '0 0', background: '#D2EFF3', borderRadius: 9999}} />
                                        <div style={{width: 9.64, height: 14.46, left: 2.14, top: 10.01, position: 'absolute', transform: 'rotate(-6.78deg)', transformOrigin: '0 0', background: 'black', borderRadius: 9999}} />
                                        <div style={{width: 12.85, height: 12.85, left: 34.16, top: 1.40, position: 'absolute', transform: 'rotate(-6.28deg)', transformOrigin: '0 0', background: '#D2EFF3', borderRadius: 9999}} />
                                        <div style={{width: 9.64, height: 14.46, left: 36.47, top: 4.60, position: 'absolute', transform: 'rotate(-6.28deg)', transformOrigin: '0 0', background: 'black', borderRadius: 9999}} />
                                    </div>
                                </div>
                                <div style={{width: 77.64, height: 25.01, left: 31.78, top: 47.42, position: 'absolute'}}>
                                    <div style={{width: 58.47, height: 22, left: 10.67, top: -0.54, position: 'absolute'}}>
                                        <div style={{width: 14.46, height: 4.67, left: 42.35, top: 4.82, position: 'absolute', border: '1.07px black solid'}}></div>
                                        <div style={{width: 14.46, height: 4.67, left: 1.11, top: 18.73, position: 'absolute', transform: 'rotate(-45.49deg)', transformOrigin: '0 0', border: '1.07px black solid'}}></div>
                                        <div style={{width: 2.68, height: 3.48, left: 0, top: 13.40, position: 'absolute', transform: 'rotate(-11deg)', transformOrigin: '0 0', border: '1.07px black solid'}}></div>
                                        <div style={{width: 2.68, height: 3.48, left: 58.47, top: 3.60, position: 'absolute', transform: 'rotate(-169deg)', transformOrigin: '0 0', border: '1.07px black solid'}}></div>
                                        <div style={{width: 2.68, height: 3.48, left: 4.58, top: 9.47, position: 'absolute', transform: 'rotate(8deg)', transformOrigin: '0 0', border: '1.07px black solid'}}></div>
                                        <div style={{width: 2.68, height: 3.48, left: 53.36, top: 0.74, position: 'absolute', transform: 'rotate(172deg)', transformOrigin: '0 0', border: '1.07px black solid'}}></div>
                                        <div style={{width: 2.68, height: 3.48, left: 9.89, top: 7.12, position: 'absolute', transform: 'rotate(22deg)', transformOrigin: '0 0', border: '1.07px black solid'}}></div>
                                        <div style={{width: 2.68, height: 3.48, left: 47.51, top: -0, position: 'absolute', transform: 'rotate(158deg)', transformOrigin: '0 0', border: '1.07px black solid'}}></div>
                                    </div>
                                </div>
                                <div style={{width: 125.05, height: 104.21, left: 0, top: 0, position: 'absolute'}}>
                                    <div style={{width: 139.49, height: 128.09, left: -9.83, top: 3.27, position: 'absolute', background: '#D2EFF3', border: '1.02px black solid'}}></div>
                                    <div style={{width: 0.88, height: 10.44, left: 101.48, top: 31.06, position: 'absolute', border: '1.07px black solid'}}></div>
                                </div>
                                <div style={{width: 16.67, height: 20.84, left: 66.37, top: 71.60, position: 'absolute', transform: 'rotate(-8deg)', transformOrigin: '0 0'}}>
                                    <div style={{width: 6.63, height: 13.55, left: 4.79, top: 3.04, position: 'absolute', border: '1.07px black solid'}}></div>
                                </div>
                                <div style={{width: 25.01, height: 27.09, left: 18.24, top: 74.51, position: 'absolute'}}>
                                    <div style={{width: 16.07, height: 23.03, left: 2.68, top: 2.68, position: 'absolute', border: '1.07px black solid'}}></div>
                                    <img style={{width: 20.39, height: 23.03, left: 2.68, top: 2.68, position: 'absolute'}} src="https://via.placeholder.com/20x23" />
                                    <div style={{width: 8.57, height: 4.90, left: 6.16, top: 6.62, position: 'absolute', border: '1.07px black solid'}}></div>
                                    <div style={{width: 3, height: 8.30, left: 9.10, top: 7.50, position: 'absolute', border: '1.07px black solid'}}></div>
                                    <div style={{width: 25.71, height: 25.71, left: -2.14, top: 21.42, position: 'absolute'}}>
                                        <div style={{width: 4.28, height: 4.28, left: 11.25, top: -1.07, position: 'absolute', background: 'white', borderRadius: 9999}} />
                                        <div style={{width: 1.07, height: 1.07, left: 13.39, top: 0, position: 'absolute', background: '#FFEDEF', borderRadius: 9999}} />
                                    </div>
                                </div>
                                <div style={{width: 138.17, height: 48.68, left: 3, top: 140.22, position: 'absolute'}}>
                                    <div style={{width: 150.22, height: 32.56, left: -8.56, top: 17.25, position: 'absolute', background: '#9287FF', border: '1.07px black solid'}}></div>
                                    <div style={{width: 26.12, height: 22.74, left: 28.52, top: 8.48, position: 'absolute', transform: 'rotate(2deg)', transformOrigin: '0 0', background: '#E0DDFF', borderRadius: 0.54, border: '1.07px black solid'}}></div>
                                    <div style={{width: 18.09, height: 21.54, left: 97.86, top: 8.35, position: 'absolute', transform: 'rotate(178deg)', transformOrigin: '0 0', background: '#E0DDFF', borderRadius: 0.54, border: '1.07px black solid'}}></div>
                                    <div style={{width: 8.57, height: 11.51, left: 50.07, top: 17.67, position: 'absolute', background: 'black', border: '1.07px black solid'}}></div>
                                    <div style={{width: 8.57, height: 11.51, left: 84.08, top: 17.14, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', background: 'black', border: '1.07px black solid'}}></div>
                                    <div style={{width: 6.43, height: 5.09, left: 31.33, top: 7.50, position: 'absolute', background: 'black', border: '1.07px black solid'}}></div>
                                    <div style={{width: 5.89, height: 5.09, left: 91.57, top: 7.50, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', background: 'black', border: '1.07px black solid'}}></div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div style={{width: 932, height: 1024, left: 508, top: 0, position: 'absolute', background: 'rgba(108, 185, 249, 0.20)'}}>
                        <div style={{left: 62, top: 395.50, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 70, display: 'inline-flex'}}>
                            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 5, display: 'flex'}}>
                                <div style={{color: 'black', fontSize: 40, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Break Time? Find a buddy! 🎈</div>
                                <div style={{color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Huddle Up helps you make impromptu plans with people in the same space!</div>
                            </div>
                            <button onClick={this.onClickLetsGo} style={{paddingLeft: 50, paddingRight: 50, paddingTop: 30, paddingBottom: 30, background: '#A67CF3', borderRadius: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <div style={{color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}} >Less Goo</div>
                                <div style={{width: 32, height: 32, position: 'relative'}}>
                                    <div style={{width: 32, height: 32, left: 0, top: 0, position: 'absolute'}}></div>
                                    <div style={{width: 22, height: 0, left: 5, top: 16, position: 'absolute', border: '1.50px white solid'}}></div>
                                    <div style={{width: 9, height: 18, left: 18, top: 7, position: 'absolute', border: '1.50px white solid'}}></div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default withRouter(BreakTime);