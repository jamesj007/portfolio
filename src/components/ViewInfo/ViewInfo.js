import React, { Component } from 'react';
import ImageContent from '../ImageContent/ImageContent';

import styled from 'styled-components';
import AnimationBox from '../AnimationBox/AnimationBox';


const ImageSelection = styled.div`
    display: flex;
`;

//show all the image icons and set up the appropriate AnimationBox for each. It is setup such that if you click each image
//the appropriate Animation Box pops up. The data from App.js is propagated and stored in the state of ViewInfo. Each image
//has an index associated with it and when you click an image, the index is passed up from the child to the parent and the AnimationBox
//has the appropriate data passed down to it based on the index of the image clicked. 
class ViewInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appContent: this.props.appContent,
            t_info: {},
            data: [],
            header: "",
        }
        this.clickImage = this.clickImage.bind(this);
    }

    clickImage(index) {
        this.setState({t_info: this.state.appContent[index].t_info, data: this.state.appContent[index].data, header: this.state.appContent[index].header});
    }

    render() {
        return (this.state.appContent ?
            <div>
                <ImageSelection>
                    {
                        //iterate through all the data specified in data.js and create an image for each item.
                        this.state.appContent.map(function(d, index) {
                            return <ImageContent key={index} img={d.img} clickImage={this.clickImage} index={index}/>
                        }.bind(this))
                    }
                </ImageSelection>
                {this.state.data.length > 0 && <AnimationBox t_info={this.state.t_info} cardData={this.state.data} header={this.state.header}/>}
            </div>
            :
            null
        );
    }
}

export default ViewInfo;