import {REQUEST_ROBOTS_FAILED, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, SET_SEARCH_FIELD} from './constants';

export const setSearchField = (text) => ({ type : SET_SEARCH_FIELD, payload: text });
export const requestRobots = () => (dispatch) => {
  dispatch({type: REQUEST_ROBOTS_PENDING});
  fetch('https://jsonplaceholder.typicode.com/users')
	  .then(res => res.json())
	  .then((data) => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
	  .catch((err) => dispatch({type:REQUEST_ROBOTS_FAILED, payload: err}))
};
