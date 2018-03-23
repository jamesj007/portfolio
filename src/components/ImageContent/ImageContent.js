import React, { Component } from 'react';
import styled from 'styled-components';


//helper components
const Holder = styled.div`
    width: 60px;
    margin: 20px 20px 20px 0px;
`;

const ContentImage = styled.img`
    width: 60px;
    max-width: 60px;
    cursor: pointer;
`;

//the component which will host the image icons which is clickable. Each image has an index associated with it as seen
//from its state. OnClick, the component will call a parent function passing the index of the image along to the function. 
//  *Passing state from child to parent
class ImageContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imgIndex: this.props.index,
        }

        this.imageClick = this.imageClick.bind(this);
    }

    imageClick() {
        this.props.clickImage(this.state.imgIndex);
    }


    render() {
        return (
            <Holder>
                <ContentImage onClick={this.imageClick}  src={this.props.img} alt="info-image" />                 
            </Holder>
        );
    }
}

export default ImageContent;