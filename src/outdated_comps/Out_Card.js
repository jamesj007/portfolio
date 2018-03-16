import React, { Component } from 'react';
import './Card.css';
import LangBox from '../LangBox/LangBox';

class CardContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cardIndex: this.props.cardIndex,
            cardHeight: 0
        }

        this.sendHeight = this.sendHeight.bind(this);
    }

    sendHeight(card_offset) {
        console.log("hegiht: " + this.card.offsetHeight);
        const height = this.card.offsetHeight + card_offset;
        this.setState({cardHeight: height});
        if (typeof this.props.setCardHeight === 'function') {
            this.props.setCardHeight(height, this.state.cardIndex);
        }
    }

    componentDidMount() {
        this.sendHeight(50);
    }
    
    componentDidUpdate(prevProps, prevState) {
        const height = this.card.offsetHeight;
        if (height !== prevState.cardHeight) this.sendHeight(0);
    }

    render() {
        return (
            <div ref={(card) => this.card = card} className="card" style={{transform: `translate3d(${this.props.x}px, ${this.props.y}px, 0)`, WebkitTransform: `translate3d(${this.props.x}px, ${this.props.y}px, 0)`}}>
                <img className="card-icon" src={this.props.card_info.simg} alt="card-icon" style={{width:'100%', maxHeight:'50px'}}></img>
                <div className="card-content">
                    <h3>{this.props.card_info.title}</h3>
                    <h4>{this.props.card_info.subTitle}</h4>
                    <p>{this.props.card_info.content || this.props.children}</p>
                </div>
                {/* <div className="container">
                    <img className="card-icon" src={this.props.simg} alt="Avatar" style={{width:'100%', maxHeight:'50px'}}></img>
                </div> */}
                {   this.props.card_info.languages && 
                    <div className="card-lang">
                    {
                        this.props.card_info.languages.map(function(l, index) {
                            return (<LangBox key={index}>{l}</LangBox>);
                        })
                    }
                    </div>
                }
            </div>
        );
    }
}

export default CardContent;