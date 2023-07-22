import { PureComponent } from "react";
import { withRouter } from './common/withRouter';
import React from "react";
import { Button } from "@mui/material";


export class Events extends PureComponent {

    componentDidMount() {
        if (!("Notification" in window)) {
            console.log("Browser does not support desktop notification");
        } else {
            Notification.requestPermission();
        }
      }

    showNotification = (e) => {
        e.preventDefault();
        new Notification('Hey! You got a notification');
    }

    render() {
        return (
            <div>
                <Button
                    variant="contained"
                    color="error"
                    sx={{ mt: 3, mb: 2, marginBottom: 5 }} onClick={this.showNotification}>Show notification</Button>
                {/* <button onClick={this.showNotification}>Show notification</button> */}
            </div>
        );
    }

}

export default Events;