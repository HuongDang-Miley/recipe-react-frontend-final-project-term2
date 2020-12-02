import './App.css';
import React, { Component } from 'react'
import axios from 'axios'
import Recipe from './components/recipePage/Recipe'
import AllMeals from './components/allMeals/AllMeals.js'
import Nav from './components/nav/Nav'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


export default class App extends Component {

  render() {

    
    return (
      <Router >
        <Route  path='/' component ={Nav}/>
        <Switch>
        <Route  path='/home' component ={AllMeals}/>
        <Route  path='/recipe' component ={Recipe}/>
        </Switch>

      </Router>

    )
  }
}

