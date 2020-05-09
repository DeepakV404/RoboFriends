import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchFields: '',
        }
    }

 onsearchChange = (event) => {
        this.setState({ searchFields: event.target.value })
       
    }

    render(){
        const filterRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchFields.toLowerCase());
        })
        return(
            <div className= 'tc'>
                <h1>ROBOFRIENDS</h1>
                <SearchBox searchChange = {this.onsearchChange}/>
                <CardList robots= {filterRobots }/>
            </div>
        );
    }
    
}

export default App;