import { push } from 'react-router-redux';
import axios from 'axios';
import { LOGIN_SUCCESS, PRODUCTS_FETCHED, LOGIN_FAIL } from '../constants/ActionTypes';

const BASE_URL = 'http://recruits.siennsoft.com/api';

export function loginSuccess(token) {
  return {
    type: LOGIN_SUCCESS,
    token
  };
}

export function loginFailed(error) {
  return {
    type: LOGIN_FAIL,
    error
  };
}

export function productsFetched(products) {
  return {
    type: PRODUCTS_FETCHED,
    products
  };
}

export function login(credentials) {
  const url = `${BASE_URL}/jwt`;

  const { username, password } = credentials;
  const data = new FormData();
  data.append('username', username);
  data.append('password', password);

  return (dispatch) => {
    axios.post(url, data)
      .then(({data}) => {
        dispatch(loginSuccess(data.access_token));
        dispatch(push('/products'));
      })
      .catch((error) => {
        dispatch(loginFailed(error.response.data));
      });
  };
}

export function fetchProducts(token) {
  const url = `${BASE_URL}/products`;

  return (dispatch) => {
    axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => dispatch(productsFetched(res.data)));
  };
}
