import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Header from '../components/Header';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css'
import connect from 'react-redux/es/connect/connect';
import {setSearchField, requestRobots} from '../store/app/app.action';


const mapStateToProps = (state) => ({
  searchField: state.setSearchFieldReducer.searchField,
  robots: state.requestRobotsReducer.robots,
  isPending: state.requestRobotsReducer.isPending,
  error: state.requestRobotsReducer.error,
});


const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  getRobots: () => dispatch(requestRobots()),
});

class App extends React.Component {
  componentDidMount() {
    this.props.getRobots();
  }

  render() {
    const {searchField, onSearchChange, robots} = this.props;

    const filteredRobots = robots.filter(robot =>
        robot.name.match(new RegExp(searchField,'i'))
    );

    return (
        <div className="tc">
          <Header/>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
