import React, { Component } from 'react'
import Recipe from '../recipePage/Recipe'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class Meal extends Component {


    handleOnClickMealModule = (id) => {
        console.log('a click from Meal', id)
        console.log(this.props.history)
        this.props.history.push('/recipe')
    }
    render() {
        const { id, category, name, img } = this.props
        return (
            <div id='meal-module-wrapper'
                onClick={() => this.handleOnClickMealModule(id)}>
                    <Link to='/recipe'></Link>
                <p className='meal-module-category'>{category.toUpperCase()}</p>
                <div className='name-and-img-wrapper'>
                    <div className='meal-module-name'>
                        {name}
                    </div>
                    <img className='meal-module-image' src={img} />
                </div>
                <p class='add-to-favorite'>Favorite</p>
            </div>
        )
    }
}
