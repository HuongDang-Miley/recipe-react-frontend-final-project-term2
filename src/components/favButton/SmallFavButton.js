// import React, { Component } from 'react'
// import './favButton.css'

// export default class SmallFavButton extends Component {
//     addToFavorites = (meal) => {
//         if (meal.like === true) {
//             meal.like = false
//         } else {
//             meal.like = true
//         }
//     }
//     render() {
//         console.log(this.props.meals)
//         return (
//             <>test</>
//             // <div className='fav-link' onClick={()=>this.addToFavorites(like)}>
//             //     Favorite
//             // </div>
//         )
//     }
// }


import React from 'react'
import './favButton.css'

export const SmallFavButton = ({ meals }) => {
    const addToFavorites = (item) => {
        if (item.like === true) {
            item.like = false
        } else {
            item.like = true
        }
    }

    return (
        <div className='fav-link' onClick={() => addToFavorites(meals)}>
            Favorite
        </div>
    )
}

export default SmallFavButton
