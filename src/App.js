import React, { Fragment } from 'react'
import { Router } from 'react-static'
import Routes from 'react-static-routes'
import Topper from './components/Topper/Topper'
import Logo from './components/Logo/Logo'
import Nav from './components/Nav/Navigation'
import Footer from './components/Footer/Footer'

export default () => (
  <Router>
    <Fragment>
      <Topper/>
      <Nav/>
      <Logo/>
      <main>
        <Routes/>
      </main>
      <Footer/>
    </Fragment>
  </Router>
)
