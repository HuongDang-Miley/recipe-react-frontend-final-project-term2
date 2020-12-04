import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import SmallFavButton from '../favButton/SmallFavButton'
import MealThumb from './MealThumb'

export default class Meal extends Component {

    handleOnClickMealModule = (id) => {
        console.log('a click from Meal', id)
        console.log(this.props.history)
        this.props.history.push('/recipe')
    }
    render() {
        return (
            <>
                <Link className={'meal-module-link'} to={{ pathname: '/recipe', state: { id: this.props.data.meal.idMeal } }}>
                    <MealThumb {...this.props} />
                </Link>
                <SmallFavButton />
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
