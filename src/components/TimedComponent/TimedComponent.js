import React, { Component } from 'react';
import {UnmountClosed} from 'react-collapse';


//TimedComponent is a component that would exist for some period of time before it removes itself from the Virtual DOM.
//Originally, I wanted this component to destroy itself but that is anti-React. So I made the component call a function that
//is passed down from the parent when the time is up so that the parent deletes the child instead
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