import { combineReducers } from 'redux';
import { REGISTER, LOGIN } from '../actions/actionTypes';

const users = (state = [], action) => {
  switch (action.type) {
    case REGISTER:
      return action.payload;
    case LOGIN:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  users,
});
