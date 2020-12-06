import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Register from './components/register/Register.js'
import Main from './components/Main'
import PrivateRoute from './components/PrivateRoute';
import './App.css'


export default class App extends Component {
  state = {
    isAuth: true,
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
    
    return (
      <>
        {this.state.meals.length === 0 ? '' : (
          <Router >
            <Switch>
              <Route path='/register' component={Register} />
              <PrivateRoute path='/main' state={this.state} component={Main}/>
            </Switch>
          </Router>
        )}
      </>

    )
  }




  // render() {
  //   return (
  //     <>
  //       {this.state.meals.length === 0 ? '' : (
  //         <Router >
  //           <Route path='/' component={Nav} />
  //           <Switch>
  //             <Route path='/all' component={(props) => <AllMeals {...props} state={this.state} />} />
  //             <Route path='/favorites' component={(props) => <Fav {...props} state={this.state} />} />
  //             <Route path='/recipe' component={Recipe} />
  //           </Switch>
  //         </Router>
  //       )}
  //     </>

  //   )
  // }
}

