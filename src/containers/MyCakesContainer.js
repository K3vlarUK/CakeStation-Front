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
                <ul className="component-list">
                    {this.state.favCakes.map(item => (
                        <li className="component-item" key={item.name}>{item.name}</li>
                    ))}
                </ul>
            </div>
         );
    }
}
 
export default MyCakesContainer;