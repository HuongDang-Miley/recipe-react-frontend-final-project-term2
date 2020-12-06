import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Main from './Main'

// export const PrivateRoute = (props) => {
export const PrivateRoute = ({ component: Main, ...rest }) => {
    // console.log('props', props)
    console.log('rest', rest)
    console.log('AllMeals', Main)
    return (
        <>
        {/* from PrivateRoute */}
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
