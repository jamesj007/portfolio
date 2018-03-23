import React, { Component } from 'react';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import styled from 'styled-components';


//supporting components for the Program Box. Nothing special 
const Terminal = styled.div`
    background-color: ${(props) => props.bcolor};
`;

const Directory = styled.h3`
    margin: 0px;
    color: ${(props) => props.color};
`;

const Command = styled.h3`
    margin: 0px;
    color: ${(props) => props.color};
`;

const Header = styled.h5`
    margin: 0px;
`;


//kind of a gimmicky terminal thing that I created for fun. I really did not have any better ideas. It uses the Typist
//component to type the words. I reset the typing if different words and styles are passed to the ProgramBox.
class ProgramBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            typing: true,
        };
    }

    //reset the typing. setState here will automatically re-render the component. 
    componentWillReceiveProps(nextProps) {
        if (nextProps.t_info.run_command !== this.props.t_info.run_command) {
            this.setState({ typing: false }, () => {
                this.setState({ typing: true })
            });
        }
    }

    render() {
        return (
            <Terminal bcolor={this.props.t_info.bcolor}>
                <Header>Basic React Terminal version 1.0.</Header><br/>
                <Directory color={this.props.t_info.dcolor}>{this.props.t_info.location}</Directory>
                <Command color={this.props.t_info.tcolor}>
                    {   this.state.typing && 
                        <Typist>
                            $ <Typist.Delay ms={500} /> {this.props.t_info.run_command}
                            <Typist.Delay ms={900} /><br/> 
                            Loading {this.props.t_info.section}....
                        </Typist>
                    }
                </Command>
            </Terminal>
        );
    }
}

export default ProgramBox;