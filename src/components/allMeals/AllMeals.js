import React, { Component } from 'react'
import '../allMeals/allMeals.css'
import MealModule from './MealModule'
import Sort from '../sort/Sort'
export default class AllMeals extends Component {
    state = {
        sort: true,
        sortedCategoryList: [],
        sortMeals: []
    }

    // componentDidMount = () => {
    //     let foundMeals = []
    //     let allMeals = this.props.state.meals
    //     let category = this.state.sortedCategoryList

    //     if (category.length !== 0) {
    //         console.log('it does run this condition')
    //         // for (let meal of allMeals) {
    //         //     for (let item of category) {
    //         //         if (meal.strCategory === item) {
    //         //             foundMeals.push(meal)
    //         //         }
    //         //     }
    //         // }
    //     }
    //     this.setState({
    //         sortMeals: foundMeals
    //     }, () => {
    //         console.log('sortMeals', this.state.sortMeals)
    //     })
    //     console.log('foundMeals', foundMeals)
    // }

    sortMeal = (category) => {
        // let copyArr = [...this.state.sortedCategoryList]
        // let currentIndex = copyArr.indexOf(category)

        // if (currentIndex === -1) {
        //     copyArr.push(category)
        // } else {
        //     copyArr.splice(currentIndex, 1)
        // }
        // this.setState({
        //     sortedCategoryList: copyArr
        // })
        let allMeals = this.props.state.meals
        let copyArr = [...this.state.sortedCategoryList]
        let currentIndex = copyArr.indexOf(category)
        let foundMeals = [...this.state.sortMeals]

        // if catgr is not in the list,  push in the list, loop through all meals and push in found meals
        // if catgr is alreay in the list,  push out of  the list, loop through all meals and splice out of all meals
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
            sortMeals: foundMeals
        }, () => {
            console.log('copyArr after set state', copyArr)
            console.log('foundMeals after set state', foundMeals)

        })

        // console.log('copyArr', copyArr)
        // console.log('sortMeal in AllMeals', this.state.sortedCategoryList)
    }



    render() {
        const { sortMeals } = this.state
        const { meals } = this.props.state
        // console.log('meals from allMeal2.js', meals)

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
                        <p className='search-result'> {sortMeals.length} meals found</p>
                            <div id='all-meals-wrapper' >
                                {sortMeals.length !== 0
                                    ? (sortMeals.map((item) => (
                                        
                                            
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
