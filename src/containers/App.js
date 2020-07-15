import React, { Component } from 'react';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
//import { robots } from '../robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchFields: '',
        }
    }

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users =>{this.setState({robots: users})});
}

 onsearchChange = (event) => {
        this.setState({ searchFields: event.target.value })
       
    }

    render(){
        const { robots, searchFields } = this.state;
        const filterRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchFields.toLowerCase());
        })
        return !robots.length ? 
        <h1>Loading....</h1> : 
            (
              <div className= 'tc'>
                    <h1 className="f1">ROBOFRIENDS</h1>
                    <SearchBox searchChange = {this.onsearchChange}/><br/>
                    <Scroll><br/>
                        <ErrorBoundry>
                            <CardList robots= {filterRobots }/>
                        </ErrorBoundry>
                    </Scroll>
              </div>
            );
            }           
}

export default App;