import React, { Component } from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import './favButton.css'

export default class SmallFavButton extends Component {
    state = {
        like: false
    }
    
    addToFavorites = (meal) => {
        if (meal.like === true) {
            meal.like = false
        } else {
            meal.like = true
        }
    }
    render() {

        const { meals } = this.props

        return (
            <>
                {meals.like
                    ? (
                        <div className='fav-link' onClick={() => this.addToFavorites(meals)}>
                            <span className='text-link'>Favorite</span>
                            <FaHeart
                                className={'heart-filled'} size='1.5em' color={'#FF695B'} />
                        </div>
                    )
                    : (
                        <div className='fav-link' onClick={() => this.addToFavorites(meals)}>
                            <span className='text-link'>Favorite</span>
                            <FaRegHeart
                                className={'heart-outlined'} size='1.5em' />
                        </div>
                    )
                }
            </>


        )
        // return (

        //     <>test</>
        //     // <div className='fav-link' onClick={()=>this.addToFavorites(like)}>
        //     //     Favorite
        //     // </div>
        // )
    }
}


// import React from 'react'
// import { FaRegHeart , FaHeart} from 'react-icons/fa'
// import './favButton.css'

// export const SmallFavButton = ({ meals }) => {
//     const addToFavorites = (item) => {
//         if (item.like === true) {
//             item.like = false
//         } else {
//             item.like = true
//         }
//     }

//     return (
//         <div className='fav-link' onClick={() => addToFavorites(meals)}>
//             <span className='text-link'>Favorite</span>
//             <FaHeart
//             className={'icon'} size ='1.5em'/>
//         </div>
//     )
// }

// export default SmallFavButton
