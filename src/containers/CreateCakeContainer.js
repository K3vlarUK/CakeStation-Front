import React, { Component } from 'react';
import CakeForm from '../components/CakeForm';
import Request from '../helpers/request';

class CreateCakeContainer extends Component {
    constructor(props) {
        super(props);
        this.handleCakePost = this.handleCakePost.bind(this);
    }

    handleCakePost(cake){
        const request = new Request();
        request.post('https://cakestation-backend.herokuapp.com/cakes', cake).then(() => {
            window.location = '/'
        })
    }

    render() { 
        return ( 
            <CakeForm handleCakePost={this.handleCakePost} />
         );
    }
}
 
export default CreateCakeContainer;