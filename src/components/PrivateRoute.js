import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Main from './Main'

export const PrivateRoute = ({ component: AllMeals, ...rest }) => {
    return (
        <>
            {rest.state.isAuth ? (
                <Route
                    {...rest}
                    render={(props) => <Main {...props}{...rest} />}
                />
            ) : (
                    <Redirect to='/register' />
                )}
        </>
    )
}

export default PrivateRoute
