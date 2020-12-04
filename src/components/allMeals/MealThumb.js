import React, { Component } from 'react'

export default class MealThumb extends Component {

    handleOnClickMealModule = (id) => {
        console.log('a click from Meal', id)
        console.log(this.props.history)
        this.props.history.push('/recipe')
    }

    render() {
        const {strCategory, strMeal, strMealThumb } = this.props.data.meal
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
            </div>
            </>
        )
    }
}
