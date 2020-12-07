import React, { Component } from 'react'
import '../allMeals/allMeals.css'
import MealModule from '../allMeals/MealModule'
export default class Fav extends Component {

    render() {
        console.log('this.props in fav', this.props)
        let favMeals = this.props.state.meals.filter(item => item.like === true)

        const { meals } = this.props.state

        return (
            <>

                    <div id='fav-meals-wrapper-wrapper'>
                    {/* <div id='all-meals-wrapper-wrapper'> */}
                        <div id='all-meals-wrapper' >
                            {favMeals.length !== 0
                                ? (favMeals.map((item) => (
                                    <li key={item.idMeal} className={'meal-module'}>
                                        <MealModule
                                            {...this.props}
                                            data={{
                                                meal: item,
                                                state: this.state,
                                            }}
                                        />
                                        {/* <MealModule
                                        meals={item}
                                        state={this.props.state} 
                                        addToFavorites={this.props.addToFavorites} /> */}
                                    </li>)))
                                : <p className='message'>You Don't Have Any Meal In Your Favorites</p>
                            }
                        </div>
                    </div>


                {/* <span onClick={() => this.props.loadAllFavMeals()}>Click To See All Fav Meals</span> */}
            </>


        )
    }
}
