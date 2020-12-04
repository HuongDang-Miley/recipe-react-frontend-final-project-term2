import './App.css';
import React, { Component } from 'react'
import axios from 'axios'
import Recipe from './components/recipePage/Recipe'
import AllMeals from './components/allMeals/AllMeals.js'
import Nav from './components/nav/Nav'
import Fav from './components/fav/Fav.js'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


export default class App extends Component {
  state = {
    meals: [],
  }


  componentDidMount = async () => {
    let latestMeals = await axios.get('https://themealdb.p.rapidapi.com/randomselection.php', {
      headers: {
        'x-rapidapi-key': '1eccb1fd0fmsh1264571b8ded970p1f1396jsn3b376a8754cf',
        'x-rapidapi-host': 'themealdb.p.rapidapi.com',
        useQueryString: true
      }
    })
    let latestMeals2 = await axios.get('https://themealdb.p.rapidapi.com/randomselection.php', {
      headers: {
        'x-rapidapi-key': '1eccb1fd0fmsh1264571b8ded970p1f1396jsn3b376a8754cf',
        'x-rapidapi-host': 'themealdb.p.rapidapi.com',
        useQueryString: true
      }
    })
    let latestMeals3 = await axios.get('https://themealdb.p.rapidapi.com/randomselection.php', {
      headers: {
        'x-rapidapi-key': '1eccb1fd0fmsh1264571b8ded970p1f1396jsn3b376a8754cf',
        'x-rapidapi-host': 'themealdb.p.rapidapi.com',
        useQueryString: true
      }
    })

    latestMeals.data.meals.map(item => {
      item.like = false
      return item
    })
    latestMeals2.data.meals.map(item => {
      item.like = false
      return item
    })
    latestMeals3.data.meals.map(item => {
      item.like = false
      return item
    })

    let combinedMeals = [...latestMeals.data.meals, ...latestMeals2.data.meals, ...latestMeals3.data.meals]
    this.setState({
      meals: combinedMeals
    })

  }

  render() {

    console.log('this.state in app.js', this.state)
    return (
      <>
        {this.state.meals.length === 0 ? '' : (
          <Router >
            <Route path='/' component={Nav} />
            <Switch>
              <Route path='/all' component={AllMeals} />
              {/* <Route  path='/favorites' component ={Fav}/> */}
              <Route path='/favorites' component={(props) => <Fav {...props} state={this.state} />} />
              <Route path='/recipe' component={Recipe} />
            </Switch>


          </Router>
        )}
      </>

    )
  }
}

