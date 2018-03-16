import React, { Component } from 'react';
import ImageContent from '../ImageContent/ImageContent';

import styled from 'styled-components';
import AnimationBox from '../AnimationBox/AnimationBox';


const ImageSelection = styled.div`
    display: flex;
`;

//show all the image icons and set up the appropriate AnimationBox for each
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