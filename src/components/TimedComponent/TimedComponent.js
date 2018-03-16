import React, { Component } from 'react';
import {UnmountClosed} from 'react-collapse';

class TimedComponent extends Component {

    constructor() {
        super();
        var timeOut;
        this.state = {
            showChild: true,
        }
    }

    startTimer() {
        this.timeOut = setTimeout(() => {
            this.setState({showChild: false});
            this.props.timeFinish();
        }, this.props.time);
    }

    removeTimer() {
        if (this.timeOut) {
            clearTimeout(this.timeOut);
        }
    }

    componentDidMount() {
        this.startTimer();
    }

    componentWillUnmount() {
       this.removeTimer();
        //this.props.timeFinish();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.children !== this.props.children) {
            this.removeTimer();
            this.startTimer();
        }
    }

    render() {
        return (
            <UnmountClosed isOpened={this.state.showChild}>
                {this.props.children}
            </UnmountClosed>
        );
    }
}

export default TimedComponent;