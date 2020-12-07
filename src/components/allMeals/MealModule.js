
import React from 'react'
import { Link } from 'react-router-dom'
import SmallFavButton from '../favButton/SmallFavButton'
import MealThumb from './MealThumb'

export const MealModule = (props) => {
    // console.log('this.props in MealModule', props)
    // export const MealModule = ({ meals,state }) => {
    // console.log('meals in MealModule', props.data.meal)
    // console.log('state in MealModule', props.state)
    // console.log('addToFavorites in MealModule', props.addToFavorites)
    const { state, addToFavorites} = props
    // console.log('state', state)
    // console.log('state', addToFavorites)
    const {meal} = props.data
    return ( 
        <>
            <Link className={'meal-module-link'} to={{ pathname: '/main/recipe', state: { id: meal.idMeal } }}>
                 <MealThumb meal={meal} />
             </Link>
             {/* <SmallFavButton meal={meal} state={state} /> */}
             <SmallFavButton {...props} />
        </>
    )
}

export default MealModule
