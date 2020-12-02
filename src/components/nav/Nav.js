import Axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

export default class Nav extends Component {
    render() {
        return (
            <div id='shared-nav' className='white-nav'>
                <span className='first-link'>
                    <Link to='/all'>All Recipes</Link>
                </span>
                <span>
                    <Link to='/favorites'>Favorites</Link>
                </span>
            </div>
        )
    }
}
