import Axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import Test from '../test/Test'

export default class Nav extends Component {
    render() {
        return (
            <div id='shared-nav' className='white-nav'>
                <span className='first-link'>
                    <Link className={'nav-link'} to='/all' >All Recipes</Link>
                </span>
                <span>
                    <Link className="nav-link" to='/recipe'>Favorites</Link>
                </span>
                <span>
                <Test />

                </span>
            </div>
        )
    }
}
