import React from 'react';
import CardList from '../components/CardList';
import {connect} from 'react-redux';
import {setSearchFieldAction} from '../store/actions/setSearchFieldAction.js';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css'
import {requestRobots} from '../store/actions/requestRobotsAction';


const mapStateToProps = state => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  pending: state.requestRobots.pending,
  error: state.requestRobots.error,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchFieldAction(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots())
});

class App extends React.Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const {searchField, onSearchChange, robots, isPending} = this.props;
    const filteredRobots = robots.filter(robot =>
        robot.name.match(new RegExp(searchField,'i'))
    );
    return isPending ?
        <h1>Loading...</h1> :
        (
        <div className="tc">
          <h1 className="f2">RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
