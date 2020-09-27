import React, { Component } from 'react';

class MyCakesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            favCakes: []
         }
    }

    componentDidMount() {
        const favourtieCakes = [];
        Object.keys(localStorage).forEach(function(key){
            favourtieCakes.push(localStorage.getItem(key))
        })
        this.setState({
            favCakes: favourtieCakes
        })
    }

    render() { 
        return ( 
            <div>
                <h2>My Favourite Cakes</h2>

        </div>
         );
    }
}
 
export default MyCakesContainer;