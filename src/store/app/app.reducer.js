import {REQUEST_ROBOTS_FAILED, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, SET_SEARCH_FIELD} from './constants';


const initialState = {
  searchField : '',
  isPending: false,
  robots: [],
  error: ''
};



export const setSearchFieldReducer = (state = initialState, action) => {
  switch (action.type) {
	case SET_SEARCH_FIELD:
	  return {...state, ...action.payload };
	default:
	  return {...state};
  }
};

export const requestRobotsReducer = (state = initialState, action) => {
  switch (action.type) {
	case REQUEST_ROBOTS_PENDING:
	  return {...state, isPending: true};
	case REQUEST_ROBOTS_SUCCESS:
	  return {...state, robots: action.payload, isPending: false};
	case REQUEST_ROBOTS_FAILED:
	  return {...state, error: action.payload, isPending: false};
	default:
	  return state;
  }
};
