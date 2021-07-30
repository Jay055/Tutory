import * as actionTypes from './actionTypes';
import apiService from '../../ApiService';

export const login = (user) => {
  return async (dispatch) => {
    // const data = await apiService.login(user);
    dispatch({
      type: actionTypes.LOGIN,
      payload: JSON.parse(window.localStorage.getItem('user')),
    });
  };
};

export const register = (user) => {
  return async (dispatch) => {
    // const data = await apiService.register(user);
    dispatch({
      type: actionTypes.REGISTER,
      payload: JSON.parse(window.localStorage.getItem('user')),
    });
  };
};

export const logout = () => {
  return async (dispatch) => {
    const data = await apiService.logout();
    dispatch({ type: actionTypes.LOGOUT, payload: data });
  };
};
