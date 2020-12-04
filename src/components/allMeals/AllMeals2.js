import React, { Component } from 'react'
import '../allMeals/allMeals.css'
import MealModule from '../allMeals/MealModule'
export default class AllMeals extends Component {

    render() {
        const { meals } = this.props.state
        console.log('meals from allMeal2.js', meals)
        return (
            <div id='all-meals-wrapper-wrapper'>
                <div id='all-meals-wrapper' >
                    {meals.length !== 0
                        ? (meals.map((item) => (
                            <li key={item.idMeal} className={'meal-module'}>
                                <MealModule meals={item} />
                            </li>)))
                        : <p className='message'>You Don't Have Any Meal In Your Favorites</p>
                    }
                </div>
            </div>
        )
    }
}
