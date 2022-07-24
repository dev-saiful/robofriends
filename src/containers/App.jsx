import React, { Component } from "react";
import CardList from "../copmonents/CardList";
import { robots } from '../robots';
import SearchBox from '../copmonents/SearchBox';
import './App.css';
import Scroll from '../copmonents/Scroll';


class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) =>
    {
        this.setState({ searchfield: event.target.value });
        
        
    }


    render(){
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter((robot) =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        return(
            <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <CardList robots={filteredRobots}/>
            </Scroll>
            </div>
        );
    }
    
}

export default App;