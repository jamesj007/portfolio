import React, { Component } from 'react';
import './LangBox.css';

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