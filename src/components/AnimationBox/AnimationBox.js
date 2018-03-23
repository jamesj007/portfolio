import React, { Component } from 'react';
import ProgramBox from '../ProgramBox/ProgramBox';
import GameBoard from '../GameBoard/GameBoard';
import TimedComponent from '../TimedComponent/TimedComponent';

//The AnimationBox will show the ProgramBox as well as the GameBoard.
class AnimationBox extends Component {

    constructor(props) {
        super(props);
        //define some states to keep track of data, terminal, and gameboard status.
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

    //this keeps track of the data received by the component. If the data is different, then re-render the component. If the 
    //data is the same as before then interpret that as closing/hiding the AnimationBox (the user clicked on the same image again as a cue to close it)
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
                    //if state.terminal is true, then show the TimedComponent for the set amount of time. Afterwards, call the
                    //specified unmount() function.
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