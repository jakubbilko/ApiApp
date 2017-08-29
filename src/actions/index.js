// import axios from 'axios';
import { push } from 'react-router-redux';
import { LOGIN_SUCCESS } from '../constants/ActionTypes';

export function loginSuccess(token) {
  return {
    type: LOGIN_SUCCESS,
    token
  };
}

export function login(credentials) {
  // const url = `${BASE_URL}/jwt`;
  //
  // const request = axios
  console.log(credentials);

  return (dispatch) => {
    dispatch(loginSuccess('123'));
    dispatch(push('/foo'));
  };
}
