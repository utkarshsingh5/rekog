import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from './SearchBox';
import './App.css';
import './Scroll';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            Searcfield: ""
        }
    }


    onSearchChange = (event) => {
        this.setState({Searcfield: event.target.value})
    }

    render() {
        const {robots,Searcfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(Searcfield.toLowerCase());
        })
        return(
            <div className="tc">
                <h1 className="f1"> Rekog </h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <scroll>
                    <CardList robots={filteredRobots}/>
                </scroll>
            </div>
        );
    }


}
 

export default App;
