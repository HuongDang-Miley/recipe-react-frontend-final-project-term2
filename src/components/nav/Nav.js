import Axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'


export default class Nav extends Component {


    render() {
        return (
            <div id='shared-nav' className='white-nav'>
                <span className='first-link'>
                    <Link className={'nav-link'} to='/main/all' >All Recipes</Link>
                </span>
                <span>
                    <Link className="nav-link" to='/main/favorites'>Favorites</Link>
                </span>
                <span className="sort-button">
                    <Link className="back-link" to='/main/recipe'>Sort Recipes</Link>
                </span>

            </div>
        )
    }
}
