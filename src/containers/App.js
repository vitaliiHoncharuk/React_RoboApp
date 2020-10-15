import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'
import {robots} from '../robots';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
     robots: robots,
     searchField: ''
   }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((users) => this.setState({robots: users}));
    console.log('check');
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value});
  };

  render() {
    const filteredRobots = this.state.robots.filter(robot =>
        robot.name.match(new RegExp(this.state.searchField,'i'))
    );
    return (
        <div className="tc">
          <h1 className="f2">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
    )
  }
}

export default App;
