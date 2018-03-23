import React, { Component } from 'react';
import './Card.css';
import LangBox from '../LangBox/LangBox';

class CardContent extends Component {

    //style={{width: `${ this.props.cwidth }%`, maxWidth: `${ this.props.cwidth }%`, opacity: this.props.show}}

    //simple component to host information in a card-like manner. I set up checks within the components to use whichever props
    //is available
    render() {
        return (
            <div ref={(card) => this.card = card} className="card">    
                <img className="card-icon" src={this.props.card_info.simg} alt="card-icon" style={{width:'100%', maxHeight:'50px'}}></img>
                <div className="card-content">
                    <h3>{this.props.card_info.title}</h3>
                    <h4>{this.props.card_info.subTitle}</h4>
                    <p>{this.props.card_info.content || this.props.children}</p>
                </div>
                
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