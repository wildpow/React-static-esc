import React, { Component } from 'react'
import { Router } from 'react-static'
import Routes from 'react-static-routes'
import styled, { injectGlobal, keyframes } from 'styled-components';
import Topper from './components/Topper/Topper'
import Logo from './components/Logo/Logo'
import Nav from './components/Nav/Navigation'
import Footer from './components/Footer/Footer'
import MenuButton from './components/FlyoutMenu/MenuButton';
import Menu from './components/FlyoutMenu/Menu';
import 'normalize.css';

injectGlobal`
      html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
`

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 15px;
  transition: all .25s ease-in;
  @media (min-width: 768px) { width: 750px; padding-left: 10px; padding-right: 10px; }
  @media (min-width: 992px) { width: 970px; padding-left: 5px; padding-right: 5px; }
  @media (min-width: 1200px) { width: 1170px; }
  @media (min-width: 1300px) { width: 1270px; }
  @media (min-width: 1400px) { width: 1370px; }
`;
const HomeFadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;
const MainWrapper = styled.div`
animation-duration: .5s;
animation-name: ${HomeFadeIn};
animation-fill-mode: both;
`;

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      visible: false
    };
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  };
  
  handleMouseDown(e) {
    this.toggleMenu();
      e.stopPropagation();
    };
  toggleMenu() {
    this.setState({
      visible: !this.state.visible
    });
  };
  render() {
    return (
  <Router>
    <MainWrapper>
      <Topper/>
      <MenuButton handleMouseDown={this.handleMouseDown}/>
        <Menu handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible}/>
      <Nav/>
      <Logo/>
      <Container>
        <Routes/>
      </Container>
      <Footer/>
    </MainWrapper>
  </Router>
  );
  }
}
export default App;