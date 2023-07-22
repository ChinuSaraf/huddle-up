import { PureComponent } from "react";
import { withRouter } from './common/withRouter';
import React from "react";
import { Button } from "@mui/material";


export class Events extends PureComponent {
    constructor(props) {
        super(props);
        this.showNotification = this.showNotification.bind(this);
    }

    // componentDidMount() {
    //     if (!("Notification" in window)) {
    //         console.log("Browser does not support desktop notification");
    //     } else {
    //         Notification.requestPermission();
    //     }
    //   }

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
                    // const notification = new Notification('Hey! You got a notification');
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
                {/* <button onClick={this.showNotification}>Show notification</button> */}
            </div>
        );
    }

}

export default Events;