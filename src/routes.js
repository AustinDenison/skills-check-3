import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Wizard from "./Components/Wizard";
import StepTwo from './Components/stepTwo'
import StepThree from './Components/stepThree'

export default (
    <Switch>
        <Route component={Dashboard} exact path='/' />
        <Route exact path='/wizard' render={props => {
            return <Wizard {...props}/>
        }}/>
        <Route exact path='/wizard/step2' render={props => {
            return <StepTwo {...props}/>
        }}/>
        <Route exact path='/wizard/step2/step3' render={props => {
            return <StepThree {...props}/>
        }}/>
    </Switch>
)