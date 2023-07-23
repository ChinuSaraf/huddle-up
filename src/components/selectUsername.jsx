import { PureComponent } from "react";
import { withRouter } from './common/withRouter';
import React from "react";

export class SelectUsername extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div style={{width: '100%', height: '100%', position: 'relative', background: '#E2F1FE'}}>
                    <div style={{width: 585, height: 473, left: 428, top: 275, position: 'absolute'}}>
                        <div style={{left: 105, top: 0, position: 'absolute', color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Select your username -></div>
                        <div style={{width: 585, left: 0, top: 59, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Don’t stress about it, you can always change the name later!</div>
                        <div style={{width: 517, height: 65, left: 34, top: 210, position: 'absolute', background: 'white', boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.10)', borderRadius: 10, overflow: 'hidden'}}>
                            <div style={{left: 25, top: 18, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>|</div>
                        </div>
                        <div style={{width: 192, height: 89, paddingLeft: 50, paddingRight: 50, paddingTop: 30, paddingBottom: 30, left: 361, top: 384, position: 'absolute', background: '#A67CF3', borderRadius: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                            <div style={{color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Confirm</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SelectUsername;