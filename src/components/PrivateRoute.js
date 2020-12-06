import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Main from './Main'

export const PrivateRoute = ({component: AllMeals, ...rest }) => {
    console.log('rest in PrivateRoute', rest)
    return (
        <>
            {rest.state.isAuth ? (
                <Route
                    {...rest}
                    render={(props) => <Main {...props}{...rest}/>}
                />
                // 'IS authenticated'
            ) : (
                <Redirect to='/register'/>
                    // 'Not authenticate'
                )}
        </>
    )
}

export default PrivateRoute
