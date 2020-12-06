
import React, { Component } from 'react'
import axios from 'axios'
import './sort.css'
import { FaThList } from 'react-icons/fa'
export default class Sort extends Component {
    state = {
        categories: [],
        sortedMeals: [],
    }

    componentDidMount = async () => {
        let success = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        let arrayObj = success.data.categories
        let newArr = arrayObj.map(item => item.strCategory)
        this.setState({
            categories: newArr
        })
    }

    render() {
        const [Dessert, Beef, Chicken, Lamb, Miscellaneous, Pasta, Pork, Seafood, Side, Starter, Vegetarian, Vegan, Breakfast, Goat] = this.state.categories
        return (
            <div id='categories-list-wrapper'>
                <br /><span className="sort-title">Include Meal Type:</span>
                <span onClick={() => this.props.data.sortMeal(Breakfast)} className='category-span'>{Breakfast}</span>
                <span onClick={() => this.props.data.sortMeal(Starter)} className='category-span'>{Starter}</span>
                <span onClick={() => this.props.data.sortMeal(Side)} className='category-span'>{Side}</span>
                <span onClick={() => this.props.data.sortMeal(Dessert)} className='category-span'>{Dessert}</span>
                <br /><span className="sort-title">Include Protein:</span>
                <span onClick={() => this.props.data.sortMeal(Beef)} className='category-span'>{Beef}</span>
                <span onClick={() => this.props.data.sortMeal(Chicken)} className='category-span'>{Chicken}</span>
                <span onClick={() => this.props.data.sortMeal(Lamb)} className='category-span'>{Lamb}</span>
                <span onClick={() => this.props.data.sortMeal(Pork)} className='category-span'>{Pork}</span>
                <span onClick={() => this.props.data.sortMeal(Seafood)} className='category-span'>{Seafood}</span>
                <span onClick={() => this.props.data.sortMeal(Goat)} className='category-span'>{Goat}</span>
                <br /><span className="sort-title">Include Others:</span>
                <span onClick={() => this.props.data.sortMeal(Vegetarian)} className='category-span'>{Vegetarian}</span>
                <span onClick={() => this.props.data.sortMeal(Vegan)} className='category-span'>{Vegan}</span>
                <span onClick={() => this.props.data.sortMeal(Miscellaneous)} className='category-span'>{Miscellaneous}</span>
                <span onClick={() => this.props.data.sortMeal(Pasta)} className='category-span'>{Pasta}</span>
            </div>
        )
    }
}
