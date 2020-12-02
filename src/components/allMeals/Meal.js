import React, { Component } from 'react'

export default class Meal extends Component {

    render() {
        return (
            <div id='meal-module-wrapper'>
                <span className='meal-module-category'>{this.props.category.toUpperCase()}</span>
                <div className='meal-module-name'>
                    {this.props.name}
                </div>
                <img className='meal-module-image' src={this.props.img} />
                <span class='add-to-favorite'>Add To Favorites</span>
            </div>
        )
    }
}
