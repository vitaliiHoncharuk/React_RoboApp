import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import rootReducer from './store/reducers/';
import {Provider} from 'react-redux';


const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger, thunkMiddleware));

ReactDOM.render(
    <Provider store={store}>
      <App store={store}/>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
