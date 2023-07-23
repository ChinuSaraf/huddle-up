import { PureComponent } from "react";
import { withRouter } from './common/withRouter';
import React from "react";

export class CreateEvent extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Create Event Modal
            </div>
        )
    }
}

export default CreateEvent;