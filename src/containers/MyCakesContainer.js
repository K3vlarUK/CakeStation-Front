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
            let retrievedEntry = localStorage.getItem(key)
            favourtieCakes.push(JSON.parse(retrievedEntry))
        })
        this.setState({
            favCakes: favourtieCakes
        })
    }

    render() { 
        return ( 
            <div>
                <h2>My Favourite Cakes</h2>
                <ul>
                    {this.state.favCakes.map(item => (
                        <li key={item.name}>{item.name}</li>
                    ))}
                </ul>
            </div>
         );
    }
}
 
export default MyCakesContainer;