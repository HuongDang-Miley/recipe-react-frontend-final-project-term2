
import React from 'react'
import { Link } from 'react-router-dom'
import SmallFavButton from '../favButton/SmallFavButton'
import MealThumb from './MealThumb'

export const MealModule = ({ meals }) => {
    return (
        <>
            <Link className={'meal-module-link'} to={{ pathname: '/main/recipe', state: { id: meals.idMeal } }}>
                <MealThumb meals={meals} />
            </Link>
            <SmallFavButton meals={meals} />
        </>
    )
}

export default MealModule
