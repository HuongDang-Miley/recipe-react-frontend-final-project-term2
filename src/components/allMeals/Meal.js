import React, { Component } from 'react'
import Recipe from '../recipePage/Recipe'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'

export default class Meal extends Component {

    // addToFavorites = () => {
    //     let {favorites} = this.props.data.state
    //     let addedMeal = favorites.push(this.props.data.meal)
    //     return addedMeal
    // }
    handleOnClickMealModule = (id) => {
        console.log('a click from Meal', id)
        console.log(this.props.history)
        this.props.history.push('/recipe')
    }
    render() {
        const { idMeal, strCategory, strMeal, strMealThumb } = this.props.data.meal
        return (
            <>
            <div id='meal-module-wrapper'>
                <p className='meal-module-category'>{strCategory.toUpperCase()}</p>
                <div className='name-and-img-wrapper'>
                    <div className='meal-module-name'>
                        {strMeal}
                    </div>
                    <img className='meal-module-image' src={strMealThumb} />
                </div>
                {/* <p onClick={this.props.data.addToFavorites()} class='add-to-favorite'>Favorite</p> */}
            </div>
            </>
        )




    //     console.log(this.props.data)
    //     const { id, category, name, img } = this.props.data.meal
    //     return (
    //             <div id='meal-module-wrapper'>
    //                 <p className='meal-module-category'>{category.toUpperCase()}</p>
    //                 <div className='name-and-img-wrapper'>
    //                     <div className='meal-module-name'>
    //                         {name}
    //                     </div>
    //                     <img className='meal-module-image' src={img} />
    //                 </div>
    //                 <p class='add-to-favorite'>Favorite</p>
    //             </div>
    //     )
    // }
}
}
