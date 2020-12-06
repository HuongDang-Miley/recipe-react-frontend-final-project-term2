import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import TestChild from './TestChild'
import TestChild2 from './TestChild2'

export const TestParent2 = () => {
    return (
        <Router>
            'This is Test Parent 2'
            <Switch>
            <Route exact path='/testParent/testParent2/testChild' component={TestChild} />
            <Route exact path='/testParent/testParent2/testChild2' component={TestChild2} />

            </Switch>
            {/* <Route path='/testParent2' component={TestParent} /> */}
        </Router>
    )
}


export default TestParent2