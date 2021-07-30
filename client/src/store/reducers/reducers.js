import { combineReducers } from 'redux';
import { REGISTER, LOGIN } from '../actions/actionTypes';

const initialState = { user: localStorage.getItem('user') };

const users = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return { ...state, user: action.payload };
    case LOGIN:
      return { ...state, user: action.payload };
    default:
      return { ...state };
  }
};

export default combineReducers({
  users,
});
