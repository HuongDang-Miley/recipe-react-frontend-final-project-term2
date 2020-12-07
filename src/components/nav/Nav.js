import Axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'


export default class Nav extends Component {
    state = {
        isAllMealsClicked: false,
        isFavoritesClicked: false,
    }

    handleAllMealsClicked = () => {
        if (this.state.isAllMealsClicked === false) {
            this.setState({
                isAllMealsClicked: false,
            }, () => {console.log(this.state.isAllMealsClicked)}
            )
        } else {
            this.setState({
                isAllMealsClicked: true,
            }, () => {console.log(this.state.isAllMealsClicked)}
            )
        }


    }

    render() {
        
        // console.log('this.props.to', this.props.location.pathname)
        // console.log('this.props.to', this.props.location.pathname === '/main/all')
        const isAllRecipesClicked = this.props.location.pathname === '/main/all'
        const isFavClicked = this.props.location.pathname === "/main/favorites"
        
         
        const {isAllMealsClicked, isFavoritesClicked} = this.state
        // console.log('logOut in Nav', this.props.state.user.email)
        return (
            <div id='shared-nav' className='white-nav'>
                <span onClick={()=>this.handleAllMealsClicked} className='first-link'>
                    {/* <Link  className={'nav-link'} to='/main/all' >All Recipes</Link> */}
                    <Link  className={`"nav-link" ${isAllRecipesClicked ? "nav-link-active" : "nav-link-inactive"}`} to='/main/all' >All Recipes</Link>
                    
                </span>
                <span>
                    {/* <Link className="nav-link" to='/main/favorites'>Favorites</Link> */}
                    <Link className={`"nav-link" ${isFavClicked ? "nav-link-active" : "nav-link-inactive"}`} to='/main/favorites'>Favorites</Link>
                </span>
                <div className='email-and-logout-wrapper'>
                    <span className='email'>
                        {this.props.state.user.email}
                    </span>
                    <span onClick={() => this.props.logOut()} className="sort-button">
                        Logout
                    {/* <Link className="back-link" to='/register'>Logout</Link> */}
                    </span>
                </div>

            </div>
        )
    }
}
