import {requestRobots} from './requestRobotsReducer.js';
import {searchRobots} from './setSearchFieldReducer.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({requestRobots, searchRobots});

export default rootReducer;
