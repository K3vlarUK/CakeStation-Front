import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateCakeContainer from './CreateCakeContainer';
import MyCakesContainer from './MyCakesContainer';
import Request from '../helpers/request';
import CakeList from '../components/CakeList';
import HomeContainer from './HomeContainer';
import CakeDetails from '../components/CakeDetails';
import CakeEditFormContainer from './CakeEditFormContainer';

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cakes: []
        }
        this.findCakeById = this.findCakeById.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount() {
        const request = new Request();
        request.get('/cakes').then((data) => {
            this.setState({
                cakes: data
            })
        })
    }

    findCakeById(id){
        const cake = this.state.cakes.find((cake) => {
           return cake.id === parseInt(id)
        })
        return cake;
    }
    
    handleDelete(id){
        const request = new Request()
        const url = '/cakes/' + id;
        request.delete(url).then(()=>{
            window.location ='/cakes';
        });
    }

    render() { 
        return ( 
            <Fragment>
                <div className="main-container">
                    <Router>
                        <Switch>
                            <Route exact path="/" component={HomeContainer}/>
                            <Route exact path="/cakes" render={(props) => {
                                return <CakeList cakes={this.state.cakes} />
                            }}/>
                            <Route path="/cakes/mine" component={MyCakesContainer} />
                            <Route path="/cakes/new" component={CreateCakeContainer} />
                            <Route exact path="/cakes/edit/:id" render={(props) => {
                                const id = props.match.params.id;
                                const cake = this.findCakeById(id);
                                return <CakeEditFormContainer cake={cake} />
                            }} />
                            <Route exact path="/cakes/:id" render={(props) => {
                                const id = props.match.params.id;
                                const cake = this.findCakeById(id);
                                return <CakeDetails cake={cake} onDelete={this.handleDelete} />
                            }}/>
                        </Switch>
                    </Router>
                </div>
            </Fragment>
         );
    }
}
 
export default MainContainer;