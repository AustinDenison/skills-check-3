import React, {Component} from 'react'

class StepThree extends Component {

    handlePrev(){
        window.history.back()
    }

    render(){
        return(
            <div>
                <button onClick={() => this.handlePrev()} >prev</button>
                <input placeholder='monthly mortgage amount'></input>
                <input placeholder='desired monthly rent'></input>
            </div>
        )
    }
}

export default StepThree