import React, {Component} from 'react'
import axios from 'axios';

class House extends Component {

    handleDelete(id){
        axios.delete(`/api/houses/${id}`).then(res => {
            this.props.updateDeleted(res.data)
        })
    }

    render(){
        const {property_name, address, state, city, zip, houses_id} =  this.props.houses
        return(
            <div>
                <p>Property Name: {property_name}</p>
                <p>Address: {address}</p>
                <p>City: {city}</p>
                <p>State: {state}</p>
                <p>Zip: {zip}</p>
                <button onClick={() => this.handleDelete(houses_id)}>X</button>
            </div>
        )
    }
}

export default House