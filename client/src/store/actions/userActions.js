import * as actionTypes from './actionTypes';
import apiService from '../../ApiService';

export const login = (user) => {
  return async (dispatch) => {
    const data = await apiService.login(user);
    dispatch({ type: actionTypes.LOGIN, payload: data });
  };
};

export const register = (user) => {
  return async (dispatch) => {
    const data = await apiService.register(user);
    dispatch({ type: actionTypes.REGISTER, payload: data });
  };
};
