import React, { Component } from 'react';
import CakeEditForm from '../components/CakeEditForm';
import Request from '../helpers/request';

class CakeEditFormContainer extends Component {
    constructor(props) {
        super(props);
        this.handleCakeUpdate = this.handleCakeUpdate.bind(this)
    }

    handleCakeUpdate(cake){
        const request = new Request();
        console.log(cake);
        request.put('https://cakestation-backend.herokuapp.com/cakes/' + this.props.cake.id, cake).then(() => {
            window.location = '/cakes/' + this.props.cake.id
        })
    }

    render() { 
        return ( 
            <CakeEditForm cake={this.props.cake} handleCakeUpdate={this.handleCakeUpdate}/>
         );
    }
}
 
export default CakeEditFormContainer;