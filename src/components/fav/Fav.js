import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../allMeals/allMeals.css'
import Meal from '../allMeals/MealModule'
export default class Fav extends Component {

    render() {
        let faMeals = this.props.state.meals.filter(item => item.like === true)
        console.log('state meal in fav', faMeals)
        const { meals } = this.props.state
        console.log('meals from appjs', meals)

        return (

            <div id='all-meals-wrapper-wrapper'>
                <div id='all-meals-wrapper' >
                    {meals.length !== 0
                        ? (meals.map((meal) => (
                            <li key={meal.idMeal} className={'meal-module'}>
                                <Link className={'meal-module-link'} to={{ pathname: '/recipe', state: { id: meal.idMeal } }}>
                                    <Meal
                                        data={{
                                            state: this.state,
                                            meal: meal,
                                            addToFavorites: this.addToFavorites
                                        }}
                                    />
                                </Link>
                                <p onClick={() => this.addToFavorites(meal)} class='add-to-favorite'>Favorite</p>
                            </li>)))
                        : ''}

                </div>
            </div>

        )
    }
}
