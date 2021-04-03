import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Values from 'values.js'
import styled from 'styled-components';
import Footer from './components/footer'
import Loren from './pages/loren'
import Colors from './pages/colors'
import Home from './pages/home'
import Error from './pages/error'
import Header from './components/header'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

const App = ()=>{
  return(<>
    <Router>
    <Header />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/colors' exact>
          <Colors />
        </Route>
        <Route path='/loren' exact>
          <Loren />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
    <Footer />
    </>
  )
}

export default App