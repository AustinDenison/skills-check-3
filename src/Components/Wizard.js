import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios';

class Wizard extends Component {
    constructor(){
        super()

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        }
        this.handleName = this.handleName.bind(this)
        this.handleAddress = this.handleAddress.bind(this)
        this.handleCity = this.handleCity.bind(this)
        this.handleState = this.handleState.bind(this)
        this.handleZip = this.handleZip.bind(this)
    }

    handleName(value){
        this.setState({
            name: value
        })
    }

    handleAddress(value){
        this.setState({
            address: value
        })
    }

    handleCity(value){
        this.setState({
            city: value
        })
    }

    handleState(value){
        this.setState({
            state: value
        })
    }

    handleZip(value){
        this.setState({
            zip: value
        })
    }

    handleAdd(name, address, city, state, zip){
        Axios.post('/api/houses', {name, address, city, state, zip}).then(res => {
            window.history.back()
        })
    }

    render(){
        return(
            <div> 
                <Link to='/'>Cancel</Link>
                <input placeholder='Name' onChange={e => this.handleName(e.target.value)}></input>
                <input placeholder='Address' onChange={e => this.handleAddress(e.target.value)}></input>
                <input placeholder='City' onChange={e => this.handleCity(e.target.value)}></input>
                <input placeholder='State' onChange={e => this.handleState(e.target.value)}></input>
                <input placeholder='Zipcode' onChange={e => this.handleZip(e.target.value)}></input>
                <Link to='/wizard/step2'>Step Two</Link>
                
                <button onClick={() => this.handleAdd(this.state.name, this.state.address, this.state.city, this.state.state, this.state.zip)}>Complete</button>
            </div>
        )
    }
}

export default Wizard