import React, { Component } from 'react';
import ProgramBox from '../ProgramBox/ProgramBox';
import GameBoard from '../GameBoard/GameBoard';
import TimedComponent from '../TimedComponent/TimedComponent';


class AnimationBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            terminal: true,
            info: false,
            t_info: this.props.t_info,
            cardData: this.props.cardData,
            header: this.props.header,
            time: 6000,
        }
        this.unmount = this.unmount.bind(this);
    }


    unmount() {
        this.setState({terminal: false, info: true});
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.cardData);
        //this.setState({t_info: nextProps.t_info, cardData: nextProps.cardData});
        if (nextProps.t_info !== this.state.t_info || nextProps.cardData !== this.state.cardData) {
            this.setState({t_info: nextProps.t_info, cardData: nextProps.cardData, header: nextProps.header, terminal: true, info: false, time: 6000});
        } else {
            this.setState((prevState) => {
                return {
                    terminal: !prevState.info,
                    info: false,
                }
            });
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.terminal && 
                    <TimedComponent timeFinish={this.unmount} time={this.state.time}>
                        <ProgramBox t_info={this.state.t_info}></ProgramBox>
                    </TimedComponent>
                }
                
                { this.state.info && <GameBoard data={this.state.cardData} header={this.state.header}/>}

            </div>
        );
    }
}

export default AnimationBox;