import React, { Component } from 'react'
import axios from 'axios'
import Meal from './Meal'
import './allMeals.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default class AllMeals extends Component {
    state = {
        meals: []
    }
    componentDidMount = async () => {
        let latestMeals = await axios.get('https://themealdb.p.rapidapi.com/randomselection.php', {
            headers: {
                'x-rapidapi-key': '1eccb1fd0fmsh1264571b8ded970p1f1396jsn3b376a8754cf',
                'x-rapidapi-host': 'themealdb.p.rapidapi.com',
                useQueryString: true
            }
        })
        this.setState({
            meals: latestMeals.data.meals
        })
    }

    // handleOnClickMealModule = () => {
    //     console.log('this is a click')
    // }

    render() {
        const { meals } = this.state
        console.log(this.state)
        return (
            <div id='all-meals-wrapper' >
                {meals.length !== 0
                    ? (meals.map(({ idMeal, strMeal, strCategory, strMealThumb }) => (
                        <li key={idMeal}
                        >
                            <Router>
                                <Route
                                    component={(props) => <Meal
                                        {...props}
                                        id={idMeal}
                                        name={strMeal}
                                        category={strCategory}
                                        img={strMealThumb}
                                    />}
                                >
                                </Route>
                            </Router>
                            {/* <Meal
                            component={(props) => <Login {...props} auth={this.auth} />}
                                {...props}
                                id={idMeal}
                                name={strMeal}
                                category={strCategory}
                                img={strMealThumb}
                            /> */}
                        </li>)))
                    : ''}

            </div>
        )
    }
}
