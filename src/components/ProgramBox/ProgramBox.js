import React, { Component } from 'react';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import styled from 'styled-components';

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

class ProgramBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            typing: true,
        };
    }

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