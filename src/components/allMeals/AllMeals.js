import React, { Component } from 'react'
import axios from 'axios'
import Meal from './Meal'
import './allMeals.css'

export default class AllMeals extends Component {
    state = {
        meals: []
    }
    componentDidMount = async () => {
        let latestMeals = await axios.get('https://themealdb.p.rapidapi.com/latest.php', {
            headers: {
                'x-rapidapi-key': '1eccb1fd0fmsh1264571b8ded970p1f1396jsn3b376a8754cf',
                'x-rapidapi-host': 'themealdb.p.rapidapi.com',
                useQueryString: true
            }
        })
        this.setState({
            meals: latestMeals.data.meals
        })
        this.state.meals.map(item => console.log(item))
    }

    render() {
        const { meals } = this.state
        console.log(this.state)
        return (
            <div id='all-meals-wrapper'>
                {meals.length !== 0
                    ? (meals.map(({strMeal, strCategory, strMealThumb }) => (
                        <li>
                            <Meal 
                            name ={strMeal} 
                            category={strCategory}
                            img = {strMealThumb}
                            />
                        </li>)))
                    : ''}

            </div>
        )
    }
}
