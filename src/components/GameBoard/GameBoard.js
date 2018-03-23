import React, { Component } from 'react';
import Card from '../Cards/Card';
import {spring, presets, TransitionMotion} from 'react-motion';
import styled from 'styled-components';
import './GameBoard.css';

//helper components
const Board = styled.div`
    margin: 0 auto;
    background-color: rgb(30, 30, 41);
    height: 500px;
    overflow: auto;
    padding-right: 15px;
`;

const CardList = styled.ul`
    list-style: none;
    padding: 0px;
    margin: 0px;
    text-align: center;
`;

const CardItem = styled.li`
    display: inline-block;
`;

const SmallHeader = styled.h2`
    margin: 0px 0px 3px 0px;
    font-size: 20px;
    border-bottom: 1px solid white;
`;

//This component uses React motion to animate a set of cards from Card.js. I get the list of Cards from the parent and then use
//React motion to animate those cards to have a pop-up effect. 
class GameBoard extends Component {

    //initialize the component with the appropriate card list 
    constructor(props) {
        super(props);

        var list = this.props.data.map(function(d, index){
            return {key: `card_${index}`, data: d}
        })
        this.state = {
            cardList: list,
            header: this.props.header,
        };

        this.getDefaultStyles = this.getDefaultStyles.bind(this);
        this.getStyles = this.getStyles.bind(this);
    }

    //react-motion function to when an item enters 
    willEnter() {
        return {width:0, opacity: 0};
    }

    //react-motion function to define initial styling of animating components
    getDefaultStyles() {
        return this.state.cardList.map((card) => ({
            ...card, 
            style: {
                width: 40, 
                opacity: 0
            }
        }));
    }

    //helper function which returns the final styling of animating components. THis is all React-motion specific
    getStyles() {
        return this.state.cardList.map((card) => ({
            ...card, 
            style: {
                width: spring(80, presets.wobbly),
                opacity: spring(1, presets.gentle)
            }
        }));
    }

    //The animation is done via TransitionMotion. I specify the initial/default Styles and then specify what I want the final 
    //state of the animation to be and then react-motion takes care of all of it.
    render() {
        
        return (
            <div class="cardCont">
                <SmallHeader>{this.state.header}</SmallHeader>
                <Board>
                    <TransitionMotion
                        defaultStyles={this.getDefaultStyles()}
                        willEnter={this.willEnter}
                        styles={this.getStyles()}>
                        {interpolatedStyles =>
                            <CardList>
                                {interpolatedStyles.map((config) => 
                                    <CardItem key={config.key} style={{width: `${config.style.width}%`, opacity: config.style.opacity}}>
                                        <Card card_info={config.data}/>
                                    </CardItem>
                                )}
                            </CardList>
                        }
                    </TransitionMotion>
                    
                </Board>

            </div>
        );
    }
}

export default GameBoard;