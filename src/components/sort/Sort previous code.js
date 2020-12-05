import Axios from 'axios'
import React, { Component } from 'react'
import axios from 'axios'
import './sort.css'
export default class Sort extends Component {
    state = {
        categories: [],
        sortedMeals: []
    }

    componentDidMount = async () => {
        let success = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        let arrayObj = success.data.categories
        let newArr = arrayObj.map(item => item.strCategory)
        this.setState({
            categories: newArr
        })
    }

    filterCategory = (category) => {
        console.log(category)
        console.log('this props', this.props)
        let allMeals = this.props.data.state.meals
        console.log('allMeal', allMeals)
        let sortedMeals = allMeals.filter((meal) => { if (meal.strCategory === category) { return meal } })
        this.setState({
            sortedMeals: sortedMeals,
        })

    }

    render() {
        const [ Dessert, Beef, Chicken, Lamb, Miscellaneous, Pasta, Pork, Seafood, Side, Starter, Vegetarian, Vegan, Breakfast, Goat ] = this.state.categories
        return (
            <div id='categories-list-wrapper'>
                <br /><span className="sort-title">Include Meal Type:</span>
                <span onClick={()=>this.filterCategory(Breakfast)} className='category-span'>{Breakfast}</span>
                <span onClick={()=>this.filterCategory(Starter)} className='category-span'>{Starter}</span>
                <span onClick={()=>this.filterCategory(Side)} className='category-span'>{Side}</span>
                <span onClick={()=>this.filterCategory(Dessert)} className='category-span'>{Dessert}</span>
                <br /><span className="sort-title">Include Protein:</span>
                <span onClick={()=>this.filterCategory(Beef)} className='category-span'>{Beef}</span>
                <span onClick={()=>this.filterCategory(Chicken)} className='category-span'>{Chicken}</span>
                <span onClick={()=>this.filterCategory(Lamb)} className='category-span'>{Lamb}</span>
                <span onClick={()=>this.filterCategory(Pork)} className='category-span'>{Pork}</span>
                <span onClick={()=>this.filterCategory(Seafood)} className='category-span'>{Seafood}</span>
                <span onClick={()=>this.filterCategory(Goat)} className='category-span'>{Goat}</span>
                <br /><span className="sort-title">Include Others:</span>
                <span onClick={()=>this.filterCategory(Vegetarian)} className='category-span'>{Vegetarian}</span>
                <span onClick={()=>this.filterCategory(Vegan)} className='category-span'>{Vegan}</span>
                <span onClick={()=>this.filterCategory(Miscellaneous)} className='category-span'>{Miscellaneous}</span>
                <span onClick={()=>this.filterCategory(Pasta)} className='category-span'>{Pasta}</span>
            </div>
        )
    }
}
