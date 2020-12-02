import './App.css';
import React, { Component } from 'react'
import axios from 'axios'
import Recipe from './components/recipePage/Recipe'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


export default class App extends Component {

  render() {

    
    return (
      <Router >
        <Switch>
        <Route  path='/recipe' component ={Recipe}/>
        </Switch>

      </Router>

    )
  }
}

