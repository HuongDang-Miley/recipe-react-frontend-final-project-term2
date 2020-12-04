import React, { Component } from 'react'
import './favButton.css'

export default class SmallFavButton extends Component {
    addToFavorites = (meal) => {
        if (meal.like === true) {
            meal.like = false
        } else {
            meal.like = true
        }
    }
    render() {
        const {like} = this.props.data.meal
        return (
            <div className='fav-link' onClick={()=>this.addToFavorites(like)}>
                Favorite
            </div>
        )
    }
}


