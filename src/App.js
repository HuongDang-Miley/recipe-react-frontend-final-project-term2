import './App.css';
import React, { Component } from 'react'
import axios from 'axios'
// import Recipe from './components/recipePage/Recipe'
// import Nav from './components/nav/Nav'
// import Fav from './components/fav/Fav.js'
import Register from './components/register/Register.js'
import TestParent from './components/test/TestParent.js'
import TestChild from './components/test/TestChild.js'
import Main from './components/Main'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';


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
    // 
    return (
      <>
        {this.state.meals.length === 0 ? '' : (
          <Router >
            <Switch>
              <Route path='/register' component={Register} />
              <Route path='/testParent' render={()=><TestParent/>} />
              {/* <Route path='/testParent' component={TestParent} /> */}
              {/* <Route path='/testChild' component={TestChild} /> */}
              <PrivateRoute path='/main' state={this.state} component={Main}/>
              {/* <Route path='/all' component={(props) => <AllMeals {...props} state={this.state} />} />
              <Route path='/favorites' component={(props) => <Fav {...props} state={this.state} />} />
              <Route path='/recipe' component={Recipe} /> */}
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

