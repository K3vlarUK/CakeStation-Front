import React, { Component } from 'react';

class MyCakesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            favCakes: []
        }
        this.removeFromStorage = this.removeFromStorage.bind(this)
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

    removeFromStorage(key){
        localStorage.removeItem(key)
        alert(key + "Has been removed from your list")
    }

    render() { 
        return ( 
            <div>
                <h2>My Favourite Cakes</h2>
                <div className="favorite-cakes">
                    {this.state.favCakes.map(item => (
                        <div className="favcake-item" key={item.name}>
                            <img src={item.url} alt={item.name} />
                            <p>{item.name}</p>
                            <button type="button" onClick={this.removeFromStorage(item.name)}>Remove from favourites</button>
                        </div>
                    ))}
                </div>
            </div>
         );
    }
}
 
export default MyCakesContainer;