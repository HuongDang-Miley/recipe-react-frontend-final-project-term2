import React, { Component } from 'react'
import axios from 'axios'
import Meal from './Meal'
import './allMeals.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Sort from '../sort/Sort'
import Test from '../test/Test'
import TestArrayFilter from '../test/TestArrayFilter'
import Search from '../test/Search'

export default class AllMeals extends Component {
    state = {
        favorites: [],
        meals: [],
        sort: false,
        parentName: 'Huong',
        parentChange: false,
        childName: 'childName',
        parentArray: [
            { meat: 'beef', name: 'beef0 stir fir' },
            { meat: 'chicken', name: 'chicken stir fry' },
            { meat: 'pork', name: 'porkchop' },
            { meat: 'beef', name: 'beef4 stir fir' },
            { meat: 'beef', name: 'beef3stir fir' },
            { meat: 'chicken', name: 'stewed chicken thigh ' },
            { meat: 'beef', name: 'beef1 stir fir' },
            { meat: 'beef', name: 'beef2 stir fir' },
        ],
        sortedArray: []

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
        this.setState({
            meals: combinedMeals
        })
    }

    sortMeal = (mealsArray) => {
        this.setState({
            meals: mealsArray,
            sort: true
        })
        console.log(mealsArray)
    }

    addToFavorites = (meal) => {
        if (meal.like === true) {
            meal.like = false
        } else {
            meal.like = true
        }      
    }

    // testChangeName = (childName, childChange) => {
    //     console.log('before setState ======')
    //     console.log('parentChange',this.state.parentChange, 'parentName', this.state.parentName )
    //   console.log('child change', childChange, 'childName',childName)
    //     this.setState({
    //         childName: childName,
    //         parentChange: childChange,
    //     }, ()=> {
    //         console.log('parentChange',this.state.parentChange, 'parentName', this.state.parentName )
    //         console.log('after setState ======')
    //         console.log('child change', childChange, 'childName',childName)

    //     })
    // }
    testChangeArray = (sortedArray, sortChange) => {
        console.log('before setState ======')
        console.log('parentChange', this.state.parentChange, 'parentName', this.state.parentName)
        console.log('sortChange', sortChange, 'sortedArray', sortedArray)
        this.setState({
            sortedArray: sortedArray,
            parentChange: sortChange,
        }, () => {
            console.log('parentChange', this.state.parentChange, 'parentArray', this.state.parentArray)
            console.log('after setState ======')
            console.log('sortChange', sortChange, 'sortedArray', sortedArray)

        })
    }



    render() {
console.log(this.state.meals)
        const { meals, sort } = this.state
        return (
            <>
                <div id='all-meals-wrapper-wrapper'>

                    {this.state.parentChange
                        ? (<h1>sorted Array will b here</h1>)
                        : (<h1>Parent Array</h1>)
                    }
                    <TestArrayFilter
                        data={{
                            parentArray: this.state.parentArray,
                            parentChange: this.state.parentChange,
                            testChangeName: this.testChangeArray.bind(this)
                        }}
                    />

                    <Sort data={{
                        state: this.state,
                        sortMeal: this.sortMeal.bind(this)
                    }} />
                    <Search
                        data={{
                            meals: this.state.meals,
                            sortMeal: this.sortMeal.bind(this)
                        }}
                    />

                    {sort ? (<p>'sort is click'</p>) : ''}
                    <div id='all-meals-wrapper' >
                        {meals.length !== 0
                            // ? (meals.map(({ idMeal, strMeal, strCategory, strMealThumb }) => (
                            ? (meals.map((meal) => (
                                <li key={meal.idMeal} className={'meal-module'}
                                >
                                    <Link className={'meal-module-link'} to={{ pathname: '/recipe', state: { id: meal.idMeal } }}>
                                        <Meal
                                            data={{
                                                state: this.state,
                                                meal: meal,
                                                addToFavorites: this.addToFavorites
                                            }}

                                        />
                                        {/* <Meal
                                            id={idMeal}
                                            name={strMeal}
                                            category={strCategory}
                                            img={strMealThumb}
                                        /> */}
                                    </Link>
                                    <p onClick={() => this.addToFavorites(meal)} class='add-to-favorite'>Favorite</p>
                                </li>)))
                            : ''}

                    </div>
                </div>
            </>
        )
    }
}
