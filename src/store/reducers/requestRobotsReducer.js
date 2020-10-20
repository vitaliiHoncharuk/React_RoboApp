import {
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_PENDING
} from '../constants.js'

const initialState = {
  isPending: false,
  robots: [],
  error: ''
};

export const requestRobots = (state = initialState, action = {}) => {
  switch (action.type) {
	case REQUEST_ROBOTS_PENDING:
	  return {...state, isPending: true };
	case REQUEST_ROBOTS_SUCCESS:
	  return {...state, isPending: false, robots: action.payload };
	case REQUEST_ROBOTS_FAILED:
	  return {...state, isPending: false, error: action.payload };
	default:
	  return state;
  }
};
