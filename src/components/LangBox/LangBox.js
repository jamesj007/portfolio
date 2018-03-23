import React, { Component } from 'react';
import './LangBox.css';

//simple component to show the different languages that I worked on or did a project with.
class LangBox extends Component {
    render() {
        return (
            <div className="boxy">
                <strong>{this.props.children}</strong>
            </div>
        );
    }
}

export default LangBox;