import React, { Component } from 'react';
import Card from '../Cards/Card';
import contact from '../../images/contact.svg';
import {spring, StaggeredMotion, presets} from 'react-motion';
import {UnmountClosed, Collapse} from 'react-collapse';
import styled from 'styled-components';


const Board = styled.div`
    margin: 0 auto;
    background-color: rgb(30, 30, 41);
    width: 90%;
    height: 500px;
    overflow: scroll;
    position: relative;
    
`;


const OuterBoard = styled.div`
    background-color: rgb(30, 30, 41);
    padding-bottom: 10px;
    width: 100%;
`;

const data = [
        {
            title: "Site Reliability Engineer",
            subTitle: "May 2015",
            simg: contact,
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            languages: ["balh", "blah", "afaslkfdjlskdjflaskdjflskdfj"]
        },
        {
            title: "Facebook Engineer",
            subTitle: "May 2015",
            simg: contact,
            content: "i like to dance",
            languages: ["balh", "blah"]
        },
        {
            title: "Google Search Engineer",
            subTitle: "May 2015",
            simg: contact,
            content: "i like to program",
            languages: ["balh", "blah"]
        },
]

class GameBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            boardW: 0,
            cardH: [],
            cardStyles: [],
            cardList: [],
        };

        this.setCardHeight = this.setCardHeight.bind(this);
        this.updateBoard = this.updateBoard.bind(this);
    }


    updateBoard() {
        console.log("this is firing")
        const width = this.board.clientWidth;
        if (width != this.state.boardW) {
            this.setState({boardW: width});
            var cardL;
        
            var prevPos = 0;
            cardL = data.map(function(d, index) {
                if (index == 0) {
                    prevPos = 20;
                    return <Card key={index} cardIndex={index} setCardHeight={this.setCardHeight} card_info={d} x={width*.10} y={20} />
                }
                console.log("Updating board with cardH: " + this.state.cardH[index-1]);
                prevPos = prevPos + this.state.cardH[index-1] + 10;
                return <Card key={index} cardIndex={index} setCardHeight={this.setCardHeight} card_info={d} x={width*.10} y={prevPos} />
            }.bind(this))
            
            this.setState({cardList: cardL});
        }
    }

    componentDidMount() {
        const width = this.board.clientWidth;
        if (width != this.state.boardW) {
            this.setState({boardW: width});
            var result = data.map(function(_, index) {
                return {x: width * .10, y: 600}
            }.bind(this))
            this.setState({cardStyles: result});
        }
        
        window.addEventListener("resize", this.updateBoard);
        //this.setupAnimation();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateBoard);
    }

    setCardHeight(newHeight, index) {
        console.log(newHeight + " " + index);
        if (index >= this.state.cardH.length) {
            
            this.setState(prevState => ({
                cardH: [...prevState.cardH, newHeight]
            }));
        } else if (index < this.state.cardH.length) {
            var newCardH = this.state.cardH.slice();
            newCardH[index] = newHeight;
            this.setState({cardH: newCardH});
        }
    }

    render() {
        
        return (
            <OuterBoard>
            <Board innerRef={(board) => this.board = board}>
            {
                (this.state.boardW != 0  &&  this.state.cardList.length == 0) ?
                (<StaggeredMotion
                    defaultStyles={this.state.cardStyles}
                    styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
                        //console.log("prevois styles: " + prevInterpolatedStyles[i].y);
                        return i === 0
                        ? {x: spring(prevInterpolatedStyles[i].x), y: spring(20, presets.gentle)}
                        : {x: spring(prevInterpolatedStyles[i].x), y: spring(prevInterpolatedStyles[i - 1].y + this.state.cardH[i - 1] + 10, presets.gentle)}
                    })}>
                    {interpolatingStyles =>
                        <div>
                        {interpolatingStyles.map((style, i) =>

                            <Card key={i} cardIndex={i} setCardHeight={this.setCardHeight} card_info={data[i]} x={style.x} y={style.y} />)
                        }
                        </div>
                    }
                </StaggeredMotion>)
                :
                (<div>
                    {this.state.cardList}
                </div>)
                 
            }     
            </Board>
            </OuterBoard>

            // <UnmountClosed isOpened={this.props.showBox} hasNestedCollapse={true} theme={{content: 'card-board'}}>
            //     <Collapse isOpened={true} theme={{collapse: 'card-l'}}>
            //         <Card simg={contact} title="Site Reliability Engineer" subTitle="May 2015">
            //             blah ablah blah 
            //         </Card>
            //     </Collapse>
            //     <Collapse isOpened={true} theme={{collapse: 'card-l'}}>
            //         <Card simg={contact} title="Site Reliability Engineer" subTitle="May 2015">
            //             blah ablah blah 
            //         </Card>
            //     </Collapse>
            // </UnmountClosed>
            // <StaggeredMotion
            // defaultStyles={[{o: 0}, {o: 0}, {o: 0}]}
            // styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
            //     return i === 0
            //     ? {o: spring(1)}
            //     : {o: spring(prevInterpolatedStyles[i - 1].o)}
            // })}>
            // {interpolatingStyles =>
            //     <div className="card-board">
            //     {interpolatingStyles.map((style, i) =>
            //         <Card key={i} card_opacity={style.o} />)
            //     }
            //     </div>
            // }
            // </StaggeredMotion>

            // <div>
                
            //     <Card simg={contact} title="Site Reliability Engineer" subTitle="May 2015">
            //         blah ablah blah 
            //     </Card>
            //     <Card simg={contact} title="Site Reliability Engineer" subTitle="May 2015">
            //         blah ablah blah 
            //     </Card>
            // </div>
        );
    }
}

export default GameBoard;