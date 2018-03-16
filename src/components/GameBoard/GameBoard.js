import React, { Component } from 'react';
import Card from '../Cards/Card';
import {spring, presets, TransitionMotion} from 'react-motion';
import styled from 'styled-components';
import './GameBoard.css';


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

class GameBoard extends Component {

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

    willEnter() {
        return {width:0, opacity: 0};
    }

    getDefaultStyles() {
        return this.state.cardList.map((card) => ({
            ...card, 
            style: {
                width: 40, 
                opacity: 0
            }
        }));
    }

    getStyles() {
        return this.state.cardList.map((card) => ({
            ...card, 
            style: {
                width: spring(80, presets.wobbly),
                opacity: spring(1, presets.gentle)
            }
        }));
    }

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