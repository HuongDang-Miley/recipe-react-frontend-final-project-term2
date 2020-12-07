import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Register from './components/register/Register.js'
import Login from './components/login/Login.js'
import Main from './components/Main'
import PrivateRoute from './components/PrivateRoute';
import jwt_decode from 'jwt-decode'
import './App.css'


export default class App extends Component {
  state = {
    isAuth: false,
    userToken: '',
    meals: [],
    user: null,
    favMeals: []
  }


  componentDidMount = async () => {
    // Get 30 random meals by calling api 3 times

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

    // Add like = false property to every meal
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
      console.log('this is decoded jwtToken', decodedToken)
      let currentTime = Date.now() / 1000
      if (currentTime > decodedToken.exp) {
        localStorage.removeItem('jwtToken')
      } else {
        this.setState({
          isAuth: true,
          user: {
            email: decodedToken.email,
            _id: decodedToken._id,
            // favMeals: decodedToken
          },
          // meals: combinedMeals
        })
      }
    }

    this.setState({
      meals: combinedMeals
    })

  }

  // Get user data from jwtToken
  authorize = (jwtToken) => {
    let decodedToken = jwt_decode(jwtToken)
    console.log('decoded browser token', decodedToken)
    this.setState({
      isAuth: true,
      user: {
        email: decodedToken.email,
        _id: decodedToken._id
      }
    })
  }

  // Once get user, get all user's fav meals from database
  loadAllFavMeals = async () => {
    console.log('berfore if', this.state.user)
    if (this.state.user !== null) {
      console.log('after if', this.state.user)
      const check = typeof this.state.user._id
      console.log('check type of id', check)
      try {

        let userFavMeals = await axios.get('http://localhost:3001/api/recipes/all-user-fav-meals', {
          _id: "5fcd992607f593b959b2841c"
          // _id: this.state.user._id
        })
        console.log(userFavMeals)

      }
      catch (e) { console.log(e) }
    }


  }

  //Add / Minus from FavMeals {
  addToFavorites = async (meal) => {
    console.log('meal from favorite button to App js', meal)
    const { idMeal, strMeal, strDrinkAlternate, strCategory, strArea, strMealThumb, strTags, strYoutube, strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strIngredient6,
      strIngredient7,
      strIngredient8,
      strIngredient9,
      strIngredient10,
      strIngredient11,
      strIngredient12,
      strIngredient13,
      strIngredient14,
      strIngredient15,
      strIngredient16,
      strIngredient17,
      strIngredient18,
      strIngredient19,
      strIngredient20,
      strMeasure1,
      strMeasure3,
      strMeasure5,
      strMeasure6,
      strMeasure8,
      strMeasure9,
      strMeasure10,
      strMeasure11,
      strMeasure12,
      strMeasure13,
      strMeasure14,
      strMeasure15,
      strMeasure16,
      strMeasure17,
      strMeasure18,
      strMeasure19,
      strMeasure20,
      strSource,
      dateModified,
    } = meal

    // if meal like = false, make it true, push to data
    if (meal.like === false) {
      if (this.state.user !== null) {
        meal.like = true
        console.log('this.state.user in app after componentDidMount run', this.state.user)
        try {
          let addMeal = await axios.post('http://localhost:3001/api/recipes/like-recipe',
            {
              _id: this.state.user._id,
              idMeal: idMeal,
              strMeal: strMeal,
              like: true,
              strDrinkAlternate: strDrinkAlternate,
              strCategory: strCategory,
              strArea: strArea,
              strMealThumb: strMealThumb,
              strTags: strTags,
              strYoutube: strYoutube,
              strIngredient1: strIngredient1,
              strIngredient2: strIngredient2,
              strIngredient3: strIngredient3,
              strIngredient4: strIngredient4,
              strIngredient5: strIngredient5,
              strIngredient6: strIngredient6,
              strIngredient7: strIngredient7,
              strIngredient8: strIngredient8,
              strIngredient9: strIngredient9,
              strIngredient10: strIngredient10,
              strIngredient11: strIngredient11,
              strIngredient12: strIngredient12,
              strIngredient13: strIngredient13,
              strIngredient14: strIngredient14,
              strIngredient15: strIngredient15,
              strIngredient16: strIngredient16,
              strIngredient17: strIngredient17,
              strIngredient18: strIngredient18,
              strIngredient19: strIngredient19,
              strIngredient20: strIngredient20,
              strMeasure1: strMeasure1,
              strMeasure3: strMeasure3,
              strMeasure5: strMeasure5,
              strMeasure6: strMeasure6,
              strMeasure8: strMeasure8,
              strMeasure9: strMeasure9,
              strMeasure10: strMeasure10,
              strMeasure11: strMeasure11,
              strMeasure12: strMeasure12,
              strMeasure13: strMeasure13,
              strMeasure14: strMeasure14,
              strMeasure15: strMeasure15,
              strMeasure16: strMeasure16,
              strMeasure17: strMeasure17,
              strMeasure18: strMeasure18,
              strMeasure19: strMeasure19,
              strMeasure20: strMeasure20,
              strSource: strSource,
              dateModified: dateModified,
            }
          )
          console.log('addMeal', addMeal)
        }
        catch (e) { console.log('error', e) }
      }

    } else {
      if (this.state.user !== null) {
        meal.like = false
        console.log(this.state.user._id,)
        console.log(this.state.user)
        console.log(meal.idMeal)
        // try {
        //    await axios.delete('http://localhost:3001/api/recipes/delete-recipe', {
        //     _id: this.state.user._id,
        //     idMeal: meal.idMeal
        //   })
        // }
        // catch(e){console.log('error', e)}
        console.log('after set meal from true to false', meal)
      }


    }


  }

  // Pass logOut to <Nav />, when onClick, this function run
  logOut = () => {
    localStorage.removeItem('jwtToken')
    this.setState({
      isAuth: false,
      user: null
    })
  }

  render() {
    // console.log('user in app js',this.state.user)
    // console.log('id in app js',this.state.user._id)

    return (
      <>
        {this.state.meals.length === 0 ? '' : (
          <Router >
            <Switch>
              {/* <Route path='/register' component={Register} /> */}
              <Route path='/login' component={(props) => <Login {...props} authorize={this.authorize} />} />
              <Route path='/register' component={(props) => <Register {...props} authorize={this.authorize} />} />
              <PrivateRoute
                path='/main'
                state={this.state}
                logOut={this.logOut}
                addToFavorites={this.addToFavorites}
                loadAllFavMeals={this.loadAllFavMeals}
                component={Main} />
              {/* <PrivateRoute path='/main' component={(props) => <Main {...props} logOut={this.logOut} />} /> */}
              <Route path='*' component={() => { '404 Page Not Found' }} />
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

