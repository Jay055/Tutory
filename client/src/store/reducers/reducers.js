import { combineReducers } from 'redux';
import { REGISTER, LOGIN, LOGOUT } from '../actions/actionTypes';

// const initialState = { user: localStorage.getItem('user') };
const initialState = { user: JSON.parse(window.localStorage.getItem('user')) };

const users = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return { ...state, user: action.payload };
    case LOGIN:
      return { ...state, user: action.payload };
    case LOGOUT:
      return { ...state, user: null };
    default:
      return { ...state };
  }
};

export default combineReducers({
  users,
});
