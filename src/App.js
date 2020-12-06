import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Register from './components/register/Register.js'
import Main from './components/Main'
import PrivateRoute from './components/PrivateRoute';
import jwt_decode from 'jwt-decode'
import './App.css'


export default class App extends Component {
  state = {
    isAuth: false,
    userToken: '',
    meals: [],
    user: null
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

    // base on expiration time in jwtToken, remove jwtToken from the browser.
    let token = localStorage.getItem('jwtToken')
    if (token) {
      let decodedToken = jwt_decode(token)
      let currentTime = Date.now() / 1000
      if (currentTime > decodedToken.exp) {
        localStorage.removeItem('jwtToken')
      } else {
        this.setState({
          isAuth: true,
          user: {
            email: decodedToken.email,
            _id: decodedToken._id
          },
          // meals: combinedMeals
        }
          // , () => { console.log(this.state) }
        )
      }
    }

    this.setState({
      meals: combinedMeals
    })

  }

  // Get user from jwtToken
  authorize = (jwtToken) => {
    // let decodedToken = jwt_decode(jwtToken)
    // console.log('decoded jwtToken', decodedToken)
    // console.log('decodedToken', decodedToken)
    // let to= localStorage.getItem('jwtToken')
    // console.log('token line 73', token)
    let decodedToken = jwt_decode(jwtToken)
    // let currentTime = Date.now() / 1000;
    // if (decoded.exp < currentTime) {
    //   localStorage.removeItem("jwtToken");}
    console.log('decoded browser token', decodedToken)
    this.setState({
      isAuth: true,
      // userToken: jwtToken,
      user: {
        email: decodedToken.email,
        _id: decodedToken._id
      }
    }
      // , () => { console.log(this.state) }
    )
  }

  logOut = () => {
    localStorage.removeItem('jwtToken')
    this.setState({
      isAuth: false,
      user: null
    })
  }


  render() {

    return (
      <>
        {this.state.meals.length === 0 ? '' : (
          <Router >
            <Switch>
              {/* <Route path='/register' component={Register} /> */}
              <Route path='/register' component={(props) => <Register {...props} authorize={this.authorize} />} />
              <PrivateRoute path='/main' state={this.state} logOut={this.logOut} component={Main} />
              {/* <PrivateRoute path='/main' component={(props) => <Main {...props} logOut={this.logOut} />} /> */}
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

