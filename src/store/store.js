import {combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {setSearchFieldReducer, requestRobotsReducer} from './app/app.reducer';


const rootReducer = combineReducers({setSearchFieldReducer, requestRobotsReducer});

const store = createStore(rootReducer, applyMiddleware(logger, thunkMiddleware));

export default store;
