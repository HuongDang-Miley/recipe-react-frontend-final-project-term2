import Axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'


export default class Nav extends Component {

    logOut = () => {
        // localStorage.removeItem('jwtToken')
        
    }
    render() {
        console.log('logOut in Nav', this.props)
        return (
            <div id='shared-nav' className='white-nav'>
                <span className='first-link'>
                    <Link className={'nav-link'} to='/main/all' >All Recipes</Link>
                </span>
                <span>
                    <Link className="nav-link" to='/main/favorites'>Favorites</Link>
                </span>
                <div className='email-and-logout-wrapper'>
                <span className='email'>
                   {this.props.state.email}
                </span>
                <span onClick={()=>this.props.logOut()}className="sort-button">
                    Logout
                    {/* <Link className="back-link" to='/register'>Logout</Link> */}
                </span>
                </div>

            </div>
        )
    }
}
