import React, { Component } from 'react'
import '../allMeals/allMeals.css'
import MealModule from '../allMeals/MealModule'
export default class Fav extends Component {

    render() {
        let favMeals = this.props.state.meals.filter(item => item.like === true)
        // console.log('state favMeals', favMeals)
        const { meals } = this.props.state
        // console.log('meals from appjs', meals)
        return (
            <>

                <div id='all-meals-wrapper-wrapper'>
                    <div id='all-meals-wrapper' >
                        {favMeals.length !== 0
                            ? (favMeals.map((item) => (
                                <li key={item.idMeal} className={'meal-module'}>
                                    <MealModule meals={item} />
                                </li>)))
                            : <p className='message'>You Don't Have Any Meal In Your Favorites</p>
                        }
                    </div>
                </div>
            </>


        )
    }
}
