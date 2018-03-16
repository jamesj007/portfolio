import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import smiley from './images/smily.png';
import ViewInfo from './components/ViewInfo/ViewInfo';
import {AppContent} from './data/data';
import {Cspan} from './data/styledComps';

//simple Container 

export const PageContain = styled.div`
  margin: 55px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;



class App extends Component {

  //render the application
  render() {
    return (
      <div className="App">
        <PageContain>
          
          <p id="intro">Hello! <img src={smiley} alt="smiley"/><br/> <br/>My name is <Cspan color="#ff56f0"><strong>Jovin James</strong></Cspan>. <br/>computer science student @ ASU</p>
          <div id="lang">
            <p>I like <Cspan color="#56ffda">building things</Cspan> and also <Cspan color="#56ffda"> fixing things</Cspan>. I am constantly trying to learn new stuff and expand my skillset!</p>
          </div>
          <div id="about">
            <p>I am always <Cspan color="#42f456">open</Cspan> to new opportunities. Click one of the images below to learn more about my skillset and work experience and feel free to get in touch with me!!</p>
          </div>
          <ViewInfo appContent={AppContent}/>
          <footer id="footer">
            <p>Created by Jovin James</p>
          </footer>
        </PageContain>
      </div>
    );
  }
}

export default App;
