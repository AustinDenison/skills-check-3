import React, {Component} from 'react'
import House from './House'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            houses: []
        }
        this.updateDeleted = this.updateDeleted.bind(this)
    }

    componentDidMount(){
        axios.get('/api/houses').then(res => {
            this.setState({
                houses: res.data
            })
        })
    }

    updateDeleted(){
        this.setState({
            houses: [...this.state.houses]
        })
    }

    render(){
        return(
            <div>
                {this.state.houses.map(house => {
                    return(
                        <House houses={house} updateDeleted={this.updateDeleted}/>
                    )
                })}
               <Link to='/wizard'>Add New Property</Link> 
            </div>
        )
    }
}

export default Dashboard