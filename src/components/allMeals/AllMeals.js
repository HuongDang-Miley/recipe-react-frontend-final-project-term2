import React, { Component } from 'react'
import '../allMeals/allMeals.css'
import MealModule from './MealModule'
import Sort from '../sort/Sort'
export default class AllMeals extends Component {
    state = {
        sort: true,
        sortedCategoryList: [],
        sortedMeals: []
    }

    sortMeal = (category) => {
        let allMeals = this.props.state.meals
        let copyArr = [...this.state.sortedCategoryList]
        let currentIndex = copyArr.indexOf(category)
        let foundMeals = [...this.state.sortedMeals]

        // if selected category is not in the list: 1/ push it in the list, 2/ loop through all meals push to a list any meals has that category
        // if selected category is already in the list: 1/splice out of the list, 2/loop through all meals and  any meals has that category
        if (currentIndex === -1) {
            copyArr.push(category)
            for (let meal of allMeals) {
                if (meal.strCategory === category) {
                    foundMeals.unshift(meal)
                }
            }

        } else {
            copyArr.splice(currentIndex, 1)
            let deleteMeals = foundMeals.filter(item => item.strCategory !== category)
            foundMeals = deleteMeals
        }
        this.setState({
            sortedCategoryList: copyArr,
            sortedMeals: foundMeals
        }, () => {
            console.log('copyArr after set state', copyArr)
            console.log('foundMeals after set state', foundMeals)

        })

    }



    render() {
        // console.log('this.props in allMeals',this.props)
        // return('something')
        const { sortedMeals } = this.state
        const { meals } = this.props.state

        return (
            <>
                <Sort
                    {...this.props}
                    data={
                        {
                            state: this.state,
                            sortMeal: this.sortMeal.bind(this)
                        }}
                />

                {this.state.sortedCategoryList.length === 0
                    ? (
                        <div id='all-meals-wrapper-wrapper'>
                            <div id='all-meals-wrapper' >
                                {meals.length !== 0
                                    ? (meals.map((item) => (
                                        <li key={item.idMeal} className={'meal-module'}>
                                            <MealModule meals={item} />
                                        </li>)))
                                    : ''
                                }
                            </div>
                        </div>
                    )
                    : (
                        
                        <div id='all-meals-wrapper-wrapper'>
                        <p className='search-result'> {sortedMeals.length} meals found</p>
                            <div id='all-meals-wrapper' >
                                {sortedMeals.length !== 0
                                    ? (sortedMeals.map((item) => (
                                        
                                            
                                            <li key={item.idMeal} className={'meal-module'}>
                                                <MealModule meals={item} />
                                            </li>
                                        )))
                                    : ''
                                }
                            </div>
                        </div>
                    )
                }
            </>
        )
    }
}
