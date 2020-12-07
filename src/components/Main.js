import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Recipe from './recipePage/Recipe'
import Nav from './nav/Nav'
import Fav from './fav/Fav.js'
import AllMeals from './allMeals/AllMeals'

export const Main = (props) => {
// export const Main = (props) => {
    console.log('props  in main:', props)
    const { state, logOut, addToFavorites, loadAllFavMeals } = props
    // console.log('state  in main:', state)
    return (

        <Router >
            {/* <Route component={Nav} {...props} /> */}
            <Route component={(props) => <Nav {...props} state={state} logOut={logOut}/>} />
            <Switch>
                <Route exact path='/main/all' component={(props) => <AllMeals {...props} state={state} addToFavorites={addToFavorites}/>} />
                {/* <Route exact path='/main/favorites' component={(props) => <Fav {...props} state={state} addToFavorites={addToFavorites}/>} /> */}
                <Route exact path='/main/favorites' component={(props) => <Fav {...props} state={state} addToFavorites={addToFavorites} loadAllFavMeals={loadAllFavMeals}/>} />
                <Route exact path='/main/recipe' component={Recipe} />
            </Switch>
        </Router>
    )
}

export default Main
 // <Router >
            //     <Route path='/' component={Nav} />
            //     <Switch>
            //         <Route path='/all' component={(props) => <AllMeals {...props} state={this.state} />} />
            //         <Route path='/favorites' component={(props) => <Fav {...props} state={this.state} />} />
            //         <Route path='/recipe' component={Recipe} />
            //     </Switch>
            // </Router>