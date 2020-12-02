import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class RecipeNav extends Component {
    render() {
        return (
            <div id='shared-nav' className='black-nav'>
                <span className='first-link'>
                    <Link className='back-link' to='/all'>← Back</Link>
                </span>
            </div>
        )
    }
}

