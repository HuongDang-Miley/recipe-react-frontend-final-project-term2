import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import TestChild from './TestChild'
import TestParent2 from './TestParent2'

export const TestParent = () => {
    return (
        
        <Router>
          <br/>  'This is Test Parent' <br/>
        <Route path='/testParent/testParent2' render={()=><TestParent2/>}/>
        <Route path='*' render={()=>'Page Not Found 404'}/>
        {/* <Route exact path='/testParent/testChild' component={TestChild} />
        <Route exact path='/testParent/testChild' component={TestChild} /> */}
      
        </Router>
    )
}

export default TestParent