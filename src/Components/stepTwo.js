import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class StepTwo extends Component {

    handlePrev(){
        window.history.back()
    }

    render(){
        return(
            <div>
                <button onClick={() => this.handlePrev()} >prev</button>
              <input placeholder='Image URL'></input>
                <Link to='/wizard/step2/step3'>Step Three</Link> 
            </div>
        )
    }
}

export default StepTwo